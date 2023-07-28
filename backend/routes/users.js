import expres from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";


const router = expres.Router();

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secret", (err) => {
            if (err) return res.json({
                message: "Please Login!"
            })
            next()
        })
    } else {
        res.json({
            message: "Please Login!",
            statusCode: 401
        })
    }

}

router.get("/", async (req, res) => {
    const users = await User.find().select(["-password", "-_id"]);
    res.json(users);
})

router.get("/:username", async (req, res) => {
    const { username } = req.params
    const findUser = await User.findOne({ username: username }).select("-password")
    if (!findUser) return res.status(404).json({ message: "No user found" })

    res.json(findUser)
})

router.post("/register", async (req, res) => {
    const user = req.body
    const findUserByUsername = await User.findOne({ username: user.username });
    const findUserByPhoneNumber = await User.findOne({ phoneNumber: user.phoneNumber });

    if (findUserByUsername) {
        return res.status(400).json({ message: "Username already taken!" });
    }

    if (findUserByPhoneNumber) {
        return res.status(400).json({ message: "Phone number already taken!" });
    }

    const hashP = await bcrypt.hash(user.password, 10);

    const newUser = new User({ ...user, password: hashP })
    newUser.save()
    res.status(201).json({ message: "Account Created Successfully!" })
})


router.post("/login", async (req, res) => {
    const { password, phoneNumber } = req.body
    const user = await User.findOne({ phoneNumber: phoneNumber })
    if (!user) return res.status(400).json({ message: "User doesn't exist!" })
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(403).json({
            message: "Username or Password not currect!"
        })
    }

    const token = jwt.sign({ id: user.type }, "secret");

    res.status(200).json(
        {
            token,
            name: user.name,
            phone: user.phoneNumber,
            userId: user._id,
            username: user.username,
            usertype: user.type,
            message: "Login Successfully!"
        }
    )
})

router.patch("/:username", auth, async (req, res) => {
    const user = req.body;
    const { username } = req.params;
    if (user.username !== username) return res.status(400).json({
        message: "Username can't be changed"
    });
    try {
        if (user.password) {
            const hashP = await bcrypt.hash(user.password, 10);
            user.password = hashP
        }

        const updatedUser = await User.updateOne(
            { username: username },
            { ...user }
        );

        if (updatedUser.n === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.delete("/:username", async (req, res) => {
    const { username } = req.params;
    const user = await User.deleteOne({ username: username })
    if (!user) return res.status(400).json({ message: "User password not matched!" })
    else return res.status(200).json({ message: "User deleted!" })
})

export default auth;
export { router as userRouter }
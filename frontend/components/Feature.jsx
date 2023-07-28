import { MdClass } from "react-icons/md"
import { FaUserShield } from "react-icons/fa"
import { AiOutlineTeam, AiOutlineFieldTime } from "react-icons/ai"

const Feature = () => {
    return (
        <div className="py-20" >
            <div className="grid lg:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl md:text-6xl text-center lg:text-left mb-2">A wide view <br /> in YOU</h2>
                    <p className="text-sm">Enroll today to take your time to the best! <br /> Best Summer Camp Learning School</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><MdClass className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Class structure</h3>
                        <p>MusicFrame is a music school that offers a wide range of music classes for students of all ages and levels.</p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><AiOutlineFieldTime className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Time planning</h3>
                        <p>
                            Time maintaining is the most important thing in our school. We always try to maintain our time.
                        </p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><AiOutlineTeam className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Best Team</h3>
                        <p>
                            We have the best team in our school. They are very friendly and helpful. They always try to help our students.
                        </p>
                    </div>
                    <div>
                        <button className="w-24 h-24 rounded-lg bg-primary/20 flex justify-center items-center"><FaUserShield className="text-4xl" /></button>
                        <h3 className="text-xl my-2 font-semibold text-primary">Best Instructors</h3>
                        <p>
                            We have the best instructors in our school. They are very friendly and helpful. They always try to help our students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
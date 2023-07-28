import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children, handleOpen }) => {
    const router = useRouter();

    return (
        <Link href={href}

            onClick={handleOpen}
            className={
                router.pathname === href ? "text-[#08A5EB]" : ""
            }
        >
            {children}
        </Link>
    );
};

export default ActiveLink;

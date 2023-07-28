import Link from "next/link"
import Layout from "."
const HeroSection = () => {
    return (
        <div className="bg-gradient-to-l py-5 min-h-screen flex items-center to-teal-400/30 from-indigo-600/40">
            <Layout>
                <div className="text-center grid md:grid-cols-2 justify-between items-center">
                    <div className="text-left md:pr-20">
                        <h1 className="mb-5 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-4xl md:text-7xl font-bold font-oswald">Get your Fantasi E.Device!</h1>
                        <p className="mb-5">New launched Fantasi E.Device with <span className="text-[#08A5EB]">4GB RAM</span> and <span className="text-[#08A5EB]">64GB ROM</span>. Get your Fantasi E.Device now!</p>
                        <button className="btn-primary">
                            <Link href={'/register'}>
                                Order Now
                            </Link>
                        </button>
                    </div>
                    <div className="relative mt-4 sm:mt-0 flex justify-center">
                        <img
                            className="mt-10 md:mt-0 w-auto md:w-[70%] p-5 shadow-2xl"
                            src="/carousel1.png"
                            alt="banner image"
                        />
                        <div className="-z-10 bg-gradient-to-br to-teal-400 via-emerald-500 from-indigo-600 top-16 w-[40%] h-[70%] absolute rounded-full blur-[50px]"></div>
                    </div>
                </div >
            </Layout >
        </div >
    )
}

export default HeroSection
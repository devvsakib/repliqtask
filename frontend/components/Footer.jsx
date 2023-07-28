import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-[#171717]">
      <div className='max-w-[1280px] mx-auto px-8'>
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img className="w-44 mb-2" src="/logo.png" alt="FantasiStore" />
            <p className="text-white/70 font-barlow">
                Who don't love to buy new things? We are here to provide you the best products.
            </p>
          </div>
          <div>
            <h2 className="footerTitle">Explore</h2>
            <ul className="flex flex-col gap-5 text-white/80 font-barlow">
              <li>About Company</li>
              <li>Meet The Team</li>
              <li>News & Media</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="footerTitle">Contact</h2>
            <p className="text-white/70 font-barlow">
              66 Road Broklyn Street, 600 New York, USA
            </p>
            <ul className="font-semibold flex mt-5 gap-2 md:gap-5">
              <li className="footerIcon"><FaTwitter /></li>
              <li className="footerIcon"><FaFacebook /></li>
              <li className="footerIcon"><FaDiscord /></li>
              <li className="footerIcon"><FaInstagram /></li>
            </ul>
          </div>
          <div>
            <h2 className="footerTitle">Newsletter</h2>
            <p className="text-white/70 font-barlow">
              Subsrcibe for our upcoming latest articles and news resources.
            </p>
            <div className="mt-4">
              <input type="text" placeholder="Enter Email Address" className="outline-none w-9/12 p-3 bg-teal-400/30 text-white" />
              <button className="text-[#0A0A0A] bg-[#08A5EB] p-3">GO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#111111]">
        <p className="text-center text-white">© Copyright {new Date().getFullYear()} by FantasiStore</p>
      </div>
    </footer>
  )
}

export default Footer
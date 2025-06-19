import { FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 relative overflow-hidden">

      <div className="flex flex-col items-center gap-4 lg:gap-6 absolute lg:relative left-4 lg:left-0 top-6 lg:top-0">
        <span className="transform -rotate-90 text-sm tracking-widest">@williamrey</span>
        <div className="flex flex-col gap-4 text-xl">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </div>
        <div className="w-px h-16 bg-black hidden lg:block mt-4" />
      </div>

      <div className="flex-1 flex flex-col items-start justify-center mt-32 lg:mt-0 text-left">
        <h1 className="text-xl_title lg:text-xxl_title font-semibold leading-tight">
          Trusted <span className="bg-black text-white px-2 py-1 rounded-md">Partner</span> for
          <br />
          Your Website <span className="bg-black text-white px-2 py-1 rounded-md">Develop.</span>
        </h1>
          <div className="">
                <p className="mt-6  max-w-lg">
                Building the world's best marketing websites for over a decade.
                <br />
                Your trusted partner for strategy, design, and dev.
              </p>
             
              <Button title="Schedule a Call" icon={ <FaPhoneAlt />}/>
          </div>
      </div>
      

      <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute right-0 top-20 w-96 h-96 bg-gradient-to-tr from-lime-300 via-green-200 to-transparent rounded-full blur-3xl opacity-60" />
      </div>
    </section>
  );
}

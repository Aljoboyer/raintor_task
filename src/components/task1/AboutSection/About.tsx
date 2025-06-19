import { FaArrowDown } from "react-icons/fa";

const companyLogos = [
  { name: "Awwwards", className: "bg-black text-white", rotate: "-rotate-6" },
  { name: "facebook", className: "bg-white", rotate: "rotate-3" },
  { name: "CSS Winner", className: "bg-white", rotate: "-rotate-3" },
  { name: "CSSDesignAwards", className: "bg-white", rotate: "rotate-2" },
  { name: "/thoughtworks", className: "bg-white", rotate: "-rotate-2" },
  { name: "AUTODESK", className: "bg-white", rotate: "rotate-1" },
];

export default function AboutSection() {
  return (
    <section className="relative px-6 lg:px-24 py-20 bg-white overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-300 blur-[140px] opacity-60" />
      </div>

      
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        
        <button className="flex items-center gap-2 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          <FaArrowDown size={12} />
          About
        </button>


        <h2 className="text-4xl lg:text-6xl font-semibold leading-tight">
          I’ve been <span className="bg-black text-white px-3 py-1 rounded-md">Developing</span><br />
          Websites since <span className="bg-black text-white px-3 py-1 rounded-md">2013</span>
        </h2>

  
        <p className="text-gray-700 max-w-xl text-base lg:text-lg">
          We start every new client interaction with an in-depth discovery call where we get
          to know each other and recommend the best course of action.
        </p>

 
        <div className="mt-12 w-full">
          <p className="text-sm font-bold mb-6 text-left lg:text-center">PREVIOUSLY WORKED ON</p>
          <div className="flex flex-wrap justify-center gap-4">
            {companyLogos.map((company, idx) => (
              <div
                key={idx}
                className={`px-5 py-2 rounded-full border border-black shadow-sm ${company.className} ${company.rotate} text-sm font-medium`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

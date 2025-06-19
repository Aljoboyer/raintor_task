import React from 'react'

export default function Footer() {
  return (
<footer className="bg-black text-white py-12 footer mx-2 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
        <div className="flex flex-col md:flex-row justify-between  mb-10">
            <div className='w-full md:w-1/3 mt-0 md:mt-7'>
                <p className="text-main text-lg_title font-extrabold text-center ">DEVLOP.ME</p>
            </div>

            <div className='w-full md:w-2/3'>
                   <h1 className="text-xl_title md:text-xl_title font-bold mb-6  text-center md:text-center ">
                    As you <span className="text-gray-400">can</span>
                    </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                
                    <div>
                        <p className="text-gray-400 font-semibold mb-2">Say hello</p>
                        <p>HELLO@DEVLOP.ME.COM</p>
                        <p>MAHBUBUL@ME.COM</p>
                    </div>
                    
                    <div>
                        <p className="text-gray-400 font-semibold mb-2">Call</p>
                        <p>+784549 4981 00</p>
                        <p>+8845 0100 211</p>
                    </div>
                    
                    <div>
                        <p className="text-gray-400 font-semibold mb-2">Menu</p>
                        <ul className="space-y-1">
                        <li><a href="#" className="hover:text-main">HOME</a></li>
                        <li><a href="#" className="hover:text-main">ABOUT</a></li>
                        <li><a href="#" className="hover:text-main">PORTFOLIO</a></li>
                        <li><a href="#" className="hover:text-main">BLOG</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <p className="text-gray-400 font-semibold mb-2">Social</p>
                        <ul className="space-y-1">
                        <li><a href="#" className="hover:text-main">TWITTER</a></li>
                        <li><a href="#" className="hover:text-main">INSTAGRAM</a></li>
                        <li><a href="#" className="hover:text-main">FACEBOOK</a></li>
                        <li><a href="#" className="hover:text-main">BEHANCE</a></li>
                        <li><a href="#" className="hover:text-main">DRIBBBLE</a></li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
            
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-6">
            <p className="mb-2 md:mb-0">© develop.me 2025</p>
            <p className="font-bold">BESNIK</p>
            <p className="mt-2 md:mt-0"><a href="#" className="hover:text-white">PRIVACY</a> - <a href="#" className="hover:text-white">TERMS</a></p>
            </div>
        </div>
</footer>

  )
}

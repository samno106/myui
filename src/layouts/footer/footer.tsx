import { Facebook, LinkedIn, X, YouTube, YoutubeSearchedFor } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Logo } from "../../components";


const Footer = () => {
    return (
      <>
      <div className="px-5 md:px-20 ">
          <div className="px-5 py-10 bg-white flex items-center space-x-3">
            <h3 className="text-xl font-[600]">Follow us</h3>
            <div className="flex items-center space-x-2">
                <IconButton>
                    <LinkedIn sx={{
                        color:"#374151"
                    }}/>
                </IconButton>
                <IconButton>
                    <X sx={{
                        color:"#374151"
                    }}/>
                </IconButton>
                <IconButton>
                    <Facebook sx={{
                        color:"#374151"
                    }}/>
                </IconButton>
            </div>
          </div>
          <div className="bg-gray-200">
         
          </div>
        </div>
      <footer className="w-full bg-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
            
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                <div className="block">
                    <h4 className="text-md text-gray-600 font-[600] mb-7">
                        MYUI
                    </h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-4"><a href="javascript:;"  className="text-gray-600 hover:underline">Home</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">About</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Pricing</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Features</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-600 hover:underline">Pro Version</a></li>
                    </ul>
                </div>
           
                <div className="block">
                    <h4 className="text-md text-gray-600 font-[600] mb-7">Products</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-4"><a href="javascript:;"  className="text-gray-600 hover:underline">Figma UI System</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Icons Assets</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Responsive Blocks</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Components Library</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-600 hover:underline">Plugin Guide</a></li>
                    </ul>
                </div>
              
                <div className="block">
                    <h4 className="text-md text-gray-600 font-[600] mb-7">Resources</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-4"><a href="javascript:;"  className="text-gray-600 hover:underline">FAQs</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Quick Start</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Documentation</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">User Guide</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-600 hover:underline">Plugin Guide</a></li>
                    </ul>
                </div>
                
                <div className="block">
                    <h4 className="text-md text-gray-600 font-[600] mb-7">Support</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-4"><a href="javascript:;"  className="text-gray-600 hover:underline">Customer Support</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Cookies</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">License</a></li>
                        <li className="mb-4"><a href="javascript:;"  className=" text-gray-600 hover:underline">Terms & Conditions</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-600 hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
          
            <div className="py-7 border-t border-gray-300 text-sm">
                <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                    <a href="https://pagedone.io/"  className="flex justify-center ">
                    <Logo/>
                            
                    </a>
                    <span className="text-gray-400  block">©
                    <a href="https://pagedone.io/">MYUI</a> 2024, All rights reserved.</span>
                    <div></div>
                </div>
            </div>
        </div>
    </footer>
        
      </>
    );
  };
  
  export default Footer;
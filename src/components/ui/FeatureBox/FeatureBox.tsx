import { Lock } from "@mui/icons-material";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureBoxProps {
    icon:any;
    title:string;
    desc:string;
}
const FeatureBox:React.FC<FeatureBoxProps> = ({icon, title, desc}) => {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
         <div>{icon}</div> 
          <h2 className="text-xl font-[600] mb-2 mt-4 text-center">{title}</h2>
          <p className="text-center">{desc}</p>
          <Link to={"#"} className="hover:underline flex items-center space-x-2 text-blue-500 my-2 font-[500]">
            <span>Learn more</span>
            <ChevronRight className="w-5 h-5"/>
          </Link>
        </div>
      </>
    );
  };
  
  export default FeatureBox;
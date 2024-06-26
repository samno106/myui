import { File, FilePen, FileSpreadsheet, GraduationCap, Lock, Map } from "lucide-react";
import { FeatureBox } from "../../components";
import React from "react";
import { FileOpen } from "@mui/icons-material";



const Feature = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-[600] text-center">Additional resources</h2>
        <div className="grid grid-cols-3 gap-8 py-[50px]">
        <FeatureBox icon={<Lock className="w-[45px] h-[45px]"/>} title="Microsoft Security" desc="Learn about the latest Microsoft Security solutions."/>
        <FeatureBox icon={<File className="w-[45px] h-[45px]"/>} title="Azure updates" desc="Learn about important Azure product updates, roadmap, and announcements."/>
        <FeatureBox icon={<Map className="w-[45px] h-[45px]"/>} title="Dynamics 365 and Microsoft Power Platform" desc="See what will be available in the next wave of product updates."/>
        <FeatureBox icon={<FileSpreadsheet className="w-[45px] h-[45px]"/>} title="Microsoft documentation" desc="In-depth articles on Microsoft developer tools and technologies."/>
        <FeatureBox icon={<FilePen className="w-[45px] h-[45px]"/>} title="Microsoft 365 Blog" desc="Get the latest Microsoft 365 news."/>
        <FeatureBox icon={<GraduationCap className="w-[45px] h-[45px]"/>} title="Microsoft Learn" desc="Select a learning path or module to continue your Microsoft 365 readiness journey."/>
        </div>
      </div>
    </>
  );
};

export default Feature;
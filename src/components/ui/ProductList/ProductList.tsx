"use client";
import React from "react";
import { Mail, Message, Share } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ChevronDown } from "lucide-react";


interface ProductProps {
    id:string;
    title:string;
    desc:string;
}

const ProductList:React.FC<ProductProps> = ({
    id,title,desc
  })  => {

  const [expanded, setExpanded] = React.useState<string | false>('');
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <>
      <div className="w-full bg-white">
      <Accordion sx={{
        borderRadius:0,
       
      }}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary sx={{
        borderRadius:0,
        paddingLeft:3,
        paddingRight:3
       
      }} expandIcon={<ChevronDown />} aria-controls="panel1d-content" id="panel1d-header">
          <div className="flex items-center">
          <Typography variant="h6" sx={{
            fontSize:16,
            fontWeight:700
          }} minWidth="90ch" maxWidth="90ch">{title}</Typography>
            <div>
                <div className="flex items-center">
                    <span className="font-[600]">Preview Available:</span>
                    <span>August 2021</span>
                </div>
                <div className="flex items-center">
                    <span className="font-[600]">Rollout Start:</span>
                    <span>July 2023</span>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{
        borderRadius:0,
        paddingLeft:3,
        paddingRight:3
      }}>
          <Typography maxWidth="80ch">
           {desc}
          </Typography>
          <ul className="my-3">
            <li><strong>Feature ID:</strong> 88909</li>
            <li><strong>Added to roadmap:</strong> 2/10/2022</li>
            <li><strong>Last modified:</strong> 9/15/2023</li>
            <li><strong>Product(s):</strong> Outlook</li>
            <li><strong>Cloud instance(s):</strong> Worldwide (Standard Multi-Tenant)</li>
          </ul>
          
        </AccordionDetails>
      </Accordion>
      </div>
    </>
  );
};

export default ProductList;
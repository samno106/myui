import React, { Component } from "react";
import Hero from "../../layouts/hero/hero";
import Filter from "../../layouts/filter/filter";
import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import { ProductList } from "../../components";
import Feature from "../../layouts/feature/feature";

const HomePage = () => {

  const products:{id:string; title:string; desc:string}[] = [
    {
      id:"p1",
      title:"Microsoft Purview compliance portal: Information Protection - | Maintain label and protection when import data to PowerBI (Web and Desktop)",
      desc:"This feature is for PowerBI creators who import data to PowerBI datasets or PowerBI Desktop files from Excel files applied with sensitivity label and/or Synapse, SQL databases that are classified with sensitivity labels. By default, PowerBI datasets and PBIX files will automatically inherit the sensitivity label from the source if perquisite conditions are met."
    },
    {
      id:"p2",
      title:"Outlook: Add apps and use them inside Outlook",
      desc:"Apps built for Teams can also run in Outlook now. Outlook users will be able to acquire and use these updated Teams apps (with personal tabs and/or search-based message extensions) without leaving Outlook."
    },
    {
      id:"p1",
      title:"Microsoft Purview compliance portal: Information Protection - | Maintain label and protection when import data to PowerBI (Web and Desktop)",
      desc:"This feature is for PowerBI creators who import data to PowerBI datasets or PowerBI Desktop files from Excel files applied with sensitivity label and/or Synapse, SQL databases that are classified with sensitivity labels. By default, PowerBI datasets and PBIX files will automatically inherit the sensitivity label from the source if perquisite conditions are met."
    },
    {
      id:"p2",
      title:"Outlook: Add apps and use them inside Outlook",
      desc:"Apps built for Teams can also run in Outlook now. Outlook users will be able to acquire and use these updated Teams apps (with personal tabs and/or search-based message extensions) without leaving Outlook."
    },
    {
      id:"p1",
      title:"Microsoft Purview compliance portal: Information Protection - | Maintain label and protection when import data to PowerBI (Web and Desktop)",
      desc:"This feature is for PowerBI creators who import data to PowerBI datasets or PowerBI Desktop files from Excel files applied with sensitivity label and/or Synapse, SQL databases that are classified with sensitivity labels. By default, PowerBI datasets and PBIX files will automatically inherit the sensitivity label from the source if perquisite conditions are met."
    },
    {
      id:"p2",
      title:"Outlook: Add apps and use them inside Outlook",
      desc:"Apps built for Teams can also run in Outlook now. Outlook users will be able to acquire and use these updated Teams apps (with personal tabs and/or search-based message extensions) without leaving Outlook."
    },
    {
      id:"p1",
      title:"Microsoft Purview compliance portal: Information Protection - | Maintain label and protection when import data to PowerBI (Web and Desktop)",
      desc:"This feature is for PowerBI creators who import data to PowerBI datasets or PowerBI Desktop files from Excel files applied with sensitivity label and/or Synapse, SQL databases that are classified with sensitivity labels. By default, PowerBI datasets and PBIX files will automatically inherit the sensitivity label from the source if perquisite conditions are met."
    },
    {
      id:"p2",
      title:"Outlook: Add apps and use them inside Outlook",
      desc:"Apps built for Teams can also run in Outlook now. Outlook users will be able to acquire and use these updated Teams apps (with personal tabs and/or search-based message extensions) without leaving Outlook."
    }
  ];

  const [sortDate, setSortDate] = React.useState('1');
  const [sortNew, setSortNew] = React.useState('1');

  const handleChangeDate = (event: SelectChangeEvent) => {
    setSortDate(event.target.value);
  };
  const handleChangeNewest = (event: SelectChangeEvent) => {
    setSortNew(event.target.value);
  };

    return (
      <>
        <Hero />
        <Filter />
        <div className="bg-gray-100 md:px-20 px-5 min-h-screen pb-20">
          <div className="py-3 flex items-center justify-end mt-3">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={sortDate}
                onChange={handleChangeDate}
                sx={{
                  height:40,
                  background:"#ffffff",
                  borderRadius:0
                }}
              >
                <MenuItem value={1}>Sort by preview date</MenuItem>
                <MenuItem value={2}>Sort by rollout date</MenuItem>
          
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={sortNew}
                onChange={handleChangeNewest}
                sx={{
                  height:40,
                  background:"#ffffff",
                  borderRadius:0,
                }}
              >
                <MenuItem value={1}>Newest to oldest</MenuItem>
                <MenuItem value={2}>Oldest to newest</MenuItem>
          
              </Select>
            </FormControl>
          </div>

          <div>
            <ul className="space-y-3">
              {
                products.map((product,index)=>(
                  <li key={index}>
                    <ProductList id={product.id} title={product.title} desc={product.desc}/>
                  </li>
                ))
              }
              
            </ul>
            <div className="py-10 flex justify-center">
              <Pagination count={10} shape="rounded" size="large" />
            </div>
            <div className="py-10 mt-20">
              <Feature/>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default HomePage;
import { Search } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, Menu, OutlinedInput } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";

const Filter = () => {

  const checkboxs:{name:string; value:string}[] =[
    {
      name:"Access",
      value:"access"
    },
    {
      name:"Microsoft Teams",
      value:"Microsoft Teams"
    },
    {
      name:"Microsoft Defender for Cloud Apps",
      value:"Microsoft Teams"
    },
    {
      name:"Project",
      value:"Microsoft Teams"
    },
    {
      name:"Access",
      value:"access"
    },
    {
      name:"Microsoft Teams",
      value:"Microsoft Teams"
    },
    {
      name:"Microsoft Defender for Cloud Apps",
      value:"Microsoft Teams"
    },
    {
      name:"Project",
      value:"Microsoft Teams"
    },
    {
      name:"Access",
      value:"access"
    },
    {
      name:"Microsoft Teams",
      value:"Microsoft Teams"
    },
    {
      name:"Microsoft Defender for Cloud Apps",
      value:"Microsoft Teams"
    },
    {
      name:"Project",
      value:"Microsoft Teams"
    },
    {
      name:"Access",
      value:"access"
    },
    {
      name:"Microsoft Teams",
      value:"Microsoft Teams"
    },
    {
      name:"Microsoft Defender for Cloud Apps",
      value:"Microsoft Teams"
    },
    {
      name:"Project",
      value:"Microsoft Teams"
    },
  ];
  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openId, setOpenId] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setOpenId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <div className="w-full h-[150px] flex items-start px-5 md:px-20 py-10">
        <div className="px-5 w-[30%]">
          <h3 className="text-2xl font-semibold">Search for a specific item:</h3>
          <FormControl sx={{ mt: 5, width: '100%'}} variant="outlined" >
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            placeholder="Search by feature ID or keyword"
            sx={{ padding:0, border:"1px solid #000000", borderRadius:0}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Search/>
                </IconButton>
              </InputAdornment>
            }
            className="h-[35px] !text-xs !border-gray-400"
          />
        </FormControl>
        </div>
        <div className="px-3 border-l border-gray-500 w-[70%] pb-5">
          <h3 className="text-2xl font-semibold">Filter the items below:</h3>
          <div className="grid grid-cols-4 gap-4 mt-5">
            <div className="w-full">
              <button type="button" 
              id={"dropdown-product"}
              aria-controls={
                open ? "dropdown-product" : undefined
              }
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, "dropdown-product")}
              className="rounded-none px-2 py-1.5 border border-gray-500 w-full flex items-center justify-between">
                <span>Product</span>
                <ChevronDown className="w-5 h-5"/>
              </button>

              <Menu
                id="dropdown-product"
                MenuListProps={{
                  "aria-labelledby": "dropdown-product",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.10))",
                    mt: 0.2,
                    width: checkboxs.length > 4 ? "100%" : "auto",
                    padding: 0,
                    background: "#ffffff",
                    border: "1px solid #e1e1e1",
                    borderRadius: "0",
                  },
                }}
                transformOrigin={{
                  horizontal: "left",
                  vertical: "top",
                }}
                anchorOrigin={{
                  horizontal: "left",
                  vertical: "bottom",
                }}
              >
                <div className="w-full p-2  bg-white">
                  <ul className="w-full grid grid-cols-4 grap-8">
                    {checkboxs.map((checkbox, i) => (
                      <li key={i} className="px-5 !text-[10px]">
                        <FormControlLabel sx={{
                          fontSize:5,
                          color:"gray",
                        }} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} label={checkbox.name} /> 
                      </li>
                    ))}
                
                  </ul>
                </div>
              </Menu>
            </div>

            <div className="w-full">
              <button type="button" 
              id={"dropdown-release"}
              aria-controls={
                open ? "dropdown-release" : undefined
              }
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, "dropdown-release")}
              className="rounded-none px-2 py-1.5 border border-gray-500 w-full flex items-center justify-between">
                <span>Release Phase</span>
                <ChevronDown className="w-5 h-5"/>
              </button>
              
              <Menu
                id="dropdown-release"
                MenuListProps={{
                  "aria-labelledby": "dropdown-release",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.10))",
                    mt: 0.2,
                    width:  "auto",
                    padding: 0,
                    background: "#ffffff",
                    border: "1px solid #e1e1e1",
                    borderRadius: "0",
                  },
                }}
                transformOrigin={{
                  horizontal: "left",
                  vertical: "top",
                }}
                anchorOrigin={{
                  horizontal: "left",
                  vertical: "bottom",
                }}
              >
                <div className="w-full p-2  bg-white">
                  <ul className="w-full grid grid-cols-2 grap-8">
                    {checkboxs.map((checkbox, i) => (
                      <li key={i} className="px-5 !text-[10px]">
                        <FormControlLabel sx={{
                          fontSize:5,
                          color:"gray",
                        }} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} label={checkbox.name} /> 
                      </li>
                    ))}
                
                  </ul>
                </div>
              </Menu>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

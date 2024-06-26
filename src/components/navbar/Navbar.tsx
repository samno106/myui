"use client";

import {
  Button,
  Fade,
  FormControl,
  Menu,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Logo, Profile } from "..";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import React from "react";
import Popover from "@mui/material/Popover";
import { cn } from "../../lib/utils";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const menus: {
    name: string;
    route: string;
    dropdown: boolean;
    subMenus: {
      name: string;
      route: string;
      isMulti: boolean;
      items: {
        name: string;
        route: string;
      }[];
    }[];
  }[] = [
    {
      name: "Products",
      route: "#",
      dropdown: true,
      subMenus: [
        {
          name: "For home",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
        {
          name: "For business",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
        {
          name: "For enterprise",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
        {
          name: "Apps and services",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
        {
          name: "More",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
        {
          name: "What’s new",
          route: "#",
          isMulti: true,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
      ],
    },
    {
      name: "Plans and price",
      route: "#",
      dropdown: false,
      subMenus: [],
    },
    {
      name: "Resources",
      route: "#",
      dropdown: true,
      subMenus: [
        {
          name: "",
          route: "#",
          isMulti: false,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
      ],
    },
    {
      name: "Support",
      route: "#",
      dropdown: true,
      subMenus: [
        {
          name: "",
          route: "#",
          isMulti: false,
          items: [
            {
              name: "Pricing for Home",
              route: "#",
            },
            {
              name: "For families",
              route: "#",
            },
            {
              name: "For individuals",
              route: "#",
            },
            {
              name: "For students",
              route: "#",
            },
            {
              name: "See all home",
              route: "#",
            },
          ],
        },
      ],
    },
    {
      name: "Try for free",
      route: "#",
      dropdown: false,
      subMenus: [],
    },
  ];

  const [openSearch, setOpenSearch] = useState(false);

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

  function onOpenSearch(val: boolean) {
    setOpenSearch(val);
  }
  return (
    <div className=" px-2 md:px-[50px] border-b border-gray-300 bg-white flex items-center">
      {/* logo */}
      <Logo />
      {/* logo */}

      {/* menu */}
      {openSearch === false ? (
        <div className="flex justify-between items-center w-full">
          {/* base menu */}
          <div className="px-5 h-[53px]">
            <ul className="flex space-x-8 ">
              {menus.map((menu, index) =>
                menu.dropdown === true ? (
                  <li key={index}>
                    <button
                      type="button"
                      id={"dropdown-menu-" + (index + 1)}
                      aria-controls={
                        open ? "dropdown-menu-" + (index + 1) : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, menu.name)}
                      className="flex items-center justify-start space-x-2 hover:border-b-2 border-gray-500  py-4 focus:outline-none"
                    >
                      <Typography
                        noWrap
                        sx={{
                          color: "#10110D",
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                      >
                        {menu.name}
                      </Typography>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {menu.subMenus.length > 0 && openId === menu.name ? (
                      <Menu
                        id={"dropdown-menu-" + (index + 1)}
                        MenuListProps={{
                          "aria-labelledby": "dropdown-menu-" + (index + 1),
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
                            width: menu.subMenus.length > 4 ? "100%" : "auto",
                            padding: 0,
                            background: "#f3f4f6",
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
                        <div className="w-full p-2  bg-gray-100">
                          <ul className="w-full flex items-start justify-between space-x-10">
                            {menu.subMenus.map((submenu, i) => (
                              <li key={i} className="px-5">
                                {submenu.isMulti ? (
                                  <span className="text-[13px] font-semibold">
                                    {submenu.name}
                                  </span>
                                ) : (
                                  ""
                                )}

                                <ul
                                  className={cn(
                                    " pb-3 space-y-5",
                                    submenu.isMulti ? "pt-5" : "pt-0"
                                  )}
                                >
                                  {submenu.items.map((item, key) => (
                                    <li key={key} className="text-[12px]">
                                      <Link
                                        to={item.route}
                                        className="hover:underline"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Menu>
                    ) : (
                      ""
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={menu.route}
                      className="flex items-center justify-start space-x-2 hover:border-b-2 border-gray-500  py-4"
                    >
                      <Typography
                        noWrap
                        sx={{
                          color: "#10110D",
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                      >
                        {menu.name}
                      </Typography>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* base menu */}

          {/* profile */}
          <div className="w-full">
            <ul className="flex items-center justify-end space-x-8">
              <li>
                <button
                  type="button"
                  id={"dropdown-menu"}
                  aria-controls={open ? "dropdown-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(e) => handleClick(e, "All Microsoft")}
                  className="flex items-center justify-start space-x-2 hover:border-b-2 border-gray-500  py-4 focus:outline-none"
                >
                  <Typography
                    noWrap
                    sx={{
                      color: "#10110D",
                      textDecoration: "none",
                      fontSize: "13px",
                    }}
                  >
                    All Microsoft
                  </Typography>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {menus[0].subMenus.length > 0 && openId === "All Microsoft" ? (
                  <Menu
                    id={"dropdown-menu"}
                    MenuListProps={{
                      "aria-labelledby": "dropdown-menu",
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
                        width: menus[0].subMenus.length > 4 ? "100%" : "auto",
                        padding: 0,
                        background: "#f3f4f6",
                        border: "1px solid #e1e1e1",
                        borderRadius: "0",
                      },
                    }}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <div className="w-full p-2  bg-gray-100">
                      <ul className="w-full flex items-start justify-between space-x-10">
                        {menus[0].subMenus.map((submenu, i) => (
                          <li key={i} className="px-5">
                            {submenu.isMulti ? (
                              <span className="text-[13px] font-semibold">
                                {submenu.name}
                              </span>
                            ) : (
                              ""
                            )}

                            <ul
                              className={cn(
                                " pb-3 space-y-5",
                                submenu.isMulti ? "pt-5" : "pt-0"
                              )}
                            >
                              {submenu.items.map((item, key) => (
                                <li key={key} className="text-[12px]">
                                  <Link
                                    to={item.route}
                                    className="hover:underline"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Menu>
                ) : (
                  ""
                )}
              </li>

              <li className="flex items-center justify-start space-x-2 ">
                <button type="button" onClick={(e) => onOpenSearch(true)}>
                  <Search className="w-4 h-4" />
                </button>
              </li>

              <li className="flex items-center justify-start space-x-2 ">
                <button type="button">
                  <Profile />
                </button>
              </li>
            </ul>
          </div>
          {/* profile */}
        </div>
      ) : (
        <div className="flex items-center ">
          <FormControl sx={{ m: 1, width: "100ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              className="h-[35px] !text-xs !border-gray-400"
            />
          </FormControl>

          <Button
            variant="outlined"
            onClick={() => onOpenSearch(false)}
            className="!text-xs !py-2 !border-gray-400 !text-gray-500"
          >
            Cancel
          </Button>
        </div>
      )}

      {/* menu */}
    </div>
  );
};

export default Navbar;

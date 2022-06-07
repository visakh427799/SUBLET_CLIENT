import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import UserNavbar from "../Components/userNavbar";
import Button from "@mui/material/Button";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function Appartment() {
  return (
    <div>
      <UserNavbar />

      <div>
        <div class="grid grid-cols-6 gap-5 p-20 ">
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">Hotel Ravis</div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    New York
                  </div>
                  <div class="text-xs text-gray-600">• By 7th corner</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                src="https://teja8.kuikr.com//r1/20190604/ak_556_72395540-1559639859_700x700.png"
              />
            </div>

            <div class="mb-5 border-t border-gray-50">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
              <div
                style={{ width: "140px", margin: "auto", marginTop: "10px" }}
              >
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  View details
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">Instant Pot Beef Stew</div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    Manhattan
                  </div>
                  <div class="text-xs text-gray-600">• By Shines</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                src="https://is1-2.housingcdn.com/4f2250e8/997cae147b07011ef9bf8e599da4362c/v0/fs.jpeg"
              />
            </div>

            <div class="mb-5 border-t border-gray-100">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">Baked Spaghetti</div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    Las Vegas
                  </div>
                  <div class="text-xs text-gray-600">• By Moonlight</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover "
                src="https://www.kcchomes.com/wp-content/uploads/2021/10/grand.jpg"
              />
            </div>

            <div class="mb-5 border-t border-gray-100">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-6 gap-5 p-20 ">
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">
                  Garlic Butter Steak Bites
                </div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    New York
                  </div>
                  <div class="text-xs text-gray-600">• By 7th corner</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                src="https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/10/1.Free-Apartment-interior-design--tobiarchitects--architect.1525960960.7883.jpg"
              />
            </div>

            <div class="mb-5 border-t border-gray-50">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">Instant Pot Beef Stew</div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    Manhattan
                  </div>
                  <div class="text-xs text-gray-600">• By Shines</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                src="https://amazingarchitecture.com/storage/739/The-Angel-Empire-by-YODEZEEN-Amazing-Architecture.jpg"
              />
            </div>

            <div class="mb-5 border-t border-gray-100">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
            <div class="flex flex-row px-2 py-3 mx-3">
              <div class="flex flex-col mt-1 mb-2 ml-4">
                <div class="text-sm text-gray-600">Baked Spaghetti</div>
                <div class="flex w-full mt-1">
                  <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                    Las Vegas
                  </div>
                  <div class="text-xs text-gray-600">• By Moonlight</div>
                </div>
              </div>
            </div>

            <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
              <img
                class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover "
                src="http://www.caandesign.com/wp-content/uploads/2015/07/Apartment-Kiev-05.jpg"
              />
            </div>

            <div class="mb-5 border-t border-gray-100">
              <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Sales:<div class="ml-1 text-gray-500 text-ms"> 30k</div>
                </div>
                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
                  Recipies: <div class="ml-1 text-gray-500 text-ms"> 60k</div>
                </div>
                <div class="flex mb-2 mr-4 text-gray-700 ">
                  Customers: <div class="ml-1 text-gray-500 text-ms"> 120k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appartment;

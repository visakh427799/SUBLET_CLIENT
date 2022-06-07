import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function Auditoriam() {
  return (
<div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
          >
          SUBLET 
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  
    <div>
    <div class="grid grid-cols-6 gap-5 p-20 ">
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Garlic Butter Steak Bites</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        New York
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By 7th corner
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                src="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-50">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Instant Pot Beef Stew</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        Manhattan
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By Shines
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                src="https://images.unsplash.com/photo-1588865198054-c83788106132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-100">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Baked Spaghetti</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        Las Vegas
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By Moonlight
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover "
                                src="https://image.shutterstock.com/z/stock-photo-front-view-of-luxury-auditorium-interior-with-empty-white-screen-modern-conference-hall-with-rows-1912599628.jpg"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-100">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
    
                </div>      
                </div>
                <div>
    <div class="grid grid-cols-6 gap-5 p-20 ">
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Garlic Butter Steak Bites</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        New York
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By 7th corner
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                src="https://thumbs.dreamstime.com/b/conference-hall-7641763.jpg"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-50">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Instant Pot Beef Stew</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        Manhattan
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By Shines
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                                src="https://mohali.ptu.ac.in/Uploads/132399916017795465.jpg"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-100">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                    <div
                        class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
                        <div class="flex flex-row px-2 py-3 mx-3">
    
                            <div class="flex flex-col mt-1 mb-2 ml-4">
                                <div class="text-sm text-gray-600">Baked Spaghetti</div>
                                <div class="flex w-full mt-1">
                                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                                        Las Vegas
                                    </div>
                                    <div class="text-xs text-gray-600">
                                        • By Moonlight
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400">
                            <img class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover "
                                src="https://cache.marriott.com/marriottassets/marriott/BLRHB/blrhb-boardroom-8104-hor-feat.jpg"/>
    
                        </div>
    
                        <div class="mb-5 border-t border-gray-100">
                            <div class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                        class="ml-1 text-gray-500 text-ms"> 30k</div>
                                </div>
                                <div class="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                        class="ml-1 text-gray-500 text-ms"> 60k</div>
                                </div>
                                <div class="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                        class="ml-1 text-gray-500 text-ms"> 120k</div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
    
                </div>      
                </div>
                </div>
  
              
  )
  
  }


export default Auditoriam

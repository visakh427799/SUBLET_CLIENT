import React from 'react'
import VendorNavbar from "../../Components/vendorNavbar"
import {useState,useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
import axios from 'axios'

function AddRentals() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

   
    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false);
        };
       
    const [appartment,setAppartment] =useState({
        name:"",
        photo:"",
        address:"",
        no_rooms:"",
        city:"",
        pincode:"",
        street:"",
        rate:"",
        google_map_url:"",
    })

    const handleChange=(e)=>{
       setAppartment({...appartment,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        setOpen(true)
        let vendor_id=localStorage.getItem('vendor_id')
        axios.post('http://localhost:5000/vendor/add-appartment',{appartment,vendor_id}).then((resp)=>{
            if(resp.data.success){
                setOpen(false);
                Toast.fire({
                    icon: "success",
                    title: "Appartment added",
                  });
            }else{
                setOpen(false);
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong...!!",
                  });
            }

        })
        

    }
  return (
    <div>
        <VendorNavbar/>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
     
        <div className="mt-10 sm:mt-0" >
            <h6 style={{textAlign:"center",color:"blue",fontWeight:"10px"}}>ADD APARTMENT</h6>
        <div style={{width:"1000px",height:"500px",marginLeft:"340px",marginTop:"40px"}}  >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Apartment name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        id="first-name"
                        autoComplete="given-name"
                        className="pt-2 pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Rate
                      </label>
                      <input
                        type="number"
                        name="rate"
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                       Google map location
                      </label>
                      <input
                        type="text"
                        name="google_map_url"
                        onChange={handleChange}
                        id="first-name"
                        autoComplete="given-name"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        No:of Rooms
                      </label>
                      <input
                        type="number"
                        name="no_rooms"
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Image url
                      </label>
                      <input
                        type="text"
                        name="photo"
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}

                        id="street-address"
                        autoComplete="street-address"
                        className="pt-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={handleChange}
                        id="city"
                        autoComplete="address-level2"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Street
                      </label>
                      <input
                        type="text"
                        name="street"
                        onChange={handleChange}
                        id="region"
                        autoComplete="address-level1"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        onChange={handleChange}
                        id="postal-code"
                        autoComplete="postal-code"
                        className="pt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
               
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>  
      </div>
 
    </div>
  )
}

export default AddRentals
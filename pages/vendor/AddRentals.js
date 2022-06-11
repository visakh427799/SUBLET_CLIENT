import React from 'react'
import VendorNavbar from "../../Components/vendorNavbar"
import {useState,useEffect} from 'react'
import {useRouter}  from 'next/router'
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
       const router =useRouter()
    const [appartment,setAppartment] =useState({
        name:"",
        photo:"",
        address:"",
        phone:"",
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

    
      if(appartment.name=="" ||appartment.photo=="" || 
      appartment.address==""||appartment.no_rooms==""||appartment.street==""||
      appartment.city==""||appartment.pincode==""||appartment.rate==""||
      appartment.phone==""||appartment.google_map_url==""
      ){
        console.log(appartment);
        Toast.fire({
          icon: "error",
          title: "Please fill all fields...!!",
        });
      }
      else{
        setOpen(true)
        let vendor_id=localStorage.getItem('vendor_id')
        axios.post('http://localhost:5000/vendor/add-appartment',{appartment,vendor_id}).then((resp)=>{
            if(resp.data.success){
                setOpen(false);
                Toast.fire({
                    icon: "success",
                    title: "Appartment added",
                  });
                  setAppartment({
                    name:"",
                    photo:"",
                    address:"",
                    phone:"",
                    no_rooms:"",
                    city:"",
                    pincode:"",
                    street:"",
                    rate:"",
                    google_map_url:"",
                })
            }else{
                setOpen(false);
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong...!!",
                  });
            }

        })

      }
        

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
      
     
        <div className="mt-10 sm:mt-0" style={{  
  backgroundImage: "url(" + "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
   <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-white pt-4">ADD APPARTMENT</h3>
   <div class="flex space-x-2 justify-center mt-2">
    <span onClick={()=>{router.push('/vendor/AddRentals')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Add Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyRentals')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">My Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyCustomers')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">My Customers</span>
    
  </div>
        <div style={{width:"1000px",height:"500px",marginLeft:"340px",marginTop:"20px"}}  >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="mt-3 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md"  >
                <div className="px-4 py-5 bg-white sm:p-6" style={{backgroundColor:"#ededed"}}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Apartment name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={appartment.name}
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
                        value={appartment.rate}
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                       Google map location
                      </label>
                      <input
                        type="text"
                        name="google_map_url"
                        value={appartment.google_map_url}
                        onChange={handleChange}
                        id="first-name"
                        autoComplete="given-name"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        value={appartment.phone}
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        No:of Rooms
                      </label>
                      <input
                        type="number"
                        name="no_rooms"
                        value={appartment.no_rooms}
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Image url
                      </label>
                      <input
                        type="text"
                        name="photo"
                        value={appartment.photo}
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={appartment.address}
                        onChange={handleChange}

                        id="street-address"
                        autoComplete="street-address"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={appartment.city}
                        onChange={handleChange}
                        id="city"
                        autoComplete="address-level2"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Street
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={appartment.street}
                        onChange={handleChange}
                        id="region"
                        autoComplete="address-level1"
                        className="pt-2  pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <input
                        type="number"
                        name="pincode"
                        value={appartment.pincode}
                        onChange={handleChange}
                        id="postal-code"
                        autoComplete="postal-code"
                        className="pt-2 pb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
        <div style={{height:"20px"}}>

        </div>
      </div>
 
    </div>
  )
}

export default AddRentals
import React from 'react'
//import UserNavbar from '../Components/userNavbar'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import VendorNavbar from '../../Components/vendorNavbar'
function vendorProfile() {
  const [vendor, setVendor] = useState()
  const router =useRouter();
  
  useEffect(() => {
   
    
      
      let vendor_id=localStorage.getItem("vendor_id");

      if(vendor_id){

        axios.post('http://localhost:5000/vendor/getVendor',{vendor_id}).then((resp) => {
          if (resp.data.success) {
            setVendor(resp.data.vendor)
            
          }
  
        }).catch((err) => {
  
        })
      }
      else{
         router.push('/signin')
      }
  
  

  },[])

  

  return (
    <div>
        <VendorNavbar/>
        {
          vendor?
          <div>
          <div class="text-center pt-2">
          {/* <img
            // src={`http://localhost:5000/user_images/${user.dat2.photo}`}
            src={user.dat2.photo}
            class="rounded-lg w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          */}
          <h5 class="text-xl font-medium leading-tight mb-2">{vendor.name}</h5>
          {/* <p class="text-gray-500"> <Stack direction="row" spacing={2}>
           <Avatar
        alt="Remy Sharp"
        src={user.dat2.photo}
        sx={{ width: 56, height: 56 }}
      /></Stack></p> */}
      {
        vendor.is_approved?
          <div class="flex space-x-2 justify-center">
    <span onClick={()=>{router.push('/vendor/AddRentals')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Add Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyRentals')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">My Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyCustomers')}} class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">My Customers</span>
    
  </div>:
   <div className="overflow-hidden" style={{width:"600px",margin:"auto"}}>
   <div class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
 <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
</svg>
You are almost there , but your profile is not approved 
 
 

  
 
</div>
   </div>
      }
        </div>
  
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pl-8 " style={{width:"600px",margin:"auto",marginTop:"30px"}}>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Vendor Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-blue-500">Personal details and other iformatios.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-black-500 sm:mt-0 sm:col-span-2">
              <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full"> {vendor.name}</span>
               
                </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{vendor.email}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Approval status </dt>
              <dd>
              {
                 vendor.is_approved==true?
<span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Approved</span>:
<span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">Pending</span>


             }</dd>
            </div>
          

           
          </dl>
        </div>
      </div>
      </div>:
       <div class="text-center pt-2">
        <div class="loader"></div>
       <h5 class="text-xl font-medium leading-tight mb-2"></h5>
       <p class="text-gray-500"></p>
      <div class="flex space-x-2 justify-center">
      
      </div>
     </div>
      
      //
  
        }
       
    </div>
  )
}

export default vendorProfile
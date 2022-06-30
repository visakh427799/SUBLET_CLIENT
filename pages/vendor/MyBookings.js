import React from 'react'
import Vendornavbar from '../../Components/vendorNavbar'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
function MyBookings() {

   const [bookings,setBookings]=useState([])
   const [totalBookings,setTotalBookings]=useState(0)
   const [totalActiveBookings,setTotalActiveBookings]=useState(0)
   const [totalAmount,setTotalAmount]=useState(0)
   
   const router =useRouter()
    useEffect(()=>{
         let v_id=localStorage.getItem('vendor_id')
         axios.post("http://localhost:5000/vendor/getBookings",{v_id}).then((resp)=>{
            if(resp.data.success){
               setBookings(resp.data.bookings)
               let b=resp.data.bookings
               setTotalBookings(b.length)
               let count1=0
               let amount=0

               b.map((item)=>{
                  if(item.no_days_left!==0){
                      count1++;
                  }
                  amount=amount+item.total_price;
                  
               })
               setTotalActiveBookings(count1)
               setTotalAmount(amount)
              
            }
             console.log(resp.data.success);
          }
         )
    },[])
  return (
    <div>
        <Vendornavbar/>

        <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-black-600 pt-4">MY RENTALS</h3>
        <div class="flex space-x-2 justify-center mt-2">
    <span onClick={()=>{router.push('/vendor/AddRentals')}} class="px-4 py-2 rounded-full text-white bg-blue-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-blue-500 transition duration-300 ease">Add Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyRentals')}} class="px-4 py-2 rounded-full text-white bg-blue-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-blue-500 transition duration-300 ease">My Rentals</span>
    <span onClick={()=>{router.push('/vendor/MyBookings')}} class="px-4 py-2 rounded-full text-white bg-blue-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-blue-500 transition duration-300 ease">My Customers</span>
    
  </div>
        <div className="flex flex-col" style={{margin:"50px"}}>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 m-6" >
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               User id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Appartment id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date from
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date to
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               No days
              </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Total price
              </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               Payement status
               </th>

               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 Vacated
               </th>
               {/* <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               
               </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               
               </th> */}
  
            </tr>
          </thead>
          <tbody>
            {
                bookings.length>0?bookings.map((b)=>{
                    return(
                        <tr className="bg-white border-b">
             
            
             {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={b.photo}
                                    // alt={b.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
            </div>
              </td> */}
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {b.user_id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {b.appartment_id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {new Date(b.date_from).toDateString()}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {new Date(b.date_to).toDateString()}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {b.no_days}
              </td>
              {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a style={{color:"blue"}} href={b.google_map_url}>View in Map</a>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {b.phone}
              </td> */}
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {b.total_price}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {
                 b.payment_status==true?
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Paid</span>:
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">Not paid</span>


             }
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {
                b.no_days_left==0?
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Yes</span>:
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">No</span>

             }
              </td>
              
             


             
             
            </tr >
                    )
                }):<></>
            }
            
          </tbody>
        </table>

        <div class="flex space-x-2 justify-center mt-2">
        <span
    class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">Total Bookings 
                <span class=" ml-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">{totalBookings}</span>
    
    </span>
 <span
    class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">Total active bookings
                <span class=" ml-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">{totalActiveBookings}</span>
    
    </span>
    <span
    class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">Total amount
                <span class=" ml-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">{totalAmount}</span>
    
    </span>
    
  </div>
      </div>
      {
          bookings.length==0?<div class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
          No bookings to show
        </div>:<></>
        }
    </div>
  </div>
</div>


    </div>
  )
}

export default MyBookings
import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
function Bookings() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
    const [rentals,setRentals]=useState([])
    const[approved,setApproved]=useState(false)
    useEffect(()=>{
       axios.get('http://localhost:5000/admin/getAllrentals').then((resp)=>{
            if(resp.data.success){
                setRentals(resp.data.data)
                console.log(resp.data.data);
            }
       }).catch(()=>{

       })

    },[approved])

    // const handleApprove=(v_id)=>{
     
    //   axios.post("http://localhost:5000/admin/approve",{v_id}).then((resp)=>{
    //     if(resp.data.success){
    //       console.log(resp.data.success);
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Approved...!!'
    //       })
    //       setApproved(!approved)
    //     }
    //     else{
    //       console.log(resp.data.success);

    //     }

    //   }).catch((err)=>{
    //     Toast.fire({
    //       icon: 'error',
    //       title: 'Something went wrong...!!'
    //     })
    //   })

    // }
    // const handleCancel=(v_id)=>{
     
    //     axios.post("http://localhost:5000/admin/cancel",{v_id}).then((resp)=>{
    //       if(resp.data.success){
    //         console.log(resp.data.success);
    //         Toast.fire({
    //           icon: 'success',
    //           title: 'Cancelled...!!'
    //         })
    //         setApproved(!approved)
    //       }
    //       else{
    //         console.log(resp.data.success);
  
    //       }
  
    //     }).catch((err)=>{
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Something went wrong...!!'
    //       })
    //     })
  
    //   }
  return (
    <div>
        <AdminNavbar/>
   <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-black-600 pt-4">Bookings</h3>

   <div className="flex flex-col" style={{marginLeft:"50px",marginRight:"50px"}}>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 m-2" >
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              {/* <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              
              </th> */}
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               User id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Vendor id
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Date From
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
               Date To
              </th>
              
              
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 No:of Days
              </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 No: of Days left
               </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 Total price
               </th>
               <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 Payment status
               </th>
  
            </tr>
          </thead>
          <tbody>
            {
                rentals.length>0?rentals.map((rent)=>{
                    return(
                        <tr className="bg-white border-b">
             
            
             {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={rent.photo}
                                    // alt={rent.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
            </div>
              </td> */}
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.user_id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.vendor_id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.date_from}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.date_to}
              </td>
              {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a style={{color:"blue"}} href={rent.google_map_url}>View in Map</a>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.phone}
              </td> */}
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.no_days}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.no_days_left}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {rent.total_price}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {
                 rent.payment_status==true?
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Paid</span>:
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">Not paid</span>


             }
              </td>
              {/* <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">EDIT </button>
               
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">VIEW BOOKINGS </button>
               
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">DELETE </button>
               
              </td> */}
             
            </tr >
                    )
                }):<></>
            }
            
          </tbody>
        </table>

        
      </div>
      {
          rentals.length==0?<div class="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
          No rentals to show
        </div>:<></>
        }
    </div>
  </div>
</div>
    </div>
  )
}

export default Bookings
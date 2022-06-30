import React from 'react'
import  UserNavbar from '../Components/userNavbar'
import {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

let toDay=Date.now();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Rental() {
  

    const [rentals,setRentals]=useState([])

    useEffect(()=>{
         let user_id=localStorage.getItem('user_id')
         axios.post("http://localhost:5000/user/my-rentals",{user_id}).then((resp)=>{
            if(resp.data.success){
                setRentals(resp.data.data)
                console.log(resp.data.data);  
            }
         })
    },[])
  
    const Toast = Swal.mixin({
    toast: true,
    position: "bottom-left",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });


    
  return (
    <div>
        <UserNavbar/>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pl-8 " style={{width:"800px",margin:"auto",marginTop:"30px"}}>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">My Rentals 
          <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-700 text-white rounded-full ml-1">{rentals.length}</span>

          </h3>
        </div>
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl" style={{width:"700px",margin:"auto",marginTop:"40px"}}>
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        {/* <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title> */}
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            // onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {rentals.length>0?rentals.map((itm,ky) =>{
                                  
                                 
                              return(
                                <li  className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={itm.a.photo}
                                    // alt={itm.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a> {itm.a.name} </a>
                                      </h3>
                                      <p className="ml-4">Rs.{itm.a.price}/day</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{itm.a.address}</p>
                                    <p className="mt-1 text-sm text-gray-500">{itm.a.city}</p>
                                    <p className="mt-1 text-sm text-gray-500">From :{new Date(itm.r.date_from).toDateString()}</p>
                                    <p className="mt-1 text-sm text-gray-500">To :{new Date(itm.r.date_to).toDateString()}</p>

                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm mt-3">
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-700 text-white rounded-full">{"No:of Days"+" : "+itm.r.no_days}</span>
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-700 text-white rounded-full">{"No:of Days Left"+" : "+itm.r.no_days_left}</span>

                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-800 text-white rounded-full">{"Total price"+" : "+itm.r.total_price}</span>
                                  {
                                    itm.r.payment_status?
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-800 text-white rounded-full">paid</span>
                                     :
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-800 text-white rounded-full">not paid</span>

                                  }
                                    <div className="flex">
                                      {/* <button
                                        onClick={()=>{handleRemove(itm._id)}}
                                        className="font-medium text-indigo-600 hover:text-red-500"
                                      >
                                        cancel
                                      </button> */}
                                    </div>
                                                  </div>
                                        <div style={{width:"200px",margin:"auto",marginTop:"50px"}}>
                                          
                                    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" >Cancel</button>
                                          </div>                        
                                </div>
                              </li>
                              )
                            }
                            
                            
                            
                             
                            ):
   <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-blue-600 pt-4 pb-4 mb-4">YOUR HAVE NO RENTALS TO SHOW </h3>

                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                   
                  </div>
      </div>

         

    </div>
  )
}

export default Rental
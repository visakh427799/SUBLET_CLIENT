import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Usernavbar from '../Components/userNavbar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
function Cart() {
  const router =useRouter()
  const [items,setItems]=useState([])
  const [updated,setUpdated]=useState(false)
  useEffect(()=>{
    let u_id=localStorage.getItem('user_id')
    if(u_id){
      axios.post('http://localhost:5000/user/getCartItems',{u_id}).then((resp)=>{
        if(resp.data.success){
          setItems(resp.data.items)
        }
      })
    }
    else{
      //push
      router.push('/signin')

    }
  },[updated])
  let total=0;

  const handleRemove=(c_id)=>{
      let u_id=localStorage.getItem('user_id')
      axios.post("http://localhost:5000/user/removeFromCart",{c_id,u_id}).then((resp)=>{
        if(resp.data.success){
        setUpdated(!updated)
        }
      })
  }
  return (
    <div>
      <Usernavbar/>
   <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-blue-600 pt-4">MY CART</h3>
        
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
                            {items.length>0?items.map((itm) =>{
                                  
                                  total=total+itm.price
                              return(
                                <li  className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={itm.photo}
                                    // alt={itm.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a> {itm.name} </a>
                                      </h3>
                                      <p className="ml-4">Rs.{itm.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{itm.address}</p>
                                    <p className="mt-1 text-sm text-gray-500">{itm.city}</p>

                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm mt-3">
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-700 text-white rounded-full">{"No:of Rooms"+" : "+itm.no_rooms}</span>
                                  {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">{"Location"+" : "+itm.city}</span> */}
                                  
                                    <div className="flex">
                                      <button
                                        onClick={()=>{handleRemove(itm._id)}}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                      </div>
            <div style={{width:"200px",margin:"auto",marginTop:"50px"}}>
              
        <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Book Now</button>
              </div>                        
                                </div>
                              </li>
                              )
                            }
                            
                            
                            
                             
                            ):
   <h3 class="font-medium leading-tight text-center text-2xl mt-0  text-blue-600 pt-4">YOUR CART IS EMPTY</h3>

                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Rs.{total}</p>
                      </div>
                      
                    </div>
                  </div>
                  
    </div>
  )
}

export default Cart
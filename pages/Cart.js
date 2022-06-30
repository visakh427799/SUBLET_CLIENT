import React from 'react'

import Usernavbar from '../Components/userNavbar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {useRouter} from 'next/router'
import toDate from 'date-fns/toDate';
import Swal from 'sweetalert2'


 




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

function Cart() {
  const router =useRouter()
  const [dateFrom, setDateFrom] = React.useState(new Date());
  const [dateTo, setDateTo] = React.useState(new Date());
  
  const handleChangeDateFrom = (newValue) => {
    setDateFrom(newValue);
  };

  const handleChangeDateTo = (newValue) => {
    setDateTo(newValue);
  };
  
  const [items,setItems]=useState([])
  const [open, setOpen] = React.useState(false);
  const [final,setFinal]=useState(false)
  const [d,setD]=useState(0)
  const [ap,setAp]=useState({});
  const [cart_id,setCart_id]=useState("")
  const [totalPrice,setTotalPrice]=useState(0)
  const handleClickOpen = (ky,id) => {
    setAp(items[ky])
    setCart_id(id)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  },[updated,final])
  let total=0;

  const handleRemove=(c_id)=>{
      let u_id=localStorage.getItem('user_id')
      axios.post("http://localhost:5000/user/removeFromCart",{c_id,u_id}).then((resp)=>{
        if(resp.data.success){
        setUpdated(!updated)
        }
      })
  }
 
  
  const handleClickBook =()=>{
    console.log(ap);

   console.log(dateFrom);
   console.log(dateTo);
   var Difference_In_Time = dateTo.getTime() - dateFrom.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log(Math.round(Difference_In_Days));
let diff=Math.round(Difference_In_Days)+1
console.log(diff);
if(diff-1<=0){
  Toast.fire({
    icon: "warning",
    title: " Invalid date combination",
  });

}
else{

  setD(diff)
  setTotalPrice(d*ap.price)
  setOpen(false)
  setFinal(true)
}
  }


  const handleBack=()=>{
    setOpen(true)
    setFinal(false)
  }

  const bookAppartment=()=>{
    let user_id=localStorage.getItem("user_id")
    console.log(cart_id);
    axios.post('http://localhost:5000/user/book-appartment',{dateFrom,dateTo,ap,user_id,d,cart_id}).then((res)=>{
       if(res.data.success){

        setOpen(false)
        setFinal(false)
        Toast.fire({
          icon: "success",
          title: " Booked successfully",
        });
        router.push("/Rentals")
       }
       else{
        Toast.fire({
          icon: "warning",
          title: " Something went wrong",
        });
       }
    })
  }
  return (
    <div>
      <Usernavbar/>

      <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose the date"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <div style={{width:"200px",marginTop:"20px"}}>
        <DesktopDatePicker
          label="Date from"  
          inputFormat="MM/dd/yyyy"
          value={dateFrom}
          onChange={handleChangeDateFrom}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
        <div style={{width:"200px",marginTop:"20px"}}>

<DesktopDatePicker
          label="Date to"
          inputFormat="MM/dd/yyyy"
          value={dateTo}
          onChange={handleChangeDateTo}
          renderInput={(params) => <TextField {...params} />}
        />

        </div>
        <div style={{ width:"120px",paddingTop:"30px",margin:"auto"}}>
         <button type="button" 
        class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleClickBook}>Book Now</button>

        </div>
       
      </Stack>
    </LocalizationProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>


      <Dialog
        open={final}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <DialogTitle id="alert-dialog-title">
          {"Book"}
        </DialogTitle>
        <DialogContent>
        <div className="h-27 w-27 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={ap?ap.photo:""}
                                    // alt={itm.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a> {ap?ap.name:""} </a>
                                      </h3>
                                      <p className="ml-4">Rs.{ap?ap.price:""}/day</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{ap?ap.address:""}</p>
                                    <p className="mt-1 text-sm text-gray-500">{ap?ap.city:""}</p>

                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm mt-3">
                                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap?ap align-baseline font-bold bg-blue-700 text-white rounded-full">No:of Rooms:{" "+ap?ap.no_rooms:""}</span>
         <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-700 text-white rounded-full">{"No:of Days"+" : "+d}</span> 
                                  
 <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-700 text-white rounded-full">{"Total prize"+" : "+(d*ap.price)}</span>
                                  
                                    <div className="flex">
                                     
                                    </div>
                                                  </div>
                                        <div style={{width:"200px",margin:"auto",marginTop:"50px"}}>
                                          
                                          </div>                        
                                </div>
          <DialogContentText id="alert-dialog-description">
 {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-700 text-white rounded-full">{"No:of Days"+" :"+d}</span> */}

            </DialogContentText>
            </DialogContent>
             

            <DialogActions>
          <Button onClick={handleBack}>BACK</Button>
          <button 
          
          onClick={bookAppartment}
          type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" >Book Now</button>

        </DialogActions>
      </Dialog>
    </div>

      
   <h3 class="font-medium leading-tight text-center text-xl mt-0  text-blue-600 pt-4">MY CART
   <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-700 text-white rounded-full">{items.length}</span>

   </h3>
        
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
                            {items.length>0?items.map((itm,ky) =>{
                                  
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
                                      <p className="ml-4">Rs.{itm.price}/day</p>
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
                                          
                                    <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{handleClickOpen(ky,itm._id)}}>Book Now</button>
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
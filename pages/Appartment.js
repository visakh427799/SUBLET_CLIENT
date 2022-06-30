import React from 'react'
import  UserNavbar from '../Components/userNavbar'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
//import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Swal from 'sweetalert2'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Appartment() {
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


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
    const [appartments,setAppartments]=useState([])
  
    const router = useRouter()
    
    useEffect(()=>{

      let u_id=localStorage.getItem('user_id')
      // if(u_id){
        axios.get('http://localhost:5000/user/getallAppartments').then((resp)=>{
          if(resp.data.data){
             setAppartments(resp.data.data)
              console.log(resp.data.data);
          }
     }).catch((err)=>{
         console.log(err);

     })

      // }
      // else{
      //   router.push('/signin')
      // }


      
    },[])
      
     
        const [expanded, setExpanded] = React.useState(false);
        const [open, setOpen] = React.useState(false);
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

        const handleChange=(e)=>{

              let input=e.target.value;
              axios.post('http://localhost:5000/user/searchByloc',{input}).then((resp)=>{
                setAppartments(resp.data.data)
                
           })

        }
        const addTocart=(a_id)=>{
          let u_id=localStorage.getItem('user_id')
          if(u_id){

            axios.post('http://localhost:5000/user/addTocart',{u_id,a_id}).then((resp)=>{
              if(resp.data.success){
                Toast.fire({
                  icon: "success",
                  title: " Added to cart successfully",
                });
              }
  
            })
          }
          else{
            router.push('/signin')
          }
    
        }
       

        const handleClose =()=>{
            setOpen(false)
        }
        const handleExited = () => {
           
          };
  return (
    <div>
        <UserNavbar/>
        <div>
   <h3 class="font-medium leading-tight text-center text-xl mt-0  text-blue-600 pt-4">APPARTMENTS

   </h3>

           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-2">
           <div className="max-w-md w-full space-y-8 w-80">
         
           <input
                  id="pasword"
                  onChange={handleChange}
                  
                  required
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Search appartments by location..."
            />
             <h5 class="font-medium leading-tight text-center text-xl mt-0  text-blue-600 ">
   <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-700 text-white rounded-full ml-5">{appartments.length +" "+"results found"}</span>
             

</h5>

            </div>
            </div>    
        </div>
        {/* <div className="container mx-auto max-w-full mt-2 ml-4 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 mt-1"> */}
         <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-18 sm:px-2 lg:max-w-7xl lg:px-2">

        <div className="mt-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
            appartments.map((d)=>{
                return(
  //                   <Card sx={{ maxWidth: 300 ,marginTop:"10px" }}>
  //     <CardHeader
  //       avatar={
  //         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={d.photo}>
          
  //         </Avatar>
  //       }
  //       action={
  //         <IconButton aria-label="settings">
  //           <MoreVertIcon />
  //         </IconButton>
  //       }
  //       title={d.name}
        
  //     />
  //     <CardMedia
  //       component="img"
  //       height="150"
  //       image={d.photo}
  //       alt="Paella dish"
  //     />
  //     <CardContent>
  //     <div class="flex space-x-2 justify-center">
  //   <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-400 text-white rounded">{d.city}</span>
  //   <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-400 text-white rounded">{d.price +" Rs"}</span>
  //   <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded">{d.no_rooms+ " Rooms"}</span>
    
  // </div>
  
       
  //     </CardContent>
  //     <CardActions disableSpacing>
      
  //     <Stack direction="row" spacing={2}>
  //       {
  //         d.is_booked? <Button variant="outlined" >
  //        Booked
  //       </Button>:<>
  //     <Button variant="outlined" >
  //       View
  //     </Button>
  //     <Button variant="outlined" onClick={()=>{addTocart(d._id)}} >
  //       Add to cart
  //     </Button></>
  //       }
      
  //   </Stack>
  //     </CardActions>
  //     <Collapse in={expanded} timeout="auto" unmountOnExit>
  //       <CardContent>
         
  //       </CardContent>
  //     </Collapse>
  //   </Card>
  <div className="group relative">
  <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none">
    <img
      src={d.photo}
      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
    />
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-lg text-black-700">
        <a href={d.href}>
        <p className="text-base font-semibold text-gray-900">  {d.name}</p>
        <p className="mt-1 text-sm text-gray-500">{d.city}</p>
        {/* <p className="mt-1 text-sm text-gray-500">{"added by" +""+d.vendor_id}</p> */}

        
        </a>
      </h3>
      <span onClick={()=>{addTocart(d._id)}} class="text-xs inline-block py-2 px-3.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">Add to cart</span>

    </div>
    <p className="mt-1 text-lg font-medium text-gray-900">Rs.{d.price}/-</p>

  </div>
</div>
                )
            })
        }
        </div>
        </div>
         
        </div>

    </div>
  )
}

export default Appartment
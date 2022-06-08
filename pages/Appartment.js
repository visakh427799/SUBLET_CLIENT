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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Appartment() {


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
       axios.get('http://localhost:5000/user/getallAppartments').then((resp)=>{
            if(resp.data.data){
               setAppartments(resp.data.data)
                console.log(resp.data.data);
            }
       }).catch((err)=>{
           console.log(err);

       })

    },[])
      
     
        const [expanded, setExpanded] = React.useState(false);
        const [open, setOpen] = React.useState(false);
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

        // const handleChange=(e)=>{

        //       let input=e.target.value;
        //       axios.post('http://localhost:5000/searchDoctorBySpec',{input}).then((resp)=>{
        //         setDoctors(resp.data.data)
        //         console.log(doctors);
        //    })

        // }
        
       

        const handleClose =()=>{
            setOpen(false)
        }
        const handleExited = () => {
           
          };
  return (
    <div>
        <UserNavbar/>
        <div>
           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-2">
           <div className="max-w-md w-full space-y-8 w-80">
         
           <input
                  id="pasword"
                  // onChange={handleChange}
                  
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Search appartments by location..."
            />
            </div>
            </div>    
        </div>
        <div className="container mx-auto max-w-full mt-5 ml-4 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 mt-4">
        {
            appartments.map((d)=>{
                return(
                    <Card sx={{ maxWidth: 300 ,marginTop:"10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={d.photo}>
          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={d.name}
        subheader={d.specialization}
      />
      <CardMedia
        component="img"
        height="150"
        image={d.photo}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" >
        View
      </Button>
      <Button variant="contained"  >
        Add to cart
      </Button>
    </Stack>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
        </CardContent>
      </Collapse>
    </Card>

                )
            })
        }
        </div>
        </div>
         
        

    </div>
  )
}

export default Appartment
import React from 'react'
import {useState,useEffect} from 'react'
import UserNavbarHome from '../Components/userNavbarHome'
import UserNavbar from '../Components/userNavbar'
function home() {

  const [user,setUser]=useState(false)

  useEffect(()=>{
    let user_id=localStorage.getItem("user_id")
    if(user_id){
      setUser(true)
 
    }
   },[])


  return (
    <div>
      {
      user?
      <UserNavbar/>:
         <UserNavbarHome/>

    }
   
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {/*<polygon points="50,0 100,0 50,100 0,100" />*/}
          </svg>
    
          <div>
            
          
            
            <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                  </div>
                  <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
    
                  
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Signin</a>
    
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Signup</a>
                </div>
                {/* <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </a> */}
              </div>
            </div>
          </div>
    
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">SUBLET  </span>
               {/* <span className="block text-indigo-600 xl:inline">Rent a Room</span>*/}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">We help finding Houses,Apartments,Halls for rent</p>
              
              <div className="mt-3 sm:mt-5 sm:flex sm:justify-center lg:justify-start">
              
                <div className="rounded-md shadow">
                
                  <a href="/Categories" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> 
                Explore  </a>
                  
                </div>
              
                
              </div>
            </div>
          </main>
          
        </div>
      </div>
      
     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/1 mt-10" style={{marginRight:"50px",marginTop:"100px",borderRadius:"3px"}}>
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://wallpapercave.com/wp/wp8466031.jpg" alt=""/>
    </div>


      {/*<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-12">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
</div>*/}

      {/* <div>
        <h4 className="ml-8 mt-5 tracking-tight font-extrabold text-gray-700 sm:text-2xl md:text-2xl">What would you like to do today</h4>
      </div> */}
     
    </div>
   {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/1 mt-10" >
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://wallpapercave.com/wp/wp8466031.jpg" alt=""/>
      </div>*/}
   

    </div>
 
    
  )
}

export default home

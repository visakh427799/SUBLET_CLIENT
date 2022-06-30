import React from "react";
import NavbarSignin from "../Components/navbarSignin";
import { LockClosedIcon } from "@heroicons/react/solid";
import Dropdown from "../Components/dropdown";
import { Fragment, useState, useRef,useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";
import axios from "axios";



import { useRouter } from "next/router";

function signin() {
  const router = useRouter();


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

  const [user, setUser] = useState({
    email: "",
    password: "",
    usertype:""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (user.email == "" || user.password == "" || user.usertype=="") {
      Toast.fire({
        icon: "error",
        title: "Please fill all the fields...!!",
      });
    } else {

      if(user.usertype=="user"){

        axios.post("http://localhost:5000/user/signin", user).then((resp) => {
          if (resp.data.success) {
            Toast.fire({
              icon: "success",
              title: "Logged in successfully",
            });
            localStorage.setItem("user_id", resp.data.user_id);
            router.push("/Categories");
          } else {
            Toast.fire({
              icon: "error",
              title: resp.data.message,
            });
          }
        });
     
      }
      else if(user.usertype=="admin"){
        if (user.email == "admin@gmail.com" && user.password == "admin"){
          router.push("/admin/allUsers");
        }
        else{
          Toast.fire({
            icon: "error",
            title: "invalid credentials",
          });
        }
      }
      else{
        axios.post("http://localhost:5000/vendor/signin", user).then((resp) => {
          if (resp.data.success) {
            Toast.fire({
              icon: "success",
              title: "Logged in successfully",
            });
            localStorage.setItem("vendor_id", resp.data.vendor_id);
            router.push("/vendor/VendorProfile");
          } else {
            Toast.fire({
              icon: "error",
              title: resp.data.message,
            });
          }
        });

      }
    }
      
  };

  return (
    <div>
      
      <NavbarSignin />

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 w-80">
          <div>
            <h2 className="mt-6 text-center text-3xl  text-gray-900">
              Sign in{" "}
            </h2>
          </div>
          <div className="mt-8 space-y-6 ">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className=" mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div></div>
            </div>
            <div class="flex justify-center">
                <div class="mt-4 xl:w-96">
                  <select
                    onChange={handleChange}
                    name="usertype"
                    class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>Select type</option>
                    <option value="admin" name="usertype">admin</option>

                    <option value="user" name="usertype">user</option>
                    <option value="vendor" name="usertype">vendor</option>
                  </select>
                </div>
              </div>


            <div className="flex items-center justify-between"></div>

            <div>
              <button
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signin;

import React from "react";

import NavbarSignup from "../Components/navbarSignup";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/router";

import { LockClosedIcon } from "@heroicons/react/solid";

function signup() {
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
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      user.name == "" ||
      user.email == "" ||
      user.phone == "" ||
      user.password == ""
    ) {
      Toast.fire({
        icon: "error",
        title: "Please fill all the fields...!!",
      });
    } else {
      axios.post("http://localhost:5000/user/signup", user).then((resp) => {
        if (resp.data.success) {
          Toast.fire({
            icon: "success",
            title: "Registered successfully",
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
  };

  return (
    <div>
      <NavbarSignup />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 w-80">
          <div>
            {/* <img
             className="mx-auto h-12 w-auto"
             src="https://image.winudf.com/v2/image1/Y29tLmh1YXdlaS5waG9uZXNlcnZpY2VfaWNvbl8xNTU0OTkxMDc1XzA3Mw/icon.png?w=&fakeurl=1"
             alt="Workflow"
            /> */}
            <h2 className="mt-2 text-center text-3xl text-gray-900">Sign up</h2>
          </div>
          <div className="mt-8 space-y-6 ">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Enter your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className=" mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onChange={handleChange}
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Signup
              </button>
            </div>

            <div>
              {/* <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                </span>
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;

import React from "react";
import { Link } from "react-router-dom";
const LowRisk = ({savings}) => {
    let lowsavingAmt = savings;
  return (
    <div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Low Risk Investment plans include 
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 w-full flex justify-center">
            <h2 class="title-font font-medium sm:text-4xl text-2xl text-gray-900 bg-violet-200 w-1/2 rounded">
              Rs: {lowsavingAmt*0.33}
            </h2>
            
          </div>
        </div>
        
      </div>
      <div className='flex justify-center'>
    <Link to="/mid">
    <span className='text-white text-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link></div>
    </div>
  );
};

export default LowRisk;

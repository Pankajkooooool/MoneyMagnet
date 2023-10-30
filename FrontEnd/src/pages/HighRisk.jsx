import React from 'react'
import { Link } from 'react-router-dom';

const HighRisk = ({savings}) => {
  let highSavingAmt = localStorage.getItem("savings");
  if(isNaN(savings)){
    
    highSavingAmt = parseInt(savings);
  }

  return (
    <div>
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col text- w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          High Risk Investment Plan

          </h1>
          <p className="lg:w-/3 mx-auto text-left leading-relaxed text-base">
          High-risk investments, such as cryptocurrencies like Bitcoin, have the potential to deliver substantial returns, often exceeding 18% or more in a relatively short period. While these investments can be highly rewarding, it's important to be prepared for significant volatility and market fluctuations when venturing into this high-risk territory.
          <br />
          Invest  <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-2 rounded">
              Rs: {parseInt((highSavingAmt-highSavingAmt*0.1)*0.33)}
            </span> in the following
          </p>
        </div>
       
            
            {/* render re-start server link https://api.render.com/deploy/srv-ckonecnkc2qc73ejr2g0?key=35cLm6fz1Wc */}
          
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-4 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Stocks V/s Smallcase</h2>
          <p className="leading-relaxed">Stocks represent ownership shares in publicly traded companies and can offer the potential for substantial returns, but they are subject to market volatility.
          <br />
          Small cases are investment portfolios curated around specific themes or strategies, providing a diversified approach to stock investing, aiming to capture growth opportunities while managing risk.
          You can Know more about Smallcase <a className='text-indigo-500' href="https://www.smallcase.com/">Here</a>
          <br />
          Here are some handpicked stocks:</p>
        
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        
       
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Reliance Industries Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Tata Consultancy Services Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">HDFC Bank Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">ICICI Bank Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Hindustan Unilever Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Infosys Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">ITC Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Bharti Airtel Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Housing Development Finance CorporationLtd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">State Bank of India </span>
          </div>
        </div>
       


      </div>


      {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" /> */}
      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        
      </div>
     
     
      
    </div>
  </div>
  
</section>
<div className='flex justify-center gap-5'>
    <Link to="/mid">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Prev
      </span></Link>
    <Link to="/advice">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link>
      </div>
    </div>
  )
}

export default HighRisk
import React from 'react'
import { Link } from 'react-router-dom'
const MidRisk = ({savings}) => {

  let MidSavingAmt = parseFloat(savings);
  if(isNaN(savings)){
    MidSavingAmt = localStorage.getItem("Savings");
  }
  return (<>
    {/* <section className="absolute md:hidden top-[-307px] left-[-104.67px] bg-indigo-500 w-[492.36px] h-96 [transform:_rotate(52.5deg)] [transform-origin:0_0]" id="h1">

    </section> */}
    <div>
      <div class="container px-5 pt-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Medium Risk Investment plans include 

          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 w-full flex justify-center">
            <h2 class="title-font font-medium sm:text-4xl text-2xl text-gray-900 bg-violet-200 w-1/2 rounded">
              Rs: {(MidSavingAmt-MidSavingAmt*0.1)*0.33}
            </h2>
            
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div class="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div class="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Buy A Term Life Insurance</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. Have 50% of Needs in a bank account</p>
        
        </div>
      </div>
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
      <div class="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Health Insurance</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, </p>
        
        </div>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Make it harder to Retrieve</span>
          </div>
        </div>
       
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Goto Bank</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">The Catcher In The Rye</span>
          </div>
        </div>
      </div>
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
      <div class="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">SIP or Govt Related Schemes</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, </p>
        
        </div>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Make it harder to Retrieve</span>
          </div>
        </div>
       
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Goto Bank</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">The Catcher In The Rye</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
      <div className='flex justify-center'>
    <Link to="/high">
    <span className='text-white text-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link></div>
    </div>
    </>
    
  )
}

export default MidRisk
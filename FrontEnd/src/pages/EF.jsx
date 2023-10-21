import React from 'react'
import inflation from '../assets/inflation.png'
export const Emergency = () => {
  const userNeeds = parseFloat(localStorage.getItem("Needs"))
  return (

    <div>
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div class="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      <div class="py-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Emergency Corpous Funds and Inflation</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          
        </div>
      </div>
      <div class="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. Have 50% of Needs in a bank account</p>
          <span class="title-font font-medium sm:text-4xl text-2xl text-gray-900 bg-violet-200 px-4 rounded">
              Rs: {userNeeds *0.5} 
            </span>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
     
        <div class="md:flex-grow" bis_skin_checked="1">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          
        <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-14 mx-" bis_skin_checked="1">
    <div class="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" bis_skin_checked="1">
        
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4"> Inflation and How it Defines our Savings </h1>
        
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
    
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={inflation} />
    </div>
  </div>
</section>
    </div>
  )
}

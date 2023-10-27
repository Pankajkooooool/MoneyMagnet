import React from 'react'
import { Link } from 'react-router-dom'
const MidRisk = ({savings}) => {

  let MidSavingAmt  = localStorage.getItem("savings");;
 

  if(isNaN(MidSavingAmt)){
    MidSavingAmt = savings;
  }
  return (<>
    <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-24 pb-6 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Medium Risk Investment Plans
                  </h2>
                  <p className="leading-relaxed">
                  The medium-risk investment category offers users the opportunity to strike a balance between safety and potential returns.
                  <br /> Invest amount
                    <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                      
                      ₹: {parseInt((MidSavingAmt-MidSavingAmt*0.1)*0.33)}
                    </span>
                    in the following ways:
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
    <div>
      

      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Buy Term Life Insurance</h2>
          <p className="leading-relaxed">Term life insurance falls into the medium-risk category, providing financial protection for your loved ones. It's important to note that buying directly from the insurer can save you a significant amount as middlemen typically charge 6 to 10 percent in commissions. 
          <br />
          <div className='pt-8'> With a suitable premium, you can secure a term life policy with coverage of up to 2 crore, ensuring your family's financial well-being in case of unforeseen events</div>
         </p>
        
        </div>
      </div>
      <img className=" md:h-96 w-full object-contain object-center" src="https://images.livemint.com/img/2021/03/16/original/term_plan_rates_1615881539537.jpg" alt="blog" />
      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Buy Health Insurance</h2>
          <p className="leading-relaxed">Health insurance with a mid-level risk profile is a crucial component of financial planning for families, providing essential coverage and peace of mind. Opting for a policy with a per-person coverage of up to 20 lakh rupees ensures comprehensive protection, making it a must-have for safeguarding your family's well-being </p>
        
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
       
       
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Here are Some Options</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium"><a href="https://www.policybazaar.com/health-insurance/health-insurance-india/">PB</a></span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium"><a href="https://www.tataaig.com/health-insurance">TATA</a></span>
          </div>
        </div>
      </div>
      <img className="lg:h-96  w-full object-contain object-center" src="https://www.serialpressit.com/wp-content/uploads/2022/03/Best-Health-Insurance-Plans-Policy-in-India.png" alt="blog" />
      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">SIP or Govt Related Schemes</h2>
          <p className="leading-relaxed">Government Systematic Investment Plans (SIPs) managed by trusted authorities, offer the potential for steady returns ranging from 8% to 12%. 
          <br />Regular SIP investments are recommended for individuals looking to build long-term wealth with a disciplined approach, making them a sound choice for those seeking both reliability and growth in their investments. </p>
        
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
       
       
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium">Here are Some Options</span>
         </div>
       </div>
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://www.policybazaar.com/health-insurance/health-insurance-india/">PB</a></span>
         </div>
       </div>
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://www.tataaig.com/health-insurance">TATA</a></span>
         </div>
       </div>
     </div>
    </div>
  </div>
  
</section>
      <div className='flex justify-center gap-5'>
    <Link to="/low">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Prev
      </span></Link>
    <Link to="/high">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link>
      </div>
    </div>
    </>
    
  )
}

export default MidRisk
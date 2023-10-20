import React from 'react'

const HighRisk = ({savings}) => {
  return (
    <div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text- w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          High Risk,High return Investment plans include 

          </h1>
          <p class="lg:w-2/3 mx-auto text-left leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 w-full flex justify-center">
            <h2 class="title-font font-medium sm:text-4xl text-2xl text-gray-900 bg-violet-200 w-1/2 rounded">
              Rs: {savings*0.33}
            </h2>
            {/* https://api.render.com/deploy/srv-ckonecnkc2qc73ejr2g0?key=35cLm6fz1Wc */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighRisk
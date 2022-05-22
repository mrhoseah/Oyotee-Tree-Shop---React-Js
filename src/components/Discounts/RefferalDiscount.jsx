import React from 'react'
import discountBg from "../../assets/mosteraBg.jpg";
function RefferalDiscount() {
  return (
    <div className={`flex justify-center flex-col p-6 max-w-sm w-64 text-white bg-green-900 backdrop-blur-3xl bg-blend-overlay rounded-xl shadow-md px-4`} style={{ backgroundImage: `url(${discountBg})` }}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white uppercase">GET 30% OFF</h5>
    <p className="mb-3 font-normal dark:text-gray-400">Share your referral code and get a discount!</p>
    <a href="#" class="py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Share
    </a>
</div>
  )
}

export default RefferalDiscount
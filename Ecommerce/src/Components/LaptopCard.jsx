import React from 'react'

const LaptopCard = () => {
 
    return (
        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
       <div className="relative ">
         <img className="w-65 h-48 object-cover ml-5" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738250233/Croma%20Assets/Computers%20Peripherals/Laptop/Images/304464_0_xtjdqz.png?tr=w-400" alt="Product Image" />
         <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">25% OFF</span>
       </div>
       <div className="p-4 space-y-2">
         <h3 className="text-sm font-medium text-gray-800">HP 14s-dq5138tu Intel Core i3 12th Gen Laptop </h3>
         <p className="text-xs text-gray-500">(8GB, 512GB SSD, Windows 11 Home, 14 inch Full HD IPS Display, MS Office 2021, Natural Silver, 1.46 KG)</p>
         <div className="flex items-center space-x-2">
           <span className="text-lg font-bold text-gray-900">₹37,490.00</span>
           <span className="text-sm line-through text-gray-500">₹39,499.00</span>
         </div>
         <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition">Add to Cart</button>
       </div>
     </div>
     
       )
     }
  
export default LaptopCard
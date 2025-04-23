import React from 'react'

const TvCard = () => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
       <div className="relative ">
         <img className="w-65 h-48 object-cover ml-5" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729510457/Croma%20Assets/Entertainment/Television/Images/273359_0_vihvd3.png" alt="Product Image" />
         <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">25% OFF</span>
       </div>
       <div className="p-4 space-y-2">
         <h3 className="text-sm font-medium text-gray-800">Croma 127 cm (50 inch) 4K Ultra HD LED  </h3>
         <p className="text-xs text-gray-500">Google TV with Bezel Less Display</p>
         <div className="flex items-center space-x-2">
           <span className="text-lg font-bold text-gray-900">₹28,490.00</span>
           <span className="text-sm line-through text-gray-500">₹29,900.00</span>
         </div>
         <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition">Add to Cart</button>
       </div>
     </div>
  );
};

export default TvCard;
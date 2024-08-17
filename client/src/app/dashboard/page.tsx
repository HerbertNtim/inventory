'use client'

import PopularProductsCard from "./PopularProductsCard"
import SalesSummaryCard from "./SalesSummaryCard"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto custom-grid-rows gap-10 pb-4">
      <PopularProductsCard />
      <SalesSummaryCard />
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500" />
      <div className="row-span-3 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard

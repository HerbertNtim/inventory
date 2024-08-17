'use client'

import ExpenseSummaryCard from "./ExpenseSummaryCard"
import PopularProductsCard from "./PopularProductsCard"
import PurchaseSummaryCard from "./PurchaseSummaryCard"
import SalesSummaryCard from "./SalesSummaryCard"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto custom-grid-rows gap-10 pb-4">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummaryCard />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard

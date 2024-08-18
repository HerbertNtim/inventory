'use client'

import StatCard from "@/app/(component)/StatCard"
import ExpenseSummaryCard from "./ExpenseSummaryCard"
import PopularProductsCard from "./PopularProductsCard"
import PurchaseSummaryCard from "./PurchaseSummaryCard"
import SalesSummaryCard from "./SalesSummaryCard"
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto custom-grid-rows gap-10 pb-4">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummaryCard />
      <StatCard 
        title='Customer & Expenses'
        primaryIcon={<Package className="text-blue-500 w-6 h-6" />}
        dateRange='22 - 29 July 2024'
        details={[
          {
            title: 'Customer Growth',
            amount: '175.00',
            changePercentage: 131,
            IconComponent: TrendingUp
          },
          {
            title: 'Expenses',
            amount: '10.00',
            changePercentage: -56,
            IconComponent: TrendingDown
          }
        ]}
      />
      <StatCard 
        title='Dues & Pending Ordering'
        primaryIcon={<CheckCircle className="text-blue-500 w-6 h-6" />}
        dateRange='22 - 29 July 2024'
        details={[
          {
            title: 'Dues',
            amount: '350.00',
            changePercentage: 156,
            IconComponent: TrendingUp
          },
          {
            title: 'Pending Orders',
            amount: '310.00',
            changePercentage: -66,
            IconComponent: TrendingDown
          }
        ]}
      />
      
      <StatCard 
        title='Sales & Discount'
        primaryIcon={<Tag className="text-blue-500 w-6 h-6" />}
        dateRange='22 - 29 July 2024'
        details={[
          {
            title: 'Sales',
            amount: '150.00',
            changePercentage: 31,
            IconComponent: TrendingUp
          },
          {
            title: 'Discount',
            amount: '510.00',
            changePercentage: -46,
            IconComponent: TrendingDown
          }
        ]}
      />
    </div>
  )
}

export default Dashboard

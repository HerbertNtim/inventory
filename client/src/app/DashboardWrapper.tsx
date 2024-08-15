import React from 'react'
import Navbar from '@/app/(component)/Navbar'

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={`light flex w-full min-h-screen text-gray-900 bg-gray-50 `}>
      Sidebar
      <main className={`flex flex-col py-7 px-9 md:pl-24 w-full h-full bg-gray-50`}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardWrapper

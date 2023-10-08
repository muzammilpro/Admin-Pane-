
import React from 'react'
import SideBar from '../(components)/SideBar'
import Headercard from '../(components)/headercard'
import TopBar from '../(components)/TopBar'
import Layout from '../(components)/Layout'


export default function Dashboard() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Welcome to the Admin Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total no of Students: <br /> 106</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total number of Courses: <br /> 710</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence</div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">
        



      </div>
    </>
  )
}

import React from 'react'
import Headercard from '../(components)/headercard'

export default function Attendence() {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total no ofStudents: <br /> 106</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total number of Courses: <br /> 710</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence</div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">


        <tr>
          <th scope="col" class="px-6 py-3">
            <label htmlFor="">Student ID</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </th>
          <th scope="col" class="px-6 py-3">
            <label htmlFor="">Course ID</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </th>
          <th scope="col" class="px-6 py-3">
            <label htmlFor="">Date</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </th>
          <th scope="col" class="px-6 py-3">
            <label htmlFor="">Attendance Status</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </th>
          <th scope="col" class="px-6 py-3">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>

          </th>

        </tr>

        <table class="w-full text-sm text-left text-black dark:text-gray-400">
          <thead class="text-md bg-black text-white  uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Course Name
              </th>
              <th scope="col" class="px-6 py-3">
                Course Code
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>

            </tr>
          </thead>

          <tr>
            <th scope="col" class="px-6 py-3">
              Web And App
            </th>
            <th scope="col" class="px-6 py-3">
              WMA-901
            </th>
            <th scope="col" class="px-6 py-3">
              Text
            </th>

          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">
              Web And App
            </th>
            <th scope="col" class="px-6 py-3">
              WMA-934
            </th>
            <th scope="col" class="px-6 py-3">
              Text
            </th>

          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">
              Web And App
            </th>
            <th scope="col" class="px-6 py-3">
              WMA-956
            </th>
            <th scope="col" class="px-6 py-3">
              Text
            </th>

          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">
              Web And App
            </th>
            <th scope="col" class="px-6 py-3">
              WMA-967
            </th>
            <th scope="col" class="px-6 py-3">
              Text
            </th>

          </tr>

        </table>




      </div>
    </div>
  )
}

import React from "react"
import { UserAddOutlined, FlagOutlined } from "@ant-design/icons"

const SOne = ({ data, handleChange }) => {
  return (
    <div>

      <h3 class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 m-8 mt-6">
        Step 1,Book an Appointment
      </h3>

     

      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <UserAddOutlined />
        </span>
        <input
          type="text"
          placeholder="Placeholder"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          value={data?.name}
          onChange={(e) => handleChange(e)}
          name="name"
        />
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <FlagOutlined />
        </span>
        <input
          type="text"
          placeholder="phone number "
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          value={data?.phone}
          onChange={(e) => handleChange(e)}
          name="phone"
        />
      </div>
    </div>
  )
}

export default SOne

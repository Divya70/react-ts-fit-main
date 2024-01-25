import React from "react"

const STwo = ({ data, handleChange }) => {
  return (
    <div>
      <h3 class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 m-8 mt-6">
        Step 2 , Help us understand
      </h3>
      <div className="relative flex gap-4 w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="Age"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          value={data?.age}
          onChange={(e) => handleChange(e)}
          name="age"
        />
        <input
          type="text"
          placeholder="city"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          value={data?.city}
          onChange={(e) => handleChange(e)}
          name="city"
        />
        <input
          type="text"
          placeholder="company"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          value={data?.company}
          onChange={(e) => handleChange(e)}
          name="company"
        />
      </div>
    </div>
  )
}

export default STwo

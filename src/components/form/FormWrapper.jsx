import React, { useState } from "react"
import SOne from "./SOne"
import STwo from "./STwo.jsx"
import SThree from "./SThree"

import SFour from "./SFour"
import SFive from "./SFive"
import ActionBtn from "./ActionBtn"
const FormWrapper = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    prevExp: "",
  })
  const handleStep = () => {
    setStep(step + 1)
  }
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setData({ ...data, [name]: value })
  }
  const showUi = () => {
    if (step === 2) {
      return (
        <>
          <STwo data={data} handleChange={handleChange} />
          <ActionBtn handleStep={handleStep} />
        </>
      )
    } else if (step === 3) {
      return (
        <>
          <SThree data={data} handleChange={handleChange} />
          <ActionBtn handleStep={handleStep} />
        </>
      )
    } else if (step === 4) {
      if (data?.age < 40) {
        setStep(5)
      }
      return (
        <>
          {data?.age < 40 ? (
            <>
              <SFive data={data} handleChange={handleChange} />
              <ActionBtn handleStep={handleStep} step={step} />
            </>
          ) : (
            <>
              <SFour data={data} handleChange={handleChange} />
              <ActionBtn handleStep={handleStep} />
            </>
          )}
        </>
      )
    } else if (step === 5) {
      return (
        <>
          <SFive data={data} handleChange={handleChange} />
          <ActionBtn handleStep={handleStep} step={step} />
        </>
      )
    } else {
      return (
        <>
          <SOne data={data} handleChange={handleChange} />
          <ActionBtn handleStep={handleStep} />
        </>
      )
    }
  }
  return (
    <div className="container-w  ">
      <div className="bg-slate-50 mt-[31vh] mx-auto w-4/5 md:mt-[20vh] md:w-[30%] min-h-[30vh]  rounded-md p-2">
        {showUi()}
      </div>
    </div>
  )
}

export default FormWrapper

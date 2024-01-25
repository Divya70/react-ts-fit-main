import React from "react"
import { useNavigate } from "react-router-dom";

const ActionBtn = ({ handleStep, step }) => {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center ">
      <button
        className=" flex justify-center bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={(e) =>
          step
            ?   navigate("/post")
            : handleStep(e)
        }
      >
        {step ? "View Doctor" : "Next"}
      </button>
    </div>
  )
}

export default ActionBtn

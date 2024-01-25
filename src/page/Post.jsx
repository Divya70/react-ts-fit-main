import React, { useState } from "react"

import MyCard from "../components/post/MyCard"
import { data } from "../components/post/data"
import { Link } from "react-router-dom"
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons"

const Post = () => {
  const [userData, setUserData] = useState(data || [])

  return (
    <div>
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link
        to="/"
        className="mb-4 flex items-center text-blue-600 hover:underline"
      >
        <CaretRightOutlined className="mr-2" />
        Back to Home
      </Link>
      <MyCard userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default Post

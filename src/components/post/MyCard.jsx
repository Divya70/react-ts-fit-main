import React, { useState } from "react"

import "./MyCard.css"
import MyCardItem from "./MyCardItem"

const MyCard = ({ setUserData, userData }) => {
  const [editUser, setEditUser] = useState({
    username: "",
    email: "",
    phone: "",
    link: "",
    avatarUrl: "",
    key: "",
  })

  const handleDelete = (key) => {
    setUserData(userData?.filter((user) => user.key != key))
  }


  const isValid = () => {
    if (
      editUser?.username &&
      editUser?.email &&
      editUser?.link &&
      editUser?.phone
    ) {
      return true
    }
  }
  const handleUpdate = (state, key) => {
    if (isValid()) {
      const newUserData = userData?.map((user) =>
        user?.key === key ? editUser : user
      )

      setUserData(newUserData)

    }
  }
  return (
    <>
      <div className="my_card_wrapper">
       

        {userData?.map((user, index) => (
          <>
            <div className="my_card">
              <MyCardItem
                user={user}
                handleDelete={handleDelete}

              />
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default MyCard

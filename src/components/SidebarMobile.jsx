import React from 'react'
import avatar from "../assets/images/avatar.jpg";

const SidebarMobile = React.memo(({ showNavListMobile, setShowNavListMobile, isShow }) => {

  return (
    <div className={`appbar-collapse ${!isShow && "disabled"}`}>
      <div className="logo-brand">
        <img className="img-avatar" src={avatar} alt="" />
      </div>
      <i
        className="fa-solid fa-bars btn-hamburger"
        onClick={() => setShowNavListMobile(!showNavListMobile)}
      ></i>
    </div>
  )
})

export default SidebarMobile
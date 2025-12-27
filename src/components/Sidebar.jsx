import React from 'react'
import avatar from "../assets/images/avatar.jpg";

const Sidebar = React.memo(({ showNavListMobile, setShowNavListMobile }) => {
    return (
        <div
            className={showNavListMobile ? "sidebar-left active" : "sidebar-left"}
        >
            <span className="avatar">
                <img className="img-avatar" src={avatar} alt="" />
            </span>
            <div id="list-resume-section" className="sidebar-list list-group">
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-1"
                    onClick={() => setShowNavListMobile(false)}
                >
                    ABOUT
                </a>
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-2"
                    onClick={() => setShowNavListMobile(false)}
                >
                    EXPERIENCES
                </a>
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-3"
                    onClick={() => setShowNavListMobile(false)}
                >
                    PROJECTS
                </a>
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-4"
                    onClick={() => setShowNavListMobile(false)}
                >
                    EDUCATION
                </a>
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-5"
                    onClick={() => setShowNavListMobile(false)}
                >
                    SKILLS
                </a>
                {/*   <a
            className="sidebar-item list-group-item list-group-item-action"
            href="#list-item-6"
            onClick={() => setShowNavListMobile(false)}
          >
            INTERESTS
          </a> */}
                <a
                    className="sidebar-item list-group-item list-group-item-action"
                    href="#list-item-6"
                    onClick={() => setShowNavListMobile(false)}
                >
                    THE END
                </a>
            </div>
        </div>
    )
})

export default Sidebar
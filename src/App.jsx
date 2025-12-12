import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import avatar from "./assets/images/avatar.jpg";
import interest1 from "./assets/images/interest/interest1.jpg";
import interest2 from "./assets/images/interest/interest2.jpg";
import interest3 from "./assets/images/interest/interest3.jpg";
import interest4 from "./assets/images/interest/interest4.jpg";
import interest6 from "./assets/images/interest/interest6.jpg";
import interest7 from "./assets/images/interest/interest7.jpg";

function App() {
  const [openModalArea, setOpenModalArea] = useState();

  const [showBtnUpToTop, setShowBtnUpToTop] = useState(false);

  const [showNavListMobile, setShowNavListMobile] = useState(false);

  const interestImages = [
    interest1,
    interest2,
    interest3,
    interest4,
    interest6,
    interest7,
  ];

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowBtnUpToTop(true);
      } else {
        setShowBtnUpToTop(false);
      }
    });
  }, []);

  const handleUpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleModalArea = (item) => {
    document.getElementById("div-zoom-area").style.display = "block";
    setOpenModalArea(item);
  };

  const handleCloseModalArea = () => {
    document.getElementById("div-zoom-area").style.display = "none";
    setOpenModalArea();
  };

  return (
    <div className="App">
      <div className="appbar-collapse">
        <div className="logo-brand">
          <img className="img-avatar" src={avatar} alt="" />
        </div>
        <i
          className="fa-solid fa-bars btn-hamburger"
          onClick={() => setShowNavListMobile(!showNavListMobile)}
        ></i>
      </div>

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
      <div
        data-bs-spy="scroll"
        data-bs-target="list-resume-section"
        data-bs-smooth-scroll="true"
        tabIndex="0"
        className="container-section"
      >
        <div id="list-item-1" className="resume-section">
          <div className="resume-section-detail">
            <h1>
              PHAN QUANG
              <span> DŨNG</span>
            </h1>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "'Saira Extra Condensed', sans-serif",
                fontWeight: 500,
                color: "#34495e",
                textTransform: "uppercase",
              }}
            >
              <i className="fa-solid fa-address-card"></i> · fullstack web developer
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "'Saira Extra Condensed', sans-serif",
                fontWeight: 500,
                color: "#34495e",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <i className="fa-solid fa-map"></i> · da nang city, vietnam · <br />
              <span style={{ color: "#079992" }}>quangdung861@gmail.com</span>
            </div>
{/*             <p style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
              Welcome to visit my CV online!
            </p>
            <p
              style={{
                marginBottom: "24px",
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}
            >
              "A little bit of fragrance always clings to the hands that gives
              flowers!"
            </p> */}
            <p style={{ marginBottom: "8px" }}>
              <span className="lead">
                <i className="fa-brands fa-react"></i> Front-End:
              </span>{" "}
              Experienced in{" "}
              <span className="lead">
                JavaScript (ES6+) with ReactJS, using Redux, Axios, Bootstrap, and related libraries...
              </span>
              etc
            </p>
            <p style={{ marginBottom: "50px" }}>
              <span className="lead">
                <i class="fa-solid fa-database"></i> Back-End:
              </span>{" "}
              Experienced in{" "}
              <span className="lead">
                Node.js, NestJS, TypeORM, Firebase, and MySQL...
              </span>
              etc
            </p>
            <a
              className="box-icon-social"
              href="https://github.com/quangdung861"
              target="_blank"
            >
              <i className="fa-brands fa-github icon-social"></i>
            </a>
            <a
              className="box-icon-social"
              href="https://www.facebook.com/messages/t/100003857673185/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-messenger icon-social"></i>
            </a>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-2" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">EXPERIENCES</h2>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">
                    NUS - NATIONAL UNIVERSITY OF SINGAPORE (AVEPOINT COMPANY)
                  </h3>
                  <p
                    className="resume-content-subname"
                    style={{ textTransform: "uppercase" }}
                  >
                    This is software deployed for the National University of
                    Singapore <br /> with the aim of providing lifelong courses.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Project size: 100+ members across multiple countries.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Collaborated directly with international senior engineers in architecture and review sessions.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Responsible for developing new UI modules, improving user experience, and refactoring legacy components to enhance performance.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Participated in bug fixing, API integration, and optimizing rendering in complex page flows.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Implemented responsive layouts and ensured cross-browser compatibility for key learning modules.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Worked closely with QA and product teams to validate feature requirements, handle feedback, and support release cycles.
                  </p>
                </div>
                <div className="resume-date">
                  <span>Nov 2023 - Present</span>
                </div>
              </div>
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">
                    HRIS - HUMAN RESOURCE MANAGEMENT SYSTEM (AVEPOINT COMPANY)
                  </h3>
                  <p
                    className="resume-content-subname"
                    style={{ textTransform: "uppercase" }}
                  >
                    This is the latest human resource management software
                    deployed <br /> for direct use by Avepoint, and
                    commercialized.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Project size: 50+ members globally.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Worked with product owners from US/Europe to understand key HR workflows.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Built and maintained employee management modules, attendance dashboards, and workflow-related features.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i> Improved UI consistency, implemented role-based access, and collaborated in QA/production deployments.
                  </p>
                </div>
                <div className="resume-date">
                  <span>Jun 2024 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-3" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">PROJECTS</h2>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3
                    className="resume-content-name"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    DE VINC OFFICIAL{" "}
                    <i
                      className="fa-sharp fa-solid fa-star"
                      style={{
                        color: "#ffc107",
                        marginLeft: "8px",
                        paddingBottom: "3px",
                        fontSize: "24px",
                      }}
                    ></i>
                  </h3>
                  <p className="resume-content-subname">
                    FULLSTACK WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>{" "}
                    <span className="lead">Description:</span> A commercial product showcase website deployed for end users at devinc.vn.
                    The system displays product information, promotions and categories, with a
                    direct “Contact to Order” flow. Users are redirected to Zalo for ordering
                    instead of using a cart or checkout.
                    Includes an admin dashboard for managing products, images, categories, and
                    promotions.
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="lead"> Technologies: </span>
                    ReactJS, NestJS (REST APIs), MySQL, Cloudflare, Matbao, TiDB, Cloudinary,
                    Render...etc
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • Requirement analysis & project architecture <br />
                    • Database schema & backend structure design <br />
                    • Develop both Frontend & Backend <br />
                    • Develop product listing, detail, and search pages <br />
                    • Implement Zalo ordering flow <br />
                    • Admin dashboard (product, category management) <br />
                    • Deployment setup: DNS, SSL, hosting <br />
                    • Performance optimization, QA <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Successfully deployed a real-world commercial product <br />
                    • Solid fullstack experience with NestJS, MySQL, TiDB, Cloud infrastructure <br />
                    • Stable production deployment with Cloudflare, Render, Cloudinary <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/de-vinc-front-end.git"
                    target="_blank"
                  >
                    - Frontend Source: https://github.com/quangdung861/de-vinc-front-end.git
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/de-vinc-back-end.git"
                    target="_blank"
                  >
                    - Backend Source: https://github.com/quangdung861/de-vinc-back-end.git
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://devinc.vn"
                    target="_blank"
                  >
                    - Production: https://devinc.vn
                  </a>

                </div>
                <div className="resume-date">
                  <span>June 2024</span>
                </div>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3
                    className="resume-content-name"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    ZALO APP REALTIME{" "}
                    <i
                      className="fa-sharp fa-solid fa-star"
                      style={{
                        color: "#ffc107",
                        marginLeft: "8px",
                        paddingBottom: "3px",
                        fontSize: "24px",
                      }}
                    ></i>
                  </h3>
                  <p className="resume-content-subname">
                    FULLSTACK WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="lead"> Description: </span>
                    <br />
                    Realtime chat application with social login, friend requests, group chat,
                    cloud storage, and online status tracking.
                    <br />

                    <span className="lead"> Technologies: </span>
                    <br />
                    ReactJS, Firebase SDK v9 (Auth, Firestore), Emoji-mart, Sass
                    <br />

                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • Social login (Google, GitHub, Email)
                    <br />
                    • Realtime friend request flows (send / receive / cancel / approve / reject)
                    <br />
                    • Realtime chat, group chat, personal cloud storage
                    <br />
                    • Show online status, unseen messages, and filtering
                    <br />
                    • UI with Styled-Components & Sass
                    <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Deep experience with Firebase v9, hierarchical database design, realtime features
                    <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/zalo-app"
                    target="_blank"
                  >
                    - Source code: https://github.com/quangdung861/zalo-app
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://zalo-app-mu.vercel.app"
                    target="_blank"
                  >
                    - Demo: https://zalo-app-mu.vercel.app
                  </a>

                </div>
                <div className="resume-date">
                  <span>May 2023</span>
                </div>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">F8 FULLSTACK.EDU.VN</h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="lead"> Technologies: </span>
                    <br />
                    ReactJS, Redux Toolkit, Redux-Saga, JSON Server Auth, Styled-Components,
                    Sass, Axios, React Slick
                    <br />

                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • Implement authentication (register / login)
                    <br />
                    • Course list, video player, filtering, post
                    <br />
                    • Slider components (React Slick), animations
                    <br />
                    • Build REST API with JSON Server + JWT
                    <br />
                    • Fully responsive layout
                    <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Strong skills in auth flow, Redux Saga, token management, reusable components
                    <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/clone-f8-website"
                    target="_blank"
                  >
                    - Source code: https://github.com/quangdung861/clone-f8-website
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://clone-f8-website.vercel.app"
                    target="_blank"
                  >
                    - Demo: https://clone-f8-website.vercel.app
                  </a>
                </div>
                <div className="resume-date">
                  <span>May 2023</span>
                </div>
              </div>
            </div>

            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">CV PROFILE ONLINE</h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>

                    <span className="lead"> Description: </span>
                    <br />
                    Online CV website showcasing personal information, skills, experience, and
                    portfolio sections with smooth animations and responsive design.
                    <br />

                    <span className="lead"> Technologies: </span>
                    <br />
                    ReactJS, Bootstrap 5.2, Sass, FontAwesome
                    <br />

                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • Implement animations and scrolling effects
                    <br />
                    • Build responsive layout for all screen sizes
                    <br />
                    • UI/UX design and component structure
                    <br />
                    • Deploy application via GitHub Pages
                    <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Improved UI design skills and responsive layout techniques
                    <br />
                    • Experience with GitHub Pages deployment and website optimization
                    <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/cv-quangdung-dev"
                    target="_blank"
                  >
                    - Source code: https://github.com/quangdung861/cv-quangdung-dev
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://quangdung861.github.io/cv-quangdung-dev"
                    target="_blank"
                  >
                    - Demo: https://quangdung861.github.io/cv-quangdung-dev
                  </a>

                </div>
                <div className="resume-date">
                  <span>Apr 2023</span>
                </div>
              </div>

              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">TRELLO</h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>

                    <span className="lead"> Description: </span>
                    <br />
                    Mini Trello clone featuring boards, columns, and cards with drag-and-drop
                    interaction.
                    <br />

                    <span className="lead"> Technologies: </span>
                    <br />
                    ReactJS, React Bootstrap, React Smooth DnD, Sass
                    <br />

                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • UI design and layout structure
                    <br />
                    • Create/update/delete boards, columns, and cards
                    <br />
                    • Implement drag & drop using Smooth DnD
                    <br />
                    • Organize shared variables, configs, Eslint, jsconfig
                    <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Experienced Git workflow, modular folder structure, reusable components,
                    responsive UI
                    <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/trello-quangdungdev-web"
                    target="_blank"
                  >
                    - Source: https://github.com/quangdung861/trello-quangdungdev-web
                  </a>
                  <br />

                  <a
                    className="custome-tag-link"
                    href="https://quangdung861.github.io/trello-quangdungdev-web"
                    target="_blank"
                  >
                    - Demo: https://quangdung861.github.io/trello-quangdungdev-web
                  </a>

                </div>
                <div className="resume-date">
                  <span>Jan 2023 - Apr 2023</span>
                </div>
              </div>

              <div className="resume-content content-flex">
                <div>
                  <h3
                    className="resume-content-name"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    DE VINC
                  </h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>

                    <span className="lead"> Description: </span>
                    <br />
                    E-commerce website allowing users to browse, filter, add to cart, apply
                    vouchers, order products, manage profile and view order history. Admin can
                    manage products, customers, and process orders with multi-step statuses.
                    <br />

                    <span className="lead"> Technologies: </span>
                    <br />
                    ReactJS, Redux Toolkit, Redux-Saga, Ant Design, Styled-Components, JSON Server
                    <br />

                    <span className="lead"> Responsibilities: </span>
                    <br />
                    • Build full customer flows: home, product list/detail, filters, cart,
                    checkout, vouchers, user profile
                    <br />
                    • Implement authentication, authorization, purchase history, shipping address
                    <br />
                    • Build admin features: product CRUD, order processing
                    (approve/ship/deliver/exchange/cancel), user management
                    <br />
                    • Handle state management using Redux Toolkit + Saga
                    <br />
                    • Design responsive UI using Ant Design
                    <br />

                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      Key Achievements:
                    </span>
                    <br />
                    • Hands-on experience with Redux ecosystem, REST APIs, responsive UI, and
                    JSON Server
                    <br />
                  </p>

                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/project-devinc-website"
                    target="_blank"
                  >
                    - Source: https://github.com/quangdung861/project-devinc-website
                  </a>

                </div>
                <div className="resume-date">
                  <span>Sep 2022 - Present</span>
                </div>
              </div>
              <div className="resume-content content-flex">
                <div>
                  <p className="lead" style={{ marginTop: "20px" }}>
                    OTHER PROJECTS
                  </p>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li>
                      <i
                        className="fa-solid fa-bookmark"
                        style={{ color: "#ffc107" }}
                      ></i>
                      &nbsp; Note app
                      <br />
                      <span className="lead">Description:</span> I built this
                      application with the goal of helping people record
                      information conveniently and quickly on the internet. I
                      divided into many folders for convenience in management.
                      This is a new project where I am exposed to new
                      technologies. I deployed the client part to Netlify, the
                      server part to Render.
                      <br />
                      <p>
                        <span className="lead"> Technologies used: </span>
                        ReactJS, Graphql, Apollo, NodeJS, ExpressJS, Socket.io,
                        Mongoose, Firebase, MaterialUI...
                      </p>
                      <p>
                        <span className="lead"> Database: </span>
                        MongoDB.
                      </p>
                      <a
                        className="custome-tag-link"
                        href="https://github.com/quangdung861/note-app"
                        target="_blank"
                      >
                        - Source: https://github.com/quangdung861/note-app
                      </a>
                      <br />
                      <a
                        className="custome-tag-link"
                        href="https://ephemeral-starship-6dbba8.netlify.app"
                        target="_blank"
                      >
                        - Demo:
                        https://ephemeral-starship-6dbba8.netlify.app
                      </a>
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-bookmark"
                        style={{ color: "#ffc107" }}
                      ></i>
                      &nbsp; Header universe
                      <br />
                      <a
                        className="custome-tag-link"
                        href="https://header-universe-animation.vercel.app"
                        target="_blank"
                      >
                        - Demo:
                        https://header-universe-animation.vercel.app/
                      </a>
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-bookmark"
                        style={{ color: "#ffc107" }}
                      ></i>
                      &nbsp; Play tailwind css
                      <br />
                      <a
                        className="custome-tag-link"
                        href="https://github.com/quangdung861/play-tailwind-css"
                        target="_blank"
                      >
                        - Source:
                        https://github.com/quangdung861/play-tailwind-css
                      </a>
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-bookmark"
                        style={{ color: "#ffc107" }}
                      ></i>
                      &nbsp; Vehicle rental website
                      <br />
                      <a
                        className="custome-tag-link"
                        href="https://github.com/quangdung861/vehicle-rental-website.git"
                        target="_blank"
                      >
                        - Source:
                        https://github.com/quangdung861/vehicle-rental-website.git
                      </a>
                    </li>
                    <li>&nbsp; &nbsp; &nbsp; ...</li>
                  </ul>
                </div>
                <div className="resume-date"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-4" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">EDUCATION</h2>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">
                    IVIETTECH PROGRAMING CENTER
                  </h3>

                  <p
                    className="resume-content-subname"
                    style={{ textTransform: "uppercase" }}
                  >
                    Certificate in Professional Front-End Development
                  </p>

                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>{" "}
                    Learned key Front-End technologies: HTML, CSS/Sass, Bootstrap,
                    JavaScript, ReactJS, Redux, NodeJS.
                  </p>

                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>{" "}
                    Gained hands-on experience working with real project workflows during training.
                  </p>

                  <p className="content-item">
                    <i className="fa-solid fa-bookmark"></i>{" "}
                    Completed a multi-functional e-commerce website using ReactJS,
                    Redux, and Ant Design as the final project.
                  </p>
                </div>

                <div className="resume-date">
                  <span>Jun 2022 - Dec 2022</span>
                </div>
              </div>
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">COLLEGE OF TECHNOLOGY</h3>
                  <p className="resume-content-subname">
                    I GRADUATE COLLEGE IN INFORMATION TECHNOLOGY <br /> AND I
                    DEVELOP MY CAREER AS A DEVELOPER.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i>{" "} When I was a student, I
                    studied a lot about career development in information
                    technology and then I decided to choose web programming
                    because I particularly like customize and draw on my
                    websites.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i>{" "} I really enjoy my
                    school, where I make new friends and we study together.
                  </p>
                  <p className="content-item ">
                    <i className="fa-solid fa-bookmark"></i>{" "} After college, I
                    succeeded with my graduation thesis on programming: PHP,
                    mySQL, building online ordering application.
                  </p>
                </div>
                <div className="resume-date">
                  <span>Aug 2015 - Jan 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-5" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">SKILLS</h2>
            <div className="resume-item">
              <div className="resume-content">
                <h3 className="resume-content-name"></h3>
                <p className="resume-content-subname">
                  PROGRAMMING LANGUAGES & TOOLS
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa-brands fa-react react-icon"></i>
                    <i className="fa-brands fa-js javascript-icon"></i>
                    <i className="fa-brands fa-node-js nodejs-icon"></i>
                    <i className="fa-brands fa-html5 html5-icon"></i>
                    <i className="fa-brands fa-css3-alt css3-icon"></i>
                    <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
                    <i className="fa-brands fa-npm npm-icon"></i>
                    <i className="fa-brands fa-github github-icon"></i>
                    <i className="fa-brands fa-git-alt git-icon"></i>
                    <i className="fa-brands fa-trello trello-icon"></i>
                    <i className="fa-brands fa-sass sass-icon"></i>
                    <i className="fa-solid fa-font-awesome font-awesome-icon"></i>
                    <i className="fa-brands fa-yarn yarn-icon"></i>
                  </li>
                </ul>
                <p className="resume-content-subname">TECHNICAL</p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li><i className="fa-solid fa-check"></i> &nbsp; HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; ReactJS (Hooks, Context API, React Router)</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Redux, Redux Toolkit, Redux-Saga / Thunk</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; UI Libraries: TailwindCSS, Material UI, Ant Design, Bootstrap</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Sass, Styled-Components</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; RESTful API, Axios, Fetch</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Firebase SDK v9 (Auth, Firestore)</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; MongoDB, Mongoose, MySQL, TypeORM</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; NodeJS, NestJS, ExpressJS</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; JSON Server, MirageJS (Mock API Tools)</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Responsive Web Design</li>
                </ul>

                <p className="resume-content-subname">WORKFLOW</p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Git, GitHub, GitLab (branching workflow)</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Testing & Debugging</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Jira, Trello</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Agile / Scrum workflow</li>
                </ul>

                <p className="resume-content-subname">LEARNING & INTEREST</p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li><i className="fa-solid fa-check"></i> &nbsp; TypeScript (Advanced)</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; NodeJS & Backend Development</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Firebase Ecosystem</li>
                  <li><i className="fa-solid fa-check"></i> &nbsp; Performance Optimization</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        {/*  <div id="list-item-6" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">INTERESTS</h2>
            <div className="resume-item">
              <div className="resume-content">
                <h3 className="resume-content-name"></h3>
                <p className="resume-content-subname"></p>
                <p style={{ marginBottom: "8px" }}>
                  Aside from being a developer, I enjoy most of my free time
                  enjoying fashion, reading peaceful books.
                </p>
                <p style={{ marginBottom: "8px" }}>
                  In addition, I like to go to the gym, walk, and swim.
                </p>
                <p style={{ marginBottom: "20px" }}>
                  Last but not least, I love to travel and take pictures. Take a
                  look at some of my pictures:
                </p>
                <div className="interest-picture">
                  {interestImages.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt=""
                      className="img-zoomable"
                      onClick={() => handleModalArea(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div id="list-item-6" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">THE END</h2>
            <div className="resume-item">
              <div className="resume-content">
                <h3 className="resume-content-name"></h3>
                <p className="resume-content-subname"></p>
                <p style={{ marginBottom: "16px" }}>
                  Finally, I would like to say "Thank You" for spent time to
                  look at my CV profile.
                </p>
                <p style={{ fontStyle: "italic" }}>
                  Wishing you all the best (◕‿↼)
                </p>
                <img
                  src="https://media0.giphy.com/media/xBTSwCTFkgfcdTjHMz/giphy.gif?cid=ecf05e47jndkll2pabe98pkea2t1fljh67kdfpe2gmmvg5wo&rid=giphy.gif&ct=s"
                  alt=""
                  width={300}
                  style={{ marginBottom: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showBtnUpToTop && (
        <div className="up-to-top" onClick={() => handleUpToTop()}>
          <i className="bi bi-chevron-double-up up-to-top-icon"></i>
        </div>
      )}

      <div id="div-zoom-area" onClick={() => handleCloseModalArea()}>
        <img id="img-zoom-area-content" src={openModalArea} alt="" />
      </div>
    </div>
  );
}

export default App;

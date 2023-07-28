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
      if (window.scrollY > 100) {
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
          class="fa-solid fa-bars btn-hamburger"
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
            PROJECTS
          </a>
          <a
            className="sidebar-item list-group-item list-group-item-action"
            href="#list-item-3"
            onClick={() => setShowNavListMobile(false)}
          >
            EDUCATION
          </a>
          <a
            className="sidebar-item list-group-item list-group-item-action"
            href="#list-item-4"
            onClick={() => setShowNavListMobile(false)}
          >
            SKILLS
          </a>
          <a
            className="sidebar-item list-group-item list-group-item-action"
            href="#list-item-5"
            onClick={() => setShowNavListMobile(false)}
          >
            INTERESTS
          </a>
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
        tabindex="0"
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
              <i class="fa-solid fa-address-card"></i> · front-end web developer
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
              <i class="fa-solid fa-map"></i> · K82/25 nguyen luong bang street,
              lien chieu district, da nang city · <br />
              <span style={{ color: "#079992" }}>quangdung861@gmail.com</span>
            </div>
            <p style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
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
            </p>
            <p style={{ marginBottom: "50px" }}>
              <span className="lead">
                <i class="fa-brands fa-react"></i> Front-End:
              </span>{" "}
              I am experienced in{" "}
              <span className="lead">
                Javascript on ReactJS FrameWork, using Redux, Axios,
                Bootstrap...
              </span>
              etc
            </p>
            <a
              className="box-icon-social"
              href="https://github.com/quangdung861"
              target="_blank"
            >
              <i class="fa-brands fa-github icon-social"></i>
            </a>
            <a
              className="box-icon-social"
              target="_blank"
              href="https://www.facebook.com/dungquangphandev"
            >
              <i class="fa-brands fa-facebook icon-social"></i>
            </a>
            <a
              className="box-icon-social"
              href="https://www.linkedin.com/in/phan-quang-dung-898476259/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin icon-social"></i>
            </a>
            <a
              className="box-icon-social"
              href="https://www.facebook.com/messages/t/100003857673185/"
              target="_blank"
            >
              <i class="fa-brands fa-facebook-messenger icon-social"></i>
            </a>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-2" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">PROJECTS</h2>
            <div className="resume-item">
              <div className="resume-content content-flex">
                <div>
                  <h3 className="resume-content-name">ZALO APP REALTIME</h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item lead">
                    <i class="fa-solid fa-bookmark"></i> This is an online chat
                    site
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>{" "}
                    <span className="lead">Description:</span> This is a website
                    for people to connect as long as you have a Google account,
                    Github you can login in seconds without spending time on
                    complicated authentication steps, the reason is I use
                    Fisebase and it did that for me, in the app you can send
                    friend requests to the people you want and other people can
                    also find you, and from there people connect and chat with
                    each other in real time, now I'm still developing more
                    functions.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> My responsibilities: </span> <br />
                    • Design UI <br />• Register, login, logout account Google,
                    Github, Email <br />
                    with Authentication in Firebase <br />
                    • Realtime Invitation Sent, Receive, Recall <br />
                    • Realtime Approve, reject friend request <br />
                    • Chat realtime with Cloud Firestore in Firebase <br />
                    • View, edit user infomation <br />
                    • User classification <br />
                    • Create group chat <br />
                    • Create My Cloud as a place to store personal data <br />
                    • Filter by category, keywords, descending & ascending{" "}
                    <br />
                    • Show latest and unseen messages <br />
                    • See if the user is online <br />
                    • React-slick, react-carousel <br />
                    • Emoji-mart <br />
                    • MomentJS <br />
                    • React router dom <br />
                    • Styled components, Sass <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Gained experience and skills on:
                    </span>
                    <br />
                    • Experience using Firsebase SDK V9 <br />
                    • Experience using Cloud Frisestore, Authentication <br />
                    • Have experience with hierarchical database <br />
                    • Experience using Emoji-mart, audio <br />
                    • Experience in Responsive design <br />
                    • Experience in git, github <br />
                  </p>
                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/zalo-app.git"
                    target="_blank"
                  >
                    - Source code: https://github.com/quangdung861/zalo-app.git
                  </a>
                  <br />
                  <a
                    className="custome-tag-link"
                    href="https://zalo-app-mu.vercel.app"
                    target="_blank"
                  >
                    - Project deployment: https://zalo-app-mu.vercel.app
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
                  <p className="content-item lead">
                    <i class="fa-solid fa-bookmark"></i> This is a website that
                    sells courses.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> My responsibilities: </span> <br />
                    • Design UI <br />
                    • Register account <br />
                    • Login, logout <br />
                    • Courses, posts, videos filter <br />
                    • Json server, json server auth, json web token <br />
                    • Redux toolkit, redux saga <br />
                    • Axios, fetch <br />
                    • Styled component, sass <br />• Change avatar, cover
                    convert to base64 and vice verca <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Gained experience and skills on:
                    </span>
                    <br />
                    • Experience in using reactJS <br />
                    • Experience in using fontawesome
                    <br />
                    • Experience in convert base64
                    <br />
                    • Experience in using react-slick, slick-carousel
                    <br />
                    • Design sass, styled components
                    <br />
                    • Experience using animation
                    <br />
                    • Experience in using redux toolkit, saga, axios
                    <br />
                    • Experience in Responsive design
                    <br />
                  </p>
                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/clone-f8-website.git"
                    target="_blank"
                  >
                    - Source code:
                    https://github.com/quangdung861/clone-f8-website.git
                  </a>
                  <br />
                  <a
                    className="custome-tag-link"
                    href="https://clone-f8-website.vercel.app"
                    target="_blank"
                  >
                    - Project deployment: https://clone-f8-website.vercel.app
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
                  <p className="content-item lead">
                    <i class="fa-solid fa-bookmark"></i> This is where I
                    describe myself.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> My responsibilities: </span> <br />
                    • Design UI <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Gained experience and skills on:
                    </span>
                    <br />
                    • Experience in using viteJS <br />
                    • Experience in using fontawesome
                    <br />
                    • Design UI with BootstrapV5.2, Sass
                    <br />
                    • Experience handle event scroll, image
                    <br />
                    • Experience in using deploy project in github
                    <br />
                    • Experience in Responsive design
                    <br />
                  </p>
                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/cv-quangdung-dev.git"
                    target="_blank"
                  >
                    - Source code:
                    https://github.com/quangdung861/cv-quangdung-dev.git
                  </a>
                  <br />
                  <a
                    className="custome-tag-link"
                    href="https://quangdung861.github.io/cv-quangdung-dev"
                    target="_blank"
                  >
                    - Project deployment:
                    https://quangdung861.github.io/cv-quangdung-dev
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
                  <p className="content-item lead">
                    <i class="fa-solid fa-bookmark"></i> Trello is a list maker
                    app.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>{" "}
                    <span className="lead">Description:</span> Trello is a
                    flexible task management tool where teams can plan,
                    collaborate on projects, organize workflow, and track
                    progress in an intuitive, efficient, and rewarding way. From
                    ideation, planning to execution, Trello manages milestones
                    and daily tasks as they work together and help the team get
                    things done. Here we can add and delete tables and smaller
                    elements like columns and cards, arranging them according to
                    the desired progress.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Programming language: </span>
                    HTML, SASS, JavaScript.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Technologies used: </span>
                    ReactJS, React bootstrap, React smooth dnd, React icons.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Code editor: </span>
                    Visual Studio Code.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> My responsibilities: </span> <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Customer:
                    </span>
                    <br />
                    • Design UI <br />
                    • Create column, card <br />
                    • Update, delete column <br />
                    • Drag and drop column, card <br />
                    • Create static path <br />
                    • Creating shared variables <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Gained experience and skills on:
                    </span>
                    <br />
                    • Experience git, github like branch, pull, push, commit,
                    amend, log... <br />
                    • Experience write file README.md <br />
                    • Design UI with React Bootstrap, Sass, React icons. <br />
                    • Experience working with git according to actual
                    processDatabase design and analysis fake <br />
                    • Experience creating shared variables <br />
                    • Experience in using eslint. <br />
                    • Experience in using jsconfig.json. <br />
                    • Experience in Responsive design <br />
                    <a
                      className="custome-tag-link"
                      href="https://github.com/quangdung861/trello-quangdungdev-web.git"
                      target="_blank"
                    >
                      - Source code:
                      https://github.com/quangdung861/trello-quangdungdev-web.git
                    </a>
                    <br />
                    <a
                      className="custome-tag-link"
                      href="https://quangdung861.github.io/trello-quangdungdev-web"
                      target="_blank"
                    >
                      - Project deployment:
                      https://quangdung861.github.io/trello-quangdungdev-web
                    </a>
                  </p>
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
                    <i
                      class="fa-sharp fa-solid fa-star"
                      style={{
                        color: "#ffc107",
                        marginLeft: "8px",
                        paddingBottom: "3px",
                        fontSize: "24px",
                      }}
                    ></i>
                  </h3>
                  <p className="resume-content-subname">
                    FRONT-END WEB DEVELOPER
                  </p>
                  <p className="content-item lead">
                    <i class="fa-solid fa-bookmark"></i> Online clothing
                    ordering system.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>{" "}
                    <span className="lead">Description:</span> An online
                    clothing ordering system is a website that provides
                    customers with a means of ordering clothes online and
                    aggregating information about news, products, and discounts.
                    Customers can order clothes on the website. Users can order
                    without logging in to an account to facilitate purchases.
                    After selecting the product, the user is directed to the
                    product detail page where the user can view the product
                    information and perform the actions to select the size if
                    available and add to the cart. Then he can move out and
                    continue shopping or redirect to cart to make transaction
                    where user can apply discount code and ship when qualified.
                    Then continue to be redirected to the payment gateway where
                    the user enters the delivery information and payment method
                    and completes the order process. Users can update their
                    profile and can also view their order history if logged in.
                    <br />
                    <br />
                    On the admin side, you can perform the functions of adding,
                    editing and deleting products with many easy customization
                    options. View and process orders placed by users. View the
                    list of users. Make sure to decentralize the scope of access
                    between users and administrators.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Programming language: </span>
                    HTML, CSS, JavaScript.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Technologies used: </span>
                    ReactJS, Ant Design, React-Hook, React Router,
                    Redux-Toolkit, Redux-Hook, Redux-Saga, Styled-Components.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Code editor: </span>
                    Visual Studio Code.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> Database: </span>
                    JSON Server.
                  </p>
                  <p className="content-item">
                    <i class="fa-solid fa-bookmark"></i>
                    <span className="lead"> My responsibilities: </span> <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Customer:
                    </span>
                    <br />
                    • Design UI <br />
                    • Create view Homepage, List of Product, the Detail
                    information of Product <br />
                    • Sign up for the newsletter <br />
                    • Register account <br />
                    • Login, Logout <br />
                    • Product filter <br />
                    • Order products with options, quantity <br />
                    • View CartPage, paymentPage <br />
                    • View Voucher, Voucher Ship <br />• Cart update. Select and
                    unselect voucher, voucher ship <br />• Add payment
                    information including payment method address <br />
                    • View purchase history and order details <br />
                    • View and update user information. View and create, update,
                    shipping address <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Administrators:
                    </span>
                    <br />
                    • Login, Logout <br />
                    • View Order list, List of Product, List of Customers <br />
                    • Create new and update products with options <br />
                    • Order processing according to actual process with the
                    statuses of approval, push through the carries, delivery
                    confirmation, exchange, cancellation <br />
                    • User manager <br />
                    <span
                      style={{
                        color: "#079992",
                        fontWeight: "bold",
                      }}
                    >
                      - Gained experience and skills on:
                    </span>
                    <br />
                    • Design UI with Ant Design <br />
                    • Database design and analysis <br />
                    • Working with redux toolkit <br />
                    • Working with API <br />
                    • Experience in using ReactJS <br />
                    • Experience in Responsive design <br />
                    <a
                      className="custome-tag-link"
                      href="https://github.com/quangdung861/project-devinc-website"
                      target="_blank"
                    >
                      - Source code:
                      https://github.com/quangdung861/project-devinc-website
                    </a>
                    <br />
                  </p>
                </div>
                <div className="resume-date">
                  <span>Jun 2022 - Present</span>
                </div>
              </div>
              <p
                className="resume-content-subname lead"
                style={{ marginTop: "20px" }}
              >
                OTHER PROJECTS
              </p>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <i
                    class="fa-solid fa-bookmark"
                    style={{ color: "#ffc107" }}
                  ></i>
                  &nbsp; Play tailwind css
                  <br />
                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/play-tailwind-css"
                    target="_blank"
                  >
                    - Source code:
                    https://github.com/quangdung861/play-tailwind-css
                  </a>
                </li>
                <li>
                  <i
                    class="fa-solid fa-bookmark"
                    style={{ color: "#ffc107" }}
                  ></i>
                  &nbsp; Vehicle rental website
                  <br />
                  <a
                    className="custome-tag-link"
                    href="https://github.com/quangdung861/vehicle-rental-website.git"
                    target="_blank"
                  >
                    - Source code:
                    https://github.com/quangdung861/vehicle-rental-website.git
                  </a>
                </li>
                <li>&nbsp; &nbsp; &nbsp; ...</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-3" className="resume-section">
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
                    I studied and obtained the Certificate of Professional
                    Front-End Programming course.
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> Here I learn from basic
                    to advanced how to write and apply new and practical
                    technologies in building websites with HTML, CSS, SASS,
                    Bootstrap, Javascript, ReactJS, Redux, NodeJS...
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> I really like my
                    school, here I get to work with everyone.
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> After college, I
                    succeeded with my graduation thesis on programming: ReactJS,
                    Redux, AntDesign... build a multi-functional e-commerce
                    website.
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> My graduate thesis was
                    granted 9.5/10, reached the top 3rd highest score in the
                    whole class. I was very happy about that moment.
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
                    <i class="fa-solid fa-bookmark"></i> When I was a student, I
                    studied a lot about career development in information
                    technology and then I decided to choose web programming
                    because I particularly like customize and draw on my
                    websites.
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> I really enjoy my
                    school, where I make new friends and we study together.
                  </p>
                  <p className="content-item ">
                    <i class="fa-solid fa-bookmark"></i> After college, I
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
        <div id="list-item-4" className="resume-section">
          <div className="resume-section-detail">
            <h2 className="title">SKILL</h2>
            <div className="resume-item">
              <div className="resume-content">
                <h3 className="resume-content-name"></h3>
                <p className="resume-content-subname">
                  PROGRAMMING LANGUAGES & TOOLS
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i class="fa-brands fa-react react-icon"></i>
                    <i class="fa-brands fa-js javascript-icon"></i>
                    <i class="fa-brands fa-node-js nodejs-icon"></i>
                    <i class="fa-brands fa-html5 html5-icon"></i>
                    <i class="fa-brands fa-css3-alt css3-icon"></i>
                    <i class="fa-brands fa-bootstrap bootstrap-icon"></i>
                    <i class="fa-brands fa-npm npm-icon"></i>
                    <i class="fa-brands fa-github github-icon"></i>
                    <i class="fa-brands fa-git-alt git-icon"></i>
                    <i class="fa-brands fa-trello trello-icon"></i>
                    <i class="fa-brands fa-sass sass-icon"></i>
                    <i class="fa-solid fa-font-awesome font-awesome-icon"></i>
                    <i class="fa-brands fa-yarn yarn-icon"></i>
                  </li>
                </ul>
                <p className="resume-content-subname">TECHNICAL</p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Proficient in Web
                    Development languages like HTML5, CSS3, Javascript.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    Ant Design, MaterialUI.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    ReactJS, VueJS, jQuery.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    React-Hook.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    React Router, Vue Router.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    Redux, Redux-Toolkit, Vuex.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    Redux-Hook.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using 
                    Redux-thunk, Redux-Saga.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in using
                    Styled-Components..
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in
                    Responsive Design.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in
                    Bootstrap, Tailwind CSS.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in Json
                    Server, Json Server Auth, MirageJS.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in
                    RESTful API, fetch, axios.
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Experience in
                    Firebase SDK V9, Firestore Cloud, Authentication.
                  </li>
                  <li>&nbsp; &nbsp; &nbsp; ...</li>
                </ul>
                <p className="resume-content-subname">WORKFLOW</p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Git, Github for
                    Teamwork
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Testing & Debugging
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Trello, Google
                    meet, Zoom
                  </li>
                  <li>&nbsp; &nbsp; &nbsp; ...</li>
                </ul>
                <p className="resume-content-subname">
                  LEARNING AND INTERESTED
                </p>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; Lodash
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; NodeJs
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; TypeScript
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp; FireBase
                  </li>
                  <li>&nbsp; &nbsp; &nbsp; ...</li>
                  <li>
                    <i class="fa-solid fa-check"></i> &nbsp;
                    <span style={{ fontStyle: "italic" }}>
                      If you do not have an awesome brain, you have to
                      ceaselessly learn!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="division-line" />
        <div id="list-item-5" className="resume-section">
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
        </div>
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
          <i class="bi bi-chevron-double-up up-to-top-icon"></i>
        </div>
      )}

      <div id="div-zoom-area" onClick={() => handleCloseModalArea()}>
        <img id="img-zoom-area-content" src={openModalArea} alt="" />
      </div>
    </div>
  );
}

export default App;

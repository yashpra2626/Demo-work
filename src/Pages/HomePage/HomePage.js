import React, { useState } from "react";
import "./HomePage.css";
import styled from "styled-components";
import CardImg from "../../images/card-bg.svg";
import UserImg from "../../images/user.svg";
import { MdSend, MdVerified, MdVerifiedUser } from "react-icons/md";
import { AiFillCaretRight, AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsShareFill, BsChatFill, BsThreeDots, BsDot } from "react-icons/bs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const HomePage = () => {
  const [isView, setIsView] = useState(false);
  const [isView2, setIsView2] = useState(false);

  const DUMMY_USER = [
    {
      name: "Steve Jobs",
      comany: "CEO of Apple",
    },
    {
      name: "Mark Zuckerberg",
      comany: "CEO of Facebook",
    },
    {
      name: "Ryan Roslansky",
      comany: "CEO of Linkedin",
    },
  ];

  const ClickHandler = () => {
    setIsView(!isView);
  };

  const ClickHandler2 = () => {
    setIsView2(!isView2);
  };

  return (
    <div className="home-page">
      <div className="left-div">
        <div className="left-first-sec">
          <img className="img-css" src={CardImg} />
          <img src={UserImg} className="user-img" />
          <h3>
            Yash Prajapati <MdVerified style={{ color: "orange" }} />
          </h3>
          <p>
            Freelance UX/UI developer, 100+ projects in web design, mobile app
            in flutter and creative projects. Open to offers.
          </p>
          <div className="sub-left-flex">
            <div className="sub-flex-sec">
              <h3>Followers</h3>
              <p>543</p>
            </div>
            <div className="sub-flex-sec">
              <h3>Following</h3>
              <p>234</p>
            </div>
          </div>
          <button className="btn-div">Manage Profile</button>
        </div>

        <div className="left-second-div">
          <h3>PEOPLE YOU MAY KNOW</h3>
          {DUMMY_USER.map((p) => {
            return (
              <div className="left-sec-card">
                <div className="left-card-1">
                  <img style={{ borderRadius: "50%" }} src={UserImg}></img>
                </div>
                <div className="left-card-2">
                  <h3>{p.name}</h3>
                  <p>{p.comany}</p>
                </div>
                <div className="left-card-3">
                  <button>FOLLOW</button>
                </div>
              </div>
            );
          })}

          {isView &&
            DUMMY_USER.map((p) => {
              return (
                <div className="left-sec-card">
                  <div className="left-card-1">
                    <img style={{ borderRadius: "50%" }} src={UserImg}></img>
                  </div>
                  <div className="left-card-2">
                    <h3>{p.name}</h3>
                    <p>{p.comany}</p>
                  </div>
                  <div className="left-card-3">
                    <button>FOLLOW</button>
                  </div>
                </div>
              );
            })}

          <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
          <h3
            onClick={ClickHandler}
            style={{ textAlign: "center", color: "blue" }}
          >
            {!isView ? "See All" : "Back"}
          </h3>
        </div>

        <div className="left-second-div">
          <h3>POPULAR TAGS</h3>
          <div className="popular-tags">
            <button>Government</button> <button>Bussiness</button>{" "}
            <button>Politics</button> <button>Education</button>{" "}
            <button>Petrol</button> <button>Travel</button>{" "}
            <button>Pollution</button>
          </div>
          <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
          <h3
            onClick={ClickHandler2}
            style={{ textAlign: "center", color: "blue" }}
          >
            {!isView ? "See All" : "Back"}
          </h3>
        </div>
      </div>

      <div className="mid-div">
        <div className="first-sec-mid">
          <img
            style={{ width: "50px", borderRadius: "50%" }}
            src={UserImg}
          ></img>
          <input element type="text" placeholder="Write Something..."></input>
        </div>
        <div className="first-sec-mid1">
          <input type="file" />
          <MdSend style={{ fontSize: "24px" }} />
        </div>
        <div className="mid-btn-div">
          <div
            style={{
              backgroundColor: "blue",
              borderRadius: "10px 0px 0px 0px",
            }}
            className="mid-btn-sec-flex"
          >
            Problems
          </div>
          <div className="mid-btn-sec-flex">Issues</div>
          <div className="mid-btn-sec-flex">Facts</div>
          <div className="mid-btn-sec-flex">Works</div>
        </div>
        <div className="mid-div-post">
          <div className="mid-div-flex">
            <div className="part-1">
              <img style={{ borderRadius: "50%" }} src={UserImg}></img>
            </div>
            <div className="part-2">
              <h3>
                Yash Prajapati <MdVerifiedUser style={{ color: "green" }} />
              </h3>
              <p>
                Madhya Pradesh(s){" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                Problem{" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                <span style={{ color: "blue", fontWeight: "bolder" }}>
                  Governmnet{" "}
                </span>
              </p>
            </div>
            <div className="part-3">
              20 days ago{" "}
              <BsThreeDots
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "0.6rem",
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              marginTop: "0.6rem",
              marginLeft: "0.5rem",
            }}
          >
            All Canadians have access to medical services at a reasonable price.
            Second, Canada has a high standard of education. Students are taught
            by well‐trained teachers and are encouraged to continue studying at
            university. Finally, Canada's cities are clean and efficiently
            managed. Canadian cities have many parks and lots of space for
            people to live.
          </p>
          {isView2 && (
            <p
              style={{
                fontSize: "16px",
                marginTop: "0.6rem",
                marginLeft: "0.5rem",
              }}
            >
              Hellenism was the combination of Greek, Persian, and Egyptian
              cultures. During this remarkable time period, people were
              encouraged to pursue a formal education and produce many different
              kinds of art. New forms of math, science, and design made a great
              impact on society. How does the example prove your thesis (Why is
              this example important? How does it support the main claim of your
              thesis statement
            </p>
          )}
          <a
            onClick={ClickHandler2}
            style={{
              fontWeight: "bolder",
              color: "blue",
              marginLeft: "0.5rem",
            }}
          >
            {!isView2 ? "Read More" : "Back"}
          </a>
          <div className="mid-last-flex">
            <p>
              <AiFillLike
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              />{" "}
              <span style={{ marginRight: "1rem" }}>672</span>{" "}
              <AiFillDislike
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              />
              <span style={{ marginRight: "1rem" }}>122</span>
              <BsChatFill style={{ fontWeight: "bolder", fontSize: "20px" }} />
              <span style={{ marginRight: "1rem" }}> 6</span>
            </p>
            <p style={{ textAlign: "end" }}>
              <BsShareFill style={{ color: "blue", marginRight: "0.5rem" }} />{" "}
              Share
            </p>
          </div>
        </div>

        <div className="mid-div-post">
          <div className="mid-div-flex">
            <div className="part-1">
              <img style={{ borderRadius: "50%" }} src={UserImg}></img>
            </div>
            <div className="part-2">
              <h3>
                Yash Prajapati <MdVerifiedUser style={{ color: "green" }} />
              </h3>
              <p>
                Madhya Pradesh(s){" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                Problem{" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                <span style={{ color: "blue", fontWeight: "bolder" }}>
                  Governmnet{" "}
                </span>
              </p>
            </div>
            <div className="part-3">
              20 days ago{" "}
              <BsThreeDots
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "0.6rem",
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              marginTop: "0.6rem",
              marginLeft: "0.5rem",
            }}
          >
            All Canadians have access to medical services at a reasonable price.
          </p>

          <img
            style={{
              width: "90%",
              marginLeft: "1rem",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
            src="https://th.bing.com/th/id/OIP.9rOV3MHYqTfRp4XzwKPU4gHaEo?w=264&h=180&c=7&r=0&o=5&pid=1.7"
          ></img>

          <div className="mid-last-flex">
            <p>
              <AiFillLike
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              />{" "}
              <span style={{ marginRight: "1rem" }}>672</span>{" "}
              <AiFillDislike
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              />
              <span style={{ marginRight: "1rem" }}>122</span>
              <BsChatFill style={{ fontWeight: "bolder", fontSize: "20px" }} />
              <span style={{ marginRight: "1rem" }}> 6</span>
            </p>
            <p style={{ textAlign: "end" }}>
              <BsShareFill style={{ color: "blue", marginRight: "0.5rem" }} />{" "}
              Share
            </p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="my-groups">
          <h1>MY GROUPS</h1>
          <div className="add-new">+ ADD NEW</div>
          <div className="group-card">
            <div className="gc-1">
              <h3>Bharat</h3>
              <button
                style={{ marginLeft: "1rem" }}
                className="btn btn-primary"
              >
                Country
              </button>
            </div>
            <div className="gc-2">
              <h3>Members</h3>
              <p>528</p>
            </div>
            <div className="gc-3">
              <h3>Posts</h3>
              <p>528</p>
            </div>
            <div className="gc-4">
              <AiFillCaretRight />
            </div>
          </div>
          <div className="group-card">
          <div className="gc-1">
            <h3>Bharat</h3>
            <button style={{marginLeft:"1rem"}} className="btn btn-primary">Country</button>
          </div>
          <div className="gc-2">
            <h3>Members</h3>
            <p>528</p>
          </div>
          <div className="gc-3">
            <h3>Posts</h3>
            <p>528</p>
          </div>
          <div className="gc-4">
          <AiFillCaretRight/>
          </div>
        </div>
        <div className="group-card">
        <div className="gc-1">
          <h3>Bharat</h3>
          <button style={{marginLeft:"1rem"}} className="btn btn-primary">Country</button>
        </div>
        <div className="gc-2">
          <h3>Members</h3>
          <p>528</p>
        </div>
        <div className="gc-3">
          <h3>Posts</h3>
          <p>528</p>
        </div>
        <div className="gc-4">
        <AiFillCaretRight/>
        </div>
      </div>
        </div>
        <div className="trending-issue">
          <h3>TRENDING ISSUE</h3>
          <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
          <div className="right-last-flex">
            <div className="last-flex0">1.</div>
            <div className="last-flex1">
              <h3>Did Procreate change the new illustration and when?</h3>
              <p>
                Dharbhanga{" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                <span style={{ color: "blue" }}> Politics</span>
              </p>
            </div>
            <div className="last-flex2">
              <img src={UserImg} />
            </div>
          </div>
          <div className="right-last-flex">
            <div className="last-flex0">1.</div>
            <div className="last-flex1">
              <h3>Did Procreate change the new illustration and when?</h3>
              <p>
                Dharbhanga{" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                <span style={{ color: "blue" }}> Politics</span>
              </p>
            </div>
            <div className="last-flex2">
              <img src={UserImg} />
            </div>
          </div>
          <div className="right-last-flex">
            <div className="last-flex0">1.</div>
            <div className="last-flex1">
              <h3>Did Procreate change the new illustration and when?</h3>
              <p>
                Dharbhanga{" "}
                <BsDot style={{ fontWeight: "bolder", fontSize: "20px" }} />
                <span style={{ color: "blue" }}> Politics</span>
              </p>
            </div>
            <div className="last-flex2">
              <img src={UserImg} />
            </div>
          </div>
          <h3
            style={{
              marginTop: "2rem",
              textAlign: "center",
              fontSize: "15px",
              padding: "2%",
              backgroundColor: "blue",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            View All
          </h3>
        </div>
      </div>
    </div>
  );
};

const Search = styled.div`
  margin-top: 1rem;
  margin-left: 10%;
  margin-right: 2rem;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 300px;
    input {
      border: 10px;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 16px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HomePage;

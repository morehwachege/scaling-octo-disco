import React from "react";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";
import user5 from "../assets/images/img5.jpg";

function SideBar() {
  return (
    <section className="sidebar-section px-4 py-3">
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user1} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0 typing">Typing...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          <span className="message-pill align-item-start">1</span>
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user2} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0 new-message">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          <span className="message-pill align-item-start ">3</span>
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user5} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          {/* <span className="message-pill align-item-start">1</span> */}
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user4} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0 new-message">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          <span className="message-pill align-item-start">5</span>
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user5} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          {/* <span className="message-pill align-item-start">1</span> */}
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user2} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          {/* <span className="message-pill align-item-start">1</span> */}
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user4} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0 new-message">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          <span className="message-pill align-item-start">5</span>
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user5} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0">Hey I forgot to tell you...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          {/* <span className="message-pill align-item-start">1</span> */}
        </div>
      </div>
      <div className="chat d-flex justify-content-start gap-3 px-4  align-items-center flex-nowrap my-2">
        <div className="profile">
          <img className="profile-img" src={user2} alt="profile" />
        </div>
        <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
          <h6 className="text-start fw-bold">Marie Davis</h6>
          <p className="mb-0 typing">Typing...</p>
        </div>
        <div className="chat-time d-flex flex-column align-self-start mt-3 ">
          <p className="fs-6 mb-2">12:34pm</p>
          {/* <span className="message-pill align-item-start">1</span> */}
        </div>
      </div>
    </section>
  );
}

export default SideBar;

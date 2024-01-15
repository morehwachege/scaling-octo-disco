import React from "react";
import SideBar from "../components/sideBar";
import ChatBox from "../components/chatBox";

function Chat() {
  let closed = false;
  function handleSidebarCollapse(e) {
    closed = false ? closed : true;
    if (closed) {
      closed = true;
    } else {
      closed = false;
    }
  }
  return (
    <section className="container-fluid p-3 d-flex top-container flex-row flex-nowrap">
      <SideBar />
      <ChatBox />
    </section>
  );
}

export default Chat;

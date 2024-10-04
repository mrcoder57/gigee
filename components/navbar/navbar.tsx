"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import Notifications from "../notificationns/notification";

function navbar() {
  return (
    <div className="fixed flex flex-row items-center justify-between w-full bg-white z-10 shadow-sm overflow-x-hidden h-20 ">
      <div className="border-b-1px flex flex-row items-center justify-between w-full h-12 ">
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-x-3
                overflow-x-hidden
               
                "
          >
            <Logo />
            <Search />
           <div className=" flex flex-row items-center gap-x-3 overflow-x-hidden">
            <Notifications />
            <Usermenu />
            </div>
          </div>
      
        </Container>
      </div>
    </div>
  );
}

export default navbar;

import React from "react";
import SideBar from "../components/sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="flex ">
            <SideBar />
            <div className="p-4 ">{children}</div>
        </div>
    );
}

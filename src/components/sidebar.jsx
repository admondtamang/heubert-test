import Link from "next/link";
import React from "react";

export default function SideBar() {
    return (
        <aside className="w-64 h-screen bg-red-200  p-4" style={{ minWidth: "16rem" }} aria-label="Sidebar">
            <ul className="h-full">
                <li className="bg-slate-400 rounded flex mb-2 justify-center">
                    <Link href="/leads" className="p-2 bg-slate-900 rounded" passHref>
                        Leads
                    </Link>
                </li>
                <li className="bg-slate-400 rounded flex mb-2 justify-center">
                    <Link href="/reports" className="p-2 bg-slate-900 rounded" passHref>
                        Reports
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

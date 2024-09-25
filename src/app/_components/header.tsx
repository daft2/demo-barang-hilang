import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between gap-16 bg-neutral-800 p-8 font-semibold text-neutral-50 shadow-sm">
      <div>LostNFound</div>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/history">History</Link>
      </div>
      <div className="flex">
        <Link href="/">Logout</Link>
      </div>
    </div>
  );
};

export default Header;

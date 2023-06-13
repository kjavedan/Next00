import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h3>
        <Link href={"/dashboard/users"}>users</Link>
      </h3>
    </div>
  );
}

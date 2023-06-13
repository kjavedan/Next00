import { getUsers } from "@/app/lib/UsreService";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const UsersData: Promise<User[]> = getUsers();
  const users = await UsersData;
  console.log(users);

  const content = users.map((user) => (
    <p key={user.id}>
      <span>{user.id}.</span> <Link href={`users/${user.id}`}>{user.name}</Link>
    </p>
  ));

  return content;
}

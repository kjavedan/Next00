import { getUser, getUserPosts, getUsers } from "@/app/lib/UsreService";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  if (user) {
    return {
      title: user.name,
    };
  }
  return {
    title: "Not Found",
  };
};

export const generateStaticPrams = async () => {
  const usersData: Promise<User[]> = getUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
};

export default async function page({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  if (!user) notFound();

  return (
    <>
      <h2>{user.username}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <p>{user.phone}</p>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

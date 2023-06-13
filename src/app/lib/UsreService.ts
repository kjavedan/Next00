export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) return undefined;

  return res.json();
};

export const getUser = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {next : {revalidate: 60}})
  if(!res.ok) return undefined

  return res.json()
}

export const getUserPosts = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  if(!res.ok) return undefined

  return res.json()
}
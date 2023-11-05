import { useEffect, useState } from "react";
interface Post {
  id: number;
  slug: string;
  content: string;
  title: string;
}
export default function Sesion() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/posts")
      .then((response) => response.json())
      .then((posts: Post[]) => setPosts(posts));
  }, []);

  return (
    <div className="w-full h-full flex flex-row">
      <form
        className="flex flex-col "
        action="http://localhost:8000/api/v1/posts"
        method="post"
      >
        <label className="w-auto h-5 text-white" htmlFor="email">
          Correo
        </label>
        <input className="w-auto h-5 bg-white" type="email" name="email" />
        <label className="w-auto h-5 text-white" htmlFor="contrasena">
          Contraseña
        </label>
        <input className="w-auto h-5" type="number" name="contrasena" />
        <button className="w-auto h-5" type="submit">
          Enviar
        </button>
      </form>
      {/* <ul>
        {posts.map((post: Post, index: number) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

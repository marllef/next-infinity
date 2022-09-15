import { useEffect, useState } from "react";
import { PostWithAuthor } from "~/interfaces/Post";
import { CreatePost } from "../CreatePost";
import { Post } from "../Post";

interface Props {
  data: PostWithAuthor[];
}

export const PostList = ({ data }: Props) => {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  return (
    <ul className="flex relative bg-slate-900 flex-col w-full space-y-3 px-5 h-full overflow-auto scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600 active:scrollbar-thumb-slate-800 scrollbar-thin">
      {(posts || []).map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}

      {!posts.length && (
        <h5 className="px-4 py-2 w-full text-center text-slate-500">
          Nenhuma publicação
        </h5>
      )}
    </ul>
  );
};

import { useEffect, useState } from "react";
import { PostWithAuthor } from "~/interfaces/Post";
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
    <ul className="flex flex-col w-full max-w-lg space-y-3 mx-auto h-full overflow-auto">
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

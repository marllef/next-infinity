import type { NextPage } from "next";
import { useEffect } from "react";
import { CreatePost } from "~/components/CreatePost";
import { PostList } from "~/components/PostList";
import { useFetch } from "~/hooks/useFetch";
import { AppLayout } from "~/layouts/AppLayout";
import { showError } from "~/utils/toast";

const Home: NextPage = () => {
  const { data, error } = useFetch("/api/posts");

  useEffect(() => {
    if (error) showError(error);
  }, [error]);

  return (
    <AppLayout noFooter>
      <CreatePost />
      <PostList data={data} />
    </AppLayout>
  );
};

export default Home;

import { Input } from "@mui/material";
import type { NextPage } from "next";
import colors from "tailwindcss/colors";
import { PostList } from "~/components/PostList";
import { HeaderBar } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen bg-slate-900">
      <HeaderBar />
      <main className="w-full p-2 text-slate-50">
        <div id="post-list">
          <PostList />
        </div>
      </main>
    </div>
  );
};

export default Home;

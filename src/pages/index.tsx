import { Input } from "@mui/material";
import type { NextPage } from "next";
import colors from "tailwindcss/colors";
import { HeaderBar } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-start w-full h-screen bg-slate-900">
      <HeaderBar />
      <main></main>
    </div>
  );
};

export default Home;

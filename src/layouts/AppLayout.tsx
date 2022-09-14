import Head from "next/head";
import { ReactNode } from "react";
import { HeaderBar } from "~/components/Header";

interface Props {
  children?: ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
  pageTitle?: string;
}

export const AppLayout = ({
  children,
  noHeader = false,
  noFooter = false,
  pageTitle = "Infinity",
}: Props) => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen  max-h-screen bg-slate-900">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {!noHeader && <HeaderBar />}
      <main className="flex flex-col items-center space-y-2 w-full h-full py-2 px-4 text-slate-50 max-w-4xl mx-auto overflow-hidden">
        {children}
      </main>
      {!noFooter && (
        <footer className="flex flex-col w-full justify-center items-center ">
          <p className="text-slate-300 text-xs">Developed by Marllef</p>
        </footer>
      )}
    </div>
  );
};

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
  pageTitle = "Infinity Blog",
}: Props) => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen  max-h-screen bg-slate-900">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {!noHeader && <HeaderBar />}
      <main className="flex flex-col items-center space-y-2 w-full h-full px-4 text-slate-50 max-w-4xl mx-auto overflow-auto scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600 active:scrollbar-thumb-slate-800 scrollbar-thin">
        {children}
      </main>

      {!noFooter && (
        <footer className="flex flex-col w-full justify-center items-center ">
          <p className="text-slate-300 text-xs text-center py-1">
            Developed by Marllef
          </p>
        </footer>
      )}
    </div>
  );
};

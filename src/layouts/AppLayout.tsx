import { ReactNode } from "react";
import { HeaderBar } from "~/components/Header";

interface Props {
  children?: ReactNode;
  withHeader?: boolean;
  withFooter?: boolean;
}

export const AppLayout = ({
  children,
  withHeader = true,
  withFooter = true,
}: Props) => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-screen  max-h-screen bg-slate-900">
      {withHeader && <HeaderBar />}
      <main className="w-full h-full p-2 text-slate-50 max-w-4xl mx-auto">
        {children}
      </main>
      {withFooter && (
        <footer className="flex flex-col w-full justify-center items-center ">
          <p className="text-slate-300 text-xs">Developed by Marllef</p>
        </footer>
      )}
    </div>
  );
};

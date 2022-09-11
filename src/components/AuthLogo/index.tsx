export const AuthLogo = () => {
  return (
    <div className="flex justify-center items-center h-[25%]">
      <div className="flex flex-col space-y-3 w-56 pt-4 justify-center items-center">
        <img src="/logo.png" />
        <span className="text-3xl text-violet-400">
          Infinity
          <span className="text-slate-50 font-bold uppercase bg-violet-500 rounded-full px-2 py-1 text-xs">
            Jobs
          </span>
        </span>
      </div>
    </div>
  );
};

import { PostWithAuthor } from "~/interfaces/Post";
import { PostHeader } from "./PostHeader";
import { StarToogle } from "./StarToogle";

interface Props extends PostWithAuthor {}

export const Post = ({
  author,
  id,
  createdAt,
  stars,
  title,
  description,
}: Props) => {
  return (
    <>
      <section
        id={id}
        className="w-full min-h-[7rem] bg-gray-800 space-y-2 px-3 py-2 rounded-t"
      >
        <PostHeader
          date={new Date(createdAt)}
          user={{
            name: author?.name || "Anonimous",
            photo: author?.photoUrl ?? "",
          }}
        />
        <div className="flex flex-col w-full justify-between">
          <h3 className="capitalize font-bold text-xl px-2">{title}</h3>
          <p className="text-sm text-slate-300 px-2 text-justify">
            {description}
          </p>
        </div>
      </section>
      <div className="flex bg-gray-700 h-8 px-2 items-center text-xs rounded-b">
        <StarToogle stars={stars || 0} />
      </div>
    </>
  );
};

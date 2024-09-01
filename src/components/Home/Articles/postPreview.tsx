import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/Home/Articles/${props.slug}`}>
        <div className=" w-3/4 h-full mx-auto bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-950  dark:to-cyan-900 rounded-3xl p-4 shadow-[-30px_30px_10px_10px_#00000024]">
          <div className="flex justify-center mb-10">
            <div
              style={{
                width: 400,
                height: 200,
                position: "relative",
              }}
            >
              <Image
                className="rounded-full"
                alt="/"
                layout="fill"
                objectFit="cover"
                src={props.imagePath}
              />
            </div>
          </div>
          <h1 className="font-bold text-xl text-white dark:text-[#f1e0ca] hover:underline">
            {props.title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 ">
            {props.date}
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            By: {props.author}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;

// w-3/4 h-full mx-auto border border-slate-200 p-4 rounded-2xl shadow-lg bg-white dark:bg-zinc-900

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../../../config";

interface Post {
  postcontent: string;
  postid: string;
  posttimestamp: string;
  posttitle: string;
  topicid: number;
  userid: string;
  username: string;
  profile_pic_id: number;
}

type MutationVariables = {
  postId: string;
  topicId: number | null;
  userId: string;
};

const fetchPosts = async (topicId: number | null, page: number = 0) => {
  const res = await fetch(
    `${API_BASE_URL}/topics/${topicId}/posts?page=${page}`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const deletePostMutation = async ({
  postId,
  topicId,
  userId,
}: MutationVariables) => {
  const response = await fetch(
    `${API_BASE_URL}/topics/${topicId}/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    }
  );
  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("User not authorized to delete post");
    }
    throw new Error("Error deleting post");
  }
  return response.json();
};

const GetAllPosts = () => {
  const router = useRouter();
  const { topic } = router.query;
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  let topicId: number | null;
  switch (topic) {
    case "Anxiety":
      topicId = 3;
      break;
    case "OCD":
      topicId = 1;
      break;
    case "DPDR":
      topicId = 2;
      break;
    default:
      topicId = null;
  }

  const { data, error, isFetching, status } = useQuery(
    ["posts", topicId, page],
    () => fetchPosts(topicId, page),
    { enabled: !!topicId }
  );

  const filteredPosts = data?.filter(
    (post: Post) =>
      post.posttitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.postcontent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deletePost = useMutation(deletePostMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", topicId]);
      alert("Post successfully deleted");
    },
    onError: (error) => {
      alert("error");
    },
  });

  return (
    <div>
      <header className="text-4xl font-bold text-center mb-8 mt-10">
        Create a post in {topic} forum!
      </header>

      <div className="flex justify-center mt-7">
        <Link href={`/MembersHome/Forum/Topics/${topic}/UserPost`}>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-36 xl:w-48 text-5xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            +
          </button>
        </Link>
      </div>

      <div className="flex justify-center mt-12">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-3xl px-4 py-2 outline-none w-80 xl:w-[500px] border-2 border-solid border-purple-200 h-14 shadow-md"
          type="search"
          placeholder="Search Forum..."
        />
      </div>

      <div className="mt-10 flex flex-col items-center gap-16 mb-10">
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && (
          <div>No posts yet. Be The First To Share Your Thoughts!</div>
        )}

        {status === "success" &&
          filteredPosts &&
          filteredPosts.map((post: Post) => (
            <div
              key={post.postid}
              className="w-[370px] md:w-[500px] xl:w-[600px]"
            >
              <Link href={`/MembersHome/Forum/Topics/${topic}/${post.postid}`}>
                <div
                  className={`bg-white dark:bg-cyan-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]`}
                >
                  <div className="text-xl font-bold flex justify-center">
                    {post.posttitle}
                  </div>

                  <div className="flex justify-between mt-3 items-center">
                    <div className="flex items-center">
                      <Image
                        alt="/"
                        width={70}
                        height={100}
                        src={`/images/User-Profile/profile_pic_${post.profile_pic_id}.png`}
                      ></Image>
                      <div className="font-bold">{post.username}</div>
                    </div>
                    <div className="ml-32">
                      Posted {formatDistanceToNow(new Date(post.posttimestamp))}{" "}
                      ago
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    {post.postcontent.length > 70
                      ? post.postcontent.substring(0, 70) + "....."
                      : post.postcontent}
                  </div>

                  <div className="flex justify-end">
                    {(userId === post.userid || userId === "21") && (
                      <button
                        className="mt-4"
                        onClick={() =>
                          deletePost.mutate({
                            postId: post.postid,
                            topicId: topicId,
                            userId: userId,
                          })
                        }
                      >
                        <Image
                          alt="/"
                          height={100}
                          width={30}
                          src="/images/Forum/delete.png"
                        ></Image>
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="flex justify-center gap-10 pb-10">
        {page > 0 && (
          <button
            className="rounded-3xl px-8 py-2 bg-black text-white"
            onClick={() => setPage(page - 1)}
          >
            Back page
          </button>
        )}
        {data && data.length > 29 && (
          <button
            className="rounded-3xl px-8 py-2 bg-black text-white"
            onClick={() => setPage(page + 1)}
          >
            Next page
          </button>
        )}
      </div>
    </div>
  );
};

export default GetAllPosts;

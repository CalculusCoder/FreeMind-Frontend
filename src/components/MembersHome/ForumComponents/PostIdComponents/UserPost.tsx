import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../../../config";

type MutationVariables = {
  postId: string;
  topicId: number | null;
  userId: string | undefined;
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

const fetchPost = async (
  topicId: number | null,
  postId: string | string[] | undefined
) => {
  const res = await fetch(`${API_BASE_URL}/topics/${topicId}/posts/${postId}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const UserPost = () => {
  const router = useRouter();
  const { postId, topic } = router.query;
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const queryClient = useQueryClient();

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

  const deletePost = useMutation(deletePostMutation, {
    onSuccess: () => {
      router.push(`/MembersHome/Forum/Topics/${topic}`);
      queryClient.invalidateQueries(["posts", topicId]);
      alert("Post successfully deleted");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(["post", topicId, postId], () => fetchPost(topicId, postId), {
    enabled: !!topicId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !post) {
    return <div>Error loading post</div>;
  }

  return (
    <div>
      <div className="mt-10 flex flex-col items-center gap-8 mb-10">
        <div className="bg-white dark:bg-cyan-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]">
          <header className="text-xl font-bold flex justify-center">
            {post.posttitle}
          </header>
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
              Posted {formatDistanceToNow(new Date(post.posttimestamp))} ago
            </div>
          </div>
          <div className="mt-4">{post.postcontent}</div>
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
      </div>
    </div>
  );
};

export default UserPost;

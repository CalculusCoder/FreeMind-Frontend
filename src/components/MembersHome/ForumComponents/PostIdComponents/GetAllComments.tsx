import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import UserComment from "./UserComment";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../../../config";

type Comments = {
  commentcontent: string;
  commentid: string;
  commenttimestamp: string;
  postid: string;
  userid: string;
  username: string;
  profile_pic_id: number;
};

type MutationVariables = {
  postId: string;
  topicId: number | null;
  userId: string;
  commentId: string;
};

const fetchComments = async (
  topicId: number | null,
  postId: string | string[] | undefined
) => {
  const res = await fetch(
    `${API_BASE_URL}/topics/${topicId}/posts/${postId}/comments`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const deleteCommentMutation = async ({
  postId,
  topicId,
  userId,
  commentId,
}: MutationVariables) => {
  const response = await fetch(
    `${API_BASE_URL}/topics/${topicId}/posts/${postId}/comments/${commentId}`,
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
    throw new Error("Error deleting Comment");
  }
  return response.json();
};

const GetAllComments = () => {
  const [errMessage, setErrMessage] = useState<string>("");
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

  const { data, error, isFetching, status } = useQuery(
    ["comments", topicId, postId],
    () => fetchComments(topicId, postId),
    { enabled: !!topicId }
  );

  const deleteComment = useMutation(deleteCommentMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", topicId, postId]);
      alert("Post successfully deleted");
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <UserComment />
      <header className="text-center text-xl">{errMessage}</header>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && (
        <div className="text-center mt-10 text-xl">
          No comments yet. Be The First To Share Your Thoughts!
        </div>
      )}
      <div className="mt-10 flex flex-col items-center gap-8 pb-10">
        {status === "success" &&
          data &&
          data.map((comment: Comments) => (
            <div
              className="bg-white dark:bg-cyan-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]"
              key={comment.commentid}
            >
              <div className="flex justify-between mt-3 items-center">
                <div className="flex items-center">
                  <Image
                    alt="/"
                    width={70}
                    height={100}
                    src={`/images/User-Profile/profile_pic_${comment.profile_pic_id}.png`}
                  ></Image>
                  <div className="font-bold">{comment.username}</div>
                </div>
                <div className="ml-32">
                  Posted{" "}
                  {formatDistanceToNow(new Date(comment.commenttimestamp))} ago
                </div>
              </div>
              <div className="mt-4">{comment.commentcontent}</div>
              <div className="flex justify-end">
                {(userId === comment.userid || userId === "21") && (
                  <button
                    className="mt-4"
                    onClick={() =>
                      deleteComment.mutate({
                        postId: comment.postid,
                        topicId: topicId,
                        userId: userId,
                        commentId: comment.commentid,
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
          ))}
      </div>
    </div>
  );
};

export default GetAllComments;

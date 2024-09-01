import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import * as yup from "yup";
import { API_BASE_URL } from "../../../../../config";
import React from "react";

const UserComment = () => {
  const router = useRouter();
  const { postId, topic } = router.query;
  const [commentContent, setCommentContent] = useState("");
  const { data: session } = useSession();
  const userId = session?.user?.id;

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

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const mutation = useMutation(
    async () => {
      const schema = yup.object().shape({
        userId: yup.string().required(),
        commentContent: yup.string().min(2).max(3000).required(),
      });

      await schema.validate({ userId, commentContent });

      const response = await fetch(
        `${API_BASE_URL}/topics/${topicId}/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, commentContent }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error creating comment. Please try again");
      }
    },
    {
      onSuccess: () => {
        alert("Comment was created successfully!");
      },
      onError: (error) => {
        alert("Error: " + error);
      },
      onSettled: () => {
        setCommentContent("");
      },
    }
  );

  const sendComment = () => {
    mutation.mutate();
  };

  return (
    <div>
      <main>
        <header className="text-center">Comment</header>
        <div className="flex flex-col gap-10 items-center">
          <textarea
            className="h-48 w-[380px]"
            name="content"
            placeholder="Enter comment"
            value={commentContent}
            onChange={onContentChange}
            required
            maxLength={3000}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 hover:to-purple-500 text-2xl hover:ease-in hover:duration-200 rounded-full py-3 px-6 mt-11 font-medium text-white w-40 xl:w-48"
            onClick={sendComment}
          >
            {mutation.isLoading ? "Commenting..." : "Comment"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserComment;

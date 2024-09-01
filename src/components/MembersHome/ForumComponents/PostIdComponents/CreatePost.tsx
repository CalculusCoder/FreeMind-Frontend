import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../../config";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const router = useRouter();
  const { topic } = router.query;

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
    setPostContent(e.target.value);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const mutation = useMutation(
    async () => {
      const schema = yup.object().shape({
        userId: yup.string().required(),
        postTitle: yup.string().min(5).max(75).required(),
        postContent: yup.string().min(10).max(5000).required(),
      });

      await schema.validate({ userId, postTitle, postContent });

      const response = await fetch(`${API_BASE_URL}/topics/${topicId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, postTitle, postContent }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error creating post. Please try again");
      }
    },
    {
      onSuccess: (data) => {
        router.push(`/MembersHome/Forum/Topics/${topic}/${data.postid}`);
        alert("Post was created successfully!");
      },
      onError: (error) => {
        alert("Error: " + error);
      },
      onSettled: () => {
        setPostTitle("");
        setPostContent("");
      },
    }
  );

  const sendPost = () => {
    mutation.mutate();
  };
  return (
    <div className="mt-4">
      <main>
        <header className="text-center text-3xl font-semibold mb-4">
          FreeMind Anxiety Forum
        </header>
        <div className="flex flex-col gap-10 items-center">
          <input
            className="h-12 w-72 md:w-96"
            type="text"
            name="title"
            placeholder="Enter post title"
            onChange={onTitleChange}
            required
            maxLength={75}
          />
          <textarea
            className="h-96 w-80 md:w-[450px]"
            name="content"
            placeholder="Enter post content"
            onChange={onContentChange}
            required
            maxLength={5000}
          />
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 hover:to-purple-500 text-2xl hover:ease-in hover:duration-200 rounded-full py-3 px-6 mt-11 font-medium text-white w-40 xl:w-48"
            onClick={sendPost}
          >
            {mutation.isLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;

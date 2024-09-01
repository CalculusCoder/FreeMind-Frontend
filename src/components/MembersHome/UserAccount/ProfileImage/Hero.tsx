import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../../../config";

// Import images or use URLs
const images: string[] = [
  "/images/User-Profile/profile_pic_1.png",
  "/images/User-Profile/profile_pic_2.png",
  "/images/User-Profile/profile_pic_3.png",
  "/images/User-Profile/profile_pic_4.png",
  "/images/User-Profile/profile_pic_5.png",
  "/images/User-Profile/profile_pic_6.png",
  "/images/User-Profile/profile_pic_7.png",
  "/images/User-Profile/profile_pic_8.png",
  "/images/User-Profile/profile_pic_9.png",
  "/images/User-Profile/profile_pic_10.png",
];

interface UpdateProfileImageBody {
  profile_pic_id: number | null;
}

async function updateProfileImage({
  userId,
  imageId,
}: {
  userId: string;
  imageId: number | null;
}) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/profile_pic`, {
    method: "PUT",
    body: JSON.stringify({
      profile_pic_id: imageId,
    } as UpdateProfileImageBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update profile image");
  }

  return response.json();
}

const Hero: React.FC = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation(updateProfileImage, {
    onSuccess: (data) => {
      alert(data.message);
      queryClient.invalidateQueries(["userProfilePic", userId]);
    },
    onError: (error) => {
      console.error("Failed to update profile image:", error);
    },
  });

  const handleImageSelection = (imageId: number | null) => {
    setSelectedImage(imageId);
  };

  const handleSaveChanges = () => {
    if (userId && selectedImage !== null) {
      mutation.mutate({ userId, imageId: selectedImage });
    } else {
      alert("User ID not found or no image selected");
    }
  };

  return (
    <div>
      <div className="text-center text-4xl font-semibold mt-8">
        Change Profile Picture
      </div>
      <div className="flex flex-wrap gap-36 justify-center items-center mt-16">
        {images.map((image, index) => (
          <div key={index + 1} className="gap-10">
            <Image
              width={200}
              height={100}
              key={index + 1}
              src={image}
              alt="Profile"
              className={
                selectedImage === index + 1
                  ? "border-2 border-blue-500 border-solid"
                  : ""
              }
              onClick={() => handleImageSelection(index + 1)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 pb-16">
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Hero;

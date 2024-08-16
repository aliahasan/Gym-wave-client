import React, { useState } from "react";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import AddArticlesForm from "./AddArticlesForm";
import { imageUpload } from "../../Api/utils/imagebb";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddArticles = () => {
  const { role } = useRole();
  const { user } = useAuth();
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: async (article) => {
      const { data } = await axiosSecure.post("/articles", article);
      return data;
    },
    onError: (error) => {
      toast.error("Failed to add article" , error);
      setIsSubmitting(false); 
    },
    onSuccess: () => {
      toast.success("Article added successfully");
      setIsSubmitting(false); // Stop loading on success
    },
  });

  const handleSubmit = async (e, description) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.files[0];
    setIsSubmitting(true); // Start loading
    const author = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      authorRole: role,
    };

    try {
      // Upload the image
      const image_url = await imageUpload(image);
      const article = {
        title,
        image: image_url,
        content: description,
        author,
        date: new Date(),
      };
      // Send the article data to the backend
      await mutateAsync(article);
      form.reset();
      setDescription("");
    } catch (error) {
      toast.error("Failed to upload image");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AddArticlesForm
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
        isSubmitting={isSubmitting} 
      />
    </div>
  );
};

export default AddArticles;

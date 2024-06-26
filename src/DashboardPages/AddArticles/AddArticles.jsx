import React from "react";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import AddArticlesForm from "./AddArticlesForm";
import { imageUpload } from "../../Api/utils/imagebb";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddArticles = () => {
  const {role} = useRole();
  const { user, loading, setLoading } = useAuth();

  const { mutateAsync } = useMutation({
    mutationFn: async (article) => {
      const { data } = await axiosSecure.post("/articles", article);
      return data;
    },
    onError: (error) => {
      console.error("Error adding article:", error);
      toast.error("Failed to add article");
      setLoading(false);
    },
    onSuccess: () => {
      toast.success("Article added successfully");
      setLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const video = form.video.value;
    const description = form.description.value;
    const date = form.date.value;
    const author = {
      authorType: role,
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };
    try {
      const image_url = await imageUpload(image);
      const article = {
        title,
        video,
        date,
        description,
        image: image_url,
        author,
      };
      await mutateAsync(article);
      form.reset();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
    setLoading(false);
  };

  return (
    <div>
      <AddArticlesForm handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default AddArticles;

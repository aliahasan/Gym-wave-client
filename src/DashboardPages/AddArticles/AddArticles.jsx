import React, { useState } from "react";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import AddArticlesForm from "./AddArticlesForm";
import { imageUpload } from "../../Api/utils/imagebb";
// import AddArticlesForm from "./AddArticlesForm";

const AddArticles = () => {
  const [role] = useRole();
  const { user, loading, setLoading } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const form = e.target
    const title = form.title.value;
    const image = form.image.files[0];
    const video = form.video.value;
    const date = form.date.value;
    const description = form.description.value;
    const author = {
      userRole:role,
      name: user?.displayName,
      email:user?.email,
      photo:user?.photoURL,

    }
    try {
      const image_url = await imageUpload(image)
      const articles = {
        title,
        video,
        date,
        description,
        author,
        image: image_url
      }
      console.log(articles)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  };



  return (
    <div>
     <AddArticlesForm
     handleSubmit={handleSubmit}
     loading={loading}
     ></AddArticlesForm>
    </div>
  );
};

export default AddArticles;

import React, { useState } from "react";
import AddClassForm from "./AddClassForm";
import useAuth from "../../../Hooks/useAuth";
import { imageUpload } from "../../../Api/utils/imagebb";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const AddClass = () => {
  const [classCategory, setClassCategory] = useState("");
  const [classType, setClassType] = useState("");
  const { user, setLoading } = useAuth();

  const handleChange = (event) => {
    setClassCategory(event.target.value);
    setClassType(event.target.value);
  };

  const classMutation = useMutation({
    mutationFn: async (classInfo) => {
      const { data } = await axiosSecure.post("/class", classInfo);
      return data;
    },
    onSuccess: () => {
      toast.success("Class added successfully");
      setLoading(false);
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to add class");
      setLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const image = form.image.files[0];
    const price = Number(form.price.value);
    const category = form.category.value;
    const type = form.type.value;
    const days = form.days.value;
    const description = form.description.value;
    const author = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    if (isNaN(price)) {
      toast.error("Price must be a valid number");
      setLoading(false);
      return;
    }

    try {
      const image_url = await imageUpload(image);
      const classInfo = {
        name,
        title,
        duration,
        image: image_url,
        price,
        category,
        type,
        days,
        description,
        author,
      };
      console.log(classInfo);
      await classMutation.mutateAsync(classInfo);
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
      setLoading(false);
    }
    form.reset();
  };

  return (
    <div>
      <AddClassForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        classCategory={classCategory}
        setClassCategory={setClassCategory}
        classType={classType}
      ></AddClassForm>
    </div>
  );
};

export default AddClass;

import  { useState } from "react";
import AddClassForm from "./AddClassForm";
import useAuth from "../../../Hooks/useAuth";
import { imageUpload } from "../../../Api/utils/imagebb";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const AddClass = () => {
  const [classCategory, setClassCategory] = useState("");
  const [classType, setClassType] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "classType") {
      setClassType(value);
    } else if (name === "category") {
      setClassCategory(value);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (classInfo) => {
      const { data } = await axiosSecure.post("/class", classInfo);
      return data;
    },
    onError: (error) => {
      console.error("Error adding article:", error);
      toast.error("Failed to add article");
      setIsSubmitting(false);
    },
    onSuccess: () => {
      toast.success("Article added successfully");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e, description) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value;
    const image = form.image.files[0];
    const price = Number(form.price.value);
    const category = form.category.value;
    const type = form.classType.value;
    const days = form.days.value;
    setDescription(description);
    const author = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    if (isNaN(price)) {
      toast.error("Price must be a valid number");
      return;
    }

    try {
      setIsSubmitting(true);
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
      await mutateAsync(classInfo);
      form.reset();
      setDescription("");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AddClassForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
        classCategory={classCategory}
        classType={classType}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AddClass;

import axios from "axios";
export const imageUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    return response.data.data.display_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed. Please try again.");
  }
};

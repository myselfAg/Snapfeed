import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/UploadPage.css";

const UploadPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:3000/upload", formData);

      console.log("Post Uploaded Successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="upload-page">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h1>Create Post</h1>

        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          required
        />

        <input
          type="text"
          name="caption"
          id="caption"
          placeholder="Write a caption..."
          required
        />

        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default UploadPage;
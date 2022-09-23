import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div
      style={{
        marginTop: "7rem",
        textAlign: "center",
        width: "90%",
        margin: "auto auto",
      }}
    >
      <h1 style={{ backgroundColor: "navy", color: "white" }}>Create a Post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            onChange={handleChange}
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
            placeholder="title"
          />
          <Form.Control
            onChange={handleChange}
            name="description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            placeholder="description"
          />
        </Form.Group>
        <Button
          onClick={createPost}
          variant="outline-success"
          style={{ width: "20%", marginBottom: "1rem" }}
        >
          CREATE
        </Button>
      </Form>
      <Button onClick={() => navigate("posts")} style={{ width: "20%" }}>
        ALL POSTS
      </Button>
    </div>
  );
}

export default CreatePost;

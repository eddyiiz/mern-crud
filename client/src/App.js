import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto auto",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          backgroundColor: "navy",
          color: "white",
          marginTop: "10rem",
          marginBottom: "4rem",
        }}
      >
        Home page
      </h1>
      <p>
        Post whatever's on your mind <br /> share stuff blah blah
      </p>
      <Button
        style={{
          width: "20%",
          marginTop: "3rem",
        }}
        onClick={() => navigate("create")}
      >
        NEXT
      </Button>
    </div>
  );
}

export default App;

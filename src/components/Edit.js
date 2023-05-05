import { Link } from "react-router-dom";

const Edit = () => {
  console.log("helloworld");
  return (
    <div>
      <img
        src="https://picsum.photos/200/300?grayscale"
        alt="grey"
        style={{
          background: "#ccc",
          padding: "1rem",
          margin: "5px",
          borderRadius: "5px",
        }}
      />

      <button
        type="button"
        style={{ marginBottom: "333px" }}
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <img
        src="https://picsum.photos/200/300/?blur"
        alt="blur"
        style={{
          background: "#ccc",
          padding: "1rem",
          margin: "5px",
          borderRadius: "5px",
        }}
      />
      <button style={{ marginBottom: "333px" }} className="btn btn-primary ">
        close
      </button>
      <br />

      <Link to="/addImage">Add Image</Link>
    </div>
  );
};
export default Edit;

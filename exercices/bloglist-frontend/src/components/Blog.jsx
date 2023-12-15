import useBlog from "../hooks/useBlog";
import { setNotification } from "../redux/reducers/notification";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const Blog = ({ blog }) => {
  const { giveLike, removeBlog } = useBlog();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLike = async () => {
    try {
      giveLike(blog);
      dispatch(setNotification(`Blog ${blog.title} was updated`, 2));
    } catch (error) {
      // console.log("🚀 ~ file: Blog.jsx:17 ~ handleLike ~ error:", error);
      dispatch(setNotification(`Blog ${blog.title} could not be updated`, 2))
    }
  };

  const handleRemove = async () => {
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
        removeBlog(blog.id);
        dispatch(setNotification(`Blog ${blog.title} was removed`, 2))
        navigate("/")
      }
    } catch (error) {
      dispatch(setNotification(`Blog ${blog.title} could not be removed`, 2))
    }
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginTop: "5px",
    marginBottom: 5,
  };

  const detailsStyle = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const removeButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <div>
      <div style={blogStyle}>
        {blog.title} {blog.author}
      </div>
      <div style={detailsStyle} className="togglableContent">
        <p>{blog.url}</p>
        <p>
          <span> {blog.likes} likes </span>
          <button onClick={handleLike}>like</button>
        </p>
        <p>Added by {blog.author}</p>
        {/* <button style={removeButtonStyle} onClick={handleRemove}>
          remove
        </button> */}
        <h1>Comments</h1>
        {/* <Comment id={blog.id} /> */}
        <ul>
          {blog?.comments.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;

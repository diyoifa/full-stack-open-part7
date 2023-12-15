/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks/useField";

const CreateNew = (props) => {
  const navigate = useNavigate();

  const author = useField("text");
  const content = useField("text");
  const info = useField("text");

  const inputs = [author, content, info];

  const handleSubmit = (e) => {
    e.preventDefault();
    const anecdote = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    };
    props.addNew(anecdote);
    navigate("/");
  };

  const handleReset = (e) => {
    e.preventDefault();
    for (const input of inputs) {
      const answ = input.reset();
      console.log("🚀 ~ file: CreateNew.jsx:29 ~ handleReset ~ answ:", answ);
      input.reset = " ";
    }
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        content:
        <input {...content} />
        <br />
        author:
        <input {...author} />
        <br />
        url for more info
        <input {...info} />
        <br />
        <button onClick={handleReset}>reset</button>
        <button onClick={handleSubmit}>create</button>
      </form>
    </div>
  );
};

export default CreateNew;

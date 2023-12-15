import React from "react";
import { useQuery } from "react-query";
import blogServices from "../services/blogs";
// import Blog from "./Blog";
import { Link } from "react-router-dom";

const BlogsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "blogs",
    queryFn: blogServices.getAll,
    refetchOnWindowFocus: false,
  });
  // console.log("🚀 ~ file: BlogsList.jsx:14 ~ BlogsList ~ data:", data)

  if (isLoading) {
    return <div>Loading data</div>;
  }

  if (isError) {
    return <div>Server error</div>;
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginTop: "5px",
    marginBottom: 5
  }

  console.log(data)

  return (
    <div>
      {data?.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          {/* <Blog blog={blog} key={blog.id} />
           */}
          <div style={blogStyle}>
            {blog.title} {blog.author} 
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsList;

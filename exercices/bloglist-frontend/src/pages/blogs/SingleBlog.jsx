import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import blogServices from "../../services/blogs";
import Blog from "../../components/Blog";

const SingleBlog = () => {

  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogServices.getOne(id),
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <Blog blog={data}/>
      )}
    </div>
  );
};

export default SingleBlog;

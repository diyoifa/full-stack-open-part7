import { useParams } from "react-router-dom"
import { useQuery} from "react-query";

import userServices from "../../services/user"

const SingleUser = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: () => userServices.getOne(id),
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          <div>
            <h1>{data?.name}</h1>
            <h2>Added blogs</h2>
            <ul>
              {data?.blogs.map((blog) => (
                <li key={blog.id}>{blog.title}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default SingleUser
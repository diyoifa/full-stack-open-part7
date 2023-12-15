import { useQuery} from "react-query";
import  userServices  from "../../services/user";
import { Link } from "react-router-dom";

const Users = () => {


    const { data, isLoading, isError } = useQuery({
    queryKey: "users",
    queryFn: userServices.getAll,
    refetchOnWindowFocus: false,
  });

  // console.log(data)

  return (
    <div style={{display:"flex", gap:"40px"}}>
      <div>
        <h1>Users</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          data.map((user) => <Link to={`/${user.id}`} key={user.id}>
            <h3>{user.name}</h3>
          </Link>)
        )}
      </div>
      <div>
        <h1>BlogsCreated</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          data.map((user) => (
            <div key={user.id}>
              {/* <h3>{user.name}</h3> */}
              <p>
                {user.blogs.length}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;

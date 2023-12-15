import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useUser from "./hooks/useUser";
import AppNotification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import SingleUser from "./pages/users/SingleUser";
import SingleBlog from "./pages/blogs/SingleBlog";
import NavBar from "./components/NavBar";

const App = () => {
  const { user} = useUser();
  return (
    <>
      <Router>
        <AppNotification />
        <NavBar/>
        <Routes>
          <Route path="/" element={user !== null ? <Home/>: <Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/:id" element={<SingleUser/>} />
          <Route path="/blogs/:id" element={<SingleBlog/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;

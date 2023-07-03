import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const createUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const loginUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.token));
        localStorage.setItem(
          "userName",
          res.data.user.firstName + " " + res.data.user.lastName
        );
        navigate("/user");
      })

      .catch((err) => console.log(err));
  };

  return { createUser, loginUser };
};

export default useAuth;

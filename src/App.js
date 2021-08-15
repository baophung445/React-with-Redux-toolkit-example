import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addUser,
  deleteUser,
} from "./features/counter/addSlice";
import Posts from "./features/posts/Posts";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.user.count);
  const listUser = useSelector((state) => state.user.listUser);

  const [user, setUser] = useState();

  const handleChangeInput = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="text">
      <h3>{count} </h3>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(decrement())}
      >
        Giảm
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(increment())}
      >
        Tăng
      </button>

      <ul>
        {listUser?.map((user, index) => (
          <li key={index} onClick={() => dispatch(deleteUser(index))}>
            {user}
          </li>
        ))}
      </ul>
      <input onChange={handleChangeInput}></input>

      <button
        type="button"
        class="btn btn-default"
        onClick={() => dispatch(addUser(user))}
      >
        Thêm
      </button>

      <Posts />
    </div>
  );
};

export default App;

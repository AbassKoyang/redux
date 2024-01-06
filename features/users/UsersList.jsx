import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";
import '../users/users.css';

const UsersList = () => {
    const users = useSelector(selectAllUsers);

    const renderedUsers = users.map((user) => {
        return(
            <li key={user.id} className="list-items">
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        )
    })
  return (
    <section className="users-con">
        <h2>Users</h2>
        <ol>{renderedUsers}</ol>
    </section>
  )
}

export default UsersList;
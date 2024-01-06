import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostByUser } from "../post/postSlice";
import { useParams, Link } from "react-router-dom";
import '../users/users.css';

const UserPage = () => {
  const {userId} = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));
  
  const postForUser = useSelector(state => selectPostByUser(state, Number(userId)));

  const postTitles = postForUser.map((post) => {
    return(
      <li key={post.id} className="list-items">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    )
  })

  return (
    <section className="users-con">
      {user?.name}
      <ol>
        {postTitles}
      </ol>
    </section>
  )
}

export default UserPage;
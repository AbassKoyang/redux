import PostAuthor from "./PostAuthor";
import '../post/posts.css'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { selectPostById } from "./postSlice";
import { useSelector } from "react-redux";

const PostExcerpt = ({postId}) => {
    const post = useSelector(state => selectPostById(state, postId));
  return (
    <article>
        <h3 className="title">{post.title}</h3>
        <p className="content">{post.body.substring(0,75)}...</p>
        <p className="post-credit">
            <Link to={`post/${post.id}`}>View post</Link>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timeStamp={post.date}/>
        </p>
        <ReactionButtons post={post}/>
    </article>
  )
}

export default PostExcerpt
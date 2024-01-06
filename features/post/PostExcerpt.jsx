import PostAuthor from "./PostAuthor";
import '../post/posts.css'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({post}) => {
  return (
    <article>
        <h3 className="title">{post.title}</h3>
        <p className="content">{post.body.substring(0,100)}</p>
        <p className="post-credit">
            <PostAuthor userId={post.userId}/>
            <TimeAgo timeStamp={post.date}/>
        </p>
        <ReactionButtons post={post}/>
    </article>
  )
}

export default PostExcerpt
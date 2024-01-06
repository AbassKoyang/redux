import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

import '../post/posts.css'
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
    const post = useSelector((state) => selectPostById(state, postId));

  return (
    <>
        {
            post ? (
                <article>
                    <h3 className="title">{post.title}</h3>
                    <p className="content">{post.body}</p>
                    <p className="post-credit">
                        <PostAuthor userId={post.userId}/>
                        <TimeAgo timeStamp={post.date}/>
                    </p>
                    <ReactionButtons post={post}/>
                </article>
            ) : (
                <section>
                    <p>Post not found!</p>
                </section>
            )
        }
    </>
  )
}

export default SinglePostPage;
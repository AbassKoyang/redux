import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { Link, useParams } from 'react-router-dom';

import '../post/posts.css'
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
    const { postId } = useParams();
    const post = useSelector((state) => selectPostById(state, Number(postId)));
  return (
    <section className="posts-con">
        {
            post ? (
                <article>
                    <h3 className="title">{post.title}</h3>
                    <p className="content">{post.body}</p>
                    <p className="post-credit">
                        <Link to={`/post/edit/${post.id}`}>Edit post</Link>
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
    </section>
  )
}

export default SinglePostPage;
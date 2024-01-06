import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import '../post/posts.css'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPost.map((post) => {
        return(
            <article key={post.id}>
                <h3 className="title">{post.title}</h3>
                <p className="content">{post.content.substring(0,100)}</p>
                <p className="post-credit">
                    <PostAuthor userId={post.userId}/>
                    <TimeAgo timeStamp={post.date}/>
                </p>
                <ReactionButtons post={post}/>
            </article>
        )
    })
  return (
    <section className="posts-con">
        <h1 className="heading">Posts</h1>
        {renderedPosts}
    </section>
  )
}

export default PostList;
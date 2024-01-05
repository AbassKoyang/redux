import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import '../post/posts.css'
import TimeAgo from "./TimeAgo";

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map((post) => {
        return(
            <article key={post.id}>
                <h3 className="title">{post.title}</h3>
                <p className="content">{post.content.substring(0,100)}</p>
                <p className="post-credit">
                    <PostAuthor userId={post.userId}/>
                    <TimeAgo timeStamp={post.date}/>
                </p>
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
import { useSelector } from "react-redux";
import '../post/posts.css'

const PostList = () => {
    const posts = useSelector((state) => state.posts);

    const renderedPosts = posts.map((post) => {
        return(
            <article key={post.id}>
                <h3 className="title">{post.title}</h3>
                <p className="content">{post.content.substring(0,100)}</p>
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
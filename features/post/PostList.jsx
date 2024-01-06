import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostError, getPostStatus, fetchPost } from "./postSlice";
import '../post/posts.css'
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postError = useSelector(getPostError);
    const postStatus = useSelector(getPostStatus);

    useEffect(() => {
      if(postStatus === 'idle'){
        dispatch(fetchPost());
      }
      console.log(posts);
    }, [postStatus, dispatch])
    

    let content;
    if(postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if(postStatus === 'succeeded'){
        const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
        content = orderedPost.map(((post) => (<PostExcerpt key={post.id} post={post}/>)));
    } else if(postStatus === 'failed'){
        content = <p>{postError}</p>;
    };


  return (
    <section className="posts-con">
        <h1 className="heading">Posts</h1>
        {content}
    </section>
  )
}

export default PostList;
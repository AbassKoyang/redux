import { useSelector } from "react-redux";
import { selectPostIds, getPostError, getPostStatus} from "./postSlice";
import '../post/posts.css'
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
    const orderedPostIds = useSelector(selectPostIds);
    const postError = useSelector(getPostError);
    const postStatus = useSelector(getPostStatus);
    
    let content;
    if(postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if(postStatus === 'succeeded'){
        content = orderedPostIds.map(postId => <PostExcerpt key={postId} postId={postId}/>);
    } else if(postStatus === 'failed'){
        content = <p>{postError}</p>;
    };


  return (
    <section className="posts-con">
        {content}
    </section>
  )
}

export default PostList;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";


const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content))
            setTitle('')
            setContent('')
        }
    }
    // const isTrue = Boolean(title) && Boolean(content);
    return (
        <section className="add-post-con">
            <h2>Add new post</h2>
            <form className="post-form">
                <label htmlFor="title">Post title</label>
                <input 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="content">Post content</label>
                <input 
                    type="text" 
                    name="content"
                    value={content}
                    onChange={onContentChanged}
                 />
                <button 
                    type="button"
                    onClick={onSavePostClicked}
                >Save</button>
            </form>
        </section>
    )
}

export default AddPostForm
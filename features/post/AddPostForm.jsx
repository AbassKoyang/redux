import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";
import '../post/posts.css'


const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers);
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({title, body: content, userId})).unwrap();
            
                setTitle('');
                setContent('');
                setUserId('');
                navigate('/');
            } catch (error) {
                console.error('Failed to save post:', error)
            }finally{
                setAddRequestStatus('idle');
            }
        }
    }
    
    const usersOptions = users.map((user) => {
        return(
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })
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
                <label htmlFor="author">Author</label>
                <select name="author" id="author" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="content">Post content</label>
                <textarea 
                    type="text" 
                    name="content"
                    value={content}
                    onChange={onContentChanged} 
                    cols="30" 
                    rows="10"></textarea>
                <button
                    className="save-button"
                    type="button"
                    disabled={!canSave}
                    onClick={onSavePostClicked}
                >Save</button>
            </form>
        </section>
    )
}

export default AddPostForm
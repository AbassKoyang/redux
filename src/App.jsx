import AddPostForm from '../features/post/AddPostForm'
import PostList from '../features/post/PostList'
import './App.css';
import Layout from '../components/Layout';
import SinglePostPage from '../features/post/singlePostPage';
import { Routes, Route } from 'react-router-dom';
import EditPostForm from '../features/post/EditPostForm';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        
        <Route path='post'>
          < Route index  element={<AddPostForm />}/>
          < Route path=':postId'  element={<SinglePostPage />}/>
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import { PostDetail } from '../components/index'
import Posts from '../features/posts/Posts';

export const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="details" element={<PostDetail /> }/>
    </Routes>
  );
};

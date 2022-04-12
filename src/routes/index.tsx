import { Routes, Route } from "react-router-dom";
import Posts from '../features/posts/Posts';
import { NotFound, PostDetail, PostEdit } from "../components";

export const IndexRouter = () => {

  //const {PostDetail} = lazily(() => import('../components/index'))

  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/details/:id" element={
                      <PostDetail />
      }/>
      <Route path="/edit/:id" element={<PostEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default IndexRouter;
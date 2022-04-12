import { useGetPostsQuery} from '../api/apiSlice';
import {PostsList, NewPost} from '../../components/index';

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = <PostsList posts={posts} />
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <>
      <NewPost />
      {content}
    </>
  )
}

export default Posts
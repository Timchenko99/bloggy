import { IPost } from '../../../types'
import { Post } from '../../index'

interface PostsListProps {
    posts: IPost[];
}

const PostsList = ({posts}: PostsListProps) => {
    const render = posts.map(post => <Post key={post.title+post.id} post={post}/>)
  
    return (
    <div>{render}</div>
  )
}

export default PostsList
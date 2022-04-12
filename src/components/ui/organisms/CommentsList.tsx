import { IComment } from '../../../types';
import { Comment } from '../../index'

interface CommentsListProps {
    comments: IComment[];
}

const CommentsList = ({comments}: CommentsListProps) => {
    const render = comments.map( comment => <Comment key={"" + comment.postId + comment.id} comment={comment} />)

    return (
        <div>
            {render}
        </div>
  )
}

export default CommentsList
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addComment } from '@/store/postsSlice';


interface Comment {
    id: number;
    text: string;
    name: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
}

interface PostProps {
    post: Post;
}

const Post = ({ post }: PostProps) => {
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newComment: Comment = {
            id: Date.now(),
            text: commentText,
            name: 'Anonymous', // Здесь можно добавить имя пользователя
        };
        dispatch(addComment({ postId: post.id, comment: newComment }));
        setCommentText('');
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <h3>Comments</h3>
            <ul>
                {post.comments.map(comment => (
                    <li key={comment.id}>{comment.text} - {comment.name}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    required
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
};

export default Post;
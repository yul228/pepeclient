import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@/store/postsSlice';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            content,
            comments: [],
        };
        dispatch(addPost(newPost));
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
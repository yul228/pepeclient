import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import PostComponent from '@/components/Post';
import PostForm from '@/components/PostForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

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

const NewsPage: NextPage = () => {
   
    const allPosts = useSelector((state: RootState) => state.posts.posts);

    return (
        <Layout>
            <h1>Новости</h1>
            <PostForm />
            {allPosts.map((post: Post) => (
                <PostComponent key={post.id} post={post} />
            ))}
        </Layout>
    );
};


export const getStaticProps: GetStaticProps = async () => {
    const posts: Post[] = [
        { id: 1, title: 'Post 1', content: 'Content for post 1', comments: [] },
        { id: 2, title: 'Post 2', content: 'Content for post 2', comments: [] },
    ];

    return {
        props: {
            posts,
        },
    };
};


export default NewsPage;
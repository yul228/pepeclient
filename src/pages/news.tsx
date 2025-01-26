import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import News from '@/components/screens/News/News';
import { wrapper } from '@/store/store';
import { setPosts } from '@/store/postsSlice';
import { PostService } from '@/services/post.service';

const NewsPage: NextPage = () => {
    return (
        <Layout>
            <News />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
    (store) => async () => {
        try {
            const posts = await PostService.getAllPosts();
            store.dispatch(setPosts(posts));

            return {
                props: {
                    posts,
                },
                revalidate: 60,
            };
        } catch (error) {
            console.error('Error fetching posts:', error);
            return {
                props: {
                    posts: [],
                },
            };
        }
    }
);

export default NewsPage;
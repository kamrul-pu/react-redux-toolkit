import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])
    return (
        <div>
            <h2>Posts View</h2>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts && posts.map((post) => {
                return <section key={post.id}>
                    <article >
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                </section>
            })}
        </div>
    )
}

export default PostsView;
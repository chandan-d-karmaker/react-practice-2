import { use } from "react";
import Post from './post';

export default function Posts({ CallPosts }) {

    const posts = use(CallPosts);

    return (
        <div className="my-post">
            <h2>All posts are here</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
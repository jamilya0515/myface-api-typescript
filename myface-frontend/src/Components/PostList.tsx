import { useEffect, useState } from 'react';


type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    profileImageUrl: string,
    coverImageUrl: string
}

type Post = {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: User
}

type PostList = {
    results: Array<Post>;
};


function PostList() {
    const [postListData, setPostListData] = useState<PostList>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(result => setPostListData(result))
        .catch(err => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!postListData) {
        return <div>Waiting for data!</div>
        }

    else {
        return  <div className="post-page">
            <h1>This is the post page</h1>
            <ul className="post-list-container">
                {postListData.results.map(post => (
                     <li><div key={post.id}>
                    <img src={post.imageUrl} alt="Post" className='post-image' />
                    <h3>{post.message}</h3>
                    <p>Posted by: {post.postedBy.username}</p>
                    <p>Date: {post.createdAt}</p>
                    </div> </li>))} 
            </ul>
        </div>
        }
}

export default PostList;


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
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(result => setPostListData(result));
    }, []);

    if (!postListData) {
        return <div>Waiting for data!</div>
        }
    else {
        return <div>
            {postListData?.results[0].postedBy.name}
        </div>
    } 
}

export default PostList;



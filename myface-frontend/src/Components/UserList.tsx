import { useEffect, useState } from 'react';

type Post = {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    userId: number; 
}

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    profileImageUrl: string,
    coverImageUrl: string,
    posts: Post;
}

type UserList = {
    results: Array<User>;
}

function UserList() {
    const [userListData, setUserListData] = useState<UserList>();
    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(result => setUserListData(result));
    }, []);

    if (!userListData) {
        return <div>Waiting for user data!</div>
        }
    else {
        return <div>
            {userListData?.results[0].email}
        </div>
    } 
}

export default UserList;
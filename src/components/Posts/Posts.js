import React from 'react';
import Post from "./Post/Post";
import Pagination from "../Pagination/Pagination";

const Posts = props => {

    return (
        <>
            <div className={'posts'}>
                {
                    props.data.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                post={post}
                                drawerDispatch={props.drawerDispatch}
                            />
                        )
                    })
                }
            </div>

            <Pagination
                pagination={props.pagination}
                loadPosts={props.loadPosts}
            />
        </>
    );
}

export default Posts;
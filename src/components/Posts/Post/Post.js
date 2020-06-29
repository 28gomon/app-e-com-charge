import React from 'react';

const Post = props => {

    return (
        <>
            <div className={'post'}>
                <div className={'image'} style={{
                    backgroundImage: `url(${props.post.image})`
                }}/>
                <div className="post-content">
                    <p className={'hidden'}>{props.post.id}</p>
                    <h2 className={'title'}>{props.post.name}</h2>
                    <span className={'status'}>{props.post.status}</span>
                    <p className={'last-location'}>
                        Last known location: <span>{props.post.location.name}</span></p>
                    <button
                        onClick={(event) => {
                            props.drawerDispatch(props.post.id);
                        }}
                        value={props.post.id}
                        className={'btn primary'}>Read More
                    </button>
                </div>
            </div>
        </>
    );
}

export default Post;
import React from 'react';

const Item = props => {

    return (
        <button
            onClick={() => {
                props.loadPosts(props.page)
            }}
            className={'item'}>{props.page}</button>
    );
}

export default Item;
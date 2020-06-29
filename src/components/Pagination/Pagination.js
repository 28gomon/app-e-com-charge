import React from 'react';
import Item from "./Item/Item";

const Pagination = props => {

    return (
        <div className={'pagination'}>
            {
                props.pagination.map((pageNumber, index) => {
                    return (
                        <Item
                            key={index}
                            page={pageNumber}
                            loadPosts={props.loadPosts}
                        />
                    )
                })
            }
        </div>
    );
}

export default Pagination;
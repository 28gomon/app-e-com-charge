import React from 'react';
import Item from "./Item/Item";

const Pagination = props => {

    function numberPage() {

        const paginationCounts = [];

        for (let i = 0; i < props.pagination; i++) {
            paginationCounts.push(i + 1);
        }

        return paginationCounts;
    }

    return (
        <div className={'pagination'}>
            {
                numberPage().map((pageNumber, index) => {
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
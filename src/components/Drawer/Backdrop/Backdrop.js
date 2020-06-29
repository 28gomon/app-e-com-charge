import React from 'react';

const Backdrop = props => {

    return (
        <div
            onClick={() => {
                props.drawerUpdate()
            }}
            className={'backdrop'}/>
    );
}

export default Backdrop;
import React from 'react';
import Backdrop from "./Backdrop/Backdrop";

const Drawer = props => {

    const cls = [
        'drawer'
    ]

    if (props.drawer) {
        cls.push('open');
    }

    return (
        <>
            <div className={cls.join(' ')}>
                <div className="content" style={{
                    backgroundImage: `url(${props.postDrawer.image})`
                }}>
                <span
                    onClick={() => {
                        props.drawerUpdate()
                    }}
                    className={'close-drawer'}/>

                    <div className="post-content">
                        <h2 className={'title'}>{props.postDrawer.name}</h2>

                        <p className={'status'}>Status: <span>{props.postDrawer.status}</span></p>
                        <p className={'species'}>Species: <span>{props.postDrawer.species}</span></p>
                        <p className={'type'}>Type: <span>{props.postDrawer.type || 'None'}</span></p>
                        <p className={'gender'}>Gender: <span>{props.postDrawer.gender}</span></p>
                    </div>
                </div>

                {props.drawer ? <Backdrop drawerUpdate={props.drawerUpdate}/> : null}
            </div>
        </>
    );
}

export default Drawer;
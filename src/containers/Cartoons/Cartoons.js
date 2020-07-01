import React, {Suspense} from 'react';
import {connect} from "react-redux";
import {
    drawerDispatch, drawerUpdate,
    getCartoonsPageDispatch,
    loadPostsDispatch
} from "../../redux/reducerCartoons/reducerCartoons";
import Drawer from "../../components/Drawer/Drawer";
import Preloader from "../../components/Preloader/Preloader";

const Posts = React.lazy(() => import ("../../components/Posts/Posts"));

class Cartoons extends React.Component {

    componentDidMount() {

        this.props.getCartoonsPageDispatch();
        this.props.loadPostsDispatch();
    }

    render() {
        return (
            <div className={'cartoons'}>

                {
                    <>
                        <Suspense fallback={<Preloader/>}>
                            <Posts
                                data={this.props.data}
                                pagination={this.props.cartoons}
                                loadPosts={this.props.loadPostsDispatch}
                                drawerDispatch={this.props.drawerDispatch}
                            />
                        </Suspense>
                        {
                            console.log(this.props.cartoons)
                        }
                        <Drawer
                            drawer={this.props.drawer}
                            postDrawer={this.props.postDrawer}
                            drawerUpdate={this.props.drawerUpdate}
                        />
                    </>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartoons: state.cartoons.cartoons,
        data: state.cartoons.data,
        drawer: state.cartoons.drawer,
        postDrawer: state.cartoons.postDrawer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCartoonsPageDispatch: () => dispatch(getCartoonsPageDispatch()),
        loadPostsDispatch: (number) => dispatch(loadPostsDispatch(number)),
        drawerDispatch: (id) => (dispatch(drawerDispatch(id))),
        drawerUpdate: () => dispatch(drawerUpdate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cartoons);
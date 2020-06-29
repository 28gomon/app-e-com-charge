import React from 'react';
import './scss/app.css';
import Layout from "./hoc/Layout/Layout";
import Cartoons from "./containers/Cartoons/Cartoons";

function App() {
    return (
        <div className={'app'}>

            <Layout>

                <Cartoons/>

            </Layout>

        </div>
    );
}

export default App;

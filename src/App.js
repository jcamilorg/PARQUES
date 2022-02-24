import React, {Component} from 'react';
import './index.css';
import "./app.css";
// Components
import HeaderParques from './Components/HeaderParques';
import FooterParques from './Components/FooterParques';
import PagInicio from './Components/PagInicio'

class App extends Component {
    render() {
        return (
        <div className="Page">
            <HeaderParques className="Header"/>
            <PagInicio/>
            <FooterParques/>
        </div>
        )
    }
}

export default App;
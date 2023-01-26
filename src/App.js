import React from "react";
import './leafLady.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Music from "./Music";
import Videos from "./Videos";
import Shop from "./Shop";
import Photos from "./Photos";
import Footer from "./Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            'showNavBar': false,
            'currentY': window.scrollY
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let currentY = window.scrollY;
        if (currentY === 0) {
            this.setState({
                showNavBar: false,
                currentY: currentY
            });
            return;
        }
        if (currentY > this.state.currentY) {
            this.setState({
                showNavBar: false,
                currentY: currentY
            });
        }
        else if (window.scrollY <= this.state.currentY){
            this.setState({
                showNavBar: true,
                currentY: currentY
            });
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className={"NavBar"}  style={{opacity: this.state.showNavBar ? '1' : '0'}}>
                    <NavBar />
                </div>
                <Shop />
                <Music />
                {/*<Videos />*/}
                <Photos />
                <Footer />
            </div>
        );
    }
}
export default App;

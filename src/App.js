import './leafLady.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Music from "./Music";
import Videos from "./Videos";
import Shop from "./Shop";
import Photos from "./Photos";

function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Shop />
        <Music />
        <Videos />
        <Photos />
    </div>
  );
}

export default App;

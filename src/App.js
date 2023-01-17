import './leafLady.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Music from "./Music";
import Videos from "./Videos";

function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Videos />
        <Music />
    </div>
  );
}

export default App;

import './leafLady.css';
export default function NavBar() {
    return (
        <div className={"navbar_holder"}>
            <a href={"#header"} className={"nav_button"}>HOME</a>
            <a href={"#shop"} className={"nav_button"}>SHOP</a>
            <a href={"#music"} className={"nav_button"}>MUSIC</a>
            <a href={"#videos"} className={"nav_button"}>VIDEOS</a>
            <a href={"#photos"} className={"nav_button"}>PHOTOS</a>
        </div>
    )
}

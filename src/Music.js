import Zoom from "react-reveal/Fade";

export default function Music() {
    return (
        <Zoom bottom delay={100}>
            <div className={"page"} id={"music"}>
                <h1>MUSIC</h1>
                <iframe
                    className={"spotify_player"}
                    src="https://open.spotify.com/embed/artist/41BUwuIEThVM1v2pWfdfuf?utm_source=generator&theme=1"
                    frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </Zoom>
    )
}
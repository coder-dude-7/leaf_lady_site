import React from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import {Scrollbar, Navigation} from "swiper";
import test_video_data from './test_video_data.json'
import Zoom from "react-reveal/Fade";
import JamVanSVG from "./images/JamNtheVan.svg"

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.swiperRef = React.createRef();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.pauseVideo = this.pauseVideo.bind(this)
    }

    /*playVideo() {
        console.log("play")
        ('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }*/
    pauseVideo(videoIndex) {
        console.log(videoIndex)
    }
    componentDidMount() {
        this.setState({
            isLoaded: true,
            items: test_video_data.items
        })
    }
    render() {
        const {error, isLoaded, items} = this.state;
        const swiperItems = items.map(item =>
            item.id.kind === "youtube#video" ?
                (
                    <SwiperSlide id={"youtube_slide"}>
                        <iframe
                            id={"youtubeVideo"}
                            className={"youtubeVideo_player"}
                            width="760"
                            height="415"
                            src={"https://www.youtube.com/embed/" + item.id.videoId + "?controls=1"}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            key={item.position}
                        >
                        </iframe>
                    </SwiperSlide>
                ) : null
        ); // get iframe for each video and store in array

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded){
            return <div>loading...</div>;
        } else {
            return (
                <Zoom bottom delay={100}>
                    <div className={"page"} id={"videos"}>
                        <h1>VIDEOS</h1>
                        <div className={"swiperContainer"}>
                            <Swiper
                                ref={this.swiperRef}
                                key={swiperItems.length}
                                modules={[Scrollbar, Navigation]}
                                slidesPerView={"auto"}
                                onSlideChange={() => this.pauseVideo(this.activeIndex)}
                                centeredSlides={true}
                                loop
                            >
                                {swiperItems}
                            </Swiper>
                        </div>
                        <div className={"video_navigation"}>
                            <div className={"video_navigation_button"} id={"prev_video"} onClick={() => this.swiperRef.current.swiper.slidePrev()}></div>
                            <div className={"video_navigation_button"} id={"next_video"} onClick={() => this.swiperRef.current.swiper.slideNext()}></div>
                        </div>
                        {/*<div className={"jamVanSVG"}>
                            <img src={JamVanSVG}/>
                        </div>*/}
                    </div>
                </Zoom>
            );
        }
    }
}

export default Videos;

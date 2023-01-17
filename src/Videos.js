// API Key: AIzaSyAHeF_XEafeAki2MVyE6wfaspW0BJw7czY
// channel id: UCL0IvU7jqOM56pIlzmfhkPw
import React from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation, Autoplay} from "swiper";

import test_video_data from './test_video_data.json'

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    pauseVideo() {
        console.log("pauseVideo")
    }
    componentDidMount() {
        // C:\Users\natha\Desktop\websites\leafLadySite\leaf_lady_site\test_video_data.json
        this.setState({
            isLoaded: true,
            items: test_video_data.items
        })
        /*fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAHeF_XEafeAki2MVyE6wfaspW0BJw7czY&channelId=UCL0IvU7jqOM56pIlzmfhkPw&part=snippet,id&order=date&maxResults=20")
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )*/
    }

    render() {
        const {error, isLoaded, items} = this.state;

        const swiperItems = items.map(item =>
            item.id.kind === "youtube#video" ?
                (
                    <SwiperSlide>
                        <iframe width="760" height="415"
                                src={"https://www.youtube.com/embed/" + item.id.videoId + "?controls=0"}
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
                <div className={"page"} id={"videos"}>
                    <h1>VIDEOS!</h1>
                    <div className={"swiperContainer"}>
                        <Swiper
                            key={swiperItems.length}
                            modules={[Scrollbar, Navigation]}
                            slidesPerView={"auto"}
                            navigation
                            centeredSlides={true}
                            centerInsufficientSlides={true}
                            onSlideChange={() => this.pauseVideo()}
                        >
                            {swiperItems}
                        </Swiper>
                    </div>
                </div>
            );
        }
    }
}

export default Videos;

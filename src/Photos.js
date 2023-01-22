import Zoom from "react-reveal/Fade";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import {Scrollbar, Navigation} from "swiper";
import React from "react";

export default function Photos() {
    const swiperItems = [];
    for (let i = 1; i < 49; i++){
        swiperItems.push(
            <SwiperSlide id={"photo_slide"}>
                <img
                    src={require("" + "./images/13th_note_gig/" + i.toString() + ".jpg")}
                    id={"photo"}
                />
            </SwiperSlide>
        )
    }
    const swiperRef = React.createRef();
    return (
        <div className={"page"} id={"photos"}>
            <h1>PHOTOS</h1>
            <Swiper
                ref={swiperRef}
                id={"photoSwiper"}
                key={swiperItems.length}
                modules={[Scrollbar, Navigation]}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop
            >
                {swiperItems}
            </Swiper>
            <div className={"video_navigation"}>
                <div className={"video_navigation_button"} id={"prev_video"} onClick={() => swiperRef.current.swiper.slidePrev()}></div>
                <div className={"video_navigation_button"} id={"next_video"} onClick={() => swiperRef.current.swiper.slideNext()}></div>
            </div>
            <div className={"photo_descriptor"}>
                <h1>All photos by Turner Photographs</h1>
            </div>
        </div>
    )
}
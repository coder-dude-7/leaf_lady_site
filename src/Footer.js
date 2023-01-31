import instaSVG from "./images/insta.svg"
import youtubeSVG from "./images/youtube.svg"
import facebookSVG from "./images/facebook.svg"
export default function Footer() {
    return (
      <div className={"footer"}>
          <div className={"footer_social_logo_holder"}>
              <img alt={'instagramLogo'} src={instaSVG} id={"insta"} onClick={() => window.open("https://www.instagram.com/leafladyatwc/?hl=gb", "_blank")} />
              <img alt={'youtubeLogo'} src={youtubeSVG} id={"footer_social_logo"} onClick={() => window.open("https://www.youtube.com/channel/UCL0IvU7jqOM56pIlzmfhkPw", "_blank")} />
              <img alt={'facebookLogo'} src={facebookSVG} id={"footer_social_logo"} onClick={() => window.open("https://www.facebook.com/LeafladyATWC/", "_blank")} />
          </div>
          <div>Designed and Built by Coats in Glasgow</div>
          <div>Copyright 2023©</div>
      </div>
    );
}
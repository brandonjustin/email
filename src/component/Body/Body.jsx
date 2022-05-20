import style from "./Body.css";
import brandon from "./brandon.JPG"

const Body = () => {
    return ( 
        <div className="b-container">
            <div className="b-left">
                <div className="b-shape"></div>
                <img src={brandon} alt="" className="brad"/>
            </div>
            <div className="b-right">
                <h2 className="b-h">About Me</h2>
                <p className="b-para">It is a long and establish fact that the reader
                    will be atracted by the readable content which being 
                    presented to him in a simple,modern and beutifull manner
                    which increase it UX. 
                </p>
                <p className="b-para">I am a software Engineer aiming at increasing
                    the Ux the most as possible there by rendering
                    contents more attractive representing complex informations.
                    That is why i shapenned my skills in various domain such as
                    web development,UI/Ux Design, Content management, web and app development using 
                    modern tools such as React Native.js and Flutter.
                </p>
            </div>
        </div>
     );
}
 
export default Body;
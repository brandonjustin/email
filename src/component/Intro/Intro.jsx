import intro from "./intro.css";
import boy from "./boy.png";
import insta from "./instagram.png";
import up from "./Upwork.png";
import link from "./linkedin.png";
import git from "./github.png";
import shopi from "./Shopify.png";

const Intro = () => {
    return (
         <div className="container">
        <div className="i-left">
        <h2>Hello, My name is </h2>
        <h1>Mtokam Brandon</h1>
    

    <div className="box">
        <div className="wrapper">
            <h3>Web Developper</h3>
            <h3>UI/UX Designer</h3>
            <h3>Content Manager</h3>
            <h3>Web and APP Develloper</h3>
        </div>
        </div>
        <p>I develop and design services for customers 
            of all sizes,
            speciallizing in creating stylish, modern websites,web services and
            onligne store.</p>
             <div className="link">
             <img src={insta} alt="" className="more" />
             <img src={link} alt="" className="more" />
             <img src={shopi} alt="" className="more" />
             <img src={git} alt="" className="more" />
                 <img src={up} alt="" className="more" />
             </div>

        
        
    </div>
    <div className="i-right">
<div className="shape"> </div>
<img src={boy} alt="" className="boy" />

    </div>

    </div> );
}
 
export default Intro;
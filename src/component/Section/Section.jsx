import style from "./section.css";
import screen from "./screen.png";
import mobile from "./mobile-design.jpg";
import menu from "./mobile-menu.jpg";
import desktop from "./desktop.jpg";
import vagoux from "./vagoux.png";
import phone from "./phone.png";

const Section = () => {
    return (<div className="lurix">
        <h2 className="s-h">Created and Inspired.its LURIX</h2>
        <p className="s-para">Lurix is a creative portfolio that your
        been waiting for,beutifull homes</p>
        <p className="s-para">stunning and modern portfolio style, complex and
        highly interactive websites and a whole lot more await inside.</p>
        <div className="web-box">
            <div className="item 1">
                <div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={menu} alt=""  className="site"  />
            </div>
            <div className="item 2">
            <div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={screen} alt="" className="site" />
            </div>
            <div className="item 3"><div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={mobile} alt=""  className="site" /></div>
            <div className="item 4">
            <div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={desktop} alt=""  className="site" />
            </div>
            <div className="item 5">
            <div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={vagoux} alt=""  className="site"/>
            </div>
            <div className="item 6">
            <div className="nav">
                    <span className="span"></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={phone} alt=""   className="site" />
            </div>


        </div>



    </div>  );
}
 
export default Section;
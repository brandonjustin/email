import ContactUs from "./component/Contact/Contact";
import Intro from "./component/Intro/Intro";
import Body from "./component/Body/Body";
import Section from "./component/Section/Section";
import Footer from "./component/Footer/Footer"



const App = () => {
  return (
    <div className="contain">
      <Intro/>
      <div className="body">
      <Body/>
      <Section/>
      <ContactUs/>
      <Footer/>
      </div>
     
    </div>
  )
};

export default App;
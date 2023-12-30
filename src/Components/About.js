
import FTdoc from "../Documents/Future Technology.pdf";
import bgVideo from "../Documents/Background_vid.mp4";
export default function About(){

    return(
        <div className="About-container ">
            <video autoPlay loop muted playsInline class="video-bg"> 
                <source src={bgVideo} type="video/mp4" />
            </video>
             <div className="about-detail row" id="ABOUT">
                    
                    <div className="about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                        <h1 className="about-Title Title"><i><u>About us</u></i></h1> <br/>
                        <h4 className="about-para">We are a group of people who have been manual quality assurance testers for more than 2 years, having worked with various domains across various platforms with great skill sets and great vision. We have expertise in agile scrum methodology. We are transparent to the client, such as reporting and maintaining hours etc.</h4>
                    
                        
                       
                        <div className="pdf-section">
                            <h3><i><u>Get to know more about us</u></i></h3> <br/>
                            <a className="pdf-file mt-5" href={FTdoc} download>Know more</a>
                        </div>
                    </div>
                        
                    </div>
                     
                </div>
       
        
    )
}
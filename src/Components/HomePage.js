import bgVideo from "../Documents/Background_vid.mp4"
import FTdoc from "../Documents/Future Technology.pdf";
export default function HomePage() {  

    return(
        <div className="Home-Container">
            <video autoPlay loop muted playsInline class="video-bg"> 
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="about-detail row" id="ABOUT">
                
                <div className="about-detail-context">
                <div className="about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                        <h1 className="about-Title Title"><i><u>About us</u></i></h1> <br/>
                        <h4 className="about-para">Join us at FutureTech as we pave the way for turning your digital visions into reality. Renowned for our excellence in web application development and software testing services, we are unwavering in our commitment to provide state-of-the-art solutions that propel your business to unprecedented success</h4>
                    
                        <div className="pdf-section">
                            <h3><i><u>Get to know more about us</u></i></h3> <br/>
                            <a className="pdf-file mt-5" href={FTdoc} download>Know more</a>
                        </div>
                    </div> <br/>
                    <h1 className="about-Title Title"><i><u>Our Vision</u></i></h1> <br/>
                    <h4 className="about-para">At Future Technology, our vision is to be at the forefront of technological innovation, empowering businesses to thrive in the digital landscape. We aspire to create a future where cutting-edge solutions not only meet but exceed the evolving needs of our clients. Through a relentless pursuit of excellence, we envision being a trusted partner, catalyzing growth and transformation for businesses worldwide. Our commitment extends beyond mere services; we strive to be architects of progress, shaping a world where technology seamlessly integrates with and enhances every facet of modern life.</h4>
                    

                </div>
                
              
                <div className="why-us about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                    
                    <div className="Homepage-list section">
                        <h1 className="about-Title Title"><i><u>Why us ?</u></i></h1> <br/>
                        <ul>
                        <li><b>Expertise:</b> Our team comprises skilled professionals with extensive experience in web application development and software testing across diverse industries.</li>
                        <li><b>Innovation:</b> We stay ahead of the curve by embracing the latest technologies and methodologies to deliver innovative solutions.</li>
                        <li><b>Client-Centric Approach:</b> Your success is our priority. We believe in building long-lasting partnerships by understanding your business needs and exceeding your expectations.</li>
                        <li><b>Reliability:</b> With a proven track record of successful projects, you can trust Future Technology to deliver high-quality solutions on time and within budget.</li>
                        
                        </ul><br/>
                    </div>
                    {/* <div className="Homepage-list section ">
                        <h1 className="about-Title Title"><i><u>Our Plans.,</u></i></h1> <br/>
                        <ul>
                        <li><a href="/plans/#Basic">Basic Plan</a></li>
                        <li><a href="/plans/#Advance">Advance Plan</a></li>
                        <li><a href="/plans/#Pro">Pro Plan</a></li>

                        </ul><br/>
                    </div> */}
                {/*}
                    <h4 className="about-para">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Is to provide/support Freelancer's who develops Application, and doesn't have a full fledge time to test the application before handing the product over to the customer, to over-come this situation we are here to help Freelancer's in testing the application and let them know, if there are any bug/defects in it, so that they can fix the defect/bug and provide the best application to their customer</h4>
                */}
                </div>    
            </div>
        </div>
               
        
    )
}
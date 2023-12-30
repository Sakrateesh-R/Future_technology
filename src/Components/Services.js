import React from 'react'
import bgVideo from "../Documents/Background_vid.mp4";

export default function Services() {
  return (
    <div className="Home-Container">
            <video autoPlay loop muted playsInline class="video-bg"> 
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="about-detail row" id="ABOUT">
                
                <div className="about-detail-context">
                    <div className="about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                        <h1 className="about-Title Title"><i><u>Services Provided</u></i></h1> <br/>
                        <h4 className="about-para"> 1. Web Application Development</h4>
                        <h4 className="about-para"> 2. Software Testing Services</h4><br/>

                        <h1 className="about-Title Title"><i><u>Web App Development</u></i></h1> <br/>
                        <h4 className="about-para">At Future Technology, we don't just build web applications; we craft digital experiences that resonate with your audience. Whether you're launching a new product or enhancing an existing one, we are your dedicated partner in realizing your digital aspirations.

                        Ready to redefine your digital presence? Contact Future Technology today, and let's transform your ideas into a powerful MERN stack web application that sets you apart in the digital realm.
                        </h4>

                    </div> <br/>
                    <div>
                            <h1 className="about-Title Title"><i><u>Software Testing Services</u></i></h1> <br/>

                            <div className="about-list-sections">
                                
                                <div className="about-list-section-1">
                                    <ul className="about-detail-context ">
                                        <h4 className="Title">Types of testing provided us</h4>
                                        <li>Black box Testing</li>
                                        <li>Smoke Test</li>
                                        <li>Functional Testing</li>
                                        <li>UI/UX Testing</li>
                                        <li>Regression Testing</li>
                                        <li>Compatibility-Cross and Backward (OS/Browser)</li>
                                        <li>UAT</li>
                                        <li>Build Verification Testing</li>
                                    </ul><br/>
                                    <ul className="about-detail-context">
                                        <h4 className="Title">Gadgets available for Testing</h4>
                                        <li>IPhone SE</li>
                                        <li>IPad pro</li>
                                        <li>IPhone 6s</li>
                                        <li>IPhone 13</li>
                                        <li>Redmi Note 7 Pro & Note 10</li>
                                        <li>Narzo 20A</li>
                                    </ul><br/>
                                </div>
                                <div className="about-list-section-2">
                                    <ul className="about-detail-context">
                                        <h4 className="Title">Quality assurance for customers</h4>
                                        <li>Analyze,review and assess user requirements</li>
                                        <li>Test Scenarios</li>
                                        <li>Test-cases preparation</li>
                                        <li>Test Plan & Test Strategies</li>
                                        <li>Regression Testing</li>
                                        <li>Defect Reporting</li>
                                        <li>Defect Validation</li>
                                        <li>Test Traceability Matrix, Gap Analysis</li>
                                    </ul><br/>
                                    <ul className="about-detail-context">
                                    <h4 className="Title">Operating systems used for Testing</h4>
                                        <li>Windows 7,8,8.1,10,11</li>
                                        <li>Android 8-13</li>
                                        <li>IOS 11 -16</li>
                                    </ul><br/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>    
        </div>
        
    
  )
}

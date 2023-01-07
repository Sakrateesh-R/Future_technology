
export default function About(){

    return(
        <div ClassName="About-container">
             <div className="about-detail row" id="ABOUT">
                    
                    <div className="about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                        <h3>Get to know more about me...</h3> <br/>
                        <p className="about-para">I,m a Front-End Web developer designed a Front-End Web-Application and Wesites.
                       Check out my work in the <w style={{color:"grey"}}><b>PROJECT</b></w> section</p>
                       <p className="about-para">
                           I have some skill's in Software testing such as  Manually Testing and aslo in Automation testing.<br/>
                           In the Automation Testing I've Known the following tech to test the software. PLease contact us for any project request
                           <li>Selenium with Java</li>
                           <li>Selenium with Python</li>
                           <li>TestNG</li>
                           <li>Cucumber Basic</li>
                       </p><br/>
                       <a className="resume mt-4" href="./Download's/Resume/Sakrateesh_Resume.pdf"download>Resume</a>
                        <div className="certification pt-5 pb-4">
                            <h3>Certification</h3>
                            <li>Selenium Webdriver with Python FrameWork</li>
                            <li>FULL-STACK DEVELOPER (MERN STACK) </li> 
                        </div>
                    </div>
                    
                    <div className="languageknown">
                        <h4 style={{width:"100%"}}>Programming language's</h4>
                        <ul className="prg-lgk">
                            <li> C/C++</li>
                            <li>JAVA</li>
                            <li> PYTHON</li>  
                        </ul>
                    </div>
                        
                    </div>
                </div>
       
        
    )
}
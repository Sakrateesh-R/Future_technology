
export default function About(){

    return(
        <div ClassName="About-container">
             <div className="about-detail row" id="ABOUT">
                    
                    <div className="about-detail-context col col-sm-10 col-md-10 col-lg-12 mx-12">
                        <h1 className="about-Title"><i><u>About us</u></i></h1> <br/>
                        <h4 className="about-para">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;We are group of people who have been a manual quality assurance tester for more than 2 years having worked with various Domains across various Platforms with great skill sets and great vision, we are expertise in agile scrum methodology. We are transparent to the client such as reporting and maintaining hours etc.. and we will be available when ever you need assistance.</h4>
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
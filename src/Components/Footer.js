
export default function Footer(){

    return(
    <div>
        <div className="Footer-Container">  
            <div className="follow d-bottom text-light ">
                <h2 className="pt-3 " Style={{textAlign:"center"}}>Connect with us..</h2>
                <div className="follow-container d-flex justify-content-around ">
                    <div className="flink facebook  py-3">
                        <a href="mailto:futuretech23122022@gmail.com">
                            <img src="https://img.icons8.com/color/64/null/apple-mail.png"/>
                        </a>
                    </div>
                    <div className="flink facebook  py-3">
                        <a href="https://www.facebook.com/david.saka.58958" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="Facebook" width="50"/>
                        </a>
                    </div>
                    <div className="flink Insta  py-3">
                        <a href="https://www.instagram.com/itzs_me_saka/" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" alt="Instagram" width="50" />
                        </a>
                    </div>
                    <div className="flink LinkedIn  py-3">
                        <a href="https://www.linkedin.com/in/future-technology-61370625b" target={"_blank"}>
                            <img src="https://img.icons8.com/color/48/null/linkedin.png"/>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="LinkedIn" width="150" /> */}
                        </a>
                    </div>

                </div>
            </div>
        </div>   
        <div className="version-container">
            <p>Version 0.24</p>
        </div>
    </div>

    
    )
}
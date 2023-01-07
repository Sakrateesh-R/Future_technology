
export default function Footer(){

    return(
    <div>
        <div className="Footer-Container">
            <div class="follow d-bottom text-light ">
                <h2 class="pt-3 " Style={{textAlign:"center"}}>Connect with us..</h2>
                <div class="follow-container d-flex justify-content-around ">
                    <div class="flink facebook  py-3">
                        <a href="https://www.facebook.com/david.saka.58958" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="Facebook" width="50"/>
                        </a>
                    </div>
                    <div class="flink Insta  py-3">
                        <a href="https://www.instagram.com/itzs_me_saka/" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" alt="Instagram" width="50" />
                        </a>
                    </div>
                    <div class="flink LinkedIn  py-3">
                        <a href="https://www.linkedin.com/in/future-technology-61370625b" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="LinkedIn" width="150" />
                        </a>
                    </div>

                </div>
            </div>


        </div>
        <div className="version-container">
            <h5>Version 0.1 </h5>
        </div>

    </div>

    
    )
}
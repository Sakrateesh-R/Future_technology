
import image from "../images/TitleLogo.png";

export default function Navigation (){

    return(
        <div className="Navigation-Container">
             <section className = "Header">
          <div className="float-left info">
              <img src={image} alt="profile pic" id="profile" />
              <h4>Future Technologies</h4>
          </div>
        <div className="sticky-top d-none d-md-flex">
            {/* <!--Navigation--> */}
            <nav className="navi">
                <ul className="nav-list">
                    <li className="nav-list-items"><a href="/">HOME</a></li>
                    <li className="nav-list-items"><a href="/About">ABOUT</a></li>
                    {/* <li className="nav-list-items"><a href="/plans">PLANS</a></li> */}
                </ul>
            </nav>
        </div>
        <nav className="navbar navbar-light sticky-top  flex-sm-even d-md-none d-lg-none off-canvas">
            <div className="container-fluid ">
              <a className="navbar-brand" href="#Demo"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item " >
                      <a className="nav-link active " id="H" href="/">Home</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" id ="A" href="/About">About</a>
                      </li>
                      {/* <li className="nav-item" >
                          <a className="nav-link" id ="P" href="/plans">PLANS</a>
                      </li> */}
                        
                    {/* <!--<li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>--> */}
                </ul>  
                </div>
              </div>
            </div>
        </nav><br/>   
        
    </section>
        </div>
    )
}
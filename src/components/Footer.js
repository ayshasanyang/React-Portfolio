import React, { Component } from 'react';
 
class Footer extends Component {
    render() {
        return (
        //This is the area where you paste your HTML codes
        <div>
        <footer className="footer text-center">
        <div className="container">
            <div className="row">
              
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h4 className="mb-4">LOCATION</h4>
                    <p className="pre-wrap lead mb-0">Plymouth, MN 55447</p>
                </div>
              
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h4 className="mb-4">AROUND THE WEB</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/ayshasanyang/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-fw fa-github"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/home/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-fw fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/isatou-d-sanyang-b0b484a5/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-fw fa-linkedin-in"></i></a>
                </div>
               
            </div>
        </div>
     </footer>
    
     <section className="copyright py-4 text-center text-white">
         <div className="container"><small className="pre-wrap">Copyright © Isatou Sanyang 2020</small></div>
     </section>
 
     <div className="scroll-to-top d-lg-none position-fixed"><a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a></div>
     </div>
  
    
)
    }
}
export default Footer;
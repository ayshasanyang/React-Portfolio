/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';


class about extends Component {
    render() {
    return(
        <div>
        

            <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
               
                <div className="text-center">
                    <h2 className="page-section-heading d-inline-block text-white">ABOUT ME</h2>
                </div>
                <hr width="200px"/>
               
                <div className="row" >
                    
                    <div className="col-lg-12 text-center">
                    <img className="mb-5 profile_image"  src={process.env.PUBLIC_URL +"/img/satou.jpeg"}  alt="img_profile"/>
                        <p className="lead text-justify">My name is Isatou D Sanyang I am a full-stack Web Application Developer, I currently live in Plymouth, Minnesota.
                            My focus and inspiration for studies is Web Development.I am a hard working individual with a great attention to detail.
                            I enjoy new and challenging projects that push me to learn more in the great field of web development. During my college years,
                            I have gained great time management skills that allow me to work on multiple projects at once.</p>
   
                    </div>
                    
                </div>
            </div>
        </section>
        </div>
    );
}
}

export default about;
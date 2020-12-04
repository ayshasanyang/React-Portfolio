/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';

class Contact extends Component {
    render() {
    return(
        <div>
        
        <section className="page-section" id="contact">
            <div className="container">
               
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                </div>
                    <hr width="200px"/>
                    <p className="lead text-center">If you're intrested in working with me, please contact me with the information below!</p>
               
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="fas fa-mobile-alt"></i></div>
                            <div className="text-muted">Phone</div>
                            <div className="lead font-weight-bold">(763) 703-8626</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="far fa-envelope"></i></div>
                            <div className="text-muted">Email</div><a className="lead font-weight-bold" href="isasanyang1986@yahoo.co.uk">isasanyang1986@yahoo.co.uk</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            
        </div>
    );
}
}

export default Contact;
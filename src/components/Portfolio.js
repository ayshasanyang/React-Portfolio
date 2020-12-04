import React, { Component } from 'react';



class Portfolio extends Component {
    render() {
        return (
            <div>
	

        <section className="page-section portfolio" id="projects">
            <div className="container py-md-5">
                <div className="row block-header">
                    <div className="col-sm-8 mx-auto text-center">
                        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PROJECTS</h2>
                        <h1 className="display-4 mt-2">My Projects</h1> 
                        <hr/>
                        <p className="lead">Take a look at my most recent works!.</p>
                    </div>
                </div>
        
                <div className="row mt-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://ayshasanyang.github.io/Project-1/" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                    <img src={process.env.PUBLIC_URL +"/img/park-finder.jpg"} className="img-fluid w-100 d-block" alt="parkfinder_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Park Finder Live Site</h5>
                                            <p className="p-finder">Weather or Not was created to provide users with an easy tool to discover and locate local state parks, and plan the perfect time to go with weather forecast</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ayshasanyang/Project-1" target="_blank" rel="noopener noreferrer" ><p className="solid">GitHub Repository</p></a>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://floating-lowlands-34709.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                    <img src={process.env.PUBLIC_URL +"/img/women.PNG"} className="img-fluid w-100 d-block" alt="shopping_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Shopping App Live Site</h5>
                                            <p className="p-shopping">This project creates an application for online vendors to post their products to an Online Shopping Store. The vendors are able to create, update, edit and delete products from our vendor application storing product information in our Database.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ayshasanyang/Online-Shopping-App" target="_blank" rel="noopener noreferrer" ><p className="solid">GitHub Repository</p></a>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://sleepy-reaches-91541.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                <img src={process.env.PUBLIC_URL +"/img/app.PNG"} className="img-fluid w-100 d-block" alt="burger_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Burger Live Site</h5>
                                            <p className="p-burger">This is a restaurant app that lets users input the names of burgers they'd like to eat, then the burger will be displayed in the menu list on the left side of the page, waiting to be devoured. The app was created with MySQL, node.js, and handlebars. The application follows the MVC design pattern.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ayshasanyang/Burger" target="_blank" rel="noopener noreferrer" ><p className="solid">GitHub Repository</p></a>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://secret-meadow-33926.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                    <img src={process.env.PUBLIC_URL +"/img/note-taker.PNG"} className="img-fluid w-100 d-block" alt="notetaker_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Note Taker Live Site</h5>
                                            <p className="p-note">This is a note-taking application that helps users to keep track of their activity. The app can add, delete, and save notes.<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/ayshasanyang/Note-Taker" target="_blank" rel="noopener noreferrer" ><p className="solid">GitHub Repository</p></a>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://github.com/ayshasanyang/Employee-Management-System" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                    <img src={process.env.PUBLIC_URL +"/img/bg-images.jpg"} className="img-fluid w-100 d-block" alt="employeemanagement_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Employee Management System</h5>
                                            <p className="p-employee">Employee Tracker is a node.js application that uses MySQL Workbench. This application manages all employees working in a company with different departments and roles. This app can add, view, and update information. This app was developed using Node, Inquirer prompts, and MySQL.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="col-md-4 col-sm-12 mb-2r mb-4">
                        <a href="https://github.com/ayshasanyang/Team-Profile-Generator" target="_blank" rel="noopener noreferrer" >
                            <div className="position-relative project">
                                <div className="image position-relative ">
                                    <img src={process.env.PUBLIC_URL +"/img/profile_generator.PNG"} className="img-fluid w-100 d-block" alt="profilegenerator_img"/>
                                    <div className="overlay-box">
                                        <div className="overlay-inner overlay-content">
                                            <h5 className="mb-0">Profile Generator</h5>
                                            <p className="p-generator">This is a Node CLI that takes employees information and generates a HTML file.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                   
                </div>
            </div>
        </section>
	
        </div>
)
    }
}
export default Portfolio;
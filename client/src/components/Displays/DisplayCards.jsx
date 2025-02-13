import React from 'react';  

const DisplayCards = () => { 

        return (
            <div>
                <style>
                    {`
                    .teams .card {
                        background-color: #000;
                        color: #fff;
                    }
                        
                    .footer-social-links {  
                        font-size: 1.5rem;
                        color: #fff;
                        margin-right: .8rem;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }`
                    }
                </style>
                <div className='teams'>
                <div className='w3-padding-24'>
                <h1 className="text-white">Teams</h1>
                    <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">       
                        <div className="card fall-team-card w3-black">
                    <div className="card-body">
                        <h5 className="card-title">Fall Team</h5>
                        <p className="card-text">Lorem ipsum elit. Facilis voluptatum sequi aspernatur sunt et, explicabo sed quos culpa tempore id doloribus ab cupiditate neque commodi earum iure molestias vel eos!</p>
                        <div className="card-footer">
                            <div className=''>
                        <a href="/" className='footer-social-links'>
                            <i className='fab fa-x-twitter'></i>
                            </a>
                            <a href="/" className='footer-social-links'>
                            <i className='fab fa-instagram'></i>
                            </a>
                            <a href="/" className='footer-social-links'>
                            <i className='fab fa-facebook-f'></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">       
                          <div className="card fall-team-card w3-black">
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum sequi aspernatur sunt et, explicabo sed quos culpa tempore id doloribus ab cupiditate neque commodi earum iure molestias vel eos!</p>
                    </div>
                </div>
                </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">       
                          <div className="card fall-team-card w3-black">
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum sequi aspernatur sunt et, explicabo sed quos culpa tempore id doloribus ab cupiditate neque commodi earum iure molestias vel eos!</p>
                    </div>
                </div>
                </div>
                    </div>
</div>
</div>

<div className=' w3-padding-24'>
                        <div className="card w3-black mt-4">
                        <div className="row">
                        <div className="col-sm-12">  
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum sequi aspernatur sunt et, explicabo sed quos culpa tempore id doloribus ab cupiditate neque commodi earum iure molestias vel eos!</p>
                    </div>
                </div>
                </div>
                </div>
                </div>

            </div>
        );

    };

export default DisplayCards;    
import React from 'react';
import mypic from '../images/mypic.jpg';

const About = () => {
    return (
        <>
           <div className="container emp-profile">
               <form method="">
                   <div className="row pt-5">
                       <div className="col-md-4">
                           <img className="profile_pic" src={mypic} alt="Mypic" />
                       </div>
                       <div className="col-md-6">
                           <div className="row mt-5 pt-5">
                               <div className="col-md-6">
                                   <label>User_id</label>
                               </div>
                               <div className="col-md-6">
                                   <p>123454322222233</p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6">
                                   <label>User_id</label>
                               </div>
                               <div className="col-md-6">
                                   <p>123454322222233</p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6">
                                   <label>Name</label>
                               </div>
                               <div className="col-md-6">
                                   <p>JYOTI KUMARI</p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6">
                                   <label>Email</label>
                               </div>
                               <div className="col-md-6">
                                   <p>jyotisingh301299@gmail.com</p>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6">
                                   <label>Profession</label>
                               </div>
                               <div className="col-md-6">
                                   <p>Software Engineer</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </form>
           </div>
        </>
    )
}

export default About;

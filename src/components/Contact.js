import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                         <div className=" col-lg-10 offset-lg-1 d-flex justify-content-between">
                             <div className="contact_info_item d-flex justify-content-start align-items-center">
                                 <img src="nbe" alt="phone" />
                                 <div className="contact_info_content">
                                     <div className="contact_info_title">
                                         Phone
                                     </div>
                                     <div className="contact_info_content">
                                         +115-204416
                                     </div>
                                 </div>
                             </div>
                             <div className="contact_info_item d-flex justify-content-start align-items-center">
                                 <img src="nbe" alt="phone" />
                                 <div className="contact_info_content">
                                     <div className="contact_info_title">
                                         email
                                     </div>
                                     <div className="contact_info_content">
                                         jyoti@gmail.com
                                     </div>
                                 </div>
                             </div>
                             <div className="contact_info_item d-flex justify-content-start align-items-center">
                                 <img src="nbe" alt="phone" />
                                 <div className="contact_info_content">
                                     <div className="contact_info_title">
                                         address
                                     </div>
                                     <div className="contact_info_content">
                                        delhi
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            {/* contact form */}
            <div className="contact_form">
                <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container py-5">
                        <div className="contact_form_title">Get in Touch</div>
                        <form id="contact_form">
                            <div className="contact_form_name d-flex justify-content-between align-items-between">
                               <input type="text" id="contact_form_name" placeholder="Name" required />
                               <input type="email" id="contact_form_email" placeholder="Email" required />
                               <input type="number" id="contact_form_phone" placeholder="Phone" required />
                            </div>
                            <div className="contact_form_message py-4">
                                <textarea rows="10" cols="30" name="contact_message" placeholder="Message" required></textarea>
                            </div>
                            <div className="contact_form_button">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import $ from "jquery"

class Contact extends Component {

  handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      $.post('/sendEmail', {
          name: name,
          email: email,
          message: message
        }
      ).done((data)=>{
          if(data.success){
              alert("Thanks for the message! We'll get back to you.")
              this.resetForm()
          }else{
              alert("Message failed to send.")
              this.resetForm()
          }
      })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

  render(){
    return(

      <div className="contact page">
        <Fade left>
          <span>.006</span>
          <form id="contact-form" className="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group-container">
              <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control" rows="5" id="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </Fade>
      </div>

    )
  }
}


export default Contact;

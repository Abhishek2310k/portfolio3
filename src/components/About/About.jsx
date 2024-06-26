import React from 'react'
import { RiArrowRightWideLine } from "react-icons/ri";
import './About.scss'
const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 profile_image_about" data-aos="fade-right" data-aos-duration="1000">
            <img src="/profile-img.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-duration="1000">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li style={{display:"flex",alignItems:"center"}}> <RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li style={{display:"flex",alignItems:"center"}}> <RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li style={{display:"flex",alignItems:"center"}}> <RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li style={{display:"flex",alignItems:"center"}}> <RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Age:</strong> <span>30</span></li>
                  <li><RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Degree:</strong> <span>Master</span></li>
                  <li><RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><RiArrowRightWideLine style={{color:"#149ddd"}}/> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
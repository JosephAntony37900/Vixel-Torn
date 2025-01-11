import React from "react";
import './NewsLetter.css';
import NewsLetterImg from "../../../img/newsletter-img.png"

export default function NewsLetter (){
    return(
        <section class="newsletter">
          <div class="container">

            <div class="newsletter-card">

              <div class="newsletter-content">
                <figure class="newsletter-img">
                  <img src={NewsLetterImg} alt="Newsletter image"/>
                </figure>

                <h2 class="h2 newsletter-title">Subscribe to our newsletter</h2>
              </div>

              <form action="" class="newsletter-form">
                <input type="email" name="email" required placeholder="Your Email Address" class="input-field"/>

                <button type="submit" class="btn btn-secondary">Subscribe</button>
              </form>

            </div>

          </div>
        </section>
    );
}
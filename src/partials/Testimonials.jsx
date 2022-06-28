import React from "react";

import TestimonialImage from "../images/testimonial.jpg";

function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Interested in the product? Do you have suggestions? Want to
              contact our team? Feel free to send us a message.
            </p>
          </div>
          {/* Testimonials */}

          <div
            className="rounded max-w-2xl mx-auto mt-20 shadow-2 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div class="contact__form-container">
              <form
                action="https://formspree.io/f/moqrzygd"
                class="contact__form"
                method="POST"
              >
                <div class="contact__form-field">
                  <label class="contact__form-label" for="name">
                    Name
                  </label>
                  <input
                    required
                    placeholder="Enter Your Name"
                    type="text"
                    class="contact__form-input"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="email">
                    Email
                  </label>
                  <input
                    required
                    placeholder="Enter Your Email"
                    type="text"
                    class="contact__form-input"
                    name="email"
                    id="email"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="message">
                    Message
                  </label>
                  <textarea
                    required
                    cols="30"
                    rows="4"
                    class="contact__form-input"
                    placeholder="Enter Your Message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn--theme contact__btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

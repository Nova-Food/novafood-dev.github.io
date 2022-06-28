import React from "react";

function Newsletter() {
  return (
    <section>
      <div className="max-w-3xl mx-auto">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="rounded py-10 px-8 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}

            <div className="relative items-center">
              {/* CTA content */}
              <div className="text-center">
                <h3 className="h3 mb-2">Stay Tuned</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Receive updates, release dates, and more
                </p>

                {/* CTA form */}

                <div>
                  <a
                    className="btn text-white bg-blue-600  w-full sm:w-auto"
                    href="#0"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

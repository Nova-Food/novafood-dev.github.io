import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}

        <div className="py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 text-center">
            © Copyright © 2022 -{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://novafood.io"
            >
              novafood.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

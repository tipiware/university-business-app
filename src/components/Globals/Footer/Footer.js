import React from "react"
import leaf from "./leaf.png"

export default function Footer() {
  return (
    <footer className="footer py-3 bg-light navbar-dark">
      <div className="container">
        <div className="row">
          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-black">
            <h5>Malaysia Art University (MAU)</h5>
            <br />
            <p class="foot-desc mb-0 text-dark">
              Adress: Happy town, Pulau Pinang, Malaysia
            </p>
            <br />
            <p class="foot-desc mb-0 text-dark">
              Phone: +60123456789 
            </p>
            <p class="foot-desc mb-0 text-dark">
              Email: info@mau.edu.my 
            </p>
          </div>

          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-dark">
            <h5>Student Info</h5>
            <br />
            <ul class="navbar-nav mx-auto">
              <li class="mb-2">
                <a class="nav-link text-dark" href="/faq">
                  Help & FAQ
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/contact">
                  Contact Us
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/about">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4 text-dark">
            <h5>Programme</h5>
            <br />
            <ul class="navbar-nav mx-auto">
              <li class="mb-2">
                <a class="nav-link text-dark" href="/programme">
                  Programme
                </a>
              </li>
              <li class="mb-2">
                <a class="nav-link text-dark" href="/inspiration">
                  Inspiration
                </a>
              </li>
              <li class="mb-2 list-unstyled ">
                <div className="leaf">
                  <br />
                  <br />
                  <img
                    src={leaf}
                    alt="leaf"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

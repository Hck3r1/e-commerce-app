import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return(
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'>Subscribe To Our Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
            <div class="input-group">
              <input 
                type="text" 
                className='form-control py-1'
                placeholder="Your Email Address" 
                aria-label="Your Email Address" 
                aria-describedby="basic-addon2"
              />
              <button className='input-group-text p-2 text-white' id="basic-addon2">Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : 20 God's Favour Street, <br /> Aule Estate, Akure<br /> Postal Code: 340252 
                </address>
                <a href='tel: +2347038346898' className='mt-3 d-block mb-3 text-white'>+234 7038346898</a>
                <a href='mailto: feranmiidima82@gmail.com' className='mt-2 d-block mb-3 text-white'>feranmiidima82@gmail.com</a>
                <div className='social_icons d-flex align-items-center mb-1 gap-30 mt-4'>
                  <a className='text-white' href='https://www.linkedin.com/in/oluwaferanmi-idima-3967951b2/' target={'_blank'}><BsLinkedin className='fs-4'/></a>
                  <a className='text-white' href='https://instagram.com/0xhckrrr' target={'_blank'}><BsInstagram className='fs-4'/></a>
                  <a className='text-white' href='https://github.com/Hck3r1' target={'_blank'}><BsGithub className='fs-4'/></a>
                  <a className='text-white' href='https://twitter.com/0xhckrrr' target={'_blank'}><BsTwitter className='fs-4'/></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accessories</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered by Tech Corner.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
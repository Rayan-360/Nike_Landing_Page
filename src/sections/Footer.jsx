import React from 'react'
import {footerLogo} from '../assets/images'
import {socialMedia,footerLinks} from '../constants/'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} width={150} height={46} />
          </a>
          <p className='text-white font-montserrat text-lg mt-6 leading-7 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}

          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className='mt-3 text-white-400 font-montserrat hover:text-slate-gray leading-normal'
                      key={link.name}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
        <p className='text-slate-gray font-montserrat text-lg cursor-pointer'>&copy; Copyright. All rights reserved. </p>
        <p className='text-slate-gray font-montserrat text-lg cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
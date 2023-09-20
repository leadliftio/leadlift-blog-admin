import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import brandLogo from './brandLogo.svg'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    // <footer className={classes.footer}>
    //   <Gutter className={classes.wrap}>
    //     <div className="w-full flex flex-col">
    //       <div className="footer-links md:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-[18px]">
    //         <div className="flex">
    //           <Link href={'/'} className="">
    //             <img src={brandLogo} alt="LeadLift" className="h-[32px]" />
    //           </Link>
    //         </div>
    //         <ul className="flex flex-wrap md:flex-nowrap text-center justify-center items-center gap-8 gap-y-[10px] md:gap-16 px-5">
    //           <Link
    //             href="/terms-of-use"
    //             className="font-outfit text-brandBlack text-base md:text-[18px] font-normal flex-1 flex-grow flex-nowrap flex"
    //           >
    //             Terms of use
    //           </Link>
    //           <Link
    //             href="/privacy-policy"
    //             className="font-outfit text-brandBlack text-base md:text-[18px] font-normal"
    //           >
    //             Privacy policy
    //           </Link>
    //           <Link
    //             href="/#about"
    //             className="font-outfit text-brandBlack text-base md:text-[18px] font-normal"
    //           >
    //             About Leadlift
    //           </Link>
    //         </ul>
    //         <div className=""></div>
    //       </div>
    //       <div className="social-media w-full flex items-center justify-center gap-9 mb-6">
    //         <Link
    //           href="https://www.linkedin.com/company/lead_/"
    //           className="linkedin social-media-icon text-white"
    //         >
    //           <FaLinkedinIn />
    //         </Link>
    //         <Link
    //           href="https://twitter.com/leadliftio"
    //           target="_blank"
    //           className="linkedin social-media-icon text-white"
    //         >
    //           <FaTwitter />
    //         </Link>
    //         <Link
    //           href="https://www.facebook.com/leadliftio"
    //           target="_blank"
    //           className="linkedin social-media-icon text-white"
    //         >
    //           <FaFacebookF />
    //         </Link>
    //         <Link
    //           href="https://www.instagram.com/leadliftio/"
    //           target="_blank"
    //           className="linkedin social-media-icon text-white"
    //         >
    //           <FaInstagram />
    //         </Link>
    //       </div>
    //       <p className="text-center w-full text-textGray font-outfit text-base leading-[24px]">
    //         &copy; 2023, Leadlift. All rights reserved.
    //       </p>
    //     </div>
    //   </Gutter>
    // </footer>
    <footer className="footer bottom-0 w-full bg-[#EDF0F8] px-[30px] py-[65px] mb-[0px] md:px-[0px] md:py-[100px]">
      <div className="container max-w-[1200px] lg:relative mx-auto">
        <div className="w-full flex flex-col">
          <div className="footer-links md:mb-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-[18px]">
            <div className="flex lg:absolute lg:left-0">
              <Link href={'/'} className="">
                <Image src={brandLogo} alt="LeadLift" className="h-[32px] w-fit" />
              </Link>
            </div>
            <ul className="mb-0 flex flex-wrap md:flex-nowrap text-center justify-center items-center gap-8 gap-y-[10px] md:gap-16 px-5">
              <Link
                href="/terms-of-use"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal flex-1 flex-grow flex-nowrap flex m-0"
              >
                Terms of use
              </Link>
              <Link
                href="/privacy-policy"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal m-0"
              >
                Privacy policy
              </Link>
              <Link
                href="/#about"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal m-0"
              >
                About Leadlift
              </Link>
            </ul>
            {/* <div className=""></div> */}
          </div>
          <div className="social-media w-full flex items-center justify-center gap-9 mb-6">
            <Link
              href="https://www.linkedin.com/company/lead_/"
              className="linkedin social-media-icon text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://twitter.com/leadliftio"
              target="_blank"
              className="linkedin social-media-icon text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.facebook.com/leadliftio"
              target="_blank"
              className="linkedin social-media-icon text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/leadliftio/"
              target="_blank"
              className="linkedin social-media-icon text-white"
            >
              <FaInstagram />
            </Link>
          </div>
          <p className="text-center w-full text-textGray font-outfit text-base leading-[24px] m-0">
            &copy; 2023, Leadlift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

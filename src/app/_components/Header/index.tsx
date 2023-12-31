'use client'

{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import brandLogo from './brandLogo.svg'
import CloseMenu from './Close_MD.svg'
import MenuIcon from './menu@2x.svg'

export async function Navbar() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }
  const navigate = useNavigate()

  const [isOpen, setOpen] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const dropdownRef = React.useRef<any>(null)
  const mobileNavRef = React.useRef<any>(null)

  const handleBookACall = () => {
    navigate('/book-a-call')
  }

  const openDropdown = () => {
    setIsDropdownOpen(prevState => !prevState)
  }

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }

  // React.useEffect(() => {
  if (!isOpen) {
    if (typeof window !== 'undefined') {
      document.body.style.overflowY = 'scroll'
    }
  } else {
    if (typeof window !== 'undefined') {
      document.body.style.overflowY = 'hidden'
    }
  }
  // }, [isOpen]);

  React.useEffect(() => {
    if (isDropdownOpen) {
      if (typeof window !== 'undefined') {
        document.addEventListener('mousedown', handleClickOutside)
      }
    } else {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isDropdownOpen])

  return (
    <>
      <nav className="w-screen bg-[#EDF0F8] md:py-[22px] p-[16px] md:px[150px] fixed z-[8500] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container max-w-[1200px] mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link to={'/'} className="">
              <img src={brandLogo} alt="LeadLift" className="h-[32px]" />
            </Link>

            <div className="hidden nav-items lg:flex items-center gap-8">
              <div className="text-brandBlack font-normal font-openSans text-[20px] flex items-center gap-[6px] group relative">
                <Link to="/our-services">Services</Link>
                <div className="cursor-pointer" onClick={openDropdown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9.33017 6.5H14.6702C17.9902 6.5 19.3402 8.85 17.6902 11.72L16.9502 13C16.7702 13.31 16.4402 13.5 16.0802 13.5H7.92017C7.56017 13.5 7.23017 13.31 7.05017 13L6.31017 11.72C4.66017 8.85 6.01017 6.5 9.33017 6.5Z"
                      fill="#292D32"
                    />
                    <path
                      d="M8.78957 14.5H15.2196C15.6096 14.5 15.8496 14.92 15.6496 15.25L15.0096 16.35C13.3596 19.22 10.6396 19.22 8.98957 16.35L8.34957 15.25C8.15957 14.92 8.39957 14.5 8.78957 14.5Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
                <div
                  className={`dropdown absolute top-10 bg-white w-max rounded-[8px] p-[12px] shadow-card transition-opacity duration-[450ms] ${
                    isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  ref={dropdownRef}
                >
                  {/* Dropdown */}
                  <div className=" flex flex-col gap-[6px] text-brandBlack font-openSans text-[14px] font-normal">
                    <a href="/our-services/#social-media-management">Social media management</a>
                    <a href="/our-services/#content-creation">Content creation</a>
                    <a href="/our-services/#content-strategy">Content strategy</a>
                    <a href="/our-services/#community-management">Community management</a>
                  </div>
                </div>
              </div>
              <Link to="/pricing" className="text-brandBlack font-normal font-openSans text-[20px]">
                Pricing
              </Link>
              {/* <Link
                to="/blog"
                className="text-brandBlack font-normal font-openSans text-[20px]">
                Blog
              </Link> */}
            </div>
            <div className="hidden lg:flex">
              <div
                className={`py-[12px] rounded-[8px] bg-brandGreen flex items-center justify-center gap-[10px] text-center text-white text-base font-poppins font-semibold border-none cursor-pointer z-50 w-[200px]`}
                onClick={handleBookACall}
              >
                {' '}
                Book a call
              </div>
            </div>
            <div
              className="block lg:hidden w-8 h-8 border border-solid border-[#D3D3D3] rounded-[4px]"
              onClick={() => setOpen(!isOpen)}
            >
              {/* <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#000080"
                label="Show menu"
                size={24}
                rounded
              /> */}
              {!isOpen ? <img src={MenuIcon} alt="" /> : <img src={CloseMenu} alt="" />}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="w-screen h-screen overflow-hidden"> */}
      <div
        className={`w-full bg-[#EDF0F8] h-[550px] rounded-[25px] px-[16px] py-[24px] fixed z-[8080] flex flex-col divide-y-2 shadow-card transition-all duration-500 ${
          isOpen ? 'translate-y-[0]' : 'translate-y-[-550px] z-[8500]'
        }`}
        ref={mobileNavRef}
      >
        <div className="h-[90%] pt-[65px] pb-[16px] flex flex-col justify-between relative z-50">
          <div className="flex flex-col gap-[20px] text-brandBlack font-normal font-openSans text-[20px]">
            <div className="text-brandBlack flex items-center gap-[6px] group relative">
              <Link to="/our-services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </div>
            <div className=" flex flex-col gap-[15px] text-[#808080] font-openSans text-[18px] pb-4 font-normal border-b border-solid border-[#D9D9D9]">
              <a href="/our-services/#social-media-management">Social media management</a>
              <a href="/our-services/#content-creation">Content creation</a>
              <a href="/our-services/#content-strategy">Content strategy</a>
              <a href="/our-services/#community-management">Community management</a>
            </div>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="pb-[20px] border-b border-solid border-[#D9D9D9]"
            >
              Pricing
            </Link>
            {/* <Link
              to="/blog"
              className="text-brandBlack font-medium font-outfit text-[24px]"
              onClick={() => setOpen(false)}>
              Blog
            </Link> */}
          </div>
          <div className="w-full mt-[30px]">
            <div
              className={`py-[12px] rounded-[8px] bg-brandGreen flex items-center justify-center gap-[10px] text-center text-white text-base font-poppins font-semibold border-none cursor-pointer z-50 w-full`}
              onClick={handleBookACall}
            >
              Book a call
            </div>
          </div>
        </div>
        <div className="social-media w-full flex items-center justify-center gap-9 mb-6 py-[16px]">
          <Link
            to="https://www.linkedin.com/company/lead_/"
            className="linkedin social-media-icon text-white"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://twitter.com/leadliftio"
            target="_blank"
            className="linkedin social-media-icon text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.facebook.com/leadliftio"
            target="_blank"
            className="linkedin social-media-icon text-white"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.instagram.com/leadliftio/"
            target="_blank"
            className="linkedin social-media-icon text-white"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* <div className="relative top-0 left-0 w-full h-screen bg-black/40" /> */}
      </div>
      {/* </div> */}
    </>
  )
}

export default Navbar

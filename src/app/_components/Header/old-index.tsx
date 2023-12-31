'use client'

{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
// import { Gutter } from '../Gutter'
import brandLogo from './brandLogo.svg'
import CloseMenu from './Close_MD.svg'
import MenuIcon from './menu@2x.svg'

// import { HeaderNav } from './Nav'
import classes from './index.module.scss'

export function Header() {
  const router = useRouter()
  let header: Header | null = null

  // try {
  //   header = await fetchHeader()
  // } catch (error) {
  //   // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
  //   // So swallow the error here and simply render the header without nav items if one occurs
  //   // in production you may want to redirect to a 404  page or at least log the error somewhere
  //   // console.error(error)
  // }

  const [isOpen, setOpen] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const dropdownRef = React.useRef<any>(null)
  const mobileNavRef = React.useRef<any>(null)

  const handleBookACall = () => {
    router.push('/book-a-call')
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
      <header>
        <>
          <nav className="w-screen bg-[#EDF0F8] md:py-[22px] p-[16px] md:px[150px] fixed z-[8500] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] md:shadow-none">
            <div className="container max-w-[1200px] mx-auto">
              <div className="w-full flex items-center justify-between">
                <Link href={'https://leadlift.io'} className="">
                  <Image src={brandLogo} alt="LeadLift" className="h-[32px] w-fit" />
                </Link>

                <div className="hidden nav-items lg:flex items-center gap-8">
                  <div className="text-brandBlack font-normal font-openSans text-[20px] flex items-center gap-[6px] group relative">
                    <Link href="https://leadlift.io/services">Services</Link>
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
                        false ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      {/* Dropdown */}
                      <div className=" flex flex-col gap-[6px] text-brandBlack font-openSans text-[14px] font-normal">
                        <a href="https://leadlift.io/our-services/#social-media-management">
                          Social media management
                        </a>
                        <a href="https://leadlift.io/our-services/#social-media-management">
                          Content creation
                        </a>
                        <a href="https://leadlift.io/our-services/#social-media-management">
                          Content strategy
                        </a>
                        <a href="https://leadlift.io/our-services/#social-media-management">
                          Community management
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="https://leadlift.io/pricing"
                    className="text-brandBlack font-normal font-openSans text-[20px]"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="https://blog.leadlift.io/"
                    className="text-brandBlack font-normal font-openSans text-[20px]"
                  >
                    Blog
                  </Link>
                </div>
                <div className="hidden lg:flex">
                  <div
                    className={`py-[12px] rounded-[8px] bg-brandGreen flex items-center justify-center gap-[10px] text-center text-white text-base font-poppins font-semibold border-none cursor-pointer z-50 w-[200px]`}
                    onClick={handleBookACall}
                  >
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
                  {!isOpen ? (
                    // <img src={MenuIcon} alt="" />
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 10.3333H4C3.45333 10.3333 3 9.88001 3 9.33334C3 8.78668 3.45333 8.33334 4 8.33334H28C28.5467 8.33334 29 8.78668 29 9.33334C29 9.88001 28.5467 10.3333 28 10.3333Z"
                        fill="#494949"
                      />
                      <path
                        d="M28 17H4C3.45333 17 3 16.5467 3 16C3 15.4533 3.45333 15 4 15H28C28.5467 15 29 15.4533 29 16C29 16.5467 28.5467 17 28 17Z"
                        fill="#494949"
                      />
                      <path
                        d="M28 23.6667H4C3.45333 23.6667 3 23.2133 3 22.6667C3 22.12 3.45333 21.6667 4 21.6667H28C28.5467 21.6667 29 22.12 29 22.6667C29 23.2133 28.5467 23.6667 28 23.6667Z"
                        fill="#494949"
                      />
                    </svg>
                  ) : (
                    // <img src={CloseMenu} alt="" />
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Menu / Close_MD">
                        <path
                          id="Vector"
                          d="M8.00004 24L24 8M24 24L7.99995 8"
                          stroke="#494949"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </nav>
          {/* <div className="w-screen h-screen overflow-hidden"> */}
          <div
            className={`w-full bg-[#EDF0F8] h-[600px] rounded-[25px] px-[16px] py-[24px] fixed z-[8080] flex flex-col divide-y-2 shadow-card transition-all duration-500 ${
              isOpen ? 'translate-y-[0]' : 'translate-y-[-600px] z-[8500]'
            }`}
            ref={mobileNavRef}
          >
            <div className="h-[90%] pt-[65px] pb-[16px] flex flex-col justify-between relative z-50">
              <div className="flex flex-col gap-[20px] text-brandBlack font-normal font-openSans text-[20px]">
                <div className="text-brandBlack flex items-center gap-[6px] group relative">
                  <Link href="https://leadlift.io/our-services" onClick={() => setOpen(false)}>
                    Services
                  </Link>
                </div>
                <div className=" flex flex-col gap-[15px] text-[#808080] font-openSans text-[18px] pb-4 font-normal border-b border-solid border-[#D9D9D9]">
                  <a href="https://leadlift.io/our-services#social-media-management">
                    Social media management
                  </a>
                  <a href="https://leadlift.io/our-services/#content-creation">Content creation</a>
                  <a href="https://leadlift.io/our-services/#content-strategy">Content strategy</a>
                  <a href="https://leadlift.io/our-services/#community-management">
                    Community management
                  </a>
                </div>
                <Link
                  href="https://leadlift.io/pricing"
                  onClick={() => setOpen(false)}
                  className="pb-[20px] border-b border-solid border-[#D9D9D9]"
                >
                  Pricing
                </Link>
                <Link
                  href="https://blog.leadlift.io"
                  className="pb-[20px] border-b border-solid border-[#D9D9D9]"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
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

            {/* <div className="relative top-0 left-0 w-full h-screen bg-black/40" /> */}
          </div>
          {/* </div> */}
        </>
      </header>
    </>
  )
}

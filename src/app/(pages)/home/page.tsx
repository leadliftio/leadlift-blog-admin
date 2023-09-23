import React from 'react'
import { Link } from 'react-router-dom'

import classes from './index.module.scss'

const Homepage = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto lg:py-[100px] py-[24px]">
          <div className="mb-[40px] text-white font-poppins text-[30px] font-semibold tracking-[-1.8px] leading-[32px]">
            Latest Article
          </div>
          <div className="w-full h-[760px] rounded-[20px] md:rounded-[40px] flex flex-col lg:flex-row justify-between items-end bg-[url('https://source.unsplash.com/va9218QJFAk')] bg-cover bg-center bg-no-repeat">
            <div>
              <p className="lg:w-[500px] text-white font-semibold font-poppins text-[60px] leading-[120%] tracking-[3px] lg:mb-[24px]">
                Landing your first job as a Data analyst: My career switch
              </p>
              <div className="flex gap-[12px]">
                <Link
                  className="text-white font-outfit text-base font-medium leading-[120%] tracking-[-0.32px] flex items-center gap-[4px]"
                  to={'#'}
                >
                  <span>Read article</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                  >
                    <path
                      d="M15.6737 14.0686C15.5842 14.1582 15.4616 14.2147 15.3202 14.2147C15.0468 14.2147 14.8205 13.9885 14.8205 13.715L14.8205 8.49188L9.59733 8.49188C9.32391 8.49188 9.09764 8.2656 9.09764 7.99219C9.09764 7.71877 9.32391 7.4925 9.59733 7.4925L15.3202 7.4925C15.5936 7.4925 15.8199 7.71877 15.8199 7.99219L15.8199 13.715C15.8199 13.8565 15.7633 13.979 15.6737 14.0686Z"
                      fill="white"
                    />
                    <path
                      d="M15.594 8.42763L7.66027 16.3614C7.46699 16.5546 7.14644 16.5546 6.95316 16.3614C6.75989 16.1681 6.75989 15.8475 6.95316 15.6543L14.8869 7.72052C15.0802 7.52724 15.4007 7.52725 15.594 7.72052C15.7873 7.9138 15.7873 8.23435 15.594 8.42763Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="m-0 text-white font-outfit text-[16px] font-light leading-[120%]">
              When choosing a vacation destination, what do you first look at? And yes, even before
              the price list and online reviews cling to lavish nature, a.....
            </p>
          </div>
        </div>
      </div>
      <div className={classes.purpleGradientBg}>
        <div className="max-w-[1200px] mx-auto lg:py-[44px] py-[18px]">
          <div className="flex justify-between items-center">
            <div className="mb-[40px] text-white font-poppins text-[30px] font-semibold tracking-[-1.8px] leading-[32px]">
              Featured Articles
            </div>
            <Link to={'#'} className={classes.seeMore}>
              See more{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
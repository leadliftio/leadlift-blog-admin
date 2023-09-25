/* eslint-disable simple-import-sort/imports */
import Image from 'next/image'
import React from 'react'

import logo from './brandlogo.png'

const LeadliftLogo = () => {
  return (
    <div>
      <Image src={logo} alt="LeadLift" className="h-[32px] w-fit" />
    </div>
  )
}

export default LeadliftLogo

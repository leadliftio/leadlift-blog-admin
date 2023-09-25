/* eslint-disable simple-import-sort/imports */
import Image from 'next/image'
import React from 'react'

const LeadliftLogo = () => {
  return (
    <div>
      <Image src={require('./brandlogo.png')} alt="LeadLift" className="h-[32px] w-fit" />
    </div>
  )
}

export default LeadliftLogo

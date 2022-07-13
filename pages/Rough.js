import Image from 'next/image'
import React from 'react'

import { DiReact } from 'react-icons/di'
import { GiTruck } from 'react-icons/gi'
import { TbPlant2 } from 'react-icons/tb'
const Rough = () => {
  return (
    <div className="wrapper">
      <h1>Rough</h1>
      <div>
        <DiReact size={100} className="icon" />
      </div>
      <div>
        <TbPlant2 size={100} className="icon" />
      </div>
      <div>
        <GiTruck size={100} className="icon" />
      </div>
    </div>
  )
}

export default Rough

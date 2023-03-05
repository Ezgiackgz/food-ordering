import React from 'react'
import Title from '../ui/Title'
import { MenuItem } from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='container flex mx-auto items-center flex-col'>
        <Title addClass="text-[40px] font-dancing">Menü</Title>
        <div className='mt-2'>
            <button className='px-10 my-4 bg-secondary text-white rounded-3xl'>All</button>
            <button className="px-6 py-2 rounded-3xl">Pizza</button>
            <button className="px-6 py-2 rounded-3xl">Hamburger</button>
        </div>
        <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        </div>
        <div>
          <button className='mt-8 btn-order'>Daha Fazlası</button>
        </div>
    </div>
  )
}

export default MenuWrapper
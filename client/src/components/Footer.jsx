import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300/20 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src={assets.logo} />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    We provide reliable, well-maintained vehicles with flexible rental options tailored to meet business and personal travel needs. Our service is focused on efficiency, transparency, and customer satisfaction from pickup to return.
                </p>
            </div>
            <div className="border-t border-black">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <p>Karmugilan ©2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
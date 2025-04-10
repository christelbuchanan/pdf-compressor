import React from 'react'
import { Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-6 text-center text-leather-600">
      <p className="flex items-center justify-center text-sm">
        Made with <Heart className="h-4 w-4 mx-1 text-red-500 inline" fill="currentColor" /> with chatandbuild.com
      </p>
    </footer>
  )
}

export default Footer

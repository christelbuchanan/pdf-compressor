import React from 'react'

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-4 bg-leather-100 rounded-full overflow-hidden border border-leather-200">
      <div 
        className="h-full bg-gradient-to-r from-leather-400 to-leather-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar

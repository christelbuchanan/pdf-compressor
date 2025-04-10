import React from 'react'

interface CompressionOptionsProps {
  compressionLevel: 'low' | 'medium' | 'high'
  onCompressionLevelChange: (level: 'low' | 'medium' | 'high') => void
  estimatedSize?: string
  originalSize?: string
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  compressionLevel,
  onCompressionLevelChange,
  estimatedSize,
  originalSize
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-leather-800 font-semibold mb-3">Compression Level</h3>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="compressionLevel"
            value="low"
            checked={compressionLevel === 'low'}
            onChange={() => onCompressionLevelChange('low')}
            className="skeuomorphic-radio"
          />
          <div>
            <span className="text-leather-800 font-medium">Low Compression</span>
            <p className="text-sm text-leather-600">Better quality, larger file size</p>
          </div>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="compressionLevel"
            value="medium"
            checked={compressionLevel === 'medium'}
            onChange={() => onCompressionLevelChange('medium')}
            className="skeuomorphic-radio"
          />
          <div>
            <span className="text-leather-800 font-medium">Medium Compression</span>
            <p className="text-sm text-leather-600">Balanced quality and size</p>
          </div>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="compressionLevel"
            value="high"
            checked={compressionLevel === 'high'}
            onChange={() => onCompressionLevelChange('high')}
            className="skeuomorphic-radio"
          />
          <div>
            <span className="text-leather-800 font-medium">High Compression</span>
            <p className="text-sm text-leather-600">Smaller file size, reduced quality</p>
          </div>
        </label>
      </div>
      
      {(estimatedSize || originalSize) && (
        <div className="mt-4 p-3 bg-leather-50 rounded-lg border border-leather-200">
          <p className="text-sm text-leather-700">
            {originalSize && <span>Original size: {originalSize}</span>}
            {originalSize && estimatedSize && <span> → </span>}
            {estimatedSize && <span>Estimated size: <strong>{estimatedSize}</strong></span>}
          </p>
        </div>
      )}
    </div>
  )
}

export default CompressionOptions

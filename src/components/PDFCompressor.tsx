import React, { useState } from 'react'
import FileUploader from './FileUploader'
import CompressionOptions from './CompressionOptions'
import ProgressBar from './ProgressBar'
import PDFModel from './PDFModel'

const PDFCompressor: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [compressionLevel, setCompressionLevel] = useState<'low' | 'medium' | 'high'>('medium')
  const [isCompressing, setIsCompressing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [compressedFile, setCompressedFile] = useState<File | null>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile)
    setCompressedFile(null)
    setProgress(0)
  }

  const handleCompressionLevelChange = (level: 'low' | 'medium' | 'high') => {
    setCompressionLevel(level)
  }

  const handleCompression = () => {
    if (!file) return

    setIsCompressing(true)
    setProgress(0)

    // Simulate compression process
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        
        // Create a "compressed" file (this is just a simulation)
        const compressionRatio = 
          compressionLevel === 'low' ? 0.8 :
          compressionLevel === 'medium' ? 0.6 : 0.4
        
        const compressedSize = Math.floor(file.size * compressionRatio)
        const compressedBlob = file.slice(0, compressedSize)
        const compressedFileObj = new File([compressedBlob], `compressed_${file.name}`, {
          type: file.type,
          lastModified: new Date().getTime()
        })
        
        setCompressedFile(compressedFileObj)
        setIsCompressing(false)
      }
      setProgress(Math.min(Math.floor(currentProgress), 100))
    }, 200)
  }

  const getEstimatedSize = () => {
    if (!file) return '0 KB'
    
    const compressionRatio = 
      compressionLevel === 'low' ? 0.8 :
      compressionLevel === 'medium' ? 0.6 : 0.4
    
    const estimatedSize = file.size * compressionRatio
    
    return formatFileSize(estimatedSize)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const handleDownload = () => {
    if (!compressedFile) return
    
    const url = URL.createObjectURL(compressedFile)
    const a = document.createElement('a')
    a.href = url
    a.download = compressedFile.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="skeuomorphic-panel mb-8">
        <h1 className="text-3xl font-bold text-leather-800 mb-6 text-center">PDF Compressor</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-full h-48 md:h-64">
              <PDFModel />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <FileUploader file={file} onFileChange={handleFileChange} />
          </div>
        </div>
        
        {file && (
          <div className="mt-6">
            <div className="mb-4">
              <p className="text-leather-700 mb-1">Selected file:</p>
              <p className="font-semibold text-leather-800">{file.name} ({formatFileSize(file.size)})</p>
            </div>
            
            <CompressionOptions 
              compressionLevel={compressionLevel} 
              onCompressionLevelChange={handleCompressionLevelChange}
              estimatedSize={getEstimatedSize()}
              originalSize={formatFileSize(file.size)}
            />
            
            {isCompressing ? (
              <div className="mt-6">
                <p className="text-leather-700 mb-2">Compressing...</p>
                <ProgressBar progress={progress} />
              </div>
            ) : compressedFile ? (
              <div className="mt-6">
                <p className="text-green-700 font-semibold mb-2">Compression complete!</p>
                <p className="text-leather-700 mb-4">
                  Original: {formatFileSize(file.size)} → Compressed: {formatFileSize(compressedFile.size)} 
                  ({Math.round((1 - compressedFile.size / file.size) * 100)}% reduction)
                </p>
                <button 
                  onClick={handleDownload}
                  className="skeuomorphic-button w-full bg-gradient-to-b from-green-500 to-green-700 border-green-600"
                >
                  Download Compressed PDF
                </button>
              </div>
            ) : (
              <button 
                onClick={handleCompression}
                className="skeuomorphic-button w-full mt-6"
              >
                Compress PDF
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PDFCompressor

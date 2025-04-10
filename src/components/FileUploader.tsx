import React, { useCallback, useState } from 'react'
import { Upload } from 'lucide-react'

interface FileUploaderProps {
  file: File | null
  onFileChange: (file: File | null) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ file, onFileChange }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) {
      setIsDragging(true)
    }
  }, [isDragging])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === 'application/pdf') {
        onFileChange(droppedFile)
      } else {
        alert('Please upload a PDF file')
      }
    }
  }, [onFileChange])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      if (selectedFile.type === 'application/pdf') {
        onFileChange(selectedFile)
      } else {
        alert('Please upload a PDF file')
      }
    }
  }, [onFileChange])

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragging 
          ? 'border-leather-500 bg-leather-50' 
          : 'border-leather-300 hover:border-leather-400 bg-paper-100'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {file ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <PDFModel />
          </div>
          <button 
            className="text-leather-600 underline hover:text-leather-800"
            onClick={() => onFileChange(null)}
          >
            Remove file
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Upload className="w-12 h-12 text-leather-400 mb-4" />
          <p className="text-leather-700 mb-2">Drag & drop your PDF here</p>
          <p className="text-leather-500 text-sm mb-4">or</p>
          <label className="skeuomorphic-button cursor-pointer inline-block">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileInput}
            />
            Browse Files
          </label>
        </div>
      )}
    </div>
  )
}

// Temporary inline component until we implement the full 3D model
const PDFModel = () => {
  return (
    <div className="w-full h-full bg-red-100 flex items-center justify-center rounded">
      <span className="text-red-500 font-bold">PDF</span>
    </div>
  )
}

export default FileUploader

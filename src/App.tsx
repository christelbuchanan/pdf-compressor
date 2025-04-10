import React from 'react'
import PDFCompressor from './components/PDFCompressor'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-nunito flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <PDFCompressor />
      </main>
      <Footer />
    </div>
  )
}

export default App

// Mock data for the PDF compressor application

// Sample PDF files
export const samplePDFs = [
  {
    id: 'pdf1',
    name: 'Annual Report 2023.pdf',
    size: 4500000, // 4.5 MB
    pages: 32,
    lastModified: '2023-12-15T10:30:00Z'
  },
  {
    id: 'pdf2',
    name: 'Project Proposal.pdf',
    size: 2100000, // 2.1 MB
    pages: 15,
    lastModified: '2024-01-20T14:45:00Z'
  },
  {
    id: 'pdf3',
    name: 'Financial Statement Q4.pdf',
    size: 8700000, // 8.7 MB
    pages: 48,
    lastModified: '2024-02-05T09:15:00Z'
  }
];

// Compression results
export const compressionResults = [
  {
    originalSize: 4500000, // 4.5 MB
    compressedSize: 1800000, // 1.8 MB
    compressionRatio: 0.4, // 60% reduction
    compressionLevel: 'high',
    processingTime: 3.2 // seconds
  },
  {
    originalSize: 2100000, // 2.1 MB
    compressedSize: 1260000, // 1.26 MB
    compressionRatio: 0.6, // 40% reduction
    compressionLevel: 'medium',
    processingTime: 1.8 // seconds
  },
  {
    originalSize: 8700000, // 8.7 MB
    compressedSize: 6090000, // 6.09 MB
    compressionRatio: 0.7, // 30% reduction
    compressionLevel: 'low',
    processingTime: 5.5 // seconds
  }
];

// User testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    company: 'TechCorp',
    comment: 'This PDF compressor saved me so much storage space! I was able to reduce our catalog files by 70% without losing quality.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Graphic Designer',
    company: 'Creative Studios',
    comment: 'I was skeptical at first, but the compression quality is impressive. Perfect for sending large design files to clients.',
    rating: 4
  },
  {
    id: 3,
    name: 'Jessica Williams',
    role: 'Teacher',
    company: 'Lincoln High School',
    comment: 'As a teacher, I need to share lots of PDF resources with students. This tool makes it so much easier to distribute materials without hitting email size limits.',
    rating: 5
  }
];

// FAQ items
export const faqItems = [
  {
    question: 'Is my data secure when using this compressor?',
    answer: 'Yes, all compression happens directly in your browser. Your files are never uploaded to any server, ensuring complete privacy and security.'
  },
  {
    question: 'Will compression affect the quality of my PDF?',
    answer: 'The compression aims to reduce file size while maintaining readability. Text remains crisp, though image quality may be slightly reduced depending on the compression level you choose.'
  },
  {
    question: 'Is there a file size limit?',
    answer: 'The tool can handle PDFs up to 100MB, though processing time will vary based on your device and the file size.'
  },
  {
    question: 'Can I compress multiple files at once?',
    answer: 'Currently, the tool processes one file at a time. We plan to add batch processing in a future update.'
  }
];

// Social media posts
export const socialPosts = [
  {
    id: 'post1',
    platform: 'Twitter',
    author: 'Gary Gensler',
    authorHandle: '@GaryGensler',
    content: 'Today, we charged Kraken with failing to register the offer and sale of their crypto asset staking-as-a-service program, which we allege is a security. Whether it\'s through staking-as-a-service, lending, or other means, crypto intermediaries must provide the proper disclosures & safeguards required by our laws.',
    timestamp: '2023-02-09T15:30:00Z',
    likes: 1200,
    retweets: 450,
    comments: 320
  },
  {
    id: 'post2',
    platform: 'LinkedIn',
    author: 'Adobe Document Cloud',
    authorHandle: '@AdobeDocumentCloud',
    content: 'PDF compression is essential for businesses managing large document libraries. Our latest study shows that optimized PDFs can reduce storage costs by up to 40% annually.',
    timestamp: '2023-11-15T10:15:00Z',
    likes: 876,
    shares: 124,
    comments: 45
  }
];

// Compression tips
export const compressionTips = [
  {
    id: 'tip1',
    title: 'Remove Unnecessary Images',
    description: 'If your PDF contains decorative images that aren\'t essential to the content, consider removing them before compression for better results.'
  },
  {
    id: 'tip2',
    title: 'Use Web Fonts',
    description: 'When creating PDFs, use standard web fonts instead of embedding custom fonts to reduce file size.'
  },
  {
    id: 'tip3',
    title: 'Optimize Images Before Adding to PDF',
    description: 'Compress and resize images before adding them to your PDF document for optimal file size reduction.'
  },
  {
    id: 'tip4',
    title: 'Choose the Right Compression Level',
    description: 'Use high compression for internal documents, medium for general sharing, and low for professional documents where quality is critical.'
  }
];

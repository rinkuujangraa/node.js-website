'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { trackAppDownload } from '@/lib/analytics'

interface TrackedDownloadButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function TrackedDownloadButton({ 
  href, 
  children, 
  className,
  size = 'lg',
  variant = 'default'
}: TrackedDownloadButtonProps) {
  const handleDownload = () => {
    // Track the download event for both Meta and Google
    trackAppDownload()
    
    // Open the download link
    window.open(href, '_blank')
  }

  return (
    <Button
      onClick={handleDownload}
      className={className}
      size={size}
      variant={variant}
    >
      <Download className="mr-2 h-5 w-5" />
      {children}
    </Button>
  )
}

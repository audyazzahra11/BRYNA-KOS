import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function SafeImage({ src, alt, className = '', caption = '' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E9DFD0] text-[#49382B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-8 h-8 mb-2 text-[#8B6F55]" aria-hidden="true" />
        <span className="text-sm font-medium">{caption || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

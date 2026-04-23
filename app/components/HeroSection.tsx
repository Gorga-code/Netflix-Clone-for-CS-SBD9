'use client';

import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function HeroSection({
  title,
  description,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full overflow-hidden mt-16 md:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 sm:px-12 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 line-clamp-3">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-3 md:py-4 bg-white text-black font-bold rounded hover:bg-opacity-75 transition-all duration-200 flex items-center justify-center space-x-2 text-sm md:text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Play</span>
            </button>
            <button className="px-10 py-3 md:py-4 bg-gray-600/50 text-white font-bold rounded hover:bg-gray-600/80 transition-all duration-200 flex items-center justify-center space-x-2 text-sm md:text-base backdrop-blur-sm border border-gray-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

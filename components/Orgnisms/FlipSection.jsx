"use client"

import React, { useState, useRef, useEffect } from 'react';

const sections = [
  {
    title: 'Save hours posting, creating, and analyzing content',
    description: 'Schedule posts to go live anytime — even if you\'re fast asleep or on the beach. Plus, create content quickly with Canva templates and have AI write your captions and hashtags for you. Then get the full picture with straightforward performance reports. Oh, and did we mention it\'s all in one (1) tab?',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mediawatcher.ai/wp-content/uploads/2025/04/track_media_img.webp',
  },
  {
    title: 'Boost engagement, reach, and follower count with less effort',
    description: 'See the content that brings in the most engagement and revenue and measure how you\'re performing against your competitors. Plus, get personalized suggestions for how to win in your industry. And, with reports that show you the best time to post for every network, you can say goodbye to hop-scotching between network tabs for good.',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mediawatcher.ai/wp-content/uploads/2025/04/track_media_img.webp',
  },
  {
    title: 'Deliver a better customer experience and keep your inbox tidy',
    description: 'Reduce the clutter and eliminate DM dread with a unified social media inbox. Reply to comments and messages across platforms in one convenient hub and never leave your followers on read again. Cut your team\'s message volume with saved replies or level up with our AI chatbot add-on.',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mediawatcher.ai/wp-content/uploads/2025/04/track_media_img.webp',
  },
  {
    title: 'Safeguard your reputation and never miss a chance to engage',
    description: 'Keep an eye on what people are saying about your brand or industry with social listening tools. Track mentions and conversations to find opportunities to engage, discover new trends, or get ahead of feedback. Plus, easily suspend scheduled posts in case of a potential crisis or unexpected opportunity.',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://mediawatcher.ai/wp-content/uploads/2025/04/track_media_img.webp',
  },
];

const FlipSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [flipCount, setFlipCount] = useState(0);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const [isStickyVisible, setIsStickyVisible] = useState(true);
  const lastActiveIndex = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sectionRefs.current;
      const scrollMiddle = window.innerHeight / 2;
  
      for (let i = 0; i < sectionElements.length; i++) {
        const rect = sectionElements[i].getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
  
        // Check if the section crosses the vertical middle of the viewport
        if (sectionTop <= scrollMiddle && sectionBottom >= scrollMiddle) {
          if (lastActiveIndex.current !== i) {
            setPendingIndex(i);
            setFlipCount((prev) => prev + 1);
            lastActiveIndex.current = i;
          }
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  // Preload next image before flipping
  useEffect(() => {
    if (pendingIndex !== null && sections[pendingIndex]) {
      const img = new window.Image();
      img.src = sections[pendingIndex].image;
    }
  }, [pendingIndex]);

  // Determine which image is front/back based on flipCount
  const isEven = flipCount % 2 === 0;
  const frontIndex = isEven ? activeIndex : pendingIndex !== null ? pendingIndex : activeIndex;
  const backIndex = isEven ? (pendingIndex !== null ? pendingIndex : activeIndex) : activeIndex;

  return (
    <div ref={containerRef} style={{ width: '100%', position: 'relative', minHeight: '100vh', display: 'flex' }}>
      <div style={{ flex: 1, width: '50%', padding:'0 8%' }}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={el => sectionRefs.current[idx] = el}
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderBottom: idx !== sections.length - 1 ? '1px solid #e5e7eb' : 'none',
            }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>{section.title}</h2>
            <p style={{ margin: '1rem 0 2rem 0', fontSize: '1.15rem', color: '#222' }}>{section.description}</p>
            <button className=' border-[1px] border-black hover:bg-black hover:text-white hover:duration-[1s] p-[20px] w-[30%] rounded-[10px] ' >
              Book Free Demo
            </button>
          </div>
        ))}
      </div>
      {/* Right: Sticky image (only visible when FlipSection is in view) */}
      {isStickyVisible && (
        <div style={{
          flex: 1,
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'sticky',
          top: 0,
          height: '100vh',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: '90%',
            height: '70%',
            background: 'white',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
            zIndex: 2,
            pointerEvents: 'auto',
          }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s cubic-bezier(0.4,0.2,0.2,1)',
                transform: `rotateY(${flipCount * 180}deg)`,
                position: 'relative',
              }}
            >
              {/* Front */}
              <img
                src={sections[frontIndex].image}
                alt="Section visual"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '1.5rem',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transition: 'opacity 0.2s',
                  zIndex: 2,
                  transform: 'rotateY(0deg)',
                  opacity: 1,
                }}
              />
              {/* Back */}
              <img
                src={sections[backIndex].image}
                alt="Section visual"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '1.5rem',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transition: 'opacity 0.2s',
                  zIndex: 1,
                  transform: 'rotateY(180deg)',
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipSection;
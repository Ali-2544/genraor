"use client"

import React, { useState, useEffect, useRef } from 'react';

const tabList = [
  'Detailed Dashboard',
  'Trend Analysis',
  'Mention Analysis',
  'AI Insights',
];

const tabContents = [
  // Tab 1: Detailed Dashboard
  (
    <div className="relative flex w-full flex-col md:flex-row items-center md:items-start overflow-visible">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-0 mt-10 md:mt-0 z-10">
        <h2 className="text-3xl md:text-3xl font-bold text-[#bcb8f8] mb-6 leading-tight">
          Your Media Monitoring<br />Dashboard - All The Insights You<br />Need In One Place
        </h2>
        <p className="text-lg text-[#bcb8f8] max-w-md">
          Media Watcher gives you a comprehensive view of how your brand, industry, or topic is being discussed across global media. From real-time news updates to social media conversations, you can easily track, analyze, and act on media developments that matter to you.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:static absolute right-0 top-0 h-full overflow-visible">
        <img
          src="/assests/dashboard.png"
          alt="image dashboard"
          className="w-[150%] max-w-none md:w-[120%] md:max-w-none rounded-xl shadow-lg"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  ),
  // Tab 2: Trend Analysis
  (
    <div className="relative flex w-full flex-col md:flex-row items-center md:items-start overflow-visible">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-0 mt-10 md:mt-0 z-10">
        <h2 className="text-3xl md:text-3xl font-bold text-[#bcb8f8] mb-6 leading-tight">
          Track Trends and Engagement <br /> at a Glance

        </h2>
        <p className="text-lg text-[#bcb8f8] max-w-md">
          Gain complete visibility into where your brand or term is trending. Understand each mention’s reach with detailed engagement metrics like likes, shares, and comments. Discover related hashtags and topics to stay informed on the broader conversation.</p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:static absolute right-0 top-0 h-full overflow-visible">
        <img
          src="/assests/analytic.png"
          alt="image dashboard"
          className="w-[150%] max-w-none md:w-[120%] md:max-w-none rounded-xl shadow-lg"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  ),
  // Tab 3: Mention Analysis
  (
    <div className="relative flex w-full flex-col md:flex-row items-center md:items-start overflow-visible">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-0 mt-10 md:mt-0 z-10">
        <h2 className="text-3xl md:text-3xl font-bold text-[#bcb8f8] mb-6 leading-tight">
          See Who’s Talking About <br /> the Searched Term
        </h2>
        <p className="text-lg text-[#bcb8f8] max-w-md">
          Discover what top influencers and news channels are saying about your term.
          Track the number of high-profile mentions and analyze their reach and impact.
          Identify the key voices driving the conversation and shaping public opinion.        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:static absolute right-0 top-0 h-full overflow-visible">
        <img
          src="/assests/ranking.png"
          alt="image dashboard"
          className="w-[150%] max-w-none md:w-[120%] md:max-w-none rounded-xl shadow-lg"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  ),
  // Tab 4: AI Insights
  (
    <div className="relative flex w-full flex-col md:flex-row items-center md:items-start overflow-visible">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-0 mt-10 md:mt-0 z-10">
        <h2 className="text-3xl md:text-3xl font-bold text-[#bcb8f8] mb-6 leading-tight">
          Unlock Deeper Insights with AI
        </h2>
        <p className="text-lg text-[#bcb8f8] max-w-md">
          Leverage powerful AI to analyze mentions, detect sentiment, and identify trends instantly.
          Get smart recommendations to optimize your content strategy and stay ahead of conversations.
          Turn raw data into actionable insights with speed, accuracy, and clarity.        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:static absolute right-0 top-0 h-full overflow-visible">
        <img
          src="/assests/ai.png"
          alt="image dashboard"
          className="w-[150%] max-w-none md:w-[120%] md:max-w-none rounded-xl shadow-lg"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  ),
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabList.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleTabClick = (idx) => {
    setActiveTab(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center pt-20 pb-20 px-2 ">
      {/* Tabs Bar */}
      <div
        className="relative z-10 flex space-x-4 mb-[-32px]"
      >
        {tabList.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => handleTabClick(idx)}
            className={`px-8 py-3 text-lg font-medium rounded-2xl transition-all duration-200 border focus:outline-none shadow-md
              ${activeTab === idx
                ? 'bg-gradient-to-r from-[#7b5cff] to-[#b249f8] text-white shadow-lg border-transparent scale-105'
                : 'bg-white text-[#7b5cff] border-[#e0e0e0] border hover:bg-[#f3eaff]'
              }
            `}
            style={{ minWidth: 200 }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div
        className="w-full max-w-6xl bg-[#181f3a] rounded-[2.5rem] shadow-2xl mt-0 pt-20 pb-12 px-6 md:px-8 relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default TabsSection; 
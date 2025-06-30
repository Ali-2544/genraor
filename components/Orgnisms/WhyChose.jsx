import React from "react";

const features = [
  {
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" /></svg>
    ),
    title: "Built for Today's Social Media Landscape",
    description: "Starting fresh means we bring the latest technology and modern strategies right to your fingertips. Designed to help you post, track, and outperform competitors from day one.",
    cta: "Learn More",
  },
  {
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
    ),
    title: "Smart AI, Designed for You",
    description: "Our AI tools automate everything from content creation to social listening — crafted by social pros who understand exactly what you need to succeed.",
    cta: "See How",
  },
  {
    icon: (
      <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3.535 3.535a4 4 0 01-5.657-5.657l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.535-3.535a4 4 0 015.657 5.657l-1.414 1.414" /></svg>
    ),
    title: "Flexible Integrations from the Start",
    description: "Connect with 100+ popular tools through our intuitive dashboard, making GENROAR the versatile choice for managing your social media ecosystem.",
    cta: "Explore",
  },
];

const WhyChose = () => {
  return (
    <section className="py-16  ">
      <div className="max-w-6xl mx-auto px-0">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose GENROAR</h2>
        <p className="text-lg text-gray-500 text-center mb-10">We won't ask you to scroll through thousands of glowing reviews — instead, here's what sets us apart: world-class customer support, enterprise-grade security, and a rich library of expert-led resources including blogs, webinars, and our industry-leading academy.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4 w-[64px] h-[64px] flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-black mb-4">{feature.description}</p>
              <button className="mt-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">{feature.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChose;

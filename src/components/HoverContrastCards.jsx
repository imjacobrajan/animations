import React from 'react';

const HoverContrastCards = ({ items, className = '' }) => {
  const codeExample = `import HoverContrastCards from './HoverContrastCards'

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: '/path/to/image.jpg'
  },
  // ... more items
]

<HoverContrastCards items={teamMembers} />`;

  const cssCode = `<div className="group">
  <div className="card
    group-has-[:hover]:scale-95 
    group-has-[:hover]:grayscale 
    group-has-[:hover]:brightness-75
    hover:!scale-105 
    hover:!grayscale-0 
    hover:!brightness-100">
    {/* Content */}
  </div>
</div>`;

  return (
    <div className={`w-full ${className}`}>
      {/* Hero Section - Full Viewport */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Hover Contrast
          </h2>
          
          <div className="group relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="card relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 ease-out
                           group-has-[:hover]:scale-95 group-has-[:hover]:grayscale group-has-[:hover]:brightness-75
                           hover:!scale-105 hover:!grayscale-0 hover:!brightness-100 hover:z-10"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-300 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center mt-24 animate-bounce">
            <p className="text-gray-400 text-sm mb-2">Scroll down for code</p>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Code Section - Starts after 100vh */}
      <div className="w-full max-w-6xl mx-auto p-8">
        <div className="space-y-6">
          {/* Complete Component Code */}
          <div className="bg-[#1e1e2e] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a3e] border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400 font-mono">HoverContrastCards.jsx</span>
            </div>
            {/* Code Content */}
            <div className="p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-gray-300">
                  <span className="text-purple-400">import</span> <span className="text-yellow-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;{'\n\n'}
                  
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">HoverContrastCards</span> = (&#123; <span className="text-blue-300">items</span> &#125;) =&gt; &#123;{'\n  '}
                  <span className="text-purple-400">return</span> ({'\n    '}
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"w-full p-8"</span><span className="text-gray-400">&gt;</span>{'\n      '}
                  
                  <span className="text-gray-500">{'{'}</span><span className="text-gray-500">/* Title */</span><span className="text-gray-500">{'}'}</span>{'\n      '}
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">h2</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"text-5xl font-bold text-center mb-12 text-white"</span><span className="text-gray-400">&gt;</span>{'\n        '}
                  Hover Contrast{'\n      '}
                  <span className="text-gray-400">&lt;/</span><span className="text-pink-400">h2</span><span className="text-gray-400">&gt;</span>{'\n      \n      '}
                  
                  <span className="text-gray-500">{'{'}</span><span className="text-gray-500">/* Card Grid */</span><span className="text-gray-500">{'}'}</span>{'\n      '}
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">div</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"group grid grid-cols-4 gap-6"</span><span className="text-gray-400">&gt;</span>{'\n        '}
                  <span className="text-gray-500">&#123;</span><span className="text-blue-300">items</span>.<span className="text-yellow-300">map</span>((item, index) =&gt; ({'\n          '}
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">div</span>{'\n            '}
                  <span className="text-blue-300">key</span>=<span className="text-gray-500">&#123;</span>index<span className="text-gray-500">&#125;</span>{'\n            '}
                  <span className="text-blue-300">className</span>=<span className="text-green-300">"card rounded-2xl overflow-hidden</span>{'\n              '}
                  <span className="text-yellow-300">group-has-[:hover]:scale-95</span>{'\n              '}
                  <span className="text-yellow-300">group-has-[:hover]:grayscale</span>{'\n              '}
                  <span className="text-yellow-300">group-has-[:hover]:brightness-75</span>{'\n              '}
                  <span className="text-cyan-300">hover:!scale-105</span>{'\n              '}
                  <span className="text-cyan-300">hover:!grayscale-0</span>{'\n              '}
                  <span className="text-cyan-300">hover:!brightness-100</span>{'\n              '}
                  <span className="text-green-300">transition-all duration-300"</span>{'\n          '}
                  <span className="text-gray-400">&gt;</span>{'\n            '}
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">img</span> <span className="text-blue-300">src</span>=<span className="text-gray-500">&#123;</span>item.image<span className="text-gray-500">&#125;</span> <span className="text-blue-300">alt</span>=<span className="text-gray-500">&#123;</span>item.name<span className="text-gray-500">&#125;</span> <span className="text-gray-400">/&gt;</span>{'\n          '}
                  <span className="text-gray-400">&lt;/</span><span className="text-pink-400">div</span><span className="text-gray-400">&gt;</span>{'\n        '}
                  ))<span className="text-gray-500">&#125;</span>{'\n      '}
                  <span className="text-gray-400">&lt;/</span><span className="text-pink-400">div</span><span className="text-gray-400">&gt;</span>{'\n    '}
                  <span className="text-gray-400">&lt;/</span><span className="text-pink-400">div</span><span className="text-gray-400">&gt;</span>{'\n  '}
                  );{'\n'}
                  &#125;;{'\n\n'}
                  
                  <span className="text-purple-400">export default</span> <span className="text-yellow-300">HoverContrastCards</span>;
                </code>
              </pre>
            </div>
          </div>

          {/* Usage Example */}
          <div className="bg-[#1e1e2e] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a3e] border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400 font-mono">App.jsx - Usage</span>
            </div>
            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-gray-300">
                  <span className="text-purple-400">import</span> <span className="text-yellow-300">HoverContrastCards</span> <span className="text-purple-400">from</span> <span className="text-green-300">'./HoverContrastCards'</span>;{'\n\n'}
                  
                  <span className="text-purple-400">const</span> <span className="text-blue-300">teamMembers</span> = [{'\n  '}
                  &#123;{'\n    '}
                  <span className="text-blue-300">name</span>: <span className="text-green-300">'Jane Doe'</span>,{'\n    '}
                  <span className="text-blue-300">role</span>: <span className="text-green-300">'CEO & Founder'</span>,{'\n    '}
                  <span className="text-blue-300">image</span>: <span className="text-green-300">'https://example.com/jane.jpg'</span>{'\n  '}
                  &#125;,{'\n  '}
                  &#123;{'\n    '}
                  <span className="text-blue-300">name</span>: <span className="text-green-300">'John Smith'</span>,{'\n    '}
                  <span className="text-blue-300">role</span>: <span className="text-green-300">'CTO'</span>,{'\n    '}
                  <span className="text-blue-300">image</span>: <span className="text-green-300">'https://example.com/john.jpg'</span>{'\n  '}
                  &#125;,{'\n  '}
                  <span className="text-gray-500">// ... more items</span>{'\n'}
                  ];{'\n\n'}
                  
                  <span className="text-gray-400">&lt;</span><span className="text-pink-400">HoverContrastCards</span> <span className="text-blue-300">items</span>=<span className="text-gray-500">&#123;</span><span className="text-blue-300">teamMembers</span><span className="text-gray-500">&#125;</span> <span className="text-gray-400">/&gt;</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Key Classes Explanation */}
          <div className="bg-[#1e1e2e] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a3e] border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400 font-mono">Key Tailwind Classes 🎨</span>
            </div>
            {/* Code Content */}
            <div className="p-6">
              <div className="space-y-4 text-sm font-mono">
                <div>
                  <div className="text-yellow-300 mb-1">group-has-[:hover]:scale-95</div>
                  <div className="text-gray-400 pl-4">↳ Scale down ALL cards when ANY card is hovered</div>
                </div>
                <div>
                  <div className="text-yellow-300 mb-1">group-has-[:hover]:grayscale</div>
                  <div className="text-gray-400 pl-4">↳ Make ALL cards grayscale when ANY card is hovered</div>
                </div>
                <div>
                  <div className="text-yellow-300 mb-1">group-has-[:hover]:brightness-75</div>
                  <div className="text-gray-400 pl-4">↳ Dim ALL cards when ANY card is hovered</div>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="text-cyan-300 mb-1">hover:!scale-105</div>
                  <div className="text-gray-400 pl-4">↳ Scale up THIS card (! = override group styles)</div>
                </div>
                <div>
                  <div className="text-cyan-300 mb-1">hover:!grayscale-0</div>
                  <div className="text-gray-400 pl-4">↳ Keep THIS card colorful</div>
                </div>
                <div>
                  <div className="text-cyan-300 mb-1">hover:!brightness-100</div>
                  <div className="text-gray-400 pl-4">↳ Keep THIS card bright</div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default HoverContrastCards;


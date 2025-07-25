import Image from 'next/image';

export const WelcomeSection: React.FC = () => {
    return (
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image 
              src="/images/welcome.jpg" 
              alt="Welcome Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            Welcome to ThriVest Africa
          </h2>
          
          {/* White content box with two columns */}
          <div className="bg-white/70 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  ThriVest Africa is a Lagos-based, female-founded, and led impact investment firm committed to transforming the landscape for women-led and women-owned MSMEs across Sub-Saharan Africa. Grounded in a mission of inclusive finance and sustainable development, we turn overlooked challenges into opportunities for innovation, growth, and meaningful impact.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  We focus on areas of the economy that remain underserved and underfinanced, providing capital and strategic support to high-potential businesses. We invest in commercially viable enterprises that deliver measurable social and environmental impact alongside strong financial performance.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Our existence addresses a critical market gap: the systemic gender imbalance among capital allocators and the persistent neglect of women-led MSMEs by traditional investment channels. This disparity is driven in part by the underrepresentation of women in investment decision-making roles, which contributes to biased capital flows and missed opportunities. We view this not just as a gap to close but as an untapped investment opportunity. By channeling capital to markets mainstream allocators often overlook, we unlock the transformative power of women-led MSMEs, engines of innovation, employment, and community transformation.
                </p>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Through an integrated approach combining capital, capacity-building, and access to networks, we equip women entrepreneurs with the tools they need to build resilient, impactful businesses. Our commitment goes beyond funding, we work to improve the lives of women, promote financial inclusion, and foster systemic change that uplifts entire communities.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Guided by our mission, we align our investments with global development priorities, reducing poverty, advancing gender equality, enabling climate-resilient enterprises, and driving inclusive economic growth, decent work opportunities, and sustainable innovation. We believe that economic empowerment and environmental responsibility are not only compatible but mutually reinforcing.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  At ThriVest Africa, we are passionate about creating lasting impact through authentic partnerships. With integrity, innovation, and excellence at our core, we serve the underserved, invest in overlooked potential, and unlock the transformative power of women to shape Africa&apos;s future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
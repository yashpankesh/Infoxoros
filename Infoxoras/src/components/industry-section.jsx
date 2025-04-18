import { Building2, ShoppingCart, Gamepad2, GraduationCap, Heart, Share2, Home, Tv } from "lucide-react";

const IndustrySection = () => {
  const industries = [
    {
      title: "Banking",
      icon: Building2,
      color: "#FFD700",
      description: "Enhancing financial operations with secure, efficient, and innovative digital solutions.",
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      color: "#FF6B6B",
      description: "Empowering online businesses with robust platforms and customer-focused digital strategies.",
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      color: "#4EA8DE",
      description: "Delivering engaging, immersive gaming experiences with advanced development technologies.",
    },
    {
      title: "Education",
      icon: GraduationCap,
      color: "#50C878",
      description: "Enabling better learning experiences through cutting-edge educational technologies.",
    },
    {
      title: "Health & Fitness",
      icon: Heart,
      color: "#FF69B4",
      description: "Supporting wellness initiatives with user-centric solutions to promote healthy lifestyles.",
    },
    {
      title: "Social Media",
      icon: Share2,
      color: "#1DA1F2",
      description: "Boosting online presence and engagement with creative and data-driven social strategies.",
    },
    {
      title: "Real-Estate",
      icon: Home,
      color: "#FFA500",
      description: "Simplifying property management and transactions with smart, digital real estate tools.",
    },
    {
      title: "Media and Entertainment",
      icon: Tv,
      color: "#9370DB",
      description: "Transforming content delivery and audience engagement with innovative tech solutions.",
    },
  ];

  return (
    <section className="bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-6">Industry We Served</h2>
        <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          We proudly partner with a diverse range of industries, delivering tailored digital solutions to drive success.
          From Banking and E-commerce to Education and Healthcare, our expertise ensures impactful results across every
          sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-[#262626] border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-[#57FFBC] hover:shadow-lg hover:shadow-[#57FFBC]/10 hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-12 h-12" style={{ color: industry.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#57FFBC]">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;

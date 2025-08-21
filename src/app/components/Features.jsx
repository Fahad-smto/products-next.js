"use client";

const features = [
  {
    id: 1,
    title: "Easy Product Management",
    description: "Add, edit, and manage your products effortlessly with a simple interface.",
    icon: "💼",
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Works perfectly on desktop, tablet, and mobile devices.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Secure Authentication",
    description: "Login safely with social login or credentials using NextAuth.js.",
    icon: "🔒",
  },
  {
    id: 4,
    title: "Dark & Light Mode",
    description: "Switch between light and dark themes for a comfortable experience.",
    icon: "🌙",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Choose SaleSphere
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

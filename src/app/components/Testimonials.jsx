"use client";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Entrepreneur",
    comment: "SaleSphere made managing products so simple. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Tech Blogger",
    comment: "The UI is clean and intuitive. I love the dark mode feature!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophie Lee",
    role: "Designer",
    comment: "The product highlights are visually appealing and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

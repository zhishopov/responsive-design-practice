export default function Hero() {
    return (
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Placeholder Text
            </h1>
            <p className="mt-3 text-gray-600">
                This is a basic landing page.
            </p>
            <div className="mt-6 flex gap-3">
              <button href="#" className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
              <button href="#" className="inline-block bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="dog.jpeg"
              alt="dog"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    );
  }
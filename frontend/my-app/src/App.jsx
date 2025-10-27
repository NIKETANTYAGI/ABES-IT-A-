import { useState, useEffect } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Change header background when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black shadow-md"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-red-600 text-3xl font-bold tracking-tight">
            NETFLIX
          </h1>
          <div className="flex items-center gap-6 text-lg">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Movies</a>
            <a href="#" className="hover:text-gray-300">Series</a>
            <a href="#" className="hover:text-gray-300">My List</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Unlimited movies, TV shows, and more.</h2>
        <p className="text-xl text-gray-400 mb-8">Watch anywhere. Cancel anytime.</p>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg font-semibold rounded">
          Get Started
        </button>
      </main>
    </div>
  );
}

export default App;

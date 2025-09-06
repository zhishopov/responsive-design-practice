export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Logo</div>
          
          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">Projects</a>
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
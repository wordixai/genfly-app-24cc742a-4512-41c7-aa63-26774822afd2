import { Button } from "@/components/ui/button"
import { Coffee, Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Brew & Bean</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Home</a>
              <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Menu</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contact</a>
              <Button className="w-full mt-2 bg-amber-600 hover:bg-amber-700">Order Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
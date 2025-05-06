
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="border-b border-gray-100 sticky top-0 z-10 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Icon name="Apple" className="text-black h-8 w-8" />
              <span className="ml-2 text-xl font-medium text-gray-900">Gift Card</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              Главная
            </Link>
            <Link to="/products" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              Карты
            </Link>
            <Link to="/instruction" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              Инструкция
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Навигация */}
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

      {/* Основной контент */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Подвал */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">О нас</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">О компании</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Контакты</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Поддержка</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Помощь</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Доставка</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Документы</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Условия использования</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Оферта</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Apple</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Активация карты</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Проверка баланса</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Поддержка Apple</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Apple Gift Card Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

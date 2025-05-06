import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Главная секция */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Apple Gift Card
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Один подарок. Бесконечные возможности.
            </p>
            <div className="mt-8">
              <Button asChild className="rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800">
                <Link to="/products">Выбрать карту</Link>
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex items-center justify-center h-80 bg-gray-50 rounded-xl shadow-xl overflow-hidden">
              <Icon 
                name="Apple" 
                className="text-black h-40 w-40" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция возможностей */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Возможности без границ</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Используйте подарочную карту для покупок в App Store, iTunes Store и не только.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white mx-auto">
                <Icon name="Music2" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">Apple Music</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Более 90 миллионов песен без рекламы
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white mx-auto">
                <Icon name="Gamepad2" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">Apple Arcade</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Доступ к сотням игр без рекламы
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white mx-auto">
                <Icon name="Store" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">App Store</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Миллионы приложений для iPhone и iPad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция номиналов */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Доступные номиналы</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Выберите подходящий номинал для вашего подарка
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-medium text-gray-900 text-center">1 000 ₽</h3>
              <div className="mt-4 text-center">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-medium text-gray-900 text-center">2 500 ₽</h3>
              <div className="mt-4 text-center">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-medium text-gray-900 text-center">5 000 ₽</h3>
              <div className="mt-4 text-center">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Index;

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
                <span className="ml-2 text-xl apple-style text-gray-900">Gift Card</span>
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

      {/* Главная секция в стиле Apple */}
      <section className="py-12 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl apple-heading tracking-tight text-gray-900 mb-2">
            Gift Card
          </h1>
          <h2 className="text-3xl apple-heading text-gray-900 mb-6">
            One card. Everything they love.
          </h2>
          <p className="mt-4 mx-auto text-base apple-light text-gray-600 max-w-2xl leading-relaxed">
            Apple Gift Card is the perfect gift for friends and family. Spend it at any Apple Store, on apple.com or in the App Store. Use it for products and accessories, apps, games, music, movies, TV shows, iCloud+ and more.
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild className="rounded-full px-8 py-2 bg-[#0071e3] text-white hover:bg-blue-600">
              <Link to="/products">Купить карту</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-2 border-gray-300">
              <Link to="/instruction">Инструкция</Link>
            </Button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-center mb-2">
              <img 
                src="https://cdn.poehali.dev/files/328c70d7-dade-4f72-9826-e2eeece3af0b.png" 
                alt="Apple Gift Card с разноцветным логотипом" 
                className="w-24 h-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 apple-light">
                Подарочная карта для App Store и iTunes
              </p>
              <p className="text-3xl font-medium mt-2 apple-style">
                1 000 ₽
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl apple-heading text-gray-900">Универсальный подарок</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base apple-light text-gray-500 leading-relaxed">
              Одна карта для всех сервисов Apple. Идеально подходит для любого повода.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto">
                <Icon name="Gift" className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg apple-style text-gray-900">Идеальный подарок</h3>
              <p className="mt-2 text-base apple-light text-gray-500">
                Порадуйте близких универсальным подарком для экосистемы Apple
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mx-auto">
                <Icon name="Zap" className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg apple-style text-gray-900">Мгновенная доставка</h3>
              <p className="mt-2 text-base apple-light text-gray-500">
                Получите код активации на email сразу после оплаты
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mx-auto">
                <Icon name="ShieldCheck" className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg apple-style text-gray-900">Безопасно и надежно</h3>
              <p className="mt-2 text-base apple-light text-gray-500">
                Официальные коды активации с гарантией работы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция вариантов карт */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl apple-heading text-gray-900">Выберите номинал</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base apple-light text-gray-500">
              Доступно несколько вариантов номинала для любого бюджета
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon name="Apple" className="text-black h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl apple-style text-gray-900 text-center">1 000 ₽</h3>
              <div className="mt-6 text-center">
                <Button asChild className="rounded-full px-6 py-2 bg-black text-white hover:bg-gray-800">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon name="Apple" className="text-black h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl apple-style text-gray-900 text-center">2 500 ₽</h3>
              <div className="mt-6 text-center">
                <Button asChild className="rounded-full px-6 py-2 bg-black text-white hover:bg-gray-800">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon name="Apple" className="text-black h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl apple-style text-gray-900 text-center">5 000 ₽</h3>
              <div className="mt-6 text-center">
                <Button asChild className="rounded-full px-6 py-2 bg-black text-white hover:bg-gray-800">
                  <Link to="/products">Выбрать</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">О нас</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">О компании</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Контакты</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Поддержка</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Помощь</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Доставка</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Документы</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Условия использования</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Оферта</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Apple</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Активация карты</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Проверка баланса</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Поддержка Apple</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm apple-light text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Apple Gift Card Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

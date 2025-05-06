
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero секция в стиле Apple - iPhone 16 */}
      <section className="pt-8 pb-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl apple-heading font-semibold text-gray-900 tracking-tight">
            iPhone
          </h1>
          <h2 className="mt-4 text-2xl apple-subheading text-gray-900">
            Meet the iPhone 16 family.
          </h2>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Button asChild className="apple-button rounded-full px-6 py-2 bg-[#0071e3] text-white hover:bg-blue-600">
              <a href="#learn">Learn more</a>
            </Button>
            <Button asChild variant="outline" className="apple-button rounded-full px-6 py-2 border-[#0071e3] text-[#0071e3] hover:bg-blue-50">
              <Link to="/products">Shop iPhone</Link>
            </Button>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-sm text-[#0066CC] apple-light">
              Built for Apple Intelligence.
            </span>
          </div>
          
          <div className="mt-6">
            <img 
              src="https://cdn.poehali.dev/files/8e61864d-b576-4443-8cee-2a6757619622.png" 
              alt="iPhone 16 family" 
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Секция Apple Gift Card */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl apple-heading font-semibold text-gray-900">
            Apple Gift Card
          </h2>
          <h3 className="mt-4 text-2xl apple-subheading text-gray-900">
            One card. Everything they love.
          </h3>
          <p className="mt-6 mx-auto text-base apple-light text-gray-600 max-w-2xl leading-relaxed">
            Apple Gift Card is the perfect gift for friends and family. Spend it at any Apple Store, on apple.com or in the App Store. Use it for products and accessories, apps, games, music, movies, TV shows, iCloud+ and more.
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild className="apple-button rounded-full px-8 py-2 bg-[#0066CC] text-white hover:bg-blue-600">
              <Link to="/products">Купить карту</Link>
            </Button>
            <Button asChild variant="outline" className="apple-button rounded-full px-8 py-2 border-gray-300">
              <Link to="/instruction">Инструкция</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Секция с вариантами карт */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl apple-heading text-gray-900">Выберите номинал</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base apple-light text-gray-500">
              Доступно несколько вариантов номинала для любого бюджета
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[1000, 2500, 5000].map((value) => (
              <div key={value} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon name="Apple" className="text-black h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-2xl apple-style text-gray-900 text-center">{value.toLocaleString()} ₽</h3>
                <div className="mt-6 text-center">
                  <Button asChild className="apple-button rounded-full px-6 py-2 bg-[#0066CC] text-white hover:bg-blue-600">
                    <Link to="/products">Выбрать</Link>
                  </Button>
                </div>
              </div>
            ))}
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
      
      <Footer />
    </div>
  );
};

export default Index;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const giftCards = [
  {
    id: 1,
    title: "Apple Gift Card",
    value: 1000,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=500&auto=format&fit=crop",
    description: "Подарочная карта номиналом 1 000 ₽ для App Store и iTunes",
  },
  {
    id: 2,
    title: "Apple Gift Card",
    value: 2500,
    image: "https://images.unsplash.com/photo-1599658880166-45e598e904a7?q=80&w=500&auto=format&fit=crop",
    description: "Подарочная карта номиналом 2 500 ₽ для App Store и iTunes",
  },
  {
    id: 3,
    title: "Apple Gift Card",
    value: 5000,
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=500&auto=format&fit=crop",
    description: "Подарочная карта номиналом 5 000 ₽ для App Store и iTunes",
  },
];

const Products = () => {
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

      {/* Заголовок */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Apple Gift Cards
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Выберите карту нужного номинала для себя или в подарок
            </p>
          </div>
        </div>
      </section>

      {/* Список товаров */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {giftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden border-gray-200 hover:border-gray-300 transition-all hover:shadow-md">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-center h-56 bg-gray-50">
                    <Icon 
                      name="Apple" 
                      className="text-black h-24 w-24" 
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                  <p className="text-2xl font-semibold mt-2">{card.value.toLocaleString()} ₽</p>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full rounded-full bg-black hover:bg-gray-800">
                    Добавить в корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Информация о картах */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">О картах Apple Gift Card</h2>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Apple Gift Card — это универсальная подарочная карта для всех сервисов и продуктов Apple. 
              Используйте её для покупок в App Store, Apple Music, Apple TV, Apple Books и не только.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Особенности карт</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Мгновенная доставка кода на email</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Универсальное использование во всех сервисах Apple</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Безопасная оплата через защищенные каналы</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Без срока действия и дополнительных комиссий</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Как использовать</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-black text-white text-xs mr-2 mt-0.5">1</div>
                  <span>Откройте App Store, iTunes Store или Apple Books</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-black text-white text-xs mr-2 mt-0.5">2</div>
                  <span>Нажмите на свой аккаунт и выберите "Погасить подарочную карту"</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-black text-white text-xs mr-2 mt-0.5">3</div>
                  <span>Введите код, полученный после покупки</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-black text-white text-xs mr-2 mt-0.5">4</div>
                  <span>Средства будут немедленно зачислены на ваш счет Apple ID</span>
                </li>
              </ul>
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

export default Products;

import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

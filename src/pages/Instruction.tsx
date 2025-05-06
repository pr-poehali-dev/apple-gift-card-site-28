
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Instruction = () => {
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
              Как использовать Apple Gift Card
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Простая пошаговая инструкция по активации и использованию
            </p>
          </div>
        </div>
      </section>

      {/* Инструкция шаг за шагом */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Покупка карты</h3>
                    <p className="mt-2 text-gray-600">
                      Выберите подарочную карту нужного номинала и оформите заказ. После оплаты вы получите код карты на указанный email-адрес.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=700&auto=format&fit=crop" 
                      alt="Покупка карты" 
                      className="mt-4 rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Откройте App Store или iTunes</h3>
                    <p className="mt-2 text-gray-600">
                      На вашем iPhone, iPad или Mac откройте App Store. На компьютере с Windows запустите iTunes.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <img 
                        src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=400&auto=format&fit=crop" 
                        alt="App Store на iPhone" 
                        className="rounded-lg w-full h-auto"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=400&auto=format&fit=crop" 
                        alt="iTunes на компьютере" 
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Найдите раздел погашения карты</h3>
                    <p className="mt-2 text-gray-600">
                      <strong>В iOS и iPadOS:</strong> Нажмите на иконку вашего профиля в правом верхнем углу App Store, затем выберите "Погасить подарочную карту или код".
                    </p>
                    <p className="mt-2 text-gray-600">
                      <strong>В macOS:</strong> В App Store нажмите на ваше имя в нижней части боковой панели, затем выберите "Погасить подарочную карту".
                    </p>
                    <p className="mt-2 text-gray-600">
                      <strong>В Windows:</strong> В iTunes перейдите в меню "Учетная запись" и выберите "Погасить".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Ввод кода карты</h3>
                    <p className="mt-2 text-gray-600">
                      Введите 16-значный код с вашей подарочной карты или код, полученный по email. Система может предложить ввести код вручную или использовать камеру для сканирования.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1592898741947-f4f507305178?q=80&w=700&auto=format&fit=crop" 
                      alt="Ввод кода карты" 
                      className="mt-4 rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
                    5
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Подтверждение активации</h3>
                    <p className="mt-2 text-gray-600">
                      После успешного ввода кода, средства будут зачислены на ваш счёт Apple ID. Вы увидите подтверждение с указанием добавленной суммы.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-900 font-medium">После активации ваш баланс можно использовать для:</p>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Покупки приложений и игр в App Store</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Оплаты подписок, включая Apple Music, Apple TV+ и iCloud+</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Покупки фильмов, музыки и книг</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Покупки внутри приложений</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Часто задаваемые вопросы */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-md border border-gray-200">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50">
                Есть ли срок действия у Apple Gift Card?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Нет, Apple Gift Card не имеют срока действия. Вы можете использовать средства в любое удобное время после активации карты.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50">
                Можно ли объединить несколько карт?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Да, вы можете активировать несколько карт, и их суммы будут объединены на вашем счете Apple ID.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50">
                Можно ли использовать карту частично?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Да, при покупке товара стоимость будет списана с вашего баланса, а остаток сохранится на счете для будущих покупок.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50">
                Как проверить баланс на своем счете?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Вы можете проверить баланс в App Store, нажав на иконку вашего профиля. Ваш баланс будет отображен под вашим именем. На компьютере с Windows откройте iTunes, перейдите в меню "Учетная запись" и выберите "Просмотреть мою учетную запись".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50">
                Можно ли вернуть средства с карты?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                После активации карты средства не могут быть возвращены. Однако, если вы еще не активировали карту, вы можете обратиться в нашу службу поддержки для решения вопроса о возврате.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-xl p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Готовы приобрести Apple Gift Card?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Выберите карту любого номинала и получите ее мгновенно
              </p>
              <div className="mt-8">
                <Button asChild className="rounded-full px-8 py-6 bg-white text-black hover:bg-gray-100">
                  <Link to="/products">Выбрать карту</Link>
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

export default Instruction;


import React from "react";
import StepCard from "./StepCard";
import UsageList from "./UsageList";

const StepsSection = () => {
  const usageItems = [
    "Покупки приложений и игр в App Store",
    "Оплаты подписок, включая Apple Music, Apple TV+ и iCloud+",
    "Покупки фильмов, музыки и книг",
    "Покупки внутри приложений"
  ];

  return (
    <section className="pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <StepCard 
            step={1}
            title="Покупка карты"
            description="Выберите подарочную карту нужного номинала и оформите заказ. После оплаты вы получите код карты на указанный email-адрес."
            image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=700&auto=format&fit=crop"
            altText="Покупка карты"
          />

          <StepCard 
            step={2}
            title="Откройте App Store или iTunes"
            description="На вашем iPhone, iPad или Mac откройте App Store. На компьютере с Windows запустите iTunes."
            additionalContent={
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
            }
          />

          <StepCard 
            step={3}
            title="Найдите раздел погашения карты"
            description={
              <>
                <p><strong>В iOS и iPadOS:</strong> Нажмите на иконку вашего профиля в правом верхнем углу App Store, затем выберите "Погасить подарочную карту или код".</p>
                <p className="mt-2"><strong>В macOS:</strong> В App Store нажмите на ваше имя в нижней части боковой панели, затем выберите "Погасить подарочную карту".</p>
                <p className="mt-2"><strong>В Windows:</strong> В iTunes перейдите в меню "Учетная запись" и выберите "Погасить".</p>
              </>
            }
          />

          <StepCard 
            step={4}
            title="Ввод кода карты"
            description="Введите 16-значный код с вашей подарочной карты или код, полученный по email. Система может предложить ввести код вручную или использовать камеру для сканирования."
            image="https://images.unsplash.com/photo-1592898741947-f4f507305178?q=80&w=700&auto=format&fit=crop"
            altText="Ввод кода карты"
          />

          <StepCard 
            step={5}
            title="Подтверждение активации"
            description="После успешного ввода кода, средства будут зачислены на ваш счёт Apple ID. Вы увидите подтверждение с указанием добавленной суммы."
            additionalContent={<UsageList items={usageItems} />}
          />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

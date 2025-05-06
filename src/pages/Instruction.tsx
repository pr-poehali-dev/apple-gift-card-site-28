
import React from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import InstructionHeader from "@/components/instructions/InstructionHeader";
import StepsSection from "@/components/instructions/StepsSection";
import FaqSection from "@/components/instructions/FaqSection";
import CallToAction from "@/components/instructions/CallToAction";

const Instruction = () => {
  const faqItems = [
    {
      question: "Есть ли срок действия у Apple Gift Card?",
      answer: "Нет, Apple Gift Card не имеют срока действия. Вы можете использовать средства в любое удобное время после активации карты.",
      value: "item-1"
    },
    {
      question: "Можно ли объединить несколько карт?",
      answer: "Да, вы можете активировать несколько карт, и их суммы будут объединены на вашем счете Apple ID.",
      value: "item-2"
    },
    {
      question: "Можно ли использовать карту частично?",
      answer: "Да, при покупке товара стоимость будет списана с вашего баланса, а остаток сохранится на счете для будущих покупок.",
      value: "item-3"
    },
    {
      question: "Как проверить баланс на своем счете?",
      answer: "Вы можете проверить баланс в App Store, нажав на иконку вашего профиля. Ваш баланс будет отображен под вашим именем. На компьютере с Windows откройте iTunes, перейдите в меню \"Учетная запись\" и выберите \"Просмотреть мою учетную запись\".",
      value: "item-4"
    },
    {
      question: "Можно ли вернуть средства с карты?",
      answer: "После активации карты средства не могут быть возвращены. Однако, если вы еще не активировали карту, вы можете обратиться в нашу службу поддержки для решения вопроса о возврате.",
      value: "item-5"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <InstructionHeader />
      <StepsSection />
      <FaqSection faqs={faqItems} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Instruction;

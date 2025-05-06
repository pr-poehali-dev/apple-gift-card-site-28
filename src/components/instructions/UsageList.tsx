
import React from "react";
import Icon from "@/components/ui/icon";

interface UsageListProps {
  items: string[];
}

const UsageList: React.FC<UsageListProps> = ({ items }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-900 font-medium">После активации ваш баланс можно использовать для:</p>
      <ul className="mt-2 space-y-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsageList;

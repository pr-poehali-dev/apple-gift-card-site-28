
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StepCardProps {
  step: number;
  title: string;
  description: React.ReactNode;
  image?: string;
  altText?: string;
  additionalContent?: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  image,
  altText = "",
  additionalContent,
}) => {
  return (
    <Card className="border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-xl font-medium">
            {step}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <div className="mt-2 text-gray-600">{description}</div>
            
            {image && (
              <img 
                src={image} 
                alt={altText} 
                className="mt-4 rounded-lg w-full h-auto"
              />
            )}
            
            {additionalContent && (
              <div className="mt-4">{additionalContent}</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;

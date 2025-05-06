
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;

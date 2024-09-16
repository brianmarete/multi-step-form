import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function PlanSelection() {
  const [isYearly, setIsYearly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Arcade",
      icon: "/icon-arcade.svg",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      name: "Advanced",
      icon: "/icon-advanced.svg",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      name: "Pro",
      icon: "/icon-pro.svg",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ];

  return (
    <>
      <h1 className="text-3xl text-marine-blue font-bold my-2">
        Select your plan
      </h1>
      <p className="text-cool-gray mb-6">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`h-44 flex flex-col justify-between border rounded-lg p-4 cursor-pointer hover:border-indigo-600 transition-colors ${
              selectedPlan === plan.name
                ? "bg-magnolia"
                : "hover:border-indigo-600"
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <img src={plan.icon} alt="" className="w-10" />
            <div>
              <h3 className="font-bold text-marine-blue">{plan.name}</h3>
              <p className="text-cool-gray font-semibold text-sm">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
                {isYearly ? "yr" : "mo"}
              </p>
              {isYearly && (
                <p className="text-marine-blue text-xs">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 bg-gray-100 p-3 rounded-lg mb-6">
        <span
          className={`font-bold ${
            !isYearly ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Monthly
        </span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span
          className={`font-bold ${
            isYearly ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
}

import { Switch } from "@/components/ui/switch";
import { Plan, PriceType } from "@/types";

type Props = {
  plans: Plan[];
  selectedPlan: Plan;
  onPlanChange: (planId: Plan) => void;
  selectedPriceType: PriceType;
  onPriceTypeToggle: () => void;
};

export default function PlanSelection({
  plans,
  selectedPlan,
  onPlanChange,
  selectedPriceType,
  onPriceTypeToggle,
}: Props) {
  return (
    <>
      <div>
        <h1 className="text-3xl text-marine-blue font-bold my-2">
          Select your plan
        </h1>
        <p className="text-cool-gray mb-6">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`h-44 flex flex-col justify-between border rounded-lg p-4 cursor-pointer hover:border-indigo-600 transition-colors ${
              selectedPlan.name === plan.name
                ? "bg-magnolia border-indigo-600"
                : "hover:border-indigo-600"
            }`}
            onClick={() => onPlanChange(plan)}
          >
            <img src={`/icon-${plan.icon}.svg`} alt="" className="w-10" />
            <div>
              <h3 className="font-bold text-marine-blue">{plan.name}</h3>
              <p className="text-cool-gray font-semibold text-sm">
                $
                {selectedPriceType === "yearly"
                  ? plan.yearlyPrice
                  : plan.monthlyPrice}
              </p>
              {selectedPriceType === "yearly" && (
                <p className="text-marine-blue text-xs">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 bg-gray-100 p-3 rounded-lg mb-6">
        <span
          className={`font-bold ${
            selectedPriceType === "monthly"
              ? "text-marine-blue"
              : "text-cool-gray"
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={selectedPriceType === "yearly"}
          onCheckedChange={onPriceTypeToggle}
        />
        <span
          className={`font-bold ${
            selectedPriceType === "yearly"
              ? "text-marine-blue"
              : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
}

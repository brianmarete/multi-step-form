import { Link } from "react-router-dom";
import { Plan, PlanAddon, PriceType, planAddons } from "@/config";

type Props = {
  plan: Plan;
  addons: Set<PlanAddon>;
  priceType: PriceType;
};

function calcTotal(plan: Plan, addons: Set<PlanAddon>, priceType: PriceType) {
  let total = 0;
  if (priceType === "monthly") {
    total += plan.monthlyPrice;
    addons.forEach((addon) => (total += addon.monthlyPrice));
  } else {
    total += plan.yearlyPrice;
    addons.forEach((addon) => (total += addon.yearlyPrice));
  }

  return total;
}

export default function Summary({ plan, addons, priceType }: Props) {
  const isMonthly = priceType === "monthly";
  const selectedAddons = planAddons.filter((addon) => addons.has(addon));
  const total = calcTotal(plan, addons, priceType);

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Finishing up</h2>
        <p className="text-cool-gray mb-6">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">
              {`${plan.name} (${isMonthly ? "Monthly" : "Yearly"})`}
            </h3>
            <Link
              to="/select-plan"
              className="text-indigo-600 underline text-sm"
            >
              Change
            </Link>
          </div>
          <span className="font-semibold text-gray-900">
            {isMonthly ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`}
          </span>
        </div>
        <hr className="my-4" />
        {selectedAddons.length > 0 && (
          <div className="space-y-3">
            {selectedAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <span className="text-gray-500">{addon.name}</span>
                <span className="text-gray-700">
                  +
                  {isMonthly
                    ? `$${addon.monthlyPrice}/mo`
                    : `$${addon.yearlyPrice}/yr`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500">{`Total (per ${
          isMonthly ? "month" : "year"
        })`}</span>
        <span className="text-indigo-600 font-bold text-xl">{`$${total}/${
          isMonthly ? "mo" : "yr"
        }`}</span>
      </div>
    </>
  );
}

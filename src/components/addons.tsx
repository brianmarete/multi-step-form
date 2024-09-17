import { Checkbox } from "@/components/ui/checkbox";
import { PlanAddon, PriceType } from "@/types";

type Props = {
  addons: PlanAddon[];
  checkedAddons: Set<PlanAddon>;
  onToggleAddon: (addon: PlanAddon) => void;
  priceType: PriceType;
};

export default function Addons({
  addons,
  checkedAddons,
  onToggleAddon,
  priceType,
}: Props) {
  const isMonthly = priceType === "monthly";

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-indigo-900 mb-2">
          Pick add-ons
        </h2>
        <p className="text-cool-gray mb-6">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="space-y-4">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className={`flex items-center justify-between p-4 border rounded-lg ${
              checkedAddons.has(addon)
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-4">
              <Checkbox
                className="data-[state=checked]:bg-purplish-blue data-[state=unchecked]:bg-white"
                id={addon.id}
                checked={checkedAddons.has(addon)}
                onCheckedChange={() => onToggleAddon(addon)}
              />
              <div>
                <label
                  htmlFor={addon.id}
                  className="font-semibold text-indigo-900"
                >
                  {addon.name}
                </label>
                <p className="text-sm text-gray-500">{addon.description}</p>
              </div>
            </div>
            <span className="text-indigo-600 font-semibold">
              ${isMonthly ? addon.monthlyPrice : addon.yearlyPrice}/
              {isMonthly ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

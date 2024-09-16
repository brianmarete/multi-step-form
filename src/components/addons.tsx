import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Addons() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addons = [
    {
      id: "online",
      name: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      id: "storage",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      id: "profile",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
              selectedAddons.includes(addon.id)
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-4">
              <Checkbox
                id={addon.id}
                checked={selectedAddons.includes(addon.id)}
                onCheckedChange={() => toggleAddon(addon.id)}
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
            <span className="text-indigo-600 font-semibold">{addon.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}

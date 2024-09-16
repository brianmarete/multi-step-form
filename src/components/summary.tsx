function PlanItem({ title, price }: { title: string; price: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500">{title}</span>
      <span className="text-gray-700">{price}</span>
    </div>
  );
}

export default function Summary() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Finishing up</h2>
      <p className="text-gray-500 mb-6">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">Arcade (Monthly)</h3>
            <button className="text-indigo-600 underline text-sm">
              Change
            </button>
          </div>
          <span className="font-semibold text-gray-900">$9/mo</span>
        </div>
        <hr className="my-4" />
        <div className="space-y-3">
          <PlanItem title="Online service" price="+$1/mo" />
          <PlanItem title="Larger storage" price="+$2/mo" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500">Total (per month)</span>
        <span className="text-indigo-600 font-bold text-xl">+$12/mo</span>
      </div>
    </>
  );
}

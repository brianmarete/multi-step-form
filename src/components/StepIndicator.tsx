import clsx from "clsx";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={clsx(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4",
              index === currentStep
                ? "bg-primary-foreground text-primary border-primary-foreground"
                : "border-primary-foreground text-primary-foreground"
            )}
          >
            {index + 1}
          </div>
          <div>
            <div className="text-xs text-primary-foreground/75">
              STEP {index + 1}
            </div>
            <div className="font-bold text-primary-foreground">{step}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

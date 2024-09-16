import { useState } from "react";
// import { PersonalInfo } from "@/components/personal-info";
// import { PlanSelection} from "@/components/plan-selection";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
// import Addons from "./components/addons";
import Summary from "./components/summary";

function App() {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-light-blue h-screen flex justify-center items-center">
      <div className="flex h-3/5 w-[55%] bg-white rounded-lg shadow-md p-3">
        <div className="sidebar w-1/4 h-full rounded-md p-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
        </div>
        <div className="form w-3/4 h-full px-20 py-8">
          {/* <PersonalInfo /> */}
          {/* <PlanSelection /> */}
          {/* <Addons /> */}
          <Summary />
          <div className="flex justify-between">
            <Button
              className={clsx(currentStep === 0 ? "invisible" : "")}
              variant="ghost"
              onClick={handleBack}
            >
              Go Back
            </Button>
            <Button
              className={clsx(
                currentStep === steps.length - 1 ? "invisible" : ""
              )}
              onClick={handleNext}
            >
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

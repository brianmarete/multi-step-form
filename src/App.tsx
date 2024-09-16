import { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import PersonalInfo from "@/components/personal-info";
import PlanSelection from "@/components/plan-selection";
import Addons from "@/components/addons";
import Summary from "@/components/summary";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

function App() {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const location = useLocation();
  const navigate = useNavigate();

  const currentStep = steps.findIndex(
    (step) => location.pathname === "/" + step.toLowerCase().replace(" ", "-")
  );

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      navigate("/" + steps[currentStep + 1].toLowerCase().replace(" ", "-"));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      navigate("/" + steps[currentStep - 1].toLowerCase().replace(" ", "-"));
    }
  };

  return (
    <div className="bg-light-blue h-screen flex justify-center items-center">
      <div className="flex h-3/5 w-[55%] bg-white rounded-lg shadow-md p-3">
        <div className="sidebar w-1/4 h-full rounded-md p-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
        </div>
        <div className="grid grid-rows[1fr_auto] w-3/4 h-full px-20 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/your-info" replace />} />
            <Route path="/your-info" element={<PersonalInfo />} />
            <Route path="/select-plan" element={<PlanSelection />} />
            <Route path="/add-ons" element={<Addons />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
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

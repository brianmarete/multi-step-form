import { useReducer } from "react";
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
import { initialState, reducer } from "./state";
import { planAddons, plans } from "./types";

function App() {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const location = useLocation();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

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
            <Route
              path="/your-info"
              element={
                <PersonalInfo
                  initialName={state.name}
                  initialEmail={state.email}
                  initialPhoneNumber={state.phoneNumber}
                  onSubmit={(result) => {
                    dispatch({
                      type: "UPDATE_PERSONAL_INFO",
                      name: result.name,
                      email: result.email,
                      phoneNumber: result.phone,
                    });
                    handleNext();
                  }}
                />
              }
            />
            <Route
              path="/select-plan"
              element={
                <PlanSelection
                  plans={plans}
                  selectedPlan={state.plan}
                  onPlanChange={(plan) =>
                    dispatch({ type: "UPDATE_PLAN", plan })
                  }
                  selectedPriceType={state.priceType}
                  onPriceTypeToggle={() =>
                    dispatch({ type: "TOGGLE_PRICE_TYPE" })
                  }
                />
              }
            />
            <Route
              path="/add-ons"
              element={
                <Addons
                  addons={planAddons}
                  priceType={state.priceType}
                  checkedAddons={state.addons}
                  onToggleAddon={(addon) =>
                    dispatch({ type: "TOGGLE_PLAN_ADDON", addon })
                  }
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary
                  plan={state.plan}
                  addons={state.addons}
                  priceType={state.priceType}
                />
              }
            />
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
              className={
                currentStep === steps.length - 1 ? "hover:bg-purplish-blue" : ""
              }
              onClick={handleNext}
            >
              {currentStep === steps.length - 1 ? "Confirm" : "Next Step"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import plansData from "../../assets/cardPlan.json";
import { PlanCard } from "./planCard";

const PlansList = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  function handleSelectPlan(planId) {
    setSelectedPlan(planId);
  }
  return (
    <div className="plans-list">
      <div className="cards">
        {plansData.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelectPlan}
            isSelected={selectedPlan === plan.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansList;

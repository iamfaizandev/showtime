import { useEffect, useState } from "react";
import "./plancard.css";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const PlanCard = ({ plan, onSelectPlan }) => {
  // const [cardsClass, setCardClass] = useState("");
  // const [tickHide, setTickHide] = useState({ visibility: "hidden" });
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (selectedPlan !== plan.id) {
      setIsSelected(false);
    }
  }, [plan.id, selectedPlan]);
  function onCardClick() {
    if (onSelectPlan) {
      onSelectPlan(plan.id);
      setIsSelected(true);
    }
  }

  return (
    <div className="planCards">
      <div
        className={`plan-card ${isSelected ? "selected" : ""}`}
        onClick={onCardClick}
      >
        <div className="header">
          <h2>{plan.name}</h2>
          <h6>{plan.smallText}</h6>
          {/* <div className="tick">
            <Checkbox defaultChecked={false} size="small" />
          </div> */}
        </div>
        <ul className="p-0">
          <li>
            <div className="li-title"> Monthly price</div>
            <div className="plan-details">{plan.price} </div>
          </li>
          <div className="border"></div>
          <li>
            <div className="li-title">Video and sound quality</div>
            <div className="plan-details">{plan.sound} </div>
          </li>
          <div className="border"></div>
          <li>
            <div className="li-title">Resolution</div>
            <div className="plan-details">{plan.resolution} </div>
          </li>
          <div className="border"></div>
          <li>
            <div className="li-title">Supported devices</div>
            <div className="plan-details">{plan.devices} </div>
          </li>
          <div className="border"></div>
          <li>
            <div className="li-title">
              Devices your household can watch at the same time
            </div>
            <div className="plan-details">{plan.devicesametime} </div>
          </li>
          <div className="border"></div>
          <li>
            <div className="li-title">Download devices</div>
            <div className="plan-details">{plan.downloadDevice} </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

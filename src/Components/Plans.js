import { Tooltip } from "react-tooltip";

const head = {
  name: "Software Testing Plans",
  text:
    "Come with us for testing and gain your customer's trust"
};
const cloudPlans = [
  {
    id: "Basic",
    id1: "Basic-plan",
    plan: "BASIC PLAN",
    price: "₹ 100/hr",
    text:"For Basic Testing - No min hrs ",
    testcaseDesign: " Testcases and Scenarios will not be shared with customers",
    browsers: "One Browser",
    mobileTest: "Mobile Testing provided for Current market version only ",
    support: "24/7 Support",
    testing: "Exploratory Testing",
    reports: "Bugs & Test coverage report will be shared",
    tag: "SELECT PLAN"
  },
  {
    id: "Advance",
    id1: "Advance-plan",
    plan: "ADVANCE PLAN",
    price: "₹ 90/hr",
    text:"For Advance Testing - Min 5 hrs",
    testcaseDesign: " Testcases and Scenarios will be shared with customers",
    browsers: "2 Browsers (Customer's wish )",
    mobileTest: "Mobile Testing provided for Current market version + previous 1 versions ",
    support: "24/7 Support",
    testing: "Functional, Exploratory Testing, build Testing ",
    reports: "Bugs, Test Coverage & Release report will be shared",
    tag: "SELECT PLAN"
  },
  {
    id: "Pro",
    id1: "Pro-plan",
    plan: "PRO PLAN",
    price: "₹ 80/hr",
    text:"For Professional Testing",
    testcaseDesign: " Testcases and Scenarios will be shared with customers",
    browsers: "3 Browsers",
    mobileTest: "Mobile Testing provided for Current market version + previous 2 versions",
    support: "24/7 Support",
    testing: "Functional, Exploratory Testing, Build Testing, Regression Testing , sanity Testing , UI Testing ,Compatibility ",
    reports: "Bugs, Test Coverage & Release report will be shared",
    tag: "TAKE IT NOW"
  }
];

export default function Plans() {
  return (
    <div className="Plan-container">
        <div className = "Plan-body">
            <div className="Plan-Header">
                <h1>{head.name}</h1>
                <p>{head.text}</p>
            </div><br/>
            <div className="Plan-flex-container">
                {cloudPlans.map((plan) => (
                <div className="plan-container" key={plan.plan}>
                    <h1 className="plan-Title" id={plan.id}>{plan.plan}</h1>
                    <div className="plan-wrapper">
                        <Tooltip anchorId={plan.id1}/>
                        <div className="plan-price" id={plan.id1}>
                            <h2 data-tooltip-content={plan.price} >{plan.price}</h2>
                        </div>
                        <h4>Per Release</h4>
                        
                    </div>
                    <br />
                    <h3 className="Plan-text">{plan.text}</h3>
                    <div className="Plan-list-container">
                        <ul className="Plan-list-Items">
                            <li>{plan.testcaseDesign}</li>
                            <li>{plan.browsers}</li>
                            <li>{plan.mobileTest}</li>
                            <li>{plan.support}</li>
                            <li>{plan.testing}</li>
                            <li>{plan.reports}</li>
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

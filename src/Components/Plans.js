
const head = {
  name: "Software Testing Plans",
  text:
    "Come with us for testing and gain your customer's trust"
};
const cloudPlans = [
  {
    id: "Basic",
    plan: "BASIC PLAN",
    price: "₹ 100/hr",
    text:
      "Key goal is to provide Exploratory Testing",
    testcaseDesign: " Testcases and Scenarios will not be share with customers",
    browsers: "One Browser",
    mobileTest: "Mobile Testing provided for last 2 version",
    support: "24/7 Support",
    testing: "Exploratory Testing",
    reports: "Bugs & Test coverage report will be shared",
    tag: "SELECT PLAN"
  },
  {
    id: "Advance",
    id1: "ADVANCE PLAN",
    plan: "ADVANCE PLAN",
    price: "₹ 90/hr",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    storage: "1 TB Cloud Space",
    dataTransfer: "8 TB Data Transfer",
    panel: "Fully Managed Panel",
    support: "15-minute Quick Support",
    themes: "Unlimited Web Addons",
    others: "Cancel or Upgrade Anytime",
    tag: "SELECT PLAN"
  },
  {
    id: "Pro",
    plan: "PRO PLAN",
    price: "₹ 80/hr",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    storage: "4 TB Cloud Space",
    dataTransfer: "20 TB Data Transfer",
    panel: "Fully Managed Panel",
    support: "15-minute Quick Support",
    themes: "Top Notch Web Apps",
    others: "Advanced Scalable",
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
                        <div className="plan-price" id={plan.id1}>
                            <h2>{plan.price}</h2>
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

import tickMark from "../../assets/products/check.png";

const PricingCard = ({ pricing }) => {
  return (
    <div
      className={`card p-6 rounded-2xl ${pricing.tagType === "popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-[#F9FAFC]"}`}
    >
      <div className="card-body">
          <h3
            className={`${pricing.tagType !== "popular" ? "text-[#101727]" : ""} font-bold text-2xl`}
          >
            {pricing.name}
          </h3>
          <p
            className={`${pricing.tagType !== "popular" ? "text-[#627382]" : ""}`}
          >
            {pricing.description}
          </p>
        <p>
          <span className="font-bold text-[40px]">${pricing.price}</span>/
          {pricing.period}
        </p>
        <ul>
          {pricing.features.map((feature) => {
            return (
              <li className="flex gap-2">
                <img src={tickMark} width="20px" height="20px"></img>
                {feature}
              </li>
            );
          })}
        </ul>
        <div className="card-actions">
          <button
          className={`btn rounded-[100px] btn-block mt-6 ${pricing.tagType == "popular" ? "bg-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
        >
          {pricing.tagType === "starter" ? (
            <span> Get Started Free </span>
          ) : pricing.tagType === "popular" ? (
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              {" "}
              Start Pro Trial{" "}
            </span>
          ) : (
            <span> Contact Sales </span>
          )}
        </button>
        </div>
        
      </div>
    </div>
  );
};

//   {
//     "id": 1,
//     "name": "Starter",
//     "description": "Perfect for getting started",
//     "price": 0,
//     "period": "monthly",
//     "tag": "",
//     "tagType": "",
//     "features": [
//       "Access to 10 free tools",
//       "Basic templates",
//       "Community support",
//       "1 project per month"
//     ],
//     "icon": "starter"
//   },
export default PricingCard;

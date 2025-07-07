import { useState } from "react";

const Card = () => {
    const [dis, setDis] = useState(false);
  return (
    <div hidden={dis} className="card bg-neutral text-neutral-content w-96 fixed z-20">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button onClick={() => setDis(false)} className="btn btn-primary">Accept</button>
          <button onClick={() => setDis(false)} className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

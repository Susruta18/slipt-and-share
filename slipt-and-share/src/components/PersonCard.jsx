```jsx
import { User, ArrowUpRight, ArrowDownRight } from "lucide-react";

function PersonCard({
  name,
  paid = 0,
  share = 0,
}) {
  const balance = paid - share;

  const isOwed = balance > 0;
  const isOwing = balance < 0;

  return (
    <div className="person-card">

      <div className="person-info">

        <div className="person-avatar">
          <User size={20} />
        </div>

        <div>
          <h3>{name}</h3>
          <p>Personal expense summary</p>
        </div>

      </div>

      <div className="person-details">

        <div className="person-stat">
          <span>Paid</span>
          <strong>₹{paid.toFixed(2)}</strong>
        </div>

        <div className="person-stat">
          <span>Share</span>
          <strong>₹{share.toFixed(2)}</strong>
        </div>

        <div className="person-stat balance">

          <span>Balance</span>

          <strong
            className={
              isOwed
                ? "positive"
                : isOwing
                ? "negative"
                : "neutral"
            }
          >
            {isOwed && <ArrowUpRight size={16} />}
            {isOwing && <ArrowDownRight size={16} />}

            ₹{Math.abs(balance).toFixed(2)}
          </strong>

        </div>

      </div>

    </div>
  );
}

export default PersonCard;
```

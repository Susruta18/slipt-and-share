import { IndianRupee, Users, Calculator } from "lucide-react";

function Summary({ expenses }) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const people = [
    ...new Set(expenses.map((expense) => expense.paidBy)),
  ];

  const perPerson =
    people.length > 0
      ? total / people.length
      : 0;

  return (
    <div className="summary-card" id="summary">

      <div className="summary-title">
        <h2>Expense Summary</h2>

        <p>
          Your current spending overview
        </p>
      </div>

      <div className="summary-box">

        <div className="summary-icon">
          <IndianRupee size={20} />
        </div>

        <div>
          <span>Total Expenses</span>

          <h3>
            ₹{total.toFixed(2)}
          </h3>
        </div>

      </div>

      <div className="summary-box">

        <div className="summary-icon">
          <Users size={20} />
        </div>

        <div>
          <span>People</span>

          <h3>
            {people.length}
          </h3>
        </div>

      </div>

      <div className="summary-box">

        <div className="summary-icon">
          <Calculator size={20} />
        </div>

        <div>
          <span>Average per Person</span>

          <h3>
            ₹{perPerson.toFixed(2)}
          </h3>
        </div>

      </div>

      <div className="tip-box">
        💡 Add all your shared expenses to see
        how much everyone should contribute.
      </div>

    </div>
  );
}

export default Summary;
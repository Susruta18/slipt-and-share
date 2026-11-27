```jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="app">
      <Navbar />

      <main className="container">

        <section className="hero">
          <span className="badge">
            💸 Smart Expense Sharing
          </span>

          <h1>
            Split expenses.
            <br />
            <span>Share memories.</span>
          </h1>

          <p>
            Easily split bills with your friends and
            automatically track who owes whom.
          </p>
        </section>

        <section className="dashboard">

          <div className="left-section">

            <ExpenseForm
              onAddExpense={addExpense}
            />

            <ExpenseList
              expenses={expenses}
              onDelete={deleteExpense}
            />

          </div>

          <div className="right-section">

            <Summary
              expenses={expenses}
            />

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
```

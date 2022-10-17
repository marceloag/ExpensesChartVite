import { useState } from 'react';
import ExpensesChart from './components/ExpensesChart';

function App() {
  return (
    <main className="App lg:w-4/12 md:6/12 w-11/12 flex flex-col gap-5">
      <header className="bg-softred rounded-2xl p-6 flex flex-row justify-between">
        <div className="flex flex-col">
          <h4 className="text-white font-medium">My balance</h4>
          <span className="text-white text-2xl">$921.48</span>
        </div>
        <figure>
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24"></circle>
              <circle
                stroke="#FFF"
                stroke-width="2"
                cx="24"
                cy="24"
                r="23"
              ></circle>
            </g>
          </svg>
        </figure>
      </header>
      <div className="bg-paleorange rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-darkbrown">
          Spending - Last 7 days
        </h1>
        <section className="my-5">
          <ExpensesChart />
        </section>
        <hr className="bg-transparent border-cream" />
        <section className="py-3 flex flex-row justify-between items-end">
          <div className="flex-col flex gap-2">
            <span className="text-sm text-mediumbrown">Total this month</span>
            <span className="font-bold text-4xl">$478.33</span>
          </div>
          <div className="text-right flex flex-col">
            <span className="font-bold mb-0">+2.4%</span>
            <span className="text-mediumbrown mb-0">from last month</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = ({ savings, updateSavings }) => {
  const [Tax, setTax] = useState(0);
  const [newSavings, setNewSavings] = useState(0);
  const [BaseSal, setBaseSal] = useState(0);
  const [Wants, setWants] = useState(0);
  const [Needs, setNeeds] = useState(0);

  function calculateTaxesAndSavings() {
    const totalIncome = parseInt(BaseSal);
    const tax = calculateIncomeTax(totalIncome);
    const needsAndWants = parseInt(Needs) + parseInt(Wants);
    const savings = totalIncome - tax - needsAndWants;

    setTax(tax);
    setNewSavings(savings);

    handleUpdateMessage();
  }

  function calculate(amount, percent) {
    return (amount * percent) / 100;
  }

  function calculateIncomeTax(totalIncome) {
    if (totalIncome <= 250000) {
      return 0;
    } else if (totalIncome >= 251000 && totalIncome <= 500000) {
      return calculate(totalIncome - 250000, 5);
    } else if (totalIncome >= 500001 && totalIncome <= 750000) {
      return calculate(totalIncome - 500000, 10) + 12500;
    } else if (totalIncome >= 750001 && totalIncome <= 1000000) {
      return calculate(totalIncome - 750000, 15) + 37500;
    } else if (totalIncome >= 1000001 && totalIncome <= 1250000) {
      return calculate(totalIncome - 1000000, 20) + 75000;
    } else if (totalIncome >= 1250001 && totalIncome <= 1500000) {
      return calculate(totalIncome - 1250000, 25) + 125000;
    } else {
      return calculate(totalIncome - 1500000, 30) + 187500;
    }
  }

  const handleUpdateMessage = () => {
    updateSavings(newSavings);
    localStorage.setItem("Savings",newSavings);
    localStorage.setItem("Needs",Needs);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Enter your yearly salary to know your portfolio
            </h1>
            <p className="leading-relaxed mt-4">
              Your Savings is calculated by separating your yearly Needs and
              Wants from your Base Salary.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Yearly Salary
              </label>
              <input
                type="number"
                id="BaseSalary"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Salary in ₹"
                onChange={(e) => setBaseSal(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Your Needs
              </label>
              <input
                type="number"
                id="email"
                name="Needs"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Your Needs"
                onChange={(e) => setNeeds(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Your Wants
              </label>
              <input
                type="number"
                id="email"
                name="Wants"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Your Wants"
                onChange={(e) => setWants(e.target.value)}
              />
            </div>
          </div>
          <div className="relative mb-4">
            <div className="leading-7 text-sm text-gray-600">
              
              Calculate Taxes and Savings
            </div>
            <div className="flex justify-between gap-4">
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover-bg-indigo-600 rounded text-lg"
                onClick={calculateTaxesAndSavings}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        <div id="showTaxes" className="text-center">
          Taxes to be paid: {Tax} <br />
          Savings: {newSavings}
        </div>
        <div className="flex justify-center">
          <Link to="/low">
            <span className="text-white text-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Next
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Input;

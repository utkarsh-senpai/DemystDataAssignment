// DecisionEngine.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/DecisionEngine.css';

function DecisionEngine() {
  const location = useLocation();
  const { formData = {}, sheets = []} = location.state || {};
  const [result, setResult] = useState(null);
  const history = useNavigate();
  // Calculate the average asset value across 12 months
  const calculateAverageAssets = () => {
    let totalAssets = 0;
    for (let i = 0; i < Math.min(12,sheets.length); i++) {
      totalAssets += sheets[i].assetsValue;
    }
    return totalAssets / 12;
  };

  // Calculate preAssessment value based on rules
  const calculatePreAssessment = () => {
    const last12MonthsProfit = sheets.slice(0, 12).reduce((total, sheet) => total + sheet.profitOrLoss, 0);
    const averageAssets = calculateAverageAssets();

    if (last12MonthsProfit > 0) {
      return 60; // Loan favored to be approved 60% of the requested value
    } else if (averageAssets > formData.loanAmount) {
      return 100; // Average asset value greater than the loan amount
    } else {
      return 20; // Default value
    }
  };

  const preAssessmentValue = calculatePreAssessment();

//  useEffect(() => {
//
//    const apiEndpoint = 'https://your-dummy-api-url.com';
//
//    fetch(apiEndpoint, {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({ formData, preAssessmentValue }),
//    })
//      .then((response) => response.json())
//      .then((data) => {
//        // Assuming the API returns a result property with 'Approved' or 'Rejected'
//        setResult(data.result);
//      })
//      .catch((error) => {
//        console.error('Error fetching data:', error);
//        setResult('Error');
//      });
//  }, [formData, preAssessmentValue]);

 useEffect(() => {
    setResult('Approved');
  }, []);


const startNewSession = () => {
    history('/');
  };
  return (
       <div className="decision-container">
          <h1 className="decision-heading">Decision Engine Result</h1>
          <div className="business-details">
            <h2>Business Details</h2>
            <p>Name: {formData.name || 'N/A'}</p>
            <p>Year Established: {formData.establishmentYear || 'N/A'}</p>
          </div>
          <div className="profit-loss-summary">
            <h2>Profit or Loss Summary</h2>
            <ul>
              {sheets.slice(0, 12).map((sheet, index) => (
                <li key={index}>
                  Year: {sheet.year}, Month: {sheet.month}, Profit/Loss: {sheet.profitOrLoss}
                </li>
              ))}
            </ul>
          </div>
          <div className="pre-assessment">
            <h2>Pre-Assessment Value</h2>
            <p>preAssessment: {preAssessmentValue}</p>
          </div>
          <div className={`result ${result}`}>
            <h2>Result</h2>
            <p>{result}</p>
          </div>
          {/* Button to start a new session */}
                <button onClick={startNewSession} className="start-new-session-button">
                  HomePage
                </button>
        </div>
      );
}

export default DecisionEngine;

// BalanceSheet.js
import React, { useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import '../styles/BalanceSheet.css';
import sheetData from '../data/balance-sheet-data.json';

function BalanceSheet() {
  const location = useLocation();
  const history = useNavigate();
  const { formData } = location.state || {};
  const [sheets, setSheets] = useState(sheetData);


//    const apiEndpoint = 'https://your-dummy-api-url.com';
//
//    useEffect(() => {
//      // Fetch balance sheet data from the API
//      fetch(apiEndpoint)
//        .then((response) => response.json())
//        .then((data) => {
//          setSheets(data); // Assuming the API returns an array of balance sheets
//        })
//        .catch((error) => {
//          console.error('Error fetching data:', error);
//        });
//    }, [apiEndpoint]);

  const handleSubmit = () => {
    // Redirect to '/decision-engine' with form data and sheets
    history('/decision-engine',
      { state: { formData, sheets },
    });
  };

  return (
  <div className="balance-sheet-container">
      <h1 className="balance-sheet-heading">Balance Sheet</h1>
      <div className="business-details">
        <h2>Business Details</h2>
            <p>Name: {formData.name || 'N/A'}</p>
            <p>Year Established: {formData.establishmentYear || 'N/A'}</p>
      </div>
      <table className="balance-sheet-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Profit/Loss</th>
            <th>Assets Value</th>
          </tr>
        </thead>
        <tbody>
          {sheets.map((sheet, index) => (
            <tr key={index}>
              <td>{sheet.year}</td>
              <td>{sheet.month}</td>
              <td>{sheet.profitOrLoss}</td>
              <td>{sheet.assetsValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="submit-button">
        Submit to Decision Engine
      </button>
    </div>
  );
}

export default BalanceSheet;

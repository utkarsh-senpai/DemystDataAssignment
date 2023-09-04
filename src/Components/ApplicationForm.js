// ApplicationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicationForm.css';
function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    loanAmount: '',
    accountingProvider: 'Xero',
    establishmentYear: '',
  });
  const history = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      // Validate and update the form data
      if (name === 'loanAmount' || name === 'establishmentYear') {
        // Allow only positive integers
        if (/^[1-9]\d*$/.test(value) || value === '') {
          setFormData({ ...formData, [name]: value });
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to BalanceSheet component with data
    history('/balance-sheet', { state: { formData } });
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Loan Amount:
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Accounting Provider:
          <select
            name="accountingProvider"
            value={formData.accountingProvider}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Xero">Xero</option>
            <option value="MYOB">MYOB</option>
          </select>
        </label>
        <br />
        <label>
          Business Establishment Year:
          <input
            type="number"
            name="establishmentYear"
            value={formData.establishmentYear}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;

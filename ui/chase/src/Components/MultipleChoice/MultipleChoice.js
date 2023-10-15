import React, { useState } from 'react';

const MultipleChoiceField = () => {
  const [formData, setFormData] = useState({
    label: '',
    choices: [],
    default: '',
  });

  const handleLabelChange = (e) => {
    setFormData({ ...formData, label: e.target.value });
  };

  const handleChoicesChange = (e) => {
    const choices = e.target.value.split('\n').filter((choice) => choice.trim() !== '');
    setFormData({ ...formData, choices });
  };

  // Implement similar event handlers for default value, adding/removing choices, form clearing, and form submission.
  return (
    <div className="form-container">
      <label className="form-label">
        Label:
        <input
          className="form-input"
          type="text"
          name="label"
          value={formData.label}
          onChange={handleLabelChange}
        />
      </label>

      <div>
        Choices:
        <textarea
          className="form-input"
          name="choices"
          value={formData.choices.join('\n')}
          onChange={handleChoicesChange}
        />
        {/* Add a button and event handler for adding choices here */}
      </div>

      <label className="form-label">
        Default Value:
        <input
          className="form-input"
          type="text"
          name="default"
          value={formData.default}
          // Add an event handler for default value input change here
        />
      </label>




      {/* Add buttons and event handlers for form clear and form submission here */}
    </div>
  );
};

import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({ field1: "", field2: "", field3: "" });
  const [dataArray, setDataArray] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataArray([...dataArray, formData]);
    setFormData({ field1: "", field2: "", field3: "" }); // Inputlarni tozalash
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleInputChange}
          placeholder="1-ma'lumot"
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
          placeholder="2-ma'lumot"
        />
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleInputChange}
          placeholder="3-ma'lumot"
        />
        <button type="submit">Yuborish</button>
      </form>

      <div>
        <h3>Yuborilgan ma'lumotlar:</h3>
        <ul>
          {dataArray.map((item, index) => (
            <li key={index}>
              {index + 1}-ma'lumot: {item.field1}, {item.field2}, {item.field3}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyForm;

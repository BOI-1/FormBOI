/* This code snippet is a React component named `Exp` that allows users to input their experiences.
Here's a breakdown of what the code is doing: */
import React, { useState } from "react";
import { UserPlus, X } from "lucide-react";

function Exp({ experience }) {
  const [rowCount, setRowCount] = useState(1); // State to track number of rows
  const [experiences, setExperiences] = useState([{ years: "", comment: "" }]); // State to store input data

  const addRow = () => {
    setRowCount(rowCount + 1); // Increment rowCount when button is clicked
    setExperiences([...experiences, { years: "", comment: "" }]); // Add a new empty experience object
  };

  const deleteRow = (index) => {
    setRowCount(rowCount - 1); // Decrement rowCount
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1); // Remove the experience at the given index
    setExperiences(updatedExperiences);
    // You may also want to handle any additional logic related to deletion
  };

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value; // Update the value of the specified field
    setExperiences(updatedExperiences);
  };

  const handleSubmit = () => {
    // Call the experience function with all the collected data
    experience(experiences);
  };

  return (
    <div className="py-5 px-20">
      <div className="text-lg underline">अन्य</div>
      <div className="overflow-x-auto pt-4">
        <table className="table ">
          <thead>
            <tr>
              <th className="w-1/5">अनुभव</th>
              <th className="w-2/5">वर्ष</th>
              <th className="w-2/5">टिप्पणी</th>
              <th className="w-1/5">हटाएं</th>
            </tr>
          </thead>
          <tbody>
            {/* Render rows based on rowCount state */}
            {experiences.map((exp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="number"
                    placeholder="वर्षों का अनुभव"
                    className="input input-bordered input-md w-full max-w-xs"
                    value={exp.years}
                    onChange={(e) =>
                      handleInputChange(index, "years", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="टिप्पणी"
                    className="input input-bordered input-md w-full max-w-xs"
                    value={exp.comment}
                    onChange={(e) =>
                      handleInputChange(index, "comment", e.target.value)
                    }
                  />
                </td>
                {index !== 0 ? ( // Add delete button from the second row onwards
                  <td>
                    <button
                      onClick={() => deleteRow(index)}
                      className="flex gap-2 bg-red-500 text-white p-2 rounded-lg"
                    >
                      <X />
                      हटाएं
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Button to add a new row */}
      <div className="flex justify-end">
        <button
          onClick={addRow}
          className="flex gap-2 mt-5 bg-gray-500 text-white p-2 rounded-lg transition duration-200 ease-in-out hover:bg-gray-400"
        >
          अनुभव जोड़ें
          <UserPlus />
        </button>
        <button
          onClick={handleSubmit}
          className="flex gap-2 mt-5 ml-3 bg-blue-500 text-white p-2 rounded-lg transition duration-200 ease-in-out hover:bg-blue-400"
        >
          सुरक्षित
        </button>
      </div>
    </div>
  );
}

export default Exp;

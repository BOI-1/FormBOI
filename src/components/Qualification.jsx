import React, { useState } from "react";

function Qualification({ qualificationDetail }) {
  /* These lines of code are using the `useState` hook in React to create state variables for managing
  the input values related to educational qualifications. Here's a breakdown of what each line is
  doing: */
  const [highSchoolPercent, setHighSchoolPercent] = useState("");
  const [highSchoolYear, setHighSchoolYear] = useState("");
  const [interPercent, setInterPercent] = useState("");
  const [interYear, setInterYear] = useState("");
  const [diplomaPercent, setdiplomaPercent] = useState("");
  const [diplomaYear, setdiplomaYear] = useState("");

 /**
  * The handleSubmit function calls the qualificationDetail function with specific parameters.
  */
  function handleSubmit() {
    qualificationDetail({
      highSchoolPercent,
      highSchoolYear,
      interPercent,
      interYear,
      diplomaPercent,
      diplomaYear,
    });
  }

  return (
    <div className="py-5 px-20">
      <div className="text-lg underline">शैक्षणिक योग्यता</div>
      <div className="overflow-x-auto pt-4">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/5">कोर्स</th>
              <th className="w-2/5">प्रतिशत</th>
              <th className="w-2/5">उत्तीर्ण वर्ष</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                हाई स्कूल(10th)<span className="text-red-500">*</span>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="हाई स्कूल प्रतिशत"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setHighSchoolPercent(e.target.value);
                  }}
                />{" "}
              </td>
              <td>
                <input
                  type="number"
                  placeholder="हाई स्कूल उत्तीर्ण वर्ष"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setHighSchoolYear(e.target.value);
                  }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>इंटरमीडिएट(12th)</td>
              <td>
                <input
                  type="number"
                  placeholder="इंटरमीडिएट प्रतिशत"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setInterPercent(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="इंटरमीडिएट उत्तीर्ण वर्ष"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setInterYear(e.target.value);
                  }}
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>डिप्लोमा/स्नातक</td>
              <td>
                <input
                  type="number"
                  placeholder="डिप्लोमा/स्नातक प्रतिशत"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setdiplomaPercent(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="डिप्लोमा/स्नातक उत्तीर्ण वर्ष"
                  className="input input-bordered input-md w-full max-w-xs"
                  onChange={(e) => {
                    setdiplomaYear(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
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

/* `export default Qualification;` is exporting the `Qualification` component as the default export
from this file. This allows other files to import and use the `Qualification` component by importing
it without curly braces, like `import Qualification from './Qualification';`. */
export default Qualification;

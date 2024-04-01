import { useNavigate } from "react-router-dom";
import axios from "axios";

function Preview({ data }) {
  const navigate = useNavigate();

  function back() {
    navigate("/form");
  }

  function payFees() {
    navigate("/pay")
  }

  // async function submitForm() {
  //   try {
  //     const response = await axios.post(
  //       "https://formbackend-wgpc.onrender.com/submitForm",
  //       {
  //         designation: data.info.designation,
  //         name: data.info.name,
  //         fName: data.info.fName,
  //         dob: data.info.dob,
  //         category: data.info.category,
  //         address: data.info.address,
  //         cAddress: data.info.cAddress,
  //         adharr: data.info.adharr,
  //         pan: data.info.pan,
  //         phone: data.info.phone,
  //         highSchoolPercent: data.quali.highSchoolPercent,
  //         highSchoolYear: data.quali.highSchoolYear,
  //         interPercent: data.quali.interPercent,
  //         interYear: data.quali.interYear,
  //         diplomaPercent: data.quali.diplomaPercent,
  //         diplomaYear: data.quali.diplomaYear,
  //         exp: data.exp,
  //       }
  //     );
  //     console.log(response);
  //     navigate("/done");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div className="mx-20 my-6">
      <div className="overflow-x-auto">
        <div className="flex justify-center text-2xl font-bold underline mb-10">
          पूर्वावलोकन
        </div>

        <div className="font-bold underline my-2">व्यक्तिगत जानकारी</div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className="w-2/5">विवरण</th>
              <th className="w-2/5">दर्ज मान</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>पदनाम</td>
              <td>{data.info.designation}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>नाम</td>
              <td>{data.info.name}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>3</th>
              <td>पिता का नाम</td>
              <td>{data.info.fName}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>4</th>
              <td>जन्म की तारीख</td>
              <td>{data.info.dob}</td>
            </tr>
            <tr>
              <th>5</th>
              <td>वर्ग</td>
              <td>{data.info.category}</td>
            </tr>
            <tr>
              <th>6</th>
              <td>स्थायी पता</td>
              <td>{data.info.address}</td>
            </tr>
            <tr>
              <th>7</th>
              <td> पत्राचार का पता</td>
              <td>{data.info.cAddress}</td>
            </tr>
            <tr>
              <th>8</th>
              <td>आधार संख्या</td>
              <td>{data.info.adharr}</td>
            </tr>
            <tr>
              <th>9</th>
              <td>PAN संख्या</td>
              <td>{data.info.pan}</td>
            </tr>
            <tr>
              <th>10</th>
              <td>फ़ोन नंबर</td>
              <td>{data.info.phone}</td>
            </tr>
          </tbody>
        </table>

        <div className="font-bold underline mb-2 mt-10">
          शैक्षणिक योग्यता जानकारी
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className="w-2/5">विवरण</th>
              <th className="w-2/5">दर्ज मान</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>हाई स्कूल प्रतिशत</td>
              <td>{data.quali.highSchoolPercent}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>हाई स्कूल उत्तीर्ण वर्ष</td>
              <td>{data.quali.highSchoolYear}</td>
            </tr>
            <tr>
              <th>3</th>
              <td>इंटरमीडिएट प्रतिशत</td>
              <td>{data.quali.interPercent}</td>
            </tr>
            <tr>
              <th>4</th>
              <td>इंटरमीडिएट उत्तीर्ण वर्ष</td>
              <td>{data.quali.interYear}</td>
            </tr>
            <tr>
              <th>5</th>
              <td>डिप्लोमा/स्नातक प्रतिशत</td>
              <td>{data.quali.diplomaPercent}</td>
            </tr>
            <tr>
              <th>6</th>
              <td>डिप्लोमा/स्नातक उत्तीर्ण वर्ष</td>
              <td>{data.quali.diplomaYear}</td>
            </tr>
          </tbody>
        </table>

        <div className="font-bold underline mb-2 mt-10">अनुभव जानकारी</div>

        <table className="table">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className="w-2/5">विवरण</th>
              <th className="w-2/5">दर्ज मान</th>
            </tr>
          </thead>
          <tbody>
            {data.exp.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.years}</td>
                <td>{item.comment}</td>
                <td>
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3 mt-10 ">
        <button
          onClick={back}
          className=" my-5 bg-gray-400 hover:bg-gray-300 text-white px-10 py-2 rounded-md"
        >
          पीछे जाए
        </button>
        <button
          onClick={payFees}
          className="my-5 bg-sky-500 hover:bg-sky-400 text-white px-10 py-2 rounded-md"
        >
          शुल्क भुगतान करें
        </button>
      </div>
    </div>
  );
}

export default Preview;

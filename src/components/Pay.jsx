import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pay({ data }) {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  function back() {
    navigate("/form");
  }

  async function submitForm() {
    try {
      const response = await axios.post(
        "https://formbackend-wgpc.onrender.com/submitForm",
        {
          designation: data.info.designation,
          name: data.info.name,
          fName: data.info.fName,
          dob: data.info.dob,
          category: data.info.category,
          address: data.info.address,
          cAddress: data.info.cAddress,
          adharr: data.info.adharr,
          pan: data.info.pan,
          phone: data.info.phone,
          highSchoolPercent: data.quali.highSchoolPercent,
          highSchoolYear: data.quali.highSchoolYear,
          interPercent: data.quali.interPercent,
          interYear: data.quali.interYear,
          diplomaPercent: data.quali.diplomaPercent,
          diplomaYear: data.quali.diplomaYear,
          exp: data.exp,
          transactionId: id,
        }
      );
      console.log(response);
      if (response.data.status === 200) {
        navigate("/done");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border-2 border-gray-600 px-5 py-3 rounded w-1/2">
        <div className="font-bold underline text-2xl flex justify-center pt-3 ">
          शुल्क जमा
        </div>
        <div className="px-3 py-7">
          <div>
            आवेदन शुल्क जमा कराने हेतु नोट-: अभ्यर्थियों अथवा आवेदकों द्वारा
            आवेदन शुल्क को नेफ्ट अथवा आई.एम.पी.एस. अथवा यथोचित अंतरण माध्यम से
            निम्न संस्थागत खाता विवरण :-
          </div>
          <div className=" border-2 border-gray-400 my-5 p-5 w-fit bg-gray-100 rounded">
            {" "}
            <div>
              <span className="font-bold mr-3">खाता धारक का नाम-:</span>केंद्रीय
              कृषि विकास संस्थान
            </div>
            <div>
              <span className="font-bold mr-3">बैंक का नाम एवं शाखा-:</span>बैंक
              ऑफ़ बड़ौदा शाखा अर्जुनगंज,लखनऊ
            </div>
            <div>
              <span className="font-bold mr-3">खाता संख्या-:</span>
              43380200001551
            </div>
            <div>
              <span className="font-bold mr-3">आई.एफ.एस.कोड-:</span> BARB0ARJUNG
              (Fifth Letter Zero)
            </div>
          </div>

          <div>
            में सीधे जमा कराकर रसीद अथवा अंतरण संख्या के आधार पर शामिल कर आवेदन
            जमा कराया जायेगा।
          </div>
        </div>
        <label>ट्रांजैक्शन आईडी :- </label>
        <input
          placeholder="ट्रांजैक्शन आईडी"
          className="border-2 border-gray-300 rounded px-3 py-1 w-2/3"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <br />
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-lg w-1/2"
            onClick={back}
          >
            पीछे जाए
          </button>
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-lg w-1/2"
            onClick={submitForm}
          >
            जमा
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;

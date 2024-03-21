import React, { useState } from "react";

function Info({ infoData }) {
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [dob, setDob] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [cAddress, setCAddress] = useState("");
  const [adharr, setAdharr] = useState("");
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");

  function nameHandle(e) {
    setName(e.target.value);
  }

  function fatherHandle(e) {
    setFName(e.target.value);
  }

  function dobHandle(e) {
    setDob(e.target.value);
  }

  function addressHandle(e) {
    setAddress(e.target.value);
  }

  function cAddressHandle(e) {
    setCAddress(e.target.value);
  }

  function adharrHandle(e) {
    setAdharr(e.target.value);
  }

  function panHandle(e) {
    setPan(e.target.value);
  }

  function phoneHandle(e) {
    setPhone(e.target.value);
  }

  function handleSubmit() {
    infoData({
      designation,
      name,
      fName,
      dob,
      category,
      address,
      cAddress,
      adharr,
      pan,
      phone,
    });
  }

  return (
    <div className="py-5 px-20 ">
      <div className="text-lg underline">व्यक्तिगत जानकारी</div>

      <div className="flex flex-wrap gap-6">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              1. पदनाम<span className="text-red-500">*</span>
            </span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={designation} // Bind the value of the select to the category state
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          >
            <option disabled value="">
              पदनाम
            </option>
            <option value="01.सहायक वित्त एवं राजस्व, ऋण,साख एवं बैंकिंग प्रभाग प्रभारी.">
              01.सहायक वित्त एवं राजस्व, ऋण,साख एवं बैंकिंग प्रभाग प्रभारी.
            </option>
            <option value="02.सहायक कृषि एवं सम्बद्ध योजना/परियोजना आदि प्रभाग प्रभारी.">
              02.सहायक कृषि एवं सम्बद्ध योजना/परियोजना आदि प्रभाग प्रभारी.
            </option>
            <option value="03.सहायक सुरक्षा,औद्योगिक विकास,अभियांत्रिकी,शिक्षा प्रभाग प्रभारी.">
              03.सहायक सुरक्षा,औद्योगिक विकास,अभियांत्रिकी,शिक्षा प्रभाग
              प्रभारी.
            </option>
            <option value="04.सहायक निवेश(घरेलू/विदेशी) प्रभाग प्रभारी.">
              04.सहायक निवेश(घरेलू/विदेशी) प्रभाग प्रभारी.
            </option>
            <option value="05.सहायक खाद्य एवं रसद अथवा प्रसंस्करण अथवा सहकारिता प्रभाग प्रभारी.">
              05.सहायक खाद्य एवं रसद अथवा प्रसंस्करण अथवा सहकारिता प्रभाग
              प्रभारी.
            </option>
            <option value="06.सहायक खाद/बीज/कम्पोस्ट प्रभाग प्रभारी.">
              06.सहायक खाद/बीज/कम्पोस्ट प्रभाग प्रभारी.
            </option>
            <option value="07.सहायक परीक्षा प्रभाग प्रभारी.">
              07.सहायक परीक्षा प्रभाग प्रभारी.
            </option>
            <option value="08.सहायक नियुक्ति/कार्मिक प्रभाग प्रभारी.">
              08.सहायक नियुक्ति/कार्मिक प्रभाग प्रभारी.
            </option>
            <option value="09.सहायक अध्येतावृत्ति प्रभाग प्रभारी.">
              09.सहायक अध्येतावृत्ति प्रभाग प्रभारी.{" "}
            </option>
            <option value="10.सहायक खाद्य एवं रसद अथवा प्रसंस्करण अथवा सहकारिता उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              10.सहायक खाद्य एवं रसद अथवा प्रसंस्करण अथवा सहकारिता उप-प्रभाग
              प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="11.सहायक खाद/फर्टिलाइजर/बीज उप-प्रभाग सहायक अथवा सम्बद्ध प्रभाग प्रभारी.">
              11.सहायक खाद/फर्टिलाइजर/बीज उप-प्रभाग सहायक अथवा सम्बद्ध प्रभाग
              प्रभारी.
            </option>
            <option value="12.सहायक कृषि उप-प्रभाग अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              12.सहायक कृषि उप-प्रभाग अथवा सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="13.सहायक आयुष एवं पंचकर्म चिकित्सा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              13.सहायक आयुष एवं पंचकर्म चिकित्सा उप-प्रभाग प्रभारी अथवा सम्बद्ध
              सहायक प्रभाग प्रभारी.
            </option>
            <option value="14.सहायक प्रशासन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              14.सहायक प्रशासन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="15.सहायक वित्त एवं राजस्व उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              15.सहायक वित्त एवं राजस्व उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="16.सहायक दुग्ध एवं दुग्ध प्रसंस्करण उप-प्रभाग अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              16.सहायक दुग्ध एवं दुग्ध प्रसंस्करण उप-प्रभाग अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="17.सहायक ऋण एवं साख उप-प्रभाग प्रभारी अथवा संबद्ध सहायक प्रभाग प्रभारी.">
              17.सहायक ऋण एवं साख उप-प्रभाग प्रभारी अथवा संबद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="18.सहायक बैंकिंग उप-प्रभाग प्रभारी अथवा संबद्ध सहायक प्रभाग प्रभारी.">
              18.सहायक बैंकिंग उप-प्रभाग प्रभारी अथवा संबद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="19.सहायक घरेलू निवेश उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              19.सहायक घरेलू निवेश उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="20.सहायक विदेशी निवेश उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              20.सहायक विदेशी निवेश उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="21.सहायक वाणिज्य उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              21.सहायक वाणिज्य उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="22.सहायक कृषि, सामान्य, जीवन एवं अन्य बीमा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              22.सहायक कृषि, सामान्य, जीवन एवं अन्य बीमा उप-प्रभाग प्रभारी अथवा
              सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="23.सहायक ऑडिट उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              23.सहायक ऑडिट उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="24.सहायक लेखा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              24.सहायक लेखा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="25.सहायक सूचना एवं प्रसार उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              25.सहायक सूचना एवं प्रसार उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="26.सहायक पर्यावरण एवं सम्बध्द उप-प्रभाग प्रभारी अथवा सबद्ध सहायक प्रभाग प्रभारी.">
              26.सहायक पर्यावरण एवं सम्बध्द उप-प्रभाग प्रभारी अथवा सबद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="27.सहायक अभियांत्रिकी उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              27.सहायक अभियांत्रिकी उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="28.सहायक कृषि उत्पाद खरीद उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              28.सहायक कृषि उत्पाद खरीद उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="29.सहायक एक जनपद एक उत्पाद उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              29.सहायक एक जनपद एक उत्पाद उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="30.सहायक खाद्य प्रसंस्करण उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              30.सहायक खाद्य प्रसंस्करण उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="31.सहायक खाद्य-प्रसस्करण उद्योग उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              31.सहायक खाद्य-प्रसस्करण उद्योग उप-प्रभाग प्रभारी अथवा सम्बद्ध
              सहायक प्रभाग प्रभारी.
            </option>
            <option value="32.सहायक उद्योग उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              32.सहायक उद्योग उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="33.सहायक राजस्व उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              33.सहायक राजस्व उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="34.सहायक परीक्षा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              34.सहायक परीक्षा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="35.सहायक अद्येत्यावृत्ति उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              35.सहायक अद्येत्यावृत्ति उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक
              प्रभाग प्रभारी.
            </option>
            <option value="36.सहायक नियुक्ति उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              36.सहायक नियुक्ति उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="37.सहायक सहकारिता उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              37.सहायक सहकारिता उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="38.सहायक सदस्यता उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              38.सहायक सदस्यता उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="39.सहायक प्रशासन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              39.सहायक प्रशासन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="40.सहायक प्रबन्धन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              40.सहायक प्रबन्धन उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="41.सहायक शिक्षण/प्रशिक्षण/शोध/अनुसन्धान उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              41.सहायक शिक्षण/प्रशिक्षण/शोध/अनुसन्धान उप-प्रभाग प्रभारी अथवा
              सम्बद्ध सहायक प्रभाग प्रभारी.
            </option>
            <option value="42.सहायक सुरक्षा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग प्रभारी.">
              42.सहायक सुरक्षा उप-प्रभाग प्रभारी अथवा सम्बद्ध सहायक प्रभाग
              प्रभारी.
            </option>
            <option value="43.सहायक अध्येतावृत्ति प्रभारी.">
              43.सहायक अध्येतावृत्ति प्रभारी.
            </option>
            <option value="44.सहायक नियुक्ति/कार्मिक प्रभारी.">
              44.सहायक नियुक्ति/कार्मिक प्रभारी.{" "}
            </option>
            <option value="45.सहायक परीक्षा प्रभारी.">
              45.सहायक परीक्षा प्रभारी.
            </option>
            <option value="46.अतिरिक्त सहायक,">46.अतिरिक्त सहायक,</option>
            <option value="47.केंद्र संचालक,">47.केंद्र संचालक,</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              2. नाम<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="नाम"
            className="input input-bordered w-full max-w-xs"
            onChange={nameHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              3. पिता का नाम<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="पिता का नाम"
            className="input input-bordered w-full max-w-xs"
            onChange={fatherHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              4. जन्म की तारीख<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="date"
            placeholder="जन्म की तारीख"
            className="input input-bordered w-full max-w-xs"
            onChange={dobHandle}
            min="1980-01-01"
            max={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              5. वर्ग<span className="text-red-500">*</span>
            </span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={category} // Bind the value of the select to the category state
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option disabled value="">
              वर्ग
            </option>
            <option value="सामान्य">सामान्य</option>
            <option value="अन्य पिछड़ा वर्ग">अन्य पिछड़ा वर्ग</option>
            <option value="एससी/एसटी">एससी/एसटी</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              6. स्थायी पता<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="स्थायी पता"
            className="input input-bordered w-full max-w-xs"
            onChange={addressHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              7. पत्राचार का पता<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="पत्राचार का पता"
            className="input input-bordered w-full max-w-xs"
            onChange={cAddressHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              8. आधार संख्या<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="number"
            placeholder="जैसे. 0000-0000-0000"
            className="appearance-none input input-bordered w-full max-w-xs "
            onChange={adharrHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">9. PAN संख्या ( यदि लागू हो)</span>
          </div>
          <input
            type="text"
            placeholder="जैसे. AAAAA-0000-A"
            className="input input-bordered w-full max-w-xs"
            onChange={panHandle}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              10. फ़ोन नंबर<span className="text-red-500">*</span>
            </span>
          </div>
          <input
            type="number"
            placeholder="जैसे. +91 00000-00000"
            className="input input-bordered w-full max-w-xs appearance-none"
            onChange={phoneHandle}
          />
        </label>
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

export default Info;

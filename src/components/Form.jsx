import React, { useState } from "react";
import Info from "./Info";
import Qualification from "./Qualification";
import Exp from "./Exp";
import { useNavigate } from "react-router-dom";

function From({ data }) {
  const [info, setInfo] = useState(null);
  const [quali, setQuali] = useState(null);
  const [exp, setExp] = useState(null);

  const navigate = useNavigate();

  function submitForm() {
    data({ info, quali, exp });
    navigate("/preview");
  }

  function back() {
    navigate("/");
  }

  function infoData(info) {
    setInfo(info);
  }

  function qualificationDetail(qualification) {
    setQuali(qualification);
  }

  function experience(exp) {
    setExp(exp);
  }

  return (
    <>
      {" "}
      <div className="text-xl underline font-bold flex justify-center pt-4">
        APPLICATION FORM DETAILS/ आवेदन पत्र का विवरण
      </div>
      <div className="py-5 px-16 text-pretty">
        केंद्रीय कृषि विकास संस्थान माननीय प्रधानमन्त्री जी भारत सरकार के
        नेतृत्व में विकसित राष्ट्र स्थापना लक्ष्यों के अनुक्रम में केंद्रीय कृषि
        विकास संस्थान के बजट मांग प्रस्ताव पर कृषि एवं किसान कल्याण मंत्रालय के
        पशुधन, दुग्ध एवं मत्स्य विभाग के आदेश फ़ाइल संख्या 17-1/2018-डी0पी0
        दिनांक 19 सितम्बर 2018 द्वारा संस्थागत प्रस्तुत किए गए बजट मांग प्रस्ताव
        को श्रीमान संयुक्त सचिव कृषि एवं किसान कल्याण मंत्रालय द्वारा प्राप्त
        अनुमोदन/स्वीकृति के क्रम में संरक्षित अथवा अद्यतित बजट अथवा अन्य केन्द्र
        अथवा राज्य सरकार अथवा सरकारों के अंशीय बजट आदि के अतिरिक्त संस्थागत
        योजनाओं आदि में ब्याज ब्यवस्थान्तर्गत लगभग 14914(चौदह हज़ार नौ सौ चौदह
        करोड़ भारतीय रुपए) का वित्तीय वर्ष 2024-25 से छः वित्तीय वर्ष हेतु घरेलू
        अथवा विदेशी सुरक्षित निवेश हेतु उत्तर प्रदेश राज्य सरकार एवं संस्थागत
        किए गए निवेश अनुबन्ध संख्या 24/HRTI/0000027658 के अनुक्रम में केंद्रीय
        कृषि विकास संस्थान के शासकीय रोजगार अथवा अशासकीय स्वरोजगार कार्यक्रम के
        तहत भारत राष्ट्र के प्रत्येक राज्यों के सापेक्ष उत्तर प्रदेश में शासकीय
        रोजगार अथवा अशासकीय स्वरोजगार कार्यक्रम के तहत भारत राष्ट्र के प्रत्येक
        राज्यों के शिक्षित युवाओं हेतु नियुक्ति अधिसूचना
        पत्रांक:0011/के.कृ.वि.सं./एन.ई.पी.(नियु.-01)/2023-24
        दिनांक: 13 मार्च 2024 एवं उत्तर प्रदेश राज्य के ग्राम अथवा न्याय पंचायत
        स्तर पर स्थापित होने वाले लगभग @8167(आठ हज़ार एक सौ सडसठ) कृषक सेवा
        केंद्र/मिनी कलेक्शन सेंटर/दुग्ध कलेक्शन सेंटर के सापेक्ष हेतु दुग्ध
        संग्रह केंद्रों हेतु केंद्र संचालकों के मनोनयन हेतु केंद्रीय कृषि विकास
        संस्थान के मनोनयन अथवा नामांकन हेतु अधिसूचना आदेश
        संख्या:0012/के.कृ.वि.सं./(मनो.-01)/2023-24 दिनांक: 13 मार्च 2024 के क्रम
        में निम्न विवरण के तहत आवेदन |
      </div>
      <Info infoData={infoData} />
      <Qualification qualificationDetail={qualificationDetail} />
      <Exp experience={experience} />
      <div className="py-5 px-20">
        अनिवार्य जानकारी&nbsp;(&nbsp;
        <span className="text-red-500">*</span>&nbsp;)
      </div>
      <div className="flex gap-3 mx-20 ">
        <button
          onClick={back}
          className=" my-5 bg-gray-400 hover:bg-gray-300 text-white px-10 py-2 rounded-md"
        >
          पीछे जाए
        </button>
        <button
          onClick={submitForm}
          className="my-5 bg-sky-500 hover:bg-sky-400 text-white px-10 py-2 rounded-md"
        >
          पूर्वावलोकन
        </button>
      </div>
    </>
  );
}

export default From;

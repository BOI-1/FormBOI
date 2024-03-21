import React from "react";
import { CircleCheckBig } from "lucide-react";

function done() {
  return (
    <div className="h-screen flex justify-center items-center gap-3 text-green-600">
      <div className="flex flex-col items-center w-fit h-fit bg-gray-200 p-10 rounded-lg">
        <CircleCheckBig size={48} />
        <div>आपका फॉर्म सफलतापूर्वक जमा हो गया है।</div>
        <a className="text-blue-500 hover:text-blue-400" href="/">
          मुख्य पृष्ठ लौटें
        </a>
      </div>
    </div>
  );
}

export default done;

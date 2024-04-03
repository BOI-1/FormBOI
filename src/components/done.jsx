/**
 * The function `done` renders a success message with a checkmark icon and a link to return to the main
 * page in a React component.
 * @returns The `done` function is returning a JSX element that displays a success message with a
 * checkmark icon, a confirmation message in Hindi, and a link to return to the main page.
 */
/* The `import React from "react";` statement is importing the React library, which is necessary for
creating React components and using JSX syntax. */
import React from "react";
import { CircleCheckBig } from "lucide-react";

function done() {
  /* The `return` statement in the `done` function is returning a JSX element that represents a success
  message with a checkmark icon, a confirmation message in Hindi, and a link to return to the main
  page. */
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

/* The `export default done;` statement is exporting the `done` function as the default export of the
module. This means that when another module imports this module, they will receive the `done`
function as the default export, allowing them to use it in their code. */
export default done;

// host-app/src/App.js
import React, { useEffect } from "react";
// const RemoteApp = lazy(() => import("lms2/Xapi"));
const Proteus = React.lazy(() => import("proteus/App"));
const myFunction = await import("lms2/Xapi");
// import("lms2/Xapi").then((module) => {
//   const { SetDataAnalytics } = module;
//   console.log(SetDataAnalytics);
//   // Use the imported function here
// });

function App() {
  // useEffect(() => {
  //   callSetDataAnalytics();
  // }, []);

  const callSetDataAnalytics = async () => {
    try {
      const actor = {
        objectType: "Agent",
        account: {
          homePage: "https://www.benchmarkuniverse.com",
          name: 1
        }
      };
      const verb = {
        id: " http://activitystrea.ms/schema/1.0/interact",
        display: {
          "en-US": "interacted"
        }
      };
      const object = {
        id: "http://activitystrea.ms/schema/1.0/page",
        definition: {
          name: {
            "en-US": "page"
          }
        }
      };
      console.log(myFunction);
      // console.log("--");
      // console.log(Proteus);
      // RemoteApp(actor, verb, object);
      // await console.log(RemoteApp.setDataAnalytics(actor, verb, object));
      console.log("Data analytics set successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return <h1 onClick={callSetDataAnalytics}>Hello</h1>;
}
export default App;

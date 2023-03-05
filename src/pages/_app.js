import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";



import { useState } from "react";
import AppContext from "../AppContext";
import languagesObject from "../languagesObject";

function App({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = languagesObject;
  return (
    <AppContext.Provider
      value={{
        state: {
          languages: languageObject[languageSelected],
          languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default App;



/*
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
*/
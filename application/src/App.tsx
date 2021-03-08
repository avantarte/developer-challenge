import { GlobalStyle } from "./theme/GlobalStyles";
import Header from "./components/Header";
import React from "react";
import Theme from "./theme/Theme";
import WorksContainer from "./components/WorksContainer/WorksContainer";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Theme>
        <Header />
        <main>
          <WorksContainer />
        </main>
      </Theme>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Loga from "../Components/Logs";

function Index({ logs }) {
  return (
    <div>
      <Loga logs={logs}></Loga>
    </div>
  );
}

export default Index;

import React from "react";
import { AppWrap } from "../wrapper";

function Home() {
  return (
    <div>
      <h1>This is home page.</h1>
    </div>
  );
}

export default AppWrap(Home, "customer", "customer");

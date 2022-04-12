import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <main
        id={idName}
        className={`${classNames} flex flex-col min-h-screen pt-28 px-4 md:px-20`}
      >
        <div className="">
          <Component />
        </div>

        <footer className="pt-20 pb-10 mt-auto text-center w-full sticky">
          <p>@2022 Mini Project | Karunia Leo Gultom</p>
          <p>All rights reserved.</p>
        </footer>
      </main>
    );
  };

export default AppWrap;

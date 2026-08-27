"use strict";

/* New Kit Gaw — Stage 38: Demo v1 mode flags.
   Public demo is the default. Add ?debug=1 to reveal backstage viewer controls.
   Stage 35 remains independently available with ?walktest=1. */
(function () {
  const params = new URLSearchParams(window.location.search);
  const root = document.documentElement;

  root.dataset.demoVersion = "1";

  if (params.get("debug") === "1") {
    root.dataset.demoDebug = "true";
  }

  if (params.get("walktest") === "1") {
    root.dataset.walktest = "true";
  }
})();

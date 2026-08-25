"use strict";

/* Stage 32 decorator.
   Adds community identity hooks without rewriting the working navigation/rendering logic. */
(function () {
  function decorateCommunityWorld() {
    if (typeof getCommunity !== "function") return;

    document.querySelectorAll("[data-community-id]").forEach(node => {
      const community = getCommunity(node.dataset.communityId);
      if (!community) return;
      node.dataset.communityCategory = community.category;
    });

    if (typeof appState === "undefined" || appState.currentScreen !== "communityDetail") return;
    const community = getCommunity(appState.currentParams.communityId);
    const screen = document.querySelector("#app > .screen");
    if (!community || !screen) return;

    screen.classList.add("community-world");
    screen.dataset.communityId = community.id;
    screen.dataset.communityCategory = community.category;
  }

  const baseRenderApp = renderApp;
  renderApp = function (...args) {
    const result = baseRenderApp(...args);
    decorateCommunityWorld();
    return result;
  };

  decorateCommunityWorld();
})();

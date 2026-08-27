"use strict";

/* New Kit Gaw Stage 35 real-device circulation test.
   Activate only with ?walktest=1. Production behavior remains unchanged otherwise. */
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("walktest") !== "1") return;

  const storageKey = "new-kit-gaw-stage35-walktest";
  const steps = [
    "HOMEから『町中華探検隊』へ入る",
    "町中華のトピックを1つ開く",
    "自分以外の人の発言を1つ開く",
    "その発言者のプロフィールを見る",
    "その人が参加する町中華以外のコミュニティへ入る"
  ];

  function freshState() {
    return {
      startedAt: Date.now(),
      completedAt: null,
      step: 0,
      taps: 0,
      backs: 0,
      discoveredProfileId: null,
      destinationCommunityId: null
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey) || "null");
      return saved && typeof saved === "object" ? saved : freshState();
    } catch (_) {
      return freshState();
    }
  }

  let state = loadState();
  let panel = null;

  function saveState() {
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  }

  function elapsedSeconds() {
    const end = state.completedAt || Date.now();
    return Math.max(0, Math.round((end - state.startedAt) / 1000));
  }

  function currentTask() {
    if (state.step >= steps.length) return "一周完了。人から別の場所へ掘り進めた。";
    return steps[state.step];
  }

  function resultText() {
    const person = state.discoveredProfileId && getProfile(state.discoveredProfileId);
    const destination = state.destinationCommunityId && getCommunity(state.destinationCommunityId);
    return [
      "New Kit Gaw Stage35 walk test",
      `result: ${state.step >= steps.length ? "PASS" : "IN PROGRESS"}`,
      `viewer: ${getProfile(appState.currentViewerId)?.name || appState.currentViewerId}`,
      `discovered: ${person?.name || state.discoveredProfileId || "-"}`,
      `destination: ${destination?.name || state.destinationCommunityId || "-"}`,
      `taps: ${state.taps}`,
      `backs: ${state.backs}`,
      `elapsed: ${elapsedSeconds()} sec`
    ].join("\n");
  }

  function ensurePanel() {
    if (panel && panel.isConnected) return panel;
    panel = document.createElement("aside");
    panel.className = "walktest-panel";
    panel.setAttribute("aria-live", "polite");
    panel.innerHTML = `
      <div class="walktest-panel__top">
        <span class="walktest-panel__badge">STAGE 35</span>
        <span class="walktest-panel__progress"><span class="walktest-panel__bar"></span></span>
      </div>
      <p class="walktest-panel__task"></p>
      <p class="walktest-panel__meta"></p>
      <div class="walktest-panel__actions">
        <button type="button" data-walktest-action="copy">結果をコピー</button>
        <button type="button" data-walktest-action="reset">最初から</button>
      </div>`;
    document.body.appendChild(panel);
    return panel;
  }

  function updatePanel() {
    const node = ensurePanel();
    const complete = state.step >= steps.length;
    node.classList.toggle("is-complete", complete);
    node.querySelector(".walktest-panel__bar").style.width = `${Math.min(100, (state.step / steps.length) * 100)}%`;
    node.querySelector(".walktest-panel__task").textContent = currentTask();
    const person = state.discoveredProfileId && getProfile(state.discoveredProfileId);
    node.querySelector(".walktest-panel__meta").textContent = complete
      ? `${person?.name || "人物"}から別コミュニティまで到達 / ${state.taps} taps / 戻る ${state.backs}回 / ${elapsedSeconds()}秒`
      : `進行 ${state.step}/${steps.length} / ${state.taps} taps / 戻る ${state.backs}回`;
  }

  function evaluateRoute() {
    const screen = appState.currentScreen;

    if (state.step === 0 && screen === "communityDetail" && appState.currentParams.communityId === "chinese") {
      state.step = 1;
    }

    if (state.step === 1 && screen === "topicDetail") {
      const topic = getTopic(appState.currentParams.topicId);
      if (topic?.communityId === "chinese") state.step = 2;
    }

    if (state.step === 2 && screen === "statementDetail") {
      const statement = getStatement(appState.currentParams.statementId);
      const topic = statement && getTopic(statement.topicId);
      if (statement && topic?.communityId === "chinese" && statement.authorId !== appState.currentViewerId) {
        state.discoveredProfileId = statement.authorId;
        state.step = 3;
      }
    }

    if (state.step === 3 && screen === "profileDetail" && appState.currentParams.profileId === state.discoveredProfileId) {
      state.step = 4;
    }

    if (state.step === 4 && screen === "communityDetail") {
      const communityId = appState.currentParams.communityId;
      const person = getProfile(state.discoveredProfileId);
      if (communityId !== "chinese" && person?.communityIds.includes(communityId)) {
        state.destinationCommunityId = communityId;
        state.step = 5;
        state.completedAt = Date.now();
      }
    }

    saveState();
    updatePanel();
  }

  document.addEventListener("click", event => {
    const testAction = event.target.closest("[data-walktest-action]");
    if (testAction) {
      const action = testAction.dataset.walktestAction;
      if (action === "reset") {
        state = freshState();
        saveState();
        updatePanel();
      }
      if (action === "copy") {
        navigator.clipboard?.writeText(resultText());
        testAction.textContent = "コピーした";
        window.setTimeout(() => { testAction.textContent = "結果をコピー"; }, 1200);
      }
      return;
    }

    const actionNode = event.target.closest("[data-action]");
    if (!actionNode) return;
    state.taps += 1;
    if (actionNode.dataset.action === "back") state.backs += 1;
    saveState();
  }, true);

  const baseRenderApp = renderApp;
  renderApp = function (...args) {
    const result = baseRenderApp(...args);
    evaluateRoute();
    return result;
  };

  evaluateRoute();
})();

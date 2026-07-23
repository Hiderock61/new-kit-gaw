"use strict";

const profilesById = {
  "profile-sora": {
    id: "profile-sora",
    name: "ソラ",
    communityIds: [
      "community-movie",
      "community-night-food",
      "community-rainy-day"
    ]
  },
  "profile-nagi": {
    id: "profile-nagi",
    name: "ナギ",
    communityIds: [
      "community-movie",
      "community-rainy-day",
      "community-solo-place",
      "community-morning-walk"
    ]
  },
  "profile-ren": {
    id: "profile-ren",
    name: "レン",
    communityIds: [
      "community-movie",
      "community-night-food",
      "community-good-music",
      "community-live-moment"
    ]
  },
  "profile-mio": {
    id: "profile-mio",
    name: "ミオ",
    communityIds: [
      "community-movie",
      "community-solo-place",
      "community-childhood-play",
      "community-recovery-holiday",
      "community-travel-food"
    ]
  }
};

const communitiesById = {
  "community-movie": {
    id: "community-movie",
    title: "最近見てよかった映画",
    description:
      "最近見た映画の中から、誰かに話したくなった一本を持ち寄るコミュニティ。"
  },
  "community-solo-place": {
    id: "community-solo-place",
    title: "一人で行きやすい場所",
    description:
      "一人で行っても落ち着けた場所や、入りやすかった理由を話すコミュニティ。"
  },
  "community-night-food": {
    id: "community-night-food",
    title: "簡単に作れる夜食",
    description:
      "疲れている夜でも作りやすかった食べ物や、手間を減らす工夫を話すコミュニティ。"
  },
  "community-rainy-day": {
    id: "community-rainy-day",
    title: "雨の日の過ごし方",
    description: ""
  },
  "community-morning-walk": {
    id: "community-morning-walk",
    title: "朝の散歩",
    description: ""
  },
  "community-good-music": {
    id: "community-good-music",
    title: "最近聴いてよかった音楽",
    description: ""
  },
  "community-live-moment": {
    id: "community-live-moment",
    title: "ライブで体が動いた瞬間",
    description: ""
  },
  "community-childhood-play": {
    id: "community-childhood-play",
    title: "子どもの頃に好きだった遊び",
    description: ""
  },
  "community-recovery-holiday": {
    id: "community-recovery-holiday",
    title: "休日に何をして回復するか",
    description: ""
  },
  "community-travel-food": {
    id: "community-travel-food",
    title: "旅行先で覚えている食事",
    description: ""
  }
};

const topicsById = {
  "topic-rewatch-movie": {
    id: "topic-rewatch-movie",
    communityId: "community-movie",
    title: "最近、もう一度見たいと思った映画は？",
    description:
      "見終わった直後より、少し時間が経ってから思い出した映画を教えてください。"
  },
  "topic-solo-place": {
    id: "topic-solo-place",
    communityId: "community-solo-place",
    title: "一人でも入りやすかった場所は？",
    description:
      "一人で行っても落ち着けた場所や、入りやすかった理由を教えてください。"
  },
  "topic-night-food": {
    id: "topic-night-food",
    communityId: "community-night-food",
    title: "疲れていても作れる夜食は？",
    description:
      "手間が少なく、夜でも作りやすかったものを教えてください。"
  }
};

const commentsById = {
  "comment-nagi-movie-001": {
    id: "comment-nagi-movie-001",
    topicId: "topic-rewatch-movie",
    authorId: "profile-nagi",
    body:
      "『パターソン』。大きな事件は起きないけれど、毎日をもう少し丁寧に見たくなった。"
  },
  "comment-ren-movie-001": {
    id: "comment-ren-movie-001",
    topicId: "topic-rewatch-movie",
    authorId: "profile-ren",
    body:
      "『マッドマックス 怒りのデス・ロード』。話は単純なのに、音と動きだけで最後まで連れていかれた。"
  },
  "comment-mio-movie-001": {
    id: "comment-mio-movie-001",
    topicId: "topic-rewatch-movie",
    authorId: "profile-mio",
    body:
      "『リトル・ミス・サンシャイン』。うまくいかない家族のまま、一緒に進むところがよかった。"
  },
  "comment-nagi-solo-001": {
    id: "comment-nagi-solo-001",
    topicId: "topic-solo-place",
    authorId: "profile-nagi",
    body:
      "平日の昼に行く小さな映画館。上映が始まれば、一人でいることを意識しなくて済む。"
  },
  "comment-mio-solo-001": {
    id: "comment-mio-solo-001",
    topicId: "topic-solo-place",
    authorId: "profile-mio",
    body:
      "駅から少し離れた喫茶店。注文した後に放っておいてくれる場所が入りやすい。"
  },
  "comment-sora-night-001": {
    id: "comment-sora-night-001",
    topicId: "topic-night-food",
    authorId: "profile-sora",
    body:
      "冷凍うどんに卵とめんつゆ。鍋を使わずに済むから、疲れている夜でも作れる。"
  },
  "comment-ren-night-001": {
    id: "comment-ren-night-001",
    topicId: "topic-night-food",
    authorId: "profile-ren",
    body:
      "食パンにチーズをのせて焼く。考える工程が少ないので、深夜でも失敗しにくい。"
  }
};

const footprints = [];

const appState = {
  currentUserId: "profile-sora",
  currentScreen: "HOME",
  currentEntityId: null,
  navigationHistory: [],
  demoMode: true,
  debugMode: true,
  isNavigating: false
};

const VALID_SCREENS = new Set([
  "HOME",
  "COMMUNITY_DETAIL",
  "TOPIC_DETAIL",
  "PROFILE_DETAIL",
  "FOOTPRINT_LIST"
]);

const BACK_LABELS = {
  HOME: "戻る",
  COMMUNITY_DETAIL: "コミュニティへ戻る",
  TOPIC_DETAIL: "元の話題へ戻る",
  PROFILE_DETAIL: "プロフィールへ戻る",
  FOOTPRINT_LIST: "足あとへ戻る"
};

const appRoot = document.getElementById("app");
const toastRegion = document.getElementById("toast-region");
let toastTimer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTopicsForCommunity(communityId) {
  return Object.values(topicsById).filter(
    (topic) => topic.communityId === communityId
  );
}

function getCommentsForTopic(topicId) {
  return Object.values(commentsById).filter(
    (comment) => comment.topicId === topicId
  );
}

function getCommonCommunityIds(currentProfile, targetProfile) {
  return targetProfile.communityIds.filter((communityId) =>
    currentProfile.communityIds.includes(communityId)
  );
}

function getExplorableCommunityIds(currentProfile, targetProfile) {
  return targetProfile.communityIds.filter(
    (communityId) =>
      !currentProfile.communityIds.includes(communityId) &&
      getTopicsForCommunity(communityId).length > 0
  );
}

function getInitial(name) {
  return name.slice(0, 1);
}

function avatarMarkup(profile) {
  return `<span class="avatar" aria-hidden="true">${escapeHtml(
    getInitial(profile.name)
  )}</span>`;
}

function currentLocation() {
  return {
    screen: appState.currentScreen,
    entityId: appState.currentEntityId
  };
}

function entityExistsForScreen(screen, entityId) {
  if (screen === "HOME" || screen === "FOOTPRINT_LIST") {
    return entityId === null;
  }
  if (screen === "COMMUNITY_DETAIL") {
    return Boolean(communitiesById[entityId]);
  }
  if (screen === "TOPIC_DETAIL") {
    return Boolean(topicsById[entityId]);
  }
  if (screen === "PROFILE_DETAIL") {
    return Boolean(profilesById[entityId]);
  }
  return false;
}

function withNavigationGuard(action) {
  if (appState.isNavigating) {
    return;
  }
  appState.isNavigating = true;
  try {
    action();
  } finally {
    window.setTimeout(() => {
      appState.isNavigating = false;
    }, 250);
  }
}

function navigateTo(screen, entityId = null) {
  withNavigationGuard(() => {
    if (!VALID_SCREENS.has(screen) || !entityExistsForScreen(screen, entityId)) {
      renderNotFound();
      return;
    }
    appState.navigationHistory.push(currentLocation());
    appState.currentScreen = screen;
    appState.currentEntityId = entityId;
    renderApp();
  });
}

function addFootprint(viewerId, viewedProfileId) {
  if (
    !profilesById[viewerId] ||
    !profilesById[viewedProfileId] ||
    viewerId === viewedProfileId
  ) {
    return false;
  }

  const alreadyExists = footprints.some(
    (footprint) =>
      footprint.viewerId === viewerId &&
      footprint.viewedProfileId === viewedProfileId
  );
  if (alreadyExists) {
    return false;
  }

  footprints.push({
    id: `footprint-${viewerId.slice("profile-".length)}-to-${viewedProfileId.slice(
      "profile-".length
    )}`,
    viewerId,
    viewedProfileId
  });
  validateFootprints();
  return true;
}

function openProfile(profileId) {
  withNavigationGuard(() => {
    if (!profilesById[profileId]) {
      renderNotFound();
      return;
    }

    const viewerId = appState.currentUserId;
    const created = addFootprint(viewerId, profileId);

    appState.navigationHistory.push(currentLocation());
    appState.currentScreen = "PROFILE_DETAIL";
    appState.currentEntityId = profileId;
    renderApp();

    if (created && appState.debugMode) {
      showToast(
        `${profilesById[profileId].name}の足あとに${profilesById[viewerId].name}が追加されました`
      );
    }
  });
}

function goBack() {
  withNavigationGuard(() => {
    const previous = appState.navigationHistory.pop();
    if (!previous) {
      return;
    }
    if (
      !VALID_SCREENS.has(previous.screen) ||
      !entityExistsForScreen(previous.screen, previous.entityId)
    ) {
      renderNotFound();
      return;
    }
    appState.currentScreen = previous.screen;
    appState.currentEntityId = previous.entityId;
    renderApp();
  });
}

function switchDemoView() {
  withNavigationGuard(() => {
    if (appState.currentUserId === "profile-sora") {
      appState.currentUserId = "profile-nagi";
      appState.currentScreen = "FOOTPRINT_LIST";
    } else {
      appState.currentUserId = "profile-sora";
      appState.currentScreen = "HOME";
    }
    appState.currentEntityId = null;
    appState.navigationHistory = [];
    renderApp();
  });
}

function showToast(message) {
  if (!appState.debugMode) {
    return;
  }
  window.clearTimeout(toastTimer);
  toastRegion.innerHTML = `<div class="toast" role="status">${escapeHtml(
    message
  )}</div>`;
  toastTimer = window.setTimeout(() => {
    toastRegion.replaceChildren();
  }, 2600);
}

function demoMarkup() {
  if (!appState.demoMode) {
    return "";
  }
  const currentUser = profilesById[appState.currentUserId];
  const isSora = appState.currentUserId === "profile-sora";
  return `
    <aside class="demo-panel" aria-label="検証用デモ">
      <p class="demo-label">検証用デモ</p>
      <div class="demo-row">
        <p class="demo-current">現在の視点：${escapeHtml(currentUser.name)}</p>
        <button class="demo-button" type="button" data-action="switch-demo">
          ${isSora ? "ナギ側で確認する" : "ソラ側へ戻す"}
        </button>
      </div>
    </aside>
  `;
}

function backButtonMarkup() {
  if (appState.navigationHistory.length === 0) {
    return "";
  }
  const previous = appState.navigationHistory.at(-1);
  return `
    <button class="back-button" type="button" data-action="back">
      ${escapeHtml(BACK_LABELS[previous.screen] || "戻る")}
    </button>
  `;
}

function actionCardMarkup(title, description, screen, entityId) {
  return `
    <button class="action-card" type="button"
      data-action="navigate" data-screen="${escapeHtml(screen)}"
      data-entity-id="${escapeHtml(entityId)}">
      <span class="action-card-title">${escapeHtml(title)}</span>
      ${
        description
          ? `<span class="action-card-text">${escapeHtml(description)}</span>`
          : ""
      }
    </button>
  `;
}

function personRowMarkup(profile, action, commonCount = null) {
  return `
    <button class="person-row" type="button" data-action="${escapeHtml(
      action
    )}" data-profile-id="${escapeHtml(profile.id)}">
      ${avatarMarkup(profile)}
      <span class="person-name">
        ${escapeHtml(profile.name)}
        ${
          commonCount === null
            ? ""
            : `<span class="person-meta">共通コミュニティ ${commonCount}件</span>`
        }
      </span>
    </button>
  `;
}

function renderHome() {
  const movie = communitiesById["community-movie"];
  return `
    <h1 class="brand">Kit Gaw</h1>
    <p class="lead">コミュニティを探す</p>
    ${actionCardMarkup(
      movie.title,
      "最近見た一本について話すコミュニティ",
      "COMMUNITY_DETAIL",
      movie.id
    )}
    <button class="secondary-action" type="button"
      data-action="navigate" data-screen="FOOTPRINT_LIST" data-entity-id="">
      <span><strong>足あと</strong><br><small>プロフィールを訪れた人を見る</small></span>
      <span aria-hidden="true">›</span>
    </button>
  `;
}

function renderCommunityDetail(communityId) {
  const community = communitiesById[communityId];
  if (!community) {
    return null;
  }
  const topics = getTopicsForCommunity(community.id);
  return `
    ${backButtonMarkup()}
    <p class="eyebrow">コミュニティ</p>
    <h1>${escapeHtml(community.title)}</h1>
    ${
      community.description
        ? `<p class="description">${escapeHtml(community.description)}</p>`
        : ""
    }
    <section class="section" aria-labelledby="topics-heading">
      <h2 id="topics-heading" class="section-heading">話題</h2>
      <div class="card-list">
        ${
          topics.length
            ? topics
                .map((topic) =>
                  actionCardMarkup(
                    topic.title,
                    topic.description,
                    "TOPIC_DETAIL",
                    topic.id
                  )
                )
                .join("")
            : '<p class="empty-state">話題はまだありません</p>'
        }
      </div>
    </section>
  `;
}

function renderTopicDetail(topicId) {
  const topic = topicsById[topicId];
  if (!topic) {
    return null;
  }
  const community = communitiesById[topic.communityId];
  if (!community) {
    return null;
  }
  const comments = getCommentsForTopic(topic.id);
  return `
    ${backButtonMarkup()}
    <p class="eyebrow">${escapeHtml(community.title)}</p>
    <h1>${escapeHtml(topic.title)}</h1>
    <p class="description">${escapeHtml(topic.description)}</p>
    <section class="section" aria-labelledby="comments-heading">
      <h2 id="comments-heading" class="section-heading">発言</h2>
      <div class="comment-list">
        ${comments
          .map((comment) => {
            const author = profilesById[comment.authorId];
            if (!author) {
              return "";
            }
            return `
              <article class="comment">
                ${personRowMarkup(author, "open-profile")}
                <p class="comment-body">${escapeHtml(comment.body)}</p>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderProfileDetail(profileId) {
  const targetProfile = profilesById[profileId];
  const currentProfile = profilesById[appState.currentUserId];
  if (!targetProfile || !currentProfile) {
    return null;
  }

  const commonIds = getCommonCommunityIds(currentProfile, targetProfile);
  const explorableIds = getExplorableCommunityIds(
    currentProfile,
    targetProfile
  );

  return `
    ${backButtonMarkup()}
    <div class="profile-header">
      ${avatarMarkup(targetProfile)}
      <div>
        <p class="eyebrow">プロフィール</p>
        <h1>${escapeHtml(targetProfile.name)}</h1>
      </div>
    </div>
    <section class="section" aria-labelledby="common-heading">
      <h2 id="common-heading" class="section-heading">
        あなたと共通するコミュニティ
        <span class="count">${commonIds.length}件</span>
      </h2>
      <div class="info-grid">
        ${commonIds
          .map(
            (communityId) =>
              `<div class="info-card">${escapeHtml(
                communitiesById[communityId].title
              )}</div>`
          )
          .join("")}
      </div>
    </section>
    <section class="section" aria-labelledby="other-heading">
      <h2 id="other-heading" class="section-heading">
        この人がいる別のコミュニティ
      </h2>
      <div class="card-list">
        ${
          explorableIds.length
            ? explorableIds
                .map((communityId) => {
                  const community = communitiesById[communityId];
                  return actionCardMarkup(
                    community.title,
                    community.description,
                    "COMMUNITY_DETAIL",
                    community.id
                  );
                })
                .join("")
            : '<p class="empty-state">今進める別のコミュニティはありません</p>'
        }
      </div>
    </section>
  `;
}

function renderFootprintList() {
  const currentProfile = profilesById[appState.currentUserId];
  if (!currentProfile) {
    return null;
  }
  const visibleFootprints = footprints.filter(
    (footprint) => footprint.viewedProfileId === appState.currentUserId
  );
  return `
    ${backButtonMarkup()}
    <p class="eyebrow">足あと</p>
    <h1>話題や発言をたどって、<br>プロフィールを訪れた人</h1>
    <div class="section card-list">
      ${
        visibleFootprints.length
          ? visibleFootprints
              .map((footprint) => {
                const viewer = profilesById[footprint.viewerId];
                if (!viewer) {
                  return "";
                }
                const commonCount = getCommonCommunityIds(
                  currentProfile,
                  viewer
                ).length;
                return personRowMarkup(viewer, "open-profile", commonCount);
              })
              .join("")
          : '<p class="empty-state">プロフィールを訪れた人は、まだいません</p>'
      }
    </div>
  `;
}

function renderNotFound() {
  appRoot.innerHTML = `
    <main class="app-shell">
      ${demoMarkup()}
      <div class="error-box">
        <h1>情報が見つかりません</h1>
        ${
          appState.navigationHistory.length
            ? '<button class="back-button" type="button" data-action="back">戻る</button>'
            : ""
        }
      </div>
    </main>
  `;
}

function renderApp() {
  let content = null;
  switch (appState.currentScreen) {
    case "HOME":
      content = renderHome();
      break;
    case "COMMUNITY_DETAIL":
      content = renderCommunityDetail(appState.currentEntityId);
      break;
    case "TOPIC_DETAIL":
      content = renderTopicDetail(appState.currentEntityId);
      break;
    case "PROFILE_DETAIL":
      content = renderProfileDetail(appState.currentEntityId);
      break;
    case "FOOTPRINT_LIST":
      content = renderFootprintList();
      break;
    default:
      content = null;
  }

  if (content === null) {
    renderNotFound();
    return;
  }
  appRoot.innerHTML = `
    <main class="app-shell">
      ${demoMarkup()}
      ${content}
    </main>
  `;
}

function reportValidation(name, errors) {
  if (errors.length > 0) {
    console.error(`[Kit Gaw] ${name}: ${errors.length}件のエラー`, errors);
    return false;
  }
  console.info(`[Kit Gaw] ${name}: OK`);
  return true;
}

function validateByIdCollection(collection, prefix, label, errors) {
  Object.entries(collection).forEach(([key, item]) => {
    if (key !== item.id) {
      errors.push(`${label}: キー ${key} と id ${item.id} が一致しません`);
    }
    if (!item.id.startsWith(prefix)) {
      errors.push(`${label}: ${item.id} の接頭辞が ${prefix} ではありません`);
    }
  });
}

function validateAllReferences() {
  const errors = [];
  validateByIdCollection(profilesById, "profile-", "profiles", errors);
  validateByIdCollection(communitiesById, "community-", "communities", errors);
  validateByIdCollection(topicsById, "topic-", "topics", errors);
  validateByIdCollection(commentsById, "comment-", "comments", errors);

  Object.values(topicsById).forEach((topic) => {
    if (!communitiesById[topic.communityId]) {
      errors.push(`${topic.id}: communityId ${topic.communityId} が存在しません`);
    }
  });
  Object.values(commentsById).forEach((comment) => {
    if (!topicsById[comment.topicId]) {
      errors.push(`${comment.id}: topicId ${comment.topicId} が存在しません`);
    }
    if (!profilesById[comment.authorId]) {
      errors.push(`${comment.id}: authorId ${comment.authorId} が存在しません`);
    }
  });
  Object.values(profilesById).forEach((profile) => {
    profile.communityIds.forEach((communityId) => {
      if (!communitiesById[communityId]) {
        errors.push(`${profile.id}: communityId ${communityId} が存在しません`);
      }
    });
  });
  return reportValidation("validateAllReferences", errors);
}

function validateFootprints() {
  const errors = [];
  const directions = new Set();
  footprints.forEach((footprint) => {
    if (!footprint.id.startsWith("footprint-")) {
      errors.push(`${footprint.id}: footprint- 接頭辞がありません`);
    }
    if (!profilesById[footprint.viewerId]) {
      errors.push(`${footprint.id}: viewerId が存在しません`);
    }
    if (!profilesById[footprint.viewedProfileId]) {
      errors.push(`${footprint.id}: viewedProfileId が存在しません`);
    }
    if (footprint.viewerId === footprint.viewedProfileId) {
      errors.push(`${footprint.id}: 自分自身への足あとです`);
    }
    const direction = `${footprint.viewerId}|${footprint.viewedProfileId}`;
    if (directions.has(direction)) {
      errors.push(`${footprint.id}: 同じ方向の足あとが重複しています`);
    }
    directions.add(direction);
  });
  return reportValidation("validateFootprints", errors);
}

function validateProfileCommunities() {
  const errors = [];
  Object.values(commentsById).forEach((comment) => {
    const topic = topicsById[comment.topicId];
    const author = profilesById[comment.authorId];
    if (
      topic &&
      author &&
      !author.communityIds.includes(topic.communityId)
    ) {
      errors.push(
        `${comment.id}: ${author.id} は ${topic.communityId} に参加していません`
      );
    }
  });

  const profiles = Object.values(profilesById);
  profiles.forEach((currentProfile) => {
    profiles.forEach((targetProfile) => {
      const derivedIds = [
        ...getCommonCommunityIds(currentProfile, targetProfile),
        ...getExplorableCommunityIds(currentProfile, targetProfile)
      ];
      derivedIds.forEach((communityId) => {
        if (!communitiesById[communityId]) {
          errors.push(
            `${currentProfile.id}/${targetProfile.id}: 算出結果 ${communityId} が存在しません`
          );
        }
      });
    });
  });
  return reportValidation("validateProfileCommunities", errors);
}

appRoot.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control || appState.isNavigating) {
    return;
  }
  const action = control.dataset.action;
  if (action === "navigate") {
    const entityId = control.dataset.entityId || null;
    navigateTo(control.dataset.screen, entityId);
  } else if (action === "open-profile") {
    openProfile(control.dataset.profileId);
  } else if (action === "back") {
    goBack();
  } else if (action === "switch-demo") {
    switchDemoView();
  }
});

validateAllReferences();
validateFootprints();
validateProfileCommunities();
renderApp();

// Console-based inspection aid for the static prototype.
window.KitGawDebug = {
  appState,
  footprints,
  validateAllReferences,
  validateFootprints,
  validateProfileCommunities
};

"use strict";

const profilesById = {
  sora: {
    id: "sora", name: "ソラ", bio: "映画と町中華、朝のランニング。家で仕事をしながら、ときどき遠くへ出ます。",
    communityIds: ["movie", "alone", "cooking", "monster", "koenji", "morningRun", "chinese", "remoteWork", "soloTrip", "retroGame", "liveHouse", "freelance"]
  },
  nagi: {
    id: "nagi", name: "ナギ", bio: "柴犬との暮らしと低い山。雨の日は喫茶店で本を読んでいます。",
    communityIds: ["movie", "alone", "shiba", "hiking", "soloTrip", "cafe", "reading", "rain", "nakano", "cooking", "retroGame", "localShop"]
  },
  ren: {
    id: "ren", name: "レン", bio: "休日はフットサルかドライブ。夜の麺類とライブハウスにもよく行きます。",
    communityIds: ["futsal", "carp", "monster", "drive", "chinese", "baseball", "noodle", "koenji", "liveHouse", "singleLife", "bike", "serviceBreak"]
  },
  mio: {
    id: "mio", name: "ミオ", bio: "ライブとものづくりが生活の中心。自分の手で作ったものを仕事にしています。",
    communityIds: ["bangya", "liveHouse", "makers", "freelance", "diy", "english", "soloTrip", "craftBeer", "movie", "nakano", "boardGame", "remoteWork"]
  },
  mayu: {
    id: "mayu", name: "マユ", bio: "水泳と植物、商店街歩きが好きです。平日は事務、休日は近場を散策します。",
    communityIds: ["swimming", "plants", "suginami", "bakery", "officeBreak", "walking", "cooking", "movie", "boardGame", "morningRun", "localShop", "onsen"]
  }
};

const communitySeed = [
  ["movie","映画好きの会","見た映画や、もう一度見たい作品を話す集まり。","文化"],
  ["alone","一人の時間が好き","一人で過ごす時間の工夫を話す集まり。","生活"],
  ["cooking","自炊ゆるゆる部","無理なく続く普段のごはんを話す集まり。","食"],
  ["monster","モンハン協力部","狩りの思い出や協力プレイを話す集まり。","ゲーム"],
  ["koenji","高円寺近辺の人","高円寺周辺で暮らす人の地域コミュニティ。","地域"],
  ["morningRun","朝ラン継続部","朝のランニングを無理なく続ける集まり。","スポーツ"],
  ["chinese","町中華探検隊","町の中華料理店を歩いて見つける集まり。","食"],
  ["remoteWork","在宅仕事の工夫","家で仕事を進める工夫を共有する集まり。","仕事"],
  ["soloTrip","国内ひとり旅部","一人で行く国内旅行を話す集まり。","旅行"],
  ["retroGame","昔のゲームを語る会","昔遊んだゲームの記憶を話す集まり。","ゲーム"],
  ["liveHouse","ライブハウス好き","ライブハウスで見た音楽を話す集まり。","文化"],
  ["freelance","個人事業主の休憩室","個人で働く人が仕事の合間に話す集まり。","仕事"],
  ["shiba","柴犬のいる暮らし","柴犬と暮らす日々を話す集まり。","生活"],
  ["hiking","低山ハイキング会","日帰りで歩ける低い山を楽しむ集まり。","スポーツ"],
  ["cafe","喫茶店で長居したい","落ち着いて過ごせる喫茶店を話す集まり。","食"],
  ["reading","読書の途中","読みかけの本について話す集まり。","文化"],
  ["rain","雨の日が好き","雨の日の過ごし方を話す集まり。","生活"],
  ["nakano","中野で暮らす人","中野周辺で暮らす人の地域コミュニティ。","地域"],
  ["localShop","地元の店を知りたい","近所で続く店を知るための集まり。","地域"],
  ["futsal","週末フットサル部","週末にフットサルを楽しむ集まり。","スポーツ"],
  ["carp","カープ応援コミュ","広島東洋カープを応援する集まり。","スポーツ"],
  ["drive","ドライブ好き","車で出かけた道や場所を話す集まり。","旅行"],
  ["baseball","草野球観戦部","身近な野球の試合を観戦する集まり。","スポーツ"],
  ["noodle","深夜の麺類研究会","夜に食べた麺類を静かに報告する集まり。","食"],
  ["singleLife","一人暮らしの工夫","一人暮らしの実用的な工夫を共有する集まり。","生活"],
  ["bike","バイクで寄り道","バイクで立ち寄った場所を話す集まり。","旅行"],
  ["serviceBreak","接客業の休憩室","接客の仕事をする人が休憩中に話す集まり。","仕事"],
  ["bangya","バンギャ集まれ","ライブやバンドの現場について話す集まり。","文化"],
  ["makers","ものづくりを仕事にする人","制作を仕事にする人の集まり。","仕事"],
  ["diy","DIY好き","自分で直したり作ったりする集まり。","生活"],
  ["english","英語をやり直す会","英語を自分のペースで学び直す集まり。","文化"],
  ["craftBeer","クラフトビール情報交換所","各地のクラフトビールを話す集まり。","食"],
  ["boardGame","ボードゲーム会","テーブルを囲んで遊ぶゲームの集まり。","ゲーム"],
  ["swimming","ゆっくり泳ぐ会","速さを競わず水泳を続ける集まり。","スポーツ"],
  ["plants","ベランダ植物部","小さな場所で植物を育てる集まり。","生活"],
  ["suginami","杉並を歩く人","杉並区内を歩いて知る地域コミュニティ。","地域"],
  ["bakery","町のパン屋めぐり","普段使いのパン屋を訪ねる集まり。","食"],
  ["officeBreak","事務職の休憩室","事務の仕事をする人が息抜きする集まり。","仕事"],
  ["walking","休日散歩部","目的地を決めすぎず歩く集まり。","スポーツ"],
  ["onsen","近場の温泉へ","日帰りで行ける温泉を話す集まり。","旅行"]
];
const communitiesById = Object.fromEntries(communitySeed.map(([id,name,description,category]) =>
  [id, { id, name, description, category }]
));

const topicsById = {
  movieAgain: { id:"movieAgain", communityId:"movie", authorId:"nagi", title:"最近もう一度見たいと思った映画は？", body:"昔見たときと今では違って見えそうな映画を教えてください。" },
  movieSmall: { id:"movieSmall", communityId:"movie", authorId:"mio", title:"小さな映画館で見てよかった作品", body:"大きな劇場ではなく、小さな映画館で見た記憶に残る作品はありますか。" },
  movieSound: { id:"movieSound", communityId:"movie", authorId:"sora", title:"音で覚えている映画", body:"映像より先に音や音楽を思い出す映画について話したいです。" },
  hikingFirst: { id:"hikingFirst", communityId:"hiking", authorId:"nagi", title:"初めて歩く人に向く低い山", body:"道が分かりやすく、休憩しやすい低山を挙げてください。" },
  hikingFood: { id:"hikingFood", communityId:"hiking", authorId:"nagi", title:"山で食べる簡単な昼ごはん", body:"荷物を重くしすぎず、外で食べやすい昼ごはんを話しましょう。" },
  chineseOrder: { id:"chineseOrder", communityId:"chinese", authorId:"ren", title:"初めての店で最初に頼むもの", body:"町中華へ初めて入ったとき、店の感じを見るために何を頼みますか。" },
  chineseQuiet: { id:"chineseQuiet", communityId:"chinese", authorId:"sora", title:"一人で入りやすかった町中華", body:"一人でも落ち着いて食べられた店の特徴を教えてください。" },
  liveSmall: { id:"liveSmall", communityId:"liveHouse", authorId:"mio", title:"小さい箱で忘れられない音", body:"客席との距離が近いライブで、今も覚えている音を話してください。" },
  liveFirst: { id:"liveFirst", communityId:"liveHouse", authorId:"sora", title:"初めて行ったライブハウス", body:"最初に入ったライブハウスと、そのとき驚いたことは何ですか。" },
  cookingNight: { id:"cookingNight", communityId:"cooking", authorId:"mayu", title:"疲れた夜の簡単ごはん", body:"包丁をあまり使わずに作れる普段のごはんを教えてください。" },
  monsterMemory: { id:"monsterMemory", communityId:"monster", authorId:"ren", title:"協力プレイで助かった瞬間", body:"誰かの一手に助けられた狩りの記憶を話しましょう。" },
  soloStation: { id:"soloStation", communityId:"soloTrip", authorId:"nagi", title:"降りてよかった小さな駅", body:"予定を変えて降りたらよかった駅や町について教えてください。" },
  remoteDesk: { id:"remoteDesk", communityId:"remoteWork", authorId:"mio", title:"机の上から減らしてよかった物", body:"在宅仕事の机を使いやすくするため、置かなくなった物はありますか。" },
  boardShort: { id:"boardShort", communityId:"boardGame", authorId:"mayu", title:"30分で遊べるゲーム", body:"準備から片付けまで短く、初参加でも遊びやすいゲームを知りたいです。" },
  morningStart: { id:"morningStart", communityId:"morningRun", authorId:"sora", title:"走り出すまでの手順", body:"朝に外へ出るまで、迷わず動くための小さな手順を共有しましょう。" }
};

const statementsById = {
  st01:{id:"st01",topicId:"movieAgain",authorId:"sora",body:"『パターソン』をもう一度見たいです。何も起きないように見えた場面が、今なら違って見えそうです。",createdAt:"7月27日 18:20"},
  st02:{id:"st02",topicId:"movieAgain",authorId:"nagi",body:"私は『リトル・フォレスト』です。季節と食事の間隔を、前よりゆっくり見られる気がします。",createdAt:"7月27日 18:42"},
  st03:{id:"st03",topicId:"movieAgain",authorId:"mayu",body:"『かもめ食堂』。台所の場面を今の生活と比べながら見直したいです。",createdAt:"7月27日 19:05"},
  st04:{id:"st04",topicId:"movieSmall",authorId:"sora",body:"座席が少ない劇場で見た短編特集が残っています。上映後に外の音が急に戻った感じまで覚えています。",createdAt:"7月26日 16:10"},
  st05:{id:"st05",topicId:"movieSound",authorId:"mio",body:"音で先に浮かぶのは『ベイビー・ドライバー』です。場面の切れ目と曲の入り方が一緒に残っています。",createdAt:"7月25日 22:14"},
  st06:{id:"st06",topicId:"hikingFirst",authorId:"mayu",body:"駅から登山口まで迷いにくく、途中にベンチがあるコースだと初回でも歩きやすかったです。",createdAt:"7月26日 09:30"},
  st07:{id:"st07",topicId:"hikingFood",authorId:"nagi",body:"小さなおにぎりを二つに分けます。一度に食べ切らなくてよく、休憩時間も短くできます。",createdAt:"7月26日 11:08"},
  st08:{id:"st08",topicId:"chineseOrder",authorId:"sora",body:"チャーハンを頼みます。量と味だけでなく、店の普段のテンポが見えやすい気がします。",createdAt:"7月25日 20:03"},
  st09:{id:"st09",topicId:"chineseOrder",authorId:"ren",body:"自分はラーメンと半チャーハン。両方を少しずつ食べると、その店の基準が分かります。",createdAt:"7月25日 20:19"},
  st10:{id:"st10",topicId:"chineseQuiet",authorId:"mayu",body:"カウンターの端に荷物を置く籠がある店は、一人客の動きをよく見ている印象でした。",createdAt:"7月24日 13:22"},
  st11:{id:"st11",topicId:"liveSmall",authorId:"sora",body:"アンプから出た音とドラムの生音が別々に届く距離で見たバンドです。大きい会場とは違う輪郭でした。",createdAt:"7月24日 23:01"},
  st12:{id:"st12",topicId:"liveSmall",authorId:"ren",body:"客が少ない日でも、演奏の速度が最後まで落ちなかったバンドを覚えています。",createdAt:"7月24日 23:18"},
  st13:{id:"st13",topicId:"liveFirst",authorId:"mio",body:"入口の階段から音が漏れていて、扉を開けた瞬間に床まで振動していたことです。",createdAt:"7月23日 21:40"},
  st14:{id:"st14",topicId:"cookingNight",authorId:"nagi",body:"冷凍うどんに卵と刻みねぎだけ。洗う物を増やさないことを優先しています。",createdAt:"7月23日 19:30"},
  st15:{id:"st15",topicId:"cookingNight",authorId:"sora",body:"豆腐を器に出して、温かいごはんと味噌汁を合わせます。作業を三つに増やさないのが続く条件です。",createdAt:"7月23日 19:48"},
  st16:{id:"st16",topicId:"monsterMemory",authorId:"sora",body:"回復が切れたときに、何も言わず粉塵を使ってくれた人。短い動作なのに協力している感じが強かったです。",createdAt:"7月22日 22:02"},
  st17:{id:"st17",topicId:"soloStation",authorId:"mio",body:"海が見える無人駅。次の電車まで長かったので、近くの道を歩けました。",createdAt:"7月22日 15:11"},
  st18:{id:"st18",topicId:"remoteDesk",authorId:"sora",body:"使っていない小物入れを外しました。空いた場所へ作業中の紙だけ置けるようになりました。",createdAt:"7月21日 10:06"},
  st19:{id:"st19",topicId:"boardShort",authorId:"mio",body:"ルール説明が五分以内で終わるカードゲームだと、初参加の人も途中から入りやすいです。",createdAt:"7月20日 17:55"},
  st20:{id:"st20",topicId:"morningStart",authorId:"mayu",body:"前日に靴下まで玄関近くへ置きます。朝に選ぶ物を減らすと外へ出やすいです。",createdAt:"7月20日 06:48"}
};

const allCategories = ["文化","スポーツ","地域","食","仕事","生活","ゲーム","旅行"];
const appState = {
  currentViewerId: "sora",
  currentScreen: "home",
  currentParams: {},
  currentUiState: {},
  history: [],
  footprints: [
    { viewerId:"ren", viewedProfileId:"sora", latestVisitedAt:"7月27日 16:40" },
    { viewerId:"mayu", viewedProfileId:"sora", latestVisitedAt:"7月27日 14:15" }
  ]
};
const app = document.getElementById("app");

const safe = value => String(value ?? "").replace(/[&<>"']/g, ch => (
  { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]
));
const truncate = (text, length = 24) => text.length > length ? `${text.slice(0, length - 1)}…` : text;
const getProfile = id => profilesById[id] || null;
const getCommunity = id => communitiesById[id] || null;
const getTopic = id => topicsById[id] || null;
const getStatement = id => statementsById[id] || null;
const topicsForCommunity = id => Object.values(topicsById).filter(topic => topic.communityId === id);
const topicsByAuthor = id => Object.values(topicsById).filter(topic => topic.authorId === id);
const statementsForTopic = id => Object.values(statementsById).filter(statement => statement.topicId === id);
const statementsByAuthor = id => Object.values(statementsById).filter(statement => statement.authorId === id);
const isViewerMember = id => getProfile(appState.currentViewerId)?.communityIds.includes(id) || false;

function routeLabel(entry) {
  const { screen, params = {} } = entry;
  if (screen === "home") return "HOME";
  if (screen === "profileDetail") return getProfile(params.profileId)?.name || "プロフィール";
  if (screen === "profileCommunities") return `${getProfile(params.profileId)?.name || "人物"}の所属`;
  if (screen === "communitySearch") return "コミュニティを探す";
  if (screen === "communityDetail") return getCommunity(params.communityId)?.name || "コミュニティ";
  if (screen === "topicDetail") return getTopic(params.topicId)?.title || "トピック";
  if (screen === "statementDetail") return "発言";
  if (screen === "footprintList") return "足あと";
  return "前の画面";
}

function snapshotCurrent() {
  return {
    screen: appState.currentScreen,
    params: structuredClone(appState.currentParams),
    uiState: structuredClone(appState.currentUiState)
  };
}
function navigateTo(screen, params = {}, uiState = {}) {
  appState.history.push(snapshotCurrent());
  appState.currentScreen = screen;
  appState.currentParams = params;
  appState.currentUiState = uiState;
  renderApp();
}
function goBack() {
  const previous = appState.history.pop();
  if (!previous) return;
  appState.currentScreen = previous.screen;
  appState.currentParams = previous.params;
  appState.currentUiState = previous.uiState;
  renderApp();
}
function switchViewer(profileId) {
  if (!getProfile(profileId)) return;
  appState.currentViewerId = profileId;
  appState.currentScreen = "home";
  appState.currentParams = {};
  appState.currentUiState = {};
  appState.history = [];
  renderApp();
}
function recordFootprint(viewedProfileId) {
  if (!getProfile(viewedProfileId) || viewedProfileId === appState.currentViewerId) return;
  const existing = appState.footprints.find(item =>
    item.viewerId === appState.currentViewerId && item.viewedProfileId === viewedProfileId
  );
  const latestVisitedAt = new Intl.DateTimeFormat("ja-JP", {
    month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"
  }).format(new Date()).replace("/", "月").replace(" ", "日 ");
  if (existing) existing.latestVisitedAt = latestVisitedAt;
  else appState.footprints.push({ viewerId:appState.currentViewerId, viewedProfileId, latestVisitedAt });
}

function renderBackHeader() {
  if (!appState.history.length) return "";
  const label = routeLabel(appState.history[appState.history.length - 1]);
  return `<header class="back-header"><button class="back-button" data-action="back">← ${safe(truncate(label))}</button></header>`;
}
function renderPersonMini(profileId, hint = "プロフィールを見る") {
  const profile = getProfile(profileId);
  if (!profile) return "";
  return `<button class="person-mini" data-action="open-profile" data-profile-id="${safe(profile.id)}">
    <span class="avatar" aria-hidden="true">${safe(profile.name.slice(0,1))}</span>
    <span class="person-mini__name">${safe(profile.name)}</span>
    <span class="person-mini__hint">${safe(hint)} ＞</span>
  </button>`;
}
function statusLabel(text) {
  return text ? `<span class="status-label">${safe(text)}</span>` : "";
}
function renderCommunityItem(communityId, options = {}) {
  const community = getCommunity(communityId);
  if (!community) return "";
  return `<button class="list-item" data-action="open-community" data-community-id="${safe(community.id)}"
    ${options.contextProfileId ? `data-context-profile-id="${safe(options.contextProfileId)}"` : ""}>
    <span class="item-title">${safe(community.name)}</span>
    <span class="item-description">${safe(community.description)}</span>
    ${statusLabel(options.label)}
  </button>`;
}
function renderTopicItem(topicId) {
  const topic = getTopic(topicId);
  if (!topic) return "";
  return `<article class="topic-card">
    <button class="topic-main" data-action="open-topic" data-topic-id="${safe(topic.id)}">
      <span class="item-title">${safe(topic.title)}</span>
      <span class="excerpt">${safe(topic.body)}</span>
    </button>
    ${renderPersonMini(topic.authorId)}
  </article>`;
}
function renderStatementItem(statementId) {
  const statement = getStatement(statementId);
  if (!statement) return "";
  return `<article class="statement-card">
    ${renderPersonMini(statement.authorId)}
    <button class="statement-main" data-action="open-statement" data-statement-id="${safe(statement.id)}">
      <span class="excerpt">${safe(statement.body)}</span>
      <span class="read-hint">発言を読む ＞</span>
    </button>
  </article>`;
}
function renderEmptyState(text) {
  return `<div class="empty-state">${safe(text)}</div>`;
}
function renderContextBanner(profileId, active = false) {
  const profile = getProfile(profileId);
  if (!profile) return "";
  if (active) {
    return `<aside class="context-banner">
      <p>${safe(profile.name)}の活動を見ています</p>
      <button class="plain-link" data-action="clear-activity-filter">コミュニティ全体を見る ＞</button>
    </aside>`;
  }
  return `<aside class="context-banner">
    <p>${safe(profile.name)}も参加しています</p>
    <button class="plain-link" data-action="show-profile-activity" data-profile-id="${safe(profile.id)}">${safe(profile.name)}の活動を見る ＞</button>
  </aside>`;
}

function renderHome() {
  const viewer = getProfile(appState.currentViewerId);
  if (!viewer) return renderError("現在の利用者が見つかりません。");
  const footprints = appState.footprints.filter(item => item.viewedProfileId === viewer.id);
  const communityItems = viewer.communityIds.slice(0,4).map(id =>
    renderCommunityItem(id, { label:"参加中" })
  ).join("");
  const communitySection = viewer.communityIds.length
    ? `${communityItems}<button class="text-link" data-action="open-profile-communities" data-profile-id="${safe(viewer.id)}">参加コミュニティ 全${viewer.communityIds.length}件を見る ＞</button>`
    : `${renderEmptyState("参加コミュニティはありません。")}<button class="text-link" data-action="open-community-search">コミュニティを探す ＞</button>`;
  const otherViewer = viewer.id === "sora" ? "nagi" : "sora";
  return `<section class="screen">
    <h1 class="app-title">New Kit Gaw</h1>
    <button class="card self-card" data-action="open-profile" data-profile-id="${safe(viewer.id)}">
      <span class="avatar" aria-hidden="true">${safe(viewer.name.slice(0,1))}</span>
      <span class="self-card__body"><span class="self-card__name">${safe(viewer.name)}</span><span class="meta">参加コミュニティ ${viewer.communityIds.length}件</span></span>
      <span class="chevron">プロフィールを見る ＞</span>
    </button>
    <h2 class="section-title">足あと</h2>
    ${footprints.length
      ? `<button class="text-link" data-action="open-footprints">足あと ${footprints.length}件 ＞</button>`
      : `${renderEmptyState("まだ足あとはありません。")}<button class="text-link" data-action="open-footprints">足あと一覧を見る ＞</button>`}
    <h2 class="section-title">参加中コミュニティ</h2>
    <div class="stack">${communitySection}</div>
    ${viewer.communityIds.length ? `<button class="text-link" data-action="open-community-search">コミュニティを探す ＞</button>` : ""}
    <aside class="viewer-switch">
      <p>検証用</p><p>現在の視点：${safe(viewer.name)}</p>
      <button data-action="switch-viewer" data-profile-id="${safe(otherViewer)}">視点を${safe(getProfile(otherViewer).name)}へ切り替える</button>
    </aside>
  </section>`;
}

function renderProfileDetail() {
  const profile = getProfile(appState.currentParams.profileId);
  if (!profile) return renderError("プロフィールが見つかりません。");
  recordFootprint(profile.id);
  const isSelf = profile.id === appState.currentViewerId;
  const communities = profile.communityIds.slice(0,5).map(id => renderCommunityItem(id, {
    contextProfileId: isSelf ? null : profile.id,
    label: !isSelf && isViewerMember(id) ? "あなたも参加中" : ""
  })).join("");
  const topics = topicsByAuthor(profile.id).slice(0,3);
  const statements = statementsByAuthor(profile.id).slice(0,3);
  return `<section class="screen">
    ${renderBackHeader()}
    <div class="profile-head"><span class="avatar avatar--large" aria-hidden="true">${safe(profile.name.slice(0,1))}</span>
      <div><h1 class="screen-title">${safe(profile.name)}</h1><p class="body-copy">${safe(profile.bio)}</p></div>
    </div>
    <h2 class="section-title">参加コミュニティ</h2><p class="count">合計 ${profile.communityIds.length}件</p>
    <div class="stack">${communities || renderEmptyState("所属コミュニティはありません。")}</div>
    ${profile.communityIds.length ? `<button class="text-link" data-action="open-profile-communities" data-profile-id="${safe(profile.id)}">所属している全コミュニティを見る ＞</button>` : ""}
    <h2 class="section-title">立てたトピック</h2>
    <div class="stack">${topics.length ? topics.map(t => renderTopicItem(t.id)).join("") : renderEmptyState("立てたトピックはありません。")}</div>
    <h2 class="section-title">残した発言</h2>
    <div class="stack">${statements.length ? statements.map(s => renderStatementItem(s.id)).join("") : renderEmptyState("残した発言はありません。")}</div>
  </section>`;
}

function renderProfileCommunities() {
  const profile = getProfile(appState.currentParams.profileId);
  if (!profile) return renderError("対象人物が見つかりません。");
  const isSelf = profile.id === appState.currentViewerId;
  const items = profile.communityIds.map(id => renderCommunityItem(id, {
    contextProfileId: isSelf ? null : profile.id,
    label: !isSelf && isViewerMember(id) ? "あなたも参加中" : ""
  })).join("");
  return `<section class="screen">${renderBackHeader()}
    <h1 class="screen-title">${safe(profile.name)}の所属コミュニティ</h1>
    <p class="count">合計 ${profile.communityIds.length}件</p>
    <div class="stack">${items || renderEmptyState("所属コミュニティはありません。")}</div>
  </section>`;
}

function renderCommunitySearch() {
  const query = appState.currentUiState.query || "";
  const category = appState.currentUiState.category || "";
  const normalized = query.trim().toLocaleLowerCase("ja");
  const matches = Object.values(communitiesById).filter(community =>
    (!category || community.category === category) &&
    (!normalized || `${community.name} ${community.description}`.toLocaleLowerCase("ja").includes(normalized))
  ).slice(0,8);
  return `<section class="screen">${renderBackHeader()}
    <h1 class="screen-title">コミュニティを探す</h1>
    <input class="search-field" type="search" data-role="community-search" value="${safe(query)}" placeholder="コミュニティ名や説明から探す" aria-label="コミュニティ検索">
    <h2 class="subheading">分類</h2>
    <div class="categories" aria-label="分類">
      <button class="category-button ${category === "" ? "is-active" : ""}" data-action="select-category" data-category="">すべて</button>
      ${allCategories.map(item => `<button class="category-button ${category === item ? "is-active" : ""}" data-action="select-category" data-category="${safe(item)}">${safe(item)}</button>`).join("")}
    </div>
    <div class="stack">${matches.length ? matches.map(community => renderCommunityItem(community.id, {
      label: isViewerMember(community.id) ? "参加中" : ""
    })).join("") : renderEmptyState("検索条件に一致するコミュニティは見つかりませんでした。")}</div>
  </section>`;
}

function renderCommunityDetail() {
  const community = getCommunity(appState.currentParams.communityId);
  if (!community) return renderError("コミュニティが見つかりません。");
  const contextProfile = getProfile(appState.currentUiState.contextProfileId);
  const filterProfile = getProfile(appState.currentUiState.activityFilterProfileId);
  const allTopics = topicsForCommunity(community.id);
  let content;
  if (filterProfile) {
    const filteredTopics = allTopics.filter(topic => topic.authorId === filterProfile.id).slice(0,3);
    const filteredStatements = Object.values(statementsById).filter(statement => {
      const topic = getTopic(statement.topicId);
      return statement.authorId === filterProfile.id && topic?.communityId === community.id;
    }).slice(0,3);
    const noActivity = !filteredTopics.length && !filteredStatements.length;
    content = `${renderContextBanner(filterProfile.id, true)}
      ${noActivity ? renderEmptyState(`${filterProfile.name}はこのコミュニティに参加していますが、まだトピックや発言はありません。`) : `
        <h2 class="section-title">${safe(filterProfile.name)}が立てたトピック</h2>
        <div class="stack">${filteredTopics.length ? filteredTopics.map(t => renderTopicItem(t.id)).join("") : renderEmptyState("立てたトピックはありません。")}</div>
        <h2 class="section-title">${safe(filterProfile.name)}が残した発言</h2>
        <div class="stack">${filteredStatements.length ? filteredStatements.map(s => renderStatementItem(s.id)).join("") : renderEmptyState("残した発言はありません。")}</div>`}`;
  } else {
    content = `${contextProfile ? renderContextBanner(contextProfile.id, false) : ""}
      <h2 class="section-title">トピック</h2>
      <div class="stack">${allTopics.length ? allTopics.slice(0,5).map(t => renderTopicItem(t.id)).join("") : renderEmptyState("まだトピックはありません。")}</div>`;
  }
  return `<section class="screen">${renderBackHeader()}
    <h1 class="screen-title">${safe(community.name)}</h1>
    <p class="body-copy">${safe(community.description)}</p>
    ${statusLabel(isViewerMember(community.id) ? "参加中" : "")}
    ${content}
  </section>`;
}

function renderTopicDetail() {
  const topic = getTopic(appState.currentParams.topicId);
  if (!topic) return renderError("トピックが見つかりません。");
  const community = getCommunity(topic.communityId);
  const statements = statementsForTopic(topic.id).slice(0,5);
  return `<section class="screen">${renderBackHeader()}
    <button class="plain-link" data-action="open-community" data-community-id="${safe(community?.id)}">${safe(community?.name || "コミュニティ")} ＞</button>
    <h1 class="screen-title">${safe(topic.title)}</h1>
    <p class="body-copy">${safe(topic.body)}</p>
    <h2 class="subheading">トピック作成者</h2>
    ${renderPersonMini(topic.authorId)}
    <h2 class="section-title">発言 ${statements.length}件</h2>
    <div class="stack">${statements.length ? statements.map(statement => renderStatementItem(statement.id)).join("") : renderEmptyState("このトピックには、まだ発言がありません。")}</div>
  </section>`;
}

function renderStatementDetail() {
  const statement = getStatement(appState.currentParams.statementId);
  if (!statement) return renderError("発言が見つかりません。");
  const topic = getTopic(statement.topicId);
  const community = getCommunity(topic?.communityId);
  return `<section class="screen">${renderBackHeader()}
    <div class="detail-links">
      <button class="detail-link" data-action="open-community" data-community-id="${safe(community?.id)}">コミュニティ：${safe(community?.name || "不明")} ＞</button>
      <button class="detail-link" data-action="open-topic" data-topic-id="${safe(topic?.id)}">元のトピック：${safe(topic?.title || "不明")} ＞</button>
    </div>
    <h1 class="subheading">発言者</h1>
    ${renderPersonMini(statement.authorId)}
    <p class="statement-full">${safe(statement.body)}</p>
    <p class="meta">${safe(statement.createdAt)}</p>
    <div class="detail-links">
      <button class="detail-link" data-action="open-community" data-community-id="${safe(community?.id)}">${safe(community?.name || "コミュニティ")}へ ＞</button>
      <button class="detail-link" data-action="open-topic" data-topic-id="${safe(topic?.id)}">${safe(topic?.title || "トピック")}へ ＞</button>
    </div>
  </section>`;
}

function renderFootprintList() {
  const footprints = appState.footprints
    .filter(item => item.viewedProfileId === appState.currentViewerId)
    .sort((a,b) => b.latestVisitedAt.localeCompare(a.latestVisitedAt, "ja"));
  const items = footprints.map(item => {
    const profile = getProfile(item.viewerId);
    if (!profile) return "";
    return `<button class="list-item footprint-item" data-action="open-profile" data-profile-id="${safe(profile.id)}">
      <span class="avatar" aria-hidden="true">${safe(profile.name.slice(0,1))}</span>
      <span class="footprint-item__body"><span class="item-title">${safe(profile.name)}</span><span class="meta">${safe(item.latestVisitedAt)}</span></span>
      <span class="chevron">プロフィールへ ＞</span>
    </button>`;
  }).join("");
  return `<section class="screen">${renderBackHeader()}
    <h1 class="screen-title">足あと</h1><p class="count">${footprints.length}件</p>
    <div class="stack">${items || renderEmptyState("まだ足あとはありません。")}</div>
  </section>`;
}

function renderError(message) {
  return `<section class="screen">${renderBackHeader()}<div class="empty-state error-box">${safe(message)}</div></section>`;
}
function renderApp() {
  const renderers = {
    home: renderHome,
    profileDetail: renderProfileDetail,
    profileCommunities: renderProfileCommunities,
    communitySearch: renderCommunitySearch,
    communityDetail: renderCommunityDetail,
    topicDetail: renderTopicDetail,
    statementDetail: renderStatementDetail,
    footprintList: renderFootprintList
  };
  const renderer = renderers[appState.currentScreen];
  app.innerHTML = renderer ? renderer() : renderError("画面が見つかりません。");
  window.scrollTo(0,0);
}

app.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "back") return goBack();
  if (action === "open-profile" && getProfile(target.dataset.profileId))
    return navigateTo("profileDetail", { profileId:target.dataset.profileId });
  if (action === "open-profile-communities" && getProfile(target.dataset.profileId))
    return navigateTo("profileCommunities", { profileId:target.dataset.profileId });
  if (action === "open-community-search")
    return navigateTo("communitySearch", {}, { query:"", category:"" });
  if (action === "open-community" && getCommunity(target.dataset.communityId)) {
    const contextProfileId = getProfile(target.dataset.contextProfileId) ? target.dataset.contextProfileId : null;
    return navigateTo("communityDetail", { communityId:target.dataset.communityId }, {
      contextProfileId, activityFilterProfileId:null
    });
  }
  if (action === "open-topic" && getTopic(target.dataset.topicId))
    return navigateTo("topicDetail", { topicId:target.dataset.topicId });
  if (action === "open-statement" && getStatement(target.dataset.statementId))
    return navigateTo("statementDetail", { statementId:target.dataset.statementId });
  if (action === "open-footprints")
    return navigateTo("footprintList");
  if (action === "show-profile-activity" && getProfile(target.dataset.profileId)) {
    appState.currentUiState.activityFilterProfileId = target.dataset.profileId;
    return renderApp();
  }
  if (action === "clear-activity-filter") {
    appState.currentUiState.activityFilterProfileId = null;
    return renderApp();
  }
  if (action === "select-category") {
    appState.currentUiState.category = target.dataset.category || "";
    return renderApp();
  }
  if (action === "switch-viewer") return switchViewer(target.dataset.profileId);
});

app.addEventListener("input", event => {
  if (!event.target.matches('[data-role="community-search"]')) return;
  appState.currentUiState.query = event.target.value;
  const caret = event.target.selectionStart;
  renderApp();
  const field = app.querySelector('[data-role="community-search"]');
  if (field) { field.focus(); field.setSelectionRange(caret, caret); }
});

renderApp();

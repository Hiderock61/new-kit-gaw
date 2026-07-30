"use strict";

const profilesById = {
  sora:{id:"sora",name:"ソラ",bio:"映画と町中華、朝のランニングが好きです。在宅で仕事をしながら、ときどき写真を撮りに遠くへ出ます。",communityIds:["movie","chinese","morningRun","remoteWork","soloTrip","retroGame","koenji","cooking","soloCinema","photo"]},
  nagi:{id:"nagi",name:"ナギ",bio:"柴犬との暮らしと低い山。旅先の静かな場所や、長居できる喫茶店で本を読む時間が好きです。",communityIds:["movie","hiking","shiba","soloTrip","cafe","reading","cooking","localShop","suburban","photo"]},
  ren:{id:"ren",name:"レン",bio:"休日はフットサルかドライブ。接客の仕事帰りに町中華やライブハウスへ寄ることがあります。",communityIds:["futsal","monster","drive","chinese","liveHouse","koenji","bike","salesBreak","soloCinema","nightLife"]},
  mio:{id:"mio",name:"ミオ",bio:"ライブとものづくりが生活の中心です。制作の仕事をしながら、古着や街の看板もよく見ています。",communityIds:["liveHouse","makers","diy","festival","soloTrip","photo","freelance","vintage","shimokita","repairWork"]},
  mayu:{id:"mayu",name:"マユ",bio:"植物と商店街歩きが好きです。事務の仕事をしながら、暮らしを少し楽にする方法を試しています。",communityIds:["cooking","localShop","garden","suburban","boardGame","morningRun","salesBreak","reading","diy","cafe"]},
  yuu:{id:"yuu",name:"ユウ",bio:"古着屋を見ながら街を歩くのが好きです。販売の仕事をしています。休みの日は銭湯かライブハウスにいます。",communityIds:["vintage","liveHouse","photo","shimokita","salesBreak","sento","nightLife","chinese","festival","cafe"]},
  aki:{id:"aki",name:"アキ",bio:"郊外で小さな家庭菜園を続けています。在宅事務の合間に散歩をして、夜はホラー映画かボードゲームです。",communityIds:["garden","cooking","suburban","remoteWork","horror","boardGame","localShop","morningRun","diy","reading"]},
  kei:{id:"kei",name:"ケイ",bio:"営業の仕事で外を回ることが多いです。休日はフットサルかドライブ、一人で映画館や喫茶店にも行きます。",communityIds:["futsal","drive","salesBreak","soloCinema","cafe","movie","morningRun","chinese","localShop","festival","commute"]},
  rina:{id:"rina",name:"リナ",bio:"通勤時間に本を読み、帰りに喫茶店へ寄ります。英語を学び直しながら、休日は音楽フェスや写真展へ出かけます。",communityIds:["reading","cafe","english","commute","festival","liveHouse","soloCinema","photo","localShop","boardGame"]},
  taku:{id:"taku",name:"タク",bio:"整備と修理の仕事をしています。バイクで町中華へ寄り、家では道具を直すか昔のゲームを遊んでいます。",communityIds:["bike","diy","chinese","repairWork","shiba","retroGame","drive","localShop","sento","monster","makers"]},
  emma:{id:"emma",name:"エマ",bio:"移動の多いフリーランスです。旅先で写真と地域の店を記録し、家に戻ると朝ランやボードゲームで生活を戻します。",communityIds:["soloTrip","photo","localShop","freelance","morningRun","boardGame","festival","cafe","suburban","remoteWork","english"]},
  shun:{id:"shun",name:"シュン",bio:"高円寺周辺で個人の仕事をしています。夜の方が作業しやすく、ゲームの合間に自炊します。たまに低山へ出ます。",communityIds:["monster","retroGame","remoteWork","nightLife","freelance","koenji","hiking","cooking","diy","soloCinema"]}
};

const communitySeed = [
  ["movie","映画好きの会","映画館や家で見た作品について話す集まり。","文化"],
  ["cooking","自炊ゆるゆる部","無理なく続く普段のごはんを話す集まり。","食"],
  ["monster","モンハン協力部","狩りの思い出や協力プレイを話す集まり。","ゲーム"],
  ["koenji","高円寺近辺の人","高円寺周辺で暮らす人の地域コミュニティ。","地域"],
  ["morningRun","朝ラン継続部","朝のランニングを無理なく続ける集まり。","スポーツ"],
  ["chinese","町中華探検隊","町の中華料理店を歩いて見つける集まり。","食"],
  ["remoteWork","在宅仕事の工夫","家で仕事を進める工夫を共有する集まり。","仕事"],
  ["soloTrip","国内ひとり旅部","一人で行く国内旅行を話す集まり。","旅行"],
  ["retroGame","昔のゲームを語る会","昔遊んだゲームの記憶を話す集まり。","ゲーム"],
  ["liveHouse","ライブハウス好き","小さな会場で見た音楽を話す集まり。","文化"],
  ["freelance","個人事業主の休憩室","個人で働く人が仕事の合間に話す集まり。","仕事"],
  ["shiba","柴犬のいる暮らし","柴犬と暮らす日々を話す集まり。","生活"],
  ["hiking","低山ハイキング会","日帰りで歩ける低い山を楽しむ集まり。","スポーツ"],
  ["cafe","喫茶店で長居したい","落ち着いて過ごせる喫茶店を話す集まり。","食"],
  ["reading","読書の途中","読みかけの本について話す集まり。","文化"],
  ["localShop","地元の店を知りたい","近所で続く店を知るための集まり。","地域"],
  ["futsal","週末フットサル部","週末にフットサルを楽しむ集まり。","スポーツ"],
  ["drive","ドライブ好き","車で出かけた道や場所を話す集まり。","旅行"],
  ["bike","バイクで寄り道","バイクで立ち寄った場所を話す集まり。","旅行"],
  ["makers","ものづくりを仕事にする人","制作を仕事にする人の集まり。","仕事"],
  ["diy","DIY好き","自分で直したり作ったりする集まり。","生活"],
  ["english","英語をやり直す会","英語を自分のペースで学び直す集まり。","文化"],
  ["boardGame","ボードゲーム会","テーブルを囲んで遊ぶゲームの集まり。","ゲーム"],
  ["vintage","古着屋を巡る人","古着と店の空気を楽しむ人の集まり。","文化"],
  ["sento","銭湯が好き","町の銭湯へ通う人の集まり。","生活"],
  ["shimokita","下北沢近辺の人","下北沢周辺で働く人や暮らす人の集まり。","地域"],
  ["suburban","郊外で暮らす人","郊外での生活や移動を話す集まり。","地域"],
  ["salesBreak","外回り・販売職の休憩室","外で働く人が休憩の工夫を話す集まり。","仕事"],
  ["nightLife","夜型生活の人","夜に活動する人が生活リズムを話す集まり。","生活"],
  ["photo","写真を撮る人","日常や旅先で写真を撮る人の集まり。","文化"],
  ["garden","家庭菜園ゆる部","失敗も含めて小さな菜園を続ける集まり。","生活"],
  ["horror","ホラー映画好き","怖い映画の見方や記憶を話す集まり。","文化"],
  ["soloCinema","一人映画館","一人で映画館へ行く人の集まり。","文化"],
  ["festival","音楽フェスに行く人","野外や複数会場の音楽イベントを話す集まり。","文化"],
  ["repairWork","整備や修理の仕事","道具や修理を仕事にする人の集まり。","仕事"],
  ["commute","通勤時間を使う会","移動時間の使い方を考える集まり。","生活"]
];
const communitiesById = Object.fromEntries(communitySeed.map(([id,name,description,category]) => [id,{id,name,description,category}]));

const contentSeed = [
  ["movieAgain","movie","nagi","もう一度見たいと思った映画は？","昔見たときと今では違って見えそうな作品を話してください.",[["sora","『パターソン』です。何も起きないように見えた場面を、今なら前より長く見ていられそうです。"],["kei","『マネーボール』。仕事で移動する時間が増えた今なら、別の箇所が残りそうです。"]]],
  ["chineseFirst","chinese","ren","初めての店で最初に頼むもの","店の普段の感じを見るために、最初に何を頼みますか。",[["sora","チャーハンです。味だけでなく、店の動く速さまで一緒に見ています。"],["taku","ラーメンと餃子。調理場から出てくる順番を見ると、次に何を頼むか決めやすいです。"]]],
  ["liveSmall","liveHouse","mio","小さい会場で忘れられない音","客席との距離が近いライブで覚えている音を話してください。",[["yuu","入口の階段までベースが響いていた夜です。外へ出ても耳に低い音が残っていました。"],["ren","客が少なくても最後まで速度が落ちなかったバンド。短いセットでしたが覚えています。"]]],
  ["gardenEasy","garden","aki","失敗しても育てやすかった野菜は？","最初の失敗と、その後に変えたことも聞かせてください。",[["mayu","ミニトマトでした。水をやりすぎたので、翌年は土が乾いてからにしたら実が増えました。"],["aki","葉ねぎです。一度切ってもまた伸びるので、失敗した感じが少なく続けられました。"]]],
  ["vintageLeave","vintage","yuu","買わずに帰ったけど印象に残った店は？","服を買わなくても覚えている店の空気や並べ方を話してください。",[["mio","色別ではなく素材で並んでいた店です。手触りを追うだけで展示を見ているようでした。"],["yuu","古い鏡と木の棚だけの小さな店。夕方の光で服の色が少しずつ変わって見えました。"]]],
  ["futsalReturn","futsal","kei","久しぶりに動く日の加減は？","間が空いた後のフットサルで無理をしない工夫を共有してください。",[["ren","最初の十分は走りすぎない。パスを二本つないでから前へ出ます。"],["kei","車で行っても帰りは少し歩きます。急に止まるより脚が楽でした。"]]],
  ["readingCarry","reading","rina","通勤中でも読み続けられた本","短い移動の積み重ねで読めた本と、その読み方を話してください。",[["nagi","短編集を一編ずつ読みました。駅に着いて途中で切れても、次の日に戻りやすかったです。"],["mayu","章が細かい実用書です。付箋を一枚だけ使うと、続きを探さずに済みました。"]]],
  ["repairTool","repairWork","taku","長く使っている手工具は？","買い替えずに手入れしながら使っている道具を教えてください。",[["mio","小さなラジオペンチです。先端を拭いて戻すだけですが、細い作業で今も頼れます。"],["taku","柄が擦れたドライバー。先が減ったら整えて、用途を変えながら使っています。"]]],
  ["tripStation","soloTrip","emma","予定を変えて降りてよかった駅","旅の途中で降りた場所と、そこで見つけたものを話してください。",[["nagi","川沿いの小さな駅です。次の電車まで歩いたら、古い橋の音がよく聞こえました。"],["sora","海が見えたので一駅手前で降りました。写真より、坂を下った時間の方を覚えています。"]]],
  ["nightDrink","nightLife","shun","夜中に作業が進むとき何を飲む？","眠気を飛ばすより、作業を止めないための飲み物を話してください。",[["yuu","薄いコーヒーを大きめのカップで。閉店後の片付けから帰ると、それくらいがちょうどいいです。"],["ren","常温の水。運転して帰った後は冷たいものより飲みやすいです。"]]],
  ["photoMiss","photo","emma","撮らなかった景色で覚えているもの","カメラを出さずに見ていた場所について話してください。",[["yuu","雨上がりの古着屋の窓です。反射がきれいでしたが、店員さんと話していて撮りませんでした。"],["nagi","山の帰りのバス停。犬が眠っていて、音を立てずにそのまま見ていました。"]]],
  ["cookingNight","cooking","mayu","疲れた夜の簡単ごはん","包丁や洗い物を増やさずに作れる普段のごはんを共有してください。",[["shun","冷凍うどんに卵。夜中は鍋を出さず、器一つで終わらせます。"],["aki","豆腐と残り野菜の味噌汁です。野菜は昼に切っておくと、仕事の後でも作れました。"]]],
  ["sentoSolo","sento","yuu","一人で入りやすかった銭湯は？","初めてでも落ち着けた理由を、入口や脱衣所の様子も含めて話してください。",[["taku","番台から棚が見える昔ながらの所。置き場所を迷わず、黙っていても入りやすかったです。"],["yuu","駅から少し離れた銭湯です。平日の夕方は常連も静かで、一人でも間が持ちました。"]]],
  ["remoteDesk","remoteWork","sora","机から減らしてよかった物","在宅仕事の机を使いやすくするために置かなくなった物はありますか。",[["aki","空の小物入れを外しました。必要な紙だけ置けるようになって、片付けも早くなりました。"],["shun","二台目の時計。夜は時間を見すぎるので、画面の隅だけで確認する方が進みます。"]]],
  ["cafeSeat","cafe","rina","長居しやすかった席の位置","店名ではなく、落ち着けた席と周囲の様子を話してください。",[["nagi","入口から一番遠い壁際です。人の出入りが視界に入らず、本の続きへ戻りやすかったです。"],["kei","窓際の端。外回りの途中は道路が見える方が、休みすぎずに戻れます。"]]],
  ["diyFirst","diy","taku","直して使えると気づいた最初の物","捨てる前に手を入れてみた物と、使った道具を教えてください。",[["mio","ぐらついた木の椅子です。接着剤だけでなく、締め直す順番で安定するのが面白かったです。"],["mayu","引き出しの取っ手。家にあったドライバー一本で直り、それからネジを残すようになりました。"]]],
  ["festivalRest","festival","mio","フェスで休む場所をどう決める？","最後まで音を楽しむための休憩場所や時間を話してください。",[["rina","次の会場へ向かう途中の木陰です。完全に座り込まず、音が変わるまで休みます。"],["kei","食事の列が短い時間にまとめて休みます。移動距離を減らす方が夕方も動けました。"]]],
  ["commuteSwitch","commute","rina","仕事の頭から切り替わる場所","通勤の途中で気持ちが切り替わる地点や習慣はありますか。",[["kei","車を降りて駅まで歩く区間です。電話をしまって歩くと、家まで仕事を持ち帰りにくいです。"],["rina","乗り換えた後の各駅停車。そこで本を開くと、会社の続きを考えなくなります。"]]],
  ["monsterHelp","monster","ren","協力プレイで助かった短い動作","言葉より先に助かった一手について話してください。",[["taku","砥石を使う間に前へ出てくれた人。数秒でしたが、次の動きが楽になりました。"],["shun","回復が切れた時の粉塵です。夜中の野良でも連携が成立した感じがありました。"]]],
  ["localOld","localShop","mayu","なくなってから気づいた店の役割","買い物以外で、その店が町に作っていたものを話してください。",[["emma","旅先の小さな文具店です。道を聞く人が何人も入り、案内所のようになっていました。"],["mayu","駅前の写真屋。現像を待つ人が立ち話をしていて、通りの時間を作っていました。"]]],
  ["bikeStop","bike","taku","目的地ではない寄り道で残った場所","走っている途中で止まった理由と、そこにあったものを話してください。",[["ren","川沿いの自販機です。風が変わったので止まり、そのまま十分くらい橋を見ていました。"],["taku","工具店の古い看板。閉店後でしたが、次の休みに戻って小さなレンチを買いました。"]]],
  ["morningStart","morningRun","sora","走り出すまでの手順","朝に外へ出るまで、選ぶことを減らす工夫を共有してください。",[["mayu","前日に靴下まで玄関近くへ置きます。朝に探す物がないと、そのまま外へ出られました。"],["emma","旅先では距離を決めません。靴を履いて角まで行き、体が動けば続けます。"]]],
  ["horrorAfter","horror","aki","見終わった後まで残った怖さ","驚く場面ではなく、日常へ戻ってから思い出した場面を話してください。",[["aki","台所の音だけが続く映画です。翌朝に同じ音がして、場面の外側まで残っていたと気づきました。"],["aki","字幕のない無言の場面。帰りの電車で人の視線が気になり、そこから怖くなりました。"]]],
  ["soloCinemaExit","soloCinema","kei","映画館を出た後に歩きたくなった作品","映画の内容と、帰り道で選んだ行動を話してください。",[["sora","小さな町を歩く映画です。すぐ電車へ乗らず、二駅分だけ商店街を歩きました。"],["shun","夜の街が長く映る作品。深夜上映の後、明るい大通りではなく裏道を選びました。"]]],
  ["makersFinish","makers","mio","完成と決める最後の確認","作り続けずに手を止めるため、最後に何を見ていますか。",[["mio","離れて全体の輪郭を見ます。細部より、最初に決めた形が残っていれば終わりにします。"],["taku","使う動作を一回通します。道具なら持って戻せるところまで確認して完成です。"]]],
  ["englishReturn","english","rina","学び直しで先に捨てたこと","続けるために、やらないと決めた勉強法はありますか。",[["emma","毎日同じ時間に座ることです。移動が多いので、短くても場所ごとに続ける方へ変えました。"],["rina","単語帳を最初から完璧にすること。通勤中に出会った言葉だけ残しています。"]]],
  ["driveNoMap","drive","kei","地図を閉じて走った道","目的地を急がず、曲がってみてよかった道を話してください。",[["ren","川沿いの旧道です。信号が少なく、途中の小さな食堂までゆっくり走れました。"],["taku","山へ入る手前の農道。工具店を探していたのに、古い橋を見つけました。"]]],
  ["retroSound","retroGame","shun","画面より先に思い出すゲーム音","起動音や効果音から戻ってくる記憶を話してください。",[["sora","セーブ画面の短い音です。遊んだ内容より、夜に終わらせる時の部屋を思い出します。"],["taku","カセットを差して電源を入れた直後の音。接触が悪い時の直し方まで一緒に覚えています。"]]],
  ["shibaWalk","shiba","nagi","散歩の道を犬が変えた日","いつもの道から外れた理由と、その先で見つけたものを話してください。",[["taku","工事の音を嫌がって一本裏へ入りました。そこに小さな修理工場があり、後で仕事でも訪ねました。"],["nagi","雨上がりに水たまりを避け続け、古い階段へ着きました。犬はすぐ戻りましたが景色を覚えています。"]]],
  ["shimokitaMorning","shimokita","yuu","朝の下北沢で好きな時間","店が開く前の街で見えるものを話してください。",[["mio","搬入の箱と看板の裏側です。夜の見え方と違い、街が組み立てられる途中に見えます。"],["yuu","古着屋のシャッターを拭く時間。昼より人が少なく、店同士の距離がよく分かります。"]]],
  ["suburbanWalk","suburban","aki","用事のない散歩でたどり着く場所","郊外で繰り返し歩いてしまう道や場所を教えてください。",[["mayu","畑と住宅の境目の道です。季節で売られる野菜が変わるので、用事がなくても見に行きます。"],["emma","駅から離れた小さな川。旅から戻った後に歩くと、生活の速さへ戻れます。"]]],
  ["salesRest","salesBreak","yuu","立ったままでも休める場所","外回りや販売の途中で短く息を整えられる場所を話してください。",[["kei","立体駐車場の端です。次の訪問先までの道を確認してから車へ戻ります。"],["ren","店の裏の搬入口。五分だけ水を飲み、音が少ない場所へ移ると切り替わります。"]]],
  ["boardExplain","boardGame","mayu","説明が短くても盛り上がったゲーム","初参加の人が途中から入れた理由を話してください。",[["aki","絵だけで選べるカードゲームです。説明より一回見せる方が早く、負けても笑えました。"],["rina","言葉を作るゲーム。知らない単語が出ても質問が会話になり、止まりませんでした。"]]],
  ["koenjiLate","koenji","sora","夜遅くても人の気配がある道","騒がしすぎず、一人で歩ける通りについて話してください。",[["ren","商店街から一本外れた道。店の明かりが少し残り、バイクでも速度を落として走ります。"],["shun","コインランドリーの前です。夜中に作業を切って歩くと、同じ時間に起きている人が見えます。"]]],
  ["freelanceStop","freelance","emma","仕事を終わらせる小さな合図","勤務時間が決まらない日に、終了を作る方法を話してください。",[["mio","机の写真を一枚撮ります。作業途中でも状態が残るので、そこで手を止められます。"],["shun","明日の最初の一行だけメモして画面を閉じます。夜型でも区切りが作れました。"]]],
  ["photoPeople","photo","yuu","人を写さずに人の気配を撮る","街で人の生活を感じた物や跡を教えてください。",[["mio","ライブ後の床に残ったテープです。誰も写っていなくても、立っていた位置が見えました。"],["emma","旅館の玄関に並ぶ濡れた傘。到着した時間の違いが一本ずつに出ていました。"]]],
  ["hikingFood","hiking","nagi","山で食べる簡単な昼ごはん","荷物を重くせず、休憩中に食べやすかった物を話してください。",[["shun","小さなパンを二つ。夜型で朝が遅くても、途中で分けて食べられました。"],["nagi","塩むすびと温かいお茶。景色を見る時間を減らさずに済みます。"]]],
  ["festivalUnknown","festival","rina","知らない出演者を見て残った瞬間","予定になかったステージへ足を止めた理由を話してください。",[["mio","遠くから聞こえたドラムの間です。音数が少なく、会場を横切る途中で戻りました。"],["yuu","衣装の色が夕方の照明に合っていました。曲を知らなくても最後まで見ました。"]]],
  ["movieSound","movie","sora","音で先に思い出す映画","映像より先に音楽や環境音が浮かぶ作品を話してください。",[["nagi","雨音が長く続く映画です。台詞より窓の外の暗さを一緒に思い出します。"],["kei","車内の音が多い作品。営業車で同じウインカー音を聞くと場面が戻ります。"]]],
  ["chineseQuiet","chinese","taku","一人で入りやすかった店の作り","席や注文の仕方から、一人で落ち着けた理由を話してください。",[["ren","短いカウンターと壁のメニュー。頼むまでが早く、食べたらすぐ出られる店です。"],["yuu","荷物籠が足元に置いてある店。仕事帰りの一人客を普段から見ている感じがしました。"]]],
  ["remoteSound","remoteWork","shun","家で仕事を始める時の音","集中の入口にしている音や、消している音を教えてください。",[["sora","湯を沸かす音が止まったら始めます。音楽を流すより、部屋が静かになる方が合います。"],["emma","旅先では同じ短い環境音を流します。机が変わっても開始の手順だけ揃えられます。"]]],
  ["morningRain","morningRun","emma","雨の日は走る代わりに何をする？","習慣を切らさず、無理もしない代替行動を話してください。",[["sora","靴だけ履いて近所を一周します。走らなくても外へ出る手順は残します。"],["mayu","玄関で軽く伸ばしてから、屋根のある商店街まで歩きます。買い物も一緒に済ませます。"]]],
  ["cafeNoPhone","cafe","nagi","スマホを見ずに過ごせた店","手持ち無沙汰にならなかった理由を、店内の様子と一緒に話してください。",[["rina","本棚の近くの席です。読み終えたら背表紙を眺めるだけで、次の電車まで過ごせました。"],["yuu","窓から店の搬入が見える喫茶店。街の動きがあるので画面を開かずに済みました。"]]],
  ["localNew","localShop","emma","旅先で二度目に訪ねた店","観光地ではなく、また入りたくなった地域の店を話してください。",[["mayu","小さな惣菜店です。二日目は昨日と違う煮物が並び、生活の店だと分かりました。"],["kei","駅裏の喫茶店。出発前にもう一度寄ると、店員さんが道の混み方を教えてくれました。"]]],
  ["diyWrong","diy","mio","作り直してよくなった箇所","最初の失敗と、二度目に変えた手順を話してください。",[["aki","棚板の幅を測り違えました。次は紙で型を作ってから切り、余りも減りました。"],["taku","ネジを強く締めすぎました。対角に少しずつ締めると、部品がずれなくなりました。"]]],
  ["soloCinemaSmall","soloCinema","rina","小さな映画館で残った帰り道","作品だけでなく、上映後の町まで覚えている経験を話してください。",[["kei","商店街の二階にある劇場です。終映後に店が閉まり、駅までの道が急に静かになりました。"],["sora","短編特集を見た夜。外へ出た時に車の音が戻り、映画との境目を覚えています。"]]],
  ["retroTogether","retroGame","taku","一人用なのに誰かと遊んだ記憶","交代や見物を含めて、一緒に遊んだ方法を話してください。",[["shun","難しい場面だけ交代していました。待っている間に次の手順を考えるのもゲームでした。"],["sora","横で地図を紙に書いてもらいました。画面の外に記録が増えるのが面白かったです。"]]],
  ["driveFood","drive","ren","遠回りして寄った食堂","道の途中で予定を変えた理由と、店の様子を話してください。",[["kei","駐車場に営業車が多い食堂です。回転が早そうで入り、定食もすぐ出てきました。"],["taku","古い看板が見えて一本戻りました。工具箱を積んだままでも停めやすい広さでした。"]]],
  ["sentoRoutine","sento","taku","銭湯から帰るまでの決まった順番","入浴後に寄る場所や、家へ戻るまでの習慣を話してください。",[["yuu","商店街を一周してから帰ります。冷えすぎず、閉店後の店も見られます。"],["taku","水を買ってバイクを少し押します。すぐ走り出すより、道具を片付ける頭へ戻れます。"]]],
  ["gardenWinter","garden","mayu","何も育てない時期にしていること","収穫がない季節の手入れや準備を話してください。",[["aki","土を全部替えず、枯れた根だけ取ります。春に始める作業を減らせました。"],["mayu","鉢と道具の置き場所を直します。使わない季節に動線を作ると、次が楽です。"]]],
  ["englishListen","english","emma","意味が全部分からなくても聞けたもの","学習らしくなく続いた音声や場面を話してください。",[["rina","通勤中の短いインタビューです。分からない言葉より、話す速さの違いを聞いていました。"],["emma","地方の駅で流れた英語案内。日本語との順番を比べると、旅の途中でも耳に残りました。"]]],
  ["commuteNoTask","commute","kei","何もしない通勤時間を作った日","情報を入れずに移動して変わったことを話してください。",[["rina","本も開かず各駅停車に乗りました。窓の明るさが変わるだけで、考えが一度止まりました。"],["kei","営業先から直帰した日です。電話をしまい、乗り換えまで何も決めずに歩きました。"]]],
  ["boardTravel","boardGame","emma","旅へ持って行けた小さなゲーム","荷物にならず、初対面でも遊べた物を教えてください。",[["mayu","カードだけの協力ゲームです。勝敗より相談が中心で、説明も短く済みました。"],["rina","言葉を並べる小箱のゲーム。知らない土地の名前を混ぜると会話が増えました。"]]],
  ["freelanceMove","freelance","shun","作業場所を変える判断","家で進まない時、どこまで粘ってから移動しますか。",[["emma","同じ行を三度読み直したら移動します。旅先なら駅の待合室でも十分です。"],["mio","手を動かす工程と考える工程を分けます。後者だけ喫茶店へ持っていきます。"]]]
];
const topicsById = Object.fromEntries(contentSeed.map(([id,communityId,authorId,title,body]) => [id,{id,communityId,authorId,title,body}]));
const statementsById = Object.fromEntries(contentSeed.flatMap((topic,topicIndex) =>
  topic[5].map(([authorId,body],replyIndex) => {
    const id = `st_${topic[0]}_${replyIndex + 1}`;
    return [id,{id,topicId:topic[0],authorId,body,createdAt:`7月${30 - (topicIndex % 9)}日 ${String(9 + (topicIndex % 13)).padStart(2,"0")}:${replyIndex ? "42" : "16"}`}];
  })
));

const allCategories = ["文化","スポーツ","地域","食","仕事","生活","ゲーム","旅行"];
const appState = {
  currentViewerId: "sora",
  currentScreen: "home",
  currentParams: {},
  currentUiState: {},
  history: [],
  footprints: [
    { viewerId:"ren", viewedProfileId:"sora", latestVisitedAt:"7月27日 16:40" },
    { viewerId:"mayu", viewedProfileId:"sora", latestVisitedAt:"7月27日 14:15" },
    { viewerId:"yuu", viewedProfileId:"sora", latestVisitedAt:"7月28日 19:05" },
    { viewerId:"emma", viewedProfileId:"nagi", latestVisitedAt:"7月28日 17:30" },
    { viewerId:"rina", viewedProfileId:"mio", latestVisitedAt:"7月28日 12:20" },
    { viewerId:"taku", viewedProfileId:"ren", latestVisitedAt:"7月27日 21:10" }
  ]
};
const app = document.getElementById("app");
const toast = document.getElementById("toast");
let toastTimer = null;

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
  if (!getProfile(viewedProfileId) || viewedProfileId === appState.currentViewerId) return false;
  const existing = appState.footprints.find(item =>
    item.viewerId === appState.currentViewerId && item.viewedProfileId === viewedProfileId
  );
  const latestVisitedAt = new Intl.DateTimeFormat("ja-JP", {
    month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit"
  }).format(new Date()).replace("/", "月").replace(" ", "日 ");
  if (existing) {
    existing.latestVisitedAt = latestVisitedAt;
    return false;
  }
  appState.footprints.push({ viewerId:appState.currentViewerId, viewedProfileId, latestVisitedAt });
  return true;
}
function showToast(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function renderBackHeader() {
  if (!appState.history.length) return "";
  const label = routeLabel(appState.history[appState.history.length - 1]);
  return `<header class="back-header"><button class="back-button" data-action="back">← ${safe(truncate(label))}</button></header>`;
}
function renderPersonMini(profileId, hint = "プロフィールを見る", options = {}) {
  const profile = getProfile(profileId);
  if (!profile) return "";
  if (options.static) {
    return `<div class="person-mini person-mini--static">
      <span class="avatar" aria-hidden="true">${safe(profile.name.slice(0,1))}</span>
      <span class="person-mini__name">${safe(profile.name)}</span>
    </div>`;
  }
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
function renderHomeCommunityItem(communityId) {
  const community = getCommunity(communityId);
  if (!community) return "";
  return `<button class="home-community-card" data-action="open-community" data-community-id="${safe(community.id)}">
    <span class="home-community-name">${safe(community.name)}</span>
    <span class="home-community-description">${safe(community.description)}</span>
  </button>`;
}
function renderTopicItem(topicId, options = {}) {
  const topic = getTopic(topicId);
  if (!topic) return "";
  return `<article class="topic-card">
    <button class="topic-main" data-action="open-topic" data-topic-id="${safe(topic.id)}">
      <span class="item-title">${safe(topic.title)}</span>
      <span class="excerpt">${safe(topic.body)}</span>
    </button>
    ${renderPersonMini(topic.authorId, "プロフィールを見る", { static:options.staticAuthor === true })}
  </article>`;
}
function renderStatementItem(statementId, options = {}) {
  const statement = getStatement(statementId);
  if (!statement) return "";
  return `<article class="statement-card">
    ${renderPersonMini(statement.authorId, "プロフィールを見る", { static:options.staticAuthor === true })}
    <button class="statement-main" data-action="open-statement" data-statement-id="${safe(statement.id)}">
      <span class="excerpt">${safe(statement.body)}</span>
      <span class="read-hint">発言を読む ＞</span>
    </button>
  </article>`;
}
function renderProfileTopicItem(topicId) {
  const topic = getTopic(topicId);
  if (!topic) return "";
  return `<button class="profile-topic-card" data-action="open-topic" data-topic-id="${safe(topic.id)}">
    <span class="profile-topic-title">${safe(topic.title)}</span>
    <span class="profile-topic-excerpt">${safe(topic.body)}</span>
  </button>`;
}
function renderProfileStatementItem(statementId) {
  const statement = getStatement(statementId);
  if (!statement) return "";
  const topic = getTopic(statement.topicId);
  return `<button class="profile-statement-card" data-action="open-statement" data-statement-id="${safe(statement.id)}">
    <span class="profile-statement-topic">${safe(topic?.title || "元のトピック")}</span>
    <span class="profile-statement-body">${safe(statement.body)}</span>
  </button>`;
}
function renderEmptyState(text) {
  return `<div class="empty-state">${safe(text)}</div>`;
}
function renderContextBanner(profileId, active = false) {
  const profile = getProfile(profileId);
  if (!profile) return "";
  if (active) {
    return `<aside class="context-banner">
      <p>${safe(profile.name)}のトピックと発言</p>
      <button class="plain-link" data-action="clear-activity-filter">コミュニティ全体を見る ＞</button>
    </aside>`;
  }
  return `<aside class="context-banner">
    <p>${safe(profile.name)}も参加しています</p>
    <button class="plain-link" data-action="show-profile-activity" data-profile-id="${safe(profile.id)}">${safe(profile.name)}のトピックと発言を見る ＞</button>
  </aside>`;
}

function renderHome() {
  const viewer = getProfile(appState.currentViewerId);
  if (!viewer) return renderError("現在の利用者が見つかりません。");
  const footprints = appState.footprints.filter(item => item.viewedProfileId === viewer.id);
  const communityItems = viewer.communityIds.slice(0,4).map(id =>
    renderHomeCommunityItem(id)
  ).join("");
  const communitySection = viewer.communityIds.length
    ? `<div class="home-community-list">${communityItems}</div><button class="text-link" data-action="open-profile-communities" data-profile-id="${safe(viewer.id)}">参加コミュニティ 全${viewer.communityIds.length}件を見る ＞</button>`
    : `${renderEmptyState("参加コミュニティはありません。")}<button class="text-link" data-action="open-community-search">コミュニティを探す ＞</button>`;
  const viewerOptions = Object.values(profilesById).map(profile =>
    `<option value="${safe(profile.id)}" ${profile.id === viewer.id ? "selected" : ""}>${safe(profile.name)}</option>`
  ).join("");
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
      <label class="viewer-select-label" for="viewer-select">視点を切り替える</label>
      <select id="viewer-select" class="viewer-select" data-role="viewer-select">${viewerOptions}</select>
    </aside>
  </section>`;
}

function renderProfileDetail() {
  const profile = getProfile(appState.currentParams.profileId);
  if (!profile) return renderError("プロフィールが見つかりません。");
  const footprintCreated = recordFootprint(profile.id);
  if (footprintCreated) window.setTimeout(() => showToast("足あとがつきました"), 0);
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
    <div class="profile-topic-list">${topics.length ? topics.map(t => renderProfileTopicItem(t.id)).join("") : renderEmptyState("立てたトピックはありません。")}</div>
    <h2 class="section-title">残した発言</h2>
    <div class="profile-statement-list">${statements.length ? statements.map(s => renderProfileStatementItem(s.id)).join("") : renderEmptyState("残した発言はありません。")}</div>
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
      ${noActivity ? renderEmptyState(`${filterProfile.name}はこのコミュニティで、まだトピックや発言を残していません。`) : `
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

app.addEventListener("change", event => {
  if (!event.target.matches('[data-role="viewer-select"]')) return;
  switchViewer(event.target.value);
});

renderApp();

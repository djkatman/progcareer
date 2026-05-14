// アフィリエイトリンク一元管理
// 提携承認後: status を 'active' に変更し、affiliate_url にトラッキングURLを追加する
//
// 新しいカテゴリを追加する場合:
//   1. 下部に `export const [カテゴリ名]: AffiliateItem[] = [...]` を追加
//   2. 記事・ページで import して getUrl() で取得するだけ

export type AffiliateItem = {
  id: string;
  name: string;
  asp: string;           // 提携ASP（もしもアフィリエイト / A8.net 等）
  status: 'pending' | 'active'; // pending=未提携 / active=提携済み
  url: string;           // 公式サイトURL
  affiliate_url?: string; // アフィリエイトトラッキングURL（提携済みのみ設定）
  note?: string;         // 報酬単価・条件など任意メモ
};
// プログラミングスクール
export const schools: AffiliateItem[] = [
  {
    id: 'dmm-webcamp',
    name: 'SHIFT TERAS CAMPUS（旧DMM WEBCAMP）',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://web-camp.io/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557871&p_id=1000&pc_id=1380&pl_id=17483',
  },
  {
    id: 'techcamp',
    name: 'テックキャンプ',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://tech-camp.in/',
  },
  {
    id: 'runteq',
    name: 'RUNTEQ',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://runteq.jp/',
  },
  {
    id: 'techacademy',
    name: 'TechAcademy',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://techacademy.jp/',
  },
  {
    id: 'samurai-engineer',
    name: '侍エンジニア',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://sejuku.net/',
  },
  {
    id: 'programmer-college',
    name: 'プログラマカレッジ',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://programmercollege.jp/',
  },
  {
    id: 'zeroplus',
    name: 'ZeroPlus',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://zeroplus.co.jp/',
  },
  {
    id: 'fullme',
    name: 'オンラインデザインスクール「Fullme」',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://fullme.jp/lp/consultation?rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558640&p_id=5314&pc_id=14492&pl_id=70134',
  },
  {
    id: 'datasciencebootcamp',
    name: 'データサイエンスブートキャンプ',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://l.datasciencebootcamp.net',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558642&p_id=5289&pc_id=14386&pl_id=70065',
  },
  {
    id: 'dezasuta',
    name: 'デザスタ',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://dezasuta.com/lp/lp',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558609&p_id=4263&pc_id=10861&pl_id=58096',
  },
  {
    id: 'toukei-lab',
    name: 'スタアカ',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://toukei-lab.com/achademy/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557849&p_id=3953&pc_id=9863&pl_id=54679',
  },
  {
    id: '1st-step',
    name: '1st step',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://1st-step.jp/?rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558653&p_id=3728&pc_id=9129&pl_id=54652',
  },
  {
    id: 'daily-trial',
    name: 'デイトラ',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://www.daily-trial.com/?rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558653&p_id=3728&pc_id=9129&pl_id=54652',
  },
  {
    id: 'wonderful-wife',
    name: 'ワンダフルクラス',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://wonderful-wife.net/study/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557859&p_id=3327&pc_id=7897&pl_id=47361',
  },
  {
    id: 'techgym',
    name: 'テックジム',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://techgym.jp/moshimo/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557860&p_id=3404&pc_id=8110&pl_id=71610',
  },
  {
    id: 'dhw',
    name: 'デジハリ・オンラインスクール',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://online.dhw.co.jp/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557946&p_id=3193&pc_id=7476&pl_id=41799',
  },
  {
    id: 'tech-sta',
    name: 'TECH STADIUM',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://tech-sta.com/kiwami/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557861&p_id=2857&pc_id=6532&pl_id=42830',
  },
  {
    id: 'skill-hacks',
    name: 'ProgrammingHacks',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://skill-hacks.co.jp/skill-hacks/',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558656&p_id=2402&pc_id=5229&pl_id=39356',
  },
  {
    id: 'pyq',
    name: 'オンライン学習サービスPyQ',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://pyq.jp/?rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557872&p_id=1166&pc_id=1793&pl_id=38662',
  },
  {
    id: 'dep',
    name: 'SHIFT TERAS CAMPUSプログラミングエンジニア転職コース',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://dep.tc/link?mid=6508536706105344&ad=2norHKSrjsp&rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557869&p_id=1363&pc_id=2297&pl_id=38740',
  },
  {
    id: 'webcoach',
    name: 'WEBCOACH',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://www.webcoach.jp/moshimo',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5558643&p_id=5266&pc_id=14299&pl_id=68957',
  },
];
// 転職エージェント
export const agents: AffiliateItem[] = [
  {
    id: 'levatech',
    name: 'レバテックキャリア',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://career.levtech.jp/',
  },
  {
    id: 'uzuz-it',
    name: 'ウズキャリIT',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://uzuz-it.jp/',
  },
  {
    id: 'mynavi-it',
    name: 'マイナビIT AGENT',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://mynavi-agent.jp/it/',
  },
  {
    id: 'geekly',
    name: 'Geekly',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://www.geekly.co.jp/',
  },
  {
    id: 'doda',
    name: 'doda',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://doda.jp/',
  },
  {
    id: 'tenshoku-draft',
    name: '転職ドラフト',
    asp: 'もしもアフィリエイト',
    status: 'pending',
    url: 'https://job-draft.jp/',
  },
];
// フリーランス案件検索
export const freelance: AffiliateItem[] = [
  {
    id: 'freelance-board',
    name: 'フリーランスボード',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://freelance-board.com/?utm_source=moshimo&utm_medium=affi&utm_campaign=new_text&utm_content=text1',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557930&p_id=6820&pc_id=19517&pl_id=86846',
  },
  {
    id: 'it-kyujin',
    name: 'IT求人ナビ フリーランス',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://it-kyujin.jp/?type=text&affiliate=moshimo&rd_code=Sample123',
    affiliate_url: 'https://af.moshimo.com/af/c/click?a_id=5557947&p_id=3026&pc_id=6979&pl_id=51654',
  },
];
// ────────────────────────────────────────────
// その他カテゴリ（提携が取れたら追加していく）
// ────────────────────────────────────────────

// 例: クラウドソーシング
// export const crowdwork: AffiliateItem[] = [
//   { id: 'crowdworks', name: 'クラウドワークス', asp: 'もしもアフィリエイト', status: 'pending', url: 'https://crowdworks.jp/' },
//   { id: 'lancers',    name: 'ランサーズ',       asp: 'もしもアフィリエイト', status: 'pending', url: 'https://www.lancers.jp/' },
// ];

// 例: オンライン学習サービス
// export const elearning: AffiliateItem[] = [
//   { id: 'udemy', name: 'Udemy', asp: 'もしもアフィリエイト', status: 'pending', url: 'https://www.udemy.com/' },
// ];

// ────────────────────────────────────────────
// ヘルパー関数
// ────────────────────────────────────────────

// IDでリンクURLを取得（active なら affiliate_url、pending なら url、未登録は '#'）
export function getUrl(list: AffiliateItem[], id: string): string {
  const item = list.find(item => item.id === id);
  if (!item) return '#';
  return item.affiliate_url ?? item.url;
}

// カテゴリ全体から名前でリンクURLを取得（記事内CTAで使いやすい）
export function getUrlByName(list: AffiliateItem[], name: string): string {
  const item = list.find(item => item.name === name);
  if (!item) return '#';
  return item.affiliate_url ?? item.url;
}

// IDで公式サイトURLを取得（nofollow リンク・説明文用）
export function getOfficialUrl(list: AffiliateItem[], id: string): string {
  return list.find(item => item.id === id)?.url ?? '#';
}

// 提携済み一覧を取得
export function getActive(list: AffiliateItem[]): AffiliateItem[] {
  return list.filter(item => item.status === 'active');
}

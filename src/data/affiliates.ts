// アフィリエイトリンク一元管理
// 提携承認後: status を 'active' に変更し、url をトラッキングURLに差し替える
//
// 新しいカテゴリを追加する場合:
//   1. 下部に `export const [カテゴリ名]: AffiliateItem[] = [...]` を追加
//   2. 記事・ページで import して getUrl() で取得するだけ

export type AffiliateItem = {
  id: string;
  name: string;
  asp: string;       // 提携ASP（もしもアフィリエイト / A8.net 等）
  status: 'pending' | 'active'; // pending=未提携 / active=提携済み
  url: string;       // アフィリエイトURL（未提携時は公式サイトURL）
  note?: string;     // 報酬単価・条件など任意メモ
};

export const schools: AffiliateItem[] = [
  {
    id: 'dmm-webcamp',
    name: 'SHIFT TERAS CAMPUS（旧DMM WEBCAMP）',
    asp: 'もしもアフィリエイト',
    status: 'active',
    url: 'https://af.moshimo.com/af/c/click?a_id=5557871&p_id=1000&pc_id=1380&pl_id=17483',
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
];

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

// IDでURLを取得（未登録・未提携は '#' を返す）
export function getUrl(list: AffiliateItem[], id: string): string {
  return list.find(item => item.id === id)?.url ?? '#';
}

// カテゴリ全体から名前でURLを取得（記事内CTAで使いやすい）
export function getUrlByName(list: AffiliateItem[], name: string): string {
  return list.find(item => item.name === name)?.url ?? '#';
}

// 提携済み一覧を取得
export function getActive(list: AffiliateItem[]): AffiliateItem[] {
  return list.filter(item => item.status === 'active');
}

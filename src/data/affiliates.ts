// アフィリエイトリンク一元管理
// もしもアフィリエイト提携承認後、url を実際のトラッキングURLに差し替える

export type AffiliateItem = {
  id: string;
  name: string;
  asp: string;       // 提携ASP
  status: 'pending' | 'active'; // pending=未提携 / active=提携済み
  url: string;       // アフィリエイトURL（未提携時は公式サイトURL）
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

// IDでリンクを取得するヘルパー
export function getUrl(list: AffiliateItem[], id: string): string {
  return list.find(item => item.id === id)?.url ?? '#';
}

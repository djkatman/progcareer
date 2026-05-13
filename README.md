# ProgCareer（プログキャリア）

未経験からIT転職を目指す人向けのプログラミングスクール・転職エージェント比較メディア。

- **URL:** https://progcareer.com
- **GitHub:** https://github.com/djkatman/progcareer
- **デプロイ:** Cloudflare Pages（mainブランチ自動デプロイ）

## 技術構成

- フレームワーク: Astro 6.x
- Node.js: v24
- ホスティング: Cloudflare Pages
- お問い合わせWorker: Cloudflare Workers + Resend

## 開発コマンド

```sh
# 依存パッケージのインストール
source ~/.nvm/nvm.sh && nvm use 24
npm install

# ローカル開発サーバー起動（http://localhost:4321）
npm run dev

# 本番ビルド
npm run build

# Workerデプロイ
cd workers/contact-form && npx wrangler deploy
```

## ページ構成

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/school-ranking/` | プログラミングスクール比較 |
| `/agent-ranking/` | IT転職エージェント比較 |
| `/beginner-guide/` | 未経験ガイド |
| `/faq/` | よくある質問 |
| `/about/` | 運営者情報 |
| `/contact/` | お問い合わせ |
| `/privacy-policy/` | プライバシーポリシー |
| `/disclaimer/` | 免責事項 |

## アフィリエイトリンク管理

`src/data/affiliates.ts` で一元管理。提携承認後は `url` と `status: 'active'` を更新するだけで全ページに反映される。

## デザインガイド

`DESIGN.md` 参照。

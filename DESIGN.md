# ProgCareer デザインガイドライン

## デザイン方針

**スタイリッシュ・モダン**。テック系サービスらしい洗練された信頼感。写真ベースで、イラスト・絵文字は一切使用しない。

---

## カラーシステム

| CSS変数 | 値 | 用途 |
|---|---|---|
| `--color-primary` | `#0F172A` | メインテキスト・ほぼ黒 |
| `--color-primary-mid` | `#1E40AF` | ブルー系アクセント |
| `--color-accent` | `#3B82F6` | CTAボタン・リンク・強調 |
| `--color-accent-vivid` | `#60A5FA` | ホバー時 |
| `--color-highlight` | `#F59E0B` | 1位バッジ・特別強調（アンバー） |
| `--color-bg` | `#F8FAFC` | ページ背景 |
| `--color-surface` | `#FFFFFF` | カード・パネル背景 |
| `--color-border` | `#E2E8F0` | 罫線・枠線 |
| `--color-text` | `#0F172A` | 本文テキスト |
| `--color-text-muted` | `#64748B` | サブテキスト・補足 |

### ランキングバッジ色
| 順位 | 色 | 値 |
|---|---|---|
| 1位 | ゴールド | `#F59E0B` |
| 2位 | シルバー | `#94A3B8` |
| 3位 | ブロンズ | `#D97706` |

---

## タイポグラフィ

- **フォント**: Noto Sans JP（Google Fonts）/ フォールバック: sans-serif
- **ウェイト**: 400（本文）/ 500（ナビ・ラベル）/ 700（見出し・ボタン）

| 要素 | サイズ | ウェイト |
|---|---|---|
| H1 | `3rem`（SP: `clamp(1.8rem, 5vw, 3rem)`） | 700 |
| H2（section-title） | `1.75rem` | 700 |
| H3 | `1.1rem` | 700 |
| 本文 | `1rem` / `line-height: 1.7` | 400 |
| サブテキスト | `0.875rem` | 400 |
| 最小フォント | `14px` | — |

---

## スペーシング

- セクション padding: `100px 0`（SP: `64px 0`）
- コンテナ最大幅: `1100px`（`--max-width`）
- カード padding: `24px`
- ボタン padding: `14px 28px`
- タッチターゲット最小サイズ: `44px`

---

## コンポーネント仕様

### ヘッダー
- 背景: `#FFFFFF` / 下線: `1px solid var(--color-border)`
- sticky（スクロール追従）/ z-index: 100
- 高さ: `64px`
- ロゴ: `ProgCareer`（青・太字）＋サブテキスト「未経験IT転職ナビ」（グレー・細字）
- ナビリンク: `0.9rem` / ホバーで青色に変化

### PR表記バナー
- 背景: `#fef9c3`（薄い黄）/ 下線: `1px solid #fde68a`
- テキスト: `0.75rem` / 中央揃え / `color: #92400e`
- ヘッダー直上に固定表示

### ボタン
| 種類 | 背景 | テキスト | 用途 |
|---|---|---|---|
| `.btn-primary` | `#3B82F6` | `#FFFFFF` | メインCTA |
| `.btn-outline` | 透明 | `#FFFFFF` | ヒーロー内サブCTA（白枠） |
| `.btn-outline-dark` | 透明 | `#3B82F6` | 白背景上のサブCTA（青枠） |
- border-radius: `var(--radius)` = `8px`
- font-weight: 700 / transition: 0.2s

### ヒーローセクション
- 写真（`/images/hero.jpg`）を全幅背景表示
- オーバーレイ: `rgba(15, 23, 42, 0.72)`
- テキストは白・左揃え
- 統計バー: 「調査スクール数 100+」「掲載エージェント 30+」「月間読者 5万人+」を横並び
  - SP時: 2×2グリッド

### ランキングカード
- 背景: `#FFFFFF` / border: `1px solid var(--color-border)`
- border-radius: `8px` / box-shadow: `0 1px 3px rgba(0,0,0,0.1)`
- **1位カード**: 左に `3px solid #F59E0B` のアクセントボーダー
- レイアウト（PC）: `[バッジ] [本文] [CTAボタン]` 横並び
- レイアウト（SP）: 縦積み、CTAボタンはカード下部
- タグ（特徴）: pill型 / 背景 `#EFF6FF` / テキスト `#1E40AF` / `0.78rem`

### セクションタイトル（.section-title）
- 左揃え
- `border-left: 3px solid var(--color-accent)`（青）
- `padding-left: 12px`
- 中央揃えは使用しない

### 特徴カード（.feature-card）
- 写真（16:10比率） → テキストの上下構成
- 背景: `#FFFFFF` / border: `1px solid var(--color-border)`
- overflow: hidden / border-radius: `8px`

### FAQアコーディオン
- 質問: 背景 `#EFF6FF` / 左 `4px solid var(--color-accent)` / テキスト青
- 回答: 白背景 / `0.9rem` / `line-height: 1.8`

### フッター
- 背景: `#0F172A`（ほぼ黒）/ テキスト: `#CBD5E1`
- 3カラムグリッド: ブランド説明 / コンテンツナビ / サイト情報
- SP時: 縦積み

---

## 写真・画像の使い方

### 基本方針
- 必ず実写写真を使用。イラスト・絵文字・アイコンフォント禁止。
- `public/images/` に配置。フォーマットは WebP（フォールバック JPEG）。
- `alt` テキストを必ず記述。

### 写真カテゴリ
| 用途 | 方針 | ファイル名 |
|---|---|---|
| ヒーロー | PCで作業するエンジニアの写真。暗めのオーバーレイで使用 | `hero.jpg` |
| スクール特徴 | 学習・勉強しているシーン | `feature-school.jpg` |
| 転職特徴 | オフィス・面接・チームのシーン | `feature-career.jpg` |
| ガイド特徴 | パソコンを使って調べているシーン | `feature-guide.jpg` |
| 記事サムネイル | テーマに合ったエンジニアリング系写真（16:9） | `article-*.jpg` |

### 素材出典
- [Unsplash](https://unsplash.com/) — 商用利用可・クレジット任意
- [Pexels](https://www.pexels.com/) — 商用利用可・クレジット任意
- ダウンロード後、WebP変換・圧縮してから配置する

---

## レスポンシブ対応

| ブレークポイント | 対象 |
|---|---|
| `max-width: 900px` | ヒーロー縦積み・写真非表示・グリッド解除 |
| `max-width: 768px` | ハンバーガーメニュー表示 |
| `max-width: 600px` | ランキングカード全縦積み |

---

## 禁止事項
- 絵文字の使用
- イラスト・アイコンフォント（Font Awesomeも含む）
- 中央揃えのセクションタイトル
- ライセンス不明の写真素材
- 1ページ内で3色以上のCTAボタン色を使う

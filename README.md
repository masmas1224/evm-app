# evm-app

EVM（Earned Value Management）開発進捗・工数管理システムです。

📌 このプロジェクトは現在進行中です。  
今後も機能追加や改善を行いながら、より実用的なアプリケーションを目指して開発を進めていきます。

メンバー１人１人が計画状況を把握していない状況全体の計画線を閲覧することによって工数も意識して作業をしてほしいという思いで作ってみようと思いました。

## 🔧 機能概要
予定

- タスクの実績入力（作業者）
- タスク追加（リーダー）
- グラフによる進捗の可視化（EVM風）
- フロント：React + TypeScript + Vite
- バックエンド：Laravel

## 📦 セットアップ手順（ローカル）

```bash
git clone https://github.com/masmas1224/evm-app.git
cd evm-app
composer install
npm install
cp .env.example .env
php artisan key:generate
npm run dev
php artisan serve

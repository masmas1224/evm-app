# evm-app

EVM（Earned Value Management）開発進捗・工数管理システムです。

## 🔧 機能概要

- タスクの実績入力（作業者）予定
- タスク追加（リーダー）予定
- グラフによる進捗の可視化（EVM風）予定
- フロント：React + TypeScript + Vite予定
- バックエンド：Laravel予定

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

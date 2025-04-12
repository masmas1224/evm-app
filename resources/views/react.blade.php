<!DOCTYPE html>
<html lang="ja">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <title>React</title>
    @vite('resources/js/app.tsx') <!-- React + TypeScript 用の読み込み -->
</head>
<body>
    <div id="app"></div> <!-- React アプリがここにレンダリングされる -->
</body>
</html>

# プロジェクト作成

npm create vite@latest  
作成したディレクトリに移動  
npm i -D vitest @testing-library/react @testing-library/user-event jsdom @testing-library/jest-dom

# 起動

npm run dev

# テスト実行

npx vitest
npx vitest run  
どちらでも可

## 例題 1：ボタンをクリックして文字が変わる

/lesson1

学びポイント：render / screen / userEvent.click  
HelloButton.jsx

## 例題 2：入力フォームにテキストを入れる

/lesson2

学びポイント：userEvent.type / getByLabelText  
NameForm.jsx
「ラベルから要素を取る」ことを学べる。テストの基本。

## 例題 3：条件分岐（ログイン状態）

/lesson3

学びポイント：コンポーネントの状態をテストする  
LoginMessage.jsx
「props で分岐をテストする」パターン。最もシンプルなユニットテスト。

## 例題 4：チェックボックスで ON/OFF

/lesson4

学びポイント：userEvent.click でチェック ON/OFF を確認する  
ToggleCheckbox.jsx

## 例題 5：リストをフィルタリング

/lesson5

学びポイント：userEvent.type とリスト表示のテスト  
FilterList.jsx

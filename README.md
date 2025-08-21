# プロジェクト作成

npm create vite@latest  
作成したディレクトリに移動  
npm i -D vitest @testing-library/react @testing-library/user-event jsdom @testing-library/jest-dom

## 例題 1：ボタンをクリックして文字が変わる

学びポイント：render / screen / userEvent.click  
HelloButton.jsx / Home.jsx

## 例題 2：入力フォームにテキストを入れる

学びポイント：userEvent.type / getByLabelText  
NameForm.jsx/ About.jsx  
「ラベルから要素を取る」ことを学べる。テストの基本。

## 例題 3：条件分岐（ログイン状態）

学びポイント：コンポーネントの状態をテストする  
LoginMessage.jsx / Login.jsx  
「props で分岐をテストする」パターン。最もシンプルなユニットテスト。

import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;
  
  //button生成
  const buttonArea = document.createElement("div");
  buttonArea.className = "button";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // completeButton.className = "complete-button";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //clickした削除ボタンのliを未完了のTODOから削除
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", () => {
    const deleteButtonArea = deleteButton.parentNode;
    const deleteDiv = deleteButtonArea.parentNode;
    const deleteTarget = deleteDiv.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    alert("削除しますか？");
  });

  buttonArea.appendChild(completeButton);
  buttonArea.appendChild(deleteButton);

  //divにpとbuttonAreaを子要素として追加
  div.appendChild(p);
  div.appendChild(buttonArea);

  //liにdivを子要素として追加
  li.appendChild(div);

  //ulを取得してliを子要素として追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

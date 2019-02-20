// モーダル要素の取得
const modal = document.getElementById('easyModal');

// 開くボタン取得
const openButton = document.getElementById('modalOpen');

// 閉じるボタン取得
const closeButton = document.getElementsByClassName('modalClose')[0];

// クリックで開くイベントリスナー
openButton.addEventListener('click', openModal);

// クリックで閉じるイベントリスナー
closeButton.addEventListener('click', closeModal);

// モーダル以外の場所クリックのイベントリスナー
addEventListener('click', outsideClick);

// モーダルオープンの関数
function openModal(){
  modal.style.display = 'block';
}

// モーダルを閉じる関数
function closeModal(){
  modal.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
function outsideClick(e){
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((btc) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (100 / btc.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

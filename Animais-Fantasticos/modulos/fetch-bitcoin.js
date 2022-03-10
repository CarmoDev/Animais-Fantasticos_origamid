export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((btc) => {
      const btcPrice = document.querySelector(".btc-preco");
      btcPrice.innerText = (100 / btc.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

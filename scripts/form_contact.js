function sendWhats(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const messsage = document.getElementById("messsage").value;
  const phone = "5538998439625";

  const text = `Olá! Me chamo ${name}, ${messsage}`;
  const msgFormat = encodeURIComponent(text);

  const url = `https://wa.me/${phone}?text=${msgFormat}`;

  window.open(url, "_blank");
}

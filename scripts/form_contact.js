function sendWhats(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const messsage = document.getElementById("messsage").value;
  const phone = "5538998439625";

  const text = `Olá! Me chamo ${name} ${surname}, ${messsage}`;
  const msgFormat = encodeURIComponent(text);

  const url = `https://wa.me/${phone}?text=${msgFormat}`;

  window.open(url, "_blank");
}

// _____________________________________________
// crescimento automatico da textarea
const textarea = document.querySelector(".textarea");

textarea.addEventListener("input", function() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

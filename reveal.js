window.sr = ScrollReveal({ reset: true });
//_________________________________________
//SCROLL CARDS
//_________________________________________
// sr.reveal(".cL", {
//   origin: "left",
//   duration: 1000,
//   distance: "20%",
//   viewOffset: {
//     top: 300, // Sume 100px antes de sair pelo topo
//     bottom: 300, // Sume 100px antes de sair pela base
//     left: 0,
//     right: 0,
//   },
// });

// sr.reveal(".cR", {
//   origin: "right",
//   duration: 1000,
//   distance: "20%",
//   delay: 250,
//   viewOffset: {
//     top: 300,
//     bottom: 300,
//   },
// });

//_________________________________________
//SECTION HOME
//_________________________________________

sr.reveal("#fotoDev", {
  origin: "top",
  duration: 1000,
  distance: "40%",
  viewOffset: {
    top: 200,
    bottom: 300,
  },
});
sr.reveal("#textHome", {
  origin: "right",
  duration: 1000,
  distance: "20%",
  delay: 500,
  viewOffset: {
    top: 300,
    bottom: 100,
  },
});
sr.reveal("#textHome > p", {
  origin: "right",
  duration: 1000,
  distance: "20%",
  delay: 500,
  viewOffset: {
    top: 300,
    bottom: 100,
  },
});

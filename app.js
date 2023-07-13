const txts = document.querySelectorAll(".text-side");
const txts1 = document.querySelectorAll(".txt");
const txts2 = document.querySelectorAll(".txt2");
const arrow = document.querySelectorAll(".arrow");

txts.forEach((txt, index) => {
  txt.addEventListener("click", () => {
    txts2.forEach((txt2, idx) => {
      if (index === idx) {
        txt2.classList.toggle("hidden");
      } else {
        txt2.classList.add("hidden");
      }
    });

    txts1.forEach((txt1, idx) => {
      if (index === idx) {
        txt1.classList.toggle("bold");
      } else {
        txt1.classList.remove("bold");
      }
    });

    arrow.forEach((arr, idx) => {
      if (index === idx) {
        arr.classList.toggle("rotate");
      } else {
        arr.classList.remove("rotate");
      }
    });
  });
});

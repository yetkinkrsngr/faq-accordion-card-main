const txts = document.querySelectorAll(".text-side");
const txts1 = document.querySelectorAll(".txt");
const txts2 = document.querySelectorAll(".txt2");
const arrow = document.querySelectorAll(".arrow");

txts.forEach((txt, index) => {
  txt.addEventListener("click", () => {
    txts2[index].classList.toggle("hidden");
    txts1[index].classList.toggle("bold");
    arrow[index].classList.toggle("rotate");
  });
});

const open = document.getElementById('btnOpen');
const close = document.getElementById('btnClose');
const container = document.getElementById('container');

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});
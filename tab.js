let film = document.getElementById("film");
let file1 = document.getElementById("file1");
let file2 = document.getElementById("file2");
let file3 = document.getElementById("file3");
let file4 = document.getElementById("file4");
let iframe1 = document.createElement("iframe");
srcUrl = "file1"; //tu pierwsze video
iframe1.src = srcUrl;
iframe1.id = "";
iframe1.style = 'width="auto" height="auto" frameborder="0" scrolling="no" autoplay="" overflow-y: hidden; overflow-x: hidden;';
iframe1.allowFullscreen = "true";
film.appendChild(iframe1);
// Tu źródło 1
const ChangeFile1 = () => {
  srcUrl = "1.html";
  iframe1.src = srcUrl;
};
file1.addEventListener("click", ChangeFile1); // Tu źródło 2
const ChangeFile2 = () => {
  srcUrl = "yt.html";
  iframe1.src = srcUrl;
};
file2.addEventListener("click", ChangeFile2); // Tu źródło 3
const ChangeFile3 = () => {
  srcUrl = "1.html";
  iframe1.src = srcUrl;
};
file3.addEventListener("click", ChangeFile3); // Tu źródło 4
const ChangeFile4 = () => {
  srcUrl = "1.html";
  iframe1.src = srcUrl;
};
file4.addEventListener("click", ChangeFile4);


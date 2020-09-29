//SELECT ELEMENTS
const head = document.querySelector("head");
const main = document.querySelector("main");

//CREATE EMPTY ELEMENTS
const cssLink = document.createElement("link");
const h1 = document.createElement("h1");
const p1 = document.createElement("p");
const h2 = document.createElement("h2");
const p2 = document.createElement("p2");
const img = document.createElement("img");
const p3 = document.createElement("p3");
const p4 = document.createElement("p4");
const a = document.createElement("a");

//CREATE TEXT NODES or ATTRIBUTES
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "styles.css");
const h1Content = document.createTextNode(
  "The best How I Met Your Mother episode (according to fans)"
);
const p1Content = document.createTextNode(
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…"
);
const h2Content = document.createTextNode("The Slap Bet (Season 2, Episode 9)");
const p2Content = document.createTextNode("IMDB Rating: 9.5");

img.setAttribute("src", "images/robin-sparkles.jpg");
img.setAttribute("alt", "Robin Sparkles");

const p3Content = document.createTextNode(
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased."
);
const p4Content = document.createTextNode(
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."
);

a.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);

const aContent = document.createTextNode("Source");

//INSERT ELEMENTS IN DOCUMENT & INSERT TEXTNODES IN ELEMENTS
head.appendChild(cssLink);
main.appendChild(h1).appendChild(h1Content);
main.appendChild(p1).appendChild(p1Content);
main.appendChild(h2).appendChild(h2Content);
main.appendChild(p2).appendChild(p2Content);
main.appendChild(img);
main.appendChild(p3).appendChild(p3Content);
main.appendChild(p4).appendChild(p4Content);
main.appendChild(a).appendChild(aContent);

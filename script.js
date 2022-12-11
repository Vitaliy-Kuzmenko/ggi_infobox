let snowmax = 35;
let snowcolor = [
  "#AAAACC",
  "#DDDDFF",
  "#CCCCDD",
  "#F3F3F3",
  "#F0FFFF",
  "#FFFFFF",
  "#EFF5FF",
];
let snowtype = ["Arial Black", "Arial Narrow", "Times", "Comic Sans MS"];
let snowletter = "*";
let sinkspeed = 0.6;
let snowmaxsize = 40;
let snowminsize = 8;
let snow = [];
let marginbottom;
let marginright;
let x_mv = [];
let crds = [];
let lftrght = [];

function randommaker(range) {
  rand = Math.floor(range * Math.random());
  return rand;
}

function initsnow() {
  marginbottom = document.documentElement.clientHeight; //window.innerHeight;

  marginright = document.documentElement.clientWidth; //window.innerWidth;

  let snowsizerange = snowmaxsize - snowminsize;
  for (i = 0; i <= snowmax; i++) {
    crds[i] = 0;
    lftrght[i] = Math.random() * 15;
    x_mv[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById("s" + i);
    snow[i].style.fontFamily = snowtype[randommaker(snowtype / length)];
    snow[i].size = randommaker(snowsizerange) + snowminsize;
    snow[i].style.fontSize = snow[i].size + "px";
    snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
    snow[i].sink = (sinkspeed * snow[i].size) / 5;
    snow[i].posx = randommaker(marginright - snow[i].size);
    snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
    snow[i].style.left = snow[i].posx + "px";
    snow[i].style.top = snow[i].posy + "px";
  }

  movesnow();
}
function movesnow() {
  for (i = 0; i <= snowmax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
    snow[i].style.top = snow[i].posy + "px";
    if (
      snow[i].posy >= marginbottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
    ) {
      snow[i].posx = randommaker(marginright - snow[i].size);
      snow[i].posy = 0;
    }
  }
  let timer = setTimeout("movesnow()", 25);
}

for (i = 0; i <= snowmax; i++) {
    const div = document.createElement("span");
    div.innerHTML = snowletter;
    div.id = "s"+i
    div.style = "position:absolute;top:-" + snowmaxsize + "px;" + snowletter
    document.body.appendChild(div);
}

document.addEventListener(document,initsnow());//почитать

const prikol = document.getElementById("prikol");

// const funk_pricol = (start, stop) => {
//   for (i = 0; i <= 5; i++) {
//     let temp_prikol = "s" + i;
//     console.log(temp_prikol);
//     const inp_prikol = document.getElementById(temp_prikol);
//     inp_prikol.innerHTML = '<img src="image/icons/ded_moroz.png" alt=""/>';
//   }
//   for (i = 5; i <= 8; i++) {
//     let temp_prikol = "s" + i;
//     console.log(temp_prikol);
//     const inp_prikol = document.getElementById(temp_prikol);
//     inp_prikol.innerHTML = '<img src="image/icons/olen80.png" alt=""/>';
//   }
// };

const funk_pricol = () => {
    for (i = 0, i2 = 8; i <= 5,i2 <= 10; i++,i2++) {
      
        let temp_prikol1 = "s" + i;
      console.log(temp_prikol1);
      const inp_prikol1 = document.getElementById(temp_prikol1);
      inp_prikol1.innerHTML = '<img src="image/icons/ded_moroz.png" alt=""/>';

      let temp_prikol2 = "s" + i2;
      console.log(temp_prikol2);
      const inp_prikol2 = document.getElementById(temp_prikol2);
      inp_prikol2.innerHTML = '<img src="image/icons/olen80.png" alt=""/>';
    }
  };

let check_click = 0;

const funk_pricol_run = () => {
  if (check_click >= 5) {
    funk_pricol();
    const inp_prikol1 = document.getElementById("prikol");
    inp_prikol1.innerHTML = '<img src="https://i.gifer.com/4s2P.gif" alt=""/>';
  }
};
prikol.onclick = () => {
  check_click++;
  console.log(check_click);
  funk_pricol_run();
};

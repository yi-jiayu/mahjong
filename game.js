"use strict";

const normalTiles = ["13一筒", "14二筒", "15三筒", "16四筒", "17五筒", "18六筒", "19七筒", "20八筒", "21九筒", "22一索", "23二索", "24三索", "25四索", "26五索", "27六索", "28七索", "29八索", "30九索", "31一万", "32二万", "33三万", "34四万", "35五万", "36六万", "37七万", "38八万", "39九万", "40东风", "41南风", "42西风", "43北风", "44红中", "45青发", "46白板"];
const flowerTiles = ["01猫", "02老鼠", "03公鸡", "04蜈蚣", "05梅", "06兰", "07菊", "08竹", "09春", "10夏", "11秋", "12冬"];

const wall = [];
for (let tile of normalTiles) {
  wall.push(tile, tile, tile, tile);
}
for (let flower of flowerTiles) {
  wall.push(flower);
}
shuffle(wall);

const players = [];
for (let i = 0; i < 4; i++) {
  const covered = [];
  const flowers = [];
  while (covered.length < 13) {
    const draw = wall.shift();
    if (flowerTiles.includes(draw)) {
      flowers.push(draw);
    } else {
      covered.push(draw);
    }
  }
  players.push({covered, flowers});
}

// https://stackoverflow.com/a/12646864
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
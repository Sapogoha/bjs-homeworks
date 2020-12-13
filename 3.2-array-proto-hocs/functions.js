'use strict';

console.clear();

const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

function getNames() {
  return weapons.map((weapon) => weapon.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter((weapon) => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some((weapon) => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons
    .filter((weapon) => weapon.durability > durability)
    .map((weapon) => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sum, item) => sum + item.attack, 0);
}

function getValuestCountToSumValues(arr, total) {
  return arr.reduce(
    (sumOfNumbers, item) => {
      if (sumOfNumbers.sum < total) {
        sumOfNumbers.sum += item;
        sumOfNumbers.newArr.push(item);
      }

      return sumOfNumbers;
    },
    { sum: 0, newArr: [] }
  ).newArr.length;
}

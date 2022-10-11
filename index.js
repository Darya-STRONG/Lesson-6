const hero = ["Ivan"];
const native = ["York", "Of"];
const destination = ["Poltava", "In"];

// const rainbow = [...hero,...native,...destination];
const rainbow = hero.concat(native, destination).reverse();

if (rainbow) {
  rainbow.pop("Ivan");
  rainbow.push("Richard");
  rainbow.unshift("Vain");
  rainbow.splice(2, 1, "Battle", "Gave");
  rainbow.reverse();
  rainbow.splice(1, 2, "Of", "York");

  console.log(rainbow);
}

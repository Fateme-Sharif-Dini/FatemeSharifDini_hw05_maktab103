const objs = [
  { name: "Fateme", age: "26" },
  { name: "Zahra", age: "22" },
  { name: "Amin", age: "29" },
];

let ageSort = (object) => {
  object.sort(sortByAge);
  console.log(objs);
};

ageSort(objs);

function sortByAge(a, b){
  return a.age - b.age;
}
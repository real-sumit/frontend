// Program to add first n natural numbers
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let sum = 0
for (let i = 0; i < n; i++) {
  sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}


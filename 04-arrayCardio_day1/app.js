import { inventors, people } from './data.js'

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornIn1500 = (array) => {
  return array.filter((item) => item.year < 1600 && item.year > 1499)
}

// console.log(bornIn1500(inventors))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const firstAndLastNames = (array) => {
  return array.map((item) => {
    return `${item.last} ${item.first}`
  })
}
// console.log(firstAndLastNames(inventors))
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year)
console.table(sorted)
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

console.log(inventors.reduce((acc, item) => acc + (item.passed - item.year), 0))

// 5. Sort the inventors by years lived

console.log(inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year)))

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log(people.filter((item) => item.includes('de')))

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(
  people.sort((a, b) => {
    const nameA = a.slice(a.indexOf(',') + 2)
    const nameB = b.slice(b.indexOf(',') + 2)
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]

console.log(
  data.reduce((allItems, item) => {
    // allItems[item] ??= 0
    // allItems[item]++
    // return allItems

    if (!allItems.hasOwnProperty(item)) {
      allItems[item] = 0
    }
    allItems[item]++
    return allItems
  }, {})
)

console.log()

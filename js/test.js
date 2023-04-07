let data = [-1, 1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]
const filterData = (data, filterCallback) => {
  return data.filter(filterCallback)
}

console.log(
  filterData(data, (x) => x > 0 )
)
console.log(
  filterData(data, (x) => x < 0 )
)


// [1, 2, 3, 4, 5, 6]
// [-1, -2, -3, -4, -5, -6]
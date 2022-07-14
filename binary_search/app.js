//An implementation of a binary search algorithm to search for data in an array in javascript

function binary_search(array, user_search_string) {
  let low = 0;
  let high = array.length - 1;
  let item = user_search_string.toLowerCase();

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] == item) {
      return `Item found at index ${mid}, ${array[mid]}`;
    } else if (array[mid] != item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "Item not found!";
}

let my_array = ["pauloski", "bassey", "james", "etim", "glory"];
console.log(binary_search(my_array, "pauloski"));

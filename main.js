// Algorithms
//level sustained === 7kyu
function dupeArray(arr) {
  let unique = []
  let len = arr.length

  for (let i = 0; i < len; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i])
    }
  }
  return unique
}

function evenArray(arr) {
  let even = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    }
  }
  return even
}

function sum(num) {
  num.sort((a, b) => a - b)
  return num[0] + num[1]
}

function nextSquare(sq) {
  let o = Math.sqrt(sq)
  if (!isNaN(o) && (function(x) { return (x | 0) === x; })(parseFloat(o))) {
    return Math.pow(o + 1, 2)
  } else {
    return -1
  }
}

function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  let o = str.toLowerCase()
    .split("")
    .map((v) => vowels.indexOf(v) + 1) //consonants are 0
  let strlen = str.length
  let count = []
  for (let i = 0; i < strlen; i++) {
    if (o[i] != 0) {
      count.push(o)
    }
  }
  return count.length
}

function sum(array) {
  let len = array.length
  let sum = 0;

  for (let i = 0; i < len; i++) {
    if (len === 1 && array[0] === 0) {
      return "even"
      break
    }
    sum += array[i]
  }
  if (sum % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
}

function likes(names) {
  let len = names.length
  let others = len - 2
  if (len === 0) {
    return "no one likes this"
  } else if (len === 1) {
    return `${names[0]} likes this`
  } else if (len === 2) {
    return `${names[0]} and ${names[1]} likes this`
  } else if (len === 3) {
    return `${names[0]} , ${names[1]} and ${names[2]} likes this`
  } else {
    return `${names[0]} , ${names[1]} and ${others.toString()} others likes this`
  }
}

function average(arr) {
  let len = arr.length
  if (len != 0) {
    let sum = 0
    for (let i = 0; i < len; i++) {
      sum += arr[i]
    }
    let avg = sum / len
    return avg
  } else {
    return 0
  }
}

function perfectsq(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true
  } else {
    return false
  }
}


function printerError(str) {
  let colors = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
  let len = str.length
  let errors = []
  let v = str.toLowerCase()
    .split("")
    .map((e) => colors.indexOf(e) + 1)
  for (let i = 0; i < len; i++) {
    if (v[i] === 0) {
      errors.push(v[i])
    }
  }
  return `${errors.length} / ${str.length}`
}

// 6KYU QUESTION SOLVED ON 1ST ATTEMPT!
function smiles(arr) {
  let valid = [":)", ":-)", ":~)", ";)", ";-)", ";~)", ":D", ":-D", ":~D", ";D", ";-D", ";~D"]
  let foundValid = []
  let v = arr.map((v) => valid.indexOf(v) + 1)
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (v[i] != 0) {
      foundValid.push(v[i])
    }
  }
  return foundValid.length
}

function sqEveryNum(int) {
  let e = int.toString()
  e.split(" ")
  let len = e.length
  let sqed = []
  for (let i = 0; i < len; i++) {
    sqed.push(Math.pow(e[i], 2))
  }
  return parseInt(sqed.join(""))
}

function pangram(str) {
  let e = new Set(str
  .toLowerCase()
  .replace(/[^a-z]/g, '')
).size === 26
return e
}

function reverseArray(arr){
  let len = arr.length
  let reversed = []
  for(let i = 0; i < len; i++){
    reversed.push(arr.pop())
  }
  return reversed
}

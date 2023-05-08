console.log(document.title)
console.log("----------end----------")
console.log(document.head)
console.log("----------end----------")
console.log(document.body)
console.log("----------end----------")
console.log(document.documentElement)
console.log("----------end----------")

// Below 3 will return the whole tag
// document.documentElement - HTML Tag
// document.head - Head Tag
// document.body - Body Tag

console.log(typeof document.title) // string
console.log(typeof document.documentElement) // object
console.log(typeof document.head) // object
console.log(typeof document.body) // object
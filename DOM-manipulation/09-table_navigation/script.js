let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)

// works on tr
console.log(t.rows[1].cells)
console.log(t.rows[1].sectionRowIndex)
console.log(t.rows[1].rowIndex)

// works on td
console.log(t.rows[1].cellIndex)

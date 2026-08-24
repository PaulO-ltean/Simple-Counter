let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let entrieEl = document.getElementById("entries-el")
let count = 0
let nrcounter = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    nrcounter += count
    entrieEl.textContent = "Sum of entries: " + nrcounter
    count = 0
}

function refresh()
{
    saveEl.textContent = "Previous entries: "
    entrieEl.textContent = "Sum of entries: "
    nrcounter=0
}

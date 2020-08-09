// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(drivers, name) {
    return drivers.filter(d => d[0] === name[0])
}

function matchName(drivers, string) {
    return drivers.filter(d => d.name === string)
}


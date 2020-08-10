function findMatching(drivers, name){
    return drivers.filter(driver => 
       driver.toUpperCase() === name.toUpperCase()
    )
}

function fuzzyMatch(drivers, partialName){
    return drivers.filter(driver =>
        driver.slice(0, partialName.length).toUpperCase().includes(partialName.toUpperCase()))
}

function matchName(drivers, name){
    return drivers.filter(driver =>
        driver.name === name
        )
}
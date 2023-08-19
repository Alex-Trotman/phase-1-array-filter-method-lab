function findMatching(drivers, str){
    let found = drivers.filter((drivers => drivers.toLowerCase() === str.toLowerCase()))
    return found
}

function fuzzyMatch(drivers, str){
    let found = drivers.filter((drivers => drivers[1] === str[1]))
    return found
}

function matchName(obj, str){
    let found = obj.filter((obj => obj.name === str))
    return found
}
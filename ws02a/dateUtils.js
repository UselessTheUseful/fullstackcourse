function currentDate() {
    let date = new Date()
    let formattedDate = ""
    formattedDate += date.getDate().toString() + " "
    formattedDate += (date.getMonth() + 1).toString() + " "
    formattedDate += date.getFullYear().toString() 
    return formattedDate
}

module.exports = { currentDate };
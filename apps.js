function movieList () {
    const item = document.getElementById("movieInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("movieList").appendChild(newItem)
}  

function genreList () {
    const item = document.getElementById("genreInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("genreList").appendChild(newItem)
}  

function directorList () {
    const item = document.getElementById("directorInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("directorList").appendChild(newItem)
}  
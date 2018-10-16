const movieData = {}

movieData.movie = []
movieData.genre = []
movieData.director = []

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

movieData.movie.push(movieList)
movieData.genre.push(genreList)
movieData.director.push(directorList)

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
  }
  const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
  }
  
  saveDatabase(movieData,"MovieList")


/* const HomeInventoryDatabase = {
    "furniture" : [woodChair, bed],
    "crafts" : [djezva, mask, necklace],
    "electronics" : [tv, appleTv]
} */

const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

const woodChair = {
    name: "Wooden Chair",
    location: "Living room",
    description: "This chair was given to me by my best friends parents. When we were FOB I asked them to keep it for me."
}

const bed = {
    name: "queen bed",
    location: "bedroom",
    descrition: "it's a sweet lookin thrift find."
}

const djezva = {
    name: "djezva kava",
    location: "kitchen",
    descrition: "I have 5 of them. They are used to make Turkish coffee"
}

const mask = {
    name: "carnival mask",
    location: "living room",
    descrition: "a mask i bought in Barcelona, Spain, made by a local artist"
}

const necklace= {
    name: "Venecian glass necklace",
    location: "bedroom",
    descrition: "I bought a real Venecian glass necklace blown by a local artist"
}

const tv= {
    name: "Samsung tv",
    location: "living room",
    descrition: "it makes the youtubes work!"
}

const appleTv = {
    name: "apple tv",
    location: "living room",
    descrition: "it makes the streaming work"
}

const monkeyPainting= {
    name: " monkey painting",
    location: "living room",
    descrition: "a painting I picked up in Egypt. It is on papyrus, but is a modern painting of a monkey listening to headphones"
}

const drawings = {
    name: "personal drawings",
    location: "hallway",
    descrition: "drwaings I drew"
}

const bicycle = {
    name: "Old Jeller",
    location: "garage",
    descrition: "my trusty 1988 trek 360"
}

HomeInventoryDatabase.furniture.push(woodChair, bed)
HomeInventoryDatabase.crafts.push(djezva, mask, necklace, monkeyPainting, drawings, bicycle)
HomeInventoryDatabase.electronics.push(tv, appleTv)

// below is the long version to save database
const saveDatabase = function (db, homeKey) {
    /*
        Convert the Object into a string.
    */
const stringifiedDatabase = JSON.stringify(db)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(homeKey, JSON.stringify(db))
}


// below is the shortened version to save database
localStorage.setItem('homeKeys', JSON.stringify(HomeInventoryDatabase))


// below is the long version to load database
const loadDatabase = function (homeKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(homeKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}  







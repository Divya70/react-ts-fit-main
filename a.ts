function generateRandomAddress() {
  // Sample data for demonstration purposes
  const streets = ["Main St", "Oak Ave", "Elm Blvd", "Maple Ln"]
  const cities = ["Cityville", "Townburg", "Villagetown", "Hamletville"]
  const states = ["CA", "NY", "TX", "FL"]
  const zipCodes = ["10001", "90210", "75001", "33101"]

  // Randomly select components of the address
  const street = getRandomElement(streets)
  const city = getRandomElement(cities)
  const state = getRandomElement(states)
  const zipCode = getRandomElement(zipCodes)

  // Construct the address string
  const address = `${getRandomNumber(1, 9999)} ${street}, ${city}, ${state} ${zipCode}`

  return address
}

function getRandomElement(array : any) {
  // Return a random element from the array
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function getRandomNumber(min : number, max : number) {
  // Return a random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Example usage
const randomAddress = generateRandomAddress()
console.log(randomAddress)

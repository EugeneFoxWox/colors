async function createPalette(collection) {
  const response = await fetch(`http://localhost:8080/api/palettes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(collection),
  })
  return await response.json()
}

export default createPalette

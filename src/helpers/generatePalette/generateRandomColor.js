export function generateRandomColor(colors) {
  const newRandomColors = {}

  Object.keys(colors).forEach(
    key => (newRandomColors[key] = '#' + Math.random().toString(16).substr(-6))
  )

  return newRandomColors
}
export default generateRandomColor

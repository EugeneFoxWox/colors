import generateShadeColor from '../generateShadeColor'

export function generateNeighboursColor(colors) {
  const newNeighboursColors = {}

  Object.keys(colors).forEach(
    key => (newNeighboursColors[key] = '#' + Math.random().toString(16).substr(-6))
  )

  newNeighboursColors.secondary = generateShadeColor(newNeighboursColors.primary, 80)
  newNeighboursColors.tertiary = generateShadeColor(newNeighboursColors.primary, 130)
  newNeighboursColors.quaternary = generateShadeColor(newNeighboursColors.primary, -70)

  return newNeighboursColors
}
export default generateNeighboursColor

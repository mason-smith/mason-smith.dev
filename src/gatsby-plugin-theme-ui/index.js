import { deep } from "@theme-ui/presets"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"

export default {
  ...deep, // Gives you the entire preset
  colors: {
    ...deep.colors,
    primary: "#ffa7c4",
    secondary: "#cc859c",
    background: "#172836",
  },
  styles: {
    ...deep.styles,
    code: {
      ...nightOwl,
    },
    pre: {
      ...nightOwl,
    },
  },
}

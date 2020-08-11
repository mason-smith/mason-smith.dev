import { dark } from "@theme-ui/presets"
import vsDark from "@theme-ui/prism/presets/vs-dark.json"

export default {
  ...dark, // Gives you the entire preset
  colors: {
    ...dark.colors,
    primary: "#ffa7c4",
    secondary: "#cc859c",
  },
  styles: {
    ...dark.styles,
    code: {
      ...vsDark,
    },
    pre: {
      ...vsDark,
    },
  },
}

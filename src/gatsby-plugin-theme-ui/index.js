import { dark } from "@theme-ui/presets"
import vsDark from "@theme-ui/prism/presets/vs-dark.json"

export default {
  ...dark, // Gives you the entire preset
  colors: {
    ...dark.colors,
    primary: "#ffa7c4",
    secondary: "#cc859c",
  },
  fonts: {
    ...dark.fonts,
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    // heading: "Georgia, sans-serif",
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

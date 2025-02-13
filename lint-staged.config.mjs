const tsCommand = (filenames) => {
  return `concurrently -r -g -P --kill-others-on-fail "npm:lint:ts" "npm run lint:es --file ${filenames.join(" ")}"`;
};

export default {
  "*.{ts,tsx}": [tsCommand],
  // "**/*.css": ["npm run lint:style", "prettier --write"],
};

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled'])
  },
  plugins: [],
}

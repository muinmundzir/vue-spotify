module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC',
        'gray-750': '#3f495a',
        'gray-850': '#222733',
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '150': '35rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}

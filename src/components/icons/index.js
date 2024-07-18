// src/icons/index.js
const requireContext = require.context('./', false, /\.svg$/);

const icons = requireContext.keys().reduce((icons, file) => {
  const iconName = file
    .replace('./', '') // Remove leading './'
    .replace('.svg', '') // Remove trailing '.svg'

  icons[iconName] = requireContext(file).default;
  return icons;
}, {});

export default icons;

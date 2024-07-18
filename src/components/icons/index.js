const requireContext = require.context('./', false, /\.svg$/);

const icons = requireContext.keys().reduce((icons, file) => {
  const iconName = file.replace('./', '').replace('.svg', '');
  icons[iconName] = requireContext(file).default;
  return icons;
}, {});

export default icons;

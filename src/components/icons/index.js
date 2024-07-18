// Import require.context from webpack
const requireContext = require.context('./', false, /\.svg$/);

// Initialize an empty object to hold the icon components
const icons = {};

// Iterate over the keys (file paths) returned by requireContext
requireContext.keys().forEach(file => {
  // Extract the icon name by removing './' from the start and '.svg' from the end
  const iconName = file.replace('./', '').replace('.svg', '');

  // Add the icon component to the icons object
  icons[iconName] = requireContext(file).default;
});

// Export the icons object as the default export
export default icons;

import React from 'react';

const Logo = ({ 
  className = '', 
  variant = 'default',
  size = 'medium'
}) => {
  const sizes = {
    small: 'h-12',
    medium: 'h-16',
    large: 'h-24',
    xlarge: 'h-32'
  };
  
  const sizeClass = sizes[size] || sizes.medium;
  
  // Apply filter for inverse variant (white logo on dark background)
  const filterStyle = variant === 'inverse' 
    ? { filter: 'brightness(0) invert(1)' }
    : {};

  return (
    <img
      src="/images/LawboxLogo.png"
      alt="LawBOX - Lawfirm in a box"
      className={`w-auto ${sizeClass} ${className}`}
      style={filterStyle}
    />
  );
};

export default Logo;

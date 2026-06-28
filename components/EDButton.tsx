'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EDButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function EDButton({ children, variant = 'primary', onClick, href, className = '', type = 'button', disabled }: EDButtonProps) {
  const baseClasses = `ed-button ed-button-${variant} ${className}`;

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} className={baseClasses} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={baseClasses} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.985 }}>
      {children}
    </motion.button>
  );
}
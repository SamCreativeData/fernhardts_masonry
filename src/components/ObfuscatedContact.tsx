import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, Copy, ExternalLink, Phone, Mail } from 'lucide-react';
import useAntiBotGuard from '../hooks/useAntiBotGuard';

type Props = {
  label: string;
  type: 'phone' | 'email';
  b64: string;
  className?: string;
};

export default function ObfuscatedContact({ label, type, b64, className }: Props) {
  const guardReady = useAntiBotGuard();
  const [revealed, setRevealed] = useState(false);
  const [value, setValue] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);

  const decoded = useMemo(() => {
    if (!guardReady) return '';
    try {
      // b64 is pre-chunked with a delimiter '.'; join and decode at runtime
      const joined = b64.split('.').join('');
      return atob(joined);
    } catch {
      return '';
    }
  }, [b64, guardReady]);

  const onReveal = () => {
    if (!guardReady || !decoded) return;
    setValue(decoded);
    setRevealed(true);
  };

  const onOpen = () => {
    if (!revealed || !value) return;
    // Construct the link at click time, not in HTML
    const href = type === 'phone' 
      ? `tel:${value.replace(/\s+/g, '')}` 
      : `mailto:${value}`;
    window.location.href = href;
  };

  const onCopy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  // Add zero-width joiners for visual disruption (anti-OCR)
  const displayValue = useMemo(() => {
    if (!value) return '';
    return value.split('').join('\u200D'); // Zero-width joiner
  }, [value]);

  const Icon = type === 'phone' ? Phone : Mail;

  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      {!revealed ? (
        <motion.button
          type="button"
          onClick={onReveal}
          disabled={!guardReady}
          aria-label={`Reveal ${label}`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
        >
          <Eye className="h-4 w-4" />
          <span>Reveal {label}</span>
        </motion.button>
      ) : (
        <motion.div 
          className="inline-flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-blue-600" />
            <span 
              role="status" 
              className="font-medium tracking-wide select-text text-gray-900"
              style={{ 
                fontFamily: 'monospace',
                letterSpacing: '0.5px'
              }}
            >
              {value}
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <motion.button
              type="button"
              onClick={onCopy}
              aria-label="Copy to clipboard"
              className="rounded-md border border-gray-300 px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <Copy className="h-4 w-4" />
            </motion.button>
            
            <motion.button
              type="button"
              onClick={onOpen}
              aria-label={`Open ${type}`}
              className="rounded-md border border-gray-300 px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
      
      {copySuccess && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-sm text-green-600 font-medium"
        >
          Copied!
        </motion.span>
      )}
      
      {!guardReady && (
        <span className="sr-only">Contact hidden until page interaction</span>
      )}
      
      <noscript>
        <span className="text-sm text-gray-500 italic">
          Enable JavaScript to view contact info
        </span>
      </noscript>
    </div>
  );
}
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[90vh] relative shadow-2xl border border-blue-200 dark:border-blue-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              <XMarkIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
          <div className="h-full w-full p-1">
            <iframe
              src={resumeUrl}
              className="w-full h-full rounded-lg"
              title="Resume PDF"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 
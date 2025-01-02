'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image dari 'next/image'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact Us', href: '#contact-us' },
];

// Variants untuk animasi Framer Motion (sesuaikan jika perlu)
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: '0%' },
  exit: { x: '100%' },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="px-3 my-2 rounded-full fixed inset-x-0 top-0 z-50 
        bg-white/10 dark:bg-zinc-900/10 
        backdrop-blur-xl 
        border border-gray-200/20 dark:border-gray-800/20 
        shadow-lg shadow-gray-500/5">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo dan Nama Perusahaan */}
          <div className="flex lg:flex-1 items-center">
            <Link href="#" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <Image
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt="DuaLine Logo"
                width={32} // Sesuaikan ukuran sesuai kebutuhan
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-stone-400 dark:text-stone-200">
                Dualine
              </span>
            </Link>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6 text-slate-700 dark:text-slate-100" />
            </button>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden lg:flex lg:gap-x-12 mr-7">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-stone-400 text-lg font-semibold transition-colors duration-800 ease-in hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={backdropVariants}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
                />
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed top-4 right-4 z-50 w-[calc(100%-2rem)] overflow-y-auto 
                    bg-zinc-900/95 backdrop-blur-md px-6 py-6 rounded-2xl sm:max-w-sm 
                    border border-zinc-800/50 shadow-xl max-h-[calc(100vh-2rem)]"
                >
                  <motion.div variants={itemVariants} className="flex items-center justify-between">
                    <Link href="#" className="flex items-center">
                      <span className="sr-only">Your Company</span>
                      <Image
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt="DuaLine Logo"
                        width={32}
                        height={32}
                        className="h-8 w-auto brightness-125"
                      />
                      <span className="ml-3 text-xl font-bold text-stone-400 dark:text-stone-200">
                        DuaLine
                      </span>
                    </Link>
                    <motion.button
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-full p-2.5 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-zinc-800/80"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                  <motion.div variants={itemVariants} className="mt-8">
                    <div className="space-y-1.5">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <motion.div key={item.name} variants={itemVariants}>
                            <Link href={item.href} className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:bg-zinc-800/70 hover:text-white transition-all duration-200 ease-out" onClick={() => setMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Dialog>
      </header>
    </div>
  );
}

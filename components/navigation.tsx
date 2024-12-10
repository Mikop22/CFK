"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Monitor, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { scrollToSection } from '@/lib/scroll';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Apply', href: 'apply' },
    { name: 'Donate', href: 'donate' },
    { name: 'Impact', href: 'impact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b`} // Made header constant
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center space-x-2"
          >
            <Monitor className="h-6 w-6" />
            <span className="font-bold text-lg">CFK Canada</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button onClick={() => scrollToSection('donate')}>Support Us</Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  className="w-full"
                  onClick={() => scrollToSection('donate')}
                >
                  Support Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

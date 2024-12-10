"use client";

import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/p6ju0WAQgLYkrfmI/scene.splinecode"
        />
        <div className="w-full h-full bg-gradient-to-b from-transparent to-background" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Empowering Young Minds Through Technology
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-black">
            We provide computers to children in need, bridging the digital divide one device at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#apply"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-center font-medium"
            >
              Apply for a Computer
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#donate"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-center font-medium"
            >
              Make a Donation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Heart, Users } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Monitor,
      title: "Technology Access",
      description: "Providing refurbished computers to children who need them most."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Creating lasting change in communities across Canada."
    },
    {
      icon: Users,
      title: "Digital Literacy",
      description: "Empowering the next generation with essential digital skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe every child deserves access to technology. Through donations and community support,
            we're making digital education accessible to all Canadian children.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
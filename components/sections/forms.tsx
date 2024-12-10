"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ApplicationForm } from '@/components/forms/application-form';
import { DonationForm } from '@/components/forms/donation-form';

export default function Forms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="forms" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Tabs defaultValue="apply" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="apply">Apply for a Computer</TabsTrigger>
              <TabsTrigger value="donate">Make a Donation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="apply">
              <Card>
                <CardHeader>
                  <CardTitle>Computer Application</CardTitle>
                  <CardDescription>
                    Apply for a computer for your child's educational needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ApplicationForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="donate">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Donation</CardTitle>
                  <CardDescription>
                    Help us provide computers to children in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DonationForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
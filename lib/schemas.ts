import * as z from 'zod';

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(10, 'Please provide your full address'),
  childAge: z.string().min(1, 'Child age is required'),
  schoolName: z.string().min(2, 'School name is required'),
  reason: z.string().min(50, 'Please provide more details about your need'),
});

export const donationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  donationType: z.enum(['computer', 'monetary', 'other']),
  details: z.string().min(20, 'Please provide more details about your donation'),
});
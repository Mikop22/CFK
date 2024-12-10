"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { donationSchema } from '@/lib/schemas';

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      donationType: 'computer',
      details: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof donationSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success('Donation form submitted successfully!');
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error('Failed to submit donation form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" {...form.register('fullName')} />
        {form.formState.errors.fullName && (
          <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...form.register('email')} />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" {...form.register('phone')} />
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="donationType">Type of Donation</Label>
        <select
          id="donationType"
          {...form.register('donationType')}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="computer">Computer Equipment</option>
          <option value="monetary">Monetary Donation</option>
          <option value="other">Other</option>
        </select>
        {form.formState.errors.donationType && (
          <p className="text-sm text-destructive">{form.formState.errors.donationType.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Donation Details</Label>
        <Textarea id="details" {...form.register('details')} />
        {form.formState.errors.details && (
          <p className="text-sm text-destructive">{form.formState.errors.details.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Donation'}
      </Button>
    </form>
  );
}
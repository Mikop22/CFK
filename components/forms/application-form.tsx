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
import { applicationSchema } from '@/lib/schemas';

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      childAge: '',
      schoolName: '',
      reason: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof applicationSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success('Application submitted successfully!');
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
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
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" {...form.register('address')} />
        {form.formState.errors.address && (
          <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="childAge">Child's Age</Label>
        <Input id="childAge" {...form.register('childAge')} />
        {form.formState.errors.childAge && (
          <p className="text-sm text-destructive">{form.formState.errors.childAge.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="schoolName">School Name</Label>
        <Input id="schoolName" {...form.register('schoolName')} />
        {form.formState.errors.schoolName && (
          <p className="text-sm text-destructive">{form.formState.errors.schoolName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Why do you need a computer?</Label>
        <Textarea id="reason" {...form.register('reason')} />
        {form.formState.errors.reason && (
          <p className="text-sm text-destructive">{form.formState.errors.reason.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
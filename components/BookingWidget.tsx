'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BookingWidget() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    location: 'witney',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format location for email
    const locationFormatted = formData.location.charAt(0).toUpperCase() + formData.location.slice(1);

    // Format date if provided
    let dateFormatted = 'Not specified';
    if (formData.preferredDate) {
      const date = new Date(formData.preferredDate);
      dateFormatted = date.toLocaleDateString('en-GB', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    }

    // Format time
    const timeFormatted = formData.preferredTime || 'Not specified';

    // Create email subject and body
    const subject = encodeURIComponent(`Booking Request from ${formData.name}`);
    const body = encodeURIComponent(
      `New Booking Request\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Preferred Date: ${dateFormatted}\n` +
      `Preferred Time: ${timeFormatted}\n` +
      `Location: ${locationFormatted}\n\n` +
      `I would like to book an appointment.`
    );

    // Open mailto link
    window.location.href = `mailto:xwolterferguson@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-8">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-stone-700 text-base">Name</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-white border-stone-300 text-stone-800 h-12 text-base"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="phone" className="text-stone-700 text-base">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="bg-white border-stone-300 text-stone-800 h-12 text-base"
          placeholder="+44 7XXX XXXXXX"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="preferredDate" className="text-stone-700 text-base">Preferred Date</Label>
        <Input
          id="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="bg-white border-stone-300 text-stone-800 h-12 text-base"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="preferredTime" className="text-stone-700 text-base">Preferred Time</Label>
        <select
          id="preferredTime"
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
          className="w-full h-12 rounded-md border border-stone-300 bg-white px-4 text-base text-stone-800 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
        >
          <option value="">Select a time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="location" className="text-stone-700 text-base">Location</Label>
        <select
          id="location"
          required
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full h-12 rounded-md border border-stone-300 bg-white px-4 text-base text-stone-800 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
        >
          <option value="witney">Witney</option>
          <option value="oxford">Oxford</option>
          <option value="online">Online</option>
        </select>
      </div>

      <Button
        type="submit"
        className="w-full bg-emerald-700 text-white hover:bg-emerald-800 font-normal py-6 text-base rounded-md mt-12"
      >
        Send Request
      </Button>
    </form>
  );
}

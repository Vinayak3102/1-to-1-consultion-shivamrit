export type ConsultationMode = 'online' | 'inPerson';

export interface TimeSlot {
  id: string;
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  isAvailable: boolean;
}

export interface DayAvailability {
  date: Date;
  dateString: string; // YYYY-MM-DD
  dayName: string;
  dayNumber: number;
  monthName: string;
  slots: TimeSlot[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  condition: string;
  notes: string;
  mode: ConsultationMode;
  dateString: string;
  timeSlot: string;
}

export interface ConfirmedBooking extends BookingFormData {
  tokenId: string;
  bookedAt: string;
}

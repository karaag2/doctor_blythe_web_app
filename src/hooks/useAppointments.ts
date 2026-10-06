import { useState, useEffect } from "react";
import type { Appointment } from "../types/medical";

const STORAGE_KEY = "doctor_blythe_appointments_v1";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to parse appointments from localStorage", e);
    }
    // Rendez-vous initial d'exemple (contexte Niamey, Niger) pour démonstration immédiate
    return [
      {
        id: "apt-init-1",
        doctorId: "dr-1",
        doctorName: "Dr. Mamman Boubacar",
        speciality: "Cardiologue",
        patientName: "Issoufou Amadou",
        patientEmail: "issoufou.amadou@gmail.com",
        patientPhone: "+227 90 12 34 56",
        date: "2026-10-12",
        timeSlot: "10:00",
        reason: "Bilan cardiologique et contrôle tensionnel",
        status: "confirmed",
        createdAt: new Date().toISOString()
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    } catch (e) {
      console.error("Failed to persist appointments", e);
    }
  }, [appointments]);

  const addAppointment = (newApt: Omit<Appointment, "id" | "status" | "createdAt">): Appointment => {
    const created: Appointment = {
      ...newApt,
      id: "apt-" + Date.now(),
      status: "confirmed",
      createdAt: new Date().toISOString()
    };
    setAppointments((prev) => [created, ...prev]);
    return created;
  };

  const cancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "cancelled" } : a))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return {
    appointments,
    addAppointment,
    cancelAppointment,
    deleteAppointment
  };
}

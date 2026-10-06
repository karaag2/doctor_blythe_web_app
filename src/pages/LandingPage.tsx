import { useState } from "react";
import Hero from "../components/Hero";
import Infos from "../components/Infos";
import Services from "../components/Services";
import Features from "../components/Features";
import Schedule from "../components/Schedule";
import DoctorList from "../components/DoctorList";
import Contac from "../components/Contac";
import { BookingModal } from "../components/BookingModal";
import { AppointmentsDrawer } from "../components/AppointmentsDrawer";
import { useAppointments } from "../hooks/useAppointments";

const LandingPage = () => {
  const {
    appointments,
    addAppointment,
    cancelAppointment,
    deleteAppointment
  } = useAppointments();

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | null>(null);

  const handleOpenBookingWithDoctor = (doctorId?: string) => {
    setSelectedDoctorForBooking(doctorId || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="mx-auto max-w-[96rem] bg-white min-h-screen text-slate-900 font-[Montserrat]">
      {/* Hero section with original layout and embedded TopBar */}
      <Hero
        onOpenBooking={() => handleOpenBookingWithDoctor()}
        onOpenAppointments={() => setIsDrawerOpen(true)}
        appointmentsCount={appointments.filter((a) => a.status === "confirmed").length}
      />

      {/* Info strip */}
      <Infos onOpenBooking={() => handleOpenBookingWithDoctor()} />

      {/* Services */}
      <Services onOpenBooking={() => handleOpenBookingWithDoctor()} />

      {/* Features */}
      <Features onOpenBooking={() => handleOpenBookingWithDoctor()} />

      {/* Schedule */}
      <Schedule onOpenBooking={() => handleOpenBookingWithDoctor()} />

      {/* Doctors List */}
      <DoctorList
        onSelectDoctor={(docId) => handleOpenBookingWithDoctor(docId)}
        onOpenBooking={() => handleOpenBookingWithDoctor()}
      />

      {/* Contact & Footer */}
      <Contac />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctorId={selectedDoctorForBooking}
        onBookSuccess={(newApt) => {
          addAppointment(newApt);
        }}
      />

      {/* Appointments Drawer */}
      <AppointmentsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        appointments={appointments}
        onCancel={cancelAppointment}
        onDelete={deleteAppointment}
        onOpenBooking={() => handleOpenBookingWithDoctor()}
      />
    </div>
  );
};

export default LandingPage;

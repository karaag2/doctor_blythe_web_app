import React, { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, FileText, CheckCircle2 } from "lucide-react";
import { DOCTORS_DATA, type Appointment } from "../types/medical";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string | null;
  onBookSuccess: (apt: Omit<Appointment, "id" | "status" | "createdAt">) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctorId,
  onBookSuccess
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    preselectedDoctorId || DOCTORS_DATA[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [reason, setReason] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const currentDoctor = DOCTORS_DATA.find((d) => d.id === selectedDoctorId) || DOCTORS_DATA[0];

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      setErrorMsg("Veuillez choisir un créneau horaire.");
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientEmail.trim() || !patientPhone.trim()) {
      setErrorMsg("Veuillez renseigner tous les champs obligatoires.");
      return;
    }
    setErrorMsg("");

    onBookSuccess({
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      speciality: currentDoctor.speciality,
      patientName,
      patientEmail,
      patientPhone,
      date: selectedDate,
      timeSlot: selectedSlot,
      reason: reason.trim() || "Consultation médicale"
    });

    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    setSelectedSlot("");
    setReason("");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header Sky */}
        <div className="flex items-center justify-between px-6 py-5 bg-sky-500 text-white">
          <div>
            <h3 className="text-xl font-bold font-[Montserrat]">Prendre Rendez-Vous en Ligne</h3>
            <p className="text-xs text-sky-100">Réservation rapide avec confirmation immédiate</p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Corps de la modale */}
        <div className="p-6 font-[Montserrat]">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Rendez-Vous Confirmé !</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Votre consultation avec <strong className="text-sky-600">{currentDoctor.name}</strong> le{" "}
                <strong>{selectedDate}</strong> à <strong>{selectedSlot}</strong> est bien enregistrée.
              </p>
              <div className="p-4 bg-sky-50 rounded-2xl text-left text-xs text-sky-900 space-y-1">
                <p><strong>Lieu :</strong> {currentDoctor.location}</p>
                <p><strong>Patient :</strong> {patientName} ({patientPhone})</p>
                <p><strong>Tarif indicatif :</strong> {currentDoctor.fee}</p>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full mt-4 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full transition cursor-pointer shadow-md shadow-sky-500/20"
              >
                Consulter mes rendez-vous
              </button>
            </div>
          ) : step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  1. Choisir le praticien
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => {
                    setSelectedDoctorId(e.target.value);
                    setSelectedSlot("");
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 font-medium text-sm"
                >
                  {DOCTORS_DATA.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.speciality} ({doc.fee})
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-slate-500">{currentDoctor.bio}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  2. Date de consultation
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 font-medium text-sm"
                    required
                  />
                  <Calendar className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  3. Créneaux disponibles
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {currentDoctor.slots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer border ${
                          isSelected
                            ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50"
                        }`}
                      >
                        <Clock size={13} />
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>}

              <button
                type="submit"
                className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full transition cursor-pointer shadow-md shadow-sky-500/20"
              >
                Continuer vers vos coordonnées →
              </button>
            </form>
          ) : (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="p-3 bg-sky-50 rounded-xl text-xs text-sky-900 flex justify-between items-center">
                <span>
                  <strong>Praticien :</strong> {currentDoctor.name} ({currentDoctor.speciality})
                </span>
                <span>
                  <strong>Créneau :</strong> {selectedDate} à {selectedSlot}
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Nom et Prénom *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Ex: Hawa Souley ou Mamane Dan Malam"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 text-sm"
                  />
                  <User className="absolute left-3 top-3 text-slate-400" size={16} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Adresse Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="nom@exemple.ne"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 text-sm"
                    />
                    <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Téléphone Mobile (Airtel / Moov / Zamani) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+227 90 12 34 56"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 text-sm"
                    />
                    <Phone className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Motif de consultation (optionnel)
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Symptômes, renouvellement d'ordonnance, premier bilan..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none text-slate-800 text-sm"
                  />
                  <FileText className="absolute left-3 top-2.5 text-slate-400" size={16} />
                </div>
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-full text-xs transition cursor-pointer"
                >
                  ← Retour
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full text-xs transition cursor-pointer shadow-md shadow-sky-500/20"
                >
                  Confirmer le rendez-vous ✓
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

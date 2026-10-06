import React from "react";
import { X, Calendar, Clock, User, Phone, CheckCircle, Ban, Trash2 } from "lucide-react";
import type { Appointment } from "../types/medical";

interface AppointmentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancel: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenBooking: () => void;
}

export const AppointmentsDrawer: React.FC<AppointmentsDrawerProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancel,
  onDelete,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col border-l border-slate-100 font-[Montserrat]">
        {/* En-tête */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Mes Rendez-Vous</h3>
            <p className="text-xs text-slate-500">
              {appointments.length} consultation(s) enregistrée(s)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Liste des rendez-vous */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Aucun rendez-vous pour le moment</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Réservez un créneau en quelques clics avec l'un de nos praticiens partenaires.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="mt-2 px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-xs font-semibold shadow-md shadow-sky-500/20 cursor-pointer"
              >
                Prendre un premier rendez-vous
              </button>
            </div>
          ) : (
            appointments.map((apt) => (
              <div
                key={apt.id}
                className={`p-4 rounded-2xl border transition ${
                  apt.status === "confirmed"
                    ? "bg-white border-sky-100 shadow-sm hover:border-sky-300"
                    : "bg-slate-50 border-slate-200 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        apt.status === "confirmed"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {apt.status === "confirmed" ? (
                        <>
                          <CheckCircle size={12} /> Confirmé
                        </>
                      ) : (
                        <>
                          <Ban size={12} /> Annulé
                        </>
                      )}
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm mt-1">{apt.doctorName}</h4>
                    <p className="text-xs text-sky-600">{apt.speciality}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDelete(apt.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                    title="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{apt.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-400" />
                    <span>{apt.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <User size={13} className="text-slate-400" />
                    <span className="truncate">Patient : {apt.patientName}</span>
                  </div>
                  {apt.patientPhone && (
                    <div className="flex items-center gap-1.5 col-span-2">
                      <Phone size={13} className="text-slate-400" />
                      <span className="truncate">{apt.patientPhone}</span>
                    </div>
                  )}
                </div>

                {apt.reason && (
                  <p className="mt-2 text-[11px] text-slate-500 italic">
                    Motif : &laquo; {apt.reason} &raquo;
                  </p>
                )}

                {apt.status === "confirmed" && (
                  <div className="mt-3 pt-2 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={() => onCancel(apt.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 font-medium cursor-pointer"
                    >
                      Annuler la réservation
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Pied de tiroir */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="flex-1 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-xs font-semibold cursor-pointer shadow-md shadow-sky-500/20"
          >
            + Réserver un nouveau créneau
          </button>
        </div>
      </div>
    </div>
  );
};

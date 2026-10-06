import React from "react";
import DetailCard from "./DetailCard";
import calendar from "../assets/images/calendar.png";
import { Clock, CalendarCheck, Shield, Award } from "lucide-react";

interface ScheduleProps {
  onOpenBooking: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onOpenBooking }) => {
  return (
    <section id="schedules" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Détails et engagements */}
          <div className="lg:col-span-6 space-y-6">
            <DetailCard
              heading="DISPONIBILITÉS & HORAIRES"
              title="Prise de Rendez-Vous Simple et Sans Attente"
              detail="Nos praticiens vous accueillent du lundi au samedi dans nos pôles de santé modernes. Consultez en temps réel l'ensemble des créneaux libres et recevez instantanément vos rappels par SMS."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-start gap-3">
                <Clock className="text-sky-500 mt-1 flex-none" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Consultations Rapides</h4>
                  <p className="text-xs text-slate-500">Délai moyen de prise en charge sous 48h</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-start gap-3">
                <CalendarCheck className="text-sky-500 mt-1 flex-none" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Créneaux Flexibles</h4>
                  <p className="text-xs text-slate-500">Ouvert dès 08h30 jusqu'à 19h30</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-start gap-3">
                <Shield className="text-sky-500 mt-1 flex-none" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Données Protégées</h4>
                  <p className="text-xs text-slate-500">Conformité RGPD et secret médical</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-start gap-3">
                <Award className="text-sky-500 mt-1 flex-none" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Conventionné & Agréé</h4>
                  <p className="text-xs text-slate-500">Prise en charge CNSS & mutuelles partenaires</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-medium rounded-full text-xs transition cursor-pointer shadow-md shadow-sky-500/20"
              >
                Consulter les créneaux disponibles →
              </button>
            </div>
          </div>

          {/* Visuel calendrier */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative p-6 bg-gradient-to-tr from-sky-50 via-white to-sky-100/60 rounded-3xl border border-sky-100 shadow-xl max-w-md w-full">
              <img
                src={calendar}
                alt="Calendrier médical"
                className="w-full h-auto drop-shadow-md rounded-2xl"
              />
              <div className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-xs border border-sky-100 p-3.5 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-slate-800">14 créneaux libres aujourd'hui</p>
                  <p className="text-[10px] text-slate-500">Réservation en 2 minutes chrono</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

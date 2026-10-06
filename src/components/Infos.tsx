import React from "react";
import InfoCard from "./InfoCard";
import scheldule from "../assets/images/schedule (1).png";
import doctor from "../assets/images/doctor (2).png";
import timer from "../assets/images/timer.png";
import location from "../assets/images/map (2).png";
import SpecialCard from "./SpecialCard";

interface InfosProps {
  onOpenBooking: () => void;
}

const Infos: React.FC<InfosProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-sky-50/60 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex space-x-6 overflow-x-auto pb-4 scrollbar-hide justify-start lg:justify-center">
        {/* Carte 1 : Heures d'ouverture */}
        <SpecialCard title="Heures d'Ouverture" icon={timer}>
          <div>
            <p className="opacity-80 text-[11px] uppercase tracking-wider">Lundi - Vendredi</p>
            <p className="font-bold text-sm">08h30 - 19h30</p>
          </div>
          <div className="pt-1">
            <p className="opacity-80 text-[11px] uppercase tracking-wider">Samedi (Soins continus)</p>
            <p className="font-bold text-xs">09h00 - 14h00</p>
          </div>
        </SpecialCard>

        {/* Carte 2 : Rendez-vous */}
        <InfoCard
          title="Rendez-Vous en Ligne"
          icon={scheldule}
          buttonLabel="Réserver"
          onButtonClick={onOpenBooking}
        >
          Consultation rapide avec nos spécialistes. Choisissez votre praticien et votre créneau en 2 minutes.
        </InfoCard>

        {/* Carte 3 : Nos Médecins */}
        <InfoCard
          title="Nos Praticiens"
          icon={doctor}
          buttonLabel="Médecins"
          onButtonClick={() => {
            const el = document.getElementById("doctors");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Une équipe pluridisciplinaire d'experts médicaux : cardiologie, chirurgie, dentisterie et pédiatrie.
        </InfoCard>

        {/* Carte 4 : Localisation & Accès */}
        <InfoCard
          title="Centre Médical"
          icon={location}
          buttonLabel="Localiser"
          onButtonClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Situé au Quartier Plateau sur le Boulevard Mali Béro à Niamey. Accès facile avec parking sécurisé.
        </InfoCard>
      </div>
    </section>
  );
};

export default Infos;

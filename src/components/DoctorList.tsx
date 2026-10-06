import React, { useState } from "react";
import DetailCard from "./DetailCard";
import DoctorCard from "./DoctorCard";
import { DOCTORS_DATA, SPECIALITY_OPTIONS } from "../types/medical";
import Button from "./Button";
import { Search } from "lucide-react";

interface DoctorListProps {
  onSelectDoctor: (doctorId: string) => void;
  onOpenBooking: () => void;
}

const DoctorList: React.FC<DoctorListProps> = ({ onSelectDoctor, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="doctors" className="bg-sky-50/70 py-16 text-center scroll-mt-10 font-[Montserrat]">
      {/* Headings harmonized in French */}
      <DetailCard heading="NOTRE ÉQUIPE" title="Nos Médecins & Spécialistes" />

      {/* Recherche et filtrage par spécialités */}
      <div className="max-w-xl mx-auto px-4 mt-6 mb-8 space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un praticien (ex: Bo, Siana, Hawa, Laurent...)"
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full text-xs text-slate-800 shadow-xs border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <Search className="absolute left-3.5 top-2.5 text-sky-400" size={16} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {SPECIALITY_OPTIONS.map((spec) => (
            <button
              key={spec.id}
              type="button"
              onClick={() => setSelectedCategory(spec.id)}
              className={`px-3.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${
                selectedCategory === spec.id
                  ? "bg-sky-500 text-white shadow-xs"
                  : "bg-white text-sky-600 hover:bg-sky-50 border border-sky-200"
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rail de cartes avec cartes bleues sky-500 fidèles à la maquette */}
      <div className="flex space-x-6 px-6 py-4 overflow-x-auto scrollbar-hide justify-start md:justify-center">
        {filteredDoctors.map((doc) => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onSelectDoctor={onSelectDoctor}
          />
        ))}
      </div>

      {/* Bouton d'action harmonisé en français */}
      <div className="mx-auto px-8 max-w-sm mt-8">
        <Button
          title="Voir tous les praticiens"
          addStyle="w-full !py-3 !text-xs !bg-sky-500 hover:!bg-sky-600 shadow-md shadow-sky-500/20"
          onClick={onOpenBooking}
        />
      </div>
    </div>
  );
};

export default DoctorList;

import docReal1 from "../assets/images/doctor_real_1.jpg";
import docReal2 from "../assets/images/doctor_real_2.jpg";
import docReal3 from "../assets/images/doctor_real_3.jpg";
import docReal4 from "../assets/images/doctor_real_4.jpg";
import docReal5 from "../assets/images/doctor_real_5.jpg";

export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  category: "dentist" | "cardiology" | "general" | "neurology" | "pediatrics";
  experienceYears: number;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  slots: string[];
  location: string;
  bio: string;
  fee: string;
  avatar: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  speciality: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  timeSlot: string;
  reason: string;
  status: "confirmed" | "cancelled";
  createdAt: string;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-1",
    name: "Dr. Mamman Boubacar",
    speciality: "Cardiologue",
    category: "cardiology",
    experienceYears: 15,
    rating: 4.95,
    reviewCount: 142,
    availableDays: ["Lundi", "Mercredi", "Vendredi"],
    slots: ["08:30", "10:00", "15:00", "17:00"],
    location: "Clinique Gamkalley - Niamey",
    bio: "Spécialiste des pathologies cardiovasculaires, bilans d'hypertension et épreuves d'effort.",
    fee: "20 000 FCFA",
    avatar: docReal1
  },
  {
    id: "dr-2",
    name: "Dr. Souleymane Garba",
    speciality: "Chirurgien Généraliste",
    category: "general",
    experienceYears: 12,
    rating: 4.91,
    reviewCount: 98,
    availableDays: ["Mardi", "Jeudi", "Vendredi"],
    slots: ["08:30", "11:00", "14:30", "16:30"],
    location: "Hôpital Général de Référence - Niamey",
    bio: "Chirurgie viscérale, interventions mini-invasives et consultations pré et post-opératoires.",
    fee: "25 000 FCFA",
    avatar: docReal2
  },
  {
    id: "dr-3",
    name: "Dr. Hawa Abdoulaye",
    speciality: "Chirurgienne-Dentiste",
    category: "dentist",
    experienceYears: 10,
    rating: 4.93,
    reviewCount: 174,
    availableDays: ["Lundi", "Mardi", "Jeudi", "Samedi"],
    slots: ["09:00", "11:00", "14:30", "16:00"],
    location: "Cabinet Dentaire du Plateau - Niamey",
    bio: "Soins dentaires complets, chirurgie buccale, prothèses et esthétique dentaire.",
    fee: "15 000 FCFA",
    avatar: docReal3
  },
  {
    id: "dr-4",
    name: "Dr. Amina Seyni",
    speciality: "Pédiatre & Néonatologie",
    category: "pediatrics",
    experienceYears: 13,
    rating: 4.98,
    reviewCount: 220,
    availableDays: ["Lundi", "Mardi", "Mercredi", "Vendredi"],
    slots: ["08:30", "10:30", "14:00", "15:30"],
    location: "Espace Mère-Enfant - Yantala, Niamey",
    bio: "Suivi pédiatrique de la naissance à l'adolescence, vaccinations et nutrition infantile.",
    fee: "18 000 FCFA",
    avatar: docReal4
  },
  {
    id: "dr-5",
    name: "Dr. Ibrahim Oumarou",
    speciality: "Neurologue",
    category: "neurology",
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 86,
    availableDays: ["Mercredi", "Jeudi", "Samedi"],
    slots: ["09:00", "11:00", "15:00", "16:30"],
    location: "Centre Neurologique - Koira Kano, Niamey",
    bio: "Pathologies du système nerveux, migraines chroniques, épilepsie et suivi des AVC.",
    fee: "25 000 FCFA",
    avatar: docReal5
  }
];

export const SPECIALITY_OPTIONS = [
  { id: "all", label: "Toutes les spécialités" },
  { id: "cardiology", label: "Cardiologie" },
  { id: "general", label: "Chirurgie" },
  { id: "dentist", label: "Dentisterie" },
  { id: "pediatrics", label: "Pédiatrie" },
  { id: "neurology", label: "Neurologie" }
];

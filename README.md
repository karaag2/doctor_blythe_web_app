# Doctor Blythe — Plateforme de Santé & Prise de Rendez-Vous Médicaux

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Build-Passing-emerald)](https://github.com/karaag2/doctor_blythe_web_app)

> **Doctor Blythe** est une application web moderne et responsive conçue pour fluidifier l'accès aux soins de santé : recherche de praticiens par spécialité, consultation des créneaux en direct, prise de rendez-vous en ligne interactive et suivi des consultations patient.

---

## Aperçu & Démonstration

L'application a été construite pour offrir une expérience utilisateur (UX) fluide, accessible et rassurante, respectant les standards du secteur e-santé :
- **Navigation contextuelle & ancres fluides** (`Services`, `Spécialités`, `Nos Médecins`, `Horaires`, `Contact`).
- **Annuaire dynamique de médecins** avec moteur de recherche en temps réel et filtrage instantané par spécialité (Cardiologie, Chirurgie, Dentisterie, Pédiatrie, Neurologie).
- **Tunnel de prise de rendez-vous interactif (Wizard 2 étapes)** :
  1. Choix du praticien, de la date et sélection du créneau horaire disponible.
  2. Saisie des coordonnées patient (nom, email, téléphone, motif) et validation avec feedback immédiat.
- **Gestionnaire de consultations patient ("Mes Rendez-vous")** :
  - Tiroir latéral (drawer) réactif conservant les rendez-vous en mémoire persistante locale (`LocalStorage`).
  - Possibilité d'annuler ou supprimer une consultation.
- **Formulaire de contact & secrétariat** avec validation des données, simulation d'envoi et confirmation visuelle.

---

## Architecture du Projet

Le projet applique une structure claire, modulaire et typée sous TypeScript :

```
doctor_blythe_web_app/
├── public/                 # Assets statiques et manifestes
├── src/
│   ├── assets/             # Illustrations médicales optimisées et icônes SVG
│   ├── components/         # Composants réutilisables et autonomes
│   │   ├── Navbar.tsx             # Barre de navigation responsive avec drawer mobile & badges
│   │   ├── Hero.tsx               # Section d'accroche avec CTA direct et métriques
│   │   ├── Infos.tsx              # Bandeau d'accès rapide (horaires, urgences, localisation)
│   │   ├── Services.tsx           # Pôles d'expertise médicale avec pilules interactives
│   │   ├── Features.tsx           # Garanties cliniques, conformité HDS & téléconsultation
│   │   ├── DoctorList.tsx         # Annuaire avec recherche & filtres par spécialité
│   │   ├── DoctorCard.tsx         # Carte praticien avec notes, créneaux et déclenchement RDV
│   │   ├── Schedule.tsx           # Section planning & indicateur de créneaux en direct
│   │   ├── Contac.tsx             # Formulaire interactif et coordonnées du centre médical
│   │   ├── BookingModal.tsx       # Modale de réservation étape par étape (Wizard)
│   │   ├── AppointmentsDrawer.tsx # Panneau latéral de gestion des rendez-vous
│   │   ├── Button.tsx             # Composant bouton accessible
│   │   └── DetailCard.tsx         # Carte générique de présentation de contenu
│   ├── hooks/
│   │   └── useAppointments.ts     # Hook personnalisé de persistance et gestion des rendez-vous
│   ├── types/
│   │   └── medical.ts             # Schémas TypeScript stricts (Doctor, Appointment, Category)
│   ├── pages/
│   │   └── LandingPage.tsx        # Orchestration principale de la vue patient
│   ├── App.tsx                    # Point d'entrée du routage (wouter)
│   ├── main.tsx                   # Montage React 19
│   └── index.css                  # Styles Tailwind CSS v4
├── index.html              # Balises SEO, Google Fonts Montserrat/Roboto
├── package.json            # Dépendances nettoyées et scripts npm/pnpm
├── tsconfig.json           # Configuration TypeScript stricte
└── vite.config.ts          # Bundler ultra-rapide Vite
```

---

## Stack Technique & Choix d'Ingénierie

- **React 19 & TypeScript 5.8** : Typage strict, composants fonctionnels sans dépendances obsolètes ni types `any`.
- **Tailwind CSS v4** : Système de tokens moderne, design fluide adapté au mobile comme aux grands écrans.
- **Lucide React** : Iconographie cohérente et sémantique pour une interface médicale épurée.
- **LocalStorage State Machine** : Gestion d'état fluide et sans friction permettant à un recruteur de tester immédiatement la création, l'affichage et l'annulation d'un rendez-vous sans avoir besoin d'une clé d'API tierce.
- **Vite 7** : Démarrage à chaud en millisecondes et bundle de production optimisé.

---

## Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v9+) ou `npm`

### Installation & Lancement
```bash
# 1. Cloner le dépôt
git clone https://github.com/karaag2/doctor_blythe_web_app.git
cd doctor_blythe_web_app

# 2. Installer les dépendances
pnpm install

# 3. Lancer en local
pnpm run dev
```

L'application est disponible immédiatement sur : [http://localhost:5173](http://localhost:5173)

### Compilation pour la Production
```bash
pnpm run build
```

---

## Points Clés à Valoriser en Entretien / Recrutement

1. **Vision Produit de Bout en Bout** : L'application n'est pas une simple maquette statique, mais une application interactive avec persistance de données, gestion des erreurs et retours utilisateurs clairs.
2. **Qualité de Code & Typage Strict** : Structure modulaire en composants React découplés, custom hooks et typage TypeScript exhaustif.
3. **Sens du Design & Ergonomie Médicale** : Interface soignée pensée pour rassurer le patient et accélérer l'accès aux soins de santé.

---

## Auteur & Licence
- Projet développé et maintenu par **Amos Issa**.
- Sous licence **MIT**.

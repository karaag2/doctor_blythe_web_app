import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

const Contac: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Veuillez renseigner tous les champs obligatoires.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Simulation d'envoi API sécurisé
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="bg-sky-50/50 text-slate-800 py-20 scroll-mt-20 border-t border-sky-100/80 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Informations et Secrétariat Médical Niamey */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-sky-500 uppercase tracking-widest">
                CONTACT & ACCÈS CLINIQUE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-slate-900 leading-tight">
                Nous Contacter à Niamey
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                Une question sur nos consultations, nos spécialités ou besoin d'assistance pour votre prise de rendez-vous ? Notre équipe d'accueil médical vous répond avec diligence.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition">
                <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Localisation du Centre</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Boulevard Mali Béro, Quartier Plateau, Niamey - Niger
                  </p>
                  <p className="text-[11px] text-sky-600 font-medium mt-1">À proximité du Rond-point Maourey</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition">
                <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Standard Téléphonique</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">
                    +227 20 73 45 80 / +227 90 22 11 00
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Du lundi au samedi : 08h00 - 19h00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition">
                <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Courriel Officiel</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">
                    contact@medcare.ne
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Urgences & Gardes</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Service de garde médicale ouvert 7j/7 avec permanence téléphonique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact Harmonisé en Blanc / Sky */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-500/5 border border-sky-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Envoyez-nous un Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Secrétariat médical & coordination des soins
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <ShieldCheck size={14} /> Secret Médical Garanti
              </div>
            </div>

            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Message Bien Reçu !</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Votre demande a bien été transmise à notre secrétariat à Niamey. Nous vous recontacterons dans les meilleurs délais.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-full cursor-pointer transition shadow-md shadow-sky-500/20"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Votre Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Hawa Abdou ou Ali Moussa"
                      className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none text-sm text-slate-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@exemple.ne"
                      className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none text-sm text-slate-800 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Objet de votre demande
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Renseignement consultation, spécialité, convention CNSS..."
                    className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none text-sm text-slate-800 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez votre demande médicale ou le motif de prise de contact..."
                    className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none text-sm text-slate-800 transition"
                  />
                </div>

                {errorMsg && <p className="text-xs text-red-500 font-medium">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-semibold rounded-full text-xs transition cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-500/25 active:scale-98"
                >
                  {isSubmitting ? (
                    "Transmission en cours..."
                  ) : (
                    <>
                      <Send size={14} /> Envoyer votre message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer médical harmonisé avec fond doux */}
        <div className="mt-16 pt-8 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} medCare - Centre Médical Niamey, Niger. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <span className="hover:text-sky-600 transition cursor-pointer">Mentions Légales</span>
            <span className="hover:text-sky-600 transition cursor-pointer">Protection des Données</span>
            <span className="hover:text-sky-600 transition cursor-pointer">Ordre National des Médecins du Niger</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contac;

/* eslint-disable */
// @ts-nocheck
import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICES = [
  { id: "innen", title: "Innenreinigung", duration: "ca. 2-3 Std.", price: "ab 150 CHF", desc: "Tiefenreinigung von Leder, Polstern & Cockpit" },
  { id: "aussen", title: "Außenreinigung", duration: "ca. 1.5-2 Std.", price: "ab 120 CHF", desc: "Handwäsche, Lackschonung & Versiegelung" },
  { id: "komplett", title: "Komplettreinigung", duration: "ca. 4-5 Std.", price: "ab 280 CHF", desc: "Rundum-Wellness für Ihr Fahrzeug" },
  { id: "felgen", title: "Felgen & Reifen", duration: "ca. 1 Std.", price: "ab 90 CHF", desc: "Intensivreinigung, Bremsstaub-Entfernung & Pflege" },
];

const VEHICLE_TYPES = [
  { id: "limo", label: "Limousine / Coupé" },
  { id: "suv", label: "SUV / Kombi" },
  { id: "sport", label: "Sportwagen / Supercar" },
  { id: "van", label: "Transporter / Van" },
];

const TIME_SLOTS = ["08:00 Uhr", "10:30 Uhr", "13:30 Uhr", "16:00 Uhr"];

const ContactInline = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [vehicleType, setVehicleType] = useState("limo");
  const [vehicleModel, setVehicleModel] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [location, setLocation] = useState({ strasse: "", plz: "", ort: "", zusatz: "", accessible: false });
  const [validationError, setValidationError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stepsList = [
    "Leistung",
    "Fahrzeug",
    "Standort",
    "Datum & Zeit",
    "Kontaktdaten",
    "Bestätigung"
  ];

  const handleNext = () => {
    setValidationError("");
    if (step === 3) {
      if (!location.strasse.trim() || !location.plz.trim() || !location.ort.trim()) {
        setValidationError("Bitte füllen Sie Strasse und Hausnummer, PLZ sowie Ort aus.");
        return;
      }
    }
    if (step === 4) {
      if (!selectedDate) {
        setValidationError("Bitte wählen Sie ein Wunschdatum aus.");
        return;
      }
    }
    if (step === 5) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setValidationError("Bitte füllen Sie Name, E-Mail und Telefonnummer aus.");
        return;
      }
    }
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const currentVehicleTypeObj = VEHICLE_TYPES.find((v) => v.id === vehicleType) || VEHICLE_TYPES[0];

  return (
    <section aria-label="Booking section" className="py-16 md:py-24 bg-[#0a0a0a] text-foreground">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="px-3.5 py-1 mb-3 text-xs font-medium uppercase tracking-wider text-[#007AFF] bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-full">
              Online Terminbuchung
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Termin online anfragen
            </h2>
            <p className="text-white/60 max-w-xl text-sm md:text-base">
              In wenigen Schritten zu Ihrem Wunschtermin. Schnell, unkompliziert und direkt bestätigt.
            </p>
          </div>

          <div className="max-w-3xl mx-auto card rounded-2xl bg-[#121212] border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl">
            {/* Stepper Header */}
            {!isSubmitted && (
              <div className="mb-8 border-b border-white/10 pb-6">
                {/* Progress bar line */}
                <div className="relative mb-6">
                  <div className="overflow-hidden h-1.5 text-xs flex rounded bg-white/10">
                    <div
                      style={{ width: `${(step / 6) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#007AFF] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Step Indicators */}
                <div className="grid grid-cols-5 gap-1 text-center">
                  {stepsList.map((stLabel, idx) => {
                    const stepNum = idx + 1;
                    const isActive = step === stepNum;
                    const isDone = step > stepNum;
                    return (
                      <div
                        key={stepNum}
                        onClick={() => isDone && setStep(stepNum)}
                        className={`flex flex-col items-center transition-colors ${
                          isDone ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold mb-1 transition-all ${
                            isActive
                              ? "bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/30 scale-105"
                              : isDone
                              ? "bg-[#007AFF]/20 text-[#007AFF] border border-[#007AFF]/40"
                              : "bg-white/5 text-white/40 border border-white/10"
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4" /> : stepNum}
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs font-medium hidden sm:block ${
                            isActive
                              ? "text-white font-semibold"
                              : isDone
                              ? "text-[#007AFF]"
                              : "text-white/40"
                          }`}
                        >
                          {stLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Form Content */}
            {isSubmitted ? (
              <div className="text-center py-10 px-2 space-y-4">
                <div className="w-16 h-16 bg-[#007AFF]/20 text-[#007AFF] border border-[#007AFF]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Anfrage erfolgreich übermittelt!</h3>
                <p className="text-white/70 max-w-md mx-auto text-sm sm:text-base">
                  Vielen Dank, <span className="text-white font-medium">{formData.name || "Kunde"}</span>. Wir haben Ihre Terminanfrage für <span className="text-white font-medium">{currentServiceObj.title}</span> erhalten und melden uns umgehend bei Ihnen.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2.5 mt-6">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Fahrzeug:</span>
                    <span className="text-white font-medium">{currentVehicleTypeObj.label} {vehicleModel ? `(${vehicleModel})` : ""}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Termin:</span>
                    <span className="text-white font-medium">{selectedDate ? selectedDate : "Wunschdatum"} um {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">E-Mail:</span>
                    <span className="text-white font-medium">{formData.email}</span>
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Weitere Anfrage stellen
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* STEP 1: LEISTUNG WÄHLEN */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-xs flex items-center justify-center font-bold">1</span>
                        1. Leistung wählen
                      </h3>
                      <p className="text-xs text-white/60 mt-1">Wählen Sie die gewünschte Aufbereitungs-Leistung aus.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES.map((srv) => {
                        const isSelected = selectedService === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv.id)}
                            className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between ${
                              isSelected
                                ? "bg-[#007AFF]/15 border-[#007AFF] shadow-lg shadow-[#007AFF]/10 ring-1 ring-[#007AFF]"
                                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-white text-base">{srv.title}</h4>
                                <span className="text-xs font-semibold text-[#007AFF] bg-[#007AFF]/20 px-2 py-0.5 rounded-full">{srv.price}</span>
                              </div>
                              <p className="text-xs text-white/60 mb-3">{srv.desc}</p>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                              <span>{srv.duration}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#007AFF] bg-[#007AFF]" : "border-white/30"}`}>
                                {isSelected && <Check className="w-3 h-3 text-white" />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: FAHRZEUG ANGEBEN */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-xs flex items-center justify-center font-bold">2</span>
                        2. Fahrzeug angeben
                      </h3>
                      <p className="text-xs text-white/60 mt-1">Welches Fahrzeug möchten Sie aufbereiten lassen?</p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-2">Fahrzeugkategorie</label>
                      <div className="grid grid-cols-2 gap-3">
                        {VEHICLE_TYPES.map((vt) => {
                          const isSelected = vehicleType === vt.id;
                          return (
                            <button
                              type="button"
                              key={vt.id}
                              onClick={() => setVehicleType(vt.id)}
                              className={`p-3.5 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all flex items-center justify-between ${
                                isSelected
                                  ? "bg-[#007AFF]/15 border-[#007AFF] text-white ring-1 ring-[#007AFF]"
                                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              <span>{vt.label}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#007AFF] bg-[#007AFF]" : "border-white/30"}`}>
                                {isSelected && <Check className="w-3 h-3 text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Marke & Modell <span className="text-white/40">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="z.B. Porsche 911 GT3 / BMW M3 Competition"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all"
                      ></input>
                    </div>
                  </div>
                )}

                {/* STEP 3: DATUM UND UHRZEIT WÄHLEN */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-xs flex items-center justify-center font-bold">3</span>
                        3. Datum und Uhrzeit wählen
                      </h3>
                      <p className="text-xs text-white/60 mt-1">Wählen Sie Ihren bevorzugten Wunschtermin.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">Wunschdatum</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all [color-scheme:dark]"
                      ></input>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-2">Uhrzeit</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all text-center ${
                                isSelected
                                  ? "bg-[#007AFF] border-[#007AFF] text-white shadow-md shadow-[#007AFF]/20"
                                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: KONTAKTDATEN EINGEBEN */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-xs flex items-center justify-center font-bold">4</span>
                        4. Kontaktdaten eingeben
                      </h3>
                      <p className="text-xs text-white/60 mt-1">Wie dürfen wir Sie für die Bestätigung erreichen?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Vor- und Nachname"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] transition-all"
                        ></input>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/80 mb-1">Telefonnummer *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+41 79 123 45 67"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] transition-all"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">E-Mail Adresse *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.email@beispiel.ch"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] transition-all"
                      ></input>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">Anmerkungen oder Besonderheiten</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Besondere Wünsche, Verschmutzungsgrad etc."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#007AFF] transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* STEP 5: ANFRAGE BESTÄTIGEN */}
                {step === 5 && (
                  <div className="space-y-5">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#007AFF]/20 text-[#007AFF] text-xs flex items-center justify-center font-bold">5</span>
                        5. Anfrage bestätigen
                      </h3>
                      <p className="text-xs text-white/60 mt-1">Überprüfen Sie Ihre Angaben vor dem Absenden.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Gewählte Leistung:</span>
                        <span className="text-white font-semibold text-right">{currentServiceObj.title} ({currentServiceObj.price})</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Fahrzeug:</span>
                        <span className="text-white font-semibold text-right">{currentVehicleTypeObj.label} {vehicleModel ? `(${vehicleModel})` : ""}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Wunschtermin:</span>
                        <span className="text-white font-semibold text-right">{selectedDate ? selectedDate : "Auf Anfrage"} um {selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Kontaktdaten:</span>
                        <span className="text-white font-semibold text-right">{formData.name || "Nicht angegeben"} | {formData.phone || "-"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">E-Mail:</span>
                        <span className="text-white font-semibold text-right">{formData.email || "Nicht angegeben"}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#007AFF]/10 border border-[#007AFF]/20 rounded-xl text-xs text-[#007AFF] flex items-start gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Kostenlose & unverbindliche Anfrage. Wir prüfen die Verfügbarkeit und bestätigen Ihren Termin umgehend.</span>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl border border-white/10 text-xs sm:text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" /> Zurück
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-[#007AFF] hover:bg-[#007AFF]/90 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-lg shadow-[#007AFF]/25 ml-auto"
                    >
                      Weiter <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-6 py-2.5 rounded-xl bg-[#007AFF] hover:bg-[#007AFF]/90 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-lg shadow-[#007AFF]/25 ml-auto"
                    >
                      <Check className="w-4 h-4" /> Anfrage bestätigen
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default function ContactSection() {
  return (
    <div data-webild-section="contact" data-section="contact" id="contact">
      <ContactInline />
    </div>
  );
}

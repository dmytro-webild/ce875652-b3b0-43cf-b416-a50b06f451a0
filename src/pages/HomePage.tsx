import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="NIVWERK"
      description="Präzision in jeder Kurve. Exklusive Fahrzeugaufbereitung für höchste Ansprüche in der Schweiz."
      primaryButton={{
        text: "Termin vereinbaren",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Unsere Leistungen",
        href: "#services",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3JmMNFbajJzdaQaLpSwfgd9i6cl/tmp/ultra-realistic-premium-black-sports-car-1790274781749-272a641d.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="Expertise"
      title="Unsere Exklusiv-Leistungen"
      description="Individuelle Lösungen für die Ästhetik und den Erhalt Ihres Fahrzeugs."
      items={[
        {
          title: "Interieur-Aufbereitung",
          description: "Tiefenreinigung und Veredelung Ihres Fahrzeuginnenraums mit erstklassigen Produkten.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metallic-car_23-2151113206.jpg",
        },
        {
          title: "Exterieur-Veredelung",
          description: "Akribische Aufbereitung des Lacks für ein makelloses, tiefes Finish.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-shot-green-car-headlamps_181624-8290.jpg",
        },
        {
          title: "Fahrzeug-Schutz",
          description: "Hochwertige Schutzversiegelung für langanhaltenden Glanz und Oberflächenwiderstand.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/auto-service-salon-doign-car-wrapping_23-2149593830.jpg",
        },
        {
          title: "Felgen-Aufbereitung",
          description: "Spezielle Reinigung und Pflege für makellose Felgenoptik.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/car-wheel-splashing-through-mud_23-2151979276.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Über NIVWERK"
      quote="NIVWERK steht für Schweizer Präzision und bedingungslose Liebe zum Detail. Wir behandeln jedes Fahrzeug, als wäre es unser eigenes Meisterwerk."
      author="Markus Weber"
      role="Gründer & Chef-Detailer"
      imageSrc="http://img.b2bpic.net/free-photo/kitchen-drawer-cutlery-organizer-white-cabinet-minimal-style-modern-storage-solution_169016-72197.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <FeaturesImageBento
      tag="Galerie"
      title="Unsere Arbeiten"
      description="Ein Einblick in die vollendete Ästhetik unserer Fahrzeug-Detailings."
      items={[
        {
          title: "Finish",
          description: "Perfektes Finish",
          imageSrc: "http://img.b2bpic.net/free-photo/superhero-car-vintage-style_23-2151636241.jpg",
        },
        {
          title: "Interieur",
          description: "Details pur",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-empty-room_23-2150528571.jpg",
        },
        {
          title: "Felgen",
          description: "Sauberkeit",
          imageSrc: "http://img.b2bpic.net/free-photo/vinyl-record-with-retro-texture-assortment_23-2149075965.jpg",
        },
        {
          title: "Front",
          description: "Design",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metallic-car-design_23-2151113103.jpg",
        },
        {
          title: "Logo",
          description: "Markenpräzision",
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp_74190-5517.jpg",
        },
        {
          title: "Studio",
          description: "Arbeitsumfeld",
          imageSrc: "http://img.b2bpic.net/free-photo/breathtaking-view-lightened-tunnel-road_181624-17780.jpg",
        },
        {
          title: "Supercar",
          description: "Resultat",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-door-handle-modern-red-car_181624-12744.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Fragen?"
      title="Häufige Fragen"
      description="Alles was Sie über NIVWERK wissen sollten."
      categories={[
        {
          name: "Allgemein",
          items: [
            {
              question: "Wie lange dauert eine Aufbereitung?",
              answer: "Je nach Umfang dauert dies zwischen 1 und 3 Tagen.",
            },
            {
              question: "Wo befinden Sie sich?",
              answer: "Wir sind zentral in Zürich für Sie tätig.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Kontakt"
      text="Bereit für das Upgrade Ihres Fahrzeugs? Vereinbaren Sie noch heute einen Termin."
      primaryButton={{
        text: "Jetzt anfragen",
        href: "mailto:info@nivwerk.ch",
      }}
      secondaryButton={{
        text: "Telefon",
        href: "tel:+41440000000",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

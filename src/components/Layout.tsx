import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Leistungen",
    "href": "#services"
  },
  {
    "name": "Über uns",
    "href": "#about"
  },
  {
    "name": "Galerie",
    "href": "#gallery"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Kontakt",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="NIVWERK"
      ctaButton={{
        text: "Jetzt anfragen",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="NIVWERK"
      columns={[
        {
          title: "Kontakt",
          items: [
            {
              label: "info@nivwerk.ch",
              href: "mailto:info@nivwerk.ch",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 NIVWERK GmbH. Alle Rechte vorbehalten."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "LinkedIn",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

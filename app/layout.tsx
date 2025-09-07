import type { Metadata } from "next";
import { Source_Serif_4, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jain Dental Clinic | Brampton & Vaughan Dentists",
    template: "%s | Jain Dental Clinic"
  },
  description:
    "Personalized, professional dental care in Brampton and Vaughan. Family dentistry, cosmetic dentistry, orthodontics, implants, and emergency dental services.",
  keywords: [
    "Dentist Brampton",
    "Dentist Vaughan",
    "Family Dentistry",
    "Cosmetic Dentistry",
    "Emergency Dentist"
  ],
  openGraph: {
    type: "website",
    url: "https://jaindentalclinic.ca",
    title: "Jain Dental Clinic | Brampton & Vaughan Dentists",
    description:
      "Trusted family and cosmetic dental care in Brampton and Vaughan. Book your appointment today.",
    siteName: "Jain Dental Clinic",
    images: [
      {
        url: "https://jaindentalclinic.ca/images/clinic-banner-og.jpg",
        width: 2333,
        height: 1224,
        alt: "Jain Dental Clinic Reception"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Dental Clinic | Brampton & Vaughan Dentists",
    description:
      "Trusted family and cosmetic dental care in Brampton and Vaughan. Book your appointment today.",
    images: ["https://jaindentalclinic.ca/images/clinic-banner-og.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://jaindental.ca"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://jaindental.ca#organization",
                  "name": "Jain Dental Clinic",
                  "image": [
                    "https://jaindentalclinic.ca/images/clinic-banner-og.jpg",
                    "https://jaindentalclinic.ca/images/home-services-background.jpg",
                    "https://jaindentalclinic.ca/images/team-banner.jpg",
                    "https://jaindentalclinic.ca/images/clinic-brampton-1.jpg"
                  ],
                  "url": "https://jaindental.ca",
                  "logo": "https://jaindental.ca/icons/jdc-logo.png",
                  "sameAs": [
                    "https://www.facebook.com/dentalclinicbrampton/",
                    "https://www.instagram.com/jaindentalbrampton/",
                    "https://www.facebook.com/dentistvaughan/",
                    "https://www.instagram.com/jaindental.centre/"
                  ]
                },
                {
                  "@type": "Dentist",
                  "@id": "https://jaindental.ca#brampton",
                  "name": "Jain Dental Clinic - Brampton",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3938 Cottrelle Blvd #1",
                    "addressLocality": "Brampton",
                    "addressRegion": "ON",
                    "postalCode": "L6P 2R1",
                    "addressCountry": "CA"
                  },
                  "telephone": "+19057940100",
                  "openingHours": [
                    "Mo,We,Fr 10:00-19:00",
                    "Tu,Th 10:00-18:00",
                    "Sa 09:00-17:00"
                  ],
                  "sameAs": [
                    "https://www.facebook.com/dentalclinicbrampton/",
                    "https://www.instagram.com/jaindentalbrampton/",
                    "https://maps.google.com/?cid=7117627754303709870"
                  ],
                  "parentOrganization": {
                    "@id": "https://jaindental.ca#organization"
                  }
                },
                {
                  "@type": "Dentist",
                  "@id": "https://jaindental.ca#vaughan",
                  "name": "Jain Dental Clinic - Vaughan",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3971 Major MacKenzie Dr W #6",
                    "addressLocality": "Vaughan",
                    "addressRegion": "ON",
                    "postalCode": "L4H 4G1",
                    "addressCountry": "CA"
                  },
                  "telephone": "+19058320050",
                  "openingHours": [
                    "Mo-Fr 10:00-19:00",
                    "Sa 09:00-17:00"
                  ],
                  "sameAs": [
                    "https://www.facebook.com/dentistvaughan/",
                    "https://www.instagram.com/jaindental.centre/",
                    "https://maps.google.com/?cid=15944274168614871605"
                  ],
                  "parentOrganization": {
                    "@id": "https://jaindental.ca#organization"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

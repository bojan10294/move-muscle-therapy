export interface Certificate {
  id: string;
  titles: { en: string; sr: string };
  issuers: { en: string; sr: string };
  year: number;
  imagePath: string;
}

export const certificates: Certificate[] = [
  {
    id: "dry-needling-l1",
    titles: {
      en: "Dry Needling Level 1 — Cervical, Thoracic and Lumbar Spine",
      sr: "Dry Needling Nivo 1 — Cervikalni, torakalni i lumbalni kičmeni stub",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2023,
    imagePath: "/images/certificates/cert-dry-needling-l1.jpg",
  },
  {
    id: "dry-needling-l2",
    titles: {
      en: "Dry Needling Level 2 — Upper and Lower Extremities",
      sr: "Dry Needling Nivo 2 — Gornji i donji ekstremiteti",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2024,
    imagePath: "/images/certificates/cert-dry-needling-l2.jpg",
  },
  {
    id: "dry-needling-master",
    titles: {
      en: "Dry Needling Master Therapist",
      sr: "Dry Needling Master Terapeut",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2025,
    imagePath: "/images/certificates/cert-dry-needling-master.jpg",
  },
  {
    id: "cupping",
    titles: {
      en: "Locomotor System Cupping Therapy",
      sr: "Kuping terapija lokomotornog sistema",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2025,
    imagePath: "/images/certificates/cert-cupping.jpg",
  },
  {
    id: "biomechanics",
    titles: {
      en: "Biomechanics in Rehabilitation",
      sr: "Biomehanika u rehabilitaciji",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2024,
    imagePath: "/images/certificates/cert-biomechanics.jpg",
  },
  {
    id: "palpation",
    titles: {
      en: "Palpation Anatomy and Diagnostics, Module 1: Trunk and Spine",
      sr: "Palpaciona anatomija i dijagnostika, Modul 1: Trup i kičma",
    },
    issuers: { en: "Physioverse Academy", sr: "Physioverse Academy" },
    year: 2025,
    imagePath: "/images/certificates/cert-palpation.jpg",
  },
  {
    id: "wellness-spa",
    titles: {
      en: 'Wellness & Spa "Professional" — Sports Massage (Olimpia)',
      sr: 'Wellness & Spa "Profesional" — Olimpia sportske masaže',
    },
    issuers: { en: "Wellness Academy", sr: "Wellness Academy" },
    year: 2021,
    imagePath: "/images/certificates/cert-wellness-spa.jpg",
  },
  {
    id: "tfh",
    titles: {
      en: 'Workshop "Body Scan Without a Scanner" — TFH Technique',
      sr: 'Radionica "Skeniranje tela bez skenera" — TFH Tehnika',
    },
    issuers: { en: "Synergia, Vienna", sr: "Synergia, Beč" },
    year: 2023,
    imagePath: "/images/certificates/cert-tfh.jpg",
  },
  {
    id: "mental-training",
    titles: {
      en: "Mental Training for Coaches",
      sr: "Mentalni trening za trenere",
    },
    issuers: { en: "", sr: "" },
    year: 2022,
    imagePath: "/images/certificates/cert-mental-training.jpg",
  },
];

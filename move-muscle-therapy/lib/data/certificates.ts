export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number;
  imagePath: string;
}

export const certificates: Certificate[] = [
  {
    id: "dry-needling-l1",
    title: "Dry Needling Level 1 — Cervical, Thoracic and Lumbar Spine",
    issuer: "Physioverse Academy",
    year: 2023,
    imagePath: "/images/certificates/cert-dry-needling-l1.jpg",
  },
  {
    id: "dry-needling-l2",
    title: "Dry Needling Level 2 — Upper and Lower Extremities",
    issuer: "Physioverse Academy",
    year: 2024,
    imagePath: "/images/certificates/cert-dry-needling-l2.jpg",
  },
  {
    id: "dry-needling-master",
    title: "Dry Needling Master Therapist",
    issuer: "Physioverse Academy",
    year: 2025,
    imagePath: "/images/certificates/cert-dry-needling-master.jpg",
  },
  {
    id: "cupping",
    title: "Locomotor System Cupping Therapy",
    issuer: "Physioverse Academy",
    year: 2025,
    imagePath: "/images/certificates/cert-cupping.jpg",
  },
  {
    id: "biomechanics",
    title: "Biomechanics in Rehabilitation",
    issuer: "Physioverse Academy",
    year: 2024,
    imagePath: "/images/certificates/cert-biomechanics.jpg",
  },
  {
    id: "palpation",
    title: "Palpation Anatomy and Diagnostics, Module 1: Trunk and Spine",
    issuer: "Physioverse Academy",
    year: 2025,
    imagePath: "/images/certificates/cert-palpation.jpg",
  },
  {
    id: "wellness-spa",
    title: 'Wellness & Spa "Professional" — Olimpia sportske masaže',
    issuer: "Wellness Academy",
    year: 2021,
    imagePath: "/images/certificates/cert-wellness-spa.jpg",
  },
  {
    id: "tfh",
    title: 'Radionica "Skeniranje tela bez skenera" — TFH Tehnika',
    issuer: "Synergia, Beč",
    year: 2023,
    imagePath: "/images/certificates/cert-tfh.jpg",
  },
  {
    id: "mental-training",
    title: "Mentalni trening za trenere",
    issuer: "",
    year: 2022,
    imagePath: "/images/certificates/cert-mental-training.jpg",
  },
];

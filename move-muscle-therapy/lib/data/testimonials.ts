export interface Testimonial {
  id: string;
  name: string;
  text: string;
  textEn?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jelena Č.",
    text: "Vrlo stručni, ljubazni i posvećeni. Rezultati su brzo vidljivi, a pristup pacijentu na visokom nivou. Preporučujem svima!",
    textEn: "Very professional, kind and dedicated. The results are quickly visible, and the approach to the patient is at a high level. I recommend it to everyone!",
    rating: 5,
    date: "Mart 2026",
  },
  {
    id: "t2",
    name: "Branko K.",
    text: "Posle prvog tretmana bol u leđima je poprilicno  nestao. Fizioterapeut je izuzetno stručan i pažljiv, a prostor u kome radi je prijatan, uredan i čist. Zaista sjajno iskustvo i velika preporuka!",
    textEn: "After the first treatment, my back pain was pretty much gone. The physiotherapist is extremely professional and attentive, and the space he works in is pleasant, tidy and clean. A truly great experience and highly recommended!",
    rating: 5,
    date: "Oktobar 2025",
  },
  {
    id: "t3",
    name: "Petar M.",
    text: "Odlična saradnja sa Lukom, čovek se jako razume u ono što radi i predlaže. Higijena, pristup, znanje i komunikacija na zavidnom nivou. Sve preporuke!",
    textEn: "Excellent cooperation with Luka, the man really understands what he does and suggests. Hygiene, approach, knowledge and communication at an enviable level. All recommendations!",
    rating: 5,
    date: "Jul 2025",
  },
];

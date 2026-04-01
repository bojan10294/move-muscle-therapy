export interface Service {
  id: string;
  iconName: string;
  nameKey: string;
  descriptionKey: string;
}

export const services: Service[] = [
  {
    id: "dry-needling",
    iconName: "Zap",
    nameKey: "services.dryNeedling.name",
    descriptionKey: "services.dryNeedling.description",
  },
  {
    id: "hijama-wet",
    iconName: "Droplets",
    nameKey: "services.hijamaWet.name",
    descriptionKey: "services.hijamaWet.description",
  },
  {
    id: "hijama-dry",
    iconName: "Wind",
    nameKey: "services.hijamaDry.name",
    descriptionKey: "services.hijamaDry.description",
  },
  {
    id: "therapeutic-massage",
    iconName: "HandHeart",
    nameKey: "services.therapeuticMassage.name",
    descriptionKey: "services.therapeuticMassage.description",
  },
  {
    id: "relax-massage",
    iconName: "Waves",
    nameKey: "services.relaxMassage.name",
    descriptionKey: "services.relaxMassage.description",
  },
  {
    id: "chiropractic",
    iconName: "Bone",
    nameKey: "services.chiropractic.name",
    descriptionKey: "services.chiropractic.description",
  },
  {
    id: "pressure-boots",
    iconName: "Activity",
    nameKey: "services.pressureBoots.name",
    descriptionKey: "services.pressureBoots.description",
  },
  {
    id: "electrotherapy",
    iconName: "BoltIcon",
    nameKey: "services.electrotherapy.name",
    descriptionKey: "services.electrotherapy.description",
  },
];

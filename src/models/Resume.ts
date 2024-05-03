import type { Certificate } from './Certificate';
import type { Education } from './Education';
import type { Experience } from './Experience';
import type { InfoItem } from './InfoItem';
import type { Language } from './Language';
import type { Profile } from './Profile';
import type { Project } from './Project';
import type {ExternalExperience} from "@/models/ExternalExperience";

export interface Resume {
  profile: Profile;
  cv: InfoItem;
  information: InfoItem[];
  skill: string[];
  language: Language[];
  experience: Experience[];
  externalExperience: ExternalExperience[];
  education: Education[];
  certificate: Certificate[];
  project: Project[];
}

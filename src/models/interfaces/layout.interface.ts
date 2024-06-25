import { Section } from "./section.interface";

export interface Layout {
  id: string;
  label: string;
  sections: Section[];
}
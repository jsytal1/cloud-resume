export interface Metadata {
  title: string;
  description: string;
  image?: string;
}

export interface Location {
  postalCode?: string;
  city: string;
  countryCode: string;
  state: string;
}

export interface Basics {
  name: string;
  title: string;
  summary?: string;
  location: Location;
  email?: string;
  phone?: string;
}

export interface Profile {
  name: string;
  url: string;
}

export interface Experience {
  organization: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Education {
  organization: string;
  area_of_study: string;
  level: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Skills {
  category: string;
  keywords: string[];
}

export interface Certificate {
  name: string;
  date: string;
  url: string;
  issuer: string;
  image: string;
}

export interface Project {
  name: string;
  url: string;
  highlights: string[];
}

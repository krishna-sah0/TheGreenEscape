
export enum Section {
  Home = 'Home',
  About = 'About Us',
  Menu = 'Menu',
  Amusement = 'Amusement Zone',
  Wellness = 'Wellness & Massage',
  Events = 'Events & Offers',
  Gallery = 'Gallery',
  Booking = 'Reservation/Booking',
  Contact = 'Contact Us',
}

export interface NavLink {
  name: Section;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Game {
  name: string;
  description: string;
  pricing: string;
  image: string;
}

export interface WellnessService {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

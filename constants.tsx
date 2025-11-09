
import React from 'react';
import { Section, NavLink, MenuCategory, Game, WellnessService, TeamMember, GalleryImage } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: Section.Home, href: '#home' },
  { name: Section.About, href: '#about' },
  { name: Section.Menu, href: '#menu' },
  { name: Section.Amusement, href: '#amusement' },
  { name: Section.Wellness, href: '#wellness' },
  { name: Section.Events, href: '#events' },
  { name: Section.Gallery, href: '#gallery' },
  { name: Section.Booking, href: '#booking' },
  { name: Section.Contact, href: '#contact' },
];

export const MENU_DATA: MenuCategory[] = [
    {
        category: "Coffee & Teas",
        items: [
            { name: "Espresso", description: "Rich and aromatic single shot.", price: "$3.00", image: "https://picsum.photos/seed/espresso/400/400" },
            { name: "Latte", description: "Smooth espresso with steamed milk.", price: "$4.50", image: "https://picsum.photos/seed/latte/400/400" },
            { name: "Herbal Tea", description: "A selection of calming herbal infusions.", price: "$3.50", image: "https://picsum.photos/seed/tea/400/400" }
        ]
    },
    {
        category: "Main Courses",
        items: [
            { name: "Avocado Toast", description: "Sourdough toast with fresh avocado, chili flakes.", price: "$9.00", image: "https://picsum.photos/seed/avocado/400/400" },
            { name: "Urban Burger", description: "Juicy beef patty with all the classic fixings.", price: "$14.00", image: "https://picsum.photos/seed/burger/400/400" },
            { name: "Quinoa Salad", description: "Healthy and vibrant salad with seasonal vegetables.", price: "$12.00", image: "https://picsum.photos/seed/salad/400/400" }
        ]
    }
];

export const GAMES_DATA: Game[] = [
    { name: "Snooker", description: "Classic billiards on a professional-grade table.", pricing: "$15/hour", image: "https://picsum.photos/seed/snooker/600/400" },
    { name: "Foosball", description: "Fast-paced tabletop soccer for endless fun.", pricing: "$5/game", image: "https://picsum.photos/seed/foosball/600/400" },
    { name: "Board Games", description: "A wide collection of classic and modern board games.", pricing: "Free with purchase", image: "https://picsum.photos/seed/boardgames/600/400" }
];

export const WELLNESS_DATA: WellnessService[] = [
    { name: "Deep Tissue Massage", description: "Targets deeper layers of muscle and connective tissue.", duration: "60 min", price: "$80", image: "https://picsum.photos/seed/deeptissue/600/400" },
    { name: "Aromatherapy Massage", description: "Gentle massage with essential oils for relaxation.", duration: "60 min", price: "$75", image: "https://picsum.photos/seed/aromatherapy/600/400" },
    { name: "Head & Shoulder Massage", description: "Quick relief for neck and shoulder tension.", duration: "30 min", price: "$45", image: "https://picsum.photos/seed/headmassage/600/400" }
];

export const TEAM_DATA: TeamMember[] = [
    { name: "Jane Doe", role: "Founder & Head Chef", bio: "Jane's passion for culinary arts and community inspired The Urban Oasis.", image: "https://picsum.photos/seed/jane/400/400" },
    { name: "John Smith", role: "Lead Barista", bio: "John crafts every cup of coffee with precision and a friendly smile.", image: "https://picsum.photos/seed/john/400/400" },
    { name: "Emily White", role: "Wellness Coordinator", bio: "Emily is a certified therapist dedicated to your relaxation and well-being.", image: "https://picsum.photos/seed/emily/400/400" }
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { src: "https://picsum.photos/seed/gallery1/600/400", alt: "Delicious latte art", category: "Food & Drinks" },
    { src: "https://picsum.photos/seed/gallery2/600/400", alt: "Cozy corner of the cafe", category: "Our Ambiance" },
    { src: "https://picsum.photos/seed/gallery3/600/400", alt: "Friends playing snooker", category: "Gaming Fun" },
    { src: "https://picsum.photos/seed/gallery4/600/400", alt: "Relaxing massage room", category: "Relaxation Zone" },
    { src: "https://picsum.photos/seed/gallery5/600/400", alt: "Customers enjoying their meal", category: "Customer Moments" },
    { src: "https://picsum.photos/seed/gallery6/600/400", alt: "A plate of fresh pastries", category: "Food & Drinks" },
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: 'Instagram', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.167a4.833 4.833 0 100 9.666 4.833 4.833 0 000-9.666zM12 15a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" /></svg> },
    { name: 'Twitter', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
];

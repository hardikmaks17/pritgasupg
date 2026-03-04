import pgRoom1 from "@/assets/pg-room-1.jpg";
import pgRoom2 from "@/assets/pg-room-2.jpg";
import pgRoom3 from "@/assets/pg-room-3.jpg";
import pgBuilding1 from "@/assets/pg-building-1.jpg";
import pgBuilding2 from "@/assets/pg-building-2.jpg";
import pgDining from "@/assets/pg-dining.jpg";
import pgFacility from "@/assets/pg-facility-1.jpg";
import pgFood from "@/assets/pg-food.jpg";

export const BRAND = {
  name: "Pritgasu PG Services",
  tagline: "Affordable PG Accommodation in Satellite, Ahmedabad",
  subtitle: "Safe, Comfortable & Trusted PG for Students & Working Professionals",
  area: "A-1, Ground Floor, Arun Prakash Flats, Nr Saibaba Temple, Nr Mocca, Satellite, Ahmedabad, 380015",
  experience: "10+",
  email: "pritgasupg@gmail.com",
};

export const CONTACTS = {
  sudhir: { name: "Sudhir Brahmbhatt", phone: "9601933046", label: "96019 33046" },
  gayatri: { name: "Gayatri Brahmbhatt", phone: "9737729780", label: "97377 29780" },
};

export const whatsappLink = (msg = "Hi, I'm interested in Pritgasu PG Services.") =>
  `https://wa.me/91${CONTACTS.gayatri.phone}?text=${encodeURIComponent(msg)}`;

export const callLink = (who: "sudhir" | "gayatri" = "gayatri") =>
  `tel:+91${CONTACTS[who].phone}`;

export const mainReviewLink = () => 
  "https://maps.app.goo.gl/aUAFMAQGdq3VNdFz6";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/pritgasu_pg",
  facebook: "https://www.facebook.com/Pritgasupgservices/",
  whatsapp: whatsappLink(),
  maps: mainReviewLink(),
};

export type AvailabilityStatus = "Available" | "Limited Availability" | "Fully Occupied";

export interface NearbyLocation {
  type: "college" | "office" | "hospital" | "transport" | "market";
  name: string;
  distance: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PGProperty {
  id: string;
  name: string;
  shortName: string;
  address: string;
  description: string;
  image: string;
  images: string[];
  startingPrice: number;
  availability: AvailabilityStatus;
  nearbyLocations: NearbyLocation[];
}

const defaultNearby: NearbyLocation[] = [
  { type: "college", name: "Gujarat University", distance: "3 km" },
  { type: "college", name: "LD Engineering College", distance: "4 km" },
  { type: "office", name: "ISCON Mega Mall", distance: "1.5 km" },
  { type: "hospital", name: "Sterling Hospital", distance: "2 km" },
  { type: "transport", name: "Jodhpur Cross Roads BRTS", distance: "1 km" },
  { type: "market", name: "Satellite Market", distance: "0.5 km" },
];

const pgImages = [pgRoom1, pgRoom2, pgRoom3, pgBuilding1, pgDining, pgFacility];

export const PG_PROPERTIES: PGProperty[] = [
  {
    id: "jodhpur-kunj-11",
    name: "Pritgasu PG — Jodhpur Kunj 11",
    shortName: "JK-11",
    address: "11, Jodhpur Kunj Society, Opp Le Meridien Hotel, Opp Satellite Police Station, Ramdev Nagar, Ahmedabad, 380015.",
    description: "Well-maintained PG with homely atmosphere",
    image: pgRoom1,
    images: pgImages,
    startingPrice: 8500,
    availability: "Limited Availability",
    nearbyLocations: defaultNearby,
  },
  {
    id: "jodhpur-kunj-23",
    name: "Pritgasu PG — Jodhpur Kunj 23",
    shortName: "JK-23",
    address: "23, Jodhpur Kunj Society, Opp Le Meridien Hotel, Opp Satellite Police Station, Ramdev Nagar, Ahmedabad, 380015.",
    description: "Spacious 5 BHK Bunglow with premium amenities",
    image: pgBuilding1,
    images: pgImages,
    startingPrice: 8500,
    availability: "Available",
    nearbyLocations: defaultNearby,
  },
  {
    id: "jodhpur-kunj-29",
    name: "Pritgasu PG — Jodhpur Kunj 29",
    shortName: "JK-29",
    address: "29, Jodhpur Kunj Society, Opp Le Meridien Hotel, Opp Satellite Police Station, Ramdev Nagar, Ahmedabad, 380015.",
    description: "Comfortable PG in prime Jodhpur Kunj location",
    image: pgRoom2,
    images: pgImages,
    startingPrice: 8500,
    availability: "Available",
    nearbyLocations: defaultNearby,
  },
  {
    id: "arun-prakash-a1",
    name: "Pritgasu PG — Arun Prakash A1",
    shortName: "AP-A1",
    address: "A-1, Ground Floor, Arun Prakash Flats, Nr Saibaba Temple, Nr Mocca, Satellite, Ahmedabad, 380015.",
    description: "Convenient ground floor access with all facilities",
    image: pgBuilding2,
    images: pgImages,
    startingPrice: 8500,
    availability: "Available",
    nearbyLocations: defaultNearby,
  },
  {
    id: "arun-prakash-b33",
    name: "Pritgasu PG — Arun Prakash B33",
    shortName: "AP-B33",
    address: "B-33, Third Floor, Arun Prakash Flats, Nr Saibaba Temple, Nr Mocca, Satellite, Ahmedabad, 380015.",
    description: "Well-furnished rooms with modern amenities",
    image: pgDining,
    images: pgImages,
    startingPrice: 8500,
    availability: "Limited Availability",
    nearbyLocations: defaultNearby,
  },
  {
    id: "arun-prakash-b34",
    name: "Pritgasu PG — Arun Prakash B34",
    shortName: "AP-B34",
    address: "B-33, Third Floor, Arun Prakash Flats, Nr Saibaba Temple, Nr Mocca, Satellite, Ahmedabad, 380015.",
    description: "Third floor flat with great ventilation and views",
    image: pgRoom3,
    images: pgImages,
    startingPrice: 8500,
    availability: "Limited Availability",
    nearbyLocations: defaultNearby,
  },
  {
    id: "sarthi-c43",
    name: "Pritgasu PG — Sarthi Avenue C43",
    shortName: "SA-C43",
    address: "C-43, Sarthi Avenue, Nr Le Meridien Hotel, Ramdev Nagar, Ahmedabad, 380015.",
    description: "Modern PG in Sarthi Avenue complex",
    image: pgFacility,
    images: pgImages,
    startingPrice: 8500,
    availability: "Available",
    nearbyLocations: defaultNearby,
  },
  {
    id: "vasupujya-10",
    name: "Pritgasu PG — Vasupujya Row House 10",
    shortName: "VP-10",
    address: "10, Vasupujya Row House, Opp Punchgini Apartment, Opp Satyagraha Chhavni Road, Nr Le Meridien Hotel, Satellite, Ahmedabad, 380015.",
    description: "Row house PG with spacious common areas",
    image: pgRoom1,
    images: pgImages,
    startingPrice: 8500,
    availability: "Limited Availability",
    nearbyLocations: defaultNearby,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "What is the minimum stay duration?", answer: "The minimum stay duration is 1 month. We offer flexible lease terms for students and working professionals." },
  { question: "Is food included in the rent?", answer: "Yes! Three home-cooked Gujarati meals (breakfast, lunch, and dinner) are included in the monthly rent." },
  { question: "What are the payment options?", answer: "We accept UPI, bank transfer, and cash payments. Rent is due on the 1st of every month." },
  { question: "Is there a security deposit?", answer: "Yes, a refundable security deposit of 1 month's rent is required at the time of move-in." },
  { question: "Are visitors allowed?", answer: "Visitors are allowed in common areas during daytime hours only. Overnight guests are not permitted." },
  { question: "What is the gate closing time?", answer: "The gate closes at 11:00 PM. Late entry can be arranged by informing the management in advance." },
  { question: "Is parking available?", answer: "Yes, street parking space is available for two-wheelers at select PG locations." },
  { question: "Can I choose my roommate?", answer: "Yes, if you're joining with a friend, we can arrange for you to share a room together, subject to availability." },
];

export interface RoomType {
  type: string;
  sharing: string;
  acType: string;
  price: number;
}

export const ROOM_TYPES: RoomType[] = [
  { type: "Premium Twin Room", sharing: "2 Sharing", acType: "AC", price: 13500 },
  { type: "Comfort Triple Room", sharing: "3 Sharing", acType: "AC", price: 11000 },
  { type: "Standard Triple Room", sharing: "3 Sharing", acType: "Non-AC", price: 10000 },
  { type: "Drawing Room", sharing: "6 Sharing", acType: "Non-AC", price: 8500 },
];

export const FACILITIES = [
  { icon: "Bed", label: "Bed & Wardrobe" },
  { icon: "Tv", label: "TV" },
  { icon: "Refrigerator", label: "Fridge" },
  { icon: "Droplets", label: "RO Water" },
  { icon: "Wifi", label: "High Speed WiFi" },
  { icon: "Flame", label: "Gas & Geyser" },
  { icon: "SprayCanIcon", label: "Housekeeping" },
  { icon: "UtensilsCrossed", label: "Dining Table" },
  { icon: "Snowflake", label: "AC / Non-AC" },
  { icon: "CookingPot", label: "Food (3 Meals)" },
  { icon: "Car", label: "Parking" },
  { icon: "WashingMachine", label: "Laundry" },
];

export const MEAL_PLAN = {
  breakfast: [
    "Bataka Pauva", "Bread Butter", "Thepla", "Ganthiya",
    "Farsipuri", "Bataka Onion Bajiya", "Sev Khamni",
  ],
  lunch: [
    "Aalu Matar", "Bhinda Bateta", "Mix Veg", "Khichadi-Kadhi",
    "Ringan Bateta", "Sev Tameta", "Chole", "Paneer Sabji",
  ],
  dinner: [
    "Dal, Rice & Roti", "Paneer Sabji with Paratha",
    "Pulav", "Thepla with Sukhi Bhaji", "Dal Makhani",
  ],
};

export const HIGHLIGHTS = [
  { icon: "Home", title: "Fully Furnished", description: "Beds, wardrobes & all essentials provided" },
  { icon: "Snowflake", title: "AC / Non-AC", description: "Choose rooms that fit your comfort" },
  { icon: "UtensilsCrossed", title: "Food Included", description: "3 home-cooked meals daily" },
  { icon: "Wifi", title: "High Speed WiFi", description: "Stay connected 24/7" },
  { icon: "MapPin", title: "Prime Location", description: "Satellite & Ramdev Nagar, Ahmedabad" },
  { icon: "Shield", title: "24/7 Security", description: "CCTV surveillance & secure premises" },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Patel",
    role: "IT Professional",
    text: "Best PG in Satellite area! The food is amazing and the rooms are very clean. Sudhir bhai and Gayatri ben take great care of all residents.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Student",
    text: "I've been staying here for 2 years. The homely food and WiFi are excellent. Highly recommended for students!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Working Professional",
    text: "Very affordable and well-maintained PG. The location is very convenient — close to ISCON and SP Ring Road.",
    rating: 4,
  },
  {
    name: "Sneha Joshi",
    role: "MBA Student",
    text: "The facilities are top-notch for the price. Clean rooms, good food, and friendly management. Feels like home!",
    rating: 5,
  },
];

export const HOUSE_RULES = [
  "No smoking or alcohol on premises",
  "Visitors allowed only in common areas during daytime",
  "Maintain silence after 10:00 PM",
  "Keep rooms and common areas clean",
  "Inform management before leaving for extended periods",
  "Electricity and water to be used responsibly",
];

export const GALLERY_IMAGES = {
  rooms: [
    { id: "room-1", src: pgRoom1, alt: "PG Room - 2 Sharing" },
    { id: "room-2", src: pgRoom2, alt: "PG Room - AC Single" },
    { id: "room-3", src: pgRoom3, alt: "PG Room - 3 Sharing" },
  ],
  building: [
    { id: "building-1", src: pgBuilding1, alt: "PG Building Exterior" },
    { id: "building-2", src: pgBuilding2, alt: "PG Row House Complex" },
  ],
  facilities: [
    { id: "facility-1", src: pgFacility, alt: "Clean Bathroom" },
    { id: "facility-2", src: pgDining, alt: "Dining Area" },
  ],
  food: [
    { id: "food-1", src: pgFood, alt: "Gujarati Thali" },
    { id: "food-2", src: pgDining, alt: "Dining Hall" },
  ],
};

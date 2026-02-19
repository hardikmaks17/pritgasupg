export const BRAND = {
  name: "Pritgasu PG Services",
  tagline: "Premium PG Accommodation in Satellite, Ahmedabad",
  subtitle: "Safe, Comfortable & Affordable PG for Students & Working Professionals",
  area: "Satellite, Ahmedabad 380015",
  experience: "10+",
  email: "gayatrisbarot111@gmail.com",
};

export const CONTACTS = {
  sudhir: { name: "Sudhir Brahmbhatt", phone: "9601933046", label: "96019 33046" },
  gayatri: { name: "Gayatri Brahmbhatt", phone: "9737729780", label: "97377 29780" },
};

export const whatsappLink = (msg = "Hi, I'm interested in Pritgasu PG Services.") =>
  `https://wa.me/91${CONTACTS.sudhir.phone}?text=${encodeURIComponent(msg)}`;

export const callLink = (who: "sudhir" | "gayatri" = "sudhir") =>
  `tel:+91${CONTACTS[who].phone}`;

export interface PGProperty {
  id: string;
  name: string;
  shortName: string;
  address: string;
  description: string;
  image: string;
  startingPrice: number;
}

export const PG_PROPERTIES: PGProperty[] = [
  {
    id: "jodhpur-kunj-23",
    name: "Pritgasu PG — Jodhpur Kunj #23",
    shortName: "JK-23",
    address: "23, Jodhpur Kunj Society, Satellite, Ahmedabad 380015",
    description: "Spacious 5 BHK Bunglow with premium amenities",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "jodhpur-kunj-11",
    name: "Pritgasu PG — Jodhpur Kunj #11",
    shortName: "JK-11",
    address: "11, Jodhpur Kunj Society, Satellite, Ahmedabad 380015",
    description: "Well-maintained PG with homely atmosphere",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "jodhpur-kunj-29",
    name: "Pritgasu PG — Jodhpur Kunj #29",
    shortName: "JK-29",
    address: "29, Jodhpur Kunj Society, Satellite, Ahmedabad 380015",
    description: "Comfortable PG in prime Jodhpur Kunj location",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "arunprakash-b34",
    name: "Pritgasu PG — Arunprakash B34",
    shortName: "AP-B34",
    address: "B 34, Third Floor, Arunprakash Society, Satellite, Ahmedabad 380015",
    description: "Third floor flat with great ventilation and views",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "arunprakash-b33",
    name: "Pritgasu PG — Arunprakash B33",
    shortName: "AP-B33",
    address: "B 33, Third Floor, Arunprakash Society, Satellite, Ahmedabad 380015",
    description: "Well-furnished rooms with modern amenities",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "arunprakash-a1",
    name: "Pritgasu PG — Arunprakash A1",
    shortName: "AP-A1",
    address: "A 1, Ground Floor, Arunprakash Society, Satellite, Ahmedabad 380015",
    description: "Convenient ground floor access with all facilities",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "sarthi-c43",
    name: "Pritgasu PG — Sarthi Avenue C43",
    shortName: "SA-C43",
    address: "C 43, Sarthi Avenue, Satellite, Ahmedabad 380015",
    description: "Modern PG in Sarthi Avenue complex",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
  {
    id: "vasupujya-10",
    name: "Pritgasu PG — Vasupujya #10",
    shortName: "VP-10",
    address: "10, Vasupujya Row House, Satellite, Ahmedabad 380015",
    description: "Row house PG with spacious common areas",
    image: "/placeholder.svg",
    startingPrice: 8500,
  },
];

export interface RoomType {
  type: string;
  sharing: string;
  acType: string;
  price: number;
}

export const ROOM_TYPES: RoomType[] = [
  { type: "Standard Room", sharing: "2 Sharing", acType: "AC", price: 13500 },
  { type: "Standard Room", sharing: "3 Sharing", acType: "AC", price: 11000 },
  { type: "Standard Room", sharing: "3 Sharing", acType: "Non-AC", price: 10000 },
  { type: "Drawing Room", sharing: "—", acType: "Non-AC", price: 8500 },
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
  { icon: "MapPin", title: "Prime Location", description: "Satellite, Ahmedabad" },
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
  "Gate closing time: 11:00 PM",
  "Inform management before leaving for extended periods",
  "Electricity and water to be used responsibly",
];

export const GALLERY_IMAGES = {
  rooms: Array.from({ length: 6 }, (_, i) => ({ id: `room-${i + 1}`, src: "/placeholder.svg", alt: `PG Room ${i + 1}` })),
  building: Array.from({ length: 4 }, (_, i) => ({ id: `building-${i + 1}`, src: "/placeholder.svg", alt: `Building ${i + 1}` })),
  facilities: Array.from({ length: 4 }, (_, i) => ({ id: `facility-${i + 1}`, src: "/placeholder.svg", alt: `Facility ${i + 1}` })),
  food: Array.from({ length: 4 }, (_, i) => ({ id: `food-${i + 1}`, src: "/placeholder.svg", alt: `Food ${i + 1}` })),
};



# Pritgasu PG Services — Website Plan

## Brand & Design
- **Colors**: Primary Yellow (#FEDA3E) for CTAs/buttons, Secondary Pink (#CB0B50) for headings/accents, white background
- **Style**: Clean, minimalist, premium, mobile-first with smooth animations, rounded corners, subtle shadows
- **Typography**: Modern sans-serif with clear hierarchy

---

## Real Business Data (from PDF)

### Contacts
- **Sudhir Brahmbhatt**: 96019 33046
- **Gayatri Brahmbhatt**: 97377 29780
- **Email**: gayatrisbarot111@gmail.com

### Pricing
| Room Type | Sharing | AC/Non-AC | Price |
|-----------|---------|-----------|-------|
| Standard Room | 2 Sharing | AC | ₹13,500/month |
| Standard Room | 3 Sharing | AC | ₹11,000/month |
| Standard Room | 3 Sharing | Non-AC | ₹10,000/month |
| Drawing Room | N/A | Non-AC | ₹8,500/month |

### 8 PG Locations (all in Satellite, Ahmedabad 380015)
1. 23, Jodhpur Kunj Society (5 BHK Bunglow)
2. 11, Jodhpur Kunj Society
3. 29, Jodhpur Kunj Society
4. B 34, Third Floor, Arunprakash Society
5. B 33, Third Floor, Arunprakash Society
6. A 1, Ground Floor, Arunprakash Society
7. C 43, Sarthi Avenue
8. 10, Vasupujya Row House

### Meal Plan
- **Breakfast**: Bataka Pauva, Bread Butter, Thepla, Ganthiya, Farsipuri, Bataka Onion Bajiya, Sev Khamni
- **Lunch**: Variety of sabjis with roti (Aalu Matar, Bhinda Bateta, Mix Veg, Khichadi-Kadhi, etc.)
- **Dinner**: Dal, Rice & Roti, Paneer Sabji with Paratha & Pulav, Thepla with Sukhi Bhaji, Dal Makhani

### Facilities
Bed & Wardrobe, Fridge, RO Water, WiFi, Gas, Geyser, Housekeeping, Dining Table, AC/Non-AC options, Food (3 meals), Parking, TV, Laundry

---

## Pages & Features

### 1. Global Elements
- **Sticky Header**: Logo + navigation (Home, Our PGs, Gallery, About, Contact) + WhatsApp & Call buttons
- **Floating WhatsApp Button**: Always visible bottom-right on all pages (links to Sudhir's number)
- **Footer**: Logo, quick links, contact info for both managers, address, email, copyright

### 2. Home Page
- **Hero Section**: Large banner with title "Premium PG Accommodation in Satellite, Ahmedabad", subtitle, and 3 CTA buttons (View PGs, WhatsApp, Call)
- **Highlights Section**: 6 icon cards (Furnished Rooms, AC/Non-AC, Food Included, High Speed WiFi, Prime Location, 24/7 Security)
- **Our PGs Preview**: Grid of 8 PG property cards with real addresses and names
- **Meal Plan Section**: Showcase the breakfast/lunch/dinner menu with the real menu items
- **Facilities Section**: All real facilities with icons (TV, Fridge, Laundry, Housekeeping, RO, Food, WiFi, Parking, Geyser, Bed & Wardrobe)
- **Pricing Preview**: Display the 4 room type options with real prices
- **Testimonials**: 3-5 sample customer reviews
- **Location**: Embedded Google Map of Satellite, Ahmedabad area
- **CTA Section**: Large conversion block with WhatsApp and Call buttons for both managers

### 3. Our PGs Page
- Grid layout of all 8 PG properties with real addresses
- Each card shows: placeholder image, PG name (e.g., "Pritgasu PG — Jodhpur Kunj #23"), address, and "View Details" button

### 4. Individual PG Details Page (Dynamic Template)
- PG name and address
- Image gallery carousel (placeholder images)
- Room types & pricing table with all 4 real pricing tiers
- Complete facilities list
- House rules section
- Google Map embed for specific location
- Inquiry form (Name, Phone, Move-in Date)
- WhatsApp and Call buttons for both Sudhir & Gayatri

### 5. Gallery Page
- Responsive image grid with category filters (Rooms, Building, Facilities, Food)
- Using placeholder images initially (owner can replace later)

### 6. About Page
- Real business introduction from PDF: 10+ years of experience, Satellite Ahmedabad focus
- Mission statement about safe, welcoming, stress-free living
- Managed by section featuring both Sudhir & Gayatri Brahmbhatt

### 7. Contact Page
- Both contact numbers prominently displayed
- WhatsApp buttons for both managers
- Email: gayatrisbarot111@gmail.com
- Address (Satellite, Ahmedabad area)
- Google Map embed
- Inquiry form (Name, Phone, Message)

---

## Data Architecture
- Centralized `pgData.ts` file with all 8 PG properties, pricing, facilities, meal plans, and contact info
- Easy to add new properties or update pricing by editing one file
- No backend needed — fully static site

## Conversion Features
- WhatsApp and Call buttons on every page for both managers
- Floating WhatsApp button always accessible
- Inquiry forms on PG detail and Contact pages
- Multiple CTA sections throughout the site


import {
  FQAGeneral,
  FQASupport,
  FQAOthers,
} from "./FrequentlyAskedQuestionsDB";
import { NavLinksData } from "./NavLinksDB";
import { FooterLinksData } from "./FooterLinksDB";

export { FQAGeneral, FQASupport, FQAOthers, NavLinksData, FooterLinksData };

export const BannerContent = [
  {
    id: 1,
    icon: "/undraw_package_arrived_63rf.svg",
    alt: "",
    title: "100+ packages delivered",
  },
  {
    id: 2,
    icon: "/undraw_best_place_re_lne9.svg",
    alt: "",
    title: "200+ delivery branches",
  },
  {
    id: 3,
    icon: "/undraw_delivery_truck_vt6p.svg",
    alt: "",
    title: "10,000+ modes of transportation",
  },
  {
    id: 4,
    icon: "/undraw_city_driver_re_9xyv.svg",
    alt: "",
    title: "17,000+ registered drivers",
  },
];

export const FooterContent = {
  title: "The Road Is The Way. Our Way.",
  address:
    "Suite 15B/16B Emerald Plaza, Block 2A Sapphire Street, Greenville District, Metroville, Fakeville.",
  contactInfo: [
    { title: "email", info: "roadwaydelivery@yahoo.com" },
    { title: "phone", info: "XXX-234-1231" },
    { title: "customer support hours", info: "Mon to Fri: 9:00AM - 5:00PM" },
  ],
};

export const Testimonials = [
  {
    avatar: "/avatar-1-female_compressed.jpg",
    alt: "avatar of a woman",
    client: "Sarah Johnson",
    residence: "New York City",
    review:
      "I have been using Road Way Valley for all my delivery needs, and I couldn't be happier with their service. The drivers are always punctual, and my packages arrive in perfect condition. I highly recommend them!",
  },
  {
    avatar: "/avatar-2-male_compressed.jpg",
    alt: "avatar of a man",
    client: "Mark Thompson",
    residence: "Los Angeles",
    review:
      "Road Way Valley has been an invaluable partner for my business. Their reliable delivery service has helped me streamline operations and satisfy my customers. I'm grateful for their professionalism and attention to detail.",
  },
  {
    avatar: "/avatar-2-female_compressed.jpg",
    alt: "avatar of a woman",
    client: "Emily Davis",
    residence: "Chicago",
    review:
      "As an e-commerce entrepreneur, I rely on Road Way Valley for timely and efficient deliveries. Their exceptional customer service and seamless tracking system give me peace of mind. I couldn't ask for a better delivery partner!",
  },
  {
    avatar: "/avatar-1-male_compressed.jpg",
    alt: "avatar of a man",
    client: "David Rodriguez",
    residence: "Miami",
    review:
      "I've used several delivery services in the past, but Road Way Valley stands out. Their drivers are friendly, and the team goes above and beyond to ensure my packages are delivered on time. I highly recommend their services.",
  },
  {
    avatar: "/avatar-3-female_compressed.jpg",
    alt: "avatar of a woman",
    client: "Lisa Smith",
    residence: "San Francisco",
    review:
      "Road Way Valley has been my go-to delivery service for years. Their commitment to professionalism and reliability is unmatched. I appreciate their attention to detail and the seamless experience they provide.",
  },
];

export const AboutContent = [
  {
    image: "/entrepreneur_compressed.jpg",
    alt: "Entrepreneur In Meeting",
    title: "Know About Us",
    description:
      "At Road Way Delivery, we provide efficient and reliable roadway delivery solutions. With years of industry expertise, we ensure safe and timely transportation of your packages. From small parcels to fragile goods, our skilled drivers and logistics experts handle it all. Our advanced tracking systems offer real-time updates, giving you peace of mind. Choose Road Way Delivery for professionalism, integrity, and exceptional customer service. Experience the difference our reliable and cost-effective services can make for your business.",
  },
  {
    image: "/warehouse_compressed.jpg",
    alt: "A Truck Warehouse Full Of Trucks",
    title: "Our Mission",
    description:
      "Road Way Delivery aims to exceed customer expectations with exceptional roadway delivery services. Our priority is reliability, ensuring on-time and safe deliveries while offering personalized support tailored to unique needs. With advanced tracking systems, we provide real-time updates, ensuring complete shipment visibility. We are committed to sustainability, minimizing environmental impact, and fostering seamless operations and growth through collaboration with customers, suppliers, and partners. Our dedication to excellence, integrity, and continuous improvement sets us apart as a trusted transportation partner.",
  },
  {
    image: "/trucks_compressed.jpg",
    alt: "A Line Of Trucks Taken Before Departure",
    title: "Our Vision",
    description:
      "Road Way Delivery envisions a future where roadway delivery services redefine efficiency and convenience. We strive to be the leading innovator in the industry, leveraging cutting-edge technologies to revolutionize the transportation experience. Our vision is to create a seamless and interconnected delivery network that connects businesses and individuals worldwide. Through sustainable practices and strategic partnerships, we aim to shape a greener and more sustainable future for the logistics industry. By consistently exceeding customer expectations and embracing a culture of continuous improvement, we aspire to be the trusted choice for all roadway delivery needs.",
  },
];

export const StepsContent = [
  {
    id: 1,
    title: "Step 1",
    icon: "/undraw_order_delivered_re_v4ab.svg",
    alt: "order delivered",
    subtitle: "prepare your package",
    description: "Seal it, Ship it, Smile - Your Package in Good Hands!",
  },
  {
    id: 2,
    title: "Step 2",
    icon: "/undraw_order_a_car_-3-tww.svg",
    alt: "order a car",
    subtitle: "choose your transportation",
    description: "Ride with Confidence - Choose Transportation Excellence!",
  },
  {
    id: 3,
    title: "Step 3",
    icon: "/undraw_map_dark_re_36sy.svg",
    alt: "dark map",
    subtitle: "pick your destination",
    description:
      "Discover the Destination of Your Dreams - Unleash Your Wanderlust!",
  },
  {
    id: 4,
    title: "Step 4",
    icon: "/undraw_online_calendar_re_wk3t.svg",
    alt: "delivery calendar",
    subtitle: "select your date",
    description: "Time Escapade - Unlock Your delivery's Perfect Date!",
  },
];

export const BookingFormSelect = [
  {
    id: 1,
    icon: "/truck-delivery.svg",
    title: "Choose Transportation",
    select: {
      name: "transport",
      id: "transportation",
      default: "Motorcycle",
    },
    options: [
      { id: 1, value: "Motorcycle", option: "Motorcycle" },
      { id: 2, value: "Sedan", option: "Sedan" },
      { id: 3, value: "MPV", option: "MPV" },
      { id: 4, value: "L300/Van", option: "L300/Van" },
      { id: 5, value: "Closed Truck", option: "Closed Truck" },
      { id: 6, value: "6w Fwd Truck", option: "6w Fwd Truck" },
      { id: 7, value: "Wing Truck", option: "Wing Truck" },
    ],
  },
  {
    id: 2,
    icon: "/map-pin.svg",
    title: "Pick-Up Location",
    select: {
      name: "pick-up location",
      id: "pick-up__location",
      default: "New Zealand",
    },
    options: [
      { id: 1, value: "Los Angeles", option: "Los Angeles" },
      { id: 2, value: "New Zealand", option: "New Zealand" },
    ],
  },
  {
    id: 3,
    icon: "/map-pin-check.svg",
    title: "Drop-Off Location",
    select: {
      name: "drop-off location",
      id: "drop-off__location",
      default: "Mexico",
    },
    options: [{ id: 1, value: "Mexico", option: "Mexico" }],
  },
];

export const BookingFormDate = [
  {
    id: 1,
    icon: "/calendar-time.svg",
    title: "Pick-Up Date",
    date: {
      name: "pick-up date",
      id: "pick-up__date",
    },
  },
  {
    id: 2,
    icon: "/calendar-check.svg",
    title: "Drop-Off Date",
    date: {
      name: "drop-off date",
      id: "drop-off__date",
    },
  },
];

export const PricingPlans = [
  {
    id: 1,
    thumbnail: "/motorcycle_compressed.jpg",
    alt: "metallic matte black motor scooter",
    name: "motorycycle",
    price: 40,
    rating: "⭐⭐⭐⭐⭐",

    load: "150kg-250kg",
    model: "avenis",
    brand: "suzuki",
    year: "2023",
    seats: 2,
    doors: 0,
    ac: "no",
    transmission: "CV Transmission",
    fuel: "gasoline",

    checkoutUrl: "/",
  },
  {
    id: 2,
    thumbnail: "/sedan-nissan-altima_compressed.jpg",
    alt: "White Sedan",
    name: "Sedan",
    price: 100,
    rating: "⭐⭐⭐⭐⭐",
    load: "400kg-600kg",
    model: "altima",
    brand: "nissan",
    year: "2013",
    seats: 5,
    doors: 4,
    ac: "yes",
    transmission: "CVT/automatic",
    fuel: "gasoline",
    checkoutUrl: "/",
  },
  {
    id: 3,
    thumbnail: "/mpv_compressed.jpg",
    alt: "Black MPV",
    name: "MPV",
    price: 150,
    rating: "⭐⭐⭐⭐⭐",
    load: "600kg-1,000kg",
    model: "s-max",
    brand: "Ford",
    year: "2012",
    seats: 8,
    doors: 4,
    ac: "yes",
    transmission: "automatic",
    fuel: "gasoline",
    checkoutUrl: "/",
  },
  {
    id: 4,
    thumbnail: "/l300-van_compressed.jpg",
    alt: "White L300/Van",
    name: "Van",
    price: 200,
    rating: "⭐⭐⭐⭐⭐",
    load: "800kg-1,000kg",
    model: "L300",
    brand: "Mitsubishi",
    year: "2023",
    seats: 15,
    doors: 4,
    ac: "yes",
    transmission: "manual",
    fuel: "diesel",
    checkoutUrl: "/",
  },
  {
    id: 5,
    thumbnail: "/closed-truck_compressed.jpg",
    alt: "White Closed Truck",
    name: "Closed Van",
    price: 300,
    rating: "⭐⭐⭐⭐⭐",
    load: "1,000kg-5,000kg",
    model: "N-Series",
    brand: "Isuzu",
    year: "2007",
    seats: 2,
    doors: 2,
    ac: "no",
    transmission: "manual",
    fuel: "diesel",
    checkoutUrl: "/",
  },
  {
    id: 6,
    thumbnail: "/6w-fwd-truck_compressed.jpg",
    alt: "White Sedan",
    name: "6w Fwd Truck",
    price: 350,
    rating: "⭐⭐⭐⭐⭐",
    load: "3,000kg-10,000kg",
    model: "500 Series FG8JP7A",
    brand: "Hino",
    year: "2018",
    seats: 2,
    doors: 2,
    ac: "no",
    transmission: "manual",
    fuel: "diesel",
    checkoutUrl: "/",
  },
  {
    id: 7,
    thumbnail: "/wing-truck_compressed.jpg",
    alt: "Silver Wing Truck",
    name: "Wing Truck",
    price: 400,
    rating: "⭐⭐⭐⭐⭐",
    load: "3,000kg-15,000kg",
    model: "F-series",
    brand: "Isuzu",
    year: "2016",
    seats: 2,
    doors: 2,
    ac: "no",
    transmission: "manual",
    fuel: "diesel",
    checkoutUrl: "/",
  },
];

export const DownloadLinks = [
  { storelink: "", key: "", title: "" },
  { storelink: "", key: "", title: "" },
];

export const ValueContent = {
  image: "/road_compressed.jpg",
  alt: "road into the sunset",
  overline: "What Sets Us Apart",
  title: "Your roadway to an unforgettable experience.",
  description:
    "Uncover unparalleled deals on Your Roadway To An Unforgettable Experience. Our commitment to offering exceptional value ensures you enjoy top-quality services and products without stretching your budget. Immerse yourself in a curated selection of destinations and activities that promise awe-inspiring sights and cherished memories. Don't miss this opportunity to save big and indulge in a journey where exploration, wonder, and exhilaration come together to bring your travel dreams to life.",
  cta: "Learn More",
  feature: [
    {
      id: 1,
      icon: "/undraw_navigator_a479.svg",
      alt: "navigating the road",
      title: "road way delivery",
      sentence:
        "we can deliver any package to its destination connected to a road.",
    },
    {
      id: 2,
      icon: "/undraw_automobile_repair_ywci.svg",
      alt: "automobile maintenance",
      title: "ensured performance",
      sentence: "regular checks and maintenace to ensure safe delivery.",
    },
    {
      id: 3,
      icon: "/undraw_savings_re_eq4w.svg",
      alt: "saved money",
      title: "affordable pricing",
      sentence:
        "we support a range of clients allowing them to get the best deal to save their money.",
    },
    {
      id: 4,
      icon: "/undraw_online_payments_re_y8f2.svg",
      alt: "straight forward payment",
      title: "Transparent Pricing",
      sentence: "No surprises nor hidden fees. may your worries begone.",
    },
  ],
};

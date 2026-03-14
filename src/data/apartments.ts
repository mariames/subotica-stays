import beerCaffe1 from "@/assets/beercaffe/beer-caffe-1.jpg";
import beerCaffe2 from "@/assets/beercaffe/beer-caffe-2.jpg";
import beerCaffe3 from "@/assets/beercaffe/beer-caffe-3.jpg";
import beerCaffe4 from "@/assets/beercaffe/beer-caffe-4.jpg";
import beerCaffe5 from "@/assets/beercaffe/beer-caffe-5.jpg";
import beerCaffe6 from "@/assets/beercaffe/beer-caffe-6.jpg";
import beerCaffe7 from "@/assets/beercaffe/beer-caffe-7.jpg";
import beerCaffe8 from "@/assets/beercaffe/beer-caffe-8.jpg";
import beerCaffe9 from "@/assets/beercaffe/beer-caffe-9.jpg";

import art1 from "@/assets/artStudio/art-1.jpg";
import art2 from "@/assets/artStudio/art-2.jpg";
import art3 from "@/assets/artStudio/art-3.jpg";
import art4 from "@/assets/artStudio/art-4.jpg";
import art5 from "@/assets/artStudio/art-5.jpg";
import art6 from "@/assets/artStudio/art-6.jpg";
export interface Apartment {
  id: string;
  title: string;
  location: string;
  map: string;
  city: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  description: string;
  host: string;
  mob: string;
}

export const apartments: Apartment[] = [
  {
    id: "apartman-subotica-centar",
    title: "Beer Caffe",
    location: "Matije Korvina",
    map: "https://www.google.com/maps/embed/v1/place?q=Matije%20Korvina%204&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    city: "Centar",
    price: 40,
    rating: 9.5,
    reviews: 70,
    image: beerCaffe1,
    images: [beerCaffe1, beerCaffe2, beerCaffe3, beerCaffe4, beerCaffe5, beerCaffe6, beerCaffe7, beerCaffe8, beerCaffe9],
    guests: 6,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Washer", "TV", "terrace"],
    description: "Beer&Caffe Apartment in Subotica offers a spacious layout with two bedrooms and a living room. The ground-floor unit features a private entrance and garden views.Modern Amenities: Guests enjoy free WiFi, air-conditioning, and a fully equipped kitchenette. Additional amenities include a washing machine, dishwasher, and work desk. Outdoor Spaces: The apartment includes a terrace and a garden, providing relaxing outdoor areas. An outdoor dining area enhances the stay.",
    host: "Lehel",
    mob: "381691189771"
  },
  {
    id: "apartman-subotica-free-parking",
    title: "Art Studio",
    location: "Radijalac, 7 min od centra",
    map: "https://www.google.com/maps/embed/v1/place?q=Trg%20Jakaba%20i%20Komora%2028&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    city: "Belgrade",
    price: 20,
    rating: 10,
    reviews: 20,
    image: art1,
    images: [art1, art2, art3, art4, art5, art6 ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "Filter for Water", "Free Parking", "TV", "Workspace"],
    description: "Welcome to Art Studio, a thoughtfully designed space where comfort, creativity, and calm come together. Whether you're visiting Subotica for business, remote work, or a relaxing getaway, this modern studio offers everything you need for a memorable stay. The apartment blends minimalist design with a warm, artistic atmosphere, creating a space that feels both inspiring and restful. A cozy sleeping area, carefully arranged living space, and dedicated work corner make it perfect for solo travelers or couples who appreciate simplicity, style, and functionality. Guests especially love the peaceful atmosphere, free parking, fast internet, and convenient location, making Art Studio an ideal base for discovering the city while enjoying the feeling of a private retreat. Whether you're staying for a few nights or a longer visit, Art Studio offers a quiet, stylish home in the center of everything.",
    host: "Marijana",
    mob:"381653576070"
  }
];

export const cities = [
  { name: "Belgrade", slug: "belgrade", count: 45 },
  { name: "Novi Sad", slug: "novi-sad", count: 32 },
  { name: "Niš", slug: "nis", count: 18 },
];
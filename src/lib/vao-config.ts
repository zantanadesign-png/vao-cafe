import americano from "@/assets/vao-menu-americano.jpg";
import cappuccino from "@/assets/vao-menu-cappuccino.jpg";
import flatWhite from "@/assets/vao-menu-flat-white.jpg";
import cortado from "@/assets/vao-menu-cortado.jpg";
import espresso from "@/assets/vao-menu-espresso.jpg";
import pourOver from "@/assets/vao-menu-pour-over.jpg";
import batchBrew from "@/assets/vao-menu-batch-brew.jpg";
import coldBrew from "@/assets/vao-menu-cold-brew.jpg";
import honeyOatLatte from "@/assets/vao-menu-honey-oat-latte.jpg";
import espressoTonic from "@/assets/vao-menu-espresso-tonic.jpg";
import butterCroissant from "@/assets/vao-menu-butter-croissant.jpg";
import cinnamonRoll from "@/assets/vao-menu-cinnamon-roll.jpg";
import avocadoToast from "@/assets/vao-menu-avocado-toast.jpg";

// Replace null values with VAO's verified business information before launch.
export const vaoConfig = {
  brandName: "VAO",
  ORDER_URL: null as string | null,
  EMAIL: null as string | null,
  ADDRESS: "Al Khabra · Athlo Sports Complex" as string | null,
  INSTAGRAM_URL: "https://www.instagram.com/vaocafe.sa/" as string | null,
  studioName: null as string | null,
  studioInstagram: null as string | null,
  openingHours: [
    { day: "Saturday – Wednesday", hours: "1:00 PM – 12:00 AM" },
    { day: "Thursday – Friday", hours: "12:30 PM – 2:00 AM" },
  ],
  instagramHandle: "@vaocafe.sa",
};

// Existing editorial photographs are illustrative, not verified product photographs.
export const menuCategories = [
  { name: "Hot Drinks", items: [
    { name: "Espresso", price: 10, image: espresso, description: "Short, intense, and full of character." },
    { name: "Americano", price: 13, image: americano, description: "Espresso with hot water for a clean finish." },
    { name: "Flat White", price: 16, image: flatWhite, description: "Espresso with velvety micro-foam." },
    { name: "Cortado", price: 14, image: cortado, description: "Espresso and silky steamed milk." },
    { name: "Cappuccino", price: 15, image: cappuccino, description: "Smooth, creamy, and finished with latte art." },
    { name: "Latte", price: 15, image: honeyOatLatte, description: "" },
    { name: "Spanish Latte", price: 15, image: honeyOatLatte, description: "" },
    { name: "V60", price: 15, image: pourOver, description: "Slowly brewed, bringing every note into focus." },
    { name: "Infusion V60", price: 18, image: pourOver, description: "" },
    { name: "Coffee of the Day", price: 9, image: batchBrew, description: "" },
  ] },
  { name: "Cold Drinks", items: [
    { name: "Americano", price: 14, image: coldBrew, description: "" },
    { name: "Alfredo", price: 14, image: coldBrew, description: "" },
    { name: "Alfredo Infusion (Passion Fruit)", price: 18, image: espressoTonic, description: "" },
    { name: "VAO Signature", price: 18, image: espressoTonic, description: "" },
    { name: "Latte", price: 16, image: cortado, description: "" },
    { name: "Spanish Latte", price: 16, image: cortado, description: "" },
    { name: "V60", price: 17, image: coldBrew, description: "" },
    { name: "Infusion V60", price: 20, image: coldBrew, description: "" },
    { name: "Coffee of the Day", price: 10, image: coldBrew, description: "" },
    { name: "Matcha", price: 19, image: null, description: "" },
    { name: "Strawberry Matcha", price: 21, image: null, description: "" },
    { name: "Hibiscus", price: 16, image: null, description: "" },
  ] },
  // Illustrative food ideas requested for the menu preview; prices remain unset until confirmed.
  { name: "Small Bites", items: [
    { name: "Butter Croissant", price: null, image: butterCroissant, description: "A flaky, golden pastry with a buttery finish." },
    { name: "Cinnamon Roll", price: null, image: cinnamonRoll, description: "Soft, warmly spiced dough with a light glaze." },
    { name: "Avocado Toast", price: null, image: avocadoToast, description: "Smashed avocado on toasted artisan bread." },
    { name: "Almond Croissant", price: null, image: butterCroissant, description: "A crisp croissant with a delicate almond finish." },
    { name: "Avocado & Egg Toast", price: null, image: avocadoToast, description: "Creamy avocado and egg on toasted bread." },
    { name: "Honey Butter Croissant", price: null, image: butterCroissant, description: "A buttery croissant with a touch of honey." },
    { name: "French Toast", price: null, image: avocadoToast, description: "Golden toast with a soft, gently sweet center." },
    { name: "Mini Cinnamon Roll", price: null, image: cinnamonRoll, description: "A small, soft roll with cinnamon and glaze." },
    { name: "Pastry of the Day", price: null, image: butterCroissant, description: "A freshly baked pastry selected for the day." },
  ] },
];

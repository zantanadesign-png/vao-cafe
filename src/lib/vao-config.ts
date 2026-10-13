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
import matcha from "@/assets/vao-menu-matcha.jpg";
import strawberryMatcha from "@/assets/vao-menu-strawberry-matcha.jpg";
import hibiscus from "@/assets/vao-menu-hibiscus.jpg";

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
    { name: "Espresso", price: 10, image: espresso, description: "A short espresso, made for a moment of pause. A moment to call your own." },
    { name: "Americano", price: 13, image: americano, description: "Espresso and hot water, served as a warm cup. A moment to call your own." },
    { name: "Flat White", price: 16, image: flatWhite, description: "A flat white for your warm coffee ritual. A quiet moment between it all." },
    { name: "Cortado", price: 14, image: cortado, description: "A cortado for a little space in your day. A quiet moment between it all." },
    { name: "Cappuccino", price: 15, image: cappuccino, description: "A cappuccino for your daily coffee ritual. A quiet pause between it all." },
    { name: "Latte", price: 15, image: honeyOatLatte, description: "A warm latte for a little pause in your day. A pause worth returning to." },
    { name: "Spanish Latte", price: 15, image: honeyOatLatte, description: "A warm Spanish latte for your coffee ritual. A pause worth returning to." },
    { name: "V60", price: 15, image: pourOver, description: "A warm V60 for a little space in your day. A quiet pause between it all." },
    { name: "Infusion V60", price: 18, image: pourOver, description: "An Infusion V60 for your warm coffee ritual. A pause worth returning to." },
    { name: "Coffee of the Day", price: 9, image: batchBrew, description: "Our hot Coffee of the Day, a daily ritual. A quiet pause between it all." },
  ] },
  { name: "Cold Drinks", items: [
    { name: "Americano", price: 14, image: coldBrew, description: "A cold Americano for a pause in your day. A quiet moment between it all." },
    { name: "Alfredo", price: 14, image: coldBrew, description: "A cold Alfredo for a little space in your day. A pause to call your own." },
    { name: "Alfredo Infusion (Passion Fruit)", price: 18, image: espressoTonic, description: "Alfredo Infusion with passion fruit, served cold. A moment to slow down." },
    { name: "VAO Signature", price: 18, image: espressoTonic, description: "The VAO Signature, part of our cold drink menu. A moment between it all." },
    { name: "Latte", price: 16, image: cortado, description: "A cold latte for a little pause in your day. A pause worth returning to." },
    { name: "Spanish Latte", price: 16, image: cortado, description: "A cold Spanish latte for your coffee ritual. A pause worth returning to." },
    { name: "V60", price: 17, image: coldBrew, description: "A cold V60 for a little space in your day. A quiet pause between it all." },
    { name: "Infusion V60", price: 20, image: coldBrew, description: "An Infusion V60 for your cold coffee ritual. A pause worth returning to." },
    { name: "Coffee of the Day", price: 10, image: coldBrew, description: "Our cold Coffee of the Day, a daily ritual. A moment worth returning to." },
    { name: "Matcha", price: 19, image: matcha, description: "A cold matcha for a little space in your day. A moment to call your own." },
    { name: "Strawberry Matcha", price: 21, image: strawberryMatcha, description: "Strawberry Matcha, part of our cold drink menu. A moment between it all." },
    { name: "Hibiscus", price: 16, image: hibiscus, description: "A cold hibiscus drink for a pause in your day. A pause to call your own." },
  ] },
  // Illustrative food ideas requested for the menu preview; prices remain unset until confirmed.
  { name: "Small Bites", items: [
    { name: "Butter Croissant", price: null, image: butterCroissant, description: "A butter croissant for a little pause in your day. A pause to slow down." },
    { name: "Cinnamon Roll", price: null, image: cinnamonRoll, description: "A cinnamon roll for a little space in your day. A moment between it all." },
    { name: "Avocado Toast", price: null, image: avocadoToast, description: "Avocado toast for a little pause in your day. A moment to call your own." },
    { name: "Almond Croissant", price: null, image: butterCroissant, description: "An almond croissant for a pause in your day. A pause worth returning to." },
    { name: "Avocado & Egg Toast", price: null, image: avocadoToast, description: "Avocado and egg toast for a moment of pause. A pause worth returning to." },
    { name: "Honey Butter Croissant", price: null, image: butterCroissant, description: "A honey butter croissant for a moment of pause. A moment between it all." },
    { name: "French Toast", price: null, image: avocadoToast, description: "French toast for a little space in your day. A pause worth returning to." },
    { name: "Mini Cinnamon Roll", price: null, image: cinnamonRoll, description: "A mini cinnamon roll for a moment of pause. A moment worth returning to." },
    { name: "Pastry of the Day", price: null, image: butterCroissant, description: "Our Pastry of the Day, a little daily ritual. A moment to call your own." },
  ] },
];

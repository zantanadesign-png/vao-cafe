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
    { name: "Espresso", price: 10, image: espresso, description: "Bold, rich espresso in a short shot." },
    { name: "Americano", price: 13, image: americano, description: "Hot water poured over a double shot." },
    { name: "Flat White", price: 16, image: flatWhite, description: "Flat white with silky milk, steamed." },
    { name: "Cortado", price: 14, image: cortado, description: "Espresso softened with steamed milk." },
    { name: "Cappuccino", price: 15, image: cappuccino, description: "Cappuccino, espresso, milk and foam." },
    { name: "Latte", price: 15, image: honeyOatLatte, description: "Latte with smooth milk and espresso." },
    { name: "Spanish Latte", price: 15, image: honeyOatLatte, description: "Espresso with sweet, condensed milk." },
    { name: "V60", price: 15, image: pourOver, description: "V60 brewed slowly, bright and clean." },
    { name: "Infusion V60", price: 18, image: pourOver, description: "V60 coffee brewed with floral notes." },
    { name: "Coffee of the Day", price: 9, image: batchBrew, description: "Hot coffee freshly brewed every day." },
  ] },
  { name: "Cold Drinks", items: [
    { name: "Americano", price: 14, image: coldBrew, description: "Espresso and water, poured over ice." },
    { name: "Alfredo", price: 14, image: coldBrew, description: "Iced Alfredo coffee, rich and smooth" },
    { name: "Alfredo Infusion (Passion Fruit)", price: 18, image: espressoTonic, description: "Alfredo with passion fruit over ice." },
    { name: "VAO Signature", price: 18, image: espressoTonic, description: "VAO signature, chilled coffee blend." },
    { name: "Latte", price: 16, image: cortado, description: "Chilled espresso softened with milk." },
    { name: "Spanish Latte", price: 16, image: cortado, description: "Iced espresso with sweet milk, cold." },
    { name: "V60", price: 17, image: coldBrew, description: "Iced V60 coffee with a clean finish." },
    { name: "Infusion V60", price: 20, image: coldBrew, description: "Cold V60 with smooth aromatic notes." },
    { name: "Coffee of the Day", price: 10, image: coldBrew, description: "Fresh iced coffee, brewed every day." },
    { name: "Matcha", price: 19, image: matcha, description: "Chilled matcha with a smooth finish." },
    { name: "Strawberry Matcha", price: 21, image: strawberryMatcha, description: "Iced strawberry matcha with berries." },
    { name: "Hibiscus", price: 16, image: hibiscus, description: "Chilled hibiscus with floral flavor." },
  ] },
  // Illustrative food ideas requested for the menu preview; prices remain unset until confirmed.
  { name: "Small Bites", items: [
    { name: "Butter Croissant", price: null, image: butterCroissant, description: "Croissant, crisp and buttery inside." },
    { name: "Cinnamon Roll", price: null, image: cinnamonRoll, description: "Soft cinnamon roll with sweet glaze." },
    { name: "Avocado Toast", price: null, image: avocadoToast, description: "Ripe avocado atop toasted sourdough." },
    { name: "Almond Croissant", price: null, image: butterCroissant, description: "Croissant with almond cream filling." },
    { name: "Avocado & Egg Toast", price: null, image: avocadoToast, description: "Avocado egg toast, fresh and savory." },
    { name: "Honey Butter Croissant", price: null, image: butterCroissant, description: "Buttery croissant with honey inside." },
    { name: "French Toast", price: null, image: avocadoToast, description: "French toast, golden, soft and warm." },
    { name: "Mini Cinnamon Roll", price: null, image: cinnamonRoll, description: "Mini cinnamon roll with sweet glaze." },
    { name: "Pastry of the Day", price: null, image: butterCroissant, description: "Fresh pastry chosen and baked daily." },
  ] },
];

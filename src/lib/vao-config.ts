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
import cinnamonRoll from "@/assets/vao-menu-cinnamon-roll.jpg";
import avocadoToast from "@/assets/vao-menu-avocado-toast.jpg";
import butterCroissant from "@/assets/vao-menu-butter-croissant.jpg";

// Replace null values with VAO's verified business information before launch.
export const vaoConfig = {
  brandName: "VAO",
  ORDER_URL: null as string | null,
  EMAIL: null as string | null,
  PHONE: null as string | null,
  ADDRESS: null as string | null,
  MAPS_URL: null as string | null,
  INSTAGRAM_URL: null as string | null,
  studioName: null as string | null,
  studioInstagram: null as string | null,
  openingHours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => ({ day, hours: null as string | null })),
};

export const menuCategories = [
  { name: "Espresso Bar", items: [
    { name: "Americano", image: americano, description: "Double shot thinned with hot water for a clean finish." },
    { name: "Cappuccino", image: cappuccino, description: "Smooth, creamy, and finished with precise latte art." },
    { name: "Flat White", image: flatWhite, description: "The gold standard. Velvety micro-foam over a double shot." },
    { name: "Cortado", image: cortado, description: "Equal parts espresso and silky steamed milk." },
    { name: "Espresso", image: espresso, description: "Short, intense, and full of character." },
  ] },
  { name: "Filter Bar", items: [
    { name: "Pour Over", image: pourOver, description: "Slowly brewed, bringing every note into focus." },
    { name: "Batch Brew", image: batchBrew, description: "A carefully selected coffee, freshly brewed throughout the day." },
    { name: "Cold Brew", image: coldBrew, description: "Steeped slowly. Clean, refreshing, and naturally sweet." },
  ] },
  { name: "VAO Signatures", items: [
    { name: "Honey & Oat Latte", image: honeyOatLatte, description: "Espresso, silky oat milk, and a gentle touch of honey." },
    { name: "Espresso Tonic", image: espressoTonic, description: "Bright espresso over tonic, ice, and a twist of citrus." },
  ] },
  { name: "Small Bites", items: [
    { name: "Cinnamon Roll", image: cinnamonRoll, description: "Soft, golden, and finished with a delicate swirl of icing." },
    { name: "Avocado Toast", image: avocadoToast, description: "Sourdough, ripe avocado, and a perfectly poached egg." },
    { name: "Butter Croissant", image: butterCroissant, description: "Flaky layers, baked golden. A little everyday indulgence." },
  ] },
];
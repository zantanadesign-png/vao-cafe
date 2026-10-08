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
    { name: "Americano", description: "Double shot thinned with hot water for a clean finish." },
    { name: "Cappuccino", description: "Smooth, creamy, and finished with precise latte art." },
    { name: "Flat White", description: "The gold standard. Velvety micro-foam over a double shot." },
    { name: "Cortado", description: "Equal parts espresso and silky steamed milk." },
    { name: "Espresso", description: "Short, intense, and full of character." },
  ] },
  { name: "Filter Bar", items: [
    { name: "Pour Over", description: "Slowly brewed, bringing every note into focus." },
    { name: "Batch Brew", description: "A carefully selected coffee, freshly brewed throughout the day." },
    { name: "Cold Brew", description: "Steeped slowly. Clean, refreshing, and naturally sweet." },
  ] },
  { name: "VAO Signatures", items: [
    { name: "Honey & Oat Latte", description: "Espresso, silky oat milk, and a gentle touch of honey." },
    { name: "Espresso Tonic", description: "Bright espresso over tonic, ice, and a twist of citrus." },
  ] },
  { name: "Small Bites", items: [
    { name: "Cinnamon Roll", description: "Soft, golden, and finished with a delicate swirl of icing." },
    { name: "Avocado Toast", description: "Sourdough, ripe avocado, and a perfectly poached egg." },
    { name: "Butter Croissant", description: "Flaky layers, baked golden. A little everyday indulgence." },
  ] },
];
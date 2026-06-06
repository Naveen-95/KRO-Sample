export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  badge?: {
    type: "hot" | "discount" | "new";
    text: string;
  };
  wellnessTags?: string[]; // e.g., ["diabetic", "heart-health", "weight-loss"]
}

// Helper: get wellness tags for a product based on title/category
export const getWellnessTagsForProduct = (title: string): string[] => {
  const t = title.toLowerCase();
  const tags: string[] = [];

  if (t.includes("ragi") || t.includes("jowar") || t.includes("bajra") || t.includes("millet") || t.includes("foxtail")) {
    tags.push("diabetic", "weight-loss", "kids-nutrition");
  }
  if (t.includes("quinoa") || t.includes("brown rice")) {
    tags.push("weight-loss", "diabetic");
  }
  if (t.includes("oil") && t.includes("cold-pressed")) {
    tags.push("heart-health");
  }
  if (t.includes("turmeric") || t.includes("honey")) {
    tags.push("immunity");
  }
  if (t.includes("ghee")) {
    tags.push("pregnancy", "kids-nutrition", "senior-wellness");
  }
  if (t.includes("dal") || t.includes("moong") || t.includes("toor") || t.includes("chana")) {
    tags.push("gut-health", "weight-loss");
  }
  if (t.includes("cumin") || t.includes("coriander") || t.includes("garam")) {
    tags.push("gut-health", "immunity");
  }

  return tags;
};

// Wellness tag display labels
export const WELLNESS_TAG_LABELS: Record<string, { label: string; color: string }> = {
  "diabetic": { label: "Diabetic Friendly", color: "bg-green-100 text-green-800" },
  "weight-loss": { label: "Weight Loss", color: "bg-orange-100 text-orange-800" },
  "heart-health": { label: "Heart Health", color: "bg-red-100 text-red-800" },
  "immunity": { label: "Immunity", color: "bg-amber-100 text-amber-800" },
  "gut-health": { label: "Gut Health", color: "bg-purple-100 text-purple-800" },
  "kids-nutrition": { label: "Kids", color: "bg-blue-100 text-blue-800" },
  "pregnancy": { label: "Pregnancy", color: "bg-pink-100 text-pink-800" },
  "senior-wellness": { label: "Seniors", color: "bg-stone-100 text-stone-800" },
};

export interface PopularCategory {
  title: string;
  items: string[];
  image: string;
  bgColor: string;
}

export const POPULAR_CATEGORIES: PopularCategory[] = [
  {
    title: "Flours & Millets",
    items: ["Ragi Flour", "Jowar Flour", "Bajra Flour", "Whole Wheat Atta", "Multi-grain", "Foxtail Millet"],
    image: "/images/cat-flours.png",
    bgColor: "bg-[#F5EDDB]",
  },
  {
    title: "Cold-Pressed Oils",
    items: ["Groundnut Oil", "Sesame Oil", "Coconut Oil", "Mustard Oil"],
    image: "/images/cat-oils.png",
    bgColor: "bg-[#E9F4FB]",
  },
  {
    title: "Pulses & Dals",
    items: ["Toor Dal", "Moong Dal", "Chana Dal", "Rajma", "Black Gram"],
    image: "/images/cat-pulses.png",
    bgColor: "bg-[#FBECEB]",
  },
  {
    title: "Spices & Masalas",
    items: ["Turmeric", "Red Chilli", "Coriander", "Garam Masala", "Cumin"],
    image: "/images/cat-spices.png",
    bgColor: "bg-[#F1EFE6]",
  },
  {
    title: "Ghee",
    items: ["A2 Cow Ghee", "A2 Bilona Ghee", "Buffalo Ghee"],
    image: "/images/cat-ghee.png",
    bgColor: "bg-[#FBF0E8]",
  },
  {
    title: "Jaggery",
    items: ["Sugarcane Jaggery", "Palm Jaggery", "Coconut Jaggery", "Powdered"],
    image: "/images/cat-jaggery.png",
    bgColor: "bg-[#F5EDDB]",
  },
  {
    title: "Honey",
    items: ["Wild Forest Honey", "Multi-floral Honey", "Single-origin"],
    image: "/images/cat-honey.png",
    bgColor: "bg-[#FFF8E8]",
  },
  {
    title: "Traditional Grains",
    items: ["Brown Rice", "Red Rice", "Foxtail Millet", "Quinoa"],
    image: "/images/cat-grains.png",
    bgColor: "bg-[#E8F0E0]",
  },
];

export const BESTSELLERS: Product[] = [
  {
    id: "bs-1",
    title: "Ragi Flour",
    category: "Flours & Millets",
    image: "/images/prod-ragi-flour.jpg",
    price: "₹185",
    oldPrice: "₹225",
    rating: 4.8,
    badge: { type: "discount", text: "-18%" },
  },
  {
    id: "bs-2",
    title: "A2 Bilona Ghee",
    category: "Ghee",
    image: "/images/prod-bilona-ghee.jpg",
    price: "₹649",
    rating: 4.9,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "bs-3",
    title: "Cold-Pressed Groundnut Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-groundnut-oil.jpg",
    price: "₹380",
    oldPrice: "₹445",
    rating: 4.7,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "bs-4",
    title: "Wild Forest Honey",
    category: "Honey",
    image: "/images/prod-forest-honey.jpg",
    price: "₹325",
    rating: 4.9,
    badge: { type: "new", text: "NEW" },
  },
  {
    id: "bs-5",
    title: "Foxtail Millet",
    category: "Traditional Grains",
    image: "/images/prod-foxtail-millet.jpg",
    price: "₹140",
    oldPrice: "₹165",
    rating: 4.6,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "bs-6",
    title: "Toor Dal",
    category: "Pulses & Dals",
    image: "/images/prod-toor-dal.jpg",
    price: "₹165",
    oldPrice: "₹195",
    rating: 4.5,
    badge: { type: "discount", text: "-15%" },
  },
];

export const FLOURS_MILLETS: Product[] = [
  {
    id: "fm-1",
    title: "Ragi Flour",
    category: "Flours & Millets",
    image: "/images/prod-ragi-flour.jpg",
    price: "₹185",
    oldPrice: "₹225",
    rating: 4.8,
    badge: { type: "discount", text: "-18%" },
  },
  {
    id: "fm-2",
    title: "Jowar Flour",
    category: "Flours & Millets",
    image: "/images/prod-jowar-flour.jpg",
    price: "₹160",
    oldPrice: "₹185",
    rating: 4.6,
    badge: { type: "discount", text: "-14%" },
  },
  {
    id: "fm-3",
    title: "Bajra Flour",
    category: "Flours & Millets",
    image: "/images/prod-bajra-flour.jpg",
    price: "₹145",
    oldPrice: "₹175",
    rating: 4.5,
    badge: { type: "discount", text: "-17%" },
  },
  {
    id: "fm-4",
    title: "Multi-grain Atta",
    category: "Flours & Millets",
    image: "/images/prod-multigrain-atta.jpg",
    price: "₹220",
    rating: 4.8,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "fm-5",
    title: "Whole Wheat Atta",
    category: "Flours & Millets",
    image: "/images/prod-wheat-atta.jpg",
    price: "₹175",
    oldPrice: "₹210",
    rating: 4.4,
    badge: { type: "discount", text: "-17%" },
  },
  {
    id: "fm-6",
    title: "Foxtail Millet",
    category: "Flours & Millets",
    image: "/images/prod-foxtail-millet.jpg",
    price: "₹140",
    oldPrice: "₹165",
    rating: 4.6,
    badge: { type: "new", text: "NEW" },
  },
];

export const OILS: Product[] = [
  {
    id: "oil-1",
    title: "Cold-Pressed Groundnut Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-groundnut-oil.jpg",
    price: "₹380",
    oldPrice: "₹445",
    rating: 4.7,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "oil-2",
    title: "Cold-Pressed Sesame Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-sesame-oil.jpg",
    price: "₹295",
    oldPrice: "₹350",
    rating: 4.8,
    badge: { type: "discount", text: "-16%" },
  },
  {
    id: "oil-3",
    title: "Cold-Pressed Coconut Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-coconut-oil.jpg",
    price: "₹345",
    oldPrice: "₹405",
    rating: 4.9,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "oil-4",
    title: "Cold-Pressed Mustard Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-mustard-oil.jpg",
    price: "₹320",
    oldPrice: "₹375",
    rating: 4.6,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "oil-5",
    title: "Cold-Pressed Sunflower Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-sunflower-oil.jpg",
    price: "₹280",
    rating: 4.4,
    badge: { type: "new", text: "NEW" },
  },
  {
    id: "oil-6",
    title: "Cold-Pressed Castor Oil",
    category: "Cold-Pressed Oils",
    image: "/images/prod-castor-oil.jpg",
    price: "₹185",
    oldPrice: "₹205",
    rating: 4.3,
    badge: { type: "discount", text: "-10%" },
  },
];

export const SPICES: Product[] = [
  {
    id: "sp-1",
    title: "Organic Turmeric Powder",
    category: "Spices & Masalas",
    image: "/images/prod-turmeric.jpg",
    price: "₹125",
    oldPrice: "₹148",
    rating: 4.9,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "sp-2",
    title: "Red Chilli Powder",
    category: "Spices & Masalas",
    image: "/images/prod-chilli.jpg",
    price: "₹135",
    oldPrice: "₹160",
    rating: 4.7,
    badge: { type: "discount", text: "-16%" },
  },
  {
    id: "sp-3",
    title: "Coriander Powder",
    category: "Spices & Masalas",
    image: "/images/prod-coriander.jpg",
    price: "₹110",
    oldPrice: "₹130",
    rating: 4.6,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "sp-4",
    title: "Garam Masala",
    category: "Spices & Masalas",
    image: "/images/prod-garam-masala.jpg",
    price: "₹155",
    oldPrice: "₹185",
    rating: 4.8,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "sp-5",
    title: "Cumin Seeds",
    category: "Spices & Masalas",
    image: "/images/prod-cumin.jpg",
    price: "₹140",
    oldPrice: "₹165",
    rating: 4.7,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "sp-6",
    title: "Whole Black Pepper",
    category: "Spices & Masalas",
    image: "/images/prod-black-pepper.jpg",
    price: "₹195",
    oldPrice: "₹230",
    rating: 4.8,
    badge: { type: "new", text: "NEW" },
  },
];

export const GHEE_HONEY: Product[] = [
  {
    id: "gh-1",
    title: "A2 Bilona Ghee",
    category: "Ghee",
    image: "/images/prod-bilona-ghee.jpg",
    price: "₹649",
    rating: 4.9,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "gh-2",
    title: "A2 Buffalo Ghee",
    category: "Ghee",
    image: "/images/prod-buffalo-ghee.jpg",
    price: "₹595",
    oldPrice: "₹695",
    rating: 4.7,
    badge: { type: "discount", text: "-14%" },
  },
  {
    id: "gh-3",
    title: "Wild Forest Honey",
    category: "Honey",
    image: "/images/prod-forest-honey.jpg",
    price: "₹325",
    rating: 4.9,
    badge: { type: "new", text: "NEW" },
  },
  {
    id: "gh-4",
    title: "Multi-floral Honey",
    category: "Honey",
    image: "/images/prod-multifloral-honey.jpg",
    price: "₹420",
    oldPrice: "₹495",
    rating: 4.6,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gh-5",
    title: "Sugarcane Jaggery",
    category: "Jaggery",
    image: "/images/prod-sugarcane-jaggery.jpg",
    price: "₹145",
    oldPrice: "₹170",
    rating: 4.5,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gh-6",
    title: "Palm Jaggery",
    category: "Jaggery",
    image: "/images/prod-palm-jaggery.jpg",
    price: "₹165",
    oldPrice: "₹195",
    rating: 4.7,
    badge: { type: "discount", text: "-15%" },
  },
];

export const PULSES: Product[] = [
  {
    id: "pl-1",
    title: "Toor Dal",
    category: "Pulses & Dals",
    image: "/images/prod-toor-dal.jpg",
    price: "₹165",
    oldPrice: "₹195",
    rating: 4.5,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "pl-2",
    title: "Moong Dal",
    category: "Pulses & Dals",
    image: "/images/prod-moong-dal.jpg",
    price: "₹155",
    oldPrice: "₹180",
    rating: 4.4,
    badge: { type: "discount", text: "-14%" },
  },
  {
    id: "pl-3",
    title: "Chana Dal",
    category: "Pulses & Dals",
    image: "/images/prod-chana-dal.jpg",
    price: "₹180",
    oldPrice: "₹210",
    rating: 4.6,
    badge: { type: "discount", text: "-14%" },
  },
  {
    id: "pl-4",
    title: "Black Gram (Urad Dal)",
    category: "Pulses & Dals",
    image: "/images/prod-urad-dal.jpg",
    price: "₹210",
    rating: 4.7,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "pl-5",
    title: "Rajma (Red Kidney Beans)",
    category: "Pulses & Dals",
    image: "/images/prod-rajma.jpg",
    price: "₹135",
    oldPrice: "₹160",
    rating: 4.5,
    badge: { type: "discount", text: "-16%" },
  },
  {
    id: "pl-6",
    title: "Chickpeas (Kabuli Chana)",
    category: "Pulses & Dals",
    image: "/images/prod-chickpeas.jpg",
    price: "₹145",
    rating: 4.3,
    badge: { type: "new", text: "NEW" },
  },
];

export const GRAINS: Product[] = [
  {
    id: "gr-1",
    title: "Foxtail Millet",
    category: "Traditional Grains",
    image: "/images/prod-foxtail-millet.jpg",
    price: "₹140",
    oldPrice: "₹165",
    rating: 4.6,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gr-2",
    title: "Brown Rice",
    category: "Traditional Grains",
    image: "/images/prod-brown-rice.jpg",
    price: "₹220",
    oldPrice: "₹260",
    rating: 4.7,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gr-3",
    title: "Red Rice",
    category: "Traditional Grains",
    image: "/images/prod-red-rice.jpg",
    price: "₹235",
    rating: 4.8,
    badge: { type: "hot", text: "HOT" },
  },
  {
    id: "gr-4",
    title: "Organic Quinoa",
    category: "Traditional Grains",
    image: "/images/prod-quinoa.jpg",
    price: "₹425",
    oldPrice: "₹500",
    rating: 4.9,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gr-5",
    title: "Basmati Rice (White)",
    category: "Traditional Grains",
    image: "/images/prod-basmati-rice.jpg",
    price: "₹310",
    oldPrice: "₹365",
    rating: 4.5,
    badge: { type: "discount", text: "-15%" },
  },
  {
    id: "gr-6",
    title: "Black Rice (Sticky Rice)",
    category: "Traditional Grains",
    image: "/images/prod-black-rice.jpg",
    price: "₹320",
    rating: 4.4,
    badge: { type: "new", text: "NEW" },
  },
];

// Wellness/Health-based categories
export interface WellnessCategory {
  id: string;
  title: string;
  subtitle: string;
  productCount: number;
  icon: string;
  bgColor: string;
  iconColor: string;
  productSlugs: string[]; // For filtering
}

export const WELLNESS_CATEGORIES: WellnessCategory[] = [
  {
    id: "diabetic",
    title: "Diabetic Friendly",
    subtitle: "Low GI grains & millets",
    productCount: 12,
    icon: "diabetic",
    bgColor: "bg-[#E8F5E9]",
    iconColor: "text-green-700",
    productSlugs: ["ragi-flour", "jowar-flour", "bajra-flour", "foxtail-millet"],
  },
  {
    id: "weight-loss",
    title: "Weight Management",
    subtitle: "High fiber, low calorie",
    productCount: 18,
    icon: "weight",
    bgColor: "bg-[#FFF3E0]",
    iconColor: "text-orange-700",
    productSlugs: ["quinoa", "brown-rice", "moong-dal"],
  },
  {
    id: "heart-health",
    title: "Heart Health",
    subtitle: "Cold-pressed oils & seeds",
    productCount: 9,
    icon: "heart",
    bgColor: "bg-[#FFEBEE]",
    iconColor: "text-red-700",
    productSlugs: ["cold-pressed-groundnut-oil", "cold-pressed-sesame-oil"],
  },
  {
    id: "immunity",
    title: "Immunity Booster",
    subtitle: "Turmeric, ginger & honey",
    productCount: 15,
    icon: "immunity",
    bgColor: "bg-[#FFF8E1]",
    iconColor: "text-amber-700",
    productSlugs: ["organic-turmeric-powder", "wild-forest-honey", "multi-floral-honey"],
  },
  {
    id: "gut-health",
    title: "Gut Health",
    subtitle: "Fermented & fiber-rich",
    productCount: 11,
    icon: "gut",
    bgColor: "bg-[#F3E5F5]",
    iconColor: "text-purple-700",
    productSlugs: ["toor-dal", "moong-dal", "chana-dal"],
  },
  {
    id: "kids-nutrition",
    title: "Kids Nutrition",
    subtitle: "Iron-rich & growth-friendly",
    productCount: 14,
    icon: "kids",
    bgColor: "bg-[#E3F2FD]",
    iconColor: "text-blue-700",
    productSlugs: ["ragi-flour", "a2-bilona-ghee", "wild-forest-honey"],
  },
  {
    id: "pregnancy",
    title: "Pregnancy & Lactation",
    subtitle: "Ghee, nuts & wholesome grains",
    productCount: 10,
    icon: "pregnancy",
    bgColor: "bg-[#FCE4EC]",
    iconColor: "text-pink-700",
    productSlugs: ["a2-bilona-ghee", "a2-buffalo-ghee", "wild-forest-honey"],
  },
  {
    id: "senior-wellness",
    title: "Senior Wellness",
    subtitle: "Easy-digest & joint health",
    productCount: 8,
    icon: "senior",
    bgColor: "bg-[#EFEBE9]",
    iconColor: "text-amber-900",
    productSlugs: ["a2-bilona-ghee", "organic-turmeric-powder", "moong-dal"],
  },
];

// Recipe data
export interface Recipe {
  id: string;
  title: string;
  category: "millet" | "oil" | "sweet" | "swap" | "festival";
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  description: string;
  ingredients: { item: string; quantity: string }[];
  method: string[];
  productsUsed: string[];
  image: string;
}

export const RECIPES: Recipe[] = [
  {
    id: "rec-1",
    title: "Ragi Porridge with Honey & Nuts",
    category: "millet",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    description: "A wholesome breakfast porridge packed with iron and loaded with the natural sweetness of honey.",
    ingredients: [
      { item: "Ragi Flour", quantity: "1 cup" },
      { item: "Wild Forest Honey", quantity: "2 tbsp" },
      { item: "Almonds", quantity: "10" },
      { item: "Milk", quantity: "2 cups" },
    ],
    method: [
      "Boil milk in a heavy-bottomed pan",
      "Slowly whisk in ragi flour to avoid lumps",
      "Cook for 10-12 minutes on medium heat, stirring constantly",
      "Add honey and mix well",
      "Top with crushed almonds and serve warm",
    ],
    productsUsed: ["Ragi Flour", "Wild Forest Honey"],
    image: "/images/recipe-ragi-porridge.jpg",
  },
  {
    id: "rec-2",
    title: "Cold-Pressed Oil Seasoning for Vegetables",
    category: "oil",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    difficulty: "easy",
    description: "Finish your vegetables with aromatic cold-pressed oils for maximum flavor and health benefits.",
    ingredients: [
      { item: "Cold-Pressed Groundnut Oil", quantity: "2 tbsp" },
      { item: "Turmeric Powder", quantity: "½ tsp" },
      { item: "Cumin Seeds", quantity: "½ tsp" },
      { item: "Mixed Vegetables", quantity: "2 cups" },
    ],
    method: [
      "Heat groundnut oil in a pan",
      "Crackle cumin seeds in hot oil",
      "Add vegetables and turmeric",
      "Stir-fry for 8-10 minutes until done",
      "Finish with a drizzle of sesame oil if desired",
    ],
    productsUsed: ["Cold-Pressed Groundnut Oil", "Organic Turmeric Powder", "Cumin Seeds"],
    image: "/images/recipe-oil-veggies.jpg",
  },
  {
    id: "rec-3",
    title: "Jaggery Laddoos with Ghee",
    category: "sweet",
    prepTime: 15,
    cookTime: 20,
    servings: 12,
    difficulty: "medium",
    description: "Traditional Indian sweets made with pure ghee and unrefined jaggery. Perfect for festive season.",
    ingredients: [
      { item: "Palm Jaggery", quantity: "200g" },
      { item: "A2 Bilona Ghee", quantity: "4 tbsp" },
      { item: "Roasted Peanuts", quantity: "1 cup" },
      { item: "Sesame Seeds", quantity: "½ cup" },
    ],
    method: [
      "Roast peanuts and sesame seeds separately until golden",
      "Crush peanuts coarsely and mix with sesame seeds",
      "Melt jaggery on low heat until it reaches soft-ball stage",
      "Mix in the nut mixture quickly",
      "Cool slightly and form laddoos with greased hands",
    ],
    productsUsed: ["Palm Jaggery", "A2 Bilona Ghee"],
    image: "/images/recipe-jaggery-laddoos.jpg",
  },
  {
    id: "rec-4",
    title: "Millet Khichdi - Healthy Swap",
    category: "swap",
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "easy",
    description: "A nutritious one-pot meal using foxtail millet instead of rice. Easier to digest and protein-rich.",
    ingredients: [
      { item: "Foxtail Millet", quantity: "1 cup" },
      { item: "Moong Dal", quantity: "½ cup" },
      { item: "Cold-Pressed Coconut Oil", quantity: "2 tbsp" },
      { item: "Vegetables", quantity: "1 cup" },
    ],
    method: [
      "Wash millet and dal together",
      "Heat coconut oil in pressure cooker",
      "Add millet, dal, and vegetables",
      "Add 3 cups water and pressure cook for 2 whistles",
      "Serve hot with ghee and pickle",
    ],
    productsUsed: ["Foxtail Millet", "Moong Dal", "Cold-Pressed Coconut Oil"],
    image: "/images/recipe-millet-khichdi.jpg",
  },
  {
    id: "rec-5",
    title: "Diwali Garam Masala Mixture",
    category: "festival",
    prepTime: 30,
    cookTime: 10,
    servings: 1,
    difficulty: "medium",
    description: "Festive snack mix seasoned with our aromatic garam masala. A crowd favorite during celebrations.",
    ingredients: [
      { item: "Roasted Chickpeas", quantity: "1 cup" },
      { item: "Peanuts", quantity: "½ cup" },
      { item: "Garam Masala", quantity: "1 tbsp" },
      { item: "Cold-Pressed Oil", quantity: "2 tbsp" },
    ],
    method: [
      "Dry roast all ingredients separately until fragrant",
      "Mix chickpeas and peanuts",
      "Toss with oil and garam masala while still warm",
      "Cool and store in airtight container",
      "Perfect gift for friends and family!",
    ],
    productsUsed: ["Garam Masala", "Cold-Pressed Groundnut Oil"],
    image: "/images/recipe-garam-masala-mix.jpg",
  },
];

// FAQ data
export interface FAQ {
  id: string;
  category: "orders" | "shipping" | "returns" | "products" | "subscription" | "account";
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    category: "orders",
    question: "What payment methods do you accept?",
    answer: "We accept UPI, credit/debit cards, net banking, and Cash on Delivery (COD). We offer a 2% discount on prepaid orders using UPI or cards.",
  },
  {
    id: "faq-2",
    category: "orders",
    question: "How do I place an order?",
    answer: "Browse our products, add items to cart, and checkout. You can make an account or checkout as a guest. All orders must be placed before 6 PM for next-day delivery in Bengaluru.",
  },
  {
    id: "faq-3",
    category: "shipping",
    question: "Do you deliver outside Bengaluru?",
    answer: "Currently, we deliver only within Bengaluru. We're planning to expand to other metro cities soon. Free delivery on orders over ₹999.",
  },
  {
    id: "faq-4",
    category: "shipping",
    question: "What's the delivery timeframe?",
    answer: "Most orders placed by 6 PM are delivered the next day between 10 AM - 6 PM. Weekend orders are delivered by Monday. Track your order via WhatsApp or your account dashboard.",
  },
  {
    id: "faq-5",
    category: "returns",
    question: "What's your return policy?",
    answer: "We accept returns within 48 hours of delivery if the product is unopened and undamaged. Refunds are processed within 3-5 business days. Please contact our support team with photos.",
  },
  {
    id: "faq-6",
    category: "products",
    question: "Are all products organic and certified?",
    answer: "All products are certified organic by FSSAI and India Organic. We hold NPOP certification and conduct regular lab testing. Each batch is coded for traceability.",
  },
  {
    id: "faq-7",
    category: "products",
    question: "How are your products milled and processed?",
    answer: "We use stone-milling for flours, cold-pressing for oils, and traditional methods for other products. Everything is milled fresh weekly and vacuum-sealed for maximum freshness.",
  },
  {
    id: "faq-8",
    category: "subscription",
    question: "What are the KRO Monthly Box subscription options?",
    answer: "We offer 3 plans: Essentials (₹999/mo) with 4 staples, Family (₹2,499/mo) with 8 items, and Wellness (₹1,499/mo) with health-focused items. Cancel anytime.",
  },
];

// Team/Farmer data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  region: string;
  farmersCount: number;
  bio: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Rajesh Kant",
    role: "Founder & CEO",
    region: "Bengaluru",
    farmersCount: 47,
    bio: "Started KRO to bring authentic Karnataka agriculture to your table. 15+ years in organic farming.",
    image: "/images/team-rajesh.jpg",
  },
  {
    id: "team-2",
    name: "Meera Sharma",
    role: "Head of Sourcing",
    region: "Hassan District",
    farmersCount: 23,
    bio: "Works directly with farmer clusters in Hassan to ensure quality and fair pricing. A passionate believer in regenerative farming.",
    image: "/images/team-meera.jpg",
  },
  {
    id: "team-3",
    name: "Arun Kumar",
    role: "Farm Manager",
    region: "Kolar District",
    farmersCount: 18,
    bio: "Oversees processing and quality control. Ensures every batch meets our strict standards for purity and freshness.",
    image: "/images/team-arun.jpg",
  },
  {
    id: "team-4",
    name: "Priya Nair",
    role: "Community Manager",
    region: "Bengaluru",
    farmersCount: 8,
    bio: "Bridges the gap between our farmers and customers. Passionate about telling the story of each farm and farmer.",
    image: "/images/team-priya.jpg",
  },
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Deepika Menon",
    city: "Indiranagar, Bengaluru",
    rating: 5,
    quote: "Finally found pure, farm-fresh organic products without compromising on taste. The ragi flour makes the best dosas!",
    image: "/images/testimonial-deepika.jpg",
  },
  {
    id: "test-2",
    name: "Vikram Rao",
    city: "Koramangala, Bengaluru",
    rating: 5,
    quote: "The cold-pressed oils are incredible. You can taste the difference. Worth every rupee and supports local farmers.",
    image: "/images/testimonial-vikram.jpg",
  },
  {
    id: "test-3",
    name: "Sunita Desai",
    city: "Whitefield, Bengaluru",
    rating: 5,
    quote: "Been ordering the KRO subscription box for 3 months. Never looked back. Fresh, authentic, and convenient!",
    image: "/images/testimonial-sunita.jpg",
  },
];

// Certifications
export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  what: string;
  validUntil: string;
  pdfUrl: string;
  logo: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    name: "FSSAI Approved",
    code: "REG/12345678",
    issuer: "Food Safety and Standards Authority of India",
    what: "Food safety and hygiene standards compliance",
    validUntil: "2027-06-03",
    pdfUrl: "#",
    logo: "/images/cert-fssai.png",
  },
  {
    id: "cert-2",
    name: "India Organic",
    code: "IO/2024/12345",
    issuer: "Ministry of Agriculture & Farmers Welfare",
    what: "Certified organic farming and processing",
    validUntil: "2027-12-31",
    pdfUrl: "#",
    logo: "/images/cert-india-organic.png",
  },
  {
    id: "cert-3",
    name: "NPOP Certified",
    code: "NPOP/2024/KRO",
    issuer: "National Programme for Organic Production",
    what: "National organic production standards",
    validUntil: "2026-06-03",
    pdfUrl: "#",
    logo: "/images/cert-npop.png",
  },
  {
    id: "cert-4",
    name: "Lab Tested",
    code: "LT/2024/KRO",
    issuer: "Certified Testing Laboratories",
    what: "Pesticide residue and purity testing",
    validUntil: "2025-12-31",
    pdfUrl: "#",
    logo: "/images/cert-lab-tested.png",
  },
];

// Legal page content
export const LEGAL_PAGES = {
  privacy_policy: {
    title: "Privacy Policy",
    lastUpdated: "2026-06-03",
    sections: [
      {
        heading: "Introduction",
        content: "Krish Royal Organics ('KRO', 'we', 'us', 'our') respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.",
      },
      {
        heading: "Information We Collect",
        content: "We collect information you provide directly (name, email, phone, address) and information collected automatically (cookies, IP address, device type, browsing behavior).",
      },
      {
        heading: "How We Use Your Information",
        content: "We use your information to process orders, send updates, improve our website, and comply with legal obligations. We never sell your personal data to third parties.",
      },
      {
        heading: "Data Security",
        content: "We use industry-standard encryption and security measures to protect your data. However, no online transmission is 100% secure.",
      },
      {
        heading: "Your Rights",
        content: "You have the right to access, correct, or delete your personal data. Contact us at privacy@krishroyalorganics.com to exercise these rights.",
      },
      {
        heading: "Contact Us",
        content: "For privacy concerns, contact our Data Protection Officer at privacy@krishroyalorganics.com or call +91-XXXXXXXXXX.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "2026-06-03",
    sections: [
      {
        heading: "Agreement to Terms",
        content: "By accessing and using KRO, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.",
      },
      {
        heading: "Product Information",
        content: "We strive to provide accurate product descriptions and pricing. However, KRO does not warrant that product descriptions or prices are error-free.",
      },
      {
        heading: "Order Acceptance",
        content: "KRO reserves the right to refuse or cancel any order at any time for any reason, including suspected fraud or invalid payment.",
      },
      {
        heading: "Limitation of Liability",
        content: "KRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.",
      },
      {
        heading: "Intellectual Property",
        content: "All content on KRO, including text, images, and graphics, is owned or licensed by KRO and protected by copyright law.",
      },
      {
        heading: "Changes to Terms",
        content: "KRO reserves the right to modify these Terms at any time. Changes are effective immediately upon posting to the website.",
      },
    ],
  },
  shipping_policy: {
    title: "Shipping Policy",
    lastUpdated: "2026-06-03",
    sections: [
      {
        heading: "Delivery Area",
        content: "We currently deliver only within Bengaluru city limits. Delivery is available 6 days a week, excluding public holidays.",
      },
      {
        heading: "Delivery Timeline",
        content: "Orders placed before 6 PM are delivered the next day between 10 AM - 6 PM. Orders placed after 6 PM will be delivered within 2 business days.",
      },
      {
        heading: "Shipping Charges",
        content: "Free delivery on orders over ₹999. Orders below ₹999 are charged ₹99 for delivery. No shipping charges on subscription boxes.",
      },
      {
        heading: "Order Tracking",
        content: "You can track your order via SMS, WhatsApp, or through your account dashboard. Updates are sent when order is packed and out for delivery.",
      },
      {
        heading: "Delivery Address",
        content: "Ensure your delivery address is complete and accurate. KRO is not responsible for delays due to incorrect or incomplete addresses.",
      },
      {
        heading: "Failed Delivery",
        content: "If delivery fails due to unavailability, we'll attempt re-delivery the next day. Contact support for alternative arrangements.",
      },
    ],
  },
  return_policy: {
    title: "Return & Refund Policy",
    lastUpdated: "2026-06-03",
    sections: [
      {
        heading: "Return Window",
        content: "Returns are accepted within 48 hours of delivery. Products must be unopened and in original condition with the packaging intact.",
      },
      {
        heading: "Return Process",
        content: "Contact our support team with photos of the unopened product and delivery confirmation. We'll provide a return label and instructions.",
      },
      {
        heading: "Refund Timeline",
        content: "Once we receive your return, we inspect the product and process the refund within 3-5 business days. Refund is credited to your original payment method.",
      },
      {
        heading: "Non-Returnable Items",
        content: "Opened products, items past best-before date, and items damaged due to customer mishandling cannot be returned.",
      },
      {
        heading: "Damaged Delivery",
        content: "If you receive a damaged product, report within 24 hours with photos. We'll replace it or refund immediately without requiring return.",
      },
      {
        heading: "Subscription Cancellation",
        content: "Cancel subscription anytime. No refund for the current month, but you can skip upcoming deliveries without penalty.",
      },
    ],
  },
};

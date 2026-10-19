import type { CategoryItem, Product } from '../types/product';

export const categories: CategoryItem[] = [
  { slug: 'sweets', name: 'Sweets', subtitle: 'Authentic festive & traditional sweets', accent: '#1F4D3A' },
  { slug: 'snacks', name: 'Snacks', subtitle: 'Crispy, savory heritage bites', accent: '#C8631F' },
  { slug: 'pickles', name: 'Pickles', subtitle: 'Veg & Non-Veg Andhra pachallu', accent: '#D9A21B' },
  { slug: 'podis', name: 'Podis', subtitle: 'Aromatic chutney powders & karams', accent: '#8B4513' },
  { slug: 'masalas', name: 'Masalas & Spices', subtitle: 'Freshly ground spice blends', accent: '#5A3E2B' },
  { slug: 'combos', name: 'Combos & Gift Boxes', subtitle: 'Festive boxes & assorted feasts', accent: '#B8860B' },
];

export const products: Product[] = [
  {
    "id": "chegodi-traditional-crunchy-ring-snack-sri-laxmi-home-foods",
    "slug": "chegodi-traditional-crunchy-ring-snack-sri-laxmi-home-foods",
    "name": "Chekodi (Chegodi) – Traditional Crunchy Ring Snack | Sri Laxmi Home Foods",
    "category": "Snacks",
    "description": "Enjoy the satisfying crunch of Sri Laxmi Home Foods Chekodi (Chegodi), a traditional ring-shaped snack that brings back memories of homemade treats. Crisp and savoury, these little rings are perfect with your evening chai, for sharing with family, or whenever you crave a crunchy bite. Prepared in small batches with no palm oil, artificial colours, or preservatives.",
    "image": "/images/chekodi.jpg",
    "images": [
      "/images/chekodi.jpg"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Moong Dal",
      "Cumin",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place to retain freshness and crunch.",
    "tags": [
      "Snacks",
      "Chekodi",
      "Chegodi",
      "Crunchy Snack"
    ],
    "createdAt": "2026-10-06",
    "isOutOfStock": false
  },
  {
    "id": "boondi-mixture-traditional-savory-snack",
    "slug": "boondi-mixture-traditional-savory-snack",
    "name": "Boondi Mixture | Traditional Savory Snack",
    "category": "Snacks",
    "description": "Crispy, crunchy, and full of flavor—Sri Laxmi Home Foods Boondi Mixture brings together golden boondi, crunchy sev, peanuts, and aromatic curry leaves in a delicious savory blend. Enjoy it with your evening tea, share it with family and friends, or reach for a handful whenever you crave a satisfying crunch. Store in an airtight container in a cool, dry place to retain freshness.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/Boondimixtureinmaroonelegance.png?v=1790868816",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/Boondimixtureinmaroonelegance.png?v=1790868816"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Gram Flour (Besan)",
      "Roasted Peanuts",
      "Curry Leaves",
      "Spices",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "peanuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-10-01",
    "isOutOfStock": false
  },
  {
    "id": "miriyala-murukulu-black-pepper-murukku",
    "slug": "miriyala-murukulu-black-pepper-murukku",
    "name": "Miriyala Murukulu | Black Pepper Murukku",
    "category": "Snacks",
    "description": "Enjoy a satisfying crunch with Sri Laxmi Home Foods Miriyala Murukulu—a traditional savory snack with the bold, warming flavor of black pepper. These crisp bites are perfect alongside your evening tea, for sharing with family, or whenever you crave something savory. A classic Telugu favorite, full of crunch and peppery flavor. Store in an airtight container in a cool, dry place to retain freshness.",
    "image": "/images/miriyala-murukulu.png",
    "images": [
      "/images/miriyala-murukulu.png"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-10-01",
    "isOutOfStock": false
  },
  {
    "id": "nalla-nuvvulu-laddu-black-sesame-laddu",
    "slug": "nalla-nuvvulu-laddu-black-sesame-laddu",
    "name": "Nalla Nuvvulu Laddu / Black Sesame Laddu",
    "category": "Sweets",
    "description": "Savor the rich, nutty flavor of black sesame with Sri Laxmi Home Foods Nalla Nuvvulu Laddu. This traditional sweet combines the distinctive taste of sesame with a satisfying sweetness and finely textured bite. Enjoy it as an everyday treat, share it with family, or add it to your festive sweet selection—a little taste of tradition in every laddu.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep29_2026at08_31_18PM.png?v=1790731891",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep29_2026at08_31_18PM.png?v=1790731891"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-09-30",
    "isOutOfStock": false
  },
  {
    "id": "gongura-pachadi-andhra-style-gongura-pickle",
    "slug": "gongura-pachadi-andhra-style-gongura-pickle",
    "name": "Gongura Pachadi / Andhra-Style Gongura Pickle",
    "category": "Pickles",
    "description": "Bring home the bold flavors of Andhra with Sri Laxmi Home Foods Gongura Pachadi. Tangy gongura leaves, garlic, red chilies, and traditional spices come together in a rich, flavorful pachadi that adds a delicious kick to every meal. Mix it with hot rice and a spoonful of ghee, or enjoy it alongside dosa, idli, and curd rice. A comforting taste of tradition in every bite!",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep29_2026at08_04_35PM.png?v=1790730522",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep29_2026at08_04_35PM.png?v=1790730522"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Fresh Gongura Leaves",
      "Cold-pressed Oil",
      "Red Chilli Powder",
      "Garlic",
      "Mustard",
      "Salt"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Pickles",
      "Vegetarian"
    ],
    "createdAt": "2026-09-30",
    "isOutOfStock": false
  },
  {
    "id": "sri-laxmi-home-foods-holiday-gift-box",
    "slug": "sri-laxmi-home-foods-holiday-gift-box",
    "name": "Sri Laxmi Home Foods Holiday Gift Box",
    "category": "Combos",
    "description": "Eight favorites in one gift box A festive gift made for sharing with family, friends, and colleagues. Celebrate the season with a delicious mix of traditional sweets and savory snacks. Each gift box includes 8 items, 250 g each:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep27_2026at08_46_42PM.png?v=1790560021",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep27_2026at08_46_42PM.png?v=1790560021"
    ],
    "variants": [
      {
        "id": "india",
        "label": "India",
        "price": 3400,
        "mrp": 3910,
        "stock": 25
      },
      {
        "id": "international",
        "label": "International",
        "price": 6999,
        "mrp": 8049,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Combos"
    ],
    "createdAt": "2026-09-28",
    "isOutOfStock": false
  },
  {
    "id": "sattu-protein-laddu-nuts-seeds",
    "slug": "sattu-protein-laddu-nuts-seeds",
    "name": "Sattu Protein Laddu – Nuts & Seeds",
    "category": "Sweets",
    "description": "Wholesome, satisfying, and packed with the goodness of traditional ingredients. 🌿 Our Sattu Protein Laddu is handcrafted with Sattu Flour, Cow Ghee, Sunflower Seeds, Flaxseed, Pumpkin Seeds, Cashews & Badam for a deliciously nutty and naturally wholesome bite. Made for those looking for a better everyday sweet or snack — without compromising on taste.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep24_2026at08_42_16AM.png?v=1790257494",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep24_2026at08_42_16AM.png?v=1790257494"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Sattu Flour",
      "Cow Ghee",
      "Sunflower Seeds",
      "Flaxseed",
      "Pumpkin Seeds",
      "Cashews (Kaju)",
      "Almonds (Badam)"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts"
    ],
    "storage": "Store in a cool, dry place in an airtight container.",
    "tags": [
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-09-24",
    "isOutOfStock": false
  },
  {
    "id": "kova-kajjikayalu-traditional-kova-sweet",
    "slug": "kova-kajjikayalu-traditional-kova-sweet",
    "name": "Kova Kajjikayalu – Traditional Kova Sweet",
    "category": "Sweets",
    "description": "Enjoy the rich, creamy taste of Kova Kajjikayalu, a traditional milk-based sweet made with rich kova (milk solids) and quality ingredients. Soft, smooth, and deliciously indulgent, each piece is carefully handcrafted for that authentic homemade taste. A perfect sweet for festivals, celebrations, gifting, or simply satisfying your sweet cravings. ✨ Made with rich Kova",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep23_2026at08_33_30PM.png?v=1790213638",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep23_2026at08_33_30PM.png?v=1790213638"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Pure Full Cream Milk (Mawa / Kova)",
      "Sugar",
      "Cardamom",
      "Pistachios"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Keep refrigerated for best freshness.",
    "tags": [
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-09-24",
    "isOutOfStock": false
  },
  {
    "id": "white-kova-billalu-traditional-milk-sweet",
    "slug": "white-kova-billalu-traditional-milk-sweet",
    "name": "White Kova Billalu – Traditional Milk Sweet",
    "category": "Sweets",
    "description": "Indulge in the rich, creamy goodness of our White Kova Billalu, a traditional Indian milk sweet made with quality ingredients for a soft, melt-in-your-mouth texture. Each piece is carefully prepared with rich kova (milk solids) and finished with a touch of nuts for that classic homemade taste. Simple, delicious, and perfect for festivals, celebrations, gifting, or whenever you're craving something sweet. ✨ Rich & creamy milk sweet",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep23_2026at08_16_10PM.png?v=1790212713",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep23_2026at08_16_10PM.png?v=1790212713"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Pure Full Cream Milk (Mawa / Kova)",
      "Sugar",
      "Cardamom",
      "Pistachios"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Keep refrigerated for best freshness.",
    "tags": [
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-09-24",
    "isOutOfStock": false
  },
  {
    "id": "chicken-karam-podi-spicy-chicken-powder",
    "slug": "chicken-karam-podi-spicy-chicken-powder",
    "name": "Chicken Karam Podi – Spicy Chicken Powder",
    "category": "Podis",
    "description": "Turn every meal into something irresistible with Sri Laxmi Home Foods Chicken Karam Podi. Made with flavorful chicken, aromatic spices and fragrant curry leaves, this spicy Andhra-style podi delivers a delicious homemade taste in every bite. Enjoy it with hot rice and ghee, idli, dosa, chapati or your favorite comfort meal. • Bold, spicy and full of flavor",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep22_2026at07_20_06AM.png?v=1790080556",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep22_2026at07_20_06AM.png?v=1790080556"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Dehydrated Chicken",
      "Red Chillies",
      "Garlic",
      "Roasted Lentils",
      "Curry Leaves",
      "Coriander"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-09-22",
    "isOutOfStock": false
  },
  {
    "id": "wheat-diamonds-crispy-traditional-wheat-snack-sri-laxmi-home-foods",
    "slug": "wheat-diamonds-crispy-traditional-wheat-snack-sri-laxmi-home-foods",
    "name": "Wheat Diamonds – Crispy Traditional Wheat Snack | Sri Laxmi Home Foods",
    "category": "Snacks",
    "description": "Enjoy the irresistible crunch of Sri Laxmi Home Foods Wheat Diamonds — a classic homemade-style snack made with wheat and seasoned for a delicious savory bite. Crispy, crunchy and full of traditional flavor, Wheat Diamonds are perfect with your evening chai, for kids’ snack boxes, road trips, parties, or whenever those crunchy cravings hit. ❤️ Why you’ll love them:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep15_2026at09_00_37PM.png?v=1789524136",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep15_2026at09_00_37PM.png?v=1789524136"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "crispy",
      "diamonds",
      "snacks",
      "wheat",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-09-16",
    "isOutOfStock": false
  },
  {
    "id": "dry-fruits-masala-premium-roasted-nuts-seeds-makhana",
    "slug": "dry-fruits-masala-premium-roasted-nuts-seeds-makhana",
    "name": "Dry Fruits Masala – Premium Roasted Nuts, Seeds & Makhana",
    "category": "Snacks",
    "description": "Crunchy. Flavorful. Wholesome. 🌿 Sri Laxmi Home Foods Dry Fruits Masala is a delicious blend of premium nuts, seeds and makhana, carefully roasted and seasoned with our flavorful masala. A satisfying snack for anytime cravings — enjoy it with your evening tea, pack it for work or travel, or simply grab a handful whenever you want something crunchy.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep15_2026at08_41_24PM.png?v=1789522942",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep15_2026at08_41_24PM.png?v=1789522942"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1200,
        "mrp": 1380,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "Tree Nuts"
    ],
    "storage": "Store in a cool, dry place.",
    "tags": [
      "dry fruit",
      "masala",
      "snacks",
      "spices",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-09-16",
    "isOutOfStock": false
  },
  {
    "id": "tapeswaram-kaja-traditional-andhra-sweet-pure-ghee",
    "slug": "tapeswaram-kaja-traditional-andhra-sweet-pure-ghee",
    "name": "Tapeswaram Kaja – Traditional Andhra Sweet | Pure Ghee",
    "category": "Sweets",
    "description": "Experience the authentic taste of Tapeswaram Kaja, a traditional Andhra delicacy known for its beautiful flaky layers and irresistible sweetness. Each Kaja is carefully prepared with refined flour, pure ghee, and sugar, creating delicate layers that soak up the sweetness while retaining their signature texture. Why you'll love it",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep1_2026at08_17_06AM.png?v=1788268684",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageSep1_2026at08_17_06AM.png?v=1788268684"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "kaja",
      "sweets",
      "tapeswaram",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-09-01",
    "isOutOfStock": false
  },
  {
    "id": "traditional-chalimidi-authentic-telugu-sweet",
    "slug": "traditional-chalimidi-authentic-telugu-sweet",
    "name": "Traditional Chalimidi – Authentic Telugu Sweet",
    "category": "Sweets",
    "description": "Experience the comforting taste of tradition with Sri Laxmi Home Foods Chalimidi, a beloved Telugu sweet prepared with care using traditional methods. Soft, rich, and delicious, our Chalimidi is generously topped with cashews and dry fruits, giving every bite a wonderful combination of sweetness and crunch. Perfect for festivals, poojas, celebrations, gifting, or whenever you're craving an authentic taste of home. ❤️",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug11_2026at08_25_15PM.png?v=1786530964",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug11_2026at08_25_15PM.png?v=1786530964"
    ],
    "variants": [
      {
        "id": "500g",
        "label": "500g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 700,
        "mrp": 805,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "chalimidi",
      "festive",
      "sweets",
      "telugu",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-08-12",
    "isOutOfStock": false
  },
  {
    "id": "premium-dry-fruit-halwa-loaded-with-almonds-cashews-pista-figs",
    "slug": "premium-dry-fruit-halwa-loaded-with-almonds-cashews-pista-figs",
    "name": "Premium Dry Fruit Halwa – Loaded with Almonds, Cashews, Pista & Figs",
    "category": "Sweets",
    "description": "A rich and indulgent treat packed with the goodness of Anjeer (Figs) and premium nuts! ❤️ Our Anjeer Dry Fruit Halwa is made with pure ghee and generously loaded with pistachios, almonds, cashews, figs, and poppy seeds. Every bite has a deliciously rich, nutty texture with the natural goodness of dry fruits. Made With:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug11_2026at08_27_02AM.png?v=1786455150",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug11_2026at08_27_02AM.png?v=1786455150"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 425,
        "mrp": 489,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 850,
        "mrp": 977,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1700,
        "mrp": 1955,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Wheat Flour",
      "Pure Cow Ghee",
      "Dry Fruits",
      "Natural Sugar",
      "Cardamom"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "dry fruits",
      "gifting",
      "halwa",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-08-11",
    "isOutOfStock": false
  },
  {
    "id": "tomato-pickle-tomato-pachadi",
    "slug": "tomato-pickle-tomato-pachadi",
    "name": "Tomato Pickle / Tomato Pachadi",
    "category": "Pickles",
    "description": "Bold, tangy and full of authentic Andhra flavor! Our Tomato Pachadi is prepared with tomatoes and a traditional blend of spices for the perfect balance of spicy, tangy and savory flavors. Pair it with hot rice and ghee, dosa, idli, curd rice or your everyday meals for an instant burst of homemade flavor. 🌶️❤️ ✨ Highlights:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug9_2026at07_41_02PM.png?v=1786322848",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug9_2026at07_41_02PM.png?v=1786322848"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Ripe Country Tomatoes",
      "Cold-pressed Oil",
      "Red Chilli",
      "Garlic",
      "Tamarind",
      "Salt"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Pickles",
      "Vegetarian"
    ],
    "createdAt": "2026-08-10",
    "isOutOfStock": false
  },
  {
    "id": "lavu-murukulu-traditional-thick-crunchy-murukulu",
    "slug": "lavu-murukulu-traditional-thick-crunchy-murukulu",
    "name": "Lavu Murukulu – Traditional Thick & Crunchy Murukulu",
    "category": "Snacks",
    "description": "Crunchy, flavorful and made the traditional way! Our Lavu Murukulu are prepared with a delicious blend of rice flour, roasted chana dal, butter, vamu (ajwain) and nuvvulu (sesame seeds) for that classic homemade taste and satisfying crunch. ✨ Highlights: Rice Flour",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug8_2026at10_09_38AM.png?v=1786202177",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug8_2026at10_09_38AM.png?v=1786202177"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "Sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-08-08",
    "isOutOfStock": false
  },
  {
    "id": "whole-wheat-ghee-badhusha",
    "slug": "whole-wheat-ghee-badhusha",
    "name": "Whole Wheat Ghee Badhusha",
    "category": "Sweets",
    "description": "A traditional favorite made with a wholesome twist! Our Whole Wheat Ghee Badhusha is prepared with whole wheat flour and pure ghee, giving you a rich, flaky and deliciously indulgent sweet with authentic homemade flavor. ✨ Highlights: Made with Whole Wheat Flour",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug8_2026at10_07_37AM.png?v=1786202003",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageAug8_2026at10_07_37AM.png?v=1786202003"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-08-08",
    "isOutOfStock": false
  },
  {
    "id": "garlic-pickle",
    "slug": "garlic-pickle",
    "name": "Garlic Pickle",
    "category": "Pickles",
    "description": "A bold and tangy Garlic Pickle crafted using traditional recipes. Made with fresh garlic cloves, aromatic spices, and pure sesame oil — every bite is packed with intense flavor and a satisfying kick. A perfect accompaniment to rice, rotis, and parathas. Made with fresh garlic and pure sesame oil Traditional Andhra recipe",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/garlic-pickle-5086385.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/garlic-pickle-5086385.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Peeled Garlic",
      "Cold-pressed Oil",
      "Red Chilli Powder",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "Sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "achar",
      "andhra",
      "garlic",
      "pickle",
      "veg",
      "Pickles",
      "Vegetarian"
    ],
    "createdAt": "2026-08-02",
    "isOutOfStock": false
  },
  {
    "id": "annamayya-laddu",
    "slug": "annamayya-laddu",
    "name": "Annamayya Laddu",
    "category": "Sweets",
    "description": "Experience the rich taste of tradition with Sri Laxmi Home Foods' Annamayya Laddu, a wholesome sweet handcrafted using premium dry fruits, crunchy nuts, and pure ghee. Every laddu is carefully prepared in small batches to deliver a rich, homemade flavor and a soft, satisfying texture. Made without palm oil, maida, artificial colors, or preservatives, these laddus are perfect for festivals, gifting, celebrations, or simply enjoying as a nourishing traditional treat with your family. Why You'll Love It",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/annamayya-laddu-5979487.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/annamayya-laddu-5979487.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "laddu",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-31",
    "isOutOfStock": false
  },
  {
    "id": "ghee-mysorepak",
    "slug": "ghee-mysorepak",
    "name": "Milk Mysore Pak – Rich & Creamy Traditional Sweet",
    "category": "Sweets",
    "description": "Indulge in the rich and creamy goodness of Milk Mysore Pak, a delicious twist on the traditional South Indian favorite. Made with milk and pure ghee, it has a soft, rich texture and a delicate sweetness that melts beautifully in every bite. Freshly prepared in small batches by Sri Laxmi Home Foods, this comforting traditional sweet is perfect for festivals, celebrations, gifting, or simply satisfying your sweet cravings. Why you’ll love it:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/milk-mysore-pak-rich-creamy-traditional-sweet-5624020.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/milk-mysore-pak-rich-creamy-traditional-sweet-5624020.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan (Gram Flour)",
      "Pure Desi Ghee",
      "Sugar",
      "Cardamom"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in a cool, dry place away from direct sunlight.",
    "tags": [
      "sri laxmi home foods",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-30",
    "isOutOfStock": false
  },
  {
    "id": "gatti-mysore-pak-traditional-pure-ghee-mysore-pak",
    "slug": "gatti-mysore-pak-traditional-pure-ghee-mysore-pak",
    "name": "Gatti Mysore Pak – Traditional Pure Ghee Mysore Pak",
    "category": "Sweets",
    "description": "Experience the rich, traditional taste of Gatti Mysore Pak, a classic South Indian sweet known for its firm, crumbly texture and indulgent ghee flavor. Freshly prepared by Sri Laxmi Home Foods using traditional methods, each piece has a rich, aromatic taste that pairs beautifully with its signature melt-in-the-mouth finish. Perfect for festivals, celebrations, gifting, or simply enjoying with your family. Why you’ll love it:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/gatti-mysore-pak-traditional-pure-ghee-mysore-pak-9026739.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/gatti-mysore-pak-traditional-pure-ghee-mysore-pak-9026739.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan (Gram Flour)",
      "Pure Desi Ghee",
      "Sugar",
      "Cardamom"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in a cool, dry place in an airtight container.",
    "tags": [
      "andhra",
      "ghee",
      "mysore pak",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-24",
    "isOutOfStock": false
  },
  {
    "id": "ribbon-pakodi-crispy-traditional-south-indian-snack",
    "slug": "ribbon-pakodi-crispy-traditional-south-indian-snack",
    "name": "Ribbon Pakodi – Crispy Traditional South Indian Snack",
    "category": "Snacks",
    "description": "Ribbon Pakodi is a classic South Indian savory snack made into thin, crispy ribbons and fried until perfectly crunchy. Seasoned with traditional spices and aromatic curry leaves, every bite is flavorful, crisp, and satisfying. Freshly prepared in small batches by Sri Laxmi Home Foods, it’s perfect with evening chai or coffee, for gatherings, travel, or whenever you’re craving a traditional homemade snack. Why you’ll love it:",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ribbon-pakodi-crispy-traditional-south-indian-snack-6037173.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ribbon-pakodi-crispy-traditional-south-indian-snack-6037173.png?v=1786037887",
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ribbon-pakodi-crispy-traditional-south-indian-snack-5171095.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "Gluten (Wheat)"
    ],
    "storage": "Store in a cool, dry place in an airtight container.",
    "tags": [
      "andhra",
      "pakodi",
      "snacks",
      "traditional",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-07-24",
    "isOutOfStock": false
  },
  {
    "id": "guthi-vankaya-dry-masala",
    "slug": "guthi-vankaya-dry-masala",
    "name": "Guthi Vankaya Dry Masala",
    "category": "Podis",
    "description": "Introducing Guthi Vankaya Dry Masala — a bold, aromatic spice blend crafted specifically for the iconic Andhra-style stuffed brinjal (guthi vankaya) curry. This ready-to-use dry masala captures the authentic flavors of traditional Telugu kitchens, making it effortless to cook a restaurant-quality dish at home. Specially blended for stuffed brinjal (guthi vankaya) curry Rich in traditional spices — bold, earthy, and aromatic",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/guthi-vankaya-dry-masala-6768091.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/guthi-vankaya-dry-masala-6768091.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 250,
        "mrp": 288,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 500,
        "mrp": 575,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1000,
        "mrp": 1150,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Roasted Lentils",
      "Red Chillies",
      "Curry Leaves",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "guthi vankaya",
      "masala",
      "podis",
      "spice blend",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-07-20",
    "isOutOfStock": false
  },
  {
    "id": "bellam-boondi-laddu",
    "slug": "bellam-boondi-laddu",
    "name": "Bellam Boondi Laddu",
    "category": "Sweets",
    "description": "Indulge in the timeless sweetness of Bellam Boondi Laddu — a classic Andhra sweet made with crispy boondi pearls bound together with rich organic jaggery (bellam) and a hint of cardamom. Every bite is a celebration of traditional flavors, handcrafted with pure ingredients the way it's been done for generations. Made with organic jaggery (bellam) — no refined sugar Crispy boondi with aromatic cardamom",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/bellam-boondi-laddu-6253899.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/bellam-boondi-laddu-6253899.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in a cool, dry place or refrigerate for best freshness.",
    "tags": [
      "bellam",
      "boondi",
      "laddu",
      "sweets",
      "telugu",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-20",
    "isOutOfStock": false
  },
  {
    "id": "chudwa",
    "slug": "chudwa",
    "name": "Chudwa",
    "category": "Snacks",
    "description": "Crunchy, flavorful, and irresistibly satisfying! 😋 Sri Laxmi Home Foods Chudwa is a delicious traditional Indian snack mix made with crispy flattened rice, crunchy peanuts, roasted chana dal, aromatic curry leaves, and a flavorful blend of spices. Light, crispy, and perfectly seasoned, it’s the perfect snack to enjoy with your evening chai, during travel, or whenever those snack cravings hit! ❤️ ✨ Why You’ll Love It",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul14_2026at07_08_05AM.png?v=1784030987",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul14_2026at07_08_05AM.png?v=1784030987"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 150,
        "mrp": 173,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 300,
        "mrp": 345,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 600,
        "mrp": 690,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Gram Flour (Besan)",
      "Roasted Peanuts",
      "Curry Leaves",
      "Spices",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "peanuts"
    ],
    "storage": "Store in a cool, dry place.",
    "tags": [
      "chudwa",
      "crispy",
      "sri laxmi home foods",
      "snacks",
      "telugu",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-07-14",
    "isOutOfStock": false
  },
  {
    "id": "beetroot-murukulu",
    "slug": "beetroot-murukulu",
    "name": "Beetroot Murukulu",
    "category": "Snacks",
    "description": "Vibrant, crispy, and naturally coloured — our Beetroot Murukulu is a wholesome twist on the classic snack. Made with rice flour, fresh beetroot, and aromatic spices, every bite is a burst of flavour and nutrition. Perfect for tea-time, gifting, or snacking on the go. Made with fresh beetroot Crispy & light texture",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul12_2026at09_39_45AM.png?v=1783867571",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul12_2026at09_39_45AM.png?v=1783867571"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "beetroot",
      "murukulu",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-07-12",
    "isOutOfStock": false
  },
  {
    "id": "palak-murukulu",
    "slug": "palak-murukulu",
    "name": "Palak Murukulu",
    "category": "Snacks",
    "description": "Crispy, crunchy, and packed with the goodness of fresh spinach — our Palak Murukulu is a wholesome twist on the classic snack. Made with rice flour, spinach, and aromatic spices, every bite is a burst of flavour and nutrition. Perfect for tea-time, gifting, or snacking on the go. Made with fresh spinach (palak) Crispy & light texture",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palak-murukulu-3438623.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palak-murukulu-3438623.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "murukulu",
      "palak",
      "snacks",
      "spinach",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-07-12",
    "isOutOfStock": false
  },
  {
    "id": "honey-kalakand-1",
    "slug": "honey-kalakand-1",
    "name": "Honey Kalakand",
    "category": "Sweets",
    "description": "Indulge in the rich, melt-in-your-mouth goodness of our Honey Kalakand — a classic Indian sweet crafted with pure ingredients and a touch of natural honey. Soft, grainy, and irresistibly delicious, it's perfect for gifting, festivals, or everyday indulgence.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/honey-kalakand-6990837.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/honey-kalakand-6990837.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1Kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "honey",
      "Indian sweets",
      "kalakand",
      "sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-11",
    "isOutOfStock": false
  },
  {
    "id": "besan-fusion-laddu",
    "slug": "besan-fusion-laddu",
    "name": "Besan Fusion Laddu",
    "category": "Sweets",
    "description": "Indulge in the rich, traditional taste of our Besan Fusion Laddu — a classic sweet reimagined with a wholesome twist. Made with pure ghee and loaded with premium nuts, every bite is a celebration of authentic flavour and nourishing goodness. Nuts Used Sunflower Seeds",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/besan-fusion-laddu-8470970.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/besan-fusion-laddu-8470970.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "besan",
      "laddu",
      "nuts",
      "pure ghee",
      "sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-10",
    "isOutOfStock": false
  },
  {
    "id": "wheat-halwa-1",
    "slug": "wheat-halwa-1",
    "name": "Wheat Halwa",
    "category": "Sweets",
    "description": "Wheat Halwa is a rich, indulgent traditional Indian sweet made from whole wheat, pure ghee, and natural sweeteners. Slow-cooked to perfection, it delivers a warm, melt-in-your-mouth texture with a deep, caramelised flavour that evokes the comfort of home-cooked goodness. Made with whole wheat & pure ghee Traditional slow-cooked recipe",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/wheat-halwa-7765580.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/wheat-halwa-7765580.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Wheat Flour",
      "Pure Cow Ghee",
      "Dry Fruits",
      "Natural Sugar",
      "Cardamom"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place or refrigerate for extended freshness.",
    "tags": [
      "festive",
      "halwa",
      "sweets",
      "traditional",
      "wheat",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-08",
    "isOutOfStock": false
  },
  {
    "id": "kova-billalu",
    "slug": "kova-billalu",
    "name": "Kova Billalu",
    "category": "Sweets",
    "description": "Kova Billalu are a traditional Telugu delicacy made from rich, slow-cooked milk solids (kova/khoya), handcrafted into soft, melt-in-your-mouth bites. A timeless favorite from Andhra Pradesh, they're perfect for festivals, gifting, or simply enjoying a taste of home. Shelf Life: 3–5 days at room temperature.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul8_2026at03_27_53AM.png?v=1783499288",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJul8_2026at03_27_53AM.png?v=1783499288"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Pure Full Cream Milk (Mawa / Kova)",
      "Sugar",
      "Cardamom",
      "Pistachios"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in a cool, dry place away from direct sunlight.",
    "tags": [
      "festive",
      "kova",
      "sweets",
      "Telugu",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-08",
    "isOutOfStock": false
  },
  {
    "id": "chethi-chekkalu",
    "slug": "chethi-chekkalu",
    "name": "Chethi Chekkalu",
    "category": "Snacks",
    "description": "Chethi Chekkalu are a beloved traditional Andhra snack — crispy, light rice crackers made by hand with a perfect blend of spices. Each batch is freshly prepared, delivering that authentic homestyle crunch in every bite. A timeless tea-time favourite!",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chethi-chekkalu-9806155.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chethi-chekkalu-9806155.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chekkalu",
      "rice-crackers",
      "snacks",
      "traditional",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-07-04",
    "isOutOfStock": false
  },
  {
    "id": "kaju-katli",
    "slug": "kaju-katli",
    "name": "Kaju Katli",
    "category": "Sweets",
    "description": "Indulge in the rich, melt-in-your-mouth goodness of our handcrafted Kaju Katli — a classic Indian sweet made with premium cashews. Prepared fresh to order, every bite is a celebration of tradition and quality. Shelf Life: 3–5 days at room temperature.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kaju-katli-1987326.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kaju-katli-1987326.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Premium Cashews (Kaju)",
      "Sugar",
      "Silver Vark",
      "Cardamom"
    ],
    "allergens": [
      "Tree Nuts"
    ],
    "storage": "Store in a cool, dry place away from direct sunlight.",
    "tags": [
      "cashew",
      "indian-sweets",
      "kaju-katli",
      "made-to-order",
      "sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-07-03",
    "isOutOfStock": false
  },
  {
    "id": "kakarakaya-podi",
    "slug": "kakarakaya-podi",
    "name": "Kakarakaya Podi",
    "category": "Podis",
    "description": "Kakarakaya Podi (Bitter Gourd Powder) is a traditional spice powder made from bitter gourd, roasted lentils, and aromatic spices. Its bold, earthy flavour pairs beautifully with hot rice and a drizzle of ghee — a true taste of home-style Telugu cooking. Made with bitter gourd Roasted with lentils and spices for a rich, deep flavour",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJun16_2026at09_14_52PM.png?v=1781662720",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJun16_2026at09_14_52PM.png?v=1781662720"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 300,
        "mrp": 345,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 600,
        "mrp": 690,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1200,
        "mrp": 1380,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Lentils",
      "Red Chillies",
      "Curry Leaves",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "bitter-gourd",
      "kakarakaya",
      "podi",
      "spice-powder",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-06-17",
    "isOutOfStock": false
  },
  {
    "id": "royal-feast-box",
    "slug": "royal-feast-box",
    "name": "Royal Feast Box",
    "category": "Combos",
    "description": "Royal Feast Box — The Ultimate Festive ComboCelebrate in royal style with the Sri Laxmi Home Foods Royal Feast Box — a curated collection of 18 premium handcrafted products, perfect for festivals, housewarmings, and corporate gifting. Every item is made with tradition, quality, and love. Net Weight: 6.7 kg | 18 Premium Products Actual Value: ₹7,197 | Combo Price: ₹6,897 | You Save ₹300",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/royal-feast-box-1351644.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/royal-feast-box-1351644.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "default-title",
        "label": "Default Title",
        "price": 6897,
        "mrp": 7197,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Peanuts",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "combo",
      "gift-box",
      "gift-hamper",
      "premium",
      "royal",
      "Combos"
    ],
    "createdAt": "2026-06-15",
    "isOutOfStock": false
  },
  {
    "id": "heritage-feast-box",
    "slug": "heritage-feast-box",
    "name": "Heritage Feast Box",
    "category": "Combos",
    "description": "Heritage Feast Box — A Celebration of TraditionGift the taste of heritage with the Sri Laxmi Home Foods Heritage Feast Box — a handpicked collection of 16 premium products crafted with authentic recipes and the finest ingredients. Perfect for festivals, housewarmings, and heartfelt gifting. Net Weight: 6.2 kg | 16 Premium Products Actual Value: ₹6,197 | Combo Price: ₹5,997 | You Save ₹200",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/heritage-feast-box-5309870.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/heritage-feast-box-5309870.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "default-title",
        "label": "Default Title",
        "price": 5997,
        "mrp": 6197,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Peanuts",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "combo",
      "gift-box",
      "gift-hamper",
      "heritage",
      "premium",
      "Combos"
    ],
    "createdAt": "2026-06-15",
    "isOutOfStock": false
  },
  {
    "id": "telangana-karam-chekkalu",
    "slug": "telangana-karam-chekkalu",
    "name": "Telangana Karam Chekkalu",
    "category": "Snacks",
    "description": "Telangana Karam Chekkalum from Sri Laxmi Home Foods. Available in 250g, 500g, and 1kg packs.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/telangana-karam-chekkalu-4061184.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/telangana-karam-chekkalu-4061184.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "chekkalu",
      "sri laxmi home foods",
      "karam",
      "snacks",
      "telangana",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-10",
    "isOutOfStock": false
  },
  {
    "id": "vampusa",
    "slug": "vampusa",
    "name": "Vampusa",
    "category": "Snacks",
    "description": "Vampusa is a traditional snack — light, crunchy, and packed with the bold flavors of sesame, cumin, and homemade spices. A timeless teatime favorite that brings back the warmth of home cooking. Why You'll Love It ✨ Traditional Andhra recipe",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/vampusa-5481935.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/vampusa-5481935.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "Sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "Andhra snack",
      "crispy snack",
      "Telugu snacks",
      "traditional snack",
      "vampusa",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-04",
    "isOutOfStock": false
  },
  {
    "id": "mutton-keema-pickle",
    "slug": "mutton-keema-pickle",
    "name": "Mutton Keema Pickle",
    "category": "Pickles",
    "description": "Mutton Keema Pickle is a bold Telugu specialty — finely minced mutton cooked down with aromatic spices, red chilies, and traditional pickling oils to create an intensely flavorful achar that pairs beautifully with rice, roti, or even just a spoon. Sri Laxmi Home Foods prepares this the old-fashioned way — slow-cooked, deeply spiced, and packed with the kind of flavor that only comes from authentic home recipes passed down through generations. Why You'll Love It",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-keema-pickle-5554341.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-keema-pickle-5554341.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 650,
        "mrp": 747,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 1200,
        "mrp": 1380,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 2400,
        "mrp": 2760,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "achar",
      "keema pickle",
      "mutton pickle",
      "non-veg pickle",
      "Telugu pickle",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-06-04",
    "isOutOfStock": false
  },
  {
    "id": "mutton-gongura-pickle",
    "slug": "mutton-gongura-pickle",
    "name": "Mutton Gongura Pickle",
    "category": "Pickles",
    "description": "Mutton Gongura Pickle is a prized delicacy, mutton pieces slow-cooked with the signature tartness of gongura (sorrel leaves) and a fiery blend of traditional spices. It's the kind of pickle that turns a simple meal into a feast. At Sri Laxmi Home Foods, we prepare this the authentic way — no shortcuts, no artificial flavors. Every jar carries the warmth of home cooking and the bold flavors of Telugu cuisine. Why You'll Love It",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-gongura-pickle-9929622.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-gongura-pickle-9929622.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 650,
        "mrp": 747,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 1200,
        "mrp": 1380,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 2400,
        "mrp": 2760,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "achar",
      "gongura pickle",
      "mutton pickle",
      "non-veg pickle",
      "Telugu pickle",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-06-04",
    "isOutOfStock": false
  },
  {
    "id": "kajjikayalu-traditional-andhra-sweet",
    "slug": "kajjikayalu-traditional-andhra-sweet",
    "name": "Kajjikayalu (Traditional Andhra Sweet)",
    "category": "Sweets",
    "description": "A timeless Andhra delicacy handcrafted with a crispy golden shell and a rich filling of coconut, jaggery, and premium dry fruits. Every Kajjikaya is carefully prepared using traditional recipes to deliver the authentic homemade taste enjoyed across generations. ✨ Filled with Coconut, Jaggery & Dry Fruits ✨ Crispy Outside, Rich & Flavorful Inside",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kajjikayalu-traditional-andhra-sweet-1775239.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kajjikayalu-traditional-andhra-sweet-1775239.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 249,
        "mrp": 286,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 479,
        "mrp": 551,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 899,
        "mrp": 1034,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "festival",
      "handmade",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-06-03",
    "isOutOfStock": false
  },
  {
    "id": "🍯-shakkar-para",
    "slug": "🍯-shakkar-para",
    "name": "🍯 Shakkar Para",
    "category": "Sweets",
    "description": "A timeless Indian sweet snack made from simple ingredients and traditional recipes. Crispy, lightly sweet, and irresistibly crunchy, Shakkar Para is the perfect companion for tea-time, festive gatherings, or whenever you're craving a touch of nostalgia. ✨ Crispy & Delicious ✨ Traditional Homemade Recipe",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/shakkar-para-8046541.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/shakkar-para-8046541.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "shakkar para",
      "snack",
      "sweets",
      "tea-time",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-06-03",
    "isOutOfStock": false
  },
  {
    "id": "peanut-chekkalu-green-chili",
    "slug": "peanut-chekkalu-green-chili",
    "name": "Telangana Chekkalu (Green Chilli)",
    "category": "Snacks",
    "description": "Peanut Chekkalu (With Green Chili) from Sri Laxmi Home Foods. Available in 250g, 500g, and 1kg packs.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/telangana-chekkalu-green-chilli-5003324.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/telangana-chekkalu-green-chilli-5003324.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "Peanuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "sri laxmi home foods",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "garam-masala",
    "slug": "garam-masala",
    "name": "Garam Masala",
    "category": "Masalas",
    "description": "Sri Laxmi Home Foods Garam Masala — a warming, aromatic blend of premium whole spices slow-roasted and ground to perfection. The finishing touch that elevates every Indian dish. 🌿 Premium whole spices, slow-roasted ✅ No artificial colours or preservatives",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/garam-masala-3597810.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/garam-masala-3597810.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "100g",
        "label": "100g",
        "price": 175,
        "mrp": 201,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Cinnamon",
      "Cloves",
      "Cardamom",
      "Cumin",
      "Coriander Seeds",
      "Star Anise",
      "Mace"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "sri laxmi home foods",
      "garam masala",
      "indian",
      "masala",
      "spices",
      "Masalas",
      "Spice Blend"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "biryani-masala",
    "slug": "biryani-masala",
    "name": "Biryani Masala",
    "category": "Masalas",
    "description": "Sri Laxmi Home Foods Biryani Masala — a fragrant, layered spice blend for restaurant-style biryani at home. Made with whole spices including cardamom, cloves, star anise, and bay leaves using a traditional Andhra recipe. 🌿 Whole spice blend — no fillers ✅ No artificial colours or preservatives",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/biryani-masala-9667415.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/biryani-masala-9667415.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "100g",
        "label": "100g",
        "price": 175,
        "mrp": 201,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Shahi Jeera",
      "Mace",
      "Nutmeg",
      "Green & Black Cardamom",
      "Cloves",
      "Cinnamon",
      "Bay Leaf"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "biryani",
      "sri laxmi home foods",
      "masala",
      "spices",
      "Masalas",
      "Spice Blend"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "chicken-gravy-masala",
    "slug": "chicken-gravy-masala",
    "name": "Chicken Gravy Masala",
    "category": "Masalas",
    "description": "Sri Laxmi Home Foods Chicken Gravy Masala — a rich, aromatic spice blend for thick, flavourful chicken curries. Crafted with traditional Andhra spices for a deep, authentic taste every time. 🌶️ Rich spice blend ✅ No artificial colours or preservatives",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-gravy-masala-9447468.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-gravy-masala-9447468.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "100g",
        "label": "100g",
        "price": 175,
        "mrp": 201,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Handpicked Whole Spices",
      "Coriander",
      "Cumin",
      "Black Pepper",
      "Aromatic Herbs"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chicken",
      "sri laxmi home foods",
      "gravy",
      "masala",
      "Masalas",
      "Spice Blend"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "chicken-fry-masala",
    "slug": "chicken-fry-masala",
    "name": "Chicken Fry Masala",
    "category": "Masalas",
    "description": "Sri Laxmi Home Foods Chicken Fry Masala — a bold, aromatic spice blend crafted for perfectly crispy and flavourful fried chicken. Made with hand-selected whole spices and traditional Andhra recipes. 🌶️ Bold Andhra spice blend ✅ No artificial colours or preservatives",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-fry-masala-1180694.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-fry-masala-1180694.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "100g",
        "label": "100g",
        "price": 175,
        "mrp": 201,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Handpicked Whole Spices",
      "Coriander",
      "Cumin",
      "Black Pepper",
      "Aromatic Herbs"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chicken",
      "sri laxmi home foods",
      "masala",
      "spices",
      "Masalas",
      "Spice Blend"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "ginger-garlic-paste",
    "slug": "ginger-garlic-paste",
    "name": "Ginger Garlic Paste",
    "category": "Masalas",
    "description": "Freshly prepared Ginger Garlic Paste from Sri Laxmi Home Foods — made with premium ginger and garlic, ground to a smooth paste with no artificial preservatives. The essential base for authentic Indian cooking. 🌿 Made with fresh ginger & garlic ✅ No artificial preservatives",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ginger-garlic-paste-6917108.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ginger-garlic-paste-6917108.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "100g",
        "label": "100g",
        "price": 100,
        "mrp": 115,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Mountain Ginger",
      "Peeled Garlic",
      "Salt",
      "Turmeric"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "sri laxmi home foods",
      "garlic",
      "ginger",
      "masala",
      "paste",
      "Masalas",
      "Spice Blend"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "palak-chekkalu",
    "slug": "palak-chekkalu",
    "name": "Palak Chekkalu",
    "category": "Snacks",
    "description": "Crispy Palak Chekkalu from Sri Laxmi Home Foods — made with rice flour and fresh spinach for a naturally green, iron-rich snack. A nutritious and delicious twist on the classic Telugu chekkalu. Available in 250g, 500g, and 1kg packs.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palak-chekkalu-8778657.png?v=1786037826",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palak-chekkalu-8778657.png?v=1786037826"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "chekkalu",
      "sri laxmi home foods",
      "palak",
      "snacks",
      "spinach",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "carrot-chekkalu",
    "slug": "carrot-chekkalu",
    "name": "Carrot Chekkalu",
    "category": "Snacks",
    "description": "Crunchy Carrot Chekkalu from Sri Laxmi Home Foods — made with rice flour and fresh carrots for a naturally sweet, wholesome flavour. A nutritious take on the beloved Telugu snack. Available in 250g, 500g, and 1kg packs.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/carrot-chekkalu-4783883.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/carrot-chekkalu-4783883.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "carrot",
      "chekkalu",
      "sri laxmi home foods",
      "healthy",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "beetroot-chekkalu",
    "slug": "beetroot-chekkalu",
    "name": "Beetroot Chekkalu",
    "category": "Snacks",
    "description": "Crispy, wholesome Beetroot Chekkalu from Sri Laxmi Home Foods — made with rice flour and fresh beetroot for a naturally vibrant colour and earthy flavour. A healthy twist on a Telugu classic. Available in 250g, 500g, and 1kg packs.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/beetroot-chekkalu-3349336.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/beetroot-chekkalu-3349336.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "beetroot",
      "chekkalu",
      "sri laxmi home foods",
      "healthy",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-06-01",
    "isOutOfStock": false
  },
  {
    "id": "kobbari-laddu",
    "slug": "kobbari-laddu",
    "name": "Kobbari Laddu",
    "category": "Sweets",
    "description": "Kobbari Laddu — Traditional Coconut SweetA timeless Andhra classic, our Kobbari Laddu is handcrafted using freshly grated coconut, pure jaggery, and aromatic cardamom — just like your grandmother used to make. 🥥 Made with fresh coconut 🍬 Sweetened with natural jaggery",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kobbari-laddu-7977550.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kobbari-laddu-7977550.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "sri laxmi home foods",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-30",
    "isOutOfStock": false
  },
  {
    "id": "gond-laddu",
    "slug": "gond-laddu",
    "name": "Gond Laddu",
    "category": "Sweets",
    "description": "Made with premium edible gum (Gond), pure ghee, whole wheat flour, crunchy almonds, cashews, wholesome makhana (fox nuts), and aromatic cardamom, our Gond Laddu is a traditional Indian sweet celebrated for its rich taste, nourishing ingredients, and natural energy-boosting goodness. Carefully handcrafted using time-honored recipes, each laddu offers the perfect balance of flavor, texture, and wholesome nutrition in every bite.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/gond-laddu-6762198.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/gond-laddu-6762198.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "sri laxmi home foods",
      "sweets",
      "traditional",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-30",
    "isOutOfStock": false
  },
  {
    "id": "jowar-karam-gavvalu",
    "slug": "jowar-karam-gavvalu",
    "name": "Jowar Karam Gavvalu",
    "category": "Snacks",
    "description": "Spicy shell-shaped snacks made from jowar (sorghum) flour and seasoned with bold Andhra karam — a fiery, crunchy, and wholesome millet snack that packs a punch with every bite.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jowar-karam-gavvalu-3752974.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jowar-karam-gavvalu-3752974.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "gavvalu",
      "jowar",
      "snacks",
      "spicy",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-27",
    "isOutOfStock": false
  },
  {
    "id": "coconut-banana-chips-1",
    "slug": "coconut-banana-chips-1",
    "name": "Coconut Banana Chips",
    "category": "Snacks",
    "description": "Golden banana chips infused with the subtle sweetness of coconut — a tropical twist on the classic crispy snack. Light, crunchy, and naturally flavoured, these chips are perfect for snacking any time of day.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/coconut-banana-chips-9523631.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/coconut-banana-chips-9523631.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Raw Nendran Bananas",
      "Pure Coconut Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "banana chips",
      "coconut",
      "crispy",
      "snacks",
      "tropical",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-27",
    "isOutOfStock": false
  },
  {
    "id": "jantikalu-murukulu",
    "slug": "jantikalu-murukulu",
    "name": "Jantikalu / Murukulu",
    "category": "Snacks",
    "description": "Classic Andhra Jantikalu — crispy rice flour murukulu pressed through a traditional mould and fried to golden perfection. Light, crunchy, and seasoned with cumin and sesame, these are the ultimate teatime snack.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jantikalu-murukulu-8763387.png?v=1786037826",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jantikalu-murukulu-8763387.png?v=1786037826"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "Sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "jantikalu",
      "murukulu",
      "rice flour",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-27",
    "isOutOfStock": false
  },
  {
    "id": "ragi-murukulu-1",
    "slug": "ragi-murukulu-1",
    "name": "Ragi Murukulu",
    "category": "Snacks",
    "description": "Traditional Andhra-style Murukulu made with wholesome finger millet (ragi) — crispy, nutritious, and packed with earthy flavour. A guilt-free snack that pairs perfectly with evening chai.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ragi-murukulu-5280056.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ragi-murukulu-5280056.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "finger millet",
      "murukulu",
      "ragi",
      "snacks",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-27",
    "isOutOfStock": false
  },
  {
    "id": "chicken-pickle",
    "slug": "chicken-pickle",
    "name": "Chicken Pickle",
    "category": "Pickles",
    "description": "Finely minced chicken slow-cooked with a bold Rayalaseema spice blend and preserved in oil — a unique and intensely flavourful pickle that pairs beautifully with rice, roti, or as a side with any meal.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-pickle-4038438.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-pickle-4038438.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chicken",
      "non-veg",
      "pickle",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-05-26",
    "isOutOfStock": false
  },
  {
    "id": "sambar-powder",
    "slug": "sambar-powder",
    "name": "Sambar Powder",
    "category": "Podis",
    "description": "A rich and fragrant Sambar Powder made from a carefully balanced blend of roasted lentils, coriander, cumin, and warming spices. Brings the authentic taste of South Indian sambar to your kitchen every single time.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/sambar-powder-7505179.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/sambar-powder-7505179.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 212,
        "mrp": 244,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 424,
        "mrp": 488,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 848,
        "mrp": 975,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Coriander Seeds",
      "Red Chillies",
      "Toor Dal",
      "Cumin",
      "Black Pepper",
      "Fenugreek"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "powders",
      "sambar",
      "south indian",
      "spice blend",
      "traditional",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "rasam-powder",
    "slug": "rasam-powder",
    "name": "Rasam Powder",
    "category": "Podis",
    "description": "Aromatic and warming Rasam Powder blended from sun-dried spices including coriander, cumin, black pepper, and red chillies. Crafted using a traditional Andhra recipe for a rasam that is tangy, spiced, and deeply comforting.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/rasam-powder-2040441.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/rasam-powder-2040441.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 212,
        "mrp": 244,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 424,
        "mrp": 488,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 848,
        "mrp": 975,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Coriander Seeds",
      "Red Chillies",
      "Toor Dal",
      "Cumin",
      "Black Pepper",
      "Fenugreek"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "powders",
      "rasam",
      "spice blend",
      "traditional",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "chicken-keema-pickle",
    "slug": "chicken-keema-pickle",
    "name": "Chicken Keema Pickle",
    "category": "Pickles",
    "description": "Finely minced chicken keema slow-cooked with a bold Andhra spice blend and preserved in oil — a unique and intensely flavourful pickle that pairs beautifully with rice, roti, or as a side with any meal.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-keema-pickle-9460964.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/chicken-keema-pickle-9460964.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chicken keema",
      "minced chicken",
      "non-veg",
      "pickle",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "prawns-pickle",
    "slug": "prawns-pickle",
    "name": "Prawns Pickle",
    "category": "Pickles",
    "description": "Succulent prawns pickled in a tangy, spiced Andhra masala — a coastal delicacy that brings the bold flavours of the sea to your table. Perfectly balanced with heat, tang, and depth of flavour.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/prawns-pickle-5696706.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/prawns-pickle-5696706.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 1300,
        "mrp": 1495,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 2600,
        "mrp": 2990,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "non-veg",
      "pickle",
      "prawns",
      "seafood",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "mutton-pickle",
    "slug": "mutton-pickle",
    "name": "Mutton Pickle",
    "category": "Pickles",
    "description": "Premium Mutton Pickle crafted with slow-cooked tender mutton pieces marinated in a robust Andhra spice blend. Rich, meaty, and intensely flavourful — a prized delicacy for non-veg pickle lovers.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-pickle-5007065.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/mutton-pickle-5007065.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 550,
        "mrp": 633,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 1100,
        "mrp": 1265,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 2200,
        "mrp": 2530,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "mutton",
      "non-veg",
      "pickle",
      "premium",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "chicken-gongura-pickle",
    "slug": "chicken-gongura-pickle",
    "name": "Chicken Gongura Pickle",
    "category": "Pickles",
    "description": "A bold Andhra classic — tender chicken slow-cooked with tangy gongura (sorrel leaves) and a fiery blend of traditional spices. Rich, intense, and deeply flavourful, this pickle is a true taste of Andhra Pradesh.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageMay30_2026at08_25_58AM.png?v=1780147606",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageMay30_2026at08_25_58AM.png?v=1780147606"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Fresh Meat / Seafood",
      "Cold-pressed Groundnut Oil",
      "Guntur Red Chilli",
      "Ginger Garlic Paste",
      "Mustard",
      "Fenugreek",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "chicken",
      "gongura",
      "non-veg",
      "pickle",
      "Pickles",
      "Non-Veg"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "puliihora-pulusu",
    "slug": "puliihora-pulusu",
    "name": "Puliihora Pulusu",
    "category": "Podis",
    "description": "A unique and tangy Andhra spice blend crafted for the iconic Pulihora Pulusu — a tamarind-based rice dish bursting with bold flavours. Hand-ground with traditional spices for an authentic home-cooked taste.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/puliihora-pulusu-8806725.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/puliihora-pulusu-8806725.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Roasted Lentils",
      "Red Chillies",
      "Curry Leaves",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "podis",
      "pulusu",
      "rice",
      "tamarind",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "putnala-podi",
    "slug": "putnala-podi",
    "name": "Putnala Podi",
    "category": "Podis",
    "description": "Light and flavourful Putnala Podi made from roasted chana dal (putnalu), red chillies, and spices. A mild yet tasty Telugu podi that pairs perfectly with idli, dosa, and rice.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/putnala-podi-2140697.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/putnala-podi-2140697.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 188,
        "mrp": 216,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 376,
        "mrp": 432,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 752,
        "mrp": 865,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Lentils",
      "Red Chillies",
      "Curry Leaves",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "chana dal",
      "mild",
      "podis",
      "putnala podi",
      "telugu",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "palli-podi",
    "slug": "palli-podi",
    "name": "Palli Podi",
    "category": "Podis",
    "description": "Rich and nutty Palli Podi made from roasted peanuts, red chillies, garlic, and spices. A versatile Telugu podi that pairs beautifully with idli, dosa, or rice with ghee — bold flavour in every spoonful.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palli-podi-5458935.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/palli-podi-5458935.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 212,
        "mrp": 244,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 424,
        "mrp": 488,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 848,
        "mrp": 975,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Peanuts",
      "Red Chilli Powder",
      "Garlic",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "Peanuts",
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "garlic",
      "palli podi",
      "peanut",
      "podis",
      "telugu",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "kandi-podi",
    "slug": "kandi-podi",
    "name": "Kandi Podi",
    "category": "Podis",
    "description": "A quintessential Telugu podi made from roasted toor dal (kandi), red chillies, and cumin. Mix with hot rice and a generous dollop of ghee for the ultimate comfort meal — simple, soulful, and deeply satisfying.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kandi-podi-3721724.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kandi-podi-3721724.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 212,
        "mrp": 244,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 424,
        "mrp": 488,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 848,
        "mrp": 975,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Toor Dal",
      "Chana Dal",
      "Moong Dal",
      "Red Chillies",
      "Cumin",
      "Hing"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "kandi podi",
      "podis",
      "rice",
      "telugu",
      "toor dal",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "idly-karam",
    "slug": "idly-karam",
    "name": "Idly Karam",
    "category": "Podis",
    "description": "The perfect companion for your morning idli and dosa — Idly Karam is a bold, spiced podi made with urad dal, red chillies, and aromatic spices. A staple of every authentic Telugu breakfast table.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/idly-karam-5691651.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/idly-karam-5691651.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 212,
        "mrp": 244,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 424,
        "mrp": 488,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 848,
        "mrp": 975,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Urad Dal",
      "Chana Dal",
      "Red Chilli",
      "Curry Leaves",
      "Sesame Seeds",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "breakfast",
      "idli",
      "idly karam",
      "podis",
      "telugu",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "kura-karam",
    "slug": "kura-karam",
    "name": "Kura Karam",
    "category": "Podis",
    "description": "A fiery and aromatic Andhra spice blend designed to elevate curries and gravies. Kura Karam is hand-ground with a signature mix of red chillies, coriander, and warming spices — the soul of Telugu cooking.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kura-karam-4376669.png?v=1786037888",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/kura-karam-4376669.png?v=1786037888"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Roasted Lentils",
      "Red Chillies",
      "Curry Leaves",
      "Cumin",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "curry",
      "kura karam",
      "podis",
      "spice",
      "Podis",
      "Podi"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "jonna-murukulu",
    "slug": "jonna-murukulu",
    "name": "Jonna Murukulu",
    "category": "Snacks",
    "description": "Spiral-shaped murukulu crafted from jowar (sorghum) flour with a blend of traditional spices. A crunchy, flavourful millet snack that is as wholesome as it is delicious.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jonna-murukulu-1002421.png?v=1786037826",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/jonna-murukulu-1002421.png?v=1786037826"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "jowar",
      "millet",
      "murukulu",
      "snacks",
      "telugu",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "boondi",
    "slug": "boondi",
    "name": "Boondi",
    "category": "Snacks",
    "description": "Golden, crispy boondi delicately seasoned with authentic Telugu spices, blended with crunchy peanuts, premium cashews, and aromatic curry leaves. This flavorful snack delivers the perfect balance of spice and crunch, making it an ideal companion for a hot cup of chai or a delicious topping for chaats, raitas, and other savory dishes.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/boondi-4955908.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/boondi-4955908.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 150,
        "mrp": 173,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 300,
        "mrp": 345,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 600,
        "mrp": 690,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Gram Flour (Besan)",
      "Roasted Peanuts",
      "Curry Leaves",
      "Spices",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "Peanuts",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "boondi",
      "chai snack",
      "crispy",
      "snacks",
      "telugu",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "ariselu-ghee",
    "slug": "ariselu-ghee",
    "name": "Ariselu (Ghee)",
    "category": "Sweets",
    "description": "A quintessential Telugu festive sweet — Ariselu are crispy rice flour discs soaked in jaggery syrup and finished with a generous coating of pure ghee. Irresistibly traditional and deeply satisfying.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ariselu-ghee-4957168.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ariselu-ghee-4957168.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 210,
        "mrp": 241,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 420,
        "mrp": 483,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 840,
        "mrp": 966,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "ariselu",
      "ghee",
      "rice",
      "sweets",
      "telugu",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "sunni-vundalu",
    "slug": "sunni-vundalu",
    "name": "Minapa Sunnunda",
    "category": "Sweets",
    "description": "A beloved Andhra classic — Sunnivundalu are soft, melt-in-the-mouth laddus made from roasted urad dal flour, jaggery, and pure ghee. A festive staple with deep traditional roots.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/minapa-sunnunda-4283718.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/minapa-sunnunda-4283718.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "andhra",
      "festive",
      "sunnivundalu",
      "sweets",
      "urad dal",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "raagi-laddu",
    "slug": "raagi-laddu",
    "name": "Ragi Laddu",
    "category": "Sweets",
    "description": "🌾 Ragi Fusion Laddu with Nuts A wholesome blend of nutrient-rich ragi and premium nuts, crafted into delicious laddus that bring together health and traditional taste in every bite. Packed with natural goodness and homemade flavor, these laddus are perfect for a guilt-free snack or a nourishing treat for the whole family. ✨ Made with Nutritious Ragi",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ragi-laddu-6598585.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ragi-laddu-6598585.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "healthy",
      "laddu",
      "millet",
      "raagi",
      "sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "nuvvula-laddu",
    "slug": "nuvvula-laddu",
    "name": "Nuvvula Laddu",
    "category": "Sweets",
    "description": "Traditional Nuvvula Laddu crafted with roasted sesame seeds (nuvvulu), jaggery, and a hint of cardamom. A wholesome, nutrient-rich Telugu sweet with a deep, nutty flavour.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/nuvvula-laddu-2765093.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/nuvvula-laddu-2765093.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 350,
        "mrp": 402,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 700,
        "mrp": 805,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1400,
        "mrp": 1610,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Sesame"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "jaggery",
      "laddu",
      "sesame",
      "sweets",
      "telugu",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "dry-fruit-laddu",
    "slug": "dry-fruit-laddu",
    "name": "Dry Fruit Laddu",
    "category": "Sweets",
    "description": "A luxurious laddu packed with premium dry fruits — cashews, almonds, pistachios, and raisins — bound together with pure ghee and natural sweeteners. Rich, indulgent, and perfect for gifting.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJun3_2026at05_48_56PM.png?v=1780527026",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ChatGPTImageJun3_2026at05_48_56PM.png?v=1780527026"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 800,
        "mrp": 920,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 1600,
        "mrp": 1840,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "dry fruit",
      "gifting",
      "laddu",
      "premium",
      "sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "boondi-laddu",
    "slug": "boondi-laddu",
    "name": "Boondi Laddu",
    "category": "Sweets",
    "description": "Classic Boondi Laddu made with golden fried boondi, pure ghee, and aromatic cardamom. A timeless Telugu sweet that graces every celebration and festive occasion. Shelf Life: 3–5 days at room temperature.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/boondi-laddu-5989894.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/boondi-laddu-5989894.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Besan / Gram Flour",
      "Pure Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)"
    ],
    "storage": "Store in a cool, dry place away from direct sunlight.",
    "tags": [
      "boondi",
      "festive",
      "laddu",
      "sweets",
      "telugu",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-22",
    "isOutOfStock": false
  },
  {
    "id": "deluxe-assortment-hamper",
    "slug": "deluxe-assortment-hamper",
    "name": "Family Favorites Box",
    "category": "Combos",
    "description": "Family Favorites Box — Handcrafted Goodness for Every HomeShare the warmth of tradition with the Sri Laxmi Home Foods Family Favorites Box — a thoughtfully curated collection of 10 beloved products made with authentic recipes and the finest ingredients. Perfect for family gatherings, festivals, and heartfelt gifting. Net Weight: 3.45 kg | 10 Premium Products Actual Value: ₹3,517 | Combo Price: ₹3,417 | You Save ₹100",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/family-favorites-box-9338238.png?v=1786037827",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/family-favorites-box-9338238.png?v=1786037827"
    ],
    "variants": [
      {
        "id": "default-title",
        "label": "Default Title",
        "price": 3417,
        "mrp": 3517,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Peanuts",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "assortment",
      "combo",
      "combos",
      "deluxe",
      "sri laxmi home foods",
      "Combos"
    ],
    "createdAt": "2026-05-21",
    "isOutOfStock": false
  },
  {
    "id": "premium-mixed-hamper",
    "slug": "premium-mixed-hamper",
    "name": "Sweet & Savory Box",
    "category": "Combos",
    "description": "Sweet & Savory Box — The Perfect Everyday ComboTreat yourself or a loved one to the Sri Laxmi Home Foods Sweet & Savory Box — a delightful mix of 6 handcrafted products that balance the best of both worlds. Made with authentic recipes and premium ingredients, this box is perfect for any occasion. Net Weight: 2.25 kg | 6 Premium Products Actual Value: ₹2,399 | Combo Price: ₹2,299 | You Save ₹100",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/sweet-savory-box-4808608.png?v=1786037826",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/sweet-savory-box-4808608.png?v=1786037826"
    ],
    "variants": [
      {
        "id": "default-title",
        "label": "Default Title",
        "price": 2299,
        "mrp": 2399,
        "stock": 25
      }
    ],
    "spiceLevel": "Hot",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Tree Nuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "combo",
      "combos",
      "sri laxmi home foods",
      "mixed",
      "premium",
      "Combos"
    ],
    "createdAt": "2026-05-21",
    "isOutOfStock": false
  },
  {
    "id": "savory-snacks-hamper",
    "slug": "savory-snacks-hamper",
    "name": "Savory Explorer Box",
    "category": "Combos",
    "description": "Savory Explorer Box — A Crunchy Journey of FlavoursEmbark on a savory adventure with the Sri Laxmi Home Foods Savory Explorer Box — a handpicked selection of 6 crunchy, flavour-packed snacks made with traditional recipes and the finest ingredients. Perfect for snack lovers, gifting, and festive occasions. Net Weight: 1.5 kg | 6 Premium Products Actual Value: ₹1,120 | Combo Price: ₹1,070 | You Save ₹50",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/savory-explorer-box-2248188.png?v=1786037887",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/savory-explorer-box-2248188.png?v=1786037887"
    ],
    "variants": [
      {
        "id": "default-title",
        "label": "Default Title",
        "price": 1070,
        "mrp": 1120,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Assorted Traditional Sweets",
      "Crispy Savory Snacks",
      "Pure Desi Ghee",
      "Handcrafted Ingredients"
    ],
    "allergens": [
      "Peanuts"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "combo",
      "combos",
      "sri laxmi home foods",
      "savory",
      "snacks",
      "Combos"
    ],
    "createdAt": "2026-05-21",
    "isOutOfStock": false
  },
  {
    "id": "butter-jonna-murukulu",
    "slug": "butter-jonna-murukulu",
    "name": "Butter Jonna Murukulu (Jowar)",
    "category": "Snacks",
    "description": "Rich and crispy Murukulu made with jowar (sorghum) flour and real butter — a wholesome millet-based snack with a melt-in-the-mouth texture and a subtle buttery flavour. Nutritious, gluten-friendly, and utterly delicious.",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/butter-jonna-murukulu-jowar-2224578.png?v=1786037829",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/butter-jonna-murukulu-jowar-2224578.png?v=1786037829"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Medium",
    "ingredients": [
      "Rice Flour",
      "Roasted Gram Flour",
      "Sesame Seeds",
      "Ajwain / Cumin",
      "Cold-pressed Oil",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "butter",
      "jowar",
      "murukulu",
      "snacks",
      "sorghum",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-12",
    "isOutOfStock": false
  },
  {
    "id": "ghee-bellam-gavvalu",
    "slug": "ghee-bellam-gavvalu",
    "name": "Ghee Bellam Gavvalu",
    "category": "Sweets",
    "description": "Sweet. Buttery. Celebration-Ready.Ghee Bellam Gavvalu are delicate shell-shaped sweets made with wheat flour, pure ghee, and natural jaggery (bellam). A beloved Telugu festive treat that melts in your mouth with every bite, carrying the warmth of home and tradition. Made with wheat flour, pure ghee, and natural jaggery Delicate shell shape, crispy outside and melt-in-mouth inside",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ghee-bellam-gavvalu-2266469.png?v=1786037886",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/ghee-bellam-gavvalu-2266469.png?v=1786037886"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Flour",
      "Pure Desi Ghee",
      "Jaggery / Sugar",
      "Cardamom",
      "Nuts"
    ],
    "allergens": [
      "Dairy (Milk / Ghee)",
      "Gluten (Wheat)"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "festive",
      "gavvalu",
      "ghee",
      "jaggery",
      "Telugu sweets",
      "Sweets",
      "Traditional Sweet"
    ],
    "createdAt": "2026-05-12",
    "isOutOfStock": false
  },
  {
    "id": "yam-chips-kanda-gadda",
    "slug": "yam-chips-kanda-gadda",
    "name": "Yam Chips (Kanda Gadda)",
    "category": "Snacks",
    "description": "Earthy. Crispy. Uniquely Delicious. Yam Chips are thinly sliced (Kanda Gadda), fried to a perfect golden crisp and lightly seasoned with traditional spices. A unique and wholesome snack that brings the earthy goodness of yam to your snack time. Made from fresh Kanda Gadda",
    "image": "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/yam-chips-kanda-gadda-2834429.png?v=1786037828",
    "images": [
      "https://cdn.shopify.com/s/files/1/0737/3953/4414/files/yam-chips-kanda-gadda-2834429.png?v=1786037828"
    ],
    "variants": [
      {
        "id": "250g",
        "label": "250g",
        "price": 200,
        "mrp": 230,
        "stock": 25
      },
      {
        "id": "500g",
        "label": "500g",
        "price": 400,
        "mrp": 460,
        "stock": 25
      },
      {
        "id": "1kg",
        "label": "1kg",
        "price": 800,
        "mrp": 920,
        "stock": 25
      }
    ],
    "spiceLevel": "Mild",
    "ingredients": [
      "Traditional Rice Flour",
      "Gram Flour",
      "Sesame Seeds",
      "Cold-pressed Oil",
      "Traditional Spices",
      "Salt"
    ],
    "allergens": [
      "None"
    ],
    "storage": "Store in an airtight container in a cool, dry place.",
    "tags": [
      "fried snacks",
      "senagadumpa",
      "Telugu snacks",
      "traditional",
      "yam chips",
      "Snacks",
      "Crunchy Snack"
    ],
    "createdAt": "2026-05-12",
    "isOutOfStock": false
  }
];

export const featuredCollections = [
  {
    title: 'Heritage Sweets',
    slug: 'sweets',
    description: 'Pure ghee sweets, laddus, and festival favorites.',
    image: products.find((p) => p.category === 'Sweets')?.image || products[0].image,
  },
  {
    title: 'Crispy Snacks',
    slug: 'snacks',
    description: 'Traditional murukulu, chegodi, chekkalu, and mixtures.',
    image: products.find((p) => p.category === 'Snacks')?.image || products[0].image,
  },
  {
    title: 'Authentic Pickles',
    slug: 'pickles',
    description: 'Veg & Non-Veg pickles cured with house-ground spices.',
    image: products.find((p) => p.category === 'Pickles')?.image || products[0].image,
  },
  {
    title: 'Aromatic Podis',
    slug: 'podis',
    description: 'Homestyle karam podis, sambar, and rasam blends.',
    image: products.find((p) => p.category === 'Podis')?.image || products[0].image,
  },
];

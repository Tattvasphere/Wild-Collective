// Catalogue content mirrored from the Wild Collective product portal.

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductColour {
  code: number;
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  images: ProductImage[];
  href: string;
  prices: string[];
  price: string;
  priceNote: string;
  moq?: string;
  priceDetail?: string;
  colours: ProductColour[];
}

export interface Category {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  ctaNoun: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "round-neck-tshirt",
    "title": "Round Neck T-Shirt",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
    "image": "/images/products/round-neck-tshirt-yellow-front.webp",
    "images": [
      {
        "src": "/images/products/round-neck-tshirt-yellow-front.webp",
        "alt": "Round Neck T-Shirt",
        "caption": "Product view"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-three-quarter-left.webp",
        "alt": "Male model wearing the yellow round neck T-shirt at a three-quarter angle",
        "caption": "Three-quarter view"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-back.webp",
        "alt": "Back view of the yellow round neck T-shirt",
        "caption": "Back view"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-three-quarter-right.webp",
        "alt": "Alternate three-quarter view of the yellow round neck T-shirt",
        "caption": "Alternate angle"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-portrait.webp",
        "alt": "Portrait view of a male model wearing the yellow round neck T-shirt",
        "caption": "Portrait view"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-detail.webp",
        "alt": "Close view of the yellow round neckline and fabric texture",
        "caption": "Neckline and fabric detail"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-womens-fit.webp",
        "alt": "Female model wearing the yellow round neck T-shirt",
        "caption": "Women's fit"
      },
      {
        "src": "/images/products/round-neck-tshirt-yellow-lifestyle.webp",
        "alt": "Full-length lifestyle view of the yellow round neck T-shirt",
        "caption": "Lifestyle view"
      }
    ],
    "href": "/products/apparel/round-neck-tshirt/",
    "prices": [
      "₹75",
      "₹200",
      "₹300"
    ],
    "price": "₹75 · ₹200 · ₹300",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      },
      {
        "code": 10,
        "name": "G Melange",
        "hex": "#a5a7a6"
      },
      {
        "code": 11,
        "name": "Black",
        "hex": "#101516"
      },
      {
        "code": 17,
        "name": "Red",
        "hex": "#bd1f2b"
      }
    ]
  },
  {
    "id": "collar-tshirt",
    "title": "Collar T-Shirt",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
    "image": "/images/products/collar-tshirt-front.webp",
    "images": [
      {
        "src": "/images/products/collar-tshirt-front.webp",
        "alt": "Collar T-Shirt",
        "caption": "Product view"
      },
      {
        "src": "/images/products/collar-tshirt-side.webp",
        "alt": "Model wearing the green collar T-shirt from the side",
        "caption": "Side view"
      },
      {
        "src": "/images/products/collar-tshirt-angle.webp",
        "alt": "Model wearing the green collar T-shirt at a three-quarter angle",
        "caption": "Three-quarter view"
      },
      {
        "src": "/images/products/collar-tshirt-back.webp",
        "alt": "Back view of the green collar T-shirt",
        "caption": "Back view"
      },
      {
        "src": "/images/products/collar-tshirt-detail.webp",
        "alt": "Close view of the green collar, buttons and fabric texture",
        "caption": "Collar and fabric detail"
      },
      {
        "src": "/images/products/collar-tshirt-lifestyle.webp",
        "alt": "Full-length lifestyle view of the green collar T-shirt",
        "caption": "Lifestyle view"
      }
    ],
    "href": "/products/apparel/collar-tshirt/",
    "prices": [
      "₹150",
      "₹220",
      "₹450"
    ],
    "price": "₹150 · ₹220 · ₹450",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      },
      {
        "code": 3,
        "name": "A Melange",
        "hex": "#c7c7cc"
      },
      {
        "code": 4,
        "name": "B Green",
        "hex": "#123728"
      },
      {
        "code": 5,
        "name": "Sea Green",
        "hex": "#3eb9b1"
      },
      {
        "code": 6,
        "name": "Maroon",
        "hex": "#721528"
      },
      {
        "code": 12,
        "name": "Wine",
        "hex": "#32121e"
      },
      {
        "code": 16,
        "name": "Grey",
        "hex": "#969997"
      },
      {
        "code": 9,
        "name": "Yellow",
        "hex": "#f2ef19"
      },
      {
        "code": 11,
        "name": "Black",
        "hex": "#101516"
      },
      {
        "code": 18,
        "name": "Royal",
        "hex": "#293b9b"
      },
      {
        "code": 10,
        "name": "G Melange",
        "hex": "#a5a7a6"
      },
      {
        "code": 21,
        "name": "Gold",
        "hex": "#f4c20d"
      },
      {
        "code": 22,
        "name": "P Green",
        "hex": "#2b7a2f"
      },
      {
        "code": 26,
        "name": "Black Melange",
        "hex": "#33403e"
      },
      {
        "code": 17,
        "name": "Red",
        "hex": "#bd1f2b"
      }
    ]
  },
  {
    "id": "sweat-shirts",
    "title": "Sweat Shirts",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
    "image": "/images/products/sweat-shirts-front.png",
    "images": [
      {
        "src": "/images/products/sweat-shirts-front.png",
        "alt": "Sweat Shirts",
        "caption": "Product view"
      },
      {
        "src": "/images/products/sweat-shirts-angle.png",
        "alt": "Model wearing the black sweat shirt from the side",
        "caption": "Side view"
      },
      {
        "src": "/images/products/sweat-shirts-three-quarter.png",
        "alt": "Model wearing the black sweat shirt at a three-quarter angle",
        "caption": "Three-quarter view"
      },
      {
        "src": "/images/products/sweat-shirts-back.png",
        "alt": "Back view of the black sweat shirt",
        "caption": "Back view"
      },
      {
        "src": "/images/products/sweat-shirts-detail.png",
        "alt": "Close view of the black sweat shirt, buttons and fabric texture",
        "caption": "Sweat shirt and fabric detail"
      },
      {
        "src": "/images/products/sweat-shirts-lifestyle.png",
        "alt": "Full-length lifestyle view of the black sweat shirt",
        "caption": "Lifestyle view"
      }
    ],
    "href": "/products/apparel/sweat-shirts/",
    "prices": [
      "₹400",
      "₹450"
    ],
    "price": "₹400 · ₹450",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      },
      {
        "code": 10,
        "name": "G Melange",
        "hex": "#a5a7a6"
      },
      {
        "code": 11,
        "name": "Black",
        "hex": "#101516"
      }
    ]
  },
  {
    "id": "hoodies",
    "title": "Hoodies",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
    "image": "/images/products/hoodie-front.webp",
    "images": [
      {
        "src": "/images/products/hoodie-front.webp",
        "alt": "Hoodies",
        "caption": "Product view"
      },
      {
        "src": "/images/products/hoodie-lifestyle.webp",
        "alt": "Full-length lifestyle view of the black hoodie",
        "caption": "Lifestyle view"
      },
      {
        "src": "/images/products/hoodie-three-quarter.webp",
        "alt": "Model wearing the black hoodie at a three-quarter angle",
        "caption": "Three-quarter view"
      },
      {
        "src": "/images/products/hoodie-back.webp",
        "alt": "Back view of the black hoodie",
        "caption": "Back view"
      },
      {
        "src": "/images/products/hoodie-hood-up.webp",
        "alt": "Model wearing the black hoodie with the hood up",
        "caption": "Hood-up view"
      },
      {
        "src": "/images/products/hoodie-detail.webp",
        "alt": "Close view of the black hood and fabric texture",
        "caption": "Hood and fabric detail"
      }
    ],
    "href": "/products/apparel/hoodies/",
    "prices": [
      "₹450",
      "₹550",
      "₹650"
    ],
    "price": "₹450 · ₹550 · ₹650",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      },
      {
        "code": 10,
        "name": "G Melange",
        "hex": "#a5a7a6"
      },
      {
        "code": 11,
        "name": "Black",
        "hex": "#101516"
      },
      {
        "code": 21,
        "name": "Gold",
        "hex": "#f4c20d"
      }
    ]
  },
  {
    "id": "pants",
    "title": "Pants",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
    "image": "/images/products/pants-navy-lifestyle.webp",
    "images": [
      {
        "src": "/images/products/pants-navy-lifestyle.webp",
        "alt": "Pants",
        "caption": "Product view"
      },
      {
        "src": "/images/products/pants-navy-front.webp",
        "alt": "Front view of the navy drawstring pants",
        "caption": "Front view"
      },
      {
        "src": "/images/products/pants-navy-angle.webp",
        "alt": "Three-quarter view of the navy drawstring pants",
        "caption": "Three-quarter view"
      },
      {
        "src": "/images/products/pants-navy-back.webp",
        "alt": "Back view of the navy drawstring pants",
        "caption": "Back view"
      }
    ],
    "href": "/products/apparel/pants/",
    "prices": [
      "₹495"
    ],
    "price": "₹495",
    "priceNote": "",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      },
      {
        "code": 10,
        "name": "G Melange",
        "hex": "#a5a7a6"
      },
      {
        "code": 11,
        "name": "Black",
        "hex": "#101516"
      },
      {
        "code": 21,
        "name": "Gold",
        "hex": "#f4c20d"
      }
    ]
  },
  {
    "id": "jacket",
    "title": "Jacket",
    "category": "Apparel",
    "categorySlug": "apparel",
    "description": "A sleeveless utility-style jacket with a zip front and multiple pockets for teamwear, field use and branded requirements.",
    "image": "/images/products/jacket-olive.png",
    "images": [
      {
        "src": "/images/products/jacket-olive.png",
        "alt": "Jacket",
        "caption": "Product view"
      }
    ],
    "href": "/products/apparel/jacket/",
    "prices": [],
    "price": "Price on request",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "smart-caps",
    "title": "Smart Caps",
    "category": "Caps",
    "categorySlug": "caps",
    "description": "A practical branded cap for teams, events, promotions and everyday visibility.",
    "image": "/images/products/smart-cap-black-front.webp",
    "images": [
      {
        "src": "/images/products/smart-cap-black-front.webp",
        "alt": "Smart Caps",
        "caption": "Product view"
      },
      {
        "src": "/images/products/smart-caps.webp",
        "alt": "Front view of the burgundy smart cap",
        "caption": "Burgundy front view"
      },
      {
        "src": "/images/products/smart-caps-2.webp",
        "alt": "Side view of the burgundy smart cap",
        "caption": "Side view"
      }
    ],
    "href": "/products/caps/smart-caps/",
    "prices": [
      "₹65"
    ],
    "price": "₹65",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "flexible-caps",
    "title": "Flexible Caps",
    "category": "Caps",
    "categorySlug": "caps",
    "description": "A practical branded cap for teams, events, promotions and everyday visibility.",
    "image": "/images/products/flexible-cap-red-front.webp",
    "images": [
      {
        "src": "/images/products/flexible-cap-red-front.webp",
        "alt": "Flexible Caps",
        "caption": "Product view"
      },
      {
        "src": "/images/products/flexible-cap-royal-blue-front.webp",
        "alt": "Front view of the royal blue flexible cap",
        "caption": "Royal blue"
      },
      {
        "src": "/images/products/flexible-cap-sky-blue-front.webp",
        "alt": "Front view of the sky blue flexible cap",
        "caption": "Sky blue"
      },
      {
        "src": "/images/products/flexible-cap-navy-front.webp",
        "alt": "Front view of the navy flexible cap",
        "caption": "Navy"
      },
      {
        "src": "/images/products/flexible-cap-brown-front.webp",
        "alt": "Front view of the brown flexible cap",
        "caption": "Brown"
      },
      {
        "src": "/images/products/flexible-cap-beige-front.webp",
        "alt": "Front view of the beige flexible cap",
        "caption": "Beige"
      },
      {
        "src": "/images/products/flexible-caps.webp",
        "alt": "Front view of the yellow flexible cap",
        "caption": "Yellow"
      },
      {
        "src": "/images/products/flexible-caps-2.webp",
        "alt": "Alternate front view of the yellow flexible cap",
        "caption": "Yellow alternate view"
      }
    ],
    "href": "/products/caps/flexible-caps/",
    "prices": [
      "₹85"
    ],
    "price": "₹85",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "foldable-caps",
    "title": "Foldable Caps",
    "category": "Caps",
    "categorySlug": "caps",
    "description": "A practical branded cap for teams, events, promotions and everyday visibility.",
    "image": "/images/products/foldable-cap-navy-angle.webp",
    "images": [
      {
        "src": "/images/products/foldable-cap-navy-angle.webp",
        "alt": "Foldable Caps",
        "caption": "Product view"
      }
    ],
    "href": "/products/caps/foldable-caps/",
    "prices": [
      "₹250"
    ],
    "price": "₹250",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "button-fridge-magnet",
    "title": "Button Fridge Magnet",
    "category": "Fridge Magnets",
    "categorySlug": "fridge-magnets",
    "description": "A compact custom keepsake for events, destinations, campaigns and brand reminders.",
    "image": "/images/products/button-fridge-magnet.webp",
    "images": [
      {
        "src": "/images/products/button-fridge-magnet.webp",
        "alt": "Button Fridge Magnet",
        "caption": "Product view"
      }
    ],
    "href": "/products/fridge-magnets/button-fridge-magnet/",
    "prices": [
      "₹45"
    ],
    "price": "₹45",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "leather-magnet",
    "title": "Leather Magnet",
    "category": "Fridge Magnets",
    "categorySlug": "fridge-magnets",
    "description": "A leather-finish custom magnet with embossed artwork for souvenirs, events and branded keepsakes.",
    "image": "/images/products/leather-magnet.png",
    "images": [
      {
        "src": "/images/products/leather-magnet.png",
        "alt": "Leather Magnet",
        "caption": "Product view"
      }
    ],
    "href": "/products/fridge-magnets/leather-magnet/",
    "prices": [
      "₹60"
    ],
    "price": "₹60",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "acrylic-fridge-magnet",
    "title": "Acrylic Fridge Magnet",
    "category": "Fridge Magnets",
    "categorySlug": "fridge-magnets",
    "description": "A custom acrylic keepsake for destination souvenirs, events, campaigns and branded reminders.",
    "image": "/images/products/acrylic-fridge-magnet.webp",
    "images": [
      {
        "src": "/images/products/acrylic-fridge-magnet.webp",
        "alt": "Acrylic Fridge Magnet",
        "caption": "Product view"
      },
      {
        "src": "/images/products/acrylic-fridge-magnet-goa.webp",
        "alt": "Goa-themed custom acrylic fridge magnet held in a hand",
        "caption": "Finished acrylic magnet example"
      }
    ],
    "href": "/products/fridge-magnets/acrylic-fridge-magnet/",
    "prices": [
      "₹65"
    ],
    "price": "₹65",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "satin-keychain",
    "title": "Satin Keychain",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "A useful branded piece for gift sets, events, employee kits and everyday use.",
    "image": "/images/products/satin-keychain-lanyards.webp",
    "images": [
      {
        "src": "/images/products/satin-keychain-lanyards.webp",
        "alt": "Satin Keychain",
        "caption": "Product view"
      },
      {
        "src": "/images/products/satin-keychain-wristlets.webp",
        "alt": "Collection of printed satin wristlet keychains",
        "caption": "Wristlet styles"
      }
    ],
    "href": "/products/keychains-gifts/satin-keychain/",
    "prices": [
      "₹15"
    ],
    "price": "₹15",
    "priceNote": "",
    "moq": "500",
    "colours": []
  },
  {
    "id": "wooden-keychain",
    "title": "Wooden Keychain",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "Wood-finish keychains in multiple shapes for logos, names and custom branded gifting.",
    "image": "/images/products/wooden-keychain.png",
    "images": [
      {
        "src": "/images/products/wooden-keychain.png",
        "alt": "Wooden Keychain",
        "caption": "Product view"
      }
    ],
    "href": "/products/keychains-gifts/wooden-keychain/",
    "prices": [
      "₹55"
    ],
    "price": "₹55",
    "priceNote": "",
    "moq": "50",
    "colours": []
  },
  {
    "id": "leather-keychain",
    "title": "Leather Keychain",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "Leather-loop keychains in a selection of colours with a metal ring and snap detail for custom branding.",
    "image": "/images/products/leather-keychain.png",
    "images": [
      {
        "src": "/images/products/leather-keychain.png",
        "alt": "Leather Keychain",
        "caption": "Product view"
      }
    ],
    "href": "/products/keychains-gifts/leather-keychain/",
    "prices": [
      "₹55"
    ],
    "price": "₹55",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "button-keychain",
    "title": "Button Keychain",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "A round button keychain shown from the front and back, ready for a custom design or brand requirement.",
    "image": "/images/products/button-keychain.png",
    "images": [
      {
        "src": "/images/products/button-keychain.png",
        "alt": "Button Keychain",
        "caption": "Product view"
      }
    ],
    "href": "/products/keychains-gifts/button-keychain/",
    "prices": [
      "₹35"
    ],
    "price": "₹35",
    "priceNote": "",
    "moq": "50",
    "colours": []
  },
  {
    "id": "acrylic-keychain",
    "title": "Acrylic Keychain",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "Custom-shaped acrylic keychains that turn logos, symbols and artwork into practical branded keepsakes.",
    "image": "/images/products/acrylic-keychain.png",
    "images": [
      {
        "src": "/images/products/acrylic-keychain.png",
        "alt": "Acrylic Keychain",
        "caption": "Product view"
      }
    ],
    "href": "/products/keychains-gifts/acrylic-keychain/",
    "prices": [
      "₹45"
    ],
    "price": "₹45",
    "priceNote": "",
    "moq": "50",
    "colours": []
  },
  {
    "id": "mementoes",
    "title": "Mementoes",
    "category": "Keychains & Gifts",
    "categorySlug": "keychains-gifts",
    "description": "A useful branded piece for gift sets, events, employee kits and everyday use.",
    "image": "/images/products/mementoes-elephant-display.webp",
    "images": [
      {
        "src": "/images/products/mementoes-elephant-display.webp",
        "alt": "Mementoes",
        "caption": "Product view"
      }
    ],
    "href": "/products/keychains-gifts/mementoes/",
    "prices": [
      "₹899"
    ],
    "price": "₹899",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "mug",
    "title": "Mug",
    "category": "Drinkware",
    "categorySlug": "drinkware",
    "description": "Custom drinkware that puts your identity into an object people reach for every day.",
    "image": "/images/products/mug.webp",
    "images": [
      {
        "src": "/images/products/mug.webp",
        "alt": "Mug",
        "caption": "Product view"
      }
    ],
    "href": "/products/drinkware/mug/",
    "prices": [
      "₹160"
    ],
    "price": "₹160",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "uv-bottle-500ml",
    "title": "UV Bottle — 500 ml",
    "category": "Drinkware",
    "categorySlug": "drinkware",
    "description": "Custom drinkware that puts your identity into an object people reach for every day.",
    "image": "/images/products/uv-bottle-white-pair.png",
    "images": [
      {
        "src": "/images/products/uv-bottle-white-pair.png",
        "alt": "UV Bottle — 500 ml",
        "caption": "Product view"
      },
      {
        "src": "/images/products/corporate-gift-black-bottle.png",
        "alt": "Single black UV bottle with a stainless-steel cap and carry strap",
        "caption": "Black bottle"
      },
      {
        "src": "/images/products/bottle.png",
        "alt": "UV bottles displayed in a range of colours and sizes",
        "caption": "Colour and size options"
      }
    ],
    "href": "/products/drinkware/uv-bottle-500ml/",
    "prices": [
      "₹260"
    ],
    "price": "₹260",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "uv-bottle-750ml",
    "title": "UV Bottle — 750 ml",
    "category": "Drinkware",
    "categorySlug": "drinkware",
    "description": "Custom drinkware that puts your identity into an object people reach for every day.",
    "image": "/images/products/corporate-gift-black-bottle.png",
    "images": [
      {
        "src": "/images/products/corporate-gift-black-bottle.png",
        "alt": "UV Bottle — 750 ml",
        "caption": "Product view"
      },
      {
        "src": "/images/products/uv-bottle-white-pair.png",
        "alt": "Pair of white UV bottles with stainless-steel caps",
        "caption": "White bottle pair"
      },
      {
        "src": "/images/products/bottle.png",
        "alt": "UV bottles displayed in a range of colours and sizes",
        "caption": "Colour and size options"
      }
    ],
    "href": "/products/drinkware/uv-bottle-750ml/",
    "prices": [
      "₹280"
    ],
    "price": "₹280",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "uv-bottle-1-litre",
    "title": "UV Bottle — 1 Litre",
    "category": "Drinkware",
    "categorySlug": "drinkware",
    "description": "Custom drinkware that puts your identity into an object people reach for every day.",
    "image": "/images/products/bottle.png",
    "images": [
      {
        "src": "/images/products/bottle.png",
        "alt": "UV Bottle — 1 Litre",
        "caption": "Product view"
      },
      {
        "src": "/images/products/corporate-gift-black-bottle.png",
        "alt": "Single black UV bottle with a stainless-steel cap and carry strap",
        "caption": "Black bottle"
      },
      {
        "src": "/images/products/uv-bottle-white-pair.png",
        "alt": "Pair of white UV bottles with stainless-steel caps",
        "caption": "White bottle pair"
      }
    ],
    "href": "/products/drinkware/uv-bottle-1-litre/",
    "prices": [
      "₹320"
    ],
    "price": "₹320",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "diary",
    "title": "Diary",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A flexible branded format for events, packaging, team kits and promotions.",
    "image": "/images/products/diary.webp",
    "images": [
      {
        "src": "/images/products/diary.webp",
        "alt": "Diary",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/diary/",
    "prices": [
      "₹150"
    ],
    "price": "₹150",
    "priceNote": "",
    "moq": "10",
    "colours": []
  },
  {
    "id": "metal-pen",
    "title": "Custom Metal Pen",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A flexible branded format for events, packaging, team kits and promotions.",
    "image": "/images/products/metal-pen.webp",
    "images": [
      {
        "src": "/images/products/metal-pen.webp",
        "alt": "Custom Metal Pen",
        "caption": "Product view"
      },
      {
        "src": "/images/products/metal-pen-2.webp",
        "alt": "Black metal pen showing engraving positions and finish details",
        "caption": "Custom engraving preview"
      }
    ],
    "href": "/products/stationery/metal-pen/",
    "prices": [
      "₹65"
    ],
    "price": "₹65",
    "priceNote": "",
    "moq": "50",
    "colours": []
  },
  {
    "id": "uv-stickers",
    "title": "UV Stickers",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "Colourful UV stickers prepared in custom shapes for products, devices, packaging and promotional applications.",
    "image": "/images/products/uv-stickers-custom-colour.webp",
    "images": [
      {
        "src": "/images/products/uv-stickers-custom-colour.webp",
        "alt": "UV Stickers",
        "caption": "Product view"
      },
      {
        "src": "/images/products/uv-stickers-custom-black-red.webp",
        "alt": "Stacked black and red custom UV stickers",
        "caption": "Custom UV sticker finish"
      }
    ],
    "href": "/products/stationery/uv-stickers/",
    "prices": [
      "₹30"
    ],
    "price": "₹30",
    "priceNote": "",
    "priceDetail": "Client artwork also references approximately ₹4.25 per sq inch; confirm final specification.",
    "colours": []
  },
  {
    "id": "bookmark",
    "title": "Bookmark",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A compact printed format for reader-focused gifts, events and memorable brand reminders.",
    "image": "/images/products/bookmark-collection.png",
    "images": [
      {
        "src": "/images/products/bookmark-collection.png",
        "alt": "Bookmark",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/bookmark/",
    "prices": [
      "₹4.50"
    ],
    "price": "₹4.50",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "leather-wrist-band",
    "title": "Leather Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A leather wrist band with an adjustable snap fastening for gift, event and branded requirements.",
    "image": "/images/products/leather-wrist-band.png",
    "images": [
      {
        "src": "/images/products/leather-wrist-band.png",
        "alt": "Leather Wrist Band",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/leather-wrist-band/",
    "prices": [
      "₹40"
    ],
    "price": "₹40",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "paper-wrist-band",
    "title": "Paper Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A lightweight paper wrist band shown in red, orange and yellow for event and identification requirements.",
    "image": "/images/products/paper-wrist-band.png",
    "images": [
      {
        "src": "/images/products/paper-wrist-band.png",
        "alt": "Paper Wrist Band",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/paper-wrist-band/",
    "prices": [
      "₹5.50"
    ],
    "price": "₹5.50",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "fabric-wrist-band",
    "title": "Fabric Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A fabric wrist band with an adjustable slider, shown in multiple colours for event and campaign requirements.",
    "image": "/images/products/fabric-wrist-band.png",
    "images": [
      {
        "src": "/images/products/fabric-wrist-band.png",
        "alt": "Fabric Wrist Band",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/fabric-wrist-band/",
    "prices": [
      "₹8.50"
    ],
    "price": "₹8.50",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "button-badge",
    "title": "Button Badge",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A flexible branded format for events, packaging, team kits and promotions.",
    "image": "/images/products/button-badge.webp",
    "images": [
      {
        "src": "/images/products/button-badge.webp",
        "alt": "Button Badge",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/button-badge/",
    "prices": [
      "₹20",
      "₹25"
    ],
    "price": "₹20 · ₹25",
    "priceNote": "Exact option confirmed with your requirement.",
    "priceDetail": "₹20 — MOQ 100 · ₹25 — MOQ 50. Option details to be confirmed.",
    "colours": []
  },
  {
    "id": "sticker-a5-custom-cut",
    "title": "Custom-Cut Stickers — A5",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "Custom-cut stickers prepared on an A5 format for product labels, packaging, gifts and branded applications.",
    "image": "/images/products/custom-cut-stickers.png",
    "images": [
      {
        "src": "/images/products/custom-cut-stickers.png",
        "alt": "Custom-Cut Stickers — A5",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/sticker-a5-custom-cut/",
    "prices": [
      "₹40"
    ],
    "price": "₹40",
    "priceNote": "",
    "moq": "100",
    "colours": []
  },
  {
    "id": "lanyard-tag",
    "title": "Laneyard Tag",
    "category": "Stickers, Badges & Stationery",
    "categorySlug": "stationery",
    "description": "A custom printed laneyard option with a metal clip, shown in black, blue, red and yellow for branded identification requirements.",
    "image": "/images/products/lanyard-tag.png",
    "images": [
      {
        "src": "/images/products/lanyard-tag.png",
        "alt": "Laneyard Tag",
        "caption": "Product view"
      }
    ],
    "href": "/products/stationery/lanyard-tag/",
    "prices": [
      "₹35"
    ],
    "price": "₹35",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "miss-india-sachet",
    "title": "Miss India Sachet",
    "category": "Sachets & Sashes",
    "categorySlug": "sachets",
    "description": "A custom pageant or event sachet that can be prepared in a selection of colours and finishes.",
    "image": "/images/products/miss-india-sachet.webp",
    "images": [
      {
        "src": "/images/products/miss-india-sachet.webp",
        "alt": "Miss India Sachet",
        "caption": "Product view"
      },
      {
        "src": "/images/products/miss-india-sachet-2.webp",
        "alt": "White, red and gold sachets displayed on black dress forms",
        "caption": "White, red and gold options"
      },
      {
        "src": "/images/products/miss-india-sachet-3.webp",
        "alt": "White, blue and gold sachets displayed on black dress forms",
        "caption": "White, blue and gold options"
      }
    ],
    "href": "/products/sachets/miss-india-sachet/",
    "prices": [
      "₹160"
    ],
    "price": "₹160",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "tote-bag",
    "title": "Tote Bag",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "A reusable carry piece that gives your identity useful, everyday visibility.",
    "image": "/images/products/tote-bag.webp",
    "images": [
      {
        "src": "/images/products/tote-bag.webp",
        "alt": "Tote Bag",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/tote-bag/",
    "prices": [
      "₹12.50",
      "₹16.50",
      "₹55",
      "₹75",
      "₹125",
      "₹170"
    ],
    "price": "₹12.50 · ₹16.50 · ₹55 · ₹75 · ₹125 · ₹170",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": [
      {
        "code": 1,
        "name": "Navy",
        "hex": "#07101f"
      },
      {
        "code": 2,
        "name": "White",
        "hex": "#f8f5f2"
      }
    ]
  },
  {
    "id": "jute-bag",
    "title": "Jute Bag",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "A structured jute carry bag with twin handles and a broad front area for branded requirements.",
    "image": "/images/products/jute-bag-structured.png",
    "images": [
      {
        "src": "/images/products/jute-bag-structured.png",
        "alt": "Jute Bag",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/jute-bag/",
    "prices": [
      "₹60",
      "₹90",
      "₹110",
      "₹160"
    ],
    "price": "₹60 · ₹90 · ₹110 · ₹160",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": []
  },
  {
    "id": "jute-pouch",
    "title": "Jute Pouches",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "Drawstring jute pouches shown in multiple colours for gifting, packaging and branded presentation.",
    "image": "/images/products/jute-pouches-colours.png",
    "images": [
      {
        "src": "/images/products/jute-pouches-colours.png",
        "alt": "Jute Pouches",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/jute-pouch/",
    "prices": [
      "₹8.50",
      "₹12.50",
      "₹14.50"
    ],
    "price": "₹8.50 · ₹12.50 · ₹14.50",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": []
  },
  {
    "id": "backpack",
    "title": "Backpack",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "A reusable carry piece that gives your identity useful, everyday visibility.",
    "image": "/images/products/backpack.webp",
    "images": [
      {
        "src": "/images/products/backpack.webp",
        "alt": "Backpack",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/backpack/",
    "prices": [
      "₹430"
    ],
    "price": "₹430",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "laptop-bag",
    "title": "Laptop Bag",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "A structured black laptop backpack with padded shoulder straps, multiple zipped compartments and a broad front area for branded requirements.",
    "image": "/images/products/laptop-bag-black.png",
    "images": [
      {
        "src": "/images/products/laptop-bag-black.png",
        "alt": "Laptop Bag",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/laptop-bag/",
    "prices": [
      "₹999"
    ],
    "price": "₹999",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "trolley",
    "title": "Trolley",
    "category": "Bags & Accessories",
    "categorySlug": "bags-accessories",
    "description": "A compact hard-shell trolley with a telescopic handle and four-wheel base for travel and gifting requirements.",
    "image": "/images/products/trolley.png",
    "images": [
      {
        "src": "/images/products/trolley.png",
        "alt": "Trolley",
        "caption": "Product view"
      }
    ],
    "href": "/products/bags-accessories/trolley/",
    "prices": [
      "₹3500"
    ],
    "price": "₹3500",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "custom-flags",
    "title": "Custom Flags",
    "category": "Other Products",
    "categorySlug": "other-products",
    "description": "A custom printed flag format for events, teams, institutions and branded display requirements.",
    "image": "/images/products/custom-flags-new.png",
    "images": [
      {
        "src": "/images/products/custom-flags-new.png",
        "alt": "Custom Flags",
        "caption": "Product view"
      }
    ],
    "href": "/products/other-products/custom-flags/",
    "prices": [
      "₹60",
      "₹400",
      "₹600"
    ],
    "price": "₹60 · ₹400 · ₹600",
    "priceNote": "Exact option confirmed with your requirement.",
    "colours": []
  },
  {
    "id": "umbrella",
    "title": "Umbrella",
    "category": "Other Products",
    "categorySlug": "other-products",
    "description": "A full-size black umbrella for practical gifting, event and branded merchandise requirements.",
    "image": "/images/products/umbrella-black.png",
    "images": [
      {
        "src": "/images/products/umbrella-black.png",
        "alt": "Umbrella",
        "caption": "Product view"
      }
    ],
    "href": "/products/other-products/umbrella/",
    "prices": [
      "₹600"
    ],
    "price": "₹600",
    "priceNote": "",
    "colours": []
  },
  {
    "id": "mysuru-shalya",
    "title": "Mysuru Shalya",
    "category": "Other Products",
    "categorySlug": "other-products",
    "description": "A ceremonial Mysuru shalya with an ornate woven border and tassel finish, available in a selection of traditional colourways.",
    "image": "/images/products/mysuru-shalya.png",
    "images": [
      {
        "src": "/images/products/mysuru-shalya.png",
        "alt": "Mysuru Shalya",
        "caption": "Product view"
      }
    ],
    "href": "/products/other-products/mysuru-shalya/",
    "prices": [
      "₹110"
    ],
    "price": "₹110",
    "priceNote": "",
    "colours": []
  }
];

export const PRODUCT_CATEGORIES: Category[] = [
  {
    "slug": "apparel",
    "name": "Apparel",
    "shortLabel": "Apparel",
    "description": "T-shirts, sweatshirts, hoodies and everyday teamwear ready for your identity.",
    "ctaNoun": "apparel"
  },
  {
    "slug": "caps",
    "name": "Caps",
    "shortLabel": "Caps",
    "description": "Smart, flexible and foldable caps for teams, events and campaigns.",
    "ctaNoun": "caps"
  },
  {
    "slug": "fridge-magnets",
    "name": "Fridge Magnets",
    "shortLabel": "Magnets",
    "description": "Small-format branded keepsakes that stay visible long after the moment.",
    "ctaNoun": "magnets"
  },
  {
    "slug": "keychains-gifts",
    "name": "Keychains & Gifts",
    "shortLabel": "Keychains & Gifts",
    "description": "Useful desk and pocket pieces, from custom keychains to recognition mementoes.",
    "ctaNoun": "keychains & gifts"
  },
  {
    "slug": "drinkware",
    "name": "Drinkware",
    "shortLabel": "Drinkware",
    "description": "Mugs and UV bottles made for daily routines and visible brand recall.",
    "ctaNoun": "drinkware"
  },
  {
    "slug": "stationery",
    "name": "Stickers, Badges & Stationery",
    "shortLabel": "Stationery",
    "description": "Custom diaries, pens, stickers and branded desk essentials for teams, events and gifting.",
    "ctaNoun": "stationery"
  },
  {
    "slug": "sachets",
    "name": "Sachets & Sashes",
    "shortLabel": "Sachets",
    "description": "Custom pageant and event sachets available in a selection of colours and finishes.",
    "ctaNoun": "sachets"
  },
  {
    "slug": "bags-accessories",
    "name": "Bags & Accessories",
    "shortLabel": "Bags",
    "description": "Totes, jute bags, pouches, backpacks and carry pieces designed to travel.",
    "ctaNoun": "bags"
  },
  {
    "slug": "other-products",
    "name": "Other Products",
    "shortLabel": "Other",
    "description": "Flags, umbrellas and custom formats for the brief beyond the usual.",
    "ctaNoun": "other"
  }
];

export const CATEGORIES = ['All Products', ...PRODUCT_CATEGORIES.map((c) => c.name)];

export const FEATURED_PRODUCT_IDS = [
  'round-neck-tshirt',
  'collar-tshirt',
  'hoodies',
  'acrylic-keychain',
  'mug',
  'uv-bottle-750ml',
  'diary',
  'tote-bag',
  'custom-flags',
];

export const GIFT_PAIRING_PRODUCT_IDS = [
  'acrylic-keychain',
  'mug',
  'uv-bottle-750ml',
  'diary',
  'metal-pen',
  'tote-bag',
  'backpack',
];

export const PRODUCT_HIGHLIGHTS = [
  'Suitable for custom brand or event requirements',
  'Confirm the required variant and branding on WhatsApp',
  'Final pricing depends on product specification and customization',
];

export const QUOTATION_NOTE =
  'Prices and minimum quantities may vary depending on product specification, customization and order requirement. Contact Wild Collective for the final quotation.';

export const MARQUEE_ITEMS = [
  'Custom apparel',
  'Corporate gifts',
  'Merchandise',
  'Custom printing',
  'Bulk orders',
  'Branded products',
];

export const PROCESS_STEPS = [
  { title: 'Choose your product', description: 'Browse apparel, gifts, drinkware, bags and branded merchandise.' },
  { title: 'Share your requirement', description: 'Tell us the quantity, branding requirement and customization details.' },
  { title: 'Get your quote', description: 'Wild Collective confirms pricing and order details directly through WhatsApp.' },
  { title: 'Confirm your order', description: 'Continue the final order discussion with the Wild Collective team.' },
];

export const GOLF_PATTERNS = [
  { id: 'geometric-teal', name: 'Geometric Teal', image: '/images/golf/geometric-teal.jpg' },
  { id: 'leaf-mint', name: 'Leaf Mint', image: '/images/golf/leaf-mint.jpg' },
  { id: 'linear-white', name: 'Linear White', image: '/images/golf/linear-white.jpg' },
  { id: 'aqua-chevron', name: 'Aqua Chevron', image: '/images/golf/aqua-chevron.jpg' },
  { id: 'mosaic-red', name: 'Mosaic Red', image: '/images/golf/mosaic-red.jpg' },
  { id: 'cobalt-chevron', name: 'Cobalt Chevron', image: '/images/golf/cobalt-chevron.jpg' },
  { id: 'botanical-yellow', name: 'Botanical Yellow', image: '/images/golf/botanical-yellow.jpg' },
];

export const GIFT_SETS = [
  { title: 'Cork-accent desk set', image: '/images/corporate-gifts/cork-diary-tumbler-set.png', alt: 'Black diary, pen and tumbler presented in a gift box with cork accents' },
  { title: 'Six-piece executive set', image: '/images/corporate-gifts/executive-six-piece-set.png', alt: 'Black corporate gift set with notebook, mug, pen, bottle, mobile stand and keychain' },
  { title: 'Classic diary set', image: '/images/corporate-gifts/diary-pen-bottle-set.png', alt: 'Black presentation box containing a diary, pen and bottle' },
  { title: 'Team appreciation set', image: '/images/corporate-gifts/team-appreciation-set.png', alt: 'Premium corporate gift box with T-shirt, bottle, mug, keychain, pen and diary' },
  { title: 'Natural-finish gift set', image: '/images/corporate-gifts/natural-finish-set.png', alt: 'Corporate gift box with natural-finish notebook, pen, keychain, card holder, cup and bottle' },
];

export const GIFT_OPTIONS = ['UV Bottle', 'Diary', 'Metal Pen', 'Mug', 'Tote Bag', 'Keychain', 'Backpack', 'Premium Cap'];

export const ABOUT_SERVICES = [
  { id: 'custom-tshirts', title: 'Custom T-Shirts', description: 'T-shirts shaped around your artwork, purpose, audience and quantity.', context: 'Brands, groups and individual requirements' },
  { id: 'polo-tshirts', title: 'Polo T-Shirts', description: 'Collared apparel for teams, staff, institutions and polished brand presentation.', context: 'Teams, staff and organizations' },
  { id: 'corporate', title: 'Corporate & Promotional', description: 'Branded apparel for business teams, campaigns, promotions and activations.', context: 'Business and promotional requirements' },
  { id: 'institutional', title: 'School & Institutional', description: 'Coordinated apparel requirements for schools, colleges and institutions.', context: 'Schools, colleges and institutions' },
  { id: 'sports', title: 'Sports T-Shirts', description: 'Team apparel prepared around comfort, identity, fit and required quantity.', context: 'Sports groups and active teams' },
  { id: 'events', title: 'Event & Team T-Shirts', description: 'Unifying apparel for events, communities, groups and special occasions.', context: 'Events, communities and teams' },
  { id: 'hoodies', title: 'Hoodies & Sweatshirts', description: 'Warm layers for teams, institutions, merchandise and branded everyday use.', context: 'Teams, institutions and merchandise' },
  { id: 'caps', title: 'Custom Caps', description: 'Branded caps suited to uniforms, promotions, teams and events.', context: 'Uniforms, promotions and events' },
  { id: 'finishes', title: 'Printed & Embroidered', description: 'Decoration options selected around the fabric, artwork and desired finish.', context: 'Print and embroidery requirements' },
  { id: 'bulk', title: 'Bulk & Customized Orders', description: 'Coordinated garment orders prepared to your required specifications and quantity.', context: 'Small custom runs and bulk orders' },
];

export const COMPANY_INFO = {
  "name": "Wild Collective",
  "legalName": "RIVER TERN CORPORATION",
  "tagline": "Your Brand. Made Wearable.",
  "subTagline": "Custom Printing \u00b7 Merchandise \u00b7 Corporate Gifts",
  "address": "NO.19, 2ND MAIN ROAD, 15TH CROSS, 3RD STAGE, GOKULAM, MYSURU, Mysuru (Mysore), Karnataka, 570002",
  "phone": "+91 99454 21777",
  "phoneRaw": "+919945421777",
  "whatsapp": "+91 99454 21777",
  "whatsappRaw": "919945421777",
  "emails": [
    "contact@wildcollective.store",
    "shop@wildcollective.store"
  ],
  "gstin": "29COWPM7795E2ZT",
  "instagram": "https://www.instagram.com/wildcollective.store/",
  "website": "https://wildcollective.store/",
  "priceSource": "Wild Collective"
};

const waLink = (text: string) =>
  `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;

export const whatsappDiscuss = (topic = 'a custom merchandise requirement') =>
  waLink(`Hi Wild Collective,\n\nI'd like to discuss ${topic}.\n\nName:\nCompany:\nQuantity:\nCustomization requirement:\nAdditional notes:\n\nPlease share the quotation and order details.`);

export const whatsappProduct = (p: Product) =>
  waLink(
    `Hi Wild Collective,\n\nI'm interested in the ${p.title}.\n\nCategory: ${p.categorySlug.replace(/-/g, ' ')}\nAvailable price options: ${p.prices.length ? p.prices.join(' / ') : 'Price on request'}\n${p.moq ? `MOQ: ${p.moq}\n` : ''}Quantity: \nPreferred price/variant: \nCustomization requirement:\nAdditional requirement: \n\nPlease share the quotation and order details.`
  );

export const whatsappQuote = (e: { product: string; quantity: string; name: string; company?: string; requirement: string; notes?: string }) =>
  waLink(
    `Hi Wild Collective,\n\nI'd like a quotation.\n\nProduct: ${e.product}\nQuantity: ${e.quantity}\nName: ${e.name}\nCompany: ${e.company || '—'}\nCustomization requirement: ${e.requirement}\nAdditional notes: ${e.notes || '—'}\n\nPlease share the quotation and order details.`
  );

export const whatsappGiftSet = (items: string[]) =>
  waLink(
    `Hi Wild Collective,\n\nI'd like to plan a corporate gift set with:\n${items.map((i) => `• ${i}`).join('\n')}\n\nQuantity:\nBranding requirement:\nBudget or preference:\nAdditional notes:\n\nPlease share a quotation and the available options.`
  );

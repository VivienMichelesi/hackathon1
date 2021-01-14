import slug from "slug";

const rawProducts = [
  {
    id: 1,
    name: "Le fauteuil-toilettes",
    price: 109.95,
    description:
      "Le fauteuil-toilettes, pour en finir avec les commissions pendant les sessions gaming. ",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/top-14-gadgets-indispensables.jpg",
  },
  {
    id: 2,
    name: "L'oreiller ultime",
    price: 22.3,
    description:
      "L'oreiller-Autruche, pour dormir en paix dans n'importe quelle condition.",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-7.jpg",
  },
  {
    id: 3,
    name: "mini-frigo USB",
    price: 24.99,
    description:
      "Un mini-frigo USB, pour garder ses boissons fraîches près de l'ordinateur",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/top-14-gadgets-indispensables4.jpg",
  },
  {
    id: 4,
    name: "casque à boisson",
    price: 15.99,
    description:
      "Un casque à bière, même si on peut y mettre n'importe quelle boisson. Pratique en toutes circonstances.",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/top-14-gadgets-indispensables6.jpg",
  },
  {
    id: 5,
    name: "aspirateur USB",
    price: 6.99,
    description: "Un aspirateur USB, pour nettoyer son bureau ou son clavier.",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/top-14-gadgets-indispensables8.jpg",
  },
  {
    id: 6,
    name: "tasse isotherme et auto-touillante",
    price: 15.99,
    description:
      "Une tasse isotherme et auto-touillante, parce que utiliser une cuillère c'est vraiment trop crevant (et ça date d'un autre siècle).",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/top-14-gadgets-indispensables10.png",
  },
  {
    id: 7,
    name: "Transport PC",
    price: 9.99,
    description:
      "Transporter sont PC presque aussi facilement que sont ordinateur portable",
    category: "gadget",
    image:
      "https://i.pinimg.com/originals/ea/3b/57/ea3b57e6bdfa6adb5d4f57e3ff35f0ab.jpg",
  },
  {
    id: 8,
    name: "Chauffe pieds USB",
    price: 24.9,
    description:
      "Ce chauffe-pieds Usb permet de garder les pieds au chaud pendant les longues journées d'hiver passées devant l'ordinateur...",
    category: "gadget",
    image:
      "https://www.rapid-cadeau.com/3115-large_default/chauffe-pieds-usb.jpg",
  },
  {
    id: 9,
    name: "punching ball",
    price: 7.99,
    description:
      "Le punching ball de proximité, pour éviter de se défouler sur son PC",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-14.jpg",
  },
  {
    id: 10,
    name: "combiné pour téléphone portable",
    price: 4.99,
    description: "un combiné pour téléphone portable",
    category: "gadget",
    image:
      "http://static.hitek.fr/img/actualite/combine-pour-telephone-portable.jpg",
  },
  {
    id: 11,
    name: "boule de lumière USB",
    price: 11.89,
    description: "Une boule de lumière USB",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/w_boule-plasma-usb.jpg",
  },
  {
    id: 12,
    name: "hamac pour les pieds ",
    price: 3.89,
    description: "Un hamac pour les pieds",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-9.jpg",
  },
  {
    id: 13,
    name: "chauffe mains",
    price: 9.99,
    description: "Les chauffe mains en forme de tartines",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-17.jpg",
  },
  {
    id: 14,
    name: "bouton d'arrêt d'urgence",
    price: 3.55,
    description:
      "Le bouton d'arrêt d'urgence pour ordinateur (pour éteindre votre écran si quelqu'un arrive...)",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-20.jpg",
  },
  {
    id: 15,
    name: "chemise climatisée",
    price: 56.99,
    description: "Une chemise climatisée",
    category: "gadget",
    image: "http://static.hitek.fr/img/actualite/next-level-office-21.jpg",
  },
  {
    id: 16,
    name: "clé USB Transformers",
    price: 29.95,
    description: "Cette clé USB Transformers avec une capacité de 2 Gb",
    category: "gadget",
    image:
      "https://lecomptoirdetitam.files.wordpress.com/2009/05/transformers-usb-awesomeness.jpg",
  },
  {
    id: 17,
    name: "stickers Gameboy pour son frigo",
    price: 39.99,
    description:
      "Avec seulement trois stickers à coller sur son frigo tristounet, voilà que vous le transformez en une console Game Boy grandeur nature !",
    category: "gadget",
    image:
      "https://laliste.net/wp-content/uploads/2018/04/20-gadgets-geek-pour-la-cuisine7.png",
  },
  {
    id: 18,
    name: "gaufrier en forme de clavier",
    price: 29.85,
    description:
      "Un gaufrier en forme de clavier. Délectez-vous de vos touches ?",
    category: "gadget",
    image: "https://laliste.net/wp-content/uploads/2018/04/koreus.jpg",
  },
  {
    id: 19,
    name: "grille-pain Dark Vador",
    price: 37.95,
    description: "Un grille-pain Dark Vador. Pour un petit déjeuner cosmique.",
    category: "gadget",
    image:
      "https://laliste.net/wp-content/uploads/2018/04/star-wars-amazon.jpg",
  },
  {
    id: 20,
    name: "décapsuleur Minecraft",
    price: 12.99,
    description:
      "Un décapsuleur Minecraft, buvez vos bières comme un geek (qui se respecte) !",
    category: "gadget",
    image:
      "https://laliste.net/wp-content/uploads/2018/04/minecrft-decapsuleur-2.jpg",
  },
  {
    id: 21,
    name: "Inap@work : pour dormir au bureau sans se faire attraper ",
    price: 0,
    description:
      "On en a tous rêvé : pouvoir s'assoupir quelques minutes au travail sans que votre boss ne remarque quoi que ce soit. Avec Inap@work, c'est désormais possible. Cette application simule tous les sons d'un travailleur en pleine activité : les doigts qui tapent sur le clavier, les clics de souris, les feuilles froissées, l'agrafeuse... Il est même possible de programmer une alarme pour se réveiller. Application gratuite uniquement disponible sur l'App Store. ",
    category: "application mobile",
    image:
      "https://www.anthedesign.fr/w2015/wp-content/uploads/2016/07/06.-inap@work.jpg.webp",
  },
  {
    id: 22,
    name: "Fake-A-Call Android iOS",
    price: 0,
    description:
      "Imaginez-vous que quelqu'un vous dérange, et vous passez votre temps à regarder l’heure. Lancez l’application Fake-A-Call. Allez à la configuration rapide et programmez un appel de la part de « Maman » dans cinq minutes. Quand le portable se mettra à sonner, vous n’aurez qu’à décrocher et dire « Désolé, mais ça risque d'être long. » N’oubliez pas la grimace de regret sur le visage, et vous êtes sauvé. Disponible gratuitement sur iPhone et Android, Fake-à-Call a été téléchargée des millions de fois.",
    category: "application mobile",
    image:
      "https://www.anthedesign.fr/w2015/wp-content/uploads/2016/07/01.-fake-a-call.jpeg",
  },
  {
    id: 23,
    name: "Watching Cute Girl iOS",
    price: 0,
    description:
      "Voici une bonne application pour les solitaires. Une jeune fille japonaise vous regardera depuis l’écran de votre smartphone. Elle vous dira de temps en temps quelque chose d’agréable à entendre, vous proposera de vous faire un câlin virtuel et… se vexera si vous la touchez.",
    category: "application mobile",
    image:
      "https://www.anthedesign.fr/w2015/wp-content/uploads/2016/07/04.-watching-cute-girl-2.jpg",
  },
  {
    id: 24,
    name: "Crack Your Screen Prank Android",
    price: 0,
    description:
      "Avec cette application gratuite, l’écran de votre smartphone paraitra fissuré ou rayé, et vous pourrez utiliser une autre application en même temps. Avec l’option « fissure en différé » qui ne fait craquer l’écran qu’après un certain temps d’utilisation du smartphone, Crack Your Screen Prank vous permettra également de faire des blagues à vos proches.",
    category: "application mobile",
    image:
      "https://www.anthedesign.fr/w2015/wp-content/uploads/2016/07/09.-crack-your-screen-prank-1.png",
  },
];

const products = rawProducts.map((product) => {
  product.slug = slug(product.name);
  return product;
});

const productsBySlug = products.reduce((obj, product) => {
  obj[product.slug] = product;
  return obj;
}, {});

const productsByCategories = products.reduce((obj, product) => {
  (obj[product.category] ?? (obj[product.category] = [])).push(product);
  return obj;
}, {});

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return productsBySlug[slug];
}

export function getAllCategories() {
  const categories = new Set(products.map((p) => p.category));
  return [...categories].sort();
}

export function getProductsByCategory(category) {
  return productsByCategories[category];
}

export function searchProducts({ query, category, level, sort }) {
  let products = getAllProducts();

  if (category != null && category.length > 0) {
    products = products.filter((p) => p.category === category);
  }

  if (query != null && query.length > 0) {
    const lowerQuery = query.toLowerCase();
    products = products.filter((p) =>
      p.name.toLowerCase().includes(lowerQuery)
    );
  }

  if (sort != null && sort.length > 0) {
    const [property, direction] = sort.split("-");

    if (direction === "asc") {
      products = products.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    } else {
      products = products.sort((a, b) => (a[property] < b[property] ? 1 : -1));
    }
  }

  return products;
}

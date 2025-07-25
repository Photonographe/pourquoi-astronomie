import { getCollection } from 'astro:content';

export interface Question {
  id: string;
  question: string;
  reponse: string;
  source: string;
  funFact?: string;
  tags: string[];
  difficulty: 'facile' | 'moyen' | 'difficile';
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'terre-lune',
    name: 'La Terre et la Lune',
    icon: '🌍',
    description: 'Découvre tout sur notre planète bleue et son fidèle compagnon lunaire',
    color: '#4ecdc4'
  },
  {
    id: 'soleil-etoiles',
    name: 'Le Soleil et les étoiles',
    icon: '☀️',
    description: 'Apprends pourquoi le soleil brille et comment naissent les étoiles',
    color: '#ffd700'
  },
  {
    id: 'planetes',
    name: 'Les planètes',
    icon: '🪐',
    description: 'Voyage à travers notre système solaire et ses 8 planètes',
    color: '#ff6b6b'
  },
  {
    id: 'exploration-spatiale',
    name: "L'exploration spatiale",
    icon: '🚀',
    description: 'Découvre les fusées, les astronautes et les missions spatiales',
    color: '#667eea'
  },
  {
    id: 'univers-galaxies',
    name: "L'univers et les galaxies",
    icon: '🌌',
    description: "Explore l'immensité de l'univers et ses milliards de galaxies",
    color: '#764ba2'
  },
  {
    id: 'astronautes',
    name: 'Les astronautes',
    icon: '👨‍🚀',
    description: 'Apprends la vie des astronautes dans l\'espace',
    color: '#f093fb'
  }
];

// Fonction pour récupérer toutes les questions depuis le CMS
export async function getAllQuestions(): Promise<Question[]> {
  try {
    const questions = await getCollection('questions');
    const cmsQuestions = questions.map(entry => ({
      id: entry.slug,
      question: entry.data.question,
      reponse: entry.body,
      source: entry.data.source,
      funFact: entry.data.funFact,
      tags: entry.data.tags || [],
      difficulty: entry.data.difficulty,
      category: entry.data.category
    }));
    
    // Si pas de questions CMS, utiliser les questions par défaut
    if (cmsQuestions.length === 0) {
      return getDefaultQuestions();
    }
    
    return cmsQuestions;
  } catch (error) {
    console.log('CMS pas encore configuré, utilisation du contenu par défaut');
    return getDefaultQuestions();
  }
}

// Fonction pour récupérer les questions par catégorie
export async function getQuestionsByCategory(categoryId: string): Promise<Question[]> {
  const allQuestions = await getAllQuestions();
  return allQuestions.filter(q => q.category === categoryId);
}

// Fonction de recherche
export async function searchQuestions(query: string): Promise<Question[]> {
  const allQuestions = await getAllQuestions();
  const searchTerm = query.toLowerCase();
  
  return allQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm) ||
    q.reponse.toLowerCase().includes(searchTerm) ||
    q.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Questions par défaut (fallback)
function getDefaultQuestions(): Question[] {
  return [
    {
      id: 'terre-ronde',
      question: 'Pourquoi la Terre est-elle ronde ?',
      reponse: "La Terre est ronde parce que la gravitation l'oblige à se mettre en boule. La gravitation, c'est la force qui nous maintient sur la Terre : elle nous fait retomber quand on saute, et de la même manière, elle empêche les montagnes de monter trop haut. Imagine que tu prennes une boule de pâte à modeler : si tu la fais tourner très vite, elle devient naturellement ronde ! C'est exactement ce qui s'est passé quand la Terre s'est formée il y a 4,6 milliards d'années.",
      source: 'Université de Genève - Département d\'Astronomie',
      funFact: 'Les montagnes peuvent être plus hautes sur les planètes plus petites ! Par exemple, le Mont Olympe sur Mars monte trois fois plus haut que l\'Everest.',
      tags: ['terre', 'gravité', 'forme', 'planète'],
      difficulty: 'facile',
      category: 'terre-lune'
    },
    {
      id: 'lune-phases',
      question: 'Pourquoi la Lune change-t-elle de forme ?',
      reponse: "La Lune ne change pas vraiment de forme ! Elle reste toujours une grosse boule ronde. Ce qui change, c'est la partie éclairée par le Soleil que nous pouvons voir depuis la Terre. Quand la Lune tourne autour de notre planète, nous voyons parfois tout son côté éclairé (pleine lune) et parfois juste un petit croissant. C'est un peu comme si tu éclairais une balle avec une lampe de poche dans le noir : selon ta position, tu vois différentes parties lumineuses !",
      source: 'NASA Space Place',
      funFact: 'Il faut environ 29 jours pour que la Lune fasse un tour complet de ses phases.',
      tags: ['lune', 'phases', 'soleil', 'éclairage'],
      difficulty: 'facile',
      category: 'terre-lune'
    },
    {
      id: 'soleil-brille',
      question: 'Pourquoi le Soleil brille-t-il ?',
      reponse: "Au centre du Soleil, il fait si chaud (15 millions de degrés !) que les atomes d'hydrogène se collent ensemble pour former de l'hélium. Cette réaction s'appelle la fusion nucléaire et elle produit une énorme quantité d'énergie qui nous arrive sous forme de lumière et de chaleur ! C'est comme si le Soleil était une gigantesque centrale électrique qui fonctionne en permanence depuis 4,6 milliards d'années.",
      source: 'CNES et Astropolis',
      funFact: 'Le Soleil seul représente 99,9% de la masse totale du système solaire.',
      tags: ['soleil', 'fusion', 'énergie', 'chaleur'],
      difficulty: 'moyen',
      category: 'soleil-etoiles'
    },
    {
      id: 'nombre-etoiles',
      question: "Combien y a-t-il d'étoiles dans l'univers ?",
      reponse: "Il y a autant d'étoiles dans le ciel que de grains de sable sur toutes les plages de la planète réunies ! Les scientifiques estiment qu'il y en a environ 200 milliards de milliards ! C'est un nombre si grand qu'on ne peut même pas l'imaginer. Pour te donner une idée : si tu comptais une étoile par seconde, il te faudrait plus de temps que l'âge de l'univers pour toutes les compter !",
      source: 'NASA (ingénieur Ted Garbeff)',
      funFact: 'Rien que dans notre galaxie, la Voie Lactée, il y a entre 100 et 400 milliards d\'étoiles.',
      tags: ['étoiles', 'nombre', 'galaxie', 'univers'],
      difficulty: 'facile',
      category: 'soleil-etoiles'
    },
    {
      id: 'planete-chaude',
      question: 'Quelle est la planète la plus chaude ?',
      reponse: "C'est Vénus ! Même si Mercure est plus proche du soleil, Vénus est la plus chaude avec une température de 470°C. Son atmosphère très dense est composée presque intégralement de dioxyde de carbone (CO2). L'effet de serre y maintient des températures suffisantes pour faire fondre le zinc. C'est comme si Vénus portait une couverture géante qui retient toute la chaleur !",
      source: 'Muséum national d\'Histoire naturelle',
      funFact: 'Sur Vénus, il fait si chaud qu\'on pourrait faire fondre du plomb !',
      tags: ['vénus', 'température', 'effet de serre', 'planète'],
      difficulty: 'facile',
      category: 'planetes'
    },
    {
      id: 'fusees-decollent',
      question: 'Comment les fusées décollent-elles ?',
      reponse: 'Les fusées utilisent le principe d\'action-réaction. Elles brûlent du carburant qui produit des gaz très chauds. Ces gaz sont expulsés vers le bas à très haute vitesse, ce qui pousse la fusée vers le haut ! C\'est comme quand tu gonfles un ballon et que tu le lâches : l\'air qui sort d\'un côté pousse le ballon de l\'autre côté. Les fusées ont besoin de beaucoup de puissance pour échapper à la gravité terrestre !',
      source: 'Principes de physique spatiale',
      funFact: 'Une fusée doit atteindre au moins 11 km/seconde pour quitter la Terre définitivement.',
      tags: ['fusée', 'décollage', 'réaction', 'gravité'],
      difficulty: 'moyen',
      category: 'exploration-spatiale'
    }
  ];
}

export const funFacts = [
  "Une journée sur Vénus dure plus longtemps qu'une année sur Vénus !",
  "Il y a autant d'étoiles dans l'univers que de grains de sable sur toutes les plages de la Terre.",
  "L'ISS voyage à 28 000 km/h et fait le tour de la Terre en 90 minutes !",
  "Sur Mars, le Mont Olympe fait trois fois la hauteur de l'Everest !",
  "Dans l'espace, les larmes ne coulent pas, elles forment des petites bulles qui flottent !",
  "Le Soleil représente 99,9% de la masse totale du système solaire.",
  "Neptune a des vents qui peuvent atteindre 2 100 km/h !",
  "Si tu comptais une étoile par seconde, il te faudrait plus de temps que l'âge de l'univers pour toutes les compter !"
];

export function getRandomFunFact(): string {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

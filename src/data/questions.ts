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
    return questions.map(entry => ({
      id: entry.slug,
      question: entry.data.question,
      reponse: entry.body,
      source: entry.data.source,
      funFact: entry.data.funFact,
      tags: entry.data.tags || [],
      difficulty: entry.data.difficulty,
      category: entry.data.category
    }));
  } catch (error) {
    console.error('Erreur lors du chargement des questions:', error);
    return getStaticQuestions(); // Fallback vers contenu statique
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

// Questions statiques de fallback (au cas où le CMS ne marche pas)
function getStaticQuestions(): Question[] {
  return [
    {
      id: 'terre-ronde',
      question: 'Pourquoi la Terre est-elle ronde ?',
      reponse: "La Terre est ronde parce que la gravitation l'oblige à se mettre en boule. La gravitation, c'est la force qui nous maintient sur la Terre : elle nous fait retomber quand on saute, et de la même manière, elle empêche les montagnes de monter trop haut.",
      source: 'Université de Genève - Département d\'Astronomie',
      funFact: 'Les montagnes peuvent être plus hautes sur les planètes plus petites !',
      tags: ['terre', 'gravité', 'forme'],
      difficulty: 'facile',
      category: 'terre-lune'
    },
    {
      id: 'soleil-brille',
      question: 'Pourquoi le Soleil brille-t-il ?',
      reponse: "Au centre du Soleil, il fait si chaud (15 millions de degrés !) que les atomes d'hydrogène se collent ensemble pour former de l'hélium. Cette réaction s'appelle la fusion nucléaire et elle produit une énorme quantité d'énergie !",
      source: 'CNES et Astropolis',
      funFact: 'Le Soleil seul représente 99,9% de la masse totale du système solaire.',
      tags: ['soleil', 'fusion', 'énergie'],
      difficulty: 'moyen',
      category: 'soleil-etoiles'
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

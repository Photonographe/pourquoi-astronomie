export interface Question {
  id: string;
  question: string;
  reponse: string;
  source: string;
  funFact?: string;
  tags: string[];
  difficulty: 'facile' | 'moyen' | 'difficile';
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

export const questions: Record<string, Question[]> = {
  'terre-lune': [
    {
      id: 'terre-ronde',
      question: 'Pourquoi la Terre est-elle ronde ?',
      reponse: "La Terre est ronde parce que la gravitation l'oblige à se mettre en boule. La gravitation, c'est la force qui nous maintient sur la Terre : elle nous fait retomber quand on saute, et de la même manière, elle empêche les montagnes de monter trop haut. Imagine que tu prennes une boule de pâte à modeler : si tu la fais tourner très vite, elle devient naturellement ronde ! C'est exactement ce qui s'est passé quand la Terre s'est formée il y a 4,6 milliards d'années.",
      source: 'Université de Genève - Département d\'Astronomie',
      funFact: 'Les montagnes peuvent être plus hautes sur les planètes plus petites ! Par exemple, le Mont Olympe sur Mars monte trois fois plus haut que l\'Everest.',
      tags: ['terre', 'gravité', 'forme', 'planète'],
      difficulty: 'facile'
    },
    {
      id: 'lune-phases',
      question: 'Pourquoi la Lune change-t-elle de forme ?',
      reponse: "La Lune ne change pas vraiment de forme ! Elle reste toujours une grosse boule ronde. Ce qui change, c'est la partie éclairée par le Soleil que nous pouvons voir depuis la Terre. Quand la Lune tourne autour de notre planète, nous voyons parfois tout son côté éclairé (pleine lune) et parfois juste un petit croissant. C'est un peu comme si tu éclairais une balle avec une lampe de poche dans le noir : selon ta position, tu vois différentes parties lumineuses !",
      source: 'NASA Space Place',
      funFact: 'Il faut environ 29 jours pour que la Lune fasse un tour complet de ses phases.',
      tags: ['lune', 'phases', 'soleil', 'éclairage'],
      difficulty: 'facile'
    },
    {
      id: 'ciel-bleu',
      question: 'Pourquoi le ciel est-il bleu ?',
      reponse: "La lumière du soleil contient toutes les couleurs de l'arc-en-ciel ! Quand cette lumière traverse l'atmosphère terrestre, elle rencontre de minuscules particules d'air. La couleur bleue 'rebondit' plus que les autres couleurs (on dit qu'elle se diffuse plus), c'est pourquoi nous voyons le ciel bleu pendant la journée. Au coucher de soleil, la lumière doit traverser plus d'atmosphère, alors les couleurs rouges et oranges arrivent mieux jusqu'à nous !",
      source: 'Principes de physique optique',
      funFact: "Ce phénomène s'appelle la 'diffusion de Rayleigh', du nom du scientifique qui l'a expliqué.",
      tags: ['ciel', 'couleur', 'lumière', 'atmosphère'],
      difficulty: 'moyen'
    },
    {
      id: 'terre-espace',
      question: "Comment la Terre reste-t-elle en l'air dans l'espace ?",
      reponse: "La Terre ne 'reste pas en l'air' - elle tombe constamment vers le Soleil ! Mais en même temps, elle avance très vite sur le côté (à 30 km par seconde !). C'est comme si tu faisais tourner une balle au bout d'une ficelle : la balle 'tombe' vers ta main mais continue à tourner autour. Pour la Terre, c'est la gravité du Soleil qui joue le rôle de la ficelle invisible !",
      source: 'NASA - Données système solaire',
      funFact: 'Notre système solaire fait une révolution complète autour du centre de la galaxie en 225 à 250 millions d\'années.',
      tags: ['terre', 'orbite', 'gravité', 'soleil'],
      difficulty: 'moyen'
    }
  ],
  'soleil-etoiles': [
    {
      id: 'soleil-brille',
      question: 'Pourquoi le Soleil brille-t-il ?',
      reponse: "Au centre du Soleil, il fait si chaud (15 millions de degrés !) que les atomes d'hydrogène se collent ensemble pour former de l'hélium. Cette réaction s'appelle la fusion nucléaire et elle produit une énorme quantité d'énergie qui nous arrive sous forme de lumière et de chaleur ! C'est comme si le Soleil était une gigantesque centrale électrique qui fonctionne en permanence depuis 4,6 milliards d'années.",
      source: 'CNES et Astropolis',
      funFact: 'Le Soleil seul représente 99,9% de la masse totale du système solaire.',
      tags: ['soleil', 'fusion', 'énergie', 'chaleur'],
      difficulty: 'moyen'
    },
    {
      id: 'nombre-etoiles',
      question: "Combien y a-t-il d'étoiles dans l'univers ?",
      reponse: "Il y a autant d'étoiles dans le ciel que de grains de sable sur toutes les plages de la planète réunies ! Les scientifiques estiment qu'il y en a environ 200 milliards de milliards ! C'est un nombre si grand qu'on ne peut même pas l'imaginer. Pour te donner une idée : si tu comptais une étoile par seconde, il te faudrait plus de temps que l'âge de l'univers pour toutes les compter !",
      source: 'NASA (ingénieur Ted Garbeff)',
      funFact: 'Rien que dans notre galaxie, la Voie Lactée, il y a entre 100 et 400 milliards d\'étoiles.',
      tags: ['étoiles', 'nombre', 'galaxie', 'univers'],
      difficulty: 'facile'
    },
    {
      id: 'etoiles-scintillent',
      question: 'Pourquoi les étoiles scintillent-elles ?',
      reponse: "En réalité, les étoiles ne scintillent pas du tout ! C'est notre atmosphère qui fait cet effet. L'air bouge constamment autour de la Terre, un peu comme l'eau d'une piscine. Quand la lumière des étoiles traverse cette 'piscine d'air' qui bouge, elle semble trembler et scintiller. C'est pour cela que dans l'espace, les astronautes voient les étoiles briller d'une lumière fixe !",
      source: 'Planétarium - Espace pour la Vie',
      funFact: 'Les planètes scintillent moins que les étoiles car elles sont plus proches et apparaissent comme de petits disques plutôt que comme des points.',
      tags: ['étoiles', 'scintillement', 'atmosphère', 'lumière'],
      difficulty: 'moyen'
    },
    {
      id: 'formation-etoiles',
      question: 'Comment se forment les étoiles ?',
      reponse: "Les étoiles naissent dans d'immenses nuages de gaz et de poussière qu'on appelle des nébuleuses. Quand une partie de ce nuage devient trop lourde, elle s'effondre sur elle-même à cause de la gravité. En se contractant, elle chauffe de plus en plus jusqu'à devenir si chaude qu'elle commence à briller : une nouvelle étoile vient de naître ! Le processus prend des millions d'années.",
      source: 'Découvertes James Webb - La Presse',
      funFact: "Le télescope James Webb nous montre maintenant la naissance des étoiles comme jamais auparavant dans les 'Piliers de la création' !",
      tags: ['étoiles', 'formation', 'nébuleuse', 'gravité'],
      difficulty: 'moyen'
    }
  ],
  'planetes': [
    {
      id: 'nombre-planetes',
      question: 'Combien y a-t-il de planètes dans notre système solaire ?',
      reponse: 'Notre système solaire a huit planètes et cinq planètes naines. Les 8 planètes sont : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Les 4 planètes proches du Soleil (Mercure, Vénus, Terre, Mars) sont rocheuses et relativement petites. Les 4 planètes lointaines (Jupiter, Saturne, Uranus, Neptune) sont des géantes gazeuses, bien plus grosses que la Terre mais très légères car elles sont essentiellement formées d\'hydrogène et d\'hélium.',
      source: 'NASA, ESA Space for Kids',
      funFact: 'Depuis 2006, Pluton n\'est plus classée comme une planète à part entière mais comme une planète naine.',
      tags: ['planètes', 'système solaire', 'classification'],
      difficulty: 'facile'
    },
    {
      id: 'planete-chaude',
      question: 'Quelle est la planète la plus chaude ?',
      reponse: "C'est Vénus ! Même si Mercure est plus proche du soleil, Vénus est la plus chaude avec une température de 470°C. Son atmosphère très dense est composée presque intégralement de dioxyde de carbone (CO2). L'effet de serre y maintient des températures suffisantes pour faire fondre le zinc. C'est comme si Vénus portait une couverture géante qui retient toute la chaleur !",
      source: 'Muséum national d\'Histoire naturelle',
      funFact: 'Sur Vénus, il fait si chaud qu\'on pourrait faire fondre du plomb !',
      tags: ['vénus', 'température', 'effet de serre', 'planète'],
      difficulty: 'facile'
    },
    {
      id: 'mars-rouge',
      question: 'Pourquoi Mars est-elle rouge ?',
      reponse: "Mars est rouge à cause de la rouille ! Sa surface contient beaucoup de fer qui s'est oxydé (rouillé) au contact de l'oxygène il y a très longtemps. C'est exactement comme quand un clou rouille dans ton jardin, mais à l'échelle d'une planète entière ! Mars fascine les humains parce qu'elle est la seule autre planète du système solaire où il serait éventuellement possible d'établir une base.",
      source: 'CNES et Parlons Sciences',
      funFact: 'Mars intrigue les scientifiques car elle a perdu son champ magnétique et nous ne savons pas vraiment pourquoi.',
      tags: ['mars', 'couleur', 'rouille', 'fer'],
      difficulty: 'facile'
    },
    {
      id: 'anneaux-saturne',
      question: 'Pourquoi Saturne a-t-elle des anneaux ?',
      reponse: 'Les anneaux de Saturne sont composés de milliards de petits grains de glace d\'eau, probablement issus de la rupture d\'un corps glacé plus important qui s\'est approché trop près de la planète. Ces anneaux sont constitués de milliards de petits morceaux de glace et de roches qui tournent autour de Saturne. Toutes les géantes gazeuses de notre système solaire possèdent un système d\'anneaux, mais ceux de Saturne sont les plus spectaculaires !',
      source: 'CNES et ESA Space for Kids',
      funFact: 'Les anneaux de Saturne sont très larges (plus de 200 000 km !) mais très fins (seulement quelques mètres d\'épaisseur).',
      tags: ['saturne', 'anneaux', 'glace', 'planète'],
      difficulty: 'moyen'
    },
    {
      id: 'annee-planetes',
      question: 'Combien de temps dure une année sur les autres planètes ?',
      reponse: 'Cela dépend de leur distance au Soleil ! Plus une planète est loin, plus elle met de temps à faire le tour du Soleil : Mercure (88 jours), Vénus (225 jours), Terre (365 jours), Mars (687 jours), Jupiter (12 ans), Saturne (29 ans), Uranus (84 ans), Neptune (165 ans). C\'est logique : plus le chemin à parcourir est long, plus le voyage prend du temps !',
      source: 'NASA et MNHN',
      funFact: 'Si tu étais né sur Neptune, tu n\'aurais pas encore 1 an même si tu avais 50 ans sur Terre !',
      tags: ['planètes', 'orbite', 'année', 'temps'],
      difficulty: 'moyen'
    }
  ],
  'exploration-spatiale': [
    {
      id: 'fusees-decollent',
      question: 'Comment les fusées décollent-elles ?',
      reponse: 'Les fusées utilisent le principe d\'action-réaction. Elles brûlent du carburant qui produit des gaz très chauds. Ces gaz sont expulsés vers le bas à très haute vitesse, ce qui pousse la fusée vers le haut ! C\'est comme quand tu gonfles un ballon et que tu le lâches : l\'air qui sort d\'un côté pousse le ballon de l\'autre côté. Les fusées ont besoin de beaucoup de puissance pour échapper à la gravité terrestre !',
      source: 'Principes de physique spatiale',
      funFact: 'Une fusée doit atteindre au moins 11 km/seconde pour quitter la Terre définitivement.',
      tags: ['fusée', 'décollage', 'réaction', 'gravité'],
      difficulty: 'moyen'
    },
    {
      id: 'iss-station',
      question: 'Qu\'est-ce que la Station Spatiale Internationale (ISS) ?',
      reponse: 'L\'ISS est comme une maison dans l\'espace où vivent des astronautes de différents pays. Elle orbite autour de la Terre à 400 km d\'altitude et fait le tour de notre planète en seulement 90 minutes ! Les astronautes y font des expériences scientifiques et étudient comment vivre dans l\'espace. Tu peux même la voir passer dans le ciel le soir : elle ressemble à une étoile très brillante qui se déplace rapidement !',
      source: 'Espace pour la Vie',
      funFact: 'L\'ISS voyage à 28 000 km/h !',
      tags: ['iss', 'station spatiale', 'astronautes', 'orbite'],
      difficulty: 'facile'
    },
    {
      id: 'astronautes-flottent',
      question: 'Pourquoi les astronautes flottent-ils dans l\'espace ?',
      reponse: 'Les astronautes ne flottent pas vraiment ! En fait, ils tombent constamment vers la Terre, mais comme leur vaisseau tombe à la même vitesse qu\'eux, ils ont l\'impression de flotter. C\'est ce qu\'on appelle la "microgravité". Imagine que tu sois dans un ascenseur qui tombe : tu aurais l\'impression de flotter à l\'intérieur ! C\'est exactement ce qui se passe pour les astronautes dans leur station spatiale.',
      source: 'Explications basées sur la physique de la gravité',
      funFact: 'Dans l\'espace, les larmes ne coulent pas, elles forment des petites bulles qui flottent !',
      tags: ['astronautes', 'microgravité', 'flotter', 'espace'],
      difficulty: 'moyen'
    },
    {
      id: 'voyage-mars',
      question: 'Combien de temps faut-il pour aller sur Mars ?',
      reponse: 'Il faudrait voyager dans l\'espace pendant plus de 8 mois pour atteindre la planète Mars ! La distance entre la Terre et Mars change constamment car les deux planètes tournent autour du Soleil à des vitesses différentes. Quand elles sont le plus proche, Mars est à environ 55 millions de kilomètres. Quand elles sont le plus loin, c\'est 400 millions de kilomètres ! C\'est pour cela qu\'on ne peut envoyer des missions vers Mars que tous les 2 ans environ.',
      source: 'Parlons Sciences',
      funFact: 'La NASA se prépare à envoyer des humains sur la Lune d\'ici 2024 avec le programme Artemis, qui servira de base pour le lancement de véhicules spatiaux vers Mars.',
      tags: ['mars', 'voyage', 'distance', 'mission'],
      difficulty: 'moyen'
    },
    {
      id: 'humains-autres-planetes',
      question: 'Y a-t-il déjà eu des humains sur d\'autres planètes ?',
      reponse: 'Les seuls humains à avoir quitté la Terre sont les astronautes qui sont allés sur la Lune entre 1969 et 1972 (6 missions Apollo). Depuis, seuls des robots sont allés explorer les autres planètes pour nous. En 1972, Viking 1 a été le premier module à atterrir sur Mars. Aucun humain ne s\'est posé sur un autre corps céleste depuis la fin du programme Apollo, mais cela pourrait changer bientôt !',
      source: 'Parlons Sciences',
      funFact: 'La NASA a effectué plus de 20 missions vers Mars avec des robots explorateurs.',
      tags: ['humains', 'exploration', 'lune', 'mars'],
      difficulty: 'facile'
    }
  ],
  'univers-galaxies': [
    {
      id: 'galaxie-definition',
      question: 'Qu\'est-ce qu\'une galaxie ?',
      reponse: 'Une galaxie est un immense groupe d\'étoiles, de planètes, de gaz et de poussière qui sont liés ensemble par la gravité. Notre galaxie s\'appelle la Voie Lactée et contient environ 200 milliards d\'étoiles ! Le système solaire fait partie de cette galaxie, dans le bras d\'Orion, à environ 26 100 années-lumière du centre galactique. Il existe des milliards d\'autres galaxies dans l\'univers, chacune avec ses propres étoiles et planètes !',
      source: 'Université de Genève et données système solaire',
      funFact: 'La galaxie la plus proche est Andromède, située à environ 2,5 millions d\'années-lumière.',
      tags: ['galaxie', 'étoiles', 'voie lactée', 'gravité'],
      difficulty: 'moyen'
    },
    {
      id: 'big-bang',
      question: 'Qu\'est-ce que le Big Bang ?',
      reponse: 'Le Big Bang, c\'est le moment où tout l\'univers a commencé, il y a environ 13,8 milliards d\'années ! Imagine que tout ce qui existe aujourd\'hui (toutes les étoiles, planètes, galaxies) était concentré dans un point minuscule, plus petit qu\'une tête d\'épingle. Puis, d\'un coup, tout s\'est étendu très rapidement pour former l\'univers que nous connaissons. Le télescope James Webb nous aide à voir les premières galaxies qui se sont formées juste après le Big Bang !',
      source: 'Mission télescope James Webb',
      funFact: 'Les scientifiques ont trouvé la galaxie de Maisie, une super-vieille galaxie qui s\'est probablement formée 390 millions d\'années après le Big Bang.',
      tags: ['big bang', 'univers', 'origine', 'galaxies'],
      difficulty: 'difficile'
    },
    {
      id: 'univers-fin',
      question: 'L\'univers a-t-il une fin ?',
      reponse: 'C\'est une excellente question que se posent encore les scientifiques ! L\'univers est immense, mais nous ne savons pas s\'il a une limite ou s\'il continue à l\'infini. Ce que nous savons, c\'est que l\'univers grandit constamment depuis le Big Bang. Les galaxies s\'éloignent les unes des autres, comme des points sur un ballon qu\'on gonfle. Mais est-ce que ce "ballon" a une bordure ? C\'est encore un mystère !',
      source: 'Connaissances actuelles en cosmologie',
      funFact: 'L\'univers observable (ce qu\'on peut voir) fait environ 93 milliards d\'années-lumière de diamètre.',
      tags: ['univers', 'infini', 'limite', 'mystère'],
      difficulty: 'difficile'
    },
    {
      id: 'trou-noir',
      question: 'Qu\'est-ce qu\'un trou noir ?',
      reponse: 'Un trou noir, c\'est un endroit dans l\'espace où la gravité est si forte que rien ne peut s\'en échapper, même pas la lumière ! C\'est pour cela qu\'on les appelle "noirs". Ils se forment quand des étoiles très massives (au moins 25 fois plus lourdes que notre Soleil) arrivent en fin de vie et s\'effondrent sur elles-mêmes. Le télescope James Webb a découvert des trous noirs qui ont grandi beaucoup plus vite que prévu !',
      source: 'La Presse - Découvertes James Webb',
      funFact: 'Un trou noir découvert récemment est apparu 400 millions d\'années après le Big Bang, mais atteint une masse 1,6 million de fois plus élevée que notre Soleil.',
      tags: ['trou noir', 'gravité', 'étoile', 'lumière'],
      difficulty: 'difficile'
    }
  ],
  'astronautes': [
    {
      id: 'devenir-astronaute',
      question: 'Comment devient-on astronaute ?',
      reponse: 'Devenir astronaute, c\'est très difficile mais pas impossible ! Il faut d\'abord étudier beaucoup (sciences, mathématiques, ingénierie ou médecine), puis passer de nombreux tests physiques et psychologiques. Les candidats doivent être en excellente forme physique, savoir travailler en équipe et garder leur calme dans les situations stressantes. Ensuite, il faut suivre un entraînement de plusieurs années pour apprendre à piloter des vaisseaux spatiaux, faire des sorties dans l\'espace et mener des expériences scientifiques.',
      source: 'Procédures standard des agences spatiales',
      funFact: 'Il y a eu des astronautes de tous âges, le plus jeune avait 25 ans et le plus âgé 77 ans !',
      tags: ['astronaute', 'formation', 'entraînement', 'métier'],
      difficulty: 'moyen'
    },
    {
      id: 'sons-espace',
      question: 'Peut-on entendre des sons dans l\'espace ?',
      reponse: 'Non ! Dans l\'espace, c\'est le silence total. Le son a besoin d\'air pour voyager, comme les vagues ont besoin d\'eau. Dans l\'espace, il n\'y a pas d\'air (on dit que c\'est le "vide"), donc aucun son ne peut se propager. C\'est pourquoi les astronautes utilisent des radios pour communiquer entre eux ! Dans les films de science-fiction, quand on entend les explosions dans l\'espace, c\'est juste pour rendre le film plus spectaculaire.',
      source: 'Physique du son et expérience spatiale',
      funFact: 'Si deux astronautes se touchent leurs casques, ils peuvent s\'entendre car le son passe par leurs casques solides.',
      tags: ['son', 'espace', 'communication', 'vide'],
      difficulty: 'moyen'
    },
    {
      id: 'nourriture-espace',
      question: 'Que mangent les astronautes dans l\'espace ?',
      reponse: 'Les astronautes mangent des plats spéciaux ! Comme tout flotte dans l\'espace, ils ne peuvent pas manger comme nous. Leurs aliments sont soit déshydratés (on retire l\'eau), soit en conserve, soit sous forme de purée dans des tubes. Ils ajoutent de l\'eau chaude ou froide pour réhydrater leurs repas. Ils ont même des bonbons et des fruits ! Mais attention : pas de miettes, car elles flotteraient partout et pourraient être dangereuses pour les équipements !',
      source: 'Programmes d\'alimentation spatiale NASA/ESA',
      funFact: 'Pizza, glace, bœuf, légumes... presque tout peut être adapté pour l\'espace !',
      tags: ['nourriture', 'alimentation', 'espace', 'astronautes'],
      difficulty: 'facile'
    },
    {
      id: 'sommeil-espace',
      question: 'Comment les astronautes dorment-ils dans l\'espace ?',
      reponse: 'Dans l\'espace, les astronautes dorment dans des sacs de couchage attachés aux murs ! Comme ils flottent, ils peuvent dormir dans n\'importe quelle position : debout, la tête en bas, sur le côté... Pour eux, il n\'y a ni haut ni bas ! Ils attachent leurs bras pour éviter qu\'ils flottent et ils portent un masque sur les yeux car le soleil se lève et se couche 16 fois par jour sur l\'ISS (toutes les 90 minutes) !',
      source: 'Témoignages d\'astronautes et protocoles ISS',
      funFact: 'Beaucoup d\'astronautes ont du mal à bien dormir les premières semaines à cause de cette sensation de flottement.',
      tags: ['sommeil', 'dormir', 'espace', 'microgravité'],
      difficulty: 'facile'
    }
  ]
};

export const funFacts = [
  "Une journée sur Vénus dure plus longtemps qu'une année sur Vénus !",
  "Il y a autant d'étoiles dans l'univers que de grains de sable sur toutes les plages de la Terre.",
  "L'ISS voyage à 28 000 km/h et fait le tour de la Terre en 90 minutes !",
  "Sur Mars, le Mont Olympe fait trois fois la hauteur de l'Everest !",
  "Dans l'espace, les larmes ne coulent pas, elles forment des petites bulles qui flottent !",
  "Le Soleil représente 99,9% de la masse totale du système solaire.",
  "Neptune a des vents qui peuvent atteindre 2 100 km/h !",
  "Si tu comptais une étoile par seconde, il te faudrait plus de temps que l'âge de l'univers pour toutes les compter !",
  "Les anneaux de Saturne sont très larges (plus de 200 000 km !) mais très fins (seulement quelques mètres d'épaisseur).",
  "La galaxie la plus proche est Andromède, située à environ 2,5 millions d'années-lumière."
];

// Helper functions
export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions[categoryId] || [];
}

export function getAllQuestions(): Question[] {
  return Object.values(questions).flat();
}

export function searchQuestions(query: string): Question[] {
  const allQuestions = getAllQuestions();
  const searchTerm = query.toLowerCase();
  
  return allQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm) ||
    q.reponse.toLowerCase().includes(searchTerm) ||
    q.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

export function getRandomFunFact(): string {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

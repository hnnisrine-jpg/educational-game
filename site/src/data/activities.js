const activities = [
  {
    id: 'rights-basics',
    grade: 5,
    theme: 'rights',
    title: {
      fr: 'Mes droits, mes devoirs',
      ar: 'حقوقي وواجباتي',
    },
    objective: {
      fr: 'Identifier les droits fondamentaux de l\'enfant et les responsabilités qui les accompagnent.',
      ar: 'التعرّف على الحقوق الأساسية للطفل والمسؤوليات المرتبطة بها.',
    },
    duration: '45 min',
    instructions: {
      fr: 'Lis les situations présentées. Pour chaque situation, identifie le droit concerné et la responsabilité correspondante. Discute avec tes camarades.',
      ar: 'اقرا الوضعيات المعروضة. لكل وضعية، حدّد الحقّ المعني والمسؤولية المقابلة. ناقش مع زملائك.',
    },
    resources: [],
  },
  {
    id: 'school-rules',
    grade: 5,
    theme: 'responsibilities',
    title: {
      fr: 'Le règlement de l\'école',
      ar: 'النظام الداخلي للمدرسة',
    },
    objective: {
      fr: 'Comprendre l\'utilité du règlement intérieur et proposer des améliorations.',
      ar: 'فهم فائدة النظام الداخلي واقتراح تحسينات.',
    },
    duration: '40 min',
    instructions: {
      fr: 'Lis le règlement intérieur de ton école. Identifie les règles que tu trouves les plus importantes. Propose une nouvelle règle utile pour ta classe.',
      ar: 'اقرا النظام الداخلي لمدرستك. حدّد القواعد اللي تراها الأهمّ. اقترح قاعدة جديدة مفيدة لقسمك.',
    },
    resources: [],
  },
  {
    id: 'respect-differences',
    grade: 5,
    theme: 'respect',
    title: {
      fr: 'Respecter les différences',
      ar: 'احترام الاختلاف',
    },
    objective: {
      fr: 'Reconnaître et valoriser les différences entre les personnes.',
      ar: 'التعرّف على الاختلافات بين الناس وتقديرها.',
    },
    duration: '45 min',
    instructions: {
      fr: 'Observe les personnages du jeu Houmetna. Chacun est différent. Discute de ce que chaque personne apporte au quartier grâce à ses compétences et sa personnalité.',
      ar: 'لاحظ شخصيات لعبة حومتنا. كل واحد مختلف. ناقش شنوّة كل واحد يقدّم للحومة بفضل مهاراتو وشخصيتو.',
    },
    resources: [],
  },
  {
    id: 'clean-neighbourhood',
    grade: 5,
    theme: 'environment',
    title: {
      fr: 'Un quartier propre',
      ar: 'حومة نظيفة',
    },
    objective: {
      fr: 'Prendre conscience de l\'importance de la propreté dans le quartier et proposer des actions concrètes.',
      ar: 'الوعي بأهمية النظافة في الحومة واقتراح إجراءات عملية.',
    },
    duration: '40 min',
    instructions: {
      fr: 'Après avoir joué à la mission « propreté » dans Houmetna, fais une liste de 5 actions que tu peux faire pour garder ton quartier propre.',
      ar: 'بعد ما تلعب مهمة «النظافة» في حومتنا، اعمل قائمة بـ5 حاجات تنجّم تعملها باش تخلّي حومتك نظيفة.',
    },
    resources: [],
  },
  {
    id: 'community-project',
    grade: 5,
    theme: 'community',
    title: {
      fr: 'Notre projet de quartier',
      ar: 'مشروع حومتنا',
    },
    objective: {
      fr: 'Concevoir un petit projet collectif pour améliorer la vie dans le quartier.',
      ar: 'تصوّر مشروع جماعي صغير باش تحسّن الحياة في الحومة.',
    },
    duration: '50 min',
    instructions: {
      fr: 'En petits groupes, imaginez un projet pour améliorer votre quartier ou votre école. Présentez-le à la classe avec un dessin ou un schéma.',
      ar: 'في مجموعات صغيرة، تخيّلوا مشروع باش تحسّنوا حومتكم ولّا مدرستكم. قدّموه للقسم برسم ولّا مخطّط.',
    },
    resources: [],
  },
  {
    id: 'child-rights-convention',
    grade: 6,
    theme: 'rights',
    title: {
      fr: 'La Convention des droits de l\'enfant',
      ar: 'اتّفاقية حقوق الطفل',
    },
    objective: {
      fr: 'Connaître les principaux articles de la Convention internationale des droits de l\'enfant.',
      ar: 'التعرّف على أهمّ بنود الاتّفاقية الدولية لحقوق الطفل.',
    },
    duration: '50 min',
    instructions: {
      fr: 'Lis les articles simplifiés de la Convention. Choisis les 3 droits que tu considères les plus importants et explique pourquoi.',
      ar: 'اقرا البنود المبسّطة للاتّفاقية. اختار الـ3 حقوق اللي تراها الأهمّ وفسّر علاش.',
    },
    resources: [],
  },
  {
    id: 'citizen-responsibilities',
    grade: 6,
    theme: 'responsibilities',
    title: {
      fr: 'Citoyen responsable',
      ar: 'مواطن مسؤول',
    },
    objective: {
      fr: 'Comprendre le lien entre droits et devoirs dans la société.',
      ar: 'فهم العلاقة بين الحقوق والواجبات في المجتمع.',
    },
    duration: '45 min',
    instructions: {
      fr: 'Pour chaque droit étudié, trouve le devoir correspondant. Donne un exemple concret de ta vie quotidienne.',
      ar: 'لكل حقّ درستو، لقى الواجب المقابل. أعطي مثال عملي من حياتك اليومية.',
    },
    resources: [],
  },
  {
    id: 'dialogue-conflict',
    grade: 6,
    theme: 'respect',
    title: {
      fr: 'Résoudre les conflits par le dialogue',
      ar: 'حلّ النزاعات بالحوار',
    },
    objective: {
      fr: 'Apprendre des techniques de résolution pacifique des conflits.',
      ar: 'تعلّم تقنيات الحلّ السلمي للنزاعات.',
    },
    duration: '50 min',
    instructions: {
      fr: 'Joue les situations de conflit présentées avec tes camarades. Essaie de trouver une solution juste pour les deux parties.',
      ar: 'مثّل وضعيات النزاع المعروضة مع زملائك. حاول تلقى حلّ عادل للطرفين.',
    },
    resources: [],
  },
  {
    id: 'local-democracy',
    grade: 6,
    theme: 'community',
    title: {
      fr: 'La démocratie dans notre quartier',
      ar: 'الديمقراطية في حومتنا',
    },
    objective: {
      fr: 'Comprendre les principes de la démocratie locale et le rôle de la municipalité.',
      ar: 'فهم مبادئ الديمقراطية المحلية ودور البلدية.',
    },
    duration: '50 min',
    instructions: {
      fr: 'Après avoir joué à Houmetna, discute du rôle du personnage « البلديّة » (agent municipal). Comment les habitants peuvent-ils participer aux décisions du quartier ?',
      ar: 'بعد ما تلعب حومتنا، ناقش دور شخصية «البلديّة». كيفاش السكّان ينجّمو يشاركوا في قرارات الحومة؟',
    },
    resources: [],
  },
  {
    id: 'eco-citizen',
    grade: 6,
    theme: 'environment',
    title: {
      fr: 'Éco-citoyen dans mon quartier',
      ar: 'مواطن بيئي في حومتي',
    },
    objective: {
      fr: 'Élaborer un plan d\'action environnemental pour le quartier.',
      ar: 'إعداد خطّة عمل بيئية للحومة.',
    },
    duration: '55 min',
    instructions: {
      fr: 'Identifie 3 problèmes environnementaux dans ton quartier. Pour chacun, propose une solution réalisable par les habitants.',
      ar: 'حدّد 3 مشاكل بيئية في حومتك. لكل واحدة، اقترح حلّ يقدرو السكّان يعملوه.',
    },
    resources: [],
  },
];

export default activities;

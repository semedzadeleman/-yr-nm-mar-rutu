import type {
  AgeGroup,
  DifficultyLevel,
  GameConfig,
  IllustratedItemKey,
  Question,
  SubjectId,
} from '../types';

export interface SubjectInfo {
  id: SubjectId;
  title: string;
  shortDesc: string;
  taskTypes: string[];
  colorTheme: 'blue' | 'purple' | 'amber' | 'green';
  imagePath: string;
}

export interface PopularTaskInfo {
  id: string;
  title: string;
  subjectId: SubjectId;
  taskType: string;
  description: string;
  previewItem: IllustratedItemKey;
  colorTheme: 'blue' | 'purple' | 'amber' | 'green';
}

export interface RouteStageInfo {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  recommendedSubject: SubjectId | 'mixed';
  colorTheme: 'purple' | 'blue' | 'amber' | 'green';
}

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'math',
    title: 'Riyaziyyat',
    shortDesc: 'Rəqəmləri tanımaq, ədədləri müqayisə etmək və əyləncəli hesablama tapşırıqları.',
    taskTypes: ['Rəqəmi seç', 'Ədədləri müqayisə et', 'Sadə toplama və çıxma', 'Şəkilləri say'],
    colorTheme: 'blue',
    imagePath: '/src/assets/images/subject_math_art_1795602645326.jpg',
  },
  {
    id: 'azerbaijani',
    title: 'Azərbaycan dili',
    shortDesc: 'Söz ehtiyatını artırmaq, hərfləri tanımaq, hecalara bölmək və cümlələr qurmaq.',
    taskTypes: ['Şəkilə uyğun sözü seç', 'Sözün ilk hərfini tap', 'Sözləri hecalara ayır', 'Cümləni tamamla'],
    colorTheme: 'purple',
    imagePath: '/src/assets/images/subject_language_art_1795602645642.jpg',
  },
  {
    id: 'logic',
    title: 'Məntiq',
    shortDesc: 'Diqqət, müqayisə, ardıcıllıqları tapmaq və əlaqələri müəyyən etmək bacarıqları.',
    taskTypes: ['Fərqli olanı tap', 'Ardıcıllığı tamamla', 'Şəkilləri uyğunlaşdır'],
    colorTheme: 'amber',
    imagePath: '/src/assets/images/hero_learning_map_1795602645390.jpg',
  },
  {
    id: 'speech',
    title: 'Nitq inkişafı',
    shortDesc: 'Şəkilləri adlandırmaq, səsləri fərqləndirmək, hecaları birləşdirmək və ifadəli nitq.',
    taskTypes: ['Şəkli adlandır', 'Sözün ilk səsini müəyyən et', 'Hecaları birləşdir', 'Şəkilə uyğun cümlə seç'],
    colorTheme: 'green',
    imagePath: '/src/assets/images/teacher_pedagogy_art_1795602647144.jpg',
  },
];

export const POPULAR_TASKS: PopularTaskInfo[] = [
  {
    id: 'pop-count',
    title: 'Şəkilləri say',
    subjectId: 'math',
    taskType: 'Şəkilləri say',
    description: 'Rəngli almaları, ulduzları və yarpaqları sayaraq düzgün rəqəmi tap.',
    previewItem: 'apple',
    colorTheme: 'blue',
  },
  {
    id: 'pop-first-letter',
    title: 'Sözün ilk hərfini tap',
    subjectId: 'azerbaijani',
    taskType: 'Sözün ilk hərfini tap',
    description: 'Şəkildəki əşyanı tanı və sözün hansı hərflə başladığını seç.',
    previewItem: 'butterfly',
    colorTheme: 'purple',
  },
  {
    id: 'pop-odd-one',
    title: 'Fərqli olanı tap',
    subjectId: 'logic',
    taskType: 'Fərqli olanı tap',
    description: 'Dörd şəkil arasında qaydaya uyğun gəlməyən fərqli elementi müəyyən et.',
    previewItem: 'star',
    colorTheme: 'amber',
  },
  {
    id: 'pop-join-syllables',
    title: 'Hecaları birləşdir',
    subjectId: 'speech',
    taskType: 'Hecaları birləşdir',
    description: 'Verilmiş hecaları birləşdirərək şəkildəki düzgün sözü əldə et.',
    previewItem: 'book',
    colorTheme: 'green',
  },
  {
    id: 'pop-compare',
    title: 'Ədədləri müqayisə et',
    subjectId: 'math',
    taskType: 'Ədədləri müqayisə et',
    description: 'İki qrup və ya ədəd arasında böyük, kiçik və bərabər əlaqəsini tap.',
    previewItem: 'flower',
    colorTheme: 'blue',
  },
  {
    id: 'pop-sequence',
    title: 'Ardıcıllığı tamamla',
    subjectId: 'logic',
    taskType: 'Ardıcıllığı tamamla',
    description: 'Forma və ya ədəd düzülüşündəki növbəti addımı məntiqlə müəyyən et.',
    previewItem: 'moon',
    colorTheme: 'amber',
  },
];

export const ROUTE_STAGES: RouteStageInfo[] = [
  {
    index: 0,
    title: '1. Başlanğıc',
    subtitle: 'İlk addımlar və tanışlıq',
    description: 'Əsas anlayışlarla tanış ol və ilk 5 suallıq mini oyunu tamamlayaraq ulduz qazan.',
    recommendedSubject: 'mixed',
    colorTheme: 'purple',
  },
  {
    index: 1,
    title: '2. Kəşfiyyat',
    subtitle: 'Rəqəmlər və sözlər aləmi',
    description: 'Sayma, müqayisə və söz ehtiyatını artıran şəkilli tapşırıqlarla yeni biliklər kəşf et.',
    recommendedSubject: 'math',
    colorTheme: 'blue',
  },
  {
    index: 2,
    title: '3. Bacarıqlarımı inkişaf etdirirəm',
    subtitle: 'Məntiq və diqqət məşqləri',
    description: 'Ardıcıllıqları tamamla, fərqli olanı tap və düşünmə sürətini gücləndir.',
    recommendedSubject: 'logic',
    colorTheme: 'amber',
  },
  {
    index: 3,
    title: '4. Yeni biliklər',
    subtitle: 'Dil və nitq ustalığı',
    description: 'Hecaları birləşdir, cümlələri tamamla və nitq bacarıqlarını yeni səviyyəyə qaldır.',
    recommendedSubject: 'azerbaijani',
    colorTheme: 'green',
  },
  {
    index: 4,
    title: '5. Uğur mərhələsi',
    subtitle: 'Bütün fənlərdən yekun sınaq',
    description: 'Öyrəndiyin bütün bilikləri birləşdirərək marşrutun final ulduzlarını topla!',
    recommendedSubject: 'speech',
    colorTheme: 'purple',
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeUniqueNumericOptions(correct: number, minVal = 0): { options: string[]; correctIndex: number } {
  const set = new Set<number>([correct]);
  const offsets = [-3, -2, -1, 1, 2, 3, 4, 5, -4];
  for (const off of shuffleArray(offsets)) {
    if (set.size >= 4) break;
    const candidate = correct + off;
    if (candidate >= minVal && candidate !== correct) {
      set.add(candidate);
    }
  }
  while (set.size < 4) {
    set.add(correct + set.size + 1);
  }
  const sortedOrShuffled = shuffleArray(Array.from(set));
  return {
    options: sortedOrShuffled.map(String),
    correctIndex: sortedOrShuffled.indexOf(correct),
  };
}

// ---------------------------------------------------------------------------
// 1. RIYAZIYYAT QUESTION BUILDERS (Age & Difficulty Adaptive)
// ---------------------------------------------------------------------------
function buildMathQuestions(age: AgeGroup, diff: DifficultyLevel): Question[] {
  const diffOffset = diff === 'beginner' ? 0 : diff === 'intermediate' ? 1 : 2;

  if (age === '5-6') {
    const countA = 3 + diffOffset * 2; // 3, 5, 7
    const countB = 2 + diffOffset * 2; // 2, 4, 6
    const addA = 1 + diffOffset; // 1, 2, 3
    const addB = 2 + diffOffset; // 2, 3, 4
    const subA = 4 + diffOffset * 2; // 4, 6, 8
    const subB = 1 + diffOffset; // 1, 2, 3

    const q1Opts = makeUniqueNumericOptions(countA, 1);
    const q2Opts = makeUniqueNumericOptions(addA + addB, 1);
    const q3Opts = makeUniqueNumericOptions(subA - subB, 0);
    const q4Opts = makeUniqueNumericOptions(countB + 1, 1);

    const cmpLeft = 2 + diffOffset * 2;
    const cmpRight = 4 + diffOffset * 2;

    return [
      {
        id: `m-56-count-${diff}`,
        subjectId: 'math',
        taskType: 'Şəkilləri say',
        prompt: 'Şəkildə neçə ədəd qırmızı alma var?',
        visual: { type: 'count-items', item: 'apple', count: countA },
        options: q1Opts.options,
        correctIndex: q1Opts.correctIndex,
        explanation: `Şəkildə düz ${countA} ədəd alma təsvir olunub.`,
      },
      {
        id: `m-56-num-${diff}`,
        subjectId: 'math',
        taskType: 'Rəqəmi seç',
        prompt: 'Ulduzların sayına uyğun düzgün rəqəmi seç.',
        visual: {
          type: 'number-pick',
          visualCount: countB + 1,
          item: 'star',
          promptBadge: 'Ulduzları say və rəqəmi tap',
        },
        options: q4Opts.options,
        correctIndex: q4Opts.correctIndex,
        explanation: `Burada ${countB + 1} ulduz var, düzgün rəqəm ${countB + 1}-dir.`,
      },
      {
        id: `m-56-add-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `Şəkillərə bax və topla: ${addA} + ${addB} neçə edir?`,
        visual: {
          type: 'math-operation',
          leftCount: addA,
          rightCount: addB,
          item: 'strawberry',
          operator: '+',
          expressionText: `${addA} + ${addB} = ?`,
        },
        options: q2Opts.options,
        correctIndex: q2Opts.correctIndex,
        explanation: `${addA} çiyələyin üstünə ${addB} çiyələk gəlsək, ${addA + addB} olar.`,
      },
      {
        id: `m-56-cmp-${diff}`,
        subjectId: 'math',
        taskType: 'Ədədləri müqayisə et',
        prompt: 'Hansı qrupda daha ÇOX yarpaq var?',
        visual: {
          type: 'compare-groups',
          left: { item: 'leaf', count: cmpLeft, title: 'Sol səbət' },
          right: { item: 'leaf', count: cmpRight, title: 'Sağ səbət' },
          mode: 'which-larger',
        },
        options: ['Sol səbət', 'Sağ səbət', 'Hər ikisi bərabərdir', 'Heç biri'],
        correctIndex: 1,
        explanation: `Sağ səbətdə ${cmpRight}, sol səbətdə ${cmpLeft} yarpaq var. ${cmpRight} daha böyükdür.`,
      },
      {
        id: `m-56-sub-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `Hesabla: ${subA} − ${subB} neçə qalır?`,
        visual: {
          type: 'math-operation',
          leftCount: subA,
          rightCount: subB,
          item: 'flower',
          operator: '-',
          expressionText: `${subA} − ${subB} = ?`,
        },
        options: q3Opts.options,
        correctIndex: q3Opts.correctIndex,
        explanation: `${subA} çiçəkdən ${subB} çiçək çıxsaq, ${subA - subB} çiçək qalar.`,
      },
    ];
  }

  if (age === '7-8') {
    const countA = 7 + diffOffset * 3; // 7, 10, 13
    const addA = 8 + diffOffset * 7; // 8, 15, 22
    const addB = 6 + diffOffset * 5; // 6, 11, 16
    const subA = 16 + diffOffset * 12; // 16, 28, 40
    const subB = 7 + diffOffset * 5; // 7, 12, 17
    const cmpA = 14 + diffOffset * 15;
    const cmpB = 19 + diffOffset * 12;
    const numTarget = 12 + diffOffset * 10;

    const q1Opts = makeUniqueNumericOptions(countA, 1);
    const q2Opts = makeUniqueNumericOptions(addA + addB, 5);
    const q3Opts = makeUniqueNumericOptions(subA - subB, 1);
    const q4Opts = makeUniqueNumericOptions(numTarget, 5);

    return [
      {
        id: `m-78-count-${diff}`,
        subjectId: 'math',
        taskType: 'Şəkilləri say',
        prompt: 'Şəkildəki bütün kəpənəkləri say. Cəmi neçə kəpənək var?',
        visual: { type: 'count-items', item: 'butterfly', count: countA },
        options: q1Opts.options,
        correctIndex: q1Opts.correctIndex,
        explanation: `Diqqətlə saydıqda ${countA} kəpənək olduğunu görürük.`,
      },
      {
        id: `m-78-cmp-${diff}`,
        subjectId: 'math',
        taskType: 'Ədədləri müqayisə et',
        prompt: `Boş xanaya hansı müqayisə işarəsi uyğundur? (${cmpA} ... ${cmpB})`,
        visual: {
          type: 'compare-groups',
          left: { numberLabel: String(cmpA), title: 'Birinci ədəd' },
          right: { numberLabel: String(cmpB), title: 'İkinci ədəd' },
          mode: 'symbols',
        },
        options: ['< (kiçikdir)', '> (böyükdür)', '= (bərabərdir)', '+ (toplama)'],
        correctIndex: cmpA < cmpB ? 0 : cmpA > cmpB ? 1 : 2,
        explanation: `${cmpA} ədədi ${cmpB} ədədindən kiçik olduğu üçün “<” işarəsi yazılır.`,
      },
      {
        id: `m-78-add-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `Toplama əməlini yerinə yetir: ${addA} + ${addB} = ?`,
        visual: {
          type: 'math-operation',
          expressionText: `${addA} + ${addB} = ?`,
          operator: '+',
        },
        options: q2Opts.options,
        correctIndex: q2Opts.correctIndex,
        explanation: `${addA} üzərinə ${addB} gəldikdə cavab ${addA + addB} olur.`,
      },
      {
        id: `m-78-sub-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `Çıxma əməlini hesabla: ${subA} − ${subB} = ?`,
        visual: {
          type: 'math-operation',
          expressionText: `${subA} − ${subB} = ?`,
          operator: '-',
        },
        options: q3Opts.options,
        correctIndex: q3Opts.correctIndex,
        explanation: `${subA}-dən ${subB} çıxdıqda ${subA - subB} qalır.`,
      },
      {
        id: `m-78-num-${diff}`,
        subjectId: 'math',
        taskType: 'Rəqəmi seç',
        prompt: `“${Math.floor(numTarget / 10)} onluq və ${numTarget % 10} təklik” hansı ədəddir?`,
        visual: {
          type: 'number-pick',
          promptBadge: `${Math.floor(numTarget / 10)} onluq + ${numTarget % 10} təklik`,
          item: 'star',
          visualCount: Math.floor(numTarget / 10),
        },
        options: q4Opts.options,
        correctIndex: q4Opts.correctIndex,
        explanation: `${Math.floor(numTarget / 10)} onluq və ${numTarget % 10} təklik birlikdə ${numTarget} ədədini yaradır.`,
      },
    ];
  }

  if (age === '9-10') {
    const mulA = 3 + diffOffset * 2; // 3, 5, 7
    const mulB = 4 + diffOffset * 2; // 4, 6, 8
    const divB = 3 + diffOffset; // 3, 4, 5
    const divResult = 6 + diffOffset * 2; // 6, 8, 10
    const divA = divB * divResult;
    const addA = 45 + diffOffset * 28;
    const addB = 27 + diffOffset * 16;
    const cmpA = 120 + diffOffset * 45;
    const cmpB = 115 + diffOffset * 50;
    const shapeCount = 8 + diffOffset * 3;

    const q1Opts = makeUniqueNumericOptions(mulA * mulB, 4);
    const q2Opts = makeUniqueNumericOptions(divResult, 2);
    const q3Opts = makeUniqueNumericOptions(addA + addB, 20);
    const q5Doubled = makeUniqueNumericOptions(shapeCount * 2, 6);

    const questions: Question[] = [
      {
        id: `m-910-mul-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `Vurma cədvəlinə əsasən hesabla: ${mulA} × ${mulB} = ?`,
        visual: {
          type: 'math-operation',
          operator: '×',
          expressionText: `${mulA} × ${mulB} = ?`,
        },
        options: q1Opts.options,
        correctIndex: q1Opts.correctIndex,
        explanation: `${mulA} dəfə ${mulB} bərabərdir ${mulA * mulB}.`,
      },
      {
        id: `m-910-cmp-${diff}`,
        subjectId: 'math',
        taskType: 'Ədədləri müqayisə et',
        prompt: `İki ədədi müqayisə et: ${cmpA} və ${cmpB}. Hansı işarə doğrudur?`,
        visual: {
          type: 'compare-groups',
          left: { numberLabel: String(cmpA), title: 'Sol tərəf' },
          right: { numberLabel: String(cmpB), title: 'Sağ tərəf' },
          mode: 'symbols',
        },
        options: ['< (kiçikdir)', '> (böyükdür)', '= (bərabərdir)', '− (çıxma)'],
        correctIndex: cmpA > cmpB ? 1 : cmpA < cmpB ? 0 : 2,
        explanation: `${cmpA} ədədi ${cmpB} ədədindən ${cmpA > cmpB ? 'böyükdür (>)' : 'kiçikdir (<)'}.`,
      },
      {
        id: `m-910-div-${diff}`,
        subjectId: 'math',
        taskType: 'Rəqəmi seç',
        prompt: `Bölmə əməlinin cavabını tap: ${divA} ÷ ${divB} = ?`,
        visual: {
          type: 'math-operation',
          operator: '÷',
          expressionText: `${divA} ÷ ${divB} = ?`,
        },
        options: q2Opts.options,
        correctIndex: q2Opts.correctIndex,
        explanation: `${divA}-ı ${divB}-ə böldükdə ${divResult} alınır.`,
      },
      {
        id: `m-910-add-${diff}`,
        subjectId: 'math',
        taskType: 'Sadə toplama və çıxma',
        prompt: `İki ədədi topla: ${addA} + ${addB} = ?`,
        visual: {
          type: 'math-operation',
          operator: '+',
          expressionText: `${addA} + ${addB} = ?`,
        },
        options: q3Opts.options,
        correctIndex: q3Opts.correctIndex,
        explanation: `${addA} + ${addB} = ${addA + addB}.`,
      },
      {
        id: `m-910-count-${diff}`,
        subjectId: 'math',
        taskType: 'Şəkilləri say',
        prompt: `Şəkildəki ulduzların sayını tap və onun 2 qatını hesabla.`,
        visual: { type: 'count-items', item: 'star', count: shapeCount, caption: 'Əvvəlcə say, sonra 2-yə vur' },
        options: q5Doubled.options,
        correctIndex: q5Doubled.correctIndex,
        explanation: `Şəkildə ${shapeCount} ulduz var. ${shapeCount} × 2 = ${shapeCount * 2}.`,
      },
    ];
    return questions;
  }

  // 11-12 yaş
  const eqVal = 14 + diffOffset * 9; // 14, 23, 32
  const eqAdd = 18 + diffOffset * 7;
  const pctBase = 40 + diffOffset * 40; // 40, 80, 120
  const pctHalf = pctBase / 2;
  const mulA = 12 + diffOffset * 4;
  const mulB = 6 + diffOffset * 3;
  const cmpExprA = 35 + diffOffset * 15;
  const cmpExprB = 30 + diffOffset * 20;
  const starCount = 9 + diffOffset * 2;

  const q1Opts = makeUniqueNumericOptions(eqVal, 4);
  const q2Opts = makeUniqueNumericOptions(pctHalf, 10);
  const q3Opts = makeUniqueNumericOptions(mulA * mulB, 20);
  const q5Opts = makeUniqueNumericOptions(starCount * 3, 10);

  return [
    {
      id: `m-1112-eq-${diff}`,
      subjectId: 'math',
      taskType: 'Rəqəmi seç',
      prompt: `Məchul ədədi tap: x + ${eqAdd} = ${eqVal + eqAdd}. x neçədir?`,
      visual: {
        type: 'math-operation',
        operator: '+',
        expressionText: `x + ${eqAdd} = ${eqVal + eqAdd}`,
      },
      options: q1Opts.options,
      correctIndex: q1Opts.correctIndex,
      explanation: `${eqVal + eqAdd} − ${eqAdd} = ${eqVal}. Deməli, x = ${eqVal}.`,
    },
    {
      id: `m-1112-pct-${diff}`,
      subjectId: 'math',
      taskType: 'Rəqəmi seç',
      prompt: `${pctBase} ədədinin 50%-i (yarısı) neçəyə bərabərdir?`,
      visual: {
        type: 'number-pick',
        fraction: { numerator: 1, denominator: 2 },
        promptBadge: `${pctBase} ədədinin 50%-i`,
      },
      options: q2Opts.options,
      correctIndex: q2Opts.correctIndex,
      explanation: `Bir ədədin 50%-i onun yarısıdır: ${pctBase} ÷ 2 = ${pctHalf}.`,
    },
    {
      id: `m-1112-mul-${diff}`,
      subjectId: 'math',
      taskType: 'Sadə toplama və çıxma',
      prompt: `Hasili hesabla: ${mulA} × ${mulB} = ?`,
      visual: {
        type: 'math-operation',
        operator: '×',
        expressionText: `${mulA} × ${mulB} = ?`,
      },
      options: q3Opts.options,
      correctIndex: q3Opts.correctIndex,
      explanation: `${mulA} × ${mulB} = ${mulA * mulB}.`,
    },
    {
      id: `m-1112-cmp-${diff}`,
      subjectId: 'math',
      taskType: 'Ədədləri müqayisə et',
      prompt: `İfadələri müqayisə et: (${cmpExprA} × 2) və (${cmpExprB} + 25)`,
      visual: {
        type: 'compare-groups',
        left: { numberLabel: `${cmpExprA} × 2`, title: 'Sol ifadə' },
        right: { numberLabel: `${cmpExprB} + 25`, title: 'Sağ ifadə' },
        mode: 'symbols',
      },
      options: ['< (kiçikdir)', '> (böyükdür)', '= (bərabərdir)', 'Müqayisə olunmur'],
      correctIndex: cmpExprA * 2 > cmpExprB + 25 ? 1 : cmpExprA * 2 < cmpExprB + 25 ? 0 : 2,
      explanation: `${cmpExprA} × 2 = ${cmpExprA * 2}, ${cmpExprB} + 25 = ${cmpExprB + 25}.`,
    },
    {
      id: `m-1112-cnt-${diff}`,
      subjectId: 'math',
      taskType: 'Şəkilləri say',
      prompt: 'Şəkildəki kitabların sayını tap və 3 dəfə artır (say × 3).',
      visual: { type: 'count-items', item: 'book', count: starCount, caption: 'Kitabları say və 3-ə vur' },
      options: q5Opts.options,
      correctIndex: q5Opts.correctIndex,
      explanation: `Şəkildə ${starCount} kitab var. ${starCount} × 3 = ${starCount * 3}.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// 2. AZƏRBAYCAN DİLİ QUESTION BUILDERS
// ---------------------------------------------------------------------------
function buildAzerbaijaniQuestions(age: AgeGroup, diff: DifficultyLevel): Question[] {
  if (age === '5-6') {
    const wordSet =
      diff === 'beginner'
        ? { item: 'apple' as IllustratedItemKey, word: 'Alma', first: 'A', decoys: ['Armud', 'Kitab', 'Top'] }
        : diff === 'intermediate'
          ? { item: 'cat' as IllustratedItemKey, word: 'Pişik', first: 'P', decoys: ['Dovşan', 'Balıq', 'Ev'] }
          : { item: 'butterfly' as IllustratedItemKey, word: 'Kəpənək', first: 'K', decoys: ['Çiçək', 'Arı', 'Quş'] };

    const questions: Question[] = [
      {
        id: `az-56-word-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Şəkilə uyğun sözü seç',
        prompt: 'Şəkildə nə təsvir olunub? Düzgün sözü seç.',
        visual: { type: 'picture-card', item: wordSet.item },
        options: [wordSet.word, ...wordSet.decoys],
        correctIndex: 0,
        explanation: `Şəkildə göstərilən "${wordSet.word}" sözüdür.`,
      },
      {
        id: `az-56-letter-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözün ilk hərfini tap',
        prompt: `Şəkildəki "${diff === 'beginner' ? 'Günəş' : diff === 'intermediate' ? 'Kitab' : 'Çətir'}" sözü hansı hərflə başlayır?`,
        visual: {
          type: 'picture-card',
          item: diff === 'beginner' ? 'sun' : diff === 'intermediate' ? 'book' : 'umbrella',
          highlightLetter: '?',
        },
        options:
          diff === 'beginner'
            ? ['G', 'A', 'M', 'S']
            : diff === 'intermediate'
              ? ['K', 'T', 'B', 'L']
              : ['Ç', 'Ş', 'C', 'S'],
        correctIndex: 0,
        explanation: `Söz "${diff === 'beginner' ? 'G' : diff === 'intermediate' ? 'K' : 'Ç'}" hərfi ilə başlayır.`,
      },
      {
        id: `az-56-syl-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözləri hecalara ayır',
        prompt: `"${diff === 'beginner' ? 'Alma' : diff === 'intermediate' ? 'Balıq' : 'Dovşan'}" sözü hecalara necə düzgün bölünür?`,
        visual: {
          type: 'syllables',
          item: diff === 'beginner' ? 'apple' : diff === 'intermediate' ? 'fish' : 'rabbit',
          parts: diff === 'beginner' ? ['Al', 'ma'] : diff === 'intermediate' ? ['Ba', 'lıq'] : ['Dov', 'şan'],
          mode: 'split',
        },
        options:
          diff === 'beginner'
            ? ['Al - ma', 'A - lma', 'Alm - a', 'Al - m - a']
            : diff === 'intermediate'
              ? ['Ba - lıq', 'Bal - ıq', 'B - alıq', 'Ba - lı - q']
              : ['Dov - şan', 'Do - vşan', 'D - ovşan', 'Dovş - an'],
        correctIndex: 0,
        explanation: `Hər hecada bir sait səs olmalıdır: düzgün bölünüş birinci variantdır.`,
      },
      {
        id: `az-56-sent-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Cümləni tamamla',
        prompt: 'Şəklə bax və cümləni düzgün sözlə tamamla.',
        visual: {
          type: 'sentence-scene',
          item: 'sun',
          sentenceParts: ['Səmada parlaq', 'saçır.'],
        },
        options: ['günəş', 'kitab', 'qələm', 'masa'],
        correctIndex: 0,
        explanation: 'Səmada parlaq günəş saçır.',
      },
      {
        id: `az-56-word2-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Şəkilə uyğun sözü seç',
        prompt: 'Bu şirin təsvirə uyğun olan söz hansıdır?',
        visual: { type: 'picture-card', item: 'house' },
        options: ['Ağac', 'Ev', 'Maşın', 'Ulduz'],
        correctIndex: 1,
        explanation: 'Şəkildəki rəngli evdir.',
      },
    ];
    return questions;
  }

  if (age === '7-8') {
    const sylWord =
      diff === 'beginner'
        ? { item: 'pencil' as IllustratedItemKey, word: 'Qələm', correct: 'Qə - ləm', bad: ['Qəl - əm', 'Q - ələm', 'Qə - lə - m'] }
        : diff === 'intermediate'
          ? { item: 'butterfly' as IllustratedItemKey, word: 'Kəpənək', correct: 'Kə - pə - nək', bad: ['Kəp - ənək', 'Kə - pən - ək', 'Kəpə - nək'] }
          : { item: 'strawberry' as IllustratedItemKey, word: 'Çiyələk', correct: 'Çi - yə - lək', bad: ['Çiy - ələk', 'Çi - yəl - ək', 'Çiyə - lək'] };

    return [
      {
        id: `az-78-syl-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözləri hecalara ayır',
        prompt: `“${sylWord.word}” sözü hecalara necə düzgün ayrılır?`,
        visual: {
          type: 'syllables',
          item: sylWord.item,
          parts: sylWord.correct.split(' - '),
          mode: 'split',
        },
        options: [sylWord.correct, ...sylWord.bad],
        correctIndex: 0,
        explanation: `Sözdəki saitlərin sayına uyğun olaraq düzgün hecalanma: ${sylWord.correct}.`,
      },
      {
        id: `az-78-letter-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözün ilk hərfini tap',
        prompt: 'Şəkildəki əşyanın adı hansı hərflə başlayır?',
        visual: {
          type: 'picture-card',
          item: diff === 'beginner' ? 'umbrella' : diff === 'intermediate' ? 'rabbit' : 'boat',
          highlightLetter: '?',
        },
        options:
          diff === 'beginner'
            ? ['Ç (Çətir)', 'Ş (Şətir)', 'C (Cətir)', 'S (Sətir)']
            : diff === 'intermediate'
              ? ['D (Dovşan)', 'T (Tovşan)', 'B (Bovşan)', 'N (Novşan)']
              : ['Q (Qayıq)', 'G (Gayıq)', 'K (Kayıq)', 'X (Xayıq)'],
        correctIndex: 0,
        explanation: `Düzgün yazılış və ilk hərf birinci variantdadır.`,
      },
      {
        id: `az-78-sent-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Cümləni tamamla',
        prompt: 'Cümləni məna baxımından düzgün sözlə tamamla.',
        visual: {
          type: 'sentence-scene',
          item: 'book',
          sentenceParts: ['Mən hər axşam maraqlı', 'oxuyuram.'],
        },
        options: ['kitab', 'alma', 'qapı', 'bulud'],
        correctIndex: 0,
        explanation: 'Oxunan əşya kitabdır: "Mən hər axşam maraqlı kitab oxuyuram."',
      },
      {
        id: `az-78-word-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Şəkilə uyğun sözü seç',
        prompt: 'Şəkildəki meyvənin düzgün adını seç.',
        visual: { type: 'picture-card', item: 'pear' },
        options: ['Armud', 'Alma', 'Çiyələk', 'Kök'],
        correctIndex: 0,
        explanation: 'Şəkildə sarı-yaşıl armud təsvir olunub.',
      },
      {
        id: `az-78-sent2-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Cümləni tamamla',
        prompt: 'Şəklə uyğun olaraq boşluğu tamamla.',
        visual: {
          type: 'sentence-scene',
          item: 'umbrella',
          secondaryItem: 'rain',
          sentenceParts: ['Yağış yağanda əlimizə', 'götürürük.'],
        },
        options: ['çətir', 'dəftər', 'top', 'saat'],
        correctIndex: 0,
        explanation: 'Yağışdan qorunmaq üçün çətir götürürük.',
      },
    ];
  }

  if (age === '9-10') {
    return [
      {
        id: `az-910-syl-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözləri hecalara ayır',
        prompt: `“${diff === 'beginner' ? 'Məktəbli' : diff === 'intermediate' ? 'Təbiət' : 'Azərbaycan'}” sözündə neçə heca var?`,
        visual: {
          type: 'picture-card',
          item: diff === 'beginner' ? 'bag' : diff === 'intermediate' ? 'tree' : 'star',
          subtitle: diff === 'beginner' ? 'Məktəbli' : diff === 'intermediate' ? 'Təbiət' : 'Azərbaycan',
        },
        options: diff === 'advanced' ? ['4 heca', '3 heca', '5 heca', '2 heca'] : ['3 heca', '2 heca', '4 heca', '5 heca'],
        correctIndex: 0,
        explanation: `Sözdəki saitlərin sayı heca sayına bərabərdir.`,
      },
      {
        id: `az-910-sent-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Cümləni tamamla',
        prompt: 'Cümlədəki boşluğa hansı şəkilçili söz uyğundur?',
        visual: {
          type: 'sentence-scene',
          item: 'bird',
          secondaryItem: 'tree',
          sentenceParts: ['Kiçik quş', 'budağında şən mahnı oxuyur.'],
        },
        options: ['ağacın', 'ağacı', 'ağacdan', 'ağaca'],
        correctIndex: 0,
        explanation: '“Ağacın budağında” yiyəlik hal birləşməsidir.',
      },
      {
        id: `az-910-word-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Şəkilə uyğun sözü seç',
        prompt: 'Şəkildəki əşyanın əlamətini bildirən düzgün söz birləşməsini seç.',
        visual: { type: 'picture-card', item: 'clock' },
        options: ['Vaxtı göstərən saat', 'Uçan təyyarə', 'Üzən qayıq', 'Yazan qələm'],
        correctIndex: 0,
        explanation: 'Saat vaxtı göstərən cihazdır.',
      },
      {
        id: `az-910-letter-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Sözün ilk hərfini tap',
        prompt: 'Hansı söz İNCƏ saitlə başlayır?',
        visual: { type: 'picture-card', item: 'leaf', subtitle: 'İncə sait: e, ə, i, ö, ü' },
        options: ['Üzüm', 'Alma', 'Armud', 'Otaq'],
        correctIndex: 0,
        explanation: '“Ü” incə saitdir, digər sözlər qalın saitlə başlayır (A, O).',
      },
      {
        id: `az-910-sent2-${diff}`,
        subjectId: 'azerbaijani',
        taskType: 'Cümləni tamamla',
        prompt: 'Əks mənalı (antonim) sözlə cümləni tamamla: “Gündüz işıqlı olur, gecə isə ...”',
        visual: { type: 'sentence-scene', item: 'moon', sentenceParts: ['Gündüz işıqlı olur, gecə isə', 'olur.'] },
        options: ['qaranlıq', 'isti', 'böyük', 'sürətli'],
        correctIndex: 0,
        explanation: '“İşıqlı” sözünün əks mənası “qaranlıq”dır.',
      },
    ];
  }

  // 11-12 yaş
  return [
    {
      id: `az-1112-ortho-${diff}`,
      subjectId: 'azerbaijani',
      taskType: 'Şəkilə uyğun sözü seç',
      prompt: 'Orfoqrafiya qaydasına görə hansı söz DÜZGÜN yazılıb?',
      visual: { type: 'picture-card', item: 'book', subtitle: 'Düzgün yazılışı seç' },
      options:
        diff === 'beginner'
          ? ['Məktəb', 'Məkdəb', 'Məktəp', 'Məhdəb']
          : diff === 'intermediate'
            ? ['Təbiət', 'Təbiyyət', 'Təbət', 'Tabiət']
            : ['Müəllim', 'Məllim', 'Müəlim', 'Muallim'],
      correctIndex: 0,
      explanation: 'Düzgün ədəbi yazılış forması birinci variantdır.',
    },
    {
      id: `az-1112-syl-${diff}`,
      subjectId: 'azerbaijani',
      taskType: 'Sözləri hecalara ayır',
      prompt: '“Məsuliyyətli” sözü neçə hecadan ibarətdir?',
      visual: { type: 'picture-card', item: 'star', subtitle: 'Məsuliyyətli' },
      options: ['5 heca', '4 heca', '6 heca', '3 heca'],
      correctIndex: 0,
      explanation: 'Mə-su-liy-yət-li: sözdə 5 sait (ə, u, i, ə, i) olduğuna görə 5 hecadır.',
    },
    {
      id: `az-1112-sent-${diff}`,
      subjectId: 'azerbaijani',
      taskType: 'Cümləni tamamla',
      prompt: 'Atalar sözünü tamamla: “Kitab bilik ...”',
      visual: { type: 'sentence-scene', item: 'book', sentenceParts: ['Kitab bilik', '.'] },
      options: ['mənbəyidir', 'ağacıdır', 'rəngidir', 'şəkilidir'],
      correctIndex: 0,
      explanation: 'Məşhur ifadə: “Kitab bilik mənbəyidir.”',
    },
    {
      id: `az-1112-letter-${diff}`,
      subjectId: 'azerbaijani',
      taskType: 'Sözün ilk hərfini tap',
      prompt: 'Hansı söz cingiltili samitlə başlayır?',
      visual: { type: 'picture-card', item: 'boat', subtitle: 'Cingiltili samiti tap' },
      options: ['Dəniz', 'Kitab', 'Çiçək', 'Top'],
      correctIndex: 0,
      explanation: '“D” cingiltili samitdir; K, Ç, T kar samitlərdir.',
    },
    {
      id: `az-1112-sent2-${diff}`,
      subjectId: 'azerbaijani',
      taskType: 'Cümləni tamamla',
      prompt: 'Cümlədə hərəkət bildirən (feil) sözü seç.',
      visual: { type: 'sentence-scene', item: 'rabbit', sentenceParts: ['Ağ dovşan çəmənlikdə sürətlə', '.'] },
      options: ['qaçır', 'yaşıl', 'dovşan', 'yumşaq'],
      correctIndex: 0,
      explanation: '“Qaçır” sözü hərəkət bildirən feildir.',
    },
  ];
}

// ---------------------------------------------------------------------------
// 3. MƏNTİQ QUESTION BUILDERS
// ---------------------------------------------------------------------------
function buildLogicQuestions(age: AgeGroup, diff: DifficultyLevel): Question[] {
  if (age === '5-6') {
    return [
      {
        id: `l-56-odd-${diff}`,
        subjectId: 'logic',
        taskType: 'Fərqli olanı tap',
        prompt: 'Bu 4 şəkildən hansı digərlərindən fərqlidir?',
        visual: {
          type: 'odd-one-out',
          items: [
            { id: '1', item: 'apple', label: 'Alma' },
            { id: '2', item: 'pear', label: 'Armud' },
            { id: '3', item: 'strawberry', label: 'Çiyələk' },
            { id: '4', item: 'car', label: 'Maşın' },
          ],
        },
        options: ['Maşın', 'Alma', 'Armud', 'Çiyələk'],
        correctIndex: 0,
        explanation: 'Alma, armud və çiyələk meyvədir, maşın isə nəqliyyat vasitəsidir.',
      },
      {
        id: `l-56-seq-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Ardıcıllıqda sual işarəsinin (?) yerinə hansı fiqur gəlməlidir?',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'shape', shape: 'circle', color: 'purple' },
            { kind: 'shape', shape: 'triangle', color: 'yellow' },
            { kind: 'shape', shape: 'circle', color: 'purple' },
            { kind: 'shape', shape: 'triangle', color: 'yellow' },
            { kind: 'shape', shape: 'circle', color: 'purple' },
          ],
        },
        options: ['Sarı üçbucaq', 'Bənövşəyi dairə', 'Yaşıl kvadrat', 'Mavi ulduz'],
        correctIndex: 0,
        explanation: 'Düzülüş növbə ilə gedir: Dairə, Üçbucaq, Dairə, Üçbucaq, Dairə → Üçbucaq.',
      },
      {
        id: `l-56-match-${diff}`,
        subjectId: 'logic',
        taskType: 'Şəkilləri uyğunlaşdır',
        prompt: 'Arı nə hazırlayır və nə ilə əlaqəlidir?',
        visual: {
          type: 'match-pair',
          sourceItem: 'bee',
          sourceLabel: 'Arı',
          relationHint: 'Arı şirin ... hazırlayır',
        },
        options: ['Bal', 'Kitab', 'Saat', 'Qayıq'],
        correctIndex: 0,
        explanation: 'Arı çiçəklərdən nektar toplayıb bal hazırlayır.',
      },
      {
        id: `l-56-odd2-${diff}`,
        subjectId: 'logic',
        taskType: 'Fərqli olanı tap',
        prompt: 'Hansı fiqur rənginə və formasına görə fərqlidir?',
        visual: {
          type: 'odd-one-out',
          items: [
            { id: '1', shape: 'star', color: 'yellow', label: 'Ulduz 1' },
            { id: '2', shape: 'star', color: 'yellow', label: 'Ulduz 2' },
            { id: '3', shape: 'square', color: 'blue', label: 'Kvadrat' },
            { id: '4', shape: 'star', color: 'yellow', label: 'Ulduz 3' },
          ],
        },
        options: ['Mavi kvadrat', 'Sarı ulduz 1', 'Sarı ulduz 2', 'Sarı ulduz 3'],
        correctIndex: 0,
        explanation: 'Üçü sarı ulduzdur, biri isə mavi kvadratdır.',
      },
      {
        id: `l-56-seq2-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Səma ardıcıllığını tamamla: Günəş, Ay, Günəş, Ay, ...',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'item', item: 'sun' },
            { kind: 'item', item: 'moon' },
            { kind: 'item', item: 'sun' },
            { kind: 'item', item: 'moon' },
          ],
        },
        options: ['Günəş', 'Ay', 'Balıq', 'Alma'],
        correctIndex: 0,
        explanation: 'Günəş və Ay növbələşir, Aydan sonra Günəş gəlir.',
      },
    ];
  }

  if (age === '7-8') {
    return [
      {
        id: `l-78-match-${diff}`,
        subjectId: 'logic',
        taskType: 'Şəkilləri uyğunlaşdır',
        prompt: 'Açar hansı əşya ilə cütlük təşkil edir?',
        visual: {
          type: 'match-pair',
          sourceItem: 'key',
          sourceLabel: 'Açar',
          relationHint: 'Açarı nəyi açmaq üçün istifadə edirik?',
        },
        options: ['Qıfıl', 'Çətir', 'Top', 'Yarpaq'],
        correctIndex: 0,
        explanation: 'Açar qıfılı açmaq üçün istifadə olunur.',
      },
      {
        id: `l-78-seq-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Ədəd ardıcıllığını tamamla: 2, 4, 6, 8, ?',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'text', label: '2', color: 'blue' },
            { kind: 'text', label: '4', color: 'purple' },
            { kind: 'text', label: '6', color: 'green' },
            { kind: 'text', label: '8', color: 'yellow' },
          ],
        },
        options: ['10', '9', '12', '7'],
        correctIndex: 0,
        explanation: 'Hər növbəti ədəd 2 vahid artır: 8 + 2 = 10.',
      },
      {
        id: `l-78-odd-${diff}`,
        subjectId: 'logic',
        taskType: 'Fərqli olanı tap',
        prompt: 'Hansı canlı suda yaşamır və fərqlidir?',
        visual: {
          type: 'odd-one-out',
          items: [
            { id: '1', item: 'cat', label: 'Pişik' },
            { id: '2', item: 'rabbit', label: 'Dovşan' },
            { id: '3', item: 'fish', label: 'Balıq' },
            { id: '4', item: 'butterfly', label: 'Kəpənək' },
          ],
        },
        options: ['Balıq (suda yaşayır)', 'Pişik', 'Dovşan', 'Kəpənək'],
        correctIndex: 0,
        explanation: 'Balıq suda yaşayır, digərləri isə quruda və havada yaşayır.',
      },
      {
        id: `l-78-match2-${diff}`,
        subjectId: 'logic',
        taskType: 'Şəkilləri uyğunlaşdır',
        prompt: 'Yağışlı havada bizə ən çox nə lazımdır?',
        visual: {
          type: 'match-pair',
          sourceItem: 'rain',
          sourceLabel: 'Yağış',
          relationHint: 'Yağışdan qorunmaq üçün...',
        },
        options: ['Çətir', 'Günəş eynəyi', 'Kök', 'Qələm'],
        correctIndex: 0,
        explanation: 'Yağış yağanda islanmamaq üçün çətirdən istifadə edirik.',
      },
      {
        id: `l-78-seq2-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Fiqur ardıcıllığında sual yerinə nə gəlməlidir?',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'shape', shape: 'square', color: 'blue' },
            { kind: 'shape', shape: 'square', color: 'blue' },
            { kind: 'shape', shape: 'star', color: 'yellow' },
            { kind: 'shape', shape: 'square', color: 'blue' },
            { kind: 'shape', shape: 'square', color: 'blue' },
          ],
        },
        options: ['Sarı ulduz', 'Mavi kvadrat', 'Yaşıl dairə', 'Qırmızı ürək'],
        correctIndex: 0,
        explanation: 'Qayda: İki mavi kvadrat, bir sarı ulduz təkrarlanır.',
      },
    ];
  }

  if (age === '9-10') {
    const step = diff === 'beginner' ? 3 : diff === 'intermediate' ? 4 : 5;
    const start = diff === 'beginner' ? 2 : diff === 'intermediate' ? 5 : 7;
    const nextVal = start + step * 4;
    const seqOpts = makeUniqueNumericOptions(nextVal, 5);

    return [
      {
        id: `l-910-seq-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Ədədlər arasındakı qanunauyğunluğu tap və növbəti ədədi seç.',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'text', label: String(start), color: 'purple' },
            { kind: 'text', label: String(start + step), color: 'blue' },
            { kind: 'text', label: String(start + step * 2), color: 'green' },
            { kind: 'text', label: String(start + step * 3), color: 'yellow' },
          ],
        },
        options: seqOpts.options,
        correctIndex: seqOpts.correctIndex,
        explanation: `Hər addımda ${step} əlavə olunur: ${start + step * 3} + ${step} = ${nextVal}.`,
      },
      {
        id: `l-910-odd-${diff}`,
        subjectId: 'logic',
        taskType: 'Fərqli olanı tap',
        prompt: 'Məktəb ləvazimatları arasında fərqli olanı tap.',
        visual: {
          type: 'odd-one-out',
          items: [
            { id: '1', item: 'book', label: 'Kitab' },
            { id: '2', item: 'pencil', label: 'Qələm' },
            { id: '3', item: 'bag', label: 'Məktəb çantası' },
            { id: '4', item: 'boat', label: 'Qayıq' },
          ],
        },
        options: ['Qayıq', 'Kitab', 'Qələm', 'Məktəb çantası'],
        correctIndex: 0,
        explanation: 'Qayıq su nəqliyyatıdır, digərləri məktəb ləvazimatıdır.',
      },
      {
        id: `l-910-match-${diff}`,
        subjectId: 'logic',
        taskType: 'Şəkilləri uyğunlaşdır',
        prompt: 'Məntiq əlaqəsini tap: “Kitab → Oxumaq” kimi “Qələm → ?”',
        visual: {
          type: 'match-pair',
          sourceItem: 'pencil',
          sourceLabel: 'Qələm',
          relationHint: 'Kitab oxumaq üçündür, bəs qələm?',
        },
        options: ['Yazmaq', 'Üzmək', 'Yatmaq', 'Uçmaq'],
        correctIndex: 0,
        explanation: 'Kitab oxumaq üçün, qələm isə yazmaq üçün istifadə edilir.',
      },
      {
        id: `l-910-seq2-${diff}`,
        subjectId: 'logic',
        taskType: 'Ardıcıllığı tamamla',
        prompt: 'Rəngli fiqurların ardıcıllığını tamamla.',
        visual: {
          type: 'sequence',
          tokens: [
            { kind: 'shape', shape: 'triangle', color: 'green' },
            { kind: 'shape', shape: 'diamond', color: 'purple' },
            { kind: 'shape', shape: 'circle', color: 'blue' },
            { kind: 'shape', shape: 'triangle', color: 'green' },
            { kind: 'shape', shape: 'diamond', color: 'purple' },
          ],
        },
        options: ['Mavi dairə', 'Yaşıl üçbucaq', 'Bənövşəyi romb', 'Sarı ulduz'],
        correctIndex: 0,
        explanation: 'Üçlük dövr təkrarlanır: Üçbucaq → Romb → Dairə.',
      },
      {
        id: `l-910-odd2-${diff}`,
        subjectId: 'logic',
        taskType: 'Fərqli olanı tap',
        prompt: 'Hansı cütlük əlaqə baxımından fərqlidir?',
        visual: {
          type: 'odd-one-out',
          items: [
            { id: '1', item: 'sun', label: 'Günəş - İşıq' },
            { id: '2', item: 'clock', label: 'Saat - Vaxt' },
            { id: '3', item: 'book', label: 'Kitab - Bilik' },
            { id: '4', item: 'carrot', label: 'Kök - Dəniz' },
          ],
        },
        options: ['Kök - Dəniz', 'Günəş - İşıq', 'Saat - Vaxt', 'Kitab - Bilik'],
        correctIndex: 0,
        explanation: 'Kök torpaqda bitir, dənizlə birbaşa funksional əlaqəsi yoxdur.',
      },
    ];
  }

  // 11-12 yaş
  return [
    {
      id: `l-1112-seq-${diff}`,
      subjectId: 'logic',
      taskType: 'Ardıcıllığı tamamla',
      prompt: 'İkiqat artım qaydasını tap: 3, 6, 12, 24, ?',
      visual: {
        type: 'sequence',
        tokens: [
          { kind: 'text', label: '3', color: 'purple' },
          { kind: 'text', label: '6', color: 'blue' },
          { kind: 'text', label: '12', color: 'green' },
          { kind: 'text', label: '24', color: 'yellow' },
        ],
      },
      options: ['48', '36', '30', '42'],
      correctIndex: 0,
      explanation: 'Hər növbəti ədəd əvvəlkinin 2 mislidir: 24 × 2 = 48.',
    },
    {
      id: `l-1112-match-${diff}`,
      subjectId: 'logic',
      taskType: 'Şəkilləri uyğunlaşdır',
      prompt: 'Analogiyanı tamamla: “Saat : Zaman = Xətkeş : ?”',
      visual: {
        type: 'match-pair',
        sourceItem: 'clock',
        sourceLabel: 'Saat → Zaman',
        relationHint: 'Saat zamanı ölçür, bəs xətkeş nəyi ölçür?',
      },
      options: ['Uzunluq', 'Çəki', 'Səs', 'İstilik'],
      correctIndex: 0,
      explanation: 'Saat zamanı, xətkeş isə uzunluğu ölçür.',
    },
    {
      id: `l-1112-odd-${diff}`,
      subjectId: 'logic',
      taskType: 'Fərqli olanı tap',
      prompt: 'Tərəflərinin sayına görə hansı fiqur fərqlidir?',
      visual: {
        type: 'odd-one-out',
        items: [
          { id: '1', shape: 'square', color: 'blue', label: 'Kvadrat (4)' },
          { id: '2', shape: 'diamond', color: 'purple', label: 'Romb (4)' },
          { id: '3', shape: 'triangle', color: 'green', label: 'Üçbucaq (3)' },
          { id: '4', shape: 'square', color: 'yellow', label: 'Düzbucaqlı (4)' },
        ],
      },
      options: ['Üçbucaq (3 tərəfi var)', 'Kvadrat', 'Romb', 'Düzbucaqlı'],
      correctIndex: 0,
      explanation: 'Üçbucağın 3, digər fiqurların isə 4 tərəfi var.',
    },
    {
      id: `l-1112-seq2-${diff}`,
      subjectId: 'logic',
      taskType: 'Ardıcıllığı tamamla',
      prompt: 'Artan fərq ardıcıllığını tap: 1, 2, 4, 7, 11, ?',
      visual: {
        type: 'sequence',
        tokens: [
          { kind: 'text', label: '1', color: 'purple' },
          { kind: 'text', label: '2', color: 'blue' },
          { kind: 'text', label: '4', color: 'green' },
          { kind: 'text', label: '7', color: 'yellow' },
          { kind: 'text', label: '11', color: 'coral' },
        ],
      },
      options: ['16', '15', '14', '18'],
      correctIndex: 0,
      explanation: 'Artım +1, +2, +3, +4 şəklində gedir. Növbəti addım +5: 11 + 5 = 16.',
    },
    {
      id: `l-1112-match2-${diff}`,
      subjectId: 'logic',
      taskType: 'Şəkilləri uyğunlaşdır',
      prompt: 'Hansı əlaqə “Gecə → Ay” cütlüyü ilə eyni məntiqdədir?',
      visual: {
        type: 'match-pair',
        sourceItem: 'moon',
        sourceLabel: 'Gecə → Ay',
        relationHint: 'Gecə səmada Ay görünür, bəs gündüz?',
      },
      options: ['Gündüz → Günəş', 'Qış → Alma', 'Kitab → Qapı', 'Su → Qələm'],
      correctIndex: 0,
      explanation: 'Gecə səmada Ay, gündüz isə Günəş görünür.',
    },
  ];
}

// ---------------------------------------------------------------------------
// 4. NİTQ İNKİŞAFI QUESTION BUILDERS
// ---------------------------------------------------------------------------
function buildSpeechQuestions(age: AgeGroup, diff: DifficultyLevel): Question[] {
  if (age === '5-6') {
    return [
      {
        id: `s-56-name-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkli adlandır',
        prompt: 'Şəklə bax və bu heyvanı düzgün adlandır.',
        visual: { type: 'picture-card', item: 'rabbit' },
        options: ['Dovşan', 'Balıq', 'Quş', 'Pişik'],
        correctIndex: 0,
        explanation: 'Uzunqulaq şirin heyvan dovşandır.',
      },
      {
        id: `s-56-sound-${diff}`,
        subjectId: 'speech',
        taskType: 'Sözün ilk səsini müəyyən et',
        prompt: 'Şəkildəki “Balıq” sözünü ucadan söylə. İlk səsi hansıdır?',
        visual: { type: 'picture-card', item: 'fish', highlightLetter: '?' },
        options: ['[b]', '[m]', '[s]', '[k]'],
        correctIndex: 0,
        explanation: '“Balıq” sözü [b] səsi ilə başlayır.',
      },
      {
        id: `s-56-join-${diff}`,
        subjectId: 'speech',
        taskType: 'Hecaları birləşdir',
        prompt: 'Verilmiş iki hecanı birləşdir: “al” + “ma” = ?',
        visual: {
          type: 'syllables',
          item: 'apple',
          parts: ['al', 'ma'],
          mode: 'join',
        },
        options: ['alma', 'armud', 'ana', 'ata'],
        correctIndex: 0,
        explanation: '“al” və “ma” hecaları birləşdikdə “alma” sözü yaranır.',
      },
      {
        id: `s-56-sent-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkilə uyğun cümlə seç',
        prompt: 'Şəkildəki səhnəyə ən uyğun olan cümlə hansıdır?',
        visual: { type: 'picture-card', item: 'bird', subtitle: 'Şəklə diqqətlə bax' },
        options: [
          'Quş göydə sərbəst uçur.',
          'Maşın yolda sürətlə gedir.',
          'Balıq dərin suda üzür.',
          'Uşaq şirin alma yeyir.',
        ],
        correctIndex: 0,
        explanation: 'Şəkildə quş təsvir edildiyi üçün birinci cümlə doğrudur.',
      },
      {
        id: `s-56-join2-${diff}`,
        subjectId: 'speech',
        taskType: 'Hecaları birləşdir',
        prompt: 'Hecaları birləşdirərək sözü tap: “ki” + “tab” = ?',
        visual: {
          type: 'syllables',
          item: 'book',
          parts: ['ki', 'tab'],
          mode: 'join',
        },
        options: ['kitab', 'kələm', 'köynək', 'kəpənək'],
        correctIndex: 0,
        explanation: '“ki” + “tab” birləşərək “kitab” sözünü yaradır.',
      },
    ];
  }

  if (age === '7-8') {
    return [
      {
        id: `s-78-name-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkli adlandır',
        prompt: 'Şəkildəki narıncı tərəvəzi düzgün adlandır.',
        visual: { type: 'picture-card', item: 'carrot' },
        options: ['Kök', 'Alma', 'Armud', 'Çiçək'],
        correctIndex: 0,
        explanation: 'Dovşanların sevdiyi bu tərəvəz kökdür.',
      },
      {
        id: `s-78-sound-${diff}`,
        subjectId: 'speech',
        taskType: 'Sözün ilk səsini müəyyən et',
        prompt: '“Çiçək” sözünün ilk səsi hansıdır?',
        visual: { type: 'picture-card', item: 'flower', highlightLetter: '?' },
        options: ['[ç]', '[ş]', '[c]', '[s]'],
        correctIndex: 0,
        explanation: '“Çiçək” sözü [ç] səsi ilə başlayır.',
      },
      {
        id: `s-78-join-${diff}`,
        subjectId: 'speech',
        taskType: 'Hecaları birləşdir',
        prompt: 'Üç hecanı düzgün ardıcıllıqla birləşdir: “kə” + “pə” + “nək”',
        visual: {
          type: 'syllables',
          item: 'butterfly',
          parts: ['kə', 'pə', 'nək'],
          mode: 'join',
        },
        options: ['kəpənək', 'kələmbər', 'kərpiclik', 'kəklikotu'],
        correctIndex: 0,
        explanation: 'Hecaları ardıcıl birləşdirdikdə “kəpənək” sözü alınır.',
      },
      {
        id: `s-78-sent-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkilə uyğun cümlə seç',
        prompt: 'Şəkli ifadə edən düzgün cümləni seç.',
        visual: { type: 'picture-card', item: 'boat' },
        options: [
          'Taxta qayıq mavi dənizdə üzür.',
          'Qırmızı alma ağacdan yerə düşdü.',
          'Balaca pişik yumşaq xalçada yatır.',
          'Parlaq ulduzlar gecə görünür.',
        ],
        correctIndex: 0,
        explanation: 'Şəkildəki əsas obyekt dənizdə üzən qayıqdır.',
      },
      {
        id: `s-78-sound2-${diff}`,
        subjectId: 'speech',
        taskType: 'Sözün ilk səsini müəyyən et',
        prompt: '“Yarpaq” sözü hansı səslə başlayır?',
        visual: { type: 'picture-card', item: 'leaf', highlightLetter: '?' },
        options: ['[y]', '[a]', '[r]', '[l]'],
        correctIndex: 0,
        explanation: '“Yarpaq” sözü [y] səsi ilə başlayır.',
      },
    ];
  }

  if (age === '9-10') {
    return [
      {
        id: `s-910-join-${diff}`,
        subjectId: 'speech',
        taskType: 'Hecaları birləşdir',
        prompt: 'Qarışıq hecalardan düzgün söz düzəlt: “ləm” + “qə” → hansı sözdür?',
        visual: {
          type: 'syllables',
          item: 'pencil',
          parts: ['qə', 'ləm'],
          mode: 'join',
        },
        options: ['qələm', 'ləmqə', 'qəməl', 'məqəl'],
        correctIndex: 0,
        explanation: '“qə” + “ləm” hecaları birləşərək “qələm” sözünü əmələ gətirir.',
      },
      {
        id: `s-910-sent-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkilə uyğun cümlə seç',
        prompt: 'Şəkildəki obyektin funksiyasını ən aydın izah edən cümləni seç.',
        visual: { type: 'picture-card', item: 'clock' },
        options: [
          'Saat bizə günün vaxtını dəqiq bilməyə kömək edir.',
          'Saat yalnız yağışlı günlərdə istifadə olunur.',
          'Saat çəmənlikdə bitən ətirli bir çiçəkdir.',
          'Saat dənizdə üzmək üçün düzəldilmişdir.',
        ],
        correctIndex: 0,
        explanation: 'Saat vaxtı ölçən və göstərən cihazdır.',
      },
      {
        id: `s-910-sound-${diff}`,
        subjectId: 'speech',
        taskType: 'Sözün ilk səsini müəyyən et',
        prompt: 'Şəkildəki “Çiyələk” sözündə ilk səs necə səslənir?',
        visual: { type: 'picture-card', item: 'strawberry', highlightLetter: 'Ç' },
        options: ['Kar samit [ç]', 'Sait [i]', 'Cingiltili samit [y]', 'Sait [ə]'],
        correctIndex: 0,
        explanation: '“Ç” kar samit səsdir və sözün əvvəlində gəlir.',
      },
      {
        id: `s-910-name-${diff}`,
        subjectId: 'speech',
        taskType: 'Şəkli adlandır',
        prompt: 'Şəkli ümumiləşdirən doğru adı seç.',
        visual: { type: 'picture-card', item: 'tree' },
        options: ['Meyvəli və yaşıl yarpaqlı ağac', 'Məktəb çantası', 'Qış fəslinin qarı', 'Qırmızı avtomobil'],
        correctIndex: 0,
        explanation: 'Şəkildə yaşıl yarpaqlı ağac təsvir olunub.',
      },
      {
        id: `s-910-join2-${diff}`,
        subjectId: 'speech',
        taskType: 'Hecaları birləşdir',
        prompt: 'Hecaları birləşdir: “məktəb” + “li” = ?',
        visual: {
          type: 'syllables',
          item: 'bag',
          parts: ['mək', 'təb', 'li'],
          mode: 'join',
        },
        options: ['məktəbli', 'məktublu', 'mətbəxli', 'mühəndis'],
        correctIndex: 0,
        explanation: '“mək + təb + li” hecalarının birləşməsi “məktəbli” sözünü verir.',
      },
    ];
  }

  // 11-12 yaş
  return [
    {
      id: `s-1112-sent-${diff}`,
      subjectId: 'speech',
      taskType: 'Şəkilə uyğun cümlə seç',
      prompt: 'Şəklə uyğun ən bədii və ifadəli cümləni seç.',
      visual: { type: 'picture-card', item: 'sun', subtitle: 'İfadəli nitq seçimi' },
      options: [
        'Səhər günəşi qızılı şəfəqləri ilə təbiəti oyadırdı.',
        'Günəş gecə saat on ikidə yuxuya getdi.',
        'Yağış yağan kimi səmada qar yağmağa başladı.',
        'Dənizin dibində böyük bir ağac bitmişdi.',
      ],
      correctIndex: 0,
      explanation: 'Birinci cümlə həm məna, həm də bədii ifadə baxımından şəklə uyğundur.',
    },
    {
      id: `s-1112-sound-${diff}`,
      subjectId: 'speech',
      taskType: 'Sözün ilk səsini müəyyən et',
      prompt: '“Əmək” sözünün ilk səsi haqqında hansı fikir doğrudur?',
      visual: { type: 'picture-card', item: 'bee', subtitle: 'Zəhmətkeş arı · Əmək' },
      options: ['İncə, açıq, dodaqlanmayan saitdir [ə]', 'Qalın saitdir [a]', 'Kar samitdir [k]', 'Cingiltili samitdir [m]'],
      correctIndex: 0,
      explanation: '“Ə” səsi incə, açıq və dodaqlanmayan saitdir.',
    },
    {
      id: `s-1112-join-${diff}`,
      subjectId: 'speech',
      taskType: 'Hecaları birləşdir',
      prompt: 'Hecaları düzgün birləşdir: “bil” + “gi” + “li”',
      visual: {
        type: 'syllables',
        item: 'book',
        parts: ['bil', 'gi', 'li'],
        mode: 'join',
      },
      options: ['bilgili', 'bələdçi', 'birlikdə', 'böyüklük'],
      correctIndex: 0,
      explanation: '“bil + gi + li” birləşərək “bilgili” sifətini yaradır.',
    },
    {
      id: `s-1112-name-${diff}`,
      subjectId: 'speech',
      taskType: 'Şəkli adlandır',
      prompt: 'Şəkildəki anlayışı ifadə edən məcazi və ya dəqiq ifadəni seç.',
      visual: { type: 'picture-card', item: 'star' },
      options: ['Parlaq ulduz — uğurun rəmzi', 'Sakit çay — su axını', 'Qalın meşə — sərinlik', 'Soyuq qış — qar dənəsi'],
      correctIndex: 0,
      explanation: 'Ulduz təhsildə uğuru və nailiyyəti simvolizə edir.',
    },
    {
      id: `s-1112-sent2-${diff}`,
      subjectId: 'speech',
      taskType: 'Şəkilə uyğun cümlə seç',
      prompt: 'Şəkildəki məzmuna uyğun məntiqli cümləni seç.',
      visual: { type: 'picture-card', item: 'umbrella' },
      options: [
        'Hava tutqunlaşdığı üçün çətirini özü ilə götürdü.',
        'Günəşli yay günündə qalın palto geyindi.',
        'Kitabını açmadan bütün mətni əzbər oxudu.',
        'Qayıq asfalt yolda sürətlə irəlilədi.',
      ],
      correctIndex: 0,
      explanation: 'Tutqun və yağışlı havada çətir götürmək məntiqli və düzgün ifadədir.',
    },
  ];
}

// ---------------------------------------------------------------------------
// PUBLIC GAME QUESTION GENERATOR (ALWAYS RETURNS EXACTLY 5 QUESTIONS)
// ---------------------------------------------------------------------------
export function generateGameQuestions(config: GameConfig): Question[] {
  const { ageGroup, difficulty, subjectId, taskFocus } = config;

  let pool: Question[] = [];

  if (subjectId === 'mixed') {
    const math = buildMathQuestions(ageGroup, difficulty);
    const az = buildAzerbaijaniQuestions(ageGroup, difficulty);
    const logic = buildLogicQuestions(ageGroup, difficulty);
    const speech = buildSpeechQuestions(ageGroup, difficulty);

    // Pick balanced mix of 5 questions across all 4 subjects
    const picked: Question[] = [
      math[0],
      az[0],
      logic[0],
      speech[0],
      shuffleArray([math[1], math[2], az[1], logic[1], speech[1]])[0],
    ];
    pool = shuffleArray(picked);
  } else {
    const subjectBuilder =
      subjectId === 'math'
        ? buildMathQuestions
        : subjectId === 'azerbaijani'
          ? buildAzerbaijaniQuestions
          : subjectId === 'logic'
            ? buildLogicQuestions
            : buildSpeechQuestions;

    const allInSubject = subjectBuilder(ageGroup, difficulty);

    if (taskFocus) {
      const matching = allInSubject.filter((q) => q.taskType === taskFocus);
      const others = shuffleArray(allInSubject.filter((q) => q.taskType !== taskFocus));
      pool = [...matching, ...others].slice(0, 5);
    } else {
      pool = shuffleArray(allInSubject).slice(0, 5);
    }
  }

  // Shuffle answer options for each question while tracking correctIndex cleanly
  return pool.slice(0, 5).map((q) => {
    const correctText = q.options[q.correctIndex];
    const shuffledOpts = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOpts,
      correctIndex: shuffledOpts.indexOf(correctText),
    };
  });
}

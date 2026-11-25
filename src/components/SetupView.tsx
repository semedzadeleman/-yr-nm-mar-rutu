import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Brain, Calculator, Check, Layers, MessageCircle } from 'lucide-react';
import { SUBJECTS } from '../data/curriculum';
import type { AgeGroup, DifficultyLevel, GameConfig, SubjectId } from '../types';

interface SetupViewProps {
  initialAge: AgeGroup | null;
  initialDifficulty: DifficultyLevel | null;
  initialSubject?: SubjectId | 'mixed';
  initialTaskFocus?: string;
  onBack: () => void;
  onStartGame: (config: GameConfig) => void;
}

const AGE_OPTIONS: Array<{ id: AgeGroup; title: string; subtitle: string; color: string }> = [
  { id: '5-6', title: '5–6 yaş', subtitle: 'Məktəbəhazırlıq dövrü', color: 'border-violet-300 bg-violet-50' },
  { id: '7-8', title: '7–8 yaş', subtitle: '1–2-ci sinif səviyyəsi', color: 'border-sky-300 bg-sky-50' },
  { id: '9-10', title: '9–10 yaş', subtitle: '3–4-cü sinif səviyyəsi', color: 'border-emerald-300 bg-emerald-50' },
  { id: '11-12', title: '11–12 yaş', subtitle: '5–6-cı sinif keçidi', color: 'border-amber-300 bg-amber-50' },
];

const DIFFICULTY_OPTIONS: Array<{
  id: DifficultyLevel;
  title: string;
  desc: string;
  accent: string;
}> = [
  {
    id: 'beginner',
    title: 'Başlanğıc',
    desc: 'Əsas anlayışlarla tanışlıq, sadə və aydın addımlar.',
    accent: 'border-emerald-300 bg-emerald-50',
  },
  {
    id: 'intermediate',
    title: 'Orta',
    desc: 'Müstəqil düşünmə və bilikləri möhkəmləndirmək üçün.',
    accent: 'border-sky-300 bg-sky-50',
  },
  {
    id: 'advanced',
    title: 'İrəli',
    desc: 'Daha düşündürücü və sürətli məntiqi tapşırıqlar.',
    accent: 'border-violet-300 bg-violet-50',
  },
];

export const SetupView: React.FC<SetupViewProps> = ({
  initialAge,
  initialDifficulty,
  initialSubject = 'mixed',
  initialTaskFocus,
  onBack,
  onStartGame,
}) => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>(initialAge ?? '7-8');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>(
    initialDifficulty ?? 'beginner'
  );
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'mixed'>(initialSubject);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartGame({
      ageGroup: selectedAge,
      difficulty: selectedDifficulty,
      subjectId: selectedSubject,
      taskFocus: selectedSubject === initialSubject ? initialTaskFocus : undefined,
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#1E1B3A] mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        <span>Ana səhifəyə qayıt</span>
      </button>

      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1E1B3A] mb-2">
          Yaş və bilik səviyyəsini seç
        </h1>
        <p className="text-base text-slate-600">
          Seçiminə uyğun 5 suallıq şəkilli oyun avtomatik hazırlanacaq.
          {initialTaskFocus && (
            <span className="font-semibold text-violet-800">
              {' '}
              Seçilmiş mövzu: {initialTaskFocus}
            </span>
          )}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Step 1: Age Selection */}
        <section className="rounded-3xl bg-white border border-[#E7E2F5] p-6 sm:p-8">
          <div className="mb-5">
            <span className="text-xs font-bold text-violet-800">Addım 1</span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A]">
              Şagirdin yaş qrupunu seçin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGE_OPTIONS.map((age) => {
              const active = selectedAge === age.id;
              return (
                <button
                  key={age.id}
                  type="button"
                  onClick={() => setSelectedAge(age.id)}
                  aria-pressed={active}
                  className={`relative text-left rounded-2xl border-2 p-5 transition-all duration-150 cursor-pointer min-h-[104px] flex flex-col justify-between ${
                    active
                      ? `${age.color} ring-2 ring-violet-600/20`
                      : 'border-[#E7E2F5] bg-[#FAF9FF] hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xl font-bold text-[#1E1B3A]">{age.title}</span>
                    {active && (
                      <span className="w-6 h-6 rounded-full bg-violet-700 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-600 mt-2">{age.subtitle}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2: Difficulty Selection */}
        <section className="rounded-3xl bg-white border border-[#E7E2F5] p-6 sm:p-8">
          <div className="mb-5">
            <span className="text-xs font-bold text-sky-800">Addım 2</span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A]">
              Bilik səviyyəsini seçin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DIFFICULTY_OPTIONS.map((level) => {
              const active = selectedDifficulty === level.id;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setSelectedDifficulty(level.id)}
                  aria-pressed={active}
                  className={`text-left rounded-2xl border-2 p-5 transition-all duration-150 cursor-pointer flex flex-col justify-between gap-3 ${
                    active
                      ? `${level.accent} ring-2 ring-violet-600/20`
                      : 'border-[#E7E2F5] bg-[#FAF9FF] hover:border-sky-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-bold text-[#1E1B3A]">
                      {level.title}
                    </span>
                    {active && (
                      <span className="w-6 h-6 rounded-full bg-violet-700 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{level.desc}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3: Subject Selection */}
        <section className="rounded-3xl bg-white border border-[#E7E2F5] p-6 sm:p-8">
          <div className="mb-5">
            <span className="text-xs font-bold text-emerald-800">Addım 3</span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A]">
              Fənn seçimi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <button
              type="button"
              onClick={() => setSelectedSubject('mixed')}
              aria-pressed={selectedSubject === 'mixed'}
              className={`text-left rounded-2xl border-2 p-4 transition-colors cursor-pointer flex items-center gap-3 ${
                selectedSubject === 'mixed'
                  ? 'border-violet-500 bg-violet-50'
                  : 'border-[#E7E2F5] bg-[#FAF9FF] hover:border-violet-300'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-violet-700" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold text-[#1E1B3A]">Qarışıq Marşrut</p>
                <p className="text-xs text-slate-600">Bütün fənlərdən 5 sual</p>
              </div>
            </button>

            {SUBJECTS.map((subj) => {
              const active = selectedSubject === subj.id;
              const Icon =
                subj.id === 'math'
                  ? Calculator
                  : subj.id === 'azerbaijani'
                    ? BookOpen
                    : subj.id === 'logic'
                      ? Brain
                      : MessageCircle;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => setSelectedSubject(subj.id)}
                  aria-pressed={active}
                  className={`text-left rounded-2xl border-2 p-4 transition-colors cursor-pointer flex items-center gap-3 ${
                    active
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-[#E7E2F5] bg-[#FAF9FF] hover:border-violet-300'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5DFF7] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-violet-700" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold text-[#1E1B3A]">{subj.title}</p>
                    <p className="text-xs text-slate-600 truncate">{subj.taskTypes[0]}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Submit CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-[#F3EEFF] border border-violet-200 p-6">
          <div className="text-sm text-[#1E1B3A]">
            <p className="font-bold">Seçilmiş öyrənmə planı hazırdır</p>
            <p className="text-slate-700">
              {AGE_OPTIONS.find((a) => a.id === selectedAge)?.title} ·{' '}
              {DIFFICULTY_OPTIONS.find((d) => d.id === selectedDifficulty)?.title} ·{' '}
              {selectedSubject === 'mixed'
                ? 'Qarışıq Marşrut'
                : SUBJECTS.find((s) => s.id === selectedSubject)?.title}{' '}
              · 5 sual
            </p>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-violet-700 hover:bg-violet-800 text-white font-display text-base font-bold shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Oyuna başla</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </form>
    </main>
  );
};

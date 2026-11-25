import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  Compass,
  GraduationCap,
  Map as MapIcon,
  MessageCircle,
  Star,
  Trophy,
} from 'lucide-react';
import { POPULAR_TASKS, ROUTE_STAGES, SUBJECTS } from '../data/curriculum';
import type { StudentProgress, SubjectId, ViewId } from '../types';
import { AGE_LABELS, DIFFICULTY_LABELS } from '../utils/storage';
import { IllustratedItemSvg } from './QuestionVisual';

interface HomeViewProps {
  progress: StudentProgress;
  onStartLearning: () => void;
  onQuickStartSubject: (subjectId: SubjectId, taskFocus?: string) => void;
  onNavigate: (view: ViewId) => void;
}

const SUBJECT_ICONS: Record<SubjectId, React.ReactNode> = {
  math: <Calculator className="w-6 h-6 text-sky-700" aria-hidden="true" />,
  azerbaijani: <BookOpen className="w-6 h-6 text-violet-700" aria-hidden="true" />,
  logic: <Brain className="w-6 h-6 text-amber-700" aria-hidden="true" />,
  speech: <MessageCircle className="w-6 h-6 text-emerald-700" aria-hidden="true" />,
};

const THEME_CARD_CLASSES: Record<'blue' | 'purple' | 'amber' | 'green', string> = {
  blue: 'bg-[#F0F8FF] border-sky-200 hover:border-sky-300',
  purple: 'bg-[#F5F1FF] border-violet-200 hover:border-violet-300',
  amber: 'bg-[#FFFDF0] border-amber-200 hover:border-amber-300',
  green: 'bg-[#EFFDF5] border-emerald-200 hover:border-emerald-300',
};

const THEME_ICON_BG: Record<'blue' | 'purple' | 'amber' | 'green', string> = {
  blue: 'bg-sky-100 border-sky-200',
  purple: 'bg-violet-100 border-violet-200',
  amber: 'bg-amber-100 border-amber-200',
  green: 'bg-emerald-100 border-emerald-200',
};

const ResilientImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}> = ({ src, alt, className = '', fallbackTitle }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-gradient-to-br from-violet-100 via-sky-50 to-amber-50 flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <Compass className="w-10 h-10 text-violet-600 mb-2" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-violet-950">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export const HomeView: React.FC<HomeViewProps> = ({
  progress,
  onStartLearning,
  onQuickStartSubject,
  onNavigate,
}) => {
  const completedStagesCount = progress.completedStages.length;
  const routePercentage = Math.round((completedStagesCount / ROUTE_STAGES.length) * 100);

  return (
    <main className="pb-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold text-violet-800 mb-3">
              İbtidai siniflər və xüsusi təhsil üçün fərdi platforma
              {progress.selectedAge && progress.selectedDifficulty && (
                <>
                  {' '}
                  <span aria-hidden="true">·</span> {AGE_LABELS[progress.selectedAge]}{' '}
                  <span aria-hidden="true">·</span> {DIFFICULTY_LABELS[progress.selectedDifficulty]}
                </>
              )}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B3A] leading-[1.12] [text-wrap:balance] mb-4">
              ÖyrənməMarşrutu
            </h1>

            <p className="font-display text-xl sm:text-2xl font-bold text-violet-800 mb-4 [text-wrap:balance]">
              “Hər uşaq öz sürəti ilə öyrənir!”
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-8">
              Hər şagirdin yaşına və bilik səviyyəsinə uyğun şəkilli oyunlar, addım-addım öyrənmə
              xəritəsi və ulduz motivasiyası. Müəllimlər və pedaqoqlar üçün hazır fərdi tapşırıqlar
              bir ünvanda toplanıb.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-violet-700 hover:bg-violet-800 rounded-2xl shadow-sm transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 whitespace-nowrap"
              >
                <span>Öyrənməyə başla</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('route')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-[#1E1B3A] bg-white hover:bg-violet-50 border border-[#DFD8F2] rounded-2xl transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <MapIcon className="w-5 h-5 text-violet-700" aria-hidden="true" />
                <span>Öyrənmə marşrutuna bax</span>
              </button>
            </div>
          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-3xl overflow-hidden border border-[#E5DFF7] bg-white shadow-sm flex flex-col">
              <ResilientImage
                src="/src/assets/images/hero_learning_map_1795602645390.jpg"
                alt="ÖyrənməMarşrutu — uşaqlar üçün rəngli öyrənmə yolu, kitablar və ulduzlar illüstrasiyası"
                className="w-full h-72 sm:h-80 lg:h-full object-cover"
                fallbackTitle="ÖyrənməMarşrutu Xəritəsi"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quick Progress Strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E7E2F5] p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">Qazanılan ulduzlar</p>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" aria-hidden="true" />
              <span className="font-display text-2xl font-bold text-[#1E1B3A] tabular-nums">
                {progress.totalStars}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#E7E2F5] p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">Tamamlanan oyunlar</p>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-violet-700" aria-hidden="true" />
              <span className="font-display text-2xl font-bold text-[#1E1B3A] tabular-nums">
                {progress.completedGames}
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#E7E2F5] p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">Aktiv mərhələ</p>
            <p className="font-display text-lg font-bold text-[#1E1B3A] truncate">
              {ROUTE_STAGES[progress.unlockedStageIndex]?.title ?? '1. Başlanğıc'}
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#E7E2F5] p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">Seçilmiş rejim</p>
            <p className="font-display text-lg font-bold text-[#1E1B3A] truncate">
              {progress.selectedAge
                ? `${AGE_LABELS[progress.selectedAge]} · ${
                    progress.selectedDifficulty ? DIFFICULTY_LABELS[progress.selectedDifficulty] : 'Seçilməyib'
                  }`
                : 'Hələ seçilməyib'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. FƏNLƏR BÖLMƏSİ */}
      <section id="fenler" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#EAE5F6]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A] mb-2">
              Fənlər bölməsi
            </h2>
            <p className="text-base text-slate-600 max-w-2xl">
              Uşağın marağına və ehtiyacına uyğun fənni seç. Hər fənn üzrə suallar yaşa və bilik
              səviyyəsinə görə avtomatik uyğunlaşır.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartLearning}
            className="text-sm font-semibold text-violet-800 hover:text-violet-950 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Yaş və səviyyə seç</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUBJECTS.map((subject) => {
            const stats = progress.subjectStats[subject.id];
            return (
              <article
                key={subject.id}
                className={`rounded-3xl border p-6 transition-colors duration-150 flex flex-col justify-between gap-5 ${THEME_CARD_CLASSES[subject.colorTheme]}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${THEME_ICON_BG[subject.colorTheme]}`}
                  >
                    {SUBJECT_ICONS[subject.id]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold text-[#1E1B3A] mb-1">
                      {subject.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{subject.shortDesc}</p>
                  </div>
                </div>

                {/* Clean unboxed task list */}
                <div className="text-xs font-medium text-slate-600 leading-relaxed">
                  {subject.taskTypes.join(' · ')}
                </div>

                <div className="flex items-center justify-between gap-4 pt-3 border-t border-black/5">
                  <div className="text-xs font-semibold text-slate-600 tabular-nums">
                    {stats.games} oyun <span aria-hidden="true">·</span> {stats.stars} ulduz
                  </div>
                  <button
                    type="button"
                    onClick={() => onQuickStartSubject(subject.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-violet-700 hover:text-white text-[#1E1B3A] border border-[#DED7F2] text-sm font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Fənnə başla</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. POPULYAR TAPŞIRIQLAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#EAE5F6]">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A] mb-2">
            Populyar tapşırıqlar
          </h2>
          <p className="text-base text-slate-600">
            İbtidai sinif şagirdlərinin ən çox sevdiyi şəkilli tapşırıq nümunələrini sına.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POPULAR_TASKS.map((task) => {
            const subjectObj = SUBJECTS.find((s) => s.id === task.subjectId);
            return (
              <button
                key={task.id}
                type="button"
                onClick={() => onQuickStartSubject(task.subjectId, task.taskType)}
                className="text-left rounded-2xl bg-white border border-[#E7E2F5] hover:border-violet-400 p-5 transition-colors duration-150 flex flex-col justify-between gap-4 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-semibold text-violet-800">
                      {subjectObj?.title}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#F6F4FF] border border-[#EAE4F8] flex items-center justify-center shrink-0">
                      <IllustratedItemSvg item={task.previewItem} className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1E1B3A] group-hover:text-violet-800 mb-1.5">
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{task.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700">
                  <span>Tapşırığı oyna</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. ŞAGİRDİN ÖYRƏNMƏ MARŞRUTU HAQQINDA MƏLUMAT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#EAE5F6]">
        <div className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A] mb-2">
                Şagirdin öyrənmə marşrutu
              </h2>
              <p className="text-base text-slate-600 max-w-2xl">
                Öyrənmə 5 aydın mərhələdən ibarətdir. Hər mərhələdə 5 suallıq oyunu uğurla
                tamamladıqca ulduzlar toplanır və növbəti mərhələ açılır.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('route')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Marşrut xəritəsini aç</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span className="text-[#1E1B3A]">Ümumi marşrut irəliləyişi</span>
              <span className="text-violet-800 tabular-nums">
                {completedStagesCount} / {ROUTE_STAGES.length} mərhələ ({routePercentage}%)
              </span>
            </div>
            <div className="w-full h-3.5 rounded-full bg-[#EFEBF9] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 via-sky-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${Math.max(routePercentage, 6)}%` }}
              />
            </div>
          </div>

          {/* 5 Stages Compact Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ROUTE_STAGES.map((stage) => {
              const isCompleted = progress.completedStages.includes(stage.index);
              const isActive = stage.index === progress.unlockedStageIndex && !isCompleted;
              return (
                <div
                  key={stage.index}
                  className={`rounded-2xl border p-4 flex flex-col justify-between gap-2 ${
                    isCompleted
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : isActive
                        ? 'bg-violet-50 border-violet-300'
                        : 'bg-[#FAF9FF] border-[#E7E2F5]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-600">
                      {isCompleted ? 'Tamamlandı' : isActive ? 'Aktiv mərhələ' : 'Gözləyir'}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                    ) : (
                      <Star
                        className={`w-5 h-5 shrink-0 ${
                          isActive ? 'text-amber-500 fill-amber-400' : 'text-slate-300'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#1E1B3A]">{stage.title}</h3>
                  <p className="text-xs text-slate-600">{stage.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MÜƏLLİMLƏR ÜÇÜN QISA İZAH */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 border-t border-[#EAE5F6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-[#F0F8FF] border border-sky-200 p-6 sm:p-10">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-sky-200 bg-white">
            <ResilientImage
              src="/src/assets/images/teacher_pedagogy_art_1795602647144.jpg"
              alt="Müəllim və şagirdlər birlikdə öyrənmə xəritəsini araşdırırlar"
              className="w-full h-64 lg:h-full object-cover"
              fallbackTitle="Müəllimlər və Pedaqoqlar üçün Bələdçi"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-900 mb-3">
              <GraduationCap className="w-5 h-5 text-sky-700" aria-hidden="true" />
              <span>Müəllimlər və xüsusi təhsil pedaqoqları üçün</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A] mb-4 [text-wrap:balance]">
              Hər şagirdin səviyyəsinə uyğun tapşırıqları saniyələr içində seçin
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Sinifdə və ya fərdi məşğələlərdə şagirdlərin inkişaf tempinə uyğun material hazırlamaq
              artıq əlavə vaxt aparmır. Sadəcə şagirdin yaş qrupunu (5–12 yaş) və bilik səviyyəsini
              (Başlanğıc, Orta, İrəli) seçin — sistem avtomatik olaraq vizual, aydın və ölçülə bilən
              tapşırıqlar təqdim edir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7 text-sm text-slate-700">
              <div className="bg-white/90 rounded-xl border border-sky-200 p-4">
                <p className="font-bold text-[#1E1B3A] mb-1">Diferensial yanaşma</p>
                <p>Xüsusi təhsil ehtiyacı olan uşaqlar üçün sadə, səlis və diqqət yayındırmayan interfeys.</p>
              </div>
              <div className="bg-white/90 rounded-xl border border-sky-200 p-4">
                <p className="font-bold text-[#1E1B3A] mb-1">Anında nəticə təhlili</p>
                <p>Düzgün və səhv cavabların sayı, faiz göstəricisi və yerli yaddaşda saxlanılan tarixçə.</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onNavigate('teachers')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Müəllim bölməsinə keç</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

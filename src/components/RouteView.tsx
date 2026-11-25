import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, Play, Star, Trophy } from 'lucide-react';
import { ROUTE_STAGES } from '../data/curriculum';
import type { StudentProgress, SubjectId } from '../types';
import { AGE_LABELS, DIFFICULTY_LABELS, SUBJECT_LABELS } from '../utils/storage';

interface RouteViewProps {
  progress: StudentProgress;
  onBack: () => void;
  onPlayStage: (stageIndex: number, recommendedSubject: SubjectId | 'mixed') => void;
  onGoSetup: () => void;
}

const STAGE_THEME: Record<'purple' | 'blue' | 'amber' | 'green', { card: string; badge: string }> = {
  purple: { card: 'border-violet-300 bg-violet-50/70', badge: 'bg-violet-700 text-white' },
  blue: { card: 'border-sky-300 bg-sky-50/70', badge: 'bg-sky-700 text-white' },
  amber: { card: 'border-amber-300 bg-amber-50/70', badge: 'bg-amber-600 text-white' },
  green: { card: 'border-emerald-300 bg-emerald-50/70', badge: 'bg-emerald-700 text-white' },
};

export const RouteView: React.FC<RouteViewProps> = ({
  progress,
  onBack,
  onPlayStage,
  onGoSetup,
}) => {
  const completedCount = progress.completedStages.length;
  const pct = Math.round((completedCount / ROUTE_STAGES.length) * 100);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-20">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#1E1B3A] mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        <span>Ana səhifəyə qayıt</span>
      </button>

      {/* Route Overview Card */}
      <section className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1E1B3A] mb-2">
              Öyrənmə Marşrutum
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              Hər mərhələdə ən azı 3 suala düzgün cavab verdikdə (60%+) növbəti mərhələ avtomatik
              açılır və yeni ulduzlar qazanırsan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-center gap-2.5">
              <Star className="w-5 h-5 text-amber-500 fill-amber-400" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold text-amber-900">Ümumi ulduz</p>
                <p className="font-display text-xl font-bold text-amber-950 tabular-nums">
                  {progress.totalStars}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-violet-50 border border-violet-200 px-4 py-3 flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-violet-700" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold text-violet-900">Tamamlanan oyun</p>
                <p className="font-display text-xl font-bold text-violet-950 tabular-nums">
                  {progress.completedGames}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Age/Level Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 rounded-2xl bg-[#FAF9FF] border border-[#E7E2F5] mb-6 text-sm">
          <span className="text-slate-700 font-medium">
            Aktiv səviyyə:{' '}
            <strong className="text-[#1E1B3A]">
              {progress.selectedAge ? AGE_LABELS[progress.selectedAge] : '7–8 yaş (standart)'} ·{' '}
              {progress.selectedDifficulty
                ? DIFFICULTY_LABELS[progress.selectedDifficulty]
                : 'Başlanğıc'}
            </strong>
          </span>
          <button
            type="button"
            onClick={onGoSetup}
            className="text-violet-700 hover:text-violet-900 font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Yaş və səviyyəni dəyiş</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-sm font-semibold mb-2">
            <span className="text-[#1E1B3A]">Marşrut irəliləyişi</span>
            <span className="text-violet-800 tabular-nums">
              {completedCount} / {ROUTE_STAGES.length} mərhələ ({pct}%)
            </span>
          </div>
          <div className="w-full h-4 rounded-full bg-[#EFEBF9] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-sky-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${Math.max(pct, 6)}%` }}
            />
          </div>
        </div>
      </section>

      {/* Visual Winding Stepping-Stone Path */}
      <section className="relative space-y-6" aria-label="Öyrənmə mərhələləri">
        {ROUTE_STAGES.map((stage, idx) => {
          const isCompleted = progress.completedStages.includes(stage.index);
          const isUnlocked = stage.index <= progress.unlockedStageIndex || isCompleted;
          const isCurrent = stage.index === progress.unlockedStageIndex && !isCompleted;
          const theme = STAGE_THEME[stage.colorTheme];

          // Alternate subtle horizontal offset on desktop for visual trail feel
          const offsetClass =
            idx % 2 === 1 ? 'lg:ml-14' : 'lg:mr-14';

          return (
            <div key={stage.index} className={`relative ${offsetClass}`}>
              {/* Connector Path Line between stages */}
              {idx < ROUTE_STAGES.length - 1 && (
                <div
                  className="hidden sm:block absolute left-10 -bottom-6 w-0.5 h-6 border-l-2 border-dashed border-violet-300"
                  aria-hidden="true"
                />
              )}

              <article
                className={`rounded-3xl border-2 p-6 sm:p-7 transition-colors ${
                  isCompleted
                    ? 'bg-emerald-50/70 border-emerald-300'
                    : isUnlocked
                      ? theme.card
                      : 'bg-white/70 border-slate-200 opacity-80'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-display text-xl font-bold ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : isUnlocked
                            ? theme.badge
                            : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                      ) : isUnlocked ? (
                        stage.index + 1
                      ) : (
                        <Lock className="w-6 h-6" aria-hidden="true" />
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold mb-1">
                        <span
                          className={
                            isCompleted
                              ? 'text-emerald-800'
                              : isCurrent
                                ? 'text-violet-800'
                                : isUnlocked
                                  ? 'text-sky-800'
                                  : 'text-slate-500'
                          }
                        >
                          {isCompleted
                            ? 'Tamamlandı'
                            : isCurrent
                              ? 'Hazırkı mərhələ'
                              : isUnlocked
                                ? 'Açıqdır'
                                : 'Kilidlidir'}
                        </span>
                        <span aria-hidden="true" className="text-slate-400">
                          ·
                        </span>
                        <span className="text-slate-600">
                          Tövsiyə olunan fənn: {SUBJECT_LABELS[stage.recommendedSubject]}
                        </span>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A] mb-1">
                        {stage.title}
                      </h2>
                      <p className="text-sm text-slate-700 leading-relaxed max-w-xl">
                        {stage.description}
                      </p>

                      {isCompleted && (
                        <div className="flex items-center gap-1.5 mt-3 text-xs font-bold text-amber-800">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-400" aria-hidden="true" />
                          <Star className="w-4 h-4 text-amber-500 fill-amber-400" aria-hidden="true" />
                          <Star className="w-4 h-4 text-amber-500 fill-amber-400" aria-hidden="true" />
                          <span className="ml-1">Ulduzlarla tamamlandı</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    {isUnlocked ? (
                      <button
                        type="button"
                        onClick={() => onPlayStage(stage.index, stage.recommendedSubject)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-violet-700 hover:bg-violet-800 text-white font-display text-sm font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Play className="w-4 h-4 fill-white" aria-hidden="true" />
                        <span>{isCompleted ? 'Yenidən oyna' : 'Mərhələni oyna'}</span>
                      </button>
                    ) : (
                      <div className="px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 text-center">
                        Əvvəlki mərhələni tamamla
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </main>
  );
};

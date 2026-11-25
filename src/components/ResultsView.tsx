import React from 'react';
import { Award, CheckCircle2, Home, Map as MapIcon, RotateCcw, Star, XCircle } from 'lucide-react';
import { ROUTE_STAGES } from '../data/curriculum';
import type { GameResult, StudentProgress, ViewId } from '../types';
import { AGE_LABELS, DIFFICULTY_LABELS, SUBJECT_LABELS, getMotivationMessage } from '../utils/storage';

interface ResultsViewProps {
  result: GameResult;
  progress: StudentProgress;
  onPlayAgain: () => void;
  onGoHome: () => void;
  onNavigate: (view: ViewId) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  progress,
  onPlayAgain,
  onGoHome,
  onNavigate,
}) => {
  const motivation = getMotivationMessage(result.percentage, progress.completedTasks);
  const completedStagesPct = Math.round(
    (progress.completedStages.length / ROUTE_STAGES.length) * 100
  );

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-20">
      {/* Main Result Summary Card */}
      <section className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-10 mb-8 text-center">
        <p className="text-sm font-semibold text-violet-800 mb-2">
          {AGE_LABELS[result.config.ageGroup]} <span aria-hidden="true">·</span>{' '}
          {DIFFICULTY_LABELS[result.config.difficulty]} <span aria-hidden="true">·</span>{' '}
          {SUBJECT_LABELS[result.config.subjectId]}
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1E1B3A] mb-4">
          Oyun Nəticələrin
        </h1>

        {/* Earned Stars Row */}
        <div className="flex items-center justify-center gap-2.5 my-6" aria-label={`Qazanılan ulduzlar: ${result.starsEarned} / ${result.totalQuestions}`}>
          {Array.from({ length: result.totalQuestions }).map((_, idx) => {
            const earned = idx < result.starsEarned;
            return (
              <div
                key={idx}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center ${
                  earned
                    ? 'bg-amber-50 border-amber-300'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <Star
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${
                    earned ? 'text-amber-500 fill-amber-400' : 'text-slate-300'
                  }`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* Motivation Message */}
        <p className="font-display text-lg sm:text-xl font-bold text-[#1E1B3A] max-w-2xl mx-auto mb-6 [text-wrap:balance]">
          {motivation}
        </p>

        {/* Stage Unlocked Banner */}
        {result.stageAdvanced && (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-300 px-5 py-4 mb-6 inline-flex items-center gap-3 text-emerald-950">
            <Award className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base font-bold text-left">
              Təbriklər! Yeni mərhələ açıldı:{' '}
              {ROUTE_STAGES[result.newUnlockedStageIndex]?.title}
            </span>
          </div>
        )}

        {/* 4 Metric Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left mt-4">
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="text-xs font-semibold text-emerald-900 mb-1">Düzgün cavab</p>
            <p className="font-display text-2xl font-bold text-emerald-950 tabular-nums">
              {result.correctCount} / {result.totalQuestions}
            </p>
          </div>

          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4">
            <p className="text-xs font-semibold text-rose-900 mb-1">Səhv cavab</p>
            <p className="font-display text-2xl font-bold text-rose-950 tabular-nums">
              {result.wrongCount} / {result.totalQuestions}
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 border border-sky-200 p-4">
            <p className="text-xs font-semibold text-sky-900 mb-1">Uğur faizi</p>
            <p className="font-display text-2xl font-bold text-sky-950 tabular-nums">
              {result.percentage}%
            </p>
          </div>

          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
            <p className="text-xs font-semibold text-amber-900 mb-1">Qazanılan ulduz</p>
            <p className="font-display text-2xl font-bold text-amber-950 tabular-nums">
              +{result.starsEarned} ulduz
            </p>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-8 pt-6 border-t border-[#EFEBF9] text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold mb-2">
            <span className="text-[#1E1B3A]">
              Öyrənmə Marşrutunda irəliləyiş · Cəmi {progress.completedGames} oyun · {progress.totalStars} ulduz
            </span>
            <span className="text-violet-800 tabular-nums">{completedStagesPct}%</span>
          </div>
          <div className="w-full h-3.5 rounded-full bg-[#EFEBF9] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-sky-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${Math.max(completedStagesPct, 8)}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onPlayAgain}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-violet-700 hover:bg-violet-800 text-white font-display text-base font-bold shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
            <span>Yenidən oyna</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('route')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-950 border border-sky-200 font-semibold text-base transition-colors cursor-pointer whitespace-nowrap"
          >
            <MapIcon className="w-5 h-5 text-sky-700" aria-hidden="true" />
            <span>Öyrənmə marşrutuna bax</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#1E1B3A] border border-[#DED7F2] font-semibold text-base transition-colors cursor-pointer whitespace-nowrap"
          >
            <Home className="w-5 h-5 text-slate-600" aria-hidden="true" />
            <span>Ana səhifəyə qayıt</span>
          </button>
        </div>
      </section>

      {/* Detailed Question-by-Question Review */}
      <section className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-8">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A] mb-5">
          Cavabların təhlili
        </h2>
        <div className="space-y-4">
          {result.questions.map((q, idx) => {
            const chosenIdx = result.selectedAnswers[idx];
            const isCorrect = chosenIdx === q.correctIndex;
            const chosenText = chosenIdx !== null ? q.options[chosenIdx] : 'Seçilməyib';
            const correctText = q.options[q.correctIndex];

            return (
              <div
                key={q.id}
                className={`rounded-2xl border p-5 ${
                  isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-display text-base font-bold text-[#1E1B3A]">
                    {idx + 1}. {q.prompt}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold shrink-0 ${
                      isCorrect ? 'text-emerald-800' : 'text-rose-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        <span>Düzgün</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Səhv</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="text-sm text-slate-700 space-y-1">
                  <p>
                    <span className="font-semibold">Sənin cavabın:</span> {chosenText}
                  </p>
                  {!isCorrect && (
                    <p>
                      <span className="font-semibold text-emerald-900">Düzgün cavab:</span>{' '}
                      {correctText}
                    </p>
                  )}
                  <p className="text-slate-600 pt-1">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

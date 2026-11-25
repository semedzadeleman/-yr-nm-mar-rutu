import React, { useState } from 'react';
import { AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { GameConfig, Question } from '../types';
import { AGE_LABELS, DIFFICULTY_LABELS, SUBJECT_LABELS } from '../utils/storage';
import { QuestionVisual } from './QuestionVisual';

interface GameViewProps {
  config: GameConfig;
  questions: Question[];
  onBack: () => void;
  onSubmitAnswers: (selectedAnswers: (number | null)[]) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const GameView: React.FC<GameViewProps> = ({
  config,
  questions,
  onBack,
  onSubmitAnswers,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );
  const [validationError, setValidationError] = useState<string | null>(null);

  const answeredCount = selectedAnswers.filter((a) => a !== null).length;
  const progressPct = Math.round((answeredCount / questions.length) * 100);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
    if (validationError) {
      setValidationError(null);
    }
  };

  const handleCheckAnswers = () => {
    const firstMissingIndex = selectedAnswers.findIndex((ans) => ans === null);
    if (firstMissingIndex !== -1) {
      setValidationError(
        `Zəhmət olmasa bütün sualları cavablandırın (${firstMissingIndex + 1}-ci sual hələ seçilməyib).`
      );
      const el = document.getElementById(`question-card-${firstMissingIndex}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    onSubmitAnswers(selectedAnswers);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-20">
      {/* Top Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#1E1B3A] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Yaş və səviyyə seçiminə qayıt</span>
        </button>

        <div className="text-sm font-medium text-slate-600">
          {AGE_LABELS[config.ageGroup]} <span aria-hidden="true">·</span>{' '}
          {DIFFICULTY_LABELS[config.difficulty]} <span aria-hidden="true">·</span>{' '}
          {SUBJECT_LABELS[config.subjectId]}
        </div>
      </div>

      {/* Game Header & Progress Bar */}
      <section className="rounded-3xl bg-white border border-[#E7E2F5] p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1B3A]">
              İnteraktiv Öyrənmə Oyunu
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Hər sualın şəklinə bax, düzgün variantı seç və sonda “Cavabları yoxla” düyməsini bas.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-display text-lg font-bold text-violet-800 tabular-nums">
              {answeredCount} / {questions.length} cavablandı
            </span>
          </div>
        </div>

        <div className="w-full h-3 rounded-full bg-[#EFEBF9] overflow-hidden mb-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-sky-500 transition-all duration-200"
            style={{ width: `${Math.max(progressPct, 4)}%` }}
          />
        </div>

        {/* Quick Question Jump Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {questions.map((_, idx) => {
            const isAnswered = selectedAnswers[idx] !== null;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  document
                    .getElementById(`question-card-${idx}`)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer tabular-nums ${
                  isAnswered
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-[#FAF9FF] border-[#E5DFF7] text-slate-600 hover:border-violet-300'
                }`}
              >
                {idx + 1}-ci sual {isAnswered ? '✓' : ''}
              </button>
            );
          })}
        </div>
      </section>

      {/* 5 Questions List */}
      <div className="space-y-8">
        {questions.map((question, qIndex) => {
          const selectedOpt = selectedAnswers[qIndex];
          return (
            <article
              key={question.id}
              id={`question-card-${qIndex}`}
              className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="text-xs font-semibold text-slate-500">
                  Sual {qIndex + 1} / {questions.length} <span aria-hidden="true">·</span>{' '}
                  {SUBJECT_LABELS[question.subjectId]} <span aria-hidden="true">·</span>{' '}
                  {question.taskType}
                </div>
                {selectedOpt !== null && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Seçildi</span>
                  </span>
                )}
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1E1B3A] mb-5">
                {question.prompt}
              </h2>

              {/* Visual Scene */}
              <div className="mb-6">
                <QuestionVisual visual={question.visual} />
              </div>

              {/* Clickable Answer Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" role="group" aria-label={`Sual ${qIndex + 1} cavab variantları`}>
                {question.options.map((optText, optIdx) => {
                  const isSelected = selectedOpt === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(qIndex, optIdx)}
                      aria-pressed={isSelected}
                      className={`min-h-[56px] px-4 py-3.5 rounded-2xl border-2 text-left flex items-center gap-3.5 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 ${
                        isSelected
                          ? 'bg-violet-50 border-violet-700 text-violet-950 shadow-xs'
                          : 'bg-[#FAF9FF] border-[#E7E2F5] text-[#1E1B3A] hover:bg-violet-50/50 hover:border-violet-300'
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-display text-sm font-bold shrink-0 ${
                          isSelected
                            ? 'bg-violet-700 text-white'
                            : 'bg-white border border-[#DED7F2] text-slate-700'
                        }`}
                      >
                        {OPTION_LETTERS[optIdx]}
                      </span>
                      <span className="text-base font-semibold leading-snug">{optText}</span>
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      {/* Validation Alert + Check Answers Action */}
      <div className="mt-10 rounded-3xl bg-white border border-[#E5DFF7] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          {validationError ? (
            <div className="flex items-center gap-2 text-rose-700 text-sm font-semibold" role="alert">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{validationError}</span>
            </div>
          ) : (
            <p className="text-sm font-medium text-slate-700">
              {answeredCount === questions.length
                ? 'Bütün 5 sual cavablandı! İndi nəticəni yoxlaya bilərsən.'
                : `Daha ${questions.length - answeredCount} sualı seçdikdən sonra cavabları yoxla.`}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleCheckAnswers}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-violet-700 hover:bg-violet-800 text-white font-display text-base font-bold shadow-sm transition-colors cursor-pointer whitespace-nowrap"
        >
          <span>Cavabları yoxla</span>
        </button>
      </div>
    </main>
  );
};

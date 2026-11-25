import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, GraduationCap, RotateCcw, Star } from 'lucide-react';
import { SUBJECTS } from '../data/curriculum';
import type { AgeGroup, DifficultyLevel, GameConfig, StudentProgress, SubjectId } from '../types';
import { AGE_LABELS, DIFFICULTY_LABELS, SUBJECT_LABELS } from '../utils/storage';

interface TeachersViewProps {
  progress: StudentProgress;
  onBack: () => void;
  onLaunchCustomGame: (config: GameConfig) => void;
  onResetProgress: () => void;
}

const AGES: AgeGroup[] = ['5-6', '7-8', '9-10', '11-12'];
const LEVELS: DifficultyLevel[] = ['beginner', 'intermediate', 'advanced'];

export const TeachersView: React.FC<TeachersViewProps> = ({
  progress,
  onBack,
  onLaunchCustomGame,
  onResetProgress,
}) => {
  const [quickAge, setQuickAge] = useState<AgeGroup>(progress.selectedAge ?? '7-8');
  const [quickDiff, setQuickDiff] = useState<DifficultyLevel>(
    progress.selectedDifficulty ?? 'beginner'
  );
  const [quickSubject, setQuickSubject] = useState<SubjectId | 'mixed'>('math');
  const [confirmReset, setConfirmReset] = useState(false);

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

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 mb-2">
          <GraduationCap className="w-5 h-5" aria-hidden="true" />
          <span>Müəllimlər və xüsusi təhsil pedaqoqları üçün iş paneli</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1E1B3A] mb-2">
          Fərdi Tapşırıq Hazırlama və İzləmə
        </h1>
        <p className="text-base text-slate-600 max-w-3xl">
          Şagirdin yaşına və inkişaf səviyyəsinə uyğun dərs tapşırığını birbaşa buradan başladın və
          yerli cihazda saxlanılan nəticələri izləyin.
        </p>
      </div>

      {/* Quick Classroom / Individual Session Launcher */}
      <section className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-8 mb-8">
        <h2 className="font-display text-xl font-bold text-[#1E1B3A] mb-4">
          Şagird üçün sürətli tapşırıq başlat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Yaş qrupu</label>
            <div className="grid grid-cols-2 gap-2">
              {AGES.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setQuickAge(a)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
                    quickAge === a
                      ? 'bg-violet-700 text-white border-violet-700'
                      : 'bg-[#FAF9FF] text-[#1E1B3A] border-[#E5DFF7] hover:border-violet-300'
                  }`}
                >
                  {AGE_LABELS[a]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Bilik səviyyəsi</label>
            <div className="grid grid-cols-1 gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setQuickDiff(lvl)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold border text-left transition-colors cursor-pointer ${
                    quickDiff === lvl
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-[#FAF9FF] text-[#1E1B3A] border-[#E5DFF7] hover:border-sky-300'
                  }`}
                >
                  {DIFFICULTY_LABELS[lvl]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Fənn</label>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setQuickSubject('mixed')}
                className={`px-3 py-2 rounded-xl text-sm font-semibold border text-left transition-colors cursor-pointer ${
                  quickSubject === 'mixed'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-[#FAF9FF] text-[#1E1B3A] border-[#E5DFF7] hover:border-emerald-300'
                }`}
              >
                Qarışıq Marşrut
              </button>
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setQuickSubject(s.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold border text-left transition-colors cursor-pointer ${
                    quickSubject === s.id
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-[#FAF9FF] text-[#1E1B3A] border-[#E5DFF7] hover:border-emerald-300'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            onLaunchCustomGame({
              ageGroup: quickAge,
              difficulty: quickDiff,
              subjectId: quickSubject,
            })
          }
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-violet-700 hover:bg-violet-800 text-white font-display text-sm font-bold transition-colors cursor-pointer"
        >
          <span>Seçilmiş tapşırığı başlat (5 sual)</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </section>

      {/* Student Performance Breakdown */}
      <section className="rounded-3xl bg-white border border-[#E5DFF7] p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#1E1B3A]">
              Şagirdin cari nəticələri
            </h2>
            <p className="text-sm text-slate-600">
              Brauzerin yaddaşında saxlanılan oyun və fənn statistikası
            </p>
          </div>

          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Nəticələri sıfırla</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-rose-800">Əminsiniz?</span>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmReset(false);
                }}
                className="px-3 py-1.5 rounded-lg bg-rose-700 text-white text-xs font-bold cursor-pointer"
              >
                Bəli, sıfırla
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
              >
                Ləğv et
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {SUBJECTS.map((subj) => {
            const st = progress.subjectStats[subj.id];
            return (
              <div key={subj.id} className="rounded-2xl bg-[#FAF9FF] border border-[#E7E2F5] p-4">
                <p className="font-display text-sm font-bold text-[#1E1B3A] mb-2">{subj.title}</p>
                <div className="space-y-1 text-xs text-slate-600 tabular-nums">
                  <p>Oyun sayı: {st.games}</p>
                  <p className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" aria-hidden="true" />
                    <span>Ulduzlar: {st.stars}</span>
                  </p>
                  <p>Ən yüksək nəticə: {st.bestPercentage}%</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent History */}
        <h3 className="font-display text-base font-bold text-[#1E1B3A] mb-3">
          Son tamamlanan tapşırıqlar
        </h3>
        {progress.history.length === 0 ? (
          <div className="rounded-2xl bg-[#FAF9FF] border border-[#E7E2F5] p-6 text-center text-sm text-slate-600">
            Hələ tamamlanmış oyun yoxdur. İlk oyunu başlatdıqdan sonra nəticələr burada görünəcək.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E7E2F5] text-xs text-slate-500">
                  <th className="py-2.5 pr-4 font-semibold">Fənn</th>
                  <th className="py-2.5 pr-4 font-semibold">Yaş və Səviyyə</th>
                  <th className="py-2.5 pr-4 font-semibold">Nəticə</th>
                  <th className="py-2.5 font-semibold">Ulduz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0ECF9]">
                {progress.history.slice(0, 8).map((item) => (
                  <tr key={item.id}>
                    <td className="py-3 pr-4 font-semibold text-[#1E1B3A]">
                      {SUBJECT_LABELS[item.subjectId]}
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      {AGE_LABELS[item.ageGroup]} · {DIFFICULTY_LABELS[item.difficulty]}
                    </td>
                    <td className="py-3 pr-4 tabular-nums">
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        {item.correctCount}/{item.totalQuestions} ({item.percentage}%)
                      </span>
                    </td>
                    <td className="py-3 tabular-nums font-semibold text-amber-800">
                      +{item.starsEarned}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

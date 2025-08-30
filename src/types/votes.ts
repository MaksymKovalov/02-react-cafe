// Інтерфейс для стану голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

// Тип для видів голосування
export type VoteType = 'good' | 'neutral' | 'bad';
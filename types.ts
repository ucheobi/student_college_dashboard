export type Student = {
  id?: string;
  name: string;
  grade: string;
  score: number;
  accuracy: number;
  sessions?: number;
  streak: number;
  hours: number;
  imageUrl: string;
  totalLessons?: number;
};

type ClassPerformance = { 
  grade: string; 
  averageScore: number 
}

type PerformanceDistribution = {
  name: string;
  value: number;
}

export type DashboardSummary = {
  totalStudents: number;
  totalClasses: number;
  averagePerformance: string;
  topPerformer: Student;
  currentChampion: Student;
  longestStreak: Student;
  mostActive: Student;
  highestAccuracy: Student;
  totalLearningHours: number;
  averageSessionTime: string;
  activeStudents: number;
  topScorers: Student[];
  topScorer: Student;
};

export type StudentsDistributionType = {
  classPerformance: ClassPerformance[];
  performanceDistribution: PerformanceDistribution[];
}

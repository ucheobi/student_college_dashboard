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
  skills: {
    vocabulary: number;
    grammar: number;
    punctuation: number;
    listening: number;
    speaking: number;
  };
};

export type StudentListProps = {
  students: Student[]
}

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
  totalLessonsCompleted: number;
};

export type StudentsDistributionType = {
  classPerformance: ClassPerformance[];
  performanceDistribution: PerformanceDistribution[];
}

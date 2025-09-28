export type StudentType = {
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
  students: StudentType[],
  variant?: "default" | "compact",
}

type ClassPerformanceProps = { 
  grade: string; 
  averageScore: number 
}

type PerformanceDistributionProps = {
  name: string;
  value: number;
}

export type DashboardSummaryProps = {
  totalStudents: number;
  totalClasses: number;
  averagePerformance: string;
  topPerformer: StudentType;
  currentChampion: StudentType;
  longestStreak: StudentType;
  mostActive: StudentType;
  highestAccuracy: StudentType;
  totalLearningHours: number;
  averageSessionTime: string;
  activeStudents: number;
  topScorers: StudentType[];
  topScorer: StudentType;
  totalLessonsCompleted: number;
};

export type StudentsDistributionProps = {
  classPerformance: ClassPerformanceProps[];
  performanceDistribution: PerformanceDistributionProps[];
}

export type AverageSkillType = {
    skill: string;
    average: number;
    color: string;
}

export type AveragePerformanceBySkillProps = {
  averageSkills: AverageSkillType[],
  skillColors: Record<string, string>;
}

export type NotificationProps = {
    email: boolean;
    reports: boolean;
    alert: boolean;
}

export type ProfileSettingsProps = {
  fullName: string,
  email: string,
  phoneNumber: string,
}

export enum TimeZone {
  UTC = "UTC-5 (Eastern Time)",
  GMT = "GMT (Greenwich Mean Time)",
  CET = "(Central European Time)",
  PST = "UTC-8 (Pacific Standard Time)",
  IST = "IST (India Standard Time)"
}

export type Language = "English" | "German" | "French" | "Russian";

export type SystemSettingsProps = {
  language: Language
  timeZone: TimeZone
}

export type DataManagementProps = {
  students: StudentType[]
}

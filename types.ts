export type DashboardData = {
  dashboard: {
    totalStudents: number;
    totalClasses: number;
    averagePerformance: string; // "82%"
    topPerformer: {
      id: string;
      name: string;
      class: string;
      score: number;
    };
    currentChampion: {
      id: string;
      name: string;
      class: string;
      streak: number;
    };
    longestStreak: {
      id: string;
      name: string;
      class: string;
      days: number;
    };
    mostActive: {
      id: string;
      name: string;
      class: string;
      sessions: number;
    };
    highestAccuracy: {
      id: string;
      name: string;
      class: string;
      accuracy: string; // "97%"
    };
    totalLearningHours: number;
    averageSessionTime: string; // "42m"
    activeStudents: number;
    topScorers: {
      id: string;
      name: string;
      class: string;
      score: number;
    }[];
    classPerformance: {
      class: string;
      averageScore: number;
    }[];
    recentActivities: {
      id: number;
      student: string;
      activity: string;
      timestamp: string; // ISO string
    }[];
  };
};

export interface initialStateTypes {
    isSidebarCollaped: boolean;
    isDarkMode: boolean;
    dashboardData: DashboardData
}

export type ClassPerformanceProps = {
  class: string;
  averageScore: number;
}

export type ClassPerformanceDataProps = {
  classPerformance: ClassPerformanceProps[]
}

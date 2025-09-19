import { Student, DashboardSummary } from "@/types";

export function computeDashboard(students: Student[]): DashboardSummary {
  const totalStudents = students.length;

  const totalClasses = new Set(students.map(student => student.grade)).size;

  const averageScore = students.reduce((acc, student) => acc + student.score, 0) / totalStudents;

  const averagePerformance = `${Math.round(averageScore / 10)}%`; 

  const topPerformer = [...students].sort((a, b) => b.score - a.score)[0];

  const currentChampion = [...students].sort((a, b) => b.streak - a.streak)[0];

  const longestStreak = currentChampion;

  const mostActive = [...students].sort((a, b) => b.sessions - a.sessions)[0];

  const highestAccuracy = [...students].sort(
    (a, b) => b.accuracy - a.accuracy
  )[0];

  const totalLearningHours = students.reduce((acc, student) => acc + student.hours, 0);

  const avgSessionTime = `${Math.round(
    (totalLearningHours * 60) / students.reduce((acc, student) => acc + student.sessions, 0)
  )}m`;

  const activeStudents = students.filter(s => s.sessions > 20).length; // 20 most active students

  const topScorers = [...students]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  const topScorer = [...students]
    .sort((a, b) => b.score - a.score)[0];

    // Class performance (for bbar chart)
  const gradeMap: Record<string, { total: number; count: number }> = {};
  students.forEach((student) => {
    if (!gradeMap[student.grade]) gradeMap[student.grade] = { total: 0, count: 0 };
    gradeMap[student.grade].total += student.score;
    gradeMap[student.grade].count += 1;
  });

  const classPerformance = Object.entries(gradeMap).map(([grade, { total, count }]) => ({
    grade,
    averageScore: Math.round(total / count),
  }));

  // Performance distribution (for pie chart)
  const distribution = {
    excellent: 0, // 90–100
    good: 0,      // 80–89
    average: 0,   // 70–79
    belowAverage: 0, // < 70
  };

  students.forEach((student) => {
    if (student.score >= 90) distribution.excellent++;
    else if (student.score >= 80) distribution.good++;
    else if (student.score >= 70) distribution.average++;
    else distribution.belowAverage++;
  });

  const performanceDistribution = [
    { name: "Excellent (90-100)", value: distribution.excellent },
    { name: "Good (80-89)", value: distribution.good },
    { name: "Average (70-79)", value: distribution.average },
    { name: "Below Average (<70)", value: distribution.belowAverage },
  ];

  return {
    totalStudents,
    totalClasses,
    averagePerformance,
    topPerformer,
    currentChampion,
    longestStreak,
    mostActive,
    highestAccuracy,
    totalLearningHours,
    averageSessionTime: avgSessionTime,
    activeStudents,
    topScorers,
    topScorer,
    performanceDistribution,
    classPerformance
  };
}

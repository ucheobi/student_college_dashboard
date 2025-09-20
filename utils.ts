import { Student, DashboardSummary } from "@/types";

export function computeDashboard(students: Student[] = []): DashboardSummary {
  if (!students || students.length === 0 ) {
    return {
      totalStudents: 0,
      totalClasses: 0,
      averagePerformance: "",
      topPerformer: {
        id: "", 
        name: "", 
        grade: "", 
        score: 0,
        accuracy: 0,
        sessions: 0,
        streak: 0,
        hours: 0
      },
      currentChampion: {
        id: "", 
        name: "", 
        grade: "", 
        streak: 0,
        score: 0,
        accuracy: 0,
        sessions: 0,
        hours: 0
      },
      longestStreak: {
        id: "",
        name: "", 
        grade: "",
        score: 0,
        accuracy: 0,
        sessions: 0,
        streak: 0,
        hours: 0
      },
      mostActive: {
        id: "", 
        name: "", 
        grade: "", 
        sessions: 0,
        score: 0,
        accuracy: 0,
        streak: 0,
        hours: 0
      },
      highestAccuracy: {
        id: "", 
        name: "", 
        grade: "", 
        accuracy: 0,
        score: 0,
        sessions: 0,
        streak: 0,
        hours: 0
      },
      totalLearningHours: 0,
      averageSessionTime: "",
      activeStudents: 0,
      topScorers: [],
      topScorer: {
        id: "", 
        name: "", 
        grade: "", 
        accuracy: 0,
        score: 0,
        sessions: 0,
        streak: 0,
        hours: 0
      }
    };
  }
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
    .slice(0, 10); // top 10 scorers

  const topScorer = [...students]
    .sort((a, b) => b.score - a.score)[0];


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
    topScorer
  };
}

export function getClassPerformance(students: Student[]) {
  const grouped: Record<string, Student[]> = {};

  students.forEach((s) => {
    if (!grouped[s.grade]) grouped[s.grade] = [];
    grouped[s.grade].push(s);
  });

  return Object.entries(grouped).map(([grade, list]) => {
    const averageScore =
      list.reduce((acc, cur) => acc + cur.score, 0) / list.length;
    return { class: grade, averageScore: Math.round(averageScore) };
  });
}


export function getPerformanceDistribution(students: Student[]) {
  let excellent = 0, good = 0, average = 0, needsImprovement = 0;

  students.forEach((s) => {
    if (s.accuracy >= 90) excellent++;
    else if (s.accuracy >= 80) good++;
    else if (s.accuracy >= 70) average++;
    else needsImprovement++;
  });

  return [
    { name: "Excellent", value: excellent },
    { name: "Good", value: good },
    { name: "Average", value: average },
    { name: "Needs Improvement", value: needsImprovement },
  ];
}


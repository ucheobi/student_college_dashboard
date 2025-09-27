import { StudentType, DashboardSummaryProps } from "@/types";

export const computeDashboard = (students: StudentType[] = []): DashboardSummaryProps => {
  if (!students || students.length === 0 ) {
    return {
      totalStudents: 0,
      totalClasses: 0,
      averagePerformance: "",
      topPerformer: {
        id: "",
        name: "",
        grade: "",
        imageUrl: "",
        score: 0,
        accuracy: 0,
        sessions: 0,
        streak: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      currentChampion: {
        id: "",
        name: "",
        grade: "",
        imageUrl: "",
        streak: 0,
        score: 0,
        accuracy: 0,
        sessions: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      longestStreak: {
        id: "",
        name: "",
        grade: "",
        score: 0,
        imageUrl: "",
        accuracy: 0,
        sessions: 0,
        streak: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      mostActive: {
        id: "",
        name: "",
        grade: "",
        sessions: 0,
        imageUrl: "",
        score: 0,
        accuracy: 0,
        streak: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      highestAccuracy: {
        id: "",
        name: "",
        grade: "",
        imageUrl: "",
        accuracy: 0,
        score: 0,
        sessions: 0,
        streak: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      totalLearningHours: 0,
      averageSessionTime: "",
      activeStudents: 0,
      topScorers: [],
      topScorer: {
        id: "",
        name: "",
        imageUrl: "",
        grade: "",
        accuracy: 0,
        score: 0,
        sessions: 0,
        streak: 0,
        hours: 0,
        skills: {
          vocabulary: 0,
          grammar: 0,
          punctuation: 0,
          listening: 0,
          speaking: 0
        }
      },
      totalLessonsCompleted: 0
    };
  }
  const totalStudents = students.length;

  const totalClasses = new Set(students.map(student => student.grade)).size;

  const averageScore = students.reduce((acc, student) => acc + student.score, 0) / totalStudents;

  const averagePerformance = `${Math.round(averageScore / 10)}%`; 

  const topPerformer = [...students].sort((a, b) => b.score - a.score)[0];

  const currentChampion = [...students].sort((a, b) => b.streak - a.streak)[0];

  const longestStreak = currentChampion;

  const mostActive = [...students].sort((a, b) => (b.sessions ?? 0) - (a.sessions ?? 0))[0];

  const highestAccuracy = [...students].sort(
    (a, b) => b.accuracy - a.accuracy
  )[0];

  const totalLearningHours = students.reduce((acc, student) => acc + student.hours, 0);

  const avgSessionTime = `${Math.round(
    (totalLearningHours * 60) / students.reduce((acc, student) => acc + (student.sessions ?? 0), 0)
  )}m`;

  const activeStudents = students.filter(s => (s.sessions ?? 0) > 20).length; // 20 most active students

  const topScorers = [...students]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // top 10 scorers

  const topScorer = [...students]
    .sort((a, b) => b.score - a.score)[0];

  const totalLessonsCompleted = students.reduce(
    (sum, s) => sum + estimateLessonsFromStudentHour(s),
    0
  )

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
    totalLessonsCompleted
  };
}

export const getClassPerformance = (students: StudentType[]) => {
  const grouped: Record<string, StudentType[]> = {};

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


export const getPerformanceDistribution = (students: StudentType[]) => {
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

export const estimateLessonsFromStudentHour = (student: StudentType, lessonHours = 0.5) => {
  if (typeof student.totalLessons === "number") return student.totalLessons;
  if (typeof student.sessions === "number" && student.sessions > 0) return student.sessions;
  if (typeof student.hours === "number" && student.hours > 0)
    return Math.round(student.hours / lessonHours);
  return 0;
}

export const getMostLessons = (students: StudentType[]) => {
  if (!students || students.length === 0) return null;

  let best: { student: StudentType; lessons: number } | null = null;

  for (const s of students) {
    const lessons = estimateLessonsFromStudentHour(s);
    if (!best || lessons > best.lessons) best = { student: s, lessons };
  }

  return best;
}

export const computeAverageSkills = (students: StudentType[]) => {
  const totalSkills = {
    vocabulary: 0,
    grammar: 0,
    punctuation: 0,
    listening: 0,
    speaking: 0,
  };


  students.forEach(s => {
    totalSkills.vocabulary +=  s.skills.vocabulary;
    totalSkills.grammar += s.skills.grammar;
    totalSkills.punctuation += s.skills.punctuation;
    totalSkills.listening += s.skills.listening;
    totalSkills.speaking += s.skills.speaking;
  });

  const count = students.length;

  return {
    vocabulary: Math.round(totalSkills.vocabulary / count),
    grammar: Math.round(totalSkills.grammar / count),
    punctuation: Math.round(totalSkills.punctuation / count),
    listening: Math.round(totalSkills.listening / count),
    speaking: Math.round(totalSkills.speaking / count),
  };
}

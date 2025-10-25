// Mock data for the Escape Placement Cell game

export const aptitudeQuestions = [
  {
    id: 1,
    question: "If a train runs at 60 km/h and covers 180 km, how much time will it take?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which data structure uses FIFO (First In, First Out)?",
    options: ["Stack", "Queue", "Linked List", "Tree"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "If the average of 5 numbers is 18, what is their total sum?",
    options: ["85", "88", "90", "90"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "In DBMS, which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "If 10110 (binary) is equal to decimal:",
    options: ["20", "22", "24", "26"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "A man spends 1/3 of his salary on rent, 1/5 on food, and saves the rest. If his salary is ₹30,000, how much does he save?",
    options: ["₹12,000", "₹13,000", "₹14,000", "₹15,000"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Which sorting algorithm has the best average time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "A bag contains 5 red balls and 3 blue balls. Probability of picking a blue ball?",
    options: ["3/5", "3/8", "5/8", "2/5"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "In Operating Systems, which scheduling algorithm is non-preemptive?",
    options: ["Round Robin", "Priority Scheduling", "Shortest Job Next (SJN)", "Multilevel Queue"],
    correctAnswer: 2
  }
];

export const codingChallenges = {
  python: {
    problem: `Write a function that returns the factorial of a given number.

Example:
factorial(5) should return 120
factorial(0) should return 1

Requirements:
- Handle edge case for 0
- Use recursive or iterative approach
- Return the factorial as a number`,
    starterCode: `def factorial(n):
    # Your code here
    pass

# Test cases
print(factorial(5))  # Should output: 120
print(factorial(0))  # Should output: 1
print(factorial(3))  # Should output: 6`,
    testCases: [
      { input: 5, expected: 120, description: "factorial(5) = 120" },
      { input: 0, expected: 1, description: "factorial(0) = 1" },
      { input: 3, expected: 6, description: "factorial(3) = 6" }
    ]
  },
  javascript: {
    problem: `Write a function that checks if a string is a palindrome.

Example:
isPalindrome("racecar") should return true
isPalindrome("hello") should return false

Requirements:
- Ignore case sensitivity
- Ignore spaces and punctuation
- Return boolean value`,
    starterCode: `function isPalindrome(str) {
    // Your code here
}

// Test cases
console.log(isPalindrome("racecar"));  // Should output: true
console.log(isPalindrome("hello"));    // Should output: false
console.log(isPalindrome("A man a plan a canal Panama"));  // Should output: true`,
    testCases: [
      { input: "racecar", expected: true, description: "isPalindrome('racecar') = true" },
      { input: "hello", expected: false, description: "isPalindrome('hello') = false" },
      { input: "A man a plan a canal Panama", expected: true, description: "isPalindrome('A man a plan a canal Panama') = true" }
    ]
  },
  java: {
    problem: `Write a method that finds the maximum element in an array.

Example:
findMax([1, 5, 3, 9, 2]) should return 9
findMax([-1, -5, -3]) should return -1

Requirements:
- Handle empty array (return appropriate value)
- Use iterative approach
- Return the maximum integer`,
    starterCode: `public class Main {
    public static int findMax(int[] arr) {
        // Your code here
        return 0;
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(findMax(new int[]{1, 5, 3, 9, 2}));  // Should output: 9
        System.out.println(findMax(new int[]{-1, -5, -3}));      // Should output: -1
    }
}`,
    testCases: [
      { input: [1, 5, 3, 9, 2], expected: 9, description: "findMax([1, 5, 3, 9, 2]) = 9" },
      { input: [-1, -5, -3], expected: -1, description: "findMax([-1, -5, -3]) = -1" },
      { input: [42], expected: 42, description: "findMax([42]) = 42" }
    ]
  },
  cpp: {
    problem: `Write a function that returns the factorial of a given number.

Example:
factorial(5) should return 120
factorial(0) should return 1

Requirements:
- Handle edge case for 0
- Use recursive or iterative approach
- Return the factorial as a number`,
    starterCode: `#include <iostream>
using namespace std;

int factorial(int n) {
    // Your code here
    return 0;
}

int main() {
    // Test cases
    cout << factorial(5) << endl;  // Should output: 120
    cout << factorial(0) << endl;  // Should output: 1
    cout << factorial(3) << endl;  // Should output: 6
    return 0;
}`,
    testCases: [
      { input: 5, expected: 120, description: "factorial(5) = 120" },
      { input: 0, expected: 1, description: "factorial(0) = 1" },
      { input: 3, expected: 6, description: "factorial(3) = 6" }
    ]
  },
  c: {
    problem: `Write a function that returns the factorial of a given number.

Example:
factorial(5) should return 120
factorial(0) should return 1

Requirements:
- Handle edge case for 0
- Use recursive or iterative approach
- Return the factorial as a number`,
    starterCode: `#include <stdio.h>

int factorial(int n) {
    // Your code here
    return 0;
}

int main() {
    // Test cases
    printf("%d\\n", factorial(5));  // Should output: 120
    printf("%d\\n", factorial(0));  // Should output: 1
    printf("%d\\n", factorial(3));  // Should output: 6
    return 0;
}`,
    testCases: [
      { input: 5, expected: 120, description: "factorial(5) = 120" },
      { input: 0, expected: 1, description: "factorial(0) = 1" },
      { input: 3, expected: 6, description: "factorial(3) = 6" }
    ]
  }
};

export const interviewQuestions = [
  {
    id: 1,
    question: "Tell me about yourself and your background in computer science.",
    type: "behavioral",
    expectedKeywords: ["education", "experience", "skills", "projects"]
  },
  {
    id: 2,
    question: "What programming languages are you proficient in?",
    type: "technical",
    expectedKeywords: ["java", "python", "javascript", "c++", "sql"]
  },
  {
    id: 3,
    question: "Explain the difference between object-oriented and functional programming.",
    type: "technical",
    expectedKeywords: ["objects", "classes", "functions", "immutable", "state"]
  },
  {
    id: 4,
    question: "Describe a challenging project you worked on and how you overcame difficulties.",
    type: "behavioral",
    expectedKeywords: ["challenge", "solution", "teamwork", "learning"]
  },
  {
    id: 5,
    question: "What is your approach to debugging code?",
    type: "technical",
    expectedKeywords: ["logs", "breakpoints", "testing", "isolation"]
  },
  {
    id: 6,
    question: "How do you stay updated with technology trends?",
    type: "behavioral",
    expectedKeywords: ["blogs", "courses", "communities", "practice"]
  },
  {
    id: 7,
    question: "Explain the concept of time complexity and space complexity.",
    type: "technical",
    expectedKeywords: ["big o", "algorithm", "efficiency", "scalability"]
  },
  {
    id: 8,
    question: "Tell me about a time when you had to learn a new technology quickly.",
    type: "behavioral",
    expectedKeywords: ["learning", "deadline", "resources", "adaptation"]
  }
];

export const firstInterviewQuestion = interviewQuestions[0];

export const getRandomAptitudeQuestions = (count = 5) => {
  const shuffled = [...aptitudeQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const evaluateAptitudeTest = (answers, questions) => {
  let correct = 0;
  const totalQuestions = questions.length;

  answers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswer) {
      correct++;
    }
  });

  const score = Math.round((correct / totalQuestions) * 100);
  const passed = score >= 60;

  return {
    score,
    correct,
    totalQuestions,
    passed
  };
};

export const evaluateCodingChallenge = (code, language, problemType) => {
  // Simple evaluation based on code content
  let passed = false;
  let feedback = "";

  if (language === 'python') {
    if (code.includes('def factorial') && code.includes('return')) {
      if (code.includes('if n == 0') || code.includes('n == 0')) {
        passed = true;
        feedback = "Good implementation! You correctly handled the base case and used proper function structure.";
      } else {
        feedback = "Good start, but make sure to handle the base case for n=0.";
      }
    } else {
      feedback = "Make sure to define a function called 'factorial' that takes a parameter 'n'.";
    }
  } else if (language === 'javascript') {
    if (code.includes('function isPalindrome') && code.includes('return')) {
      if (code.includes('toLowerCase') || code.includes('replace')) {
        passed = true;
        feedback = "Excellent! You properly handled case sensitivity and string cleaning.";
      } else {
        feedback = "Good function structure, but consider handling case sensitivity and removing spaces/punctuation.";
      }
    } else {
      feedback = "Make sure to define a function called 'isPalindrome' that takes a string parameter.";
    }
  } else if (language === 'java') {
    if (code.includes('public static int findMax') && code.includes('int[] arr')) {
      if (code.includes('for') || code.includes('Math.max')) {
        passed = true;
        feedback = "Great job! You correctly implemented array traversal and maximum finding logic.";
      } else {
        feedback = "Good method signature, but you need to implement the logic to find the maximum value.";
      }
    } else {
      feedback = "Make sure to define a public static method called 'findMax' that takes an int array parameter.";
    }
  } else if (language === 'cpp') {
    if (code.includes('int factorial') && code.includes('return')) {
      if (code.includes('if (n == 0)') || code.includes('n == 0')) {
        passed = true;
        feedback = "Good implementation! You correctly handled the base case and used proper function structure.";
      } else {
        feedback = "Good start, but make sure to handle the base case for n=0.";
      }
    } else {
      feedback = "Make sure to define a function called 'factorial' that takes an int parameter.";
    }
  } else if (language === 'c') {
    if (code.includes('int factorial') && code.includes('return')) {
      if (code.includes('if (n == 0)') || code.includes('n == 0')) {
        passed = true;
        feedback = "Good implementation! You correctly handled the base case and used proper function structure.";
      } else {
        feedback = "Good start, but make sure to handle the base case for n=0.";
      }
    } else {
      feedback = "Make sure to define a function called 'factorial' that takes an int parameter.";
    }
  }

  return {
    passed,
    feedback,
    language
  };
};

export const detectInterests = (answers) => {
  const interests = {
    webDevelopment: 0,
    dataScience: 0,
    mobileDevelopment: 0,
    systemProgramming: 0,
    ai: 0
  };

  answers.forEach(answer => {
    const lowerAnswer = answer.toLowerCase();
    if (lowerAnswer.includes('web') || lowerAnswer.includes('javascript') || lowerAnswer.includes('react') || lowerAnswer.includes('html') || lowerAnswer.includes('css')) {
      interests.webDevelopment++;
    }
    if (lowerAnswer.includes('data') || lowerAnswer.includes('python') || lowerAnswer.includes('machine learning') || lowerAnswer.includes('statistics')) {
      interests.dataScience++;
    }
    if (lowerAnswer.includes('mobile') || lowerAnswer.includes('android') || lowerAnswer.includes('ios') || lowerAnswer.includes('flutter')) {
      interests.mobileDevelopment++;
    }
    if (lowerAnswer.includes('system') || lowerAnswer.includes('c++') || lowerAnswer.includes('embedded') || lowerAnswer.includes('linux')) {
      interests.systemProgramming++;
    }
    if (lowerAnswer.includes('ai') || lowerAnswer.includes('artificial intelligence') || lowerAnswer.includes('neural') || lowerAnswer.includes('deep learning')) {
      interests.ai++;
    }
  });

  return interests;
};

export const generateDynamicQuestions = (interests) => {
  const questions = [];

  if (interests.webDevelopment > 0) {
    questions.push({
      id: 9,
      question: "How would you optimize a slow-loading web page?",
      type: "technical",
      expectedKeywords: ["images", "caching", "minification", "cdn", "lazy loading"]
    });
  }

  if (interests.dataScience > 0) {
    questions.push({
      id: 10,
      question: "Explain the difference between supervised and unsupervised learning.",
      type: "technical",
      expectedKeywords: ["labeled", "unlabeled", "classification", "clustering", "prediction"]
    });
  }

  if (interests.mobileDevelopment > 0) {
    questions.push({
      id: 11,
      question: "What are the key considerations for mobile app performance?",
      type: "technical",
      expectedKeywords: ["battery", "memory", "network", "ui responsiveness", "offline"]
    });
  }

  if (interests.systemProgramming > 0) {
    questions.push({
      id: 12,
      question: "How does memory management work in your preferred programming language?",
      type: "technical",
      expectedKeywords: ["heap", "stack", "garbage collection", "pointers", "allocation"]
    });
  }

  if (interests.ai > 0) {
    questions.push({
      id: 13,
      question: "What are the ethical considerations in AI development?",
      type: "behavioral",
      expectedKeywords: ["bias", "privacy", "transparency", "accountability", "safety"]
    });
  }

  return questions;
};

export const evaluateInterviewAnswers = (answers) => {
  let score = 0;
  const totalQuestions = answers.length;

  answers.forEach((answer, index) => {
    if (!answer || answer.trim().length === 0) return;

    const question = interviewQuestions[index] || {};
    const answerLength = answer.length;
    const hasKeywords = question.expectedKeywords ?
      question.expectedKeywords.some(keyword =>
        answer.toLowerCase().includes(keyword.toLowerCase())
      ) : false;

    // Scoring based on length and keyword presence
    if (answerLength > 100 && hasKeywords) {
      score += 3; // Excellent answer
    } else if (answerLength > 50 && hasKeywords) {
      score += 2; // Good answer
    } else if (answerLength > 20) {
      score += 1; // Basic answer
    }
    // 0 for poor answers
  });

  const maxPossibleScore = totalQuestions * 3;
  const percentage = maxPossibleScore > 0 ? (score / maxPossibleScore) * 100 : 0;
  const passed = percentage >= 60;

  return {
    score: Math.round(percentage),
    correct: score,
    totalQuestions,
    passed
  };
};

export const generateAptitudeAnalysis = (result, questions, answers) => {
  const { score, correct, totalQuestions } = result;

  let analysis = {
    strengths: [],
    weaknesses: [],
    recommendations: []
  };

  // Check if questions and answers are provided
  if (!questions || !answers) {
    analysis.recommendations.push("Unable to analyze aptitude performance - test data not available");
    return analysis;
  }

  // Analyze performance by topic
  const topics = {
    mathematics: 0,
    dataStructures: 0,
    databases: 0,
    computerScience: 0
  };

  questions.forEach((question, index) => {
    const isCorrect = answers[index] === question.correctAnswer;

    if (question.question.toLowerCase().includes('train') || question.question.toLowerCase().includes('average') || question.question.toLowerCase().includes('salary')) {
      topics.mathematics += isCorrect ? 1 : 0;
    } else if (question.question.toLowerCase().includes('data structure') || question.question.toLowerCase().includes('fifo')) {
      topics.dataStructures += isCorrect ? 1 : 0;
    } else if (question.question.toLowerCase().includes('dbms') || question.question.toLowerCase().includes('normal form')) {
      topics.databases += isCorrect ? 1 : 0;
    } else {
      topics.computerScience += isCorrect ? 1 : 0;
    }
  });

  // Strengths
  if (topics.mathematics >= 1) analysis.strengths.push("Strong mathematical reasoning skills");
  if (topics.dataStructures >= 1) analysis.strengths.push("Good understanding of data structures");
  if (topics.databases >= 1) analysis.strengths.push("Solid database concepts knowledge");
  if (topics.computerScience >= 1) analysis.strengths.push("Strong computer science fundamentals");

  // Weaknesses
  if (topics.mathematics === 0) analysis.weaknesses.push("Need to improve mathematical problem-solving");
  if (topics.dataStructures === 0) analysis.weaknesses.push("Data structures concepts need strengthening");
  if (topics.databases === 0) analysis.weaknesses.push("Database management concepts require more study");
  if (topics.computerScience === 0) analysis.weaknesses.push("Computer science fundamentals need review");

  // Recommendations
  if (score < 60) {
    analysis.recommendations.push("Practice more aptitude questions daily");
    analysis.recommendations.push("Focus on understanding basic concepts before attempting questions");
  } else if (score < 80) {
    analysis.recommendations.push("Work on time management during tests");
    analysis.recommendations.push("Review weak topic areas identified above");
  } else {
    analysis.recommendations.push("Maintain consistent practice to stay sharp");
    analysis.recommendations.push("Try more advanced aptitude problems");
  }

  return analysis;
};

export const generateCodingAnalysis = (result, language, code) => {
  const { passed } = result;

  let analysis = {
    strengths: [],
    weaknesses: [],
    recommendations: []
  };

  if (passed) {
    analysis.strengths.push(`Good understanding of ${language} syntax and structure`);
    analysis.strengths.push("Able to implement algorithmic logic correctly");

    if (code.includes('if') || code.includes('for') || code.includes('while')) {
      analysis.strengths.push("Proper use of control structures");
    }

    if (language === 'python' && code.includes('def')) {
      analysis.strengths.push("Good function definition practices");
    } else if (language === 'javascript' && code.includes('function')) {
      analysis.strengths.push("Proper function declaration");
    } else if (language === 'java' && code.includes('public static')) {
      analysis.strengths.push("Correct method signature and modifiers");
    }

    analysis.recommendations.push("Continue practicing different problem types");
    analysis.recommendations.push("Try implementing more complex algorithms");
  } else {
    analysis.weaknesses.push("Code logic needs debugging and correction");

    if (!code.includes('function') && !code.includes('def') && !code.includes('public static')) {
      analysis.weaknesses.push("Missing proper function/method definition");
    }

    if (!code.includes('return')) {
      analysis.weaknesses.push("Missing return statement in function");
    }

    analysis.recommendations.push("Review basic syntax and structure for the chosen language");
    analysis.recommendations.push("Practice with simpler problems first");
    analysis.recommendations.push("Use debugging tools to understand code flow");
  }

  return analysis;
};

export const generateInterviewAnalysis = (result, answers) => {
  const { score, totalQuestions, passed } = result;

  let analysis = {
    overallAssessment: "",
    strengths: [],
    weaknesses: [],
    recommendations: [],
    communicationSkills: [],
    technicalDepth: [],
    aiInsights: "",
    nextSteps: []
  };

  // Overall assessment
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 80) {
    analysis.overallAssessment = "Outstanding interview performance! You demonstrated excellent communication and technical skills.";
  } else if (percentage >= 60) {
    analysis.overallAssessment = "Good interview performance with strong potential. Focus on consistency across all questions.";
  } else if (percentage >= 40) {
    analysis.overallAssessment = "Average interview performance. Work on providing more detailed and relevant answers.";
  } else {
    analysis.overallAssessment = "Interview performance needs significant improvement. Practice structured responses and technical concepts.";
  }

  // Analyze answers
  answers.forEach((answer, index) => {
    if (!answer || answer.trim().length === 0) return;

    const question = interviewQuestions[index];
    const answerLength = answer.length;
    const hasKeywords = question.expectedKeywords.some(keyword =>
      answer.toLowerCase().includes(keyword.toLowerCase())
    );

    // Communication analysis
    if (answerLength > 100) {
      analysis.communicationSkills.push(`Question ${index + 1}: Detailed and comprehensive response`);
    } else if (answerLength > 50) {
      analysis.communicationSkills.push(`Question ${index + 1}: Good response length`);
    } else {
      analysis.weaknesses.push(`Question ${index + 1}: Response could be more detailed`);
    }

    // Technical depth analysis
    if (question.type === 'technical') {
      if (hasKeywords && answerLength > 80) {
        analysis.technicalDepth.push(`Question ${index + 1}: Strong technical explanation`);
      } else if (hasKeywords) {
        analysis.technicalDepth.push(`Question ${index + 1}: Basic technical understanding`);
      } else {
        analysis.technicalDepth.push(`Question ${index + 1}: Needs more technical depth`);
      }
    }
  });

  // Strengths and weaknesses
  const avgAnswerLength = answers.reduce((sum, ans) => sum + (ans ? ans.length : 0), 0) / answers.length;
  if (avgAnswerLength > 80) {
    analysis.strengths.push("Good communication skills with detailed responses");
  } else if (avgAnswerLength < 40) {
    analysis.weaknesses.push("Responses are too brief - expand on your answers");
  }

  const technicalScore = answers.filter((answer, index) => {
    const question = interviewQuestions[index];
    return question.type === 'technical' && answer &&
           question.expectedKeywords.some(keyword =>
             answer.toLowerCase().includes(keyword.toLowerCase())
           );
  }).length;

  const totalTechnical = interviewQuestions.filter(q => q.type === 'technical').length;
  const technicalPercentage = (technicalScore / totalTechnical) * 100;

  if (technicalPercentage >= 75) {
    analysis.strengths.push("Strong technical knowledge and explanation skills");
  } else if (technicalPercentage < 50) {
    analysis.weaknesses.push("Technical explanations need more depth and accuracy");
  }

  // AI Insights
  if (passed) {
    analysis.aiInsights = "Your interview responses show good preparation and communication skills. Continue practicing to refine your delivery.";
  } else {
    analysis.aiInsights = "Focus on understanding key technical concepts and practicing structured responses. Use the STAR method for behavioral questions.";
  }

  // Recommendations
  analysis.recommendations = [
    "Practice answering common interview questions out loud",
    "Use the STAR method (Situation, Task, Action, Result) for behavioral questions",
    "Research company-specific technologies and prepare relevant examples",
    "Record yourself answering questions to improve delivery and confidence"
  ];

  // Next steps
  analysis.nextSteps = [
    "Review technical concepts mentioned in the questions",
    "Practice mock interviews with friends or mentors",
    "Prepare specific examples from your experience",
    "Work on speaking clearly and confidently"
  ];

  return analysis;
};

// Comprehensive analysis generator for all completed tests
export const generateComprehensiveAnalysis = (scores, testData = {}) => {
  const completedTests = [];
  let totalScore = 0;
  let totalPossible = 0;

  // Check which tests are completed
  if (scores.aptitude !== null) {
    completedTests.push('aptitude');
    totalScore += scores.aptitude.score || 0;
    totalPossible += 100;
  }
  if (scores.coding !== null) {
    completedTests.push('coding');
    totalScore += scores.coding.passed ? 100 : 0;
    totalPossible += 100;
  }
  if (scores.interview !== null) {
    completedTests.push('interview');
    const interviewScore = (scores.interview.score / scores.interview.totalQuestions) * 100;
    totalScore += interviewScore;
    totalPossible += 100;
  }

  const overallPercentage = totalPossible > 0 ? (totalScore / totalPossible) * 100 : 0;

  let analysis = {
    overallAssessment: "",
    testBreakdown: [],
    strengths: [],
    weaknesses: [],
    recommendations: [],
    aiInsights: "",
    nextSteps: [],
    completedTests: completedTests.length,
    totalTests: 3,
    overallScore: overallPercentage
  };

  // Overall assessment based on completion and performance
  if (completedTests.length === 3) {
    if (overallPercentage >= 80) {
      analysis.overallAssessment = "Outstanding performance across all placement tests! You demonstrated exceptional skills in aptitude, coding, and interview rounds.";
    } else if (overallPercentage >= 60) {
      analysis.overallAssessment = "Strong performance with good potential for placement success. You have solid technical foundations.";
    } else if (overallPercentage >= 40) {
      analysis.overallAssessment = "Decent performance with room for improvement. Focus on weak areas before interviews.";
    } else {
      analysis.overallAssessment = "Performance needs significant improvement. Consider additional preparation and practice.";
    }
  } else {
    analysis.overallAssessment = `Completed ${completedTests.length} out of 3 tests. ${
      completedTests.length === 0 ? "Start with the aptitude test to begin your placement preparation." :
      completedTests.length === 1 ? "Continue with the remaining tests to get a complete assessment." :
      "Complete the final test for comprehensive feedback."
    }`;
  }

  // Test breakdown
  if (scores.aptitude !== null) {
    const aptitudeScore = scores.aptitude.score || 0;
    analysis.testBreakdown.push({
      test: "Aptitude Test",
      score: aptitudeScore,
      status: aptitudeScore >= 60 ? "Passed" : "Failed",
      feedback: aptitudeScore >= 80 ? "Excellent analytical skills" :
                aptitudeScore >= 60 ? "Good foundation" : "Needs improvement"
    });
  }

  if (scores.coding !== null) {
    const codingPassed = scores.coding.passed;
    analysis.testBreakdown.push({
      test: "Coding Challenge",
      score: codingPassed ? 100 : 0,
      status: codingPassed ? "Passed" : "Failed",
      feedback: codingPassed ? "Good programming fundamentals" : "Code needs debugging"
    });
  }

  if (scores.interview !== null) {
    const interviewScore = (scores.interview.score / scores.interview.totalQuestions) * 100;
    analysis.testBreakdown.push({
      test: "Interview",
      score: interviewScore,
      status: interviewScore >= 60 ? "Passed" : "Failed",
      feedback: interviewScore >= 80 ? "Strong communication skills" :
                interviewScore >= 60 ? "Good responses" : "Needs more detail"
    });
  }

  // Generate detailed analysis for each completed test
  if (scores.aptitude !== null && testData.aptitude) {
    const aptitudeAnalysis = generateAptitudeAnalysis(scores.aptitude, testData.aptitude.questions, testData.aptitude.answers);
    analysis.strengths.push(...aptitudeAnalysis.strengths);
    analysis.weaknesses.push(...aptitudeAnalysis.weaknesses);
  }

  if (scores.coding !== null && testData.coding) {
    const codingAnalysis = generateCodingAnalysis(scores.coding, testData.coding.language, testData.coding.code);
    analysis.strengths.push(...codingAnalysis.strengths);
    analysis.weaknesses.push(...codingAnalysis.weaknesses);
  }

  if (scores.interview !== null && testData.interview) {
    const interviewAnalysis = generateInterviewAnalysis(scores.interview, testData.interview.answers);
    analysis.strengths.push(...interviewAnalysis.strengths);
    analysis.weaknesses.push(...interviewAnalysis.weaknesses);
  }

  // AI Insights based on overall performance
  if (completedTests.length === 3) {
    if (overallPercentage >= 80) {
      analysis.aiInsights = "You have excellent placement potential! Your comprehensive skill set across all areas makes you a strong candidate for technical roles.";
    } else if (overallPercentage >= 60) {
      analysis.aiInsights = "Good overall performance with balanced skills. Focus on weak areas to become a well-rounded candidate.";
    } else {
      analysis.aiInsights = "Significant improvement needed across multiple areas. Create a structured study plan focusing on fundamentals.";
    }
  } else {
    analysis.aiInsights = `Analysis based on ${completedTests.length} completed test${completedTests.length !== 1 ? 's' : ''}. Complete all tests for comprehensive feedback.`;
  }

  // Recommendations based on performance
  if (analysis.weaknesses.length > 0) {
    analysis.recommendations.push(`Address weaknesses in: ${analysis.weaknesses.slice(0, 3).join(', ')}`);
  }

  if (completedTests.length < 3) {
    analysis.recommendations.push("Complete all remaining tests for a full assessment of your placement readiness");
  }

  if (overallPercentage < 60) {
    analysis.recommendations.push("Focus on building fundamental concepts through structured learning and practice");
    analysis.recommendations.push("Consider online courses or bootcamps for weak areas");
  } else {
    analysis.recommendations.push("Practice with real-world projects to apply your knowledge");
    analysis.recommendations.push("Prepare for company-specific interviews and coding challenges");
  }

  // Next steps
  analysis.nextSteps = [
    "Review detailed feedback for each completed test",
    "Practice consistently in weak areas identified",
    "Take mock tests to improve speed and accuracy",
    "Build projects to demonstrate practical skills"
  ];

  if (completedTests.length < 3) {
    analysis.nextSteps.unshift("Complete remaining placement tests");
  }

  return analysis;
};

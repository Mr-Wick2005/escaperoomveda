import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Textarea } from './textarea';
import { codingChallenges, evaluateCodingChallenge } from '../../mock/gameData';
import { Play, CheckCircle, XCircle, Code, Zap, Settings } from 'lucide-react';
import useCountdownTimer from '../../hooks/useCountdownTimer';

const CodingChallenge = ({ onComplete }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(codingChallenges.python.starterCode);
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Use the countdown timer hook for round 2 (20 minutes)
  const {
    timeLeft,
    formattedTime,
    startTimer,
    stopTimer,
    resetTimer,
    isRunning: timerRunning
  } = useCountdownTimer(1200, 'coding-timer', () => {
    // Auto-submit when time runs out
    if (!showResults && !isRunning) {
      handleRunTests();
    }
  });

  // Start timer when component mounts
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const languages = [
    { value: 'python', label: 'Python', icon: '🐍' },
    { value: 'java', label: 'Java', icon: '☕' },
    { value: 'cpp', label: 'C++', icon: '⚡' },
    { value: 'c', label: 'C', icon: '🔧' }
  ];

  const currentChallenge = codingChallenges[selectedLanguage];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(codingChallenges[language].starterCode);
    setTestResults(null);
    setShowResults(false);
  };

  const handleRunTests = async () => {
    setIsRunning(true);

    // Simulate test execution with enhanced feedback
    await new Promise(resolve => setTimeout(resolve, 2500));

    const results = evaluateCodingChallenge(code, selectedLanguage);

    // Enhanced test results with only 3 test cases
    const enhancedResults = {
      ...results,
      language: selectedLanguage,
      testResults: currentChallenge.testCases.map((test, index) => ({
        testCase: index + 1,
        passed: results.passed,
        input: test.input,
        expected: test.expected,
        actual: results.passed ? test.expected : 'Error',
        description: test.description,
        executionTime: `${Math.random() * 50 + 10}ms`
      }))
    };

    setTestResults(enhancedResults);
    setIsRunning(false);
    setShowResults(true);

    if (enhancedResults.passed) {
      setTimeout(() => {
        onComplete(enhancedResults, code, selectedLanguage, currentChallenge);
      }, 3000);
    }
  };

  const renderLanguageSelector = () => (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
        <Settings className="w-4 h-4" />
        Select Language
      </h4>
      <div className="flex gap-2 flex-wrap">
        {languages.map((lang) => (
          <button
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all text-sm ${
              selectedLanguage === lang.value
                ? 'bg-cyan-600 text-white border-cyan-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-cyan-400'
            }`}
          >
            <span className="text-lg">{lang.icon}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderProblemStatement = () => (
    <div className="flex-1 flex flex-col">
      <Card className="flex-1 border-l-4 border-l-blue-500">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Code className="w-5 h-5" />
            Problem Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="whitespace-pre-line text-slate-700 leading-relaxed text-sm mb-4">
            {currentChallenge.problem}
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2 text-sm">Test Cases to Pass:</h5>
            <div className="space-y-1 text-xs text-blue-700">
              {currentChallenge.testCases.map((test, index) => (
                <div key={index} className="font-mono">
                  • {test.description}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Results - Show when available */}
      {showResults && testResults && (
        <Card className="mt-4">
          <CardHeader className="pb-3">
            <CardTitle className={`flex items-center gap-2 text-sm ${testResults.passed ? 'text-green-600' : 'text-red-600'}`}>
              {testResults.passed ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              Test Results
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className={`p-3 rounded-lg mb-4 ${testResults.passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-semibold ${testResults.passed ? 'text-green-800' : 'text-red-800'}`}>
                {testResults.passed ? '🎉 All Tests Passed!' : '❌ Tests Failed'}
              </p>
              {testResults.passed && (
                <p className="text-green-700 text-sm mt-1">
                  You earned Key B! 🔑
                </p>
              )}
            </div>

            <div className="space-y-2 max-h-40 overflow-y-auto">
              {testResults.testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-2 rounded border-l-4 text-xs ${
                    result.passed
                      ? 'bg-green-50 border-l-green-500 border border-green-200'
                      : 'bg-red-50 border-l-red-500 border border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      {result.passed ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <XCircle className="w-3 h-3 text-red-600" />
                      )}
                      <span className="font-semibold">Test {result.testCase}</span>
                    </div>
                    <span className="text-xs text-gray-500">{result.executionTime}</span>
                  </div>
                  <div className="text-xs">
                    <div>Expected: <span className="font-mono bg-gray-100 px-1 rounded">{result.expected}</span></div>
                    <div>Got: <span className={`font-mono px-1 rounded ${result.passed ? 'bg-green-100' : 'bg-red-100'}`}>{result.actual}</span></div>
                  </div>
                </div>
              ))}
            </div>

            {!testResults.passed && (
              <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                <div className="font-semibold text-blue-800 mb-1">💡 Tips:</div>
                <ul className="text-blue-700 space-y-0.5">
                  <li>• Check base case: factorial(0) = 1</li>
                  <li>• Verify return type</li>
                  <li>• Test manually first</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderCodeEditor = () => (
    <div className="flex-1 flex flex-col">
      <Card className="flex-1 border-2 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-600" />
              Code Editor
            </span>
            <div className="text-xs text-gray-500">
              {code.split('\n').length} lines
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 flex-1 flex flex-col">
          <div className="mb-3 text-sm text-slate-600">
            Language: <strong>{languages.find(l => l.value === selectedLanguage)?.label}</strong>
          </div>

          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm flex-1 bg-slate-900 text-green-400 border-slate-700 resize-none min-h-80"
            placeholder="Write your code here..."
          />

          <div className="mt-4 flex justify-end">
            <Button
              onClick={handleRunTests}
              disabled={isRunning || !code.trim()}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-semibold"
            >
              <Play className="w-4 h-4 mr-2" />
              {isRunning ? 'Running...' : 'Run Tests'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (showResults && testResults?.passed) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">Challenge Completed!</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">All 3 Tests Passed</span>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-800 font-semibold">You earned Key B! 🔑</p>
                <p className="text-green-700 text-sm mt-1">Language: {languages.find(l => l.value === selectedLanguage)?.label}</p>
              </div>

              <p className="text-slate-600">
                Outstanding! Your factorial function works perfectly across all test cases.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Coding Challenge</h2>
        <p className="text-slate-600 text-sm">
          Solve the problem by writing code in your preferred language
        </p>
        <div className="mt-3 flex justify-center">
          <div className={`inline-flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-lg border border-slate-700 ${timeLeft <= 60 ? 'bg-red-900 border-red-700' : ''}`}>
            <div className={`w-2 h-2 rounded-full ${timeLeft <= 60 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
            <span className={`font-mono text-lg font-bold ${timeLeft <= 60 ? 'text-red-400' : 'text-white'}`}>
              {formattedTime}
            </span>
          </div>
        </div>
      </div>

      {renderLanguageSelector()}

      <div className="flex-1 flex gap-6">
        {/* Left Side - Problem Statement */}
        <div className="flex-1">
          {renderProblemStatement()}
        </div>

        {/* Right Side - Code Editor */}
        <div className="flex-1">
          {renderCodeEditor()}
        </div>
      </div>
    </div>
  );
};

export default CodingChallenge;
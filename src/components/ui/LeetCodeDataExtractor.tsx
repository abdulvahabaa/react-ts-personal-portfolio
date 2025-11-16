import React, { useState } from 'react';

interface ContributionData {
  date: string;
  count: number;
}

interface LeetCodeDataExtractorProps {
  onDataExtracted: (data: ContributionData[]) => void;
}

export function LeetCodeDataExtractor({
  onDataExtracted,
}: LeetCodeDataExtractorProps) {
  const [username, setUsername] = useState('Dinesh_coder30');
  const [isExtracting, setIsExtracting] = useState(false);
  const [manualData, setManualData] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  const extractFromLeetCode = async () => {
    setIsExtracting(true);

    try {
      // Try to fetch from LeetCode's public API
      const response = await fetch(
        `https://leetcode-stats-api.herokuapp.com/${username}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log('LeetCode API Data:', data);

        // This API doesn't provide submission history, but we can use it for stats
        alert(
          `Found your LeetCode profile! Total solved: ${data.totalSolved}. Please use manual input for submission history.`
        );
        setShowManualInput(true);
      } else {
        throw new Error('Profile not found');
      }
    } catch (error) {
      console.error('Error extracting data:', error);
      alert('Could not automatically fetch data. Please use manual input.');
      setShowManualInput(true);
    } finally {
      setIsExtracting(false);
    }
  };

  const processManualData = () => {
    try {
      const lines = manualData.trim().split('\n');
      const data: ContributionData[] = [];

      lines.forEach(line => {
        const [date, count] = line.split(',').map(s => s.trim());
        if (date && count && !isNaN(Number(count))) {
          data.push({
            date: date,
            count: Number(count),
          });
        }
      });

      if (data.length > 0) {
        onDataExtracted(data);
        alert(`Successfully processed ${data.length} submission records!`);
      } else {
        alert('No valid data found. Please check the format.');
      }
    } catch (error) {
      alert('Error processing data. Please check the format.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Get Your Real LeetCode Data
      </h3>

      <div className="space-y-4">
        {/* Automatic Extraction */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            LeetCode Username
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your LeetCode username"
            />
            <button
              onClick={extractFromLeetCode}
              disabled={isExtracting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isExtracting ? 'Extracting...' : 'Extract Data'}
            </button>
          </div>
        </div>

        {/* Manual Input */}
        <div>
          <button
            onClick={() => setShowManualInput(!showManualInput)}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {showManualInput ? 'Hide' : 'Show'} Manual Input
          </button>

          {showManualInput && (
            <div className="mt-3">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Manual Data Input (Format: YYYY-MM-DD, count)
              </label>
              <textarea
                value={manualData}
                onChange={e => setManualData(e.target.value)}
                className="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder={`2024-01-15, 2
2024-01-16, 1
2024-01-17, 3
# Add your submission dates here...`}
              />
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <p>
                  Format: One line per day, date and count separated by comma
                </p>
                <p>
                  Example: 2024-01-15, 2 (means 2 problems solved on Jan 15,
                  2024)
                </p>
              </div>
              <button
                onClick={processManualData}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Process Data
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            How to get your data:
          </h4>
          <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>1. Go to your LeetCode profile</li>
            <li>2. Check your submission history or activity calendar</li>
            <li>3. Note down dates and number of problems solved each day</li>
            <li>4. Use the manual input above to add your data</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

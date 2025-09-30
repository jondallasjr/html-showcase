import React, { useState, useMemo } from 'react';
import { Calendar, Upload, Printer } from 'lucide-react';

const GanttChartViewer = () => {
  const [rawData, setRawData] = useState('');
  const [tasks, setTasks] = useState([]);
  const [viewMode, setViewMode] = useState('input');
  const [orientation, setOrientation] = useState('landscape');

  const parseData = (data) => {
    const lines = data.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split('\t');
    const nameIdx = headers.indexOf('Name');
    const startIdx = headers.indexOf('Start Date');
    const endIdx = headers.indexOf('End Date');
    const levelIdx = headers.indexOf('level');
    const statusIdx = headers.indexOf('Status');

    const parsedTasks = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split('\t');
      if (cols.length > Math.max(nameIdx, startIdx, endIdx)) {
        const name = cols[nameIdx];
        const startDate = cols[startIdx];
        const endDate = cols[endIdx];
        
        if (!startDate || !endDate) continue;

        let level = 1;
        if (levelIdx >= 0 && cols[levelIdx]) {
          level = parseInt(cols[levelIdx]) || 1;
        } else {
          try {
            const jsonStr = cols[cols.length - 1];
            if (jsonStr && jsonStr.includes('"level"')) {
              const json = JSON.parse(jsonStr);
              level = json.level || 1;
            }
          } catch (e) {}
        }

        const status = statusIdx >= 0 ? cols[statusIdx] : 'Not Started';

        parsedTasks.push({
          name,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          level,
          status
        });
      }
    }

    return parsedTasks;
  };

  const handleParse = () => {
    const parsed = parseData(rawData);
    setTasks(parsed);
    if (parsed.length > 0) {
      setViewMode('chart');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const { minDate, maxDate, monthColumns } = useMemo(() => {
    if (tasks.length === 0) return { minDate: null, maxDate: null, monthColumns: [] };

    const min = new Date(Math.min(...tasks.map(t => t.startDate)));
    const max = new Date(Math.max(...tasks.map(t => t.endDate)));

    const months = [];
    const current = new Date(min.getFullYear(), min.getMonth(), 1);
    while (current <= max) {
      months.push({
        date: new Date(current),
        label: current.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      });
      current.setMonth(current.getMonth() + 1);
    }

    return { minDate: min, maxDate: max, monthColumns: months };
  }, [tasks]);

  const getTaskPosition = (task) => {
    if (!minDate || !maxDate) return { left: 0, width: 0 };

    const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);
    const taskStart = (task.startDate - minDate) / (1000 * 60 * 60 * 24);
    const taskDuration = (task.endDate - task.startDate) / (1000 * 60 * 60 * 24);

    const left = (taskStart / totalDays) * 100;
    const width = (taskDuration / totalDays) * 100;

    return { left: `${left}%`, width: `${Math.max(width, 0.5)}%` };
  };

  const getStatusColor = (status) => {
    if (status.includes('Not Started')) return 'bg-gray-400';
    if (status.includes('In Progress')) return 'bg-blue-500';
    if (status.includes('Complete')) return 'bg-green-500';
    return 'bg-gray-400';
  };

  if (viewMode === 'input') {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Gantt Chart Viewer</h1>
            </div>
            
            <p className="text-gray-600 mb-4">
              Paste your Coda.io data below (tab-separated format):
            </p>
            
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your data here..."
              value={rawData}
              onChange={(e) => setRawData(e.target.value)}
            />
            
            <button
              onClick={handleParse}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Generate Gantt Chart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: ${orientation === 'landscape' ? 'landscape' : 'portrait'};
            margin: 0.5in;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-container {
            width: 100%;
            margin: 0;
            padding: 0;
            background: white;
          }
          
          .gantt-table {
            font-size: ${orientation === 'landscape' ? '8pt' : '7pt'};
            page-break-inside: avoid;
          }
          
          .task-row {
            page-break-inside: avoid;
            height: auto;
            min-height: 24px;
          }
          
          .task-bar {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          h1 {
            font-size: 14pt;
            margin-bottom: 8pt;
          }
          
          .legend {
            font-size: 8pt;
            margin-top: 12pt;
          }
        }
        
        @media screen {
          .print-container {
            background: white;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 p-4 print-container">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 no-print">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-800">Gantt Chart</h1>
                <span className="text-sm text-gray-500">({tasks.length} tasks)</span>
              </div>
              <div className="flex gap-2 items-center flex-wrap">
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded hover:border-gray-400 text-sm"
                >
                  <option value="landscape">Landscape</option>
                  <option value="portrait">Portrait</option>
                </select>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print / PDF
                </button>
                <button
                  onClick={() => setViewMode('input')}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                >
                  Load New Data
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden gantt-table">
            {/* Print Header */}
            <div className="p-4 border-b border-gray-200 print:block hidden">
              <h1 className="text-lg font-bold text-gray-800">Project Gantt Chart</h1>
              <p className="text-sm text-gray-600 mt-1">
                {minDate?.toLocaleDateString()} - {maxDate?.toLocaleDateString()}
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                {/* Timeline header */}
                <div className="flex border-b-2 border-gray-300 bg-gray-50">
                  <div className="w-64 flex-shrink-0 p-2 font-semibold text-gray-700 border-r border-gray-300 text-sm">
                    Task Name
                  </div>
                  <div className="flex-1 flex">
                    {monthColumns.map((month, idx) => (
                      <div key={idx} className="flex-1 p-2 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">
                        {month.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasks */}
                <div className="divide-y divide-gray-200">
                  {tasks.map((task, idx) => {
                    const position = getTaskPosition(task);
                    const isParent = task.level === 1;
                    
                    return (
                      <div key={idx} className="flex hover:bg-gray-50 task-row">
                        <div className={`w-64 flex-shrink-0 p-2 border-r border-gray-200 ${isParent ? 'font-semibold bg-gray-50' : 'pl-6'}`}>
                          <div className="truncate text-xs text-gray-700" title={task.name}>
                            {task.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {task.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {task.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                        <div className="flex-1 relative py-3">
                          <div
                            className={`absolute h-6 ${getStatusColor(task.status)} rounded ${isParent ? 'opacity-80' : ''} task-bar`}
                            style={position}
                            title={`${task.name}\n${task.startDate.toLocaleDateString()} - ${task.endDate.toLocaleDateString()}`}
                          >
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white rounded-lg shadow-lg p-4 legend">
            <h3 className="font-semibold text-gray-700 mb-2 text-sm">Legend</h3>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-xs text-gray-600">Not Started</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-xs text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-xs text-gray-600">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanttChartViewer;
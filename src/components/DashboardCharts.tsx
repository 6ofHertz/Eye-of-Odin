
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';

interface ExposureData {
  name: string;
  value: number;
  fill: string;
}

interface FindingsData {
  name: string;
  count: number;
}

const EXPOSURE_COLORS = ['#10B981', '#8B5CF6', '#EF4444'];
const FINDINGS_COLORS = ['#8B5CF6', '#6366F1', '#4F46E5', '#4338CA', '#3730A3'];

interface DashboardChartsProps {
  exposureData: ExposureData[];
  findingsData: FindingsData[];
}

export const DashboardCharts: React.FC<DashboardChartsProps> = ({
  exposureData,
  findingsData
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Exposure Level Pie Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-medium mb-4 text-slate-800 dark:text-slate-200">Exposure Distribution</h3>
        <ChartContainer 
          config={{
            low: { color: '#10B981' },
            medium: { color: '#8B5CF6' },
            high: { color: '#EF4444' },
          }}
          className="aspect-[4/3] h-64"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={exposureData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {exposureData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Findings Bar Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-medium mb-4 text-slate-800 dark:text-slate-200">Findings by Source</h3>
        <ChartContainer 
          config={{
            count: { color: '#8B5CF6' }
          }}
          className="aspect-[4/3] h-64"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={findingsData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 40,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;

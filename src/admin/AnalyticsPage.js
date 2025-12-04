import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";
import "./AnalyticsPage.css";

const peakHours = [
  { time: "08:00", count: 2 },
  { time: "10:00", count: 5 },
  { time: "12:00", count: 8 },
  { time: "14:00", count: 6 },
  { time: "16:00", count: 9 },
  { time: "18:00", count: 7 },
];

const peakDays = [
  { day: "Mon", count: 5 },
  { day: "Tue", count: 6 },
  { day: "Wed", count: 4 },
  { day: "Thu", count: 7 },
  { day: "Fri", count: 8 },
  { day: "Sat", count: 9 },
  { day: "Sun", count: 6 },
];

const peakWeeks = [
  { week: "Week 1", count: 34 },
  { week: "Week 2", count: 29 },
  { week: "Week 3", count: 40 },
  { week: "Week 4", count: 38 },
];

const employeePerf = [
  { name: "Sarah", count: 8 },
  { name: "Jessica", count: 6 },
  { name: "Amanda", count: 5 },
];

function AnalyticsPage() {
  return (
    <div className="analytics-container">
      <h1 className="page-title">Analytics & Performance</h1>

      <div className="grid-2">
        {/* Peak Hours */}
        <div className="chart-card">
          <h3>Peak Hours of the Day</h3>
          <p>Customer traffic throughout the day</p>
          <LineChart width={460} height={260} data={peakHours}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#C77DFF" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Peak Days */}
        <div className="chart-card">
          <h3>Peak Days of the Week</h3>
          <p>Weekly customer distribution</p>
          <BarChart width={460} height={260} data={peakDays}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#9D4EDD" />
          </BarChart>
        </div>
      </div>

      <div className="grid-2">
        {/* Peak Weeks */}
        <div className="chart-card">
          <h3>Peak Weeks Trend</h3>
          <p>Monthly trend analysis</p>
          <BarChart width={460} height={260} data={peakWeeks}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#B983FF" />
          </BarChart>
        </div>

        {/* Employee Performance */}
        <div className="chart-card">
          <h3>Employee Performance Comparison</h3>
          <p>Customers attended by each team member</p>
          <BarChart layout="vertical" width={460} height={260} data={employeePerf}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#BF2AF0" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
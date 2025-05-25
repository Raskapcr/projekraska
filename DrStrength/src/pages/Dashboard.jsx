import { FaDollarSign, FaShoppingCart, FaBoxOpen, FaUserPlus } from "react-icons/fa";
import { TbDroplet, TbHeartRateMonitor, TbHeartbeat } from "react-icons/tb";
import PageHeader from "../components/PageHeader";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Dummy data
  const visitorData = [
    { month: "Jan", loyal: 300, new: 200, unique: 250 },
    { month: "Feb", loyal: 320, new: 210, unique: 260 },
    { month: "Mar", loyal: 330, new: 220, unique: 270 },
    { month: "Apr", loyal: 350, new: 230, unique: 280 },
    { month: "May", loyal: 370, new: 240, unique: 290 },
    { month: "Jun", loyal: 390, new: 250, unique: 300 },
    { month: "Jul", loyal: 370, new: 300, unique: 320 },
    { month: "Aug", loyal: 340, new: 280, unique: 310 },
    { month: "Sep", loyal: 320, new: 270, unique: 300 },
  ];

  const revenueData = [
    { day: "Monday", online: 12000, offline: 8000 },
    { day: "Tuesday", online: 14000, offline: 6000 },
    { day: "Wednesday", online: 16000, offline: 9000 },
    { day: "Thursday", online: 10000, offline: 5000 },
    { day: "Friday", online: 13000, offline: 7000 },
    { day: "Saturday", online: 17000, offline: 6000 },
    { day: "Sunday", online: 22000, offline: 7000 },
  ];

  const satisfactionData = [
    { month: "Jan", lastMonth: 3000, thisMonth: 4500 },
    { month: "Feb", lastMonth: 3200, thisMonth: 4600 },
    { month: "Mar", lastMonth: 3100, thisMonth: 4700 },
    { month: "Apr", lastMonth: 3300, thisMonth: 4400 },
    { month: "May", lastMonth: 3400, thisMonth: 4800 },
  ];

  const targetRealityData = [
    { month: "Jan", reality: 8000, target: 12000 },
    { month: "Feb", reality: 8500, target: 12000 },
    { month: "Mar", reality: 8700, target: 12000 },
    { month: "Apr", reality: 8800, target: 12000 },
    { month: "May", reality: 8900, target: 12000 },
    { month: "Jun", reality: 9100, target: 12000 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <PageHeader 
        title="Dashboard" 
        currentPage="Sales Summary" 
        buttonLabel="Export"
      />

      {/* Health Monitoring Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <HealthStatCard 
          icon={<TbDroplet size={28} />} 
          title="Blood Sugar" 
          value="80 mg/dL" 
          status="Normal" 
          color="bg-orange-100" 
          lineColor="text-orange-400"
        />
        <HealthStatCard 
          icon={<TbHeartRateMonitor size={28} />} 
          title="Heart Rate" 
          value="98 bpm" 
          status="Normal" 
          color="bg-red-100" 
          lineColor="text-red-400"
        />
        <HealthStatCard 
          icon={<TbHeartbeat size={28} />} 
          title="Blood Pressure" 
          value="102 / 72 mmHg" 
          status="Normal" 
          color="bg-blue-100" 
          lineColor="text-blue-400"
        />
      </div>

      {/* Stat Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard icon={<FaDollarSign />} title="$1k" subtitle="Total Sales" change="+8% from yesterday" color="bg-red-300" />
        <StatCard icon={<FaShoppingCart />} title="300" subtitle="Total Order" change="+5% from yesterday" color="bg-orange-300" />
        <StatCard icon={<FaBoxOpen />} title="5" subtitle="Product Sold" change="+1.2% from yesterday" color="bg-green-300" />
        <StatCard icon={<FaUserPlus />} title="8" subtitle="New Customers" change="0.5% from yesterday" color="bg-purple-300" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Visitor Insights */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Visitor Insights</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="loyal" stroke="#8B5CF6" strokeWidth={2} />
              <Line type="monotone" dataKey="new" stroke="#EF4444" strokeWidth={2} />
              <Line type="monotone" dataKey="unique" stroke="#22C55E" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Total Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="online" fill="#3B82F6" />
              <Bar dataKey="offline" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Customer Satisfaction */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Satisfaction</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="lastMonth" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="thisMonth" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Target vs Reality */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Target vs Reality</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={targetRealityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reality" fill="#22C55E" />
              <Bar dataKey="target" fill="#FACC15" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Component for each stat card
function StatCard({ icon, title, subtitle, change, color }) {
  return (
    <div className="flex items-center space-x-4 bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
      <div className={`${color} text-white rounded-full p-4 text-2xl`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-gray-800">{title}</span>
        <span className="text-sm text-gray-500">{subtitle}</span>
        <span className="text-xs text-green-500">{change}</span>
      </div>
    </div>
  );
}

// Component for each health card
function HealthStatCard({ icon, title, value, status, color, lineColor }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col space-y-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div className={`${color} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <span className="text-green-500 text-xs">{status}</span>
      </div>
      <div className="h-8">
        <div className={`w-full h-full ${lineColor}`}>
          {/* Simulasi grafik kecil */}
        </div>
      </div>
    </div>
  );
}

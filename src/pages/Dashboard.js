// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/Dashboard.scss';
import DashboardHeader from '../components/DashboardHeader';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // New toggle state

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        navigate('/');
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, [navigate]);

  return (
    <div className="dashboard-container" dir="rtl">
      <DashboardHeader user={user} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <h2 className="brand">صديقي</h2>
          <nav className="nav">
            <button className="nav-btn active">لوحة التحكم</button>
            <button className="nav-btn">تكوين الوكيل</button>
            <button className="nav-btn">المحادثات</button>
            <button className="nav-btn">الإعدادات</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className="page-title">لوحة التحكم</h1>

          <div className="stats-grid">
            <div className="stat-box"><span>إجمالي المحادثات</span><strong>2150</strong></div>
            <div className="stat-box"><span>متوسط وقت الاستجابة</span><strong>&lt;200ms</strong></div>
            <div className="stat-box"><span>معدل الحل</span><strong>92%</strong></div>
            <div className="stat-box"><span>رضا العملاء</span><strong>95%</strong></div>
          </div>

          <div className="charts-grid">
            <div className="chart-card"><h2 className="chart-title">المحادثات عبر الزمن</h2></div>
            <div className="chart-card"><h2 className="chart-title">توزيع المنصات</h2></div>
          </div>
        </main>
      </div>
    </div>
  );
}

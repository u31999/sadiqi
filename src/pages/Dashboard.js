// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, useLocation, useNavigate as useRouterNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/Dashboard.scss';
import DashboardHeader from '../components/DashboardHeader';
import AgentConfig from '../components/dasboard-component/AgentConfig';
import MainDashboard from '../components/dasboard-component/MainDashboard';
import ConversationPage from '../components/dasboard-component/ConversationPage';
import DashboardPlaceholder from '../components/DashboardPlaceholder';

// ✅ Sidebar Component
function Sidebar({ sidebarOpen }) {
  const navigate = useRouterNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`sidebar ${
        window.innerWidth < 768 ? (sidebarOpen ? 'open' : 'closed') : 'open'
      }`}
    >
      <h2 className="brand">صديقي</h2>
      <nav className="nav">
        <button className={`nav-btn ${isActive('/') ? 'active' : ''}`} onClick={() => navigate('/dashboard')}>
          لوحة التحكم
        </button>
        <button className={`nav-btn ${isActive('/agent-config') ? 'active' : ''}`} onClick={() => navigate('/dashboard/agent-config')}>
          تكوين الوكيل
        </button>
        <button className={`nav-btn ${isActive('/agent-config') ? 'active' : ''}`} onClick={() => navigate('/dashboard/conversation')}>
          المحادثات</button>
        <button className="nav-btn">الإعدادات</button>
      </nav>
    </aside>
  );
}





export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const underCreation = true;

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

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


  if (underCreation) {
    return <DashboardPlaceholder />
  }
  else {
  return (
    <div className="dashboard-container" dir="rtl">
      <DashboardHeader user={user} toggleSidebar={toggleSidebar} />
      <div className="dashboard-body">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/agent-config" element={<AgentConfig />} />
            <Route path="/conversation" element={<ConversationPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
}



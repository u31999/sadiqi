// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/Dashboard.scss';
import DashboardHeader from '../components/DashboardHeader';
import { FaCommentAlt } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import ConversationsChart from '../components/charts/ConversationsChart';
import PlatformPieChart from '../components/charts/PlatformPieChart';
import ROIBarChart from '../components/charts/ROIBarChart';
import RecentConversations from '../components/charts/RecentConversations';


function MainDashboard({sidebarOpen}) {
  return(
     <div className="dashboard-body">
        {/* Sidebar */}
       <aside
  className={`sidebar ${
    window.innerWidth < 768 ? (sidebarOpen ? 'open' : 'closed') : 'open'
  }`}
>

          
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
            <div className="stat-box">
              <div className='ic-continer'>
                  <FaCommentAlt style={{ color: '#3b82f6', fontSize: '24px' }} />
              </div>
              <div className='tx-continer'>
                 <span>إجمالي المحادثات</span>
              <strong>2150</strong>
              </div>
             </div>
            <div className="stat-box">
              <div className='ic-continer'>
                <FaRobot style={{ color: '#10b981', fontSize: '24px' }} />
              </div>
              <div className='tx-continer'>
                <span>متوسط وقت الاستجابة</span><strong>&lt;200ms</strong>
              </div>
              </div>
            <div className="stat-box">
              <div className='ic-continer'>
                  <FaChartBar style={{ color: '#f59e0b', fontSize: '24px' }} />
              </div>
              <div className='tx-continer'>
              <span>       
              معدل الحل</span><strong>92%</strong>
              </div>
              </div>
            <div className="stat-box">
              <div className='ic-continer'>
                    <FaRobot style={{ color: '#ef4444', fontSize: '24px' }} />
              </div>
              <div className='tx-continer'>
                  <span>
              رضا العملاء</span><strong>95%</strong>
              </div>
              </div>
          </div>

          <div className="charts-grid">
              <ConversationsChart />
            <PlatformPieChart />                
           <ROIBarChart />            
          <RecentConversations />
           </div>
         
        </main>
       
      </div>
  )

}


export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // New toggle state

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

  return (
    <div className="dashboard-container" dir="rtl">
      <DashboardHeader user={user} toggleSidebar={toggleSidebar}/>
      <MainDashboard sidebarOpen={sidebarOpen} />

     
    </div>
  );
}

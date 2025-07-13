import { FaCommentAlt } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import ConversationsChart from '../dasboard-component/charts/ConversationsChart';
import PlatformPieChart from '../dasboard-component/charts/PlatformPieChart';
import ROIBarChart from '../dasboard-component/charts/ROIBarChart';
import RecentConversations from '../dasboard-component/charts/RecentConversations';

export default function  MainDashboard() {
  return(
     <div className="dashboard-body">
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
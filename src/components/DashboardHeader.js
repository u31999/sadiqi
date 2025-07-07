// src/components/DashboardHeader.jsx
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { FaSun, FaUserCircle } from 'react-icons/fa';
import '../styles/DashboardHeader.scss';

export default function DashboardHeader({toggleSidebar}) {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <header className="dashboard-header">
      <div className="left">
        <h2 className="logo">SADIQI</h2>
        <button className="menu-toggle"  onClick={toggleSidebar}>☰</button>
        <input type="text" className="search-input" placeholder="بحث..." />
      </div>

      <div className="right">
        <FaSun className="icon sun-icon" />

        {user ? (
          <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FaUserCircle className="avatar" />
            <span className="email">{user.email}</span>

            {dropdownOpen && (
              <ul className="dropdown">
                <li>الملف الشخصي</li>
                <li>الإعدادات</li>
                <li onClick={() => supabase.auth.signOut()}>تسجيل الخروج</li>
              </ul>
            )}
          </div>
        ) : (
          <span>جارٍ التحميل...</span>
        )}
      </div>
    </header>
  );
}

// src/pages/Dashboard.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', direction: 'rtl', textAlign: 'right' }}>
      <h2>مرحبا بك</h2>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>تسجيل الخروج</button>
    </div>
  );
}

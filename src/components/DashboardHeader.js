import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/DashboardHeader.scss'

export default function DashboardHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    fetchUser();
  }, []);

  return (
    <header className="dashboard-header">
      <div className="left">
        <h2>SADIQI</h2>
      </div>
      <div className="right">
        {user ? (
          <div className="user-info">
            <span>{user.email}</span>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </header>
  );
}

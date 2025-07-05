import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthModal.scss'

export default function AuthModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            joined_at: new Date().toISOString(),
          },
        },
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        alert('Check your email to confirm registration.');
        onClose();
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        navigate('/dashboard');
      }
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{isSignUp ? 'إنشاء حساب' : 'تسجيل الدخول'}</h2>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isSignUp ? 'تسجيل' : 'دخول'}
          </button>
        </form>
        <button className="google-btn" onClick={handleGoogleLogin}>
          تسجيل باستخدام Google
        </button>
        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle">
          {isSignUp ? 'لديك حساب؟ تسجيل الدخول' : 'ليس لديك حساب؟ إنشاء حساب'}
        </p>
      </div>
    </div>
  );
}
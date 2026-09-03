import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../api/client";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const submit = async (event) => { event.preventDefault(); setSubmitting(true); try { const user = await login(form); toast.success("Welcome back!"); navigate(user.role === "admin" ? "/admin" : location.state?.from?.pathname || "/"); } catch (error) { toast.error(getErrorMessage(error)); } finally { setSubmitting(false); } };
  return <main className="auth-page"><section className="auth-container"><div className="auth-art" aria-hidden="true" /><div className="auth-form-panel"><h1>Welcome back</h1><p className="auth-subtitle">Log in to continue your natural care ritual.</p><form onSubmit={submit}><div className="auth-input"><label htmlFor="login-email">Email address</label><input id="login-email" required type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></div><div className="auth-input"><label htmlFor="login-password">Password</label><input id="login-password" required type="password" autoComplete="current-password" placeholder="Enter your password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /></div><button className="auth-submit" disabled={submitting}>{submitting ? "Logging in…" : "Log in"}</button></form><p className="auth-switch">New to OrganicSoap? <Link to="/signup">Create an account</Link></p></div></section></main>;
}

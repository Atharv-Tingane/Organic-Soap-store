import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../api/client";
import "./Auth.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const submit = async (event) => { event.preventDefault(); setSubmitting(true); try { await signup(form); toast.success("Account created successfully"); navigate("/"); } catch (error) { toast.error(getErrorMessage(error)); } finally { setSubmitting(false); } };
  const fields = [["name", "Full name", "text", "Your name"], ["email", "Email address", "email", "you@example.com"], ["phone", "Phone number", "tel", "Your phone number"], ["password", "Password", "password", "At least 8 characters"]];
  return <main className="auth-page"><section className="auth-container"><div className="auth-art" aria-hidden="true" /><div className="auth-form-panel"><h1>Create account</h1><p className="auth-subtitle">Join OrganicSoap for a gentler daily ritual.</p><form onSubmit={submit}>{fields.map(([key, label, type, placeholder]) => <div className="auth-input" key={key}><label htmlFor={`signup-${key}`}>{label}</label><input id={`signup-${key}`} required minLength={key === "password" ? 8 : undefined} type={type} autoComplete={key === "password" ? "new-password" : key} placeholder={placeholder} value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} /></div>)}<button className="auth-submit" disabled={submitting}>{submitting ? "Creating account…" : "Create account"}</button></form><p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p></div></section></main>;
}

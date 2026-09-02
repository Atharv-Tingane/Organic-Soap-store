import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../api/client";

export default function Login() {
  const { login } = useAuth(); const navigate = useNavigate(); const location = useLocation(); const [form, setForm] = useState({ email: "", password: "" }); const [submitting, setSubmitting] = useState(false);
  const submit = async (event) => { event.preventDefault(); setSubmitting(true); try { const user = await login(form); toast.success("Welcome back!"); navigate(user.role === "admin" ? "/admin" : location.state?.from?.pathname || "/"); } catch (error) { toast.error(getErrorMessage(error)); } finally { setSubmitting(false); } };
  return <main className="min-h-[70vh] bg-[#f8fbf8] px-4 py-16"><form onSubmit={submit} className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm"><p className="font-semibold uppercase tracking-[.25em] text-green-600">Welcome back</p><h1 className="mt-2 text-3xl font-bold text-[#173b2c]">Log in</h1><label className="mt-7 block text-sm font-semibold">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-xl border p-3" /></label><label className="mt-4 block text-sm font-semibold">Password<input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-2 w-full rounded-xl border p-3" /></label><button disabled={submitting} className="mt-7 w-full rounded-xl bg-green-600 py-3 font-semibold text-white disabled:bg-gray-300">{submitting ? "Logging in…" : "Log in"}</button><p className="mt-5 text-center text-sm text-gray-500">New here? <Link to="/signup" className="font-semibold text-green-700">Create an account</Link></p></form></main>;
}

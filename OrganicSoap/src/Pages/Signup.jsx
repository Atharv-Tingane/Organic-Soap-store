import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../api/client";

export default function Signup() {
  const { signup } = useAuth(); const navigate = useNavigate(); const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" }); const [submitting, setSubmitting] = useState(false);
  const submit = async (event) => { event.preventDefault(); setSubmitting(true); try { await signup(form); toast.success("Account created successfully"); navigate("/"); } catch (error) { toast.error(getErrorMessage(error)); } finally { setSubmitting(false); } };
  return <main className="min-h-[70vh] bg-[#f8fbf8] px-4 py-16"><form onSubmit={submit} className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm"><p className="font-semibold uppercase tracking-[.25em] text-green-600">Join OrganicSoap</p><h1 className="mt-2 text-3xl font-bold text-[#173b2c]">Create account</h1>{[["name", "Full name", "text"], ["email", "Email", "email"], ["phone", "Phone", "tel"], ["password", "Password", "password"]].map(([key, label, type]) => <label key={key} className="mt-4 block text-sm font-semibold">{label}<input required minLength={key === "password" ? 8 : undefined} type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="mt-2 w-full rounded-xl border p-3" /></label>)}<button disabled={submitting} className="mt-7 w-full rounded-xl bg-green-600 py-3 font-semibold text-white disabled:bg-gray-300">{submitting ? "Creating account…" : "Create account"}</button><p className="mt-5 text-center text-sm text-gray-500">Already have an account? <Link to="/login" className="font-semibold text-green-700">Log in</Link></p></form></main>;
}

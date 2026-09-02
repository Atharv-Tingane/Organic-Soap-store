const requests = new Map();
function securityHeaders(req, res, next) { res.set({ 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY', 'Referrer-Policy': 'no-referrer', 'Cross-Origin-Resource-Policy': 'same-site' }); next(); }
function cors(req, res, next) {
  const allowed = (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map((origin) => origin.trim()).filter(Boolean);
  const origin = req.headers.origin;
  if (!origin || allowed.length === 0 || allowed.includes(origin)) { if (origin) res.set('Access-Control-Allow-Origin', origin); res.set('Vary', 'Origin'); res.set('Access-Control-Allow-Credentials', 'true'); res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS'); }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
}
function rateLimit({ windowMs, max }) { return (req, res, next) => { const key = req.ip || req.socket.remoteAddress; const now = Date.now(); const entry = requests.get(key); if (!entry || entry.resetAt <= now) { requests.set(key, { count: 1, resetAt: now + windowMs }); return next(); } entry.count += 1; if (entry.count > max) { res.set('Retry-After', Math.ceil((entry.resetAt - now) / 1000)); return res.status(429).json({ message: 'Too many requests. Please try again later.' }); } next(); }; }
module.exports = { securityHeaders, cors, rateLimit };

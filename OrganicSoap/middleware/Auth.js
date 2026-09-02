const jwt = require('jsonwebtoken');
const User = require('../models/userM');
async function protect(req, res, next) {
  const bearer = req.headers.authorization;
  const token = req.cookies.token || (bearer && bearer.startsWith('Bearer ') ? bearer.slice(7) : null);
  if (!token) return res.status(401).json({ message: 'Authentication required' });
  try { const decoded = jwt.verify(token, process.env.JWT_SECRET); const user = await User.findById(decoded.id).select('_id role isActive'); if (!user || !user.isActive) return res.status(401).json({ message: 'Account is unavailable' }); req.user = { id: user.id, role: user.role }; next(); } catch (error) { next(error); }
}
function authorize(...roles) { return (req, res, next) => { if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ message: 'You do not have permission for this action' }); next(); }; }
module.exports = { protect, authorize };

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const DashboardRoutes = require('./dashboard-routes');
const CommentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', DashboardRoutes);
router.use('/Comment', CommentRoutes);

module.exports = router;

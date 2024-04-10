const router = require('express').Router();
const { Dashboard } = require('../../models');

router.post('/dashboard', async (req, res) => {
  const { dashboardName, dashboardText } = req.body;

  try {
    const newDashboard = await Dashboard.create({
      dashboardName,
      dashboardText
    });

    res.status(201).json(newDashboard);
  } catch (error) {
    console.error('Error creating dashboard:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/dashboard/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const dashboard = await Dashboard.findByPk(id);
    if (!dashboard) {
      return res.status(404).json({ error: 'Dashboard not found' });
    }
    res.json(dashboard);
  } catch (error) {
    console.error('Error fetching Dashboard:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

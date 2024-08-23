const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['admin']), taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), taskController.updateTask);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), taskController.deleteTask);

module.exports = router;

const express = require("express");
const router = express.Router();
const eventTypeController = require("../controller/eventTypeController");

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     tags: [EventType]
 *     summary: Create EventType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/event-types", eventTypeController.createEventType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     tags: [EventType]
 *     summary: Get all EventTypes
 *     responses:
 *       200:
 *         description: List
 */
router.get("/event-types", eventTypeController.getEventTypes);

/**
 * @swagger
 * /api/event-types/search:
 *   get:
 *     tags: [EventType]
 *     summary: Search EventType
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Search results
 */
router.get("/event-types/search", eventTypeController.searchEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get EventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Entity ID
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.get("/event-types/:id", eventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update EventType
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Entity ID

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Invalid input or ID
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.put("/event-types/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete EventType
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Entity ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.delete("/event-types/:id", eventTypeController.deleteEventType);

module.exports = router;

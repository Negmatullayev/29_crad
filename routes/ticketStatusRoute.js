const express = require("express");
const router = express.Router();
const ticketStatusController = require("../controller/ticketStatusController");

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [TicketStatus]
 *     summary: Create TicketStatus
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket-statuses", ticketStatusController.createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get all TicketStatuss
 *     responses:
 *       200:
 *         description: List
 */
router.get("/ticket-statuses", ticketStatusController.getTicketStatuss);

/**
 * @swagger
 * /api/ticket-statuses/search:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Search TicketStatus
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
router.get("/ticket-statuses/search", ticketStatusController.searchTicketStatuss);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get TicketStatus by ID
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
router.get("/ticket-statuses/:id", ticketStatusController.getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [TicketStatus]
 *     summary: Update TicketStatus
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
router.put("/ticket-statuses/:id", ticketStatusController.updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [TicketStatus]
 *     summary: Delete TicketStatus
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
router.delete("/ticket-statuses/:id", ticketStatusController.deleteTicketStatus);

module.exports = router;

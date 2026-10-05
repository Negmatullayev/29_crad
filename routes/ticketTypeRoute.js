const express = require("express");
const router = express.Router();
const ticketTypeController = require("../controller/ticketTypeController");

/**
 * @swagger
 * /api/ticket-types:
 *   post:
 *     tags: [TicketType]
 *     summary: Create TicketType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket-types", ticketTypeController.createTicketType);

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all TicketTypes
 *     responses:
 *       200:
 *         description: List
 */
router.get("/ticket-types", ticketTypeController.getTicketTypes);

/**
 * @swagger
 * /api/ticket-types/search:
 *   get:
 *     tags: [TicketType]
 *     summary: Search TicketType
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
router.get("/ticket-types/search", ticketTypeController.searchTicketTypes);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get TicketType by ID
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
router.get("/ticket-types/:id", ticketTypeController.getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update TicketType
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
 *               ticket_type:
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
router.put("/ticket-types/:id", ticketTypeController.updateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete TicketType
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
router.delete("/ticket-types/:id", ticketTypeController.deleteTicketType);

module.exports = router;

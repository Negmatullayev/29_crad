const express = require("express");
const router = express.Router();
const seatTypeController = require("../controller/seatTypeController");

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     tags: [SeatType]
 *     summary: Create SeatType
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
router.post("/seat-types", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all SeatTypes
 *     responses:
 *       200:
 *         description: List
 */
router.get("/seat-types", seatTypeController.getSeatTypes);

/**
 * @swagger
 * /api/seat-types/search:
 *   get:
 *     tags: [SeatType]
 *     summary: Search SeatType
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
router.get("/seat-types/search", seatTypeController.searchSeatTypes);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get SeatType by ID
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
router.get("/seat-types/:id", seatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update SeatType
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
router.put("/seat-types/:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete SeatType
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
router.delete("/seat-types/:id", seatTypeController.deleteSeatType);

module.exports = router;

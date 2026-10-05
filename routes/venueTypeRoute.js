const express = require("express");
const router = express.Router();
const venueTypeController = require("../controller/venueTypeController");

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     tags: [VenueType]
 *     summary: Create VenueType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: number
 *               typeId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue-types", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all VenueTypes
 *     responses:
 *       200:
 *         description: List
 */
router.get("/venue-types", venueTypeController.getVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get VenueType by ID
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
router.get("/venue-types/:id", venueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update VenueType
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
 *               venueId:
 *                 type: number
 *               typeId:
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
router.put("/venue-types/:id", venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete VenueType
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
router.delete("/venue-types/:id", venueTypeController.deleteVenueType);

module.exports = router;

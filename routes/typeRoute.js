const express = require("express");
const router = express.Router();
const typeController = require("../controller/typeController");

/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Type]
 *     summary: Create Type
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
router.post("/types", typeController.createType);

/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Type]
 *     summary: Get all Types
 *     responses:
 *       200:
 *         description: List
 */
router.get("/types", typeController.getTypes);

/**
 * @swagger
 * /api/types/search:
 *   get:
 *     tags: [Type]
 *     summary: Search Type
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
router.get("/types/search", typeController.searchTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Type]
 *     summary: Get Type by ID
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
router.get("/types/:id", typeController.getTypeById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Type]
 *     summary: Update Type
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
router.put("/types/:id", typeController.updateType);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Type]
 *     summary: Delete Type
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
router.delete("/types/:id", typeController.deleteType);

module.exports = router;

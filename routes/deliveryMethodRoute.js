const express = require("express");
const router = express.Router();
const deliveryMethodController = require("../controller/deliveryMethodController");

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     tags: [DeliveryMethod]
 *     summary: Create DeliveryMethod
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
router.post("/delivery-methods", deliveryMethodController.createDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get all DeliveryMethods
 *     responses:
 *       200:
 *         description: List
 */
router.get("/delivery-methods", deliveryMethodController.getDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/search:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Search DeliveryMethod
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
router.get("/delivery-methods/search", deliveryMethodController.searchDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get DeliveryMethod by ID
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
router.get("/delivery-methods/:id", deliveryMethodController.getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     tags: [DeliveryMethod]
 *     summary: Update DeliveryMethod
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
router.put("/delivery-methods/:id", deliveryMethodController.updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     tags: [DeliveryMethod]
 *     summary: Delete DeliveryMethod
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
router.delete("/delivery-methods/:id", deliveryMethodController.deleteDeliveryMethod);

module.exports = router;

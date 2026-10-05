const express = require("express");
const router = express.Router();
const paymentMethodController = require("../controller/paymentMethodController");

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create PaymentMethod
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
router.post("/payment-methods", paymentMethodController.createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get all PaymentMethods
 *     responses:
 *       200:
 *         description: List
 */
router.get("/payment-methods", paymentMethodController.getPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search PaymentMethod
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
router.get("/payment-methods/search", paymentMethodController.searchPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get PaymentMethod by ID
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
router.get("/payment-methods/:id", paymentMethodController.getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     tags: [PaymentMethod]
 *     summary: Update PaymentMethod
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
router.put("/payment-methods/:id", paymentMethodController.updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete PaymentMethod
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
router.delete("/payment-methods/:id", paymentMethodController.deletePaymentMethod);

module.exports = router;

const express = require("express");
const router = express.Router();
const cartItemController = require("../controller/cartItemController");

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     tags: [CartItem]
 *     summary: Create CartItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart-items", cartItemController.createCartItem);

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     tags: [CartItem]
 *     summary: Get all CartItems
 *     responses:
 *       200:
 *         description: List
 */
router.get("/cart-items", cartItemController.getCartItems);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get CartItem by ID
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
router.get("/cart-items/:id", cartItemController.getCartItemById);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     tags: [CartItem]
 *     summary: Update CartItem
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
 *               ticket_id:
 *                 type: number
 *               cart_id:
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
router.put("/cart-items/:id", cartItemController.updateCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete CartItem
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
router.delete("/cart-items/:id", cartItemController.deleteCartItem);

module.exports = router;

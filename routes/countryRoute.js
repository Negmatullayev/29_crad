const express = require("express");
const router = express.Router();
const countryController = require("../controller/countryController");

/**
 * @swagger
 * /api/countries:
 *   post:
 *     tags: [Country]
 *     summary: Create Country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/countries", countryController.createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Country]
 *     summary: Get all Countrys
 *     responses:
 *       200:
 *         description: List
 */
router.get("/countries", countryController.getCountrys);

/**
 * @swagger
 * /api/countries/search:
 *   get:
 *     tags: [Country]
 *     summary: Search Country
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
router.get("/countries/search", countryController.searchCountrys);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get Country by ID
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
router.get("/countries/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update Country
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
 *               country_name:
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
router.put("/countries/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete Country
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
router.delete("/countries/:id", countryController.deleteCountry);

module.exports = router;

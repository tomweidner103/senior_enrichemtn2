const router = require("express").Router();
const { Campus } = require("../db/index");
const { Student } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.campusId, {
      include: [{ model: Student }],
      where: {
        campusId: req.params.campusId
      }
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.status(201).json(campus);
  } catch (err) {
    next(err);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.destroy({
      where: {
        id: req.params.campusId
      }
    });
    res.status(200).json(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

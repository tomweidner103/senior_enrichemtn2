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
    const campus = await Campus.findByPk(req.params.campusId, {
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
    if(campus.imageUrl === ''){
      campus.imageUrl = 'college.jpeg'
    }
    res.status(201).json(campus);
  } catch (err) {
    next(err);
  }
});

router.put("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.update(req.body, {
      where: {
        id: req.params.campusId
      },
      returning: true,
      plain: true
    });
    res.status(204).json(campus);
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

const router = require("express").Router();
const { Student } = require("../db/index");
const { Campus } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [{ model: Campus }]
    });
    students.sort((a, b) => {
      return a.id - b.id;
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: [{ model: Campus }]
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.body.campusId);
    const student = await Student.create(req.body);
    if(student.imageUrl === ''){
      student.imageUrl = 'student.jpeg'
    }
    const newStudent = await student.setCampus(campus);
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.put("/:studentId", async (req, res, next) => {
  console.log('campusId', req.body.campusId);
  try {
    let [numRows, updated] = await Student.update(req.body, {
      where: {
        id: req.params.studentId
      },
      returning: true,
      plain: true
    });
    res.status(204).json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.destroy({
      where: {
        id: req.params.studentId
      }
    });
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

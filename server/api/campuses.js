const router = require("express").Router();
const {Campus} = require("../db/index");
const {Student} = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:campusId', async (req,res,next) => {
  try{
    const campus = await Campus.findById(req.params.campusId, {
      include: [{model: Student}],
      where: {
        campusId: req.params.campusId
      }
    })
    console.log('campus', campus)
    res.json(campus)
  }catch(err){
    next(err)
  }
})

module.exports = router;

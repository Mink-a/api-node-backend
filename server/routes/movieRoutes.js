const express = require("express");
const router = express.Router();
const {
  listMovies,
  insertSingleMovie,
  updateSingleMovie,
  deleteSingleMovie,
} = require("../controllers/movieController");

// App Routes

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/api/movies/", listMovies);
router.post("/api/movies/", insertSingleMovie);
router.patch("/api/movies/:id", updateSingleMovie);
router.delete("/api/movies/:id", deleteSingleMovie);

module.exports = router;

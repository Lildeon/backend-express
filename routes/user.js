import express from "express";

const router = express.Router();
export const userRoutes = router.get("/", (req, res) => {
  const { name } = req.query;
  res.send(`Type your name in the search bar to display ${name}`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get id:${id}`);
});

router.post("/create", (req, res) => {
  const { firstname, profession } = req.body;
  res.json("Post status ok");
  console.log(firstname, profession);
});

import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.json({ message: "hello projects" });
});

export default router;

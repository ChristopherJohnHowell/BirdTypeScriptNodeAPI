import express from "express";

const PORT = 8000;

class birdController {
  public birdController() {}

  run() {
    const app = express();
    app.get("/", (req, res) => {
      res.send("This is all I have so far!!!! ??");
    });

    // app.get("/", (req, res) => {
    //   res.send("This is all I have so far!");
    // });

    // app.get("/", (req, res) => {
    //   res.send("This is all I have so far!");
    // });

    // app.get("/", (req, res) => {
    //   res.send("This is all I have so far!");
    // });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
}

export default birdController;

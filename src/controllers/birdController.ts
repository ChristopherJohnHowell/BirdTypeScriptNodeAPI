import { Request, Response } from "express";
import { Bird } from "../models/bird";
import {
  getBirdsFromDB,
  getBirdFromDB,
  addBirdToDB,
  updateBirdInDB,
  deleteBirdFromDB,
} from "../database/birdDatabase";

export const getBirds = (req: Request, res: Response) => {
  res.json(getBirdsFromDB());
};

export const getBird = (req: Request, res: Response) => {
  const bird = getBirdFromDB(parseInt(req.params.id));
  if (bird) {
    res.json(bird);
  } else {
    res.status(404).send("Bird not found");
  }
};

export const createBird = (req: Request, res: Response) => {
  const newBird: Bird = req.body;
  const createdBird = addBirdToDB(newBird);
  res.status(201).json(createdBird);
};

export const updateBird = (req: Request, res: Response) => {
  const updatedBird = updateBirdInDB(parseInt(req.params.id), req.body);
  if (updatedBird) {
    res.json(updatedBird);
  } else {
    res.status(404).send("Bird not found");
  }
};

export const deleteBird = (req: Request, res: Response) => {
  const deletedBird = deleteBirdFromDB(parseInt(req.params.id));
  if (deletedBird) {
    res.json(deletedBird);
  } else {
    res.status(404).send("Bird not found");
  }
};

// import { Request, Response } from 'express';
// import { Bird } from '../models/bird';

// let birds: Bird[] = [];
// let nextId = 1;

// export const getBirds = (req: Request, res: Response) => {
//   res.json(birds);
// };

// export const getBird = (req: Request, res: Response) => {
//   const bird = birds.find(b => b.id === parseInt(req.params.id));
//   if (bird) {
//     res.json(bird);
//   } else {
//     res.status(404).send('Bird not found');
//   }
// };

// export const createBird = (req: Request, res: Response) => {
//   const newBird: Bird = { id: nextId++, ...req.body };
//   birds.push(newBird);
//   res.status(201).json(newBird);
// };

// export const updateBird = (req: Request, res: Response) => {
//   const index = birds.findIndex(b => b.id === parseInt(req.params.id));
//   if (index !== -1) {
//     birds[index] = { ...birds[index], ...req.body };
//     res.json(birds[index]);
//   } else {
//     res.status(404).send('Bird not found');
//   }
// };

// export const deleteBird = (req: Request, res: Response) => {
//   const index = birds.findIndex(b => b.id === parseInt(req.params.id));
//   if (index !== -1) {
//     const deletedBird = birds.splice(index, 1);
//     res.json(deletedBird);
//   } else {
//     res.status(404).send('Bird not found');
//   }
// };

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

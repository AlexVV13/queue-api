import express from 'express';
const router = express.Router();
import {getWaitTimesEfteling, getWaitTimesWalibiHolland, getFavRides, addFavRide, deleteFavRide} from '../controllers/rideTimes.js';

/**
 * @route GET /waittimes/efteling
 * @group WaitTimes
 * @return Ride Object
 */
router.get('/waittimes/efteling', getWaitTimesEfteling);

/**
 * @route GET /waittimes/walibiholland
 * @group WaitTimes
 * @return Ride Object
 */
router.get('/waittimes/walibiholland', getWaitTimesWalibiHolland);

/**
 * @route GET /favrides/:user
 * @group FavRides
 * @return favride object (ride object + userid)
 */
router.get('/favrides/:user', getFavRides);

/**
 * @route POST /favrides/add
 * @group FavRides
 * @return message 200 
 */
router.post('/favrides/add', addFavRide);

/**
 * @route DELETE /favrides/delete/:id
 * @group FavRides
 * @return message 204
 */
router.delete('/favrides/delete/:id', deleteFavRide);

export default router;
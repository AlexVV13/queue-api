import tpapi from '@alexvv13/tpapi';

import RideWaitTimes from '../models/RideWaitTimes.js';
import FavRides from '../models/FavRides.js';

const Efteling = new tpapi.parks.Efteling();
const WalibiHolland = new tpapi.parks.WalibiHolland();

export const getWaitTimesEfteling = (req, res, next) => {
    Efteling.getWaitTime()
        .then(waitTimes => {
            res.status(200).json({
                waitTimes
            });
            waitTimes.forEach(waitTime => {
                const rideWaitTime = new RideWaitTimes({
                    ...waitTime
                });
                rideWaitTime.save().then(() => console.log('Back-Up created!')).catch(err => console.error(err));
            })
        })
        .catch(error => res.status(400).json(error))
};

export const getWaitTimesWalibiHolland = (req, res, next) => {
    WalibiHolland.getWaitTime()
        .then(waitTimes => {
            res.status(200).json({
                waitTimes
            });
            waitTimes.forEach(waitTime => {
                const rideWaitTime = new RideWaitTimes({
                    ...waitTime
                });
                rideWaitTime.save().then(() => console.log('Back-Up created!')).catch(err => console.error(err));
            })
        })
        .catch(error => res.status(400).json(error))
};

export const getFavRides = (req, res, next) => {
    FavRides.find({
            user: req.params.user
        })
        .then(favRides => res.status(200).json({
            favRides
        }))
        .catch(err => res.status(500).json(err))
};

export const addFavRide = (req, res, next) => {
    favRide = new FavRides({
        ...req.body
    });
    favRide.save()
        .then(() => res.status(201).json({
            message: 'Added favorite!'
        }))
        .catch(error => res.status(500).json({
            error
        }));
};

export const deleteFavRide = (req, res, next) => {
    FavRides.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(204).json({
            message: 'Deleted favorite!'
        }))
        .catch(error => res.status(500).json({
            error
        }));
}
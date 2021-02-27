import mongoose from 'mongoose';

const rwtSchema = mongoose.Schema({
    id: {},
    name: String,
    waitTime: Number,
    active: Boolean,
    fastPass: Boolean,
    location: {
        area: String,
        latitude: Number,
        longitude: Number,
    },
    meta: {
        fastPass: Boolean,
        label: String,
        single_rider: Boolean,
    },
    state: String,
});

export default mongoose.model('RideWaitTimes', rwtSchema);
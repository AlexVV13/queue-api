import mongoose from 'mongoose';

const favRidesSchema = mongoose.Schema({
    ride : {
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
            category: Array,
            fastPass: Boolean,
            label: String,
            description: String,
            short_description: String,
            single_rider: Boolean,
            tags: Array,
            type: String,
            restrictions: Object,
        },
        state: String,
    },
    user: String
});

export default mongoose.model('favRides', favRidesSchema);
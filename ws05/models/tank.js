//TASK2
const mongoose = require('mongoose');

const tankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    cannon: {
        type: Object,
        required: true,
        name: {
            type: String,
            required: true,
        },
        caliber: {
            type: Number,
            required: true,
        },
        stabilizer: {
            type: String,
            required: true,
        }
    },
    engine: {
        type: Object,
        required: true,
        name: {
            type: String,
            required: true,
        },
        hp: {
            type: Number,
            required: true,
        },
        max_speed: {
            type: Object,
            required: true,
            forward: {
                type: Number,
                required: true,
            },
            reverse: {
                type: Number,
                required: true,
            }
        }
    },
    weight: {
        type: Number,
        required: true,
    }
    },
    { collection: 'tanks' }
    );

tankSchema.methods.getTankInfo = function getTankInfo() {
    console.log(`${this.name} is a ${this.type} tank armed with a ${this.cannon.name} cannon of caliber ${this.cannon.caliber}mm and powered by a ${this.engine.name} engine with ${this.engine.hp} hp.`);
};

module.exports = mongoose.model('tank', tankSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const About = mongoose.model('About Us', aboutSchema)

// export the model so other modules can import it
module.exports = {
    About,
}
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
     {
          title: {

               type: String,
               require: [true, "title is required"],

          },
          description: {

               type: String, 
               require: [true, "description is require"],

          },
          image: {

               type: String,
               require: [true, "image is require"],

          },
          user:{
               type: mongoose.Types.ObjectId,
               ref: 'User',
               require: [true,"user id is required"],
          }
          
     },
     
     { timestamps: true }
);

// Add virtual to include user's username
blogSchema.virtual('username', {
     ref: 'User',
     localField: 'user',
     foreignField: '_id',
     justOne: true,
     options: { select: 'username' } // Only select the username field
   });

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
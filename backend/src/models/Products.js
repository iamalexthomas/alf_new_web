import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      maxLength: [200, "Product name cannot exceed 200 characters"],
    },
    actualPrice: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    offer: {
      type: Number,
      required: false,
    },
    details: {
      ingredientsDescription: {
        type: String,
        required: [true, "Please enter ingredients description"],
        maxLength: [5000, "Ingredients description cannot exceed 5000 characters"],
      },
    },
    ratings: {
      type: Number,
      default: 4,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    specifications: {
      type: Map,
      of: String, // Allows flexible key-value pairs like "quantity": "100g"
      required: true,
    },
    size: {
      type: String,
      enum: ["Small", "Medium", "Large"],
      required: true,
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
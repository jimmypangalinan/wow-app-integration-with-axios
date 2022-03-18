const express = require("express");

const router = express.Router();

// controller transaction
const {
  getTransactions,
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

// controller user
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

//  controller auth
const { register, login, checkAuth } = require("../controllers/auth");

// mylist
const { addMyList, getMyList } = require("../controllers/myList");

// controller product
const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// middlewares
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");
const { uploadProof } = require("../middlewares/uploadProof");

//  auth login
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

// user
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

// product
router.post("/addProduct", uploadFile("bookFile", "cover"), addProduct);
router.get("/books", getProducts);
router.get("/book/:id", getProduct);
router.patch("/book/:id", auth, updateProduct);
router.delete("/book/:id", auth, deleteProduct);

// transaction
router.get("/transactions", getTransactions);
router.get("/transaction/:id", getTransaction);
router.post("/transaction", auth, uploadProof("transferProof"), addTransaction);
router.patch("/transaction/:id", auth, updateTransaction);
router.delete("/transaction/:id", deleteTransaction);

// mylist
router.post("/myList", auth, addMyList);
router.get("/myLists", auth, getMyList);

module.exports = router;

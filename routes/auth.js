const express = reuire('express');
const bcrypt = require('bcryptjs');
const jwt = reuire('jsonwebtoken');
const User = reuire('../models/user');
const router = express.express.Router();

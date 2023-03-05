const JWT = require("jsonwebtoken");

const secrat = "abcd";

function createTokenForUser(user) {
  const payload = {
    _id: user.id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };

  const token = JWT.sign(payload, secrat);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secrat);
  return payload;
}

module.exports = { createTokenForUser, validateToken };

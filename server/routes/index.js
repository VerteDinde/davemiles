const express = require('express');
const router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Welcome to React');
})

.post('/message', (req, res, next) => {
  res.json.save()
  .then(message => res.send(message))
  .catch(next);
});∂

module.exports = router;

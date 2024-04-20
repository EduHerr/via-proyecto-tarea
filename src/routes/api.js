const express = require('express');
const router = express.Router();
const authRoute = require('./api/auth.route');
const { Response } = require('../../libs/utils/response');

router.use(express.json());
router.get('/', (req, res) => { res.send(new Response(200, null, 'API Via Project')) });

router.use('/auth', authRoute)

module.exports = router;

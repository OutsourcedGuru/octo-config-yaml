var express =    require('express');
var package =    require('../package.json');
var router =     express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'octo-config-yaml', version: package.version });
});

router.get('/config.yaml', function(req, res, next) {
  res.header({'Content-Type': 'text/plain', 'Content-Length': 1344, 'Content-Disposition': 'attachment; filename="logo.png"'});
  res.attachment('/config.yaml');
});

module.exports = router;

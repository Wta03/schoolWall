"use strict";

var models = require('../db');

var express = require('express');

var router = express.Router();

var mysql = require('mysql');

var $sql = require('../sqlMap'); // 连接数据库


var conn = mysql.createConnection(models.mysql);
conn.connect();

var jsonWrite = function jsonWrite(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
}; // 接口：增加信息


router.post('/addStu1', function (req, res) {
  var sql = $sql.Stu.add1;
  var params = req.body;
  console.log('添加失物招领', params);
  conn.query(sql, [params.user_name, params.time, params.form1, params.form2, params.img_src, params.have_name, params.form_id, params.tx_imge, params.name], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/addStu2', function (req, res) {
  var sql = $sql.Stu.add2;
  var params = req.body;
  console.log('添加', params);
  conn.query(sql, [params.user_name, params.text, params.time, params.id, params.name, params.tx_imge], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/addStu_login', function (req, res) {
  var sql = $sql.Stu.add_login;
  var params = req.body;
  console.log('添加', params);
  conn.query(sql, [params.username, params.password, params.circleUrl, params.name], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/addStu_user_sx', function (req, res) {
  var sql = $sql.Stu.add_user_sx;
  var params = req.body;
  console.log('添加', params);
  conn.query(sql, [params.user1, params.user2, params.name1, params.name2, params.tx_imge1, params.tx_imge2], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/addStu_rd', function (req, res) {
  var sql = $sql.Stu.add_rd;
  var params = req.body;
  console.log('添加', params);
  conn.query(sql, [params.id, params.score], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/addStu_sx_pl', function (req, res) {
  var sql = $sql.Stu.add_sx_pl;
  var params = req.body;
  console.log('添加', params);
  conn.query(sql, [params.user_name, params.id, params.text, params.time, params.name, params.tx_imge], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
}); // 接口：查询用户名

router.get('/showStu', function (req, res) {
  var sql = $sql.Stu.show;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_login', function (req, res) {
  var sql = $sql.Stu.show_login;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_user_sx', function (req, res) {
  var sql = $sql.Stu.show_user_sx;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_grzx', function (req, res) {
  var sql = $sql.Stu.show_grzx;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_sx_pl', function (req, res) {
  var sql = $sql.Stu.show_sx_pl;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_rd', function (req, res) {
  var sql = $sql.Stu.show_rd;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu_asc', function (req, res) {
  var sql = $sql.Stu.show_asc;
  var params = req.body;
  console.log("查询提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu1', function (req, res) {
  var sql = $sql.Stu.show1;
  var params = req.body;
  console.log("查询失物招领提交信息", params);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu3', function (req, res) {
  var sql = $sql.Stu.show3;
  var params = req.body;
  console.log("查询寻物提交信息", params);
  conn.query(sql, [params.time, params.form1, params.form2, params.img_src, params.have_name, params.form_id, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu4', function (req, res) {
  var sql = $sql.Stu.show4;
  var params = req.body;
  console.log("查询二手市场提交信息", params);
  conn.query(sql, [params.time, params.form1, params.form2, params.img_src, params.have_name, params.form_id, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu5', function (req, res) {
  var sql = $sql.Stu.show5;
  var params = req.body;
  console.log("查询问题咨询提交信息", params);
  conn.query(sql, [params.time, params.form1, params.form2, params.img_src, params.have_name, params.form_id, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu6', function (req, res) {
  var sql = $sql.Stu.show6;
  var params = req.body;
  console.log("查询交友提交信息", params);
  conn.query(sql, [params.time, params.form1, params.form2, params.img_src, params.have_name, params.form_id, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.get('/showStu2', function (req, res) {
  var sql = $sql.Stu.show2;
  var params = req.body;
  console.log("查询评论信息", params);
  conn.query(sql, [params.num_id, params.user_name, params.text, params.time, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
}); // 接口：删除信息

router.post('/delStu1', function (req, res) {
  var sql = $sql.Stu.del1;
  var params = req.body;
  console.log('删除', params);
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/delStu2', function (req, res) {
  var sql = $sql.Stu.del2;
  var params = req.body;
  console.log('删除', params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
}); // 接口：修改信息

router.post('/updateStu_rd', function (req, res) {
  var sql = $sql.Stu.update_rd;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.rd, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu1', function (req, res) {
  var sql = $sql.Stu.update1;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.password, params.username], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu2', function (req, res) {
  var sql = $sql.Stu.update2;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.name, params.d, params.qq, params.circleUrl, params.age, params.birday, params.six, params.username], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu3', function (req, res) {
  var sql = $sql.Stu.update3;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.tx_imge, params.name, params.user_name], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu4', function (req, res) {
  var sql = $sql.Stu.update4;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.form1, params.form2, params.have_name, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu5', function (req, res) {
  var sql = $sql.Stu.update5;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.tx_imge, params.name, params.user_name], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu6', function (req, res) {
  var sql = $sql.Stu.update6;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.tx_imge1, params.name1, params.user1], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu7', function (req, res) {
  var sql = $sql.Stu.update7;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.tx_imge2, params.name2, params.user2], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
router.post('/updateStu8', function (req, res) {
  var sql = $sql.Stu.update8;
  var params = req.body;
  console.log('修改', params);
  conn.query(sql, [params.tx_imge, params.name, params.user_name], function (err, result) {
    if (err) {
      console.log(err);
    }

    if (result) {
      jsonWrite(res, result);
    }
  });
});
module.exports = router;
// sqlMap.js  sql语句
const sqlMap = {
    Stu: {
        addflower: 'insert into flower(name,price,variety,store,introduce) values (?,?,?,?,?)',
        add1: 'insert into all_date(user_name,time,form1,form2,img_src,have_name,form_id,tx_imge,name,rd) values (?,?,?,?,?,?,?,?,?,0)',
    add2: 'insert into pl_1(user_name,text,time, id,name,tx_imge) values (?,?,?,?,?,?)',
        add_user_sx: 'insert into date_sx(user1,user2,name1,name2,tx_imge1,tx_imge2) values (?,?,?,?,?,?)',
        add_login: 'insert into users(username,password,circleUrl,name,d,qq,age,birday,six) values (?,?,?,?,"未设置","未设置","未设置","未设置","未设置")',
      add_sx_pl: 'insert into sx_pl(user_name,id,text,time,name,tx_imge) values (?,?,?,?,?,?)',
    show: 'select * from all_date order by time desc',
    show_login:'select * from users',
    show_user_sx:'select * from date_sx ',
    show_sx_pl:'select * from sx_pl order by time asc',
    show_asc: 'select * from all_date order by time asc',
    show_grzx:'select * from users',
    show_rd: 'select * from all_date order by rd desc,time asc  LIMIT 6',    
    show1: 'select * from all_date where form_id = 2 order by time desc',
    show2: 'select * from pl_1 order by time desc',
    show3: 'select * from all_date where form_id = 1 order by time desc',
    show4: 'select * from all_date where form_id = 3 order by time desc',
    show5: 'select * from all_date where form_id = 4 order by time desc',
    show6: 'select * from all_date where form_id = 5 order by time desc',
        del1: 'delete from users where username = ?',
        del2: 'delete from all_date where id = ?',
    update1: 'update users set password = ? where username = ?',
    update2: 'update users set name = ?,d = ? ,qq = ?,circleUrl = ?,age = ?,birday= ?,six= ? where username = ?',
    update3: 'update all_date set tx_imge = ?, name = ? where user_name = ?',
        update4: 'update all_date set form1 =?,form2 = ?,have_name=?   where id = ?',
        update5: 'update pl_1 set tx_imge = ?, name = ?  where user_name = ?',
        update6: 'update date_sx set tx_imge1 = ?, name1 = ?  where user1 = ?',
        update7: 'update date_sx set tx_imge2 = ?, name2 = ?  where user2 = ?',
        update8: 'update sx_pl set tx_imge = ?, name = ?  where user_name = ?',
    update_rd: 'update all_date set rd = ?  where id = ? ',
    }
  }
  
  module.exports = sqlMap
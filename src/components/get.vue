<style scoped>
.div_flex {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
}

p {
    font-size: 30px;
    color: #babecc;
    font-weight: bolder;
}

.div_flex input[type="text"],
.div_flex textarea {
    color: #757575;
    margin: 20px;
    padding: 25px;
    border-radius: 25px;
    width: 500px;
    height: 30px;
    font-style: normal;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 200;
    border: #ebecf0dd;
    box-sizing: border-box;
    box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
    background: #ebecf0dd;
    outline: 0;
    transition: all 0.1s linear 0s;
}

.div_flex textarea {
    border-radius: 35px;
    width: 500px;
    height: 300px;
    resize: none;
}

.div_flex input[type="text"]:focus,
.div_flex textarea:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

.div_file {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

.div_file input[type="text"] {
    width: 400px;
    border-radius: 0;
}

.div_file input[type="file"] {
    display: none;
}

.div_file button {
    color: #757575;
    width: 100px;
    height: 40px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    font-size: 18px;
    font-weight: 200;
}

.div_file button:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.div_file button:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
.div_radio {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.div_radio input[type="radio"] {
    display: none;
}

.div_radio label {
    color: #757575;
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
}

.div_radio label:hover {
    box-shadow: inset 3px 3px 5px #babecc, inset -3px -3px 5px #fff;
}

.div_radio input:checked+label {
    color: rgb(201, 69, 69);
    font-size: 19px;
    box-shadow: inset 3px 3px 5px #babecc, inset -3px -3px 5px #fff;
}

.button_tj,
.button_sx {
    color: rgb(212, 55, 55);
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
}
.div_background {
    position: absolute;
    height: 100px;
    line-height: 100px;
    font-size: 100px;
    letter-spacing: 100px;
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
    color: #ebecf0dd;
    z-index: -1;
    top: calc(40% - 50px);
    right:0;
    width: 1000px;
    text-align: center;
}
.button_tp {
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
    background-color: #ebecf0dd;
    color: #757575;
}

.div_button {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.el-upload__tip {
    color: rgb(229, 62, 62);
}

.button_tj:hover,.button_sx:hover,.button_tp:hover{
        box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
    }
    .button_tj:active,.button_sx:active,.button_tp:active{
        box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
    }
</style>
<template>
    <div class="bg">
        <div>
            <p v-html="msg"></p>
        </div>
        <div v-html="msg" class="div_background"></div>
        <div class="div_flex">
            <input type="text" name="thing" v-model="thing">
            <textarea name="something" id="" cols="30" rows="10" v-model="something"></textarea>
            <div class="div_radio">
                <input type="radio" name="who" v-model="who" value="匿名" id="niming">
                <label for="niming">匿名</label>
                <input type="radio" name="who" v-model="who" value="不匿名" id="no_niming" checked>
                <label for="no_niming">不匿名</label>
            </div>
            <div>
                <el-upload class="upload-demo" action="http://localhost:3000/upload" :on-remove="handleRemove"
                    :before-remove="beforeRemove" multiple :limit="5" :on-exceed="handleExceed" :file-list="fileList"
                    :on-success="uploadSuccess">
                    <el-button size="small" type="primary" class="button_tp">上传图片</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <div class="div_button">
                <button @click="sx()" class="button_sx">刷新</button>
                <button @click="tj()" class="button_tj">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: '寻物',
    data() {
        return {
            user: [],
            user1: [],
            user_name: this.$route.params.user_name,
            msg: '寻物',
            thing: '丢失物',
            something: '丢失物介绍',
            fileName: "",
            who: '不匿名',
            fileList: [],//图片列表
            form: {
                num: 0,
                title: '',
                city: '',
                exhibitionType: '',
                extension: '',
                businessHours: '',
                location: '',
                name: '',
                number: '',
                imgBanner: '',
                img: [],
                content: '',
            },
            src:' ',
        }
    },
    methods: {
        getFormatDate() {
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentDate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return currentDate;
        },
        add() {
            if (this.src != " ") {
                this.src = 'http://localhost:3000/' + this.src
            }
            axios.post('http://localhost:3000/api/Stu/addStu1', { user_name: this.user_name, time: this.getFormatDate(), form1: this.thing, form2: this.something, img_src: this.src, have_name: this.who, form_id: 1, tx_imge: this.user1.circleUrl, name: this.user1.name }, {}).then((response) => { console.log(response); });
        },
        button_click() {
            var file = document.getElementById("file");
            file.click();
        },
        fileChange(el) {
            const file = el.target.files[0];
            console.log(file);
            this.fileName = file.name;
        },
        uploadSuccess(res, file) {
            console.log(file);
            this.form.img.push(res.data.path)
            this.fileName = file.name;
            this.src = file.response.data.path;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList, '1111111');
            //删除图片时也要把form.imgBanner和form.img里的数据删除
            if (file.name === "banner.jpg") {
                this.form.imgBanner = ''
            } else {
                //给数组封装一个方法，用来删除数组中指定的数据
                Array.prototype.contains = function (obj) {
                    var i = this.length;
                    while (i--) {
                        if (this[i] === obj) {
                            return i;  // 返回的这个 i 就是元素的索引下标，
                        }
                    }
                    return false;
                }
                const path = file.response.data.path
                this.form.img.splice(this.form.img.contains(path), 1)
                // console.log(this.form.img,'删除后的form.img')
            }
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}`);
        },
        open1() {
            this.$alert('请输入丢失物和丢失物介绍', '警告', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `输入错误`
                    });
                }
            });
        },
        open2() {
            this.$alert('填写成功,等待管理员审核', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `填写成功`
                    });
                }
            });
        },
        sx() {
            this.thing = "丢失物";
            this.something = "丢失物介绍";
        },
        tj() {
            if (this.thing != '丢失物' && this.thing != '' && this.something != '丢失物介绍' && this.something != '') {
                this.open2();
                this.add();
                this.$router.push({ name: 'body', params: { user_name: this.$route.params.user_name } });
            }
            else {
                this.open1();
            }
        }
    },
    created() {
        axios.get('http://localhost:3000/api/Stu/showStu_login',).then((response) => {
            this.user = response.data;
            for (let i = 0; i <= this.user.length; i++) {
                if (this.$route.params.user_name == this.user[i].username) {
                    this.user1 = this.user[i];
                }
            }
        })
    },
    watch: {

    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#ebecf0dd')
    },


}  
</script> 
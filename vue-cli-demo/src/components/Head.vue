<template>
    <div style="width:80%">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="小米商城" name="first"></el-tab-pane>
            <el-tab-pane label="MIUI" name="second"></el-tab-pane>
            <el-tab-pane label="loT" name="third"></el-tab-pane>
            <el-tab-pane label="云服务" name="fourth"></el-tab-pane>
            <el-tab-pane label="金融" name="five"></el-tab-pane>
            <el-tab-pane label="优品" name="six"></el-tab-pane>
            <el-tab-pane label="小爱开放平台" name="senve"></el-tab-pane>
            <el-tab-pane label="企业团购" name="eit"></el-tab-pane>
            <el-tab-pane label="资质证照" name="nice"></el-tab-pane>
            <el-tab-pane label="协议规则" name="ten"></el-tab-pane>
            <el-tab-pane name="shyi">
                 <span slot="label"><i class="el-icon-date"></i> app</span>
            </el-tab-pane>
            <el-tab-pane label="Select Location" name="sher"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 16px;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>
<template>
  <el-table height="300px" :data="data">
    <el-table-column prop="title" label="title" />
    <el-table-column label="操作" fixed="right" width="140">
      <template #default>
        <el-dropdown>
          <el-button type="primary" link size="small"> 更多 </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-button type="primary" link size="small"> 查看 </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="danger" link size="small"> 删除 </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const data = [
  {
    title: "测试",
  },
];
</script>

<template>
	<div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="商品图片" width="120">
				<template slot-scope="scope">
					<img :src="scope.row.date" class="head_pic" />
					<!-- <p>{{scope.row.date}}</p> -->
				</template>
			</el-table-column>
			<el-table-column prop="name" label="商品信息" width="170">

			</el-table-column>
			<el-table-column prop="address" label="价格/货号" width="120">
			</el-table-column>
			<el-table-column label="标签" show-overflow-tooltip width="120">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.value1" inactive-text="上架">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column label="排序" width="120">
				<template slot-scope="scope">
					<input type="text" :placeholder="scope.row.paixu" style="width: 50px;border-radius: 3px;">
				</template>
			</el-table-column>
			<el-table-column label="销量" prop="xiaoliang">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: true,
					xiaoliang: 100,
					paixu: 100
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: true,
					xiaoliang: 100,
					paixu: 1
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: true,
					xiaoliang: 100,
					paixu: 1
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: false,
					xiaoliang: 100,
					paixu: 1
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: false,
					xiaoliang: 100,
					paixu: 1
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: false,
					xiaoliang: 100,
					paixu: 1
				}, {
					date: '../assets/logo.png',
					name: '银色星芒刺绣网纱底裤一级分类=》二级分类',
					address: '价格:￥100.00货号: No86577',
					value1: false,
					xiaoliang: 100,
					paixu: 1
				}],
				// multipleSelection: []
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
				id:''
			}
		},

		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.$router.push({
					path:'/?id='+val+''
				})
				console.log(`当前页: ${val}`);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleEdit(index, row) {

				console.log(index, row);
			},
			deleteRow(index, rows) {
				console.log(index, rows);
				// this.$confirm('确认删除此分类?如果此分类下关联有商品，将会部除失败!')
				// 	.then(() => {
				// 		rows.splice(index, 1);
				// 	})
				// 	.catch(() => {

				// 	});
				const confirmText = ['确认删除此分类?', '如果此分类下关联有商品，将会部除失败!']
				const newDatas = []
				const h = this.$createElement
				for (const i in confirmText) {
					newDatas.push(h('p', null, confirmText[i]))
				}
				this.$confirm(
					'提示', {
						title: '提示',
						message: h('div', null, newDatas),
						showCancelButton: true,
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						// type: 'warning'
					}).then(() => {
					rows.splice(index, 1);
				})
			}
		}
	}
</script>

<style scoped>
	.block{
		float: right;
		margin: 24px;
	}
</style>

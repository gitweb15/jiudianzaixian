<template>
	<div>
		<zbdh></zbdh>
		<template>
			<div>
				<el-button type="primary" @click="dialogVisible=true">添加分类</el-button>
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column type="expand">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-table :data="tableData2">
								<el-table-column type="selection" width="55">
								</el-table-column>
								<el-table-column prop="name" width="120" label="分类">
								</el-table-column>
								<el-table-column prop="date" width="120" label="数量">
								</el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
										<el-button @click.native.prevent="deleteRow(scope.$index, tableData2)" size="mini" type="danger">移除</el-button>
									</template>
								</el-table-column>
							</el-table>
						</el-form>
					</el-table-column>
					<el-table-column label="分类名称" width="120" prop="date">
					</el-table-column>
					<el-table-column prop="name" label="商品数量" width="120">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" size="mini" type="danger">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!-- 对话框 添加 -->


				<el-dialog title="编辑分类" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
					<el-form ref="form" :model="updatefenlei" label-width="80px" size="mini">
						<el-form-item label="分类名称">
							<el-input v-model="updatefenlei.name"></el-input>
						</el-form-item>
						<el-form-item label="活动区域">
							<el-select v-model="updatefenlei.shangji" placeholder="请选择分类">
								<el-option label="分类一" value="shanghai"></el-option>
								<el-option label="分类二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="排序">
							<el-input v-model="updatefenlei.paixu"></el-input>
						</el-form-item>
						<el-form-item label="是否显示">
							<el-radio-group v-model="updatefenlei.tigglo">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
							</el-radio-group>
						</el-form-item>
					</el-form>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
				</el-dialog>
			</div>
		</template>
	</div>
</template>

<script>
	// import zbdh from '../components/zbdh.vue'
	export default {
		name: 'commodity_fenlei',
		data() {
			return {
				updatefenlei: {
					name: '',
					shangji: '',
					paixu: '',
					tigglo: ''
				},
				tableData: [{
					date: '服装',
					name: '150',
				}, {
					date: '配饰',
					name: '33',
				}],
				multipleSelection: [],
				tableData2: [{
						name: '毛衣',
						date: '50'
					},
					{
						name: 'T恤',
						date: '20'
					},
					{
						name: '西装',
						date: '30'
					}
				],
				dialogVisible: false
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleEdit(index, row) {
				this.dialogVisible = true;
				this.updatefenlei.name = row.date;
				console.log(index, row);
			},
			deleteRow(index, rows) {
				this.$confirm('确认删除此分类?如果此分类下关联有商品，将会部除失败!')
					.then(() => {
						rows.splice(index, 1);
					})
					.catch(() => {
						
					});
			},
			handleClose() {
				this.dialogVisible = false
			}
		},
		components:{
			// zbdh
		}
	}
</script>

<style>
</style>

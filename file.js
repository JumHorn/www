// 出于安全和隐私的原因，web 应用程序不能直接访问用户设备上的文件
/*
<input type="file" id="fileInput"></input>
<script>
document.getElementById("fileinput").addEventListener("change",function selectedFileChanges()
{
	console.log(this.files);
})
</script>
*/

function selectedFileChanges() {
	if (this.files.length === 0) {
		console.log("没有选择文件");
		return;
	}
	const reader = new FileReader();
	reader.onload = function fileReadCompleted() {
		//读取完成时，文件内容存储在reader.result中
		console.log(reader.result);
	};
	reader.readAsText(this.files[0]);
}
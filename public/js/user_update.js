// 更新用户脚本
$(function(){
	var $body = $('body'),
		$userForm = $body.find('.user_form'),
		$errorWrap = $body.find('.error_wrap'),
		$submitBtn = $userForm.find('.submit_btn');

	var fadeTimer = null;

	// 非空校验
	$submitBtn.on('click', function(){
		var $name = $userForm.find('#name'),
			$age = $userForm.find('#age'),
			$job = $userForm.find('#job'),
			$hobby = $userForm.find('#hobby');

		var oldName = $name.attr('data-oldval'),
			oldAge = $age.attr('data-oldval'),
			oldJob = $job.attr('data-oldval'),
			oldHobby = $hobby.attr('data-oldval');

		if ($name.val() == '') {
			showErrorTips('姓名不能为空！');
			return false;
		} else if($age.val() == ''){
			showErrorTips('年龄不能为空！');
			return false;
		} else if($job.val() == ''){
			showErrorTips('工作不能为空！');
			return false;
		} else if($hobby.val() == ''){
			showErrorTips('兴趣不能为空！');
			return false;
		}
		if ( ($name.val() == oldName) && ($age.val() == oldAge) && ($job.val() == oldJob) && ($hobby.val() == oldHobby) ) {
			showErrorTips('必须有改动！');
			return false;
		}
	});

	// 显示错误提示
	function showErrorTips(str){
		var $errorTips = $errorWrap.find('.error_tips');
		$errorTips.html(str);
		$errorWrap.show();
		clearTimeout(fadeTimer);
		// 渐变消失
		fadeTimer = setTimeout(function(){
			$errorWrap.fadeOut('normal');
		}, 1000);
	}
  
});
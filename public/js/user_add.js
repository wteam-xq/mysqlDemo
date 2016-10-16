// 新增用户脚本
$(function(){
	var $body = $('body'),
		$userForm = $body.find('.user_form'),
		$submitBtn = $userForm.find('.submit_btn');

	// 非空校验
	$submitBtn.on('click', function(){
		var $name = $userForm.find('#name'),
			$age = $userForm.find('#age'),
			$job = $userForm.find('#job'),
			$hobby = $userForm.find('#hobby');

		if ($name.val() == '') {

			return false;
		} else if($age.val() == ''){

			return false;
		} else if($job.val() == ''){

			return false;
		} else if($hobby.val() == ''){

			return false;
		}
		return false;
	});
  
});
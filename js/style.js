/* //-----------------���[�f�B���O��ʂł�logo�̕\��---------------------------------------------------------------*/

$(document).ready(function () {
	$("#splash").delay(1500).fadeOut('slow');//���[�f�B���O��ʂ�1.5�b�i1500ms�j�ҋ@���Ă���t�F�[�h�A�E�g
	$("#splash_logo").delay(1200).fadeOut('slow');//���S��1.2�b�i1200ms�j�ҋ@���Ă���t�F�[�h�A�E�g
});

$(document).ready(function () {
	// ���[�J���X�g���[�W��"visited"�Ƃ����L�[�ŃA�N�Z�X�������ǂ�����ۑ�
	var visited = localStorage.getItem("visited");

	// ����K�⎞�̂݃��[�f�B���O��ʂ�\��
	if (!visited) {
		$("#splash").delay(1500).fadeOut('slow');
		$("#splash_logo").delay(1200).fadeOut('slow');

		// "visited"��true�ɐݒ肵�āA���񂩂�̓��[�f�B���O��ʂ��\������Ȃ��悤�ɂ���
		localStorage.setItem("visited", true);
	} else {
		// 2��ڈȍ~�̖K��ł̓��[�f�B���O��ʂ�\�����Ȃ�
		$("#splash").hide();
		$("#splash_logo").hide();
	}
});


//-----------------��ʏ㕔�Œ�----------------------------------------------------------------------------

$(function () {
	var pos = $("#header").offset().top;
	var height = $("#header").outerHeight();
	$(window).on("scroll touchstart touchmove touchend", function () {
		console.log("Scroll event fired!");  // ���̍s��ǉ�
		if ($(this).scrollTop() > pos) {
			$("#header").addClass("fixed");
		} else {
			$("#header").removeClass("fixed");
		}
	});
});




//-----------------�����N��Ɉړ�----------------------------------------------------------------------------*/

$('#g-navi a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //�y�[�W�������N��HTML�^�Ohref����A�����N����Ă���G���Aid�̒l���擾
	var pos = $(elmHash).offset().top;  //id�̏㕔�̋������擾
	var headerHeight = $('#header').outerHeight(); // �w�b�_�[�̍������擾
	$('body,html').animate({ scrollTop: pos - headerHeight }, 500); //�擾�����ʒu�ɃX�N���[���i�w�b�_�[�̍����������j�B500�̐��l���傫���Ȃ�قǂ������X�N���[��
	return false;
});

//-----------------���y�[�W���烊���N��Ɉړ�----------------------------------------------------------------------------
$(document).ready(function () {
	var url = window.location.href;
	var id = url.substring(url.indexOf("#") + 1);

	if (url.indexOf("#") > -1) {
		var pos = $("#" + id).offset().top;
		var headerHeight = $('#header').outerHeight();
		$('body,html').animate({ scrollTop: pos - headerHeight }, 500);
	}
});

//---------------������X���C�h�C��-------------------------------------------------------------------------------------------------------

// �����̂��������ƂȂ�A�j���[�V�����̖��O���`
function fadeAnime() {

	// �ӂ��
	$('.fadeUpTrigger').each(function () { //fadeUpTrigger�Ƃ����N���X����
		var elemPos = $(this).offset().top - 50;//�v�f���A50px���
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// ��ʓ��ɓ�������fadeUp�Ƃ����N���X����ǋL
		} else {
			$(this).removeClass('fadeUp');// ��ʊO�ɏo����fadeUp�Ƃ����N���X�����O��
		}
	});
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
	fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
	fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q


//------------�X�}�[�g�t�H���p-------------------------------------------------------------------------------

$(".openbtn1").click(function () {//�{�^�����N���b�N���ꂽ��
	$(this).toggleClass('active');//�{�^�����g�� active�N���X��t�^��
	$("#g-navi").toggleClass('panelactive');//�i�r�Q�[�V������panelactive�N���X��t�^
});

$("#g-navi a").click(function () {//�i�r�Q�[�V�����̃����N���N���b�N���ꂽ��
	$(".openbtn1").removeClass('active');//�{�^���� active�N���X��������
	$("#g-navi").removeClass('panelactive');//�i�r�Q�[�V������panelactive�N���X������
});
















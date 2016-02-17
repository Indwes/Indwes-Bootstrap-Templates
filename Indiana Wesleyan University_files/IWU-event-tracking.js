// Event Tracking Tag Generation
$(document).ready(function(){
	// Header Items
	$('a[href="http://myiwu.indwes.edu"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	});
	$('a[href="http://myiwu.indwes.edu/"]').on('click', function(){
			_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	});
	$('a[href="https://myiwu.indwes.edu"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	});
	$('a[href="https://myiwu.indwes.edu/"]').on('click', function(){
			_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	});
	$('a[href="http://alumni.indwes.edu"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Alumni Portal']);
	});
	$('a[href="http://www.iwuwildcats.com/"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Athletics Site']);
	});


	// Left Menu Items
	$('a[href="https://secure2.indwes.edu/Adult-Graduate-Admissions/Application/"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Secure2 Apply']);
	});
	$('a[href="https://secure2.indwes.edu/Adult-Graduate-Admissions/State-Check/Default.aspx?destination=AGSRequestInfo"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Request Info Gateway']);
	});


	// In Page Items
	//	$('a[href="https://myiwu.indwes.edu"]').on('click', function(){
	//		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	//	});
	//	$('a[href="https://myiwu.indwes.edu"]').on('click', function(){
	//		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'MyIWU Portal']);
	//	});


	// Related Links
	$('a[href="https://secure.indwes.edu/AGS/StudentServices/ApplicationReadmission.aspx"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Related Link - Apply for Readmission']);
	});


	// Footer Items
	$('a[href="http://seminary.indwes.edu/"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Seminary Jump']);
	});
	$('a[href="http://wiwutv51.com/"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'WIWU Jump']);
	});
	$('a[href="http://indwes.libguides.com/homepage/"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'Library Jump']);
	});
	$('a[href="http://www.iwubookstore.com"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Outbound Link', 'Click', 'IWU Bookstore Jump']);
	});


	//UG Admissions Links
	$('a[href="http://recruiter.indwes.edu/ResRecProd/Datatel.ERecruiting.Web.External/Pages/Login.aspx?type=application"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Recruiter Link', 'Click', 'UG Apply']);
	});
	$('a[href="https://recruiter.indwes.edu/ResRecProd/Datatel.ERecruiting.Web.External/Pages/Login.aspx?type=application"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Recruiter Link', 'Click', 'UG Apply']);
	});
	$('a[href="http://recruiter.indwes.edu/ResRecProd/Datatel.ERecruiting.Web.External/Pages/createaccount.aspx?f=01c2fc33-6c3b-4832-b42c-8f58beff16e9&type=inquiry"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Recruiter Link', 'Click', 'UG Request Info']);
	});
	$('a[href="https://recruiter.indwes.edu/ResRecProd/Datatel.ERecruiting.Web.External/Pages/createaccount.aspx?f=01c2fc33-6c3b-4832-b42c-8f58beff16e9&type=inquiry"]').on('click', function(){
		_gaq.push(['_trackEvent', 'Recruiter Link', 'Click', 'UG Request Info']);
	});



});

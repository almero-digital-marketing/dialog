$(function() {
	var visits = Cookies.get('visits');
	var today = new Date().setHours(0,0,0,0).toString();
	if (visits) {
		var lastVisit = Cookies.get('lastVisit');
		if (lastVisit != today) {
			visits++;
		}
	} else {
		visits = 1;
	}
	Cookies.set('visits', visits, { expires: 365 });
	Cookies.set('lastVisit', today, { expires: 365 });
	var pages = Cookies.get('pages');
	if (pages) pages++; else pages = 1;
	Cookies.set('pages', pages, { expires: 365 });
	$('[name="visits"]').val(visits);
	$('[name="pages"]').val(pages);

	var history = Cookies.get('history');
	if (!history) history = '';
	var historyEntry = document.title;
	if (document.title.indexOf(' - ') != -1) {
		historyEntry = document.title.substr(document.title.indexOf(' - ') + 3);
	}
	if (history.indexOf(historyEntry) == -1) history += '* ' + historyEntry + '\n';
	Cookies.set('history', history, { expires: 365 });

	var arr = history.split('* ')
	for(var i = 0, history = ''; i < arr.length; i++) {
		if(arr[i]) {
			history += '<li>' + arr[i].replace('\n', '') + '</li>'
		}
	}

	$('[name="history"]').val(history);
});
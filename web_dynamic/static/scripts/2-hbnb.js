$('document').ready(function () {
  let amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.values(amenities).length === 0) {
      $('.amenities H4').html('&nbsp;');
    } else {
      $('.amenities H4').text(Object.values(amenities).join(', '));
    }
  });

  const url = 'http://' + window.location.hostname + ':5000/api/v1/status/';
  $.get(url, function(data) {
    if data.statusCode === 200 {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').deleteClass('available');
    }
  });
});


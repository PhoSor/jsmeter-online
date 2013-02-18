function run(source, name) {
  var statsJSON = {};
  try {
    var parse = make_parse(),
        tree = parse(source),
        complexity = make_complexity();

    var stats = {
      text: '',
      write: function(data) {
        this.text += data;
      }
    };

    complexity.complexity(tree, name);
    complexity.renderStats(stats, 'JSON');
    // complexity.renderStats(stats);

    statsJSON = JSON.parse(stats.text);
  } catch (exception) {
    console.log('exception: ' + exception.name);
    console.dir(tree);
  }

  return statsJSON;
  // return stats.text;
}

setup();
// run();

function make_table_row(stat, i) {
  var row_html = [
    '<tr>',
      '<td>', stat.lines, '</td>',
      '<td>', stat.name, '</td>',
      '<td>', stat.mi, '</td>',
      '<td>', stat.complexity, '</td>',
      '<td>', stat.halsteadLevel, '</td>',
      '<td>', stat.halsteadPotential, '</td>',
      '<td>', stat.halsteadVolume, '</td>',
      '<td>', stat.b, '</td>',
      '<td>', stat.blockDepth, '</td>',
    '</tr>'
  ];

  return row_html.join('');
}

function make_table_body(rows_data) {
  var table_rows = $.map(rows_data, make_table_row);

  return table_rows.join('');
}

$(document).ready(function() {
  $('.check').click(function() {
    var source = $('.source').val(),
        name = 'Source',
        results = run(source, name),
        functions_stats = make_table_body(results);

    // $('.results').html('<pre>' + JSON.stringify(results) + '</pre>');
    $('.functions-stats').html(functions_stats);
    // $('.results').html(results);
  });
});


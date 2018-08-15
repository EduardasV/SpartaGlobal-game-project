function saveInformation(width, height) {
  var json = {}; // new  JSON Object

  json.player = 0;
  json.wins = 0;
  json.loses = 0;

  createButton('save').position(width, height).mousePressed(function() {
    saveJSON(json, 'saves/saved-data.json');
  });
}

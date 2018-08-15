function saveInformation() {
  var json = {}; // new  JSON Object

  json.id = 0;
  json.species = 'Panthera leo';
  json.name = 'Lion';

  createButton('save').position(10, 10).mousePressed(function() {
    saveJSON(json, 'lion.json');
  });
}

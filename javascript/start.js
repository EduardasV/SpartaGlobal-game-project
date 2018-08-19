function setup() {
  createCanvas(720, 400);

  var scene_manager = new SceneManager();
  scene_manager.wire();
  scene_manager.showScene(intro);
}

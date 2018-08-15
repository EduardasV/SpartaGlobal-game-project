function setup() {
  createCanvas(720, 400);

  var mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(Intro);
}

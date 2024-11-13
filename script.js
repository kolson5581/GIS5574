require(["esri/views/MapView", "esri/WebMap","esri/widgets/Editor"], (MapView, WebMap, Editor) => {
  const webmap = new WebMap({
    portalItem: {
      id: "9798107973fb4c70bd5a487ed9270979"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
  
  const editor = new Editor({
    view: view
  });

  view.ui.add(editor, "bottom-right");
});
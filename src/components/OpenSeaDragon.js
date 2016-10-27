import React from 'react';
import 'openseadragon';

export default class OpenSeaDragon extends React.Component {
  render(){
    var dziFilesUrl = "./src/components/path/CMU-1_files/";
    var dzi = {
      Image: {
        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
        Url: dziFilesUrl,
        Overlap: "1",
        TileSize: "254",//单个切片正方形的边长
        Format: "jpeg",
        Size: {
          Height: "32914",
          Width: "46000"
        }
      }
    }
    var viewer = new OpenSeadragon.Viewer({
      id: "container",
      prefixUrl: "./node_modules/openseadragon/build/openseadragon/images/",
      tileSources: dzi
    })

    return(
      <div></div>
    )
  }
}

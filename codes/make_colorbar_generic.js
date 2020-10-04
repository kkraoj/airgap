// Demonstrates how to efficiently display a number of layers of a dataset along
// with a legend for each layer, and some visualization controls.


/*
 * Configure layers and locations
 */
// var palette = ['#703103','#945629','#ce7e45', '#df923d', '#f1b555', '#fcd163', '#99b718', 
//           '#74a901', '#66a000', '#529400', '#3e8601', '#207401', '#056201',
//           '#004c00', '#023b01', '#012e01', '#011d01', '#011301'];

// var legendLabels = ["high","low"]

function make_colorbar(palette,legendLabels,reverse){
  var reverse = reverse == undefined ? true : Boolean(reverse);
  var superpanel = ui.Panel({layout:ui.Panel.Layout.flow('horizontal')});
  
  var labelPanel1 = ui.Panel({style:{margin:"0px 10px"}})
  var labelPanel2 = ui.Panel({style:{margin:"0px 10px"}})
  var labelPanel3 = ui.Panel({style:{margin:"0px 10px"}})
  var labelPanel4 = ui.Panel({style:{margin:"0px 10px"}})
  var spacing = (palette.length*7).toString()
  labelPanel1.add(ui.Label(legendLabels[1],{fontSize:"15px",color:'black',margin:"0", padding: "3px 0px"}));
  // labelPanel2.add(ui.Label('150%',{fontSize:"15px",color:'black',margin:"0", padding: "34px 0px"}));
  // labelPanel3.add(ui.Label('100%',{fontSize:"15px",color:'black',margin:"0", padding: "4px 0px"}));
  labelPanel4.add(ui.Label(legendLabels[0],{fontSize:"15px",color:'black',margin:"0", padding: spacing+"px 0px 0px 0px"}));
  var labelpanel = ui.Panel({widgets:[labelPanel1, labelPanel2, labelPanel3, labelPanel4],style:{margin:"0px 0px"}})

  
  var colorpanel = ui.Panel({style:{width:"14px",margin:0, padding: "10px 0px"}});
  function make_colorbox(color){
    return ui.Label('',{width:'10px',height:'9.45px',margin:0,backgroundColor:color})
  }
  var palette = palette.slice()
  palette.reverse();
  palette.forEach(function(color){
    colorpanel.add(make_colorbox(color))
  })
  superpanel.widgets().reset([colorpanel,labelpanel]);
  
  return superpanel
}
// print(make_colorbar(palette,legendLabels));
exports.make_colorbar = make_colorbar;
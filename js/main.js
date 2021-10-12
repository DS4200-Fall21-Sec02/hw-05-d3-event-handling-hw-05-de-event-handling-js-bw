// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

// adding function to change color of rect
var changeCircle = (function(){
   var currentColor = '#b2df8a';
    
    return function(){
        currentColor = currentColor == '#b2df8a' ? '#69b3a2' : '#b2df8a';
        d3.selectAll('circle').style('fill', currentColor);
    }
})();

var changeBoth = (function(){
   var currentCircle = '#b2df8a';
   var currentRect = '#a6cee3';
    
    return function(){
        currentCircle = currentCircle == '#b2df8a' ? '#69b3a2' : '#b2df8a';
        currentRect = currentRect == '#a6cee3' ? '#d1848e' : '#a6cee3';
        d3.selectAll('circle').style('fill', currentCircle);
        d3.selectAll('rect').style('fill', currentRect);
    }
})();
var borderRect = (function(){
  return function(){
    let border = svg.append('rect')
    .attr('x', '100')
    .attr('y', '200')
    .attr('width', '20%')
    .attr('height', '20%')
    .style('stroke-width', 5)
    .style('stroke', 'black')
    .style('fill', 'none')
    .on('click', changeCircle)
    .on('mouseover', borderRect)
    .on('mouseout', unBorderRect);
}
})();

var unBorderRect = (function(){
  return function(){
    d3.selectAll('rect').attr("stroke", "white");
  }
})();

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on('click', changeCircle)
  .on('mouseover', borderRect)
  .on('mouseout', unBorderRect);


// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on('dblclick', changeBoth);






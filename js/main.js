// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

// adding function to change color of rect
var changeCircle = (function(){
    return function(){
	// find the current color of the circle
  	var currentColor = d3.select('circle').style('fill');

	// assign the new color to the circle
        currentColor = currentColor == 'rgb(178, 223, 138)' ? '#69b3a2' : '#b2df8a';
        d3.selectAll('circle').style('fill', currentColor);
    }
})();

// double click to change both color of rect and circle
var changeBoth = (function(){
  // var currentCircle = '#b2df8a';
  // var currentRect = '#a6cee3';
    
    return function(){
	// find current color of circle and rect
  	var currentCircle = d3.select('circle').style('fill');
  	var currentRect = d3.select('rect').style('fill');
	// pick the opposite color
        currentCircle = currentCircle ==  'rgb(178, 223, 138)' ? '#69b3a2' : '#b2df8a';
        currentRect = currentRect == 'rgb(166, 206, 227)' ? '#d1848e' : '#a6cee3';
	// assign the new colors
        d3.selectAll('circle').style('fill', currentCircle);
        d3.selectAll('rect').style('fill', currentRect);
    }
})();

// add border to rect 
var borderRect = (function(){
  return function(){
	   d3.selectAll('rect').classed("border", true);
}
})();

// add border to rect 
var unBorderRect = (function(){
  return function(){
	   d3.selectAll('rect').classed("border", false);
    console.log('mouse out rect');
  }
})();

// add border to circle
var borderCirc = (function(){
  return function(){
	   d3.selectAll('circle').classed("border", true);
}
})();

// remove border from circle
var unBorderCirc = (function(){
  return function(){
	   d3.selectAll('circle').classed("border", false);
  }
})();

// Drag end function for the rectangle drag start function, place holder
function dragStart(event,d){
    //    d3.select(this)
    //      .style("stroke", "") 
//	d3.select(this).raise();
      }
      
// Drag the rectangle
function dragging(event,d){
        var xCoor = event.x;
        var yCoor = event.y;

	d3.select(this)
          .attr("x", xCoor)
          .attr("y", yCoor)
	  .raise();
      }
      
// Drag end function for the rectangle drag ending function, place holder
function dragEnd(event,d){
    //    d3.select(this)
    //      .style("stroke", "black")
      }


// Margin inputs for the svg
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
  .on('mouseover', borderRect)
  .on('mouseout', unBorderRect)
  .on('click', changeCircle)
  .call(d3.drag()
        .on('start', dragStart)
        .on('drag', dragging)
        .on('end', dragEnd));
  


// Add a circle with dragging, hover and double click functionality
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
// double click and hover functionality
  .on('dblclick', changeBoth)
  .on('mouseover', borderCirc)
  .on('mouseout', unBorderCirc)
// drag functionality
  .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

        function dragstarted(d) {
            d3.select(this).raise();
        }

        function dragged(event, d) {
        var xCoor = event.x;
        var yCoor = event.y;

        d3.select(this)
          .attr("cx", xCoor)
          .attr("cy", yCoor);

        }

        function dragended(d) {
      //      d3.select(this);
        }






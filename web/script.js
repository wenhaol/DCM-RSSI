// script.js
document.addEventListener('DOMContentLoaded', function() {
    const data = [];
    const startX = 210; // Starting x position
    const startY = 87;  // Starting y position
    const deltaX = 30;  // Change in x for each point
    const deltaY = 30;  // Change in y for each point
    const numCols = 9;  // Number of columns (x-direction)
    const numRows = 11; // Number of rows (y-direction)

    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            if ((col === 0 && row === 9) ||
            (col === 1 && row === 9) ||
                (col === 2 && row === 9) ||
                (col === 6 && row === 3) ||
            (col === 7 && row === 3) ||
            (col === 8 && row === 3)) {
            continue; // Skip this iteration
        }
            const x = startX + col * deltaX;
            const y = startY + row * deltaY;
            const value = 30; 
            const rowSuffix = row.toString(); // Format the row number
            const colSuffix = col.toString(); // Format the column number
            const url = `././Images/router_${colSuffix}${rowSuffix}.png`;
            const url2 = `././images3ds/router_${colSuffix}${rowSuffix}3D.png`;

            data.push({ x, y, value, url, url2});
        }
    }
    // Create SVG container for the interactive points
    const svg = d3.select('#heatmap-container').append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // Append circles for each data point
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => d.x) 
        .attr('cy', d => d.y) 
        .attr('r', 5)
        .style('fill', 'rgba(255, 0, 255, 0.5)') // Semi-transparent white for visibility
        .on('click', (event, d) => {
    const imageDisplayContainer = document.getElementById('image-display');
    const detailImage1 = document.getElementById('detail-image1');
    const detailImage2 = document.getElementById('detail-image2');

    // Reset any previous content and display the container
    imageDisplayContainer.style.display = 'block';
    detailImage1.style.display = 'none'; // Initially hide the first image
    detailImage2.style.display = 'none'; // Initially hide the second image

    // Set up the first image
    detailImage1.src = d.url;
    detailImage1.alt = 'Detailed view 1 for point (' + d.x + ',' + d.y + ')';
    detailImage1.onload = () => {
        detailImage1.style.display = 'block'; // Show the first image
    };

    // Set up the second image
    detailImage2.src = d.url2; 
    detailImage2.alt = 'Detailed view 2 for point (' + d.x + ',' + d.y + ')';
    detailImage2.onload = () => {
        detailImage2.style.display = 'block'; // Show the second image
    };
});
    const imageDisplayContainer = document.getElementById('image-display');
    const detailImage1 = document.getElementById('detail-image1');
    const detailImage2 = document.getElementById('detail-image2');
function hideImages() {
        detailImage1.style.display = 'none';
        detailImage2.style.display = 'none';
    }
    document.addEventListener('click', function(event) {
        if (!imageDisplayContainer.contains(event.target)) {
            hideImages(); // Hide images if clicked outside the image area
        }
    });




});

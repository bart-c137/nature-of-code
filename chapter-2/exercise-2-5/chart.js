class Chart {
    constructor(minX, maxX, minY, maxY, yOffset, xOffset) {
        this.minX = minX;
        this.maxY = maxX;
        this.minY = minY;
        this.maxY = maxY;

        this.top = yOffset;
        this.left = xOffset;

        this.plotData;
    }

    update(plotData) {
        this.plotData = plotData;
    }

    displayPlotData() {
        noFill();
        beginShape();
        for (const x in this.plotData) {
            // x value
            let xValue = map(x, 0, 60, 20, width);

            // y value
            let yValue = map(11 - this.plotData[x], 0, 11, 900, 1580);

            ellipse(xValue, yValue, 10, 10);
            vertex(xValue, yValue);
        }
        endShape();
    }

    display() {
        // draw x axis
        line(0, 1580, width, 1580);

        // draw y axis
        line(20, height, 20, 900);

        // draw y tick marks
        for (let i = 1; i <= 10; i++) {
            let y1 = map(i, 0, 11, 900, 1580);
            line(10, y1, 30, y1);
        }

        // draw x tick marks
        for (let i = 0; i <= 60; i++) {
            let x1 = map(i, 0, 60, 20, width);
            line(x1, 1590, x1, 1570);
        }

        this.displayPlotData();
    }
}
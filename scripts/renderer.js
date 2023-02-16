class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)

        //this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);

        this.drawBezierCurve({x: 50, y: 500}, {x: 50, y: 50}, {x: 400, y: 500}, {x: 700, y: 300}, this.num_curve_sections, [10, 68, 94, 255], framebuffer);

        this.drawBezierCurve({x: 100, y: 100}, {x: 300, y: 500}, {x: 500, y: 100}, {x: 500, y: 300}, this.num_curve_sections, [73, 183, 191, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        this.drawCircle({x: 350, y:350}, 200, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawCircle({x: 500, y:250}, 100, this.num_curve_sections, [120, 34, 134, 255], framebuffer);

    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)

        // let point_a = {x:  80, y:  40};
        // let point_b = {x: 320, y: 160};
        // let point_c = {x: 240, y: 360};
        //this.drawTriangle(point_a, point_c, point_b, [0, 128, 128, 255], framebuffer);

        let oct_0 = {x: 300, y: 200};
        let oct_1 = {x: 350, y: 200};
        let oct_2 = {x: 390, y: 240};
        let oct_3 = {x: 390, y: 290};
        let oct_4 = {x: 350, y: 330};
        let oct_5=  {x: 300, y: 330};
        let oct_6 = {x: 260, y: 290};
        let oct_7 = {x: 260, y: 240};

        this.drawConvexPolygon([oct_0, oct_1, oct_2, oct_3, oct_4, oct_5, oct_6, oct_7], [50, 84, 55, 200], framebuffer)

        this.drawConvexPolygon([{x:  500, y:  300}, {x: 700, y: 300}, {x: 750, y: 500}, {x: 700, y: 580}, {x: 500, y: 550},{x: 400, y: 500}], [0, 128, 128, 255], framebuffer)

        
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        //M
        this.drawBezierCurve({x: 50, y: 200}, {x: 50, y: 400}, {x: 75, y: 400}, {x: 100, y: 200}, this.num_curve_sections, [62, 74, 50, 255], framebuffer);
        this.drawBezierCurve({x: 100, y: 200}, {x: 110, y: 400}, {x: 130, y: 400}, {x: 150, y: 200}, this.num_curve_sections, [62, 74, 50, 255], framebuffer);

        //A
        this.drawCircle({x: 230, y: 250}, 50, this.num_curve_sections, [62, 74, 50, 255], framebuffer);
        this.drawLine({x: 280, y: 200}, {x: 280, y: 250}, [62, 74, 50, 255], framebuffer);

        //D
        this.drawConvexPolygon([{x: 300, y: 200}, {x: 400, y: 200}, {x: 400, y: 300}, {x: 300, y: 300}], [62, 74, 50, 255], framebuffer);
        this.drawLine({x: 400, y: 200}, {x: 400, y: 450}, [62, 74, 50, 255], framebuffer);

        //D
        this.drawConvexPolygon([{x: 450, y: 200}, {x: 500, y: 200}, {x: 520, y: 250}, {x: 500, y: 300}, {x: 450, y: 300}, {x: 430, y: 250}], [62, 74, 50, 255], framebuffer);
        this.drawLine({x: 520, y: 200}, {x: 520, y: 450}, [62, 74, 50, 255], framebuffer);


        //I
        this.drawBezierCurve({x: 550, y: 200}, {x: 600, y: 300}, {x: 600, y: 350}, {x: 550, y: 300}, this.num_curve_sections, [62, 74, 50, 255], framebuffer);
        this.drawCircle({x: 570, y: 350}, 8, this.num_curve_sections, [62, 74, 50, 255], framebuffer);

        //E
        this.drawBezierCurve({x: 700, y: 200}, {x: 600, y: 250}, {x: 600, y: 300}, {x: 700, y: 300}, this.num_curve_sections, [62, 74, 50, 255], framebuffer);
        this.drawLine({x: 625, y: 270}, {x: 680, y: 270}, [62, 74, 50, 255], framebuffer);

    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve

        let x_old = p0.x;
        let y_old = p0.y;
        for (let j = 0; j <= 1.01; j += 1/num_edges) {
            let x = Math.round(
            (Math.pow((1 - j), 3) * p0.x) +
                (3 * Math.pow((1-j), 2) * j * p1.x) +
                (3 * (1 - j) * Math.pow(j, 2) * p2.x) +
                (Math.pow(j, 3) * p3.x));
                    
                 let y = Math.round(
                    (Math.pow((1 - j), 3) * p0.y) +
                    (3 * Math.pow((1-j), 2) * j * p1.y) +
                    (3 * (1 - j) * Math.pow(j, 2) * p2.y) +
                    (Math.pow(j, 3) * p3.y));
            this.drawLine({x: x_old, y: y_old}, {x: x, y: y}, color, framebuffer);

            x_old = x;
            y_old = y;            
        }
        if (this.show_points) {
                this.drawVertex(p0, [0, 0, 0, 255], framebuffer)
                this.drawVertex(p1, color, framebuffer)
                this.drawVertex(p2, color, framebuffer)
                this.drawVertex(p3, [0, 0, 0, 255], framebuffer)

        }
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle

        let p_old = {x: center.x + radius, y: center.y};
        let a = (2*Math.PI)/num_edges;

        for (let i = 0; i < num_edges; i++) {
            let theta = (i + 1)*a;
            let p = {x: Math.round(center.x + radius*Math.cos(theta)), y: Math.round(center.y + radius*Math.sin(theta))};

            this.drawLine({x: p_old.x, y: p_old.y}, {x: p.x, y: p.y}, color, framebuffer);
           
               
            if (this.show_points) {
                this.drawVertex(p_old, [0, 0, 0, 255], framebuffer);
            }  
           
            p_old = {x: p.x, y: p.y};

        }  
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        
        for(let n = 1; n < vertex_list.length-1; n++) {
            this.drawTriangle(vertex_list[0], vertex_list[n], vertex_list[n+1], color, framebuffer);
        }

        if (this.show_points) { 
            for (let i = 0; i < vertex_list.length; i++) {
                this.drawVertex(vertex_list[i], [0, 0, 0, 255], framebuffer)
            }
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
  
        this.drawLine({x: v.x - 5, y: v.y - 5}, {x: v.x + 5, y: v.y + 5}, color, framebuffer);
        this.drawLine({x: v.x + 5, y: v.y - 5}, {x: v.x - 5, y: v.y + 5}, color, framebuffer);

        // add another two lines to make line thicker - easier to see
        this.drawLine({x: v.x - 5, y: v.y - 4}, {x: v.x + 5, y: v.y + 6}, color, framebuffer);
        this.drawLine({x: v.x + 5, y: v.y - 4}, {x: v.x - 5, y: v.y + 6}, color, framebuffer);
        
    }


    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(framebuffer, px, color) {
	    framebuffer.data[px + 0] = color[0];
	    framebuffer.data[px + 1] = color[1];
	    framebuffer.data[px + 2] = color[2];
	    framebuffer.data[px + 3] = color[3];
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                        // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }

    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1;
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (x <= x1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            x += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                y += iy;
            }
        }
    }

    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1;
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (y <= y1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            y += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Sort points in ascending y order

        let switch_1 = 0;
        let switch_2 = 0;
        let switch_3 = 0;

        if (p1.y < p0.y) {
            this.swapPoints(p0, p1);
            switch_1 = 1;
        } 
        if (p2.y < p0.y) {
            this.swapPoints(p0, p2);
            switch_2 = 1;
        } 
        if (p2.y < p1.y) {
            this.swapPoints(p1, p2);
            switch_3 = 1;
        }
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }


        // undo switches
        if (switch_1) {
            this.swapPoints(p0, p1);
        }
        if (switch_2) {
            this.swapPoints(p0, p2);
        }
        if (switch_3) {
            this.swapPoints(p1, p2);
        }
    }
};

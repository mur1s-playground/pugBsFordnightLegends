var Crosshair = function() {
	this.box_left = new Box();
	this.box_left.dim_set(10, 2);
	
	this.box_right = new Box();
	this.box_right.dim_set(10, 2);
	
	this.box_up = new Box();
	this.box_up.dim_set(2, 10);
	
	this.box_down = new Box();
	this.box_down.dim_set(2, 10);
	
	this.pos = [0, 0];
	this.vel = [0, 0];
	this.acc = [0, 0];
	
	this.dim = [10, 50];
	this.bg = '#ffffff';
	
	this.changed = true;
	
	this.pos_set = function(x, y) {
		this.pos = [x, y];
		this.box_left.pos_set(x-11, y);
		this.box_right.pos_set(x+1, y);
		this.box_up.pos_set(x-1, y-11);
		this.box_down.pos_set(x-1, y+3);
		this.changed = true;
	}
	
	this.dim_set = function(w, h) {
		this.dim = [w, h];
		this.changed = true;
	}
	
	this.bg_set = function(c) {
		this.bg = c;
		this.box_left.bg_set(c);
		this.box_right.bg_set(c);
		this.box_up.bg_set(c);
		this.box_down.bg_set(c);
		this.changed = true;
	}
	
	this.acc_set = function(x, y) {
		this.acc = [x, y];
		this.box_left.acc_set(x, y);
		this.box_right.acc_set(x, y);
		this.box_up.acc_set(x, y);
		this.box_down.acc_set(x, y);
		this.changed = true;
	}
	
	this.draw = function() {
		if (this.changed) {
			this.changed = false;
		}
	}
	
	this.update = function() {
		this.vel[0] += this.acc[0];
		this.acc[0] = 0;
		this.pos[0] += this.vel[0];
		
		this.vel[1] += this.acc[1];
		this.acc[1] = 0;
		this.pos[1] += this.vel[1];
		
		this.pos_set(this.pos[0], this.pos[1]);
		this.changed = true;
	}
}
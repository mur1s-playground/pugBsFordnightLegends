var Ball = function() {
	this.pos = [0, 0];
	this.vel = [0, 0];
	this.acc = [0, 0];
	
	this.dim = [20, 20];
	this.bg = '#ffff00';
	
	this.changed = true;
	
	this.hitcount = 0;
	
	this.pos_set = function(x, y) {
		this.pos = [x, y];
		this.changed = true;
	}
	
	this.dim_set = function(w, h) {
		this.dim = [w, h];
		this.changed = true;
	}
	
	this.bg_set = function(c) {
		this.bg = c;
		this.changed = true;
	}
	
	this.acc_set = function(x, y) {
		this.acc = [x, y];
		this.changed = true;
	}
	
	this.hit = function(x, y) {
		var dist_x = (x-this.pos[0]-this.dim[0]/2.0)*(x-this.pos[0]-this.dim[0]/2.0);
		var dist_y = (y-this.pos[1]-this.dim[1]/2.0)*(y-this.pos[1]-this.dim[1]/2.0);
		if (Math.sqrt(dist_x+dist_y) < this.dim[0]/2.0) {	//round
			this.hitcount++;
			return true;
		}
		return false;
	}
	
	this.draw = function() {
		if (this.changed) {
			var element = document.getElementById(this.id);
			element.style.position = 'absolute';
			element.style.left = this.pos[0];
			element.style.top = this.pos[1];
			element.style.width = this.dim[0];
			element.style.height = this.dim[1];
			element.style.backgroundColor = this.bg;
			element.style.borderRadius = this.dim[0] + 'px';
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
		this.changed = true;
	}
}
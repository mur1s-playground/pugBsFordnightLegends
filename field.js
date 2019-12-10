var Field = function() {
	this.pos = [0, 0];
	this.dim = [500, 350];
	this.bg = '#000000';
	
	this.changed = true;
	
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
	
	this.draw = function() {
		if (this.changed) {
			var element = document.getElementById(this.id);
			element.style.position = 'absolute';
			element.style.left = this.pos[0];
			element.style.top = this.pos[1];
			element.style.width = this.dim[0];
			element.style.height = this.dim[1];
			element.style.backgroundColor = this.bg;
			element.style.borderRadius = '5px';
			this.changed = false;
		}
	}
}
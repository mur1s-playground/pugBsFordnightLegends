var Gun = function() {
	this.main_app = null;
	this.main_field = null;
	this.crosshair = null;
	this.target = null;
	this.shooting = false;
	this.fire_rate = 10;
	
	this.pos = [0, 0];
	this.vel = [0, 0];
	this.acc = [0, 0];
	
	this.dim = [10, 50];
	this.bg = '#ffffff';
	
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
		this.box_left.bg_set(c);
		this.box_right.bg_set(c);
		this.box_up.bg_set(c);
		this.box_down.bg_set(c);
		this.changed = true;
	}
	
	this.acc_set = function(x, y) {
		this.acc = [x, y];
		this.changed = true;
	}
	
	this.shoot = function(tick, bloom_radius) {
		if (tick % this.fire_rate == 0) {
			var bullet = new Ball();
			bullet.dim_set(1, 1);
			bullet.bg_set('#00ff00');
		
			//ValueBloom
			var param = bloom_radius;
			var random_dist = (Math.random()-0.5) * 20 * param; 		// [-10 * param	, 10 * param]
			var random_angle = (Math.random()-0.5) * 2 * Math.PI;		// [-PI			, PI		]
		
			var x_offset = random_dist * Math.cos(random_angle);
			var y_offset = random_dist * Math.sin(random_angle);
		
			bullet.pos_set(crosshair.pos[0]-1+x_offset, crosshair.pos[1]+y_offset);
			this.main_app.component_add(bullet, main_field.id);
			return bullet.pos;
		}
		return null;
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
		
		this.changed = true;
	}
}
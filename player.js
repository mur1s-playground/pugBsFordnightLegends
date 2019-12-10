var Player = function() {
	this.value = 1;
	this.moving = false;
	
	this.head = new Ball();
	this.head.dim_set(10, 10);
	
	this.body = new Box();
	this.body.dim_set(20, 20);
	
	this.leg_1 = new Box();
	this.leg_1.dim_set(5, 20);
	
	this.leg_2 = new Box();
	this.leg_2.dim_set(5, 20);
	
	this.pos = [0, 0];
	this.vel = [0, 0];
	this.acc = [0, 0];
	
	this.dim = [10, 50];
	this.bg = '#ffffff';
	
	this.changed = true;
	this.shot_at = 0;
	
	this.pos_set = function(x, y) {
		this.pos = [x, y];
		
		this.body.pos_set(this.pos[0], this.pos[1]);
		this.head.pos_set(this.pos[0]+5, this.pos[1]-10);
		this.leg_1.pos_set(this.pos[0]+1, this.pos[1]+20);
		this.leg_2.pos_set(this.pos[0]+14, this.pos[1]+20);
		this.changed = true;
	}
	
	this.dim_set = function(w, h) {
		this.dim = [w, h];
		this.changed = true;
	}
	
	this.bg_set = function(c) {
		this.bg = c;
		this.head.bg_set(c);
		this.body.bg_set(c);
		this.leg_1.bg_set(c);
		this.leg_2.bg_set(c);
		this.changed = true;
	}
	
	this.acc_set = function(x, y) {
		this.acc = [x, y];
		this.head.acc_set(x, y);
		this.body.acc_set(x, y);
		this.leg_1.acc_set(x, y);
		this.leg_2.acc_set(x, y);
		this.changed = true;
	}
	
	this.draw = function() {
		if (this.changed) {
			this.changed = false;
		}
	}
	
	this.hit = function(x, y) {
		if (this.body.hit(x, y) || this.head.hit(x, y) || this.leg_1.hit(x, y) || this.leg_2.hit(x, y)) return true;
		return false;
	}
	
	this.update = function() {
		if (this.moving) {
			if (this.pos[0] <= 50 && this.vel[0] <= 0) {
				this.acc[0] = 0.5;
			}
			if (this.pos[0] >= 450 && this.vel[0] >= 0) {
				this.acc[0] = -0.5;
			}
			if (this.pos[1] <= 50 && this.vel[1] <= 0) {
				this.acc[1] = 0.5;
			}
			if (this.pos[1] >= 250 && this.vel[1] >= 0) {
				this.acc[1] = -0.5;
			}
			this.acc[0] += (0.1*(Math.random()-0.5));
			this.acc[1] += (0.1*(Math.random()-0.5));
		} else {
			this.vel[0] = 0;
			this.vel[1] = 0;
		}
		
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
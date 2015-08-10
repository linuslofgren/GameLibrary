;(function(self) {
	var bodies = [];
	var physics = {
		'gravity': function(obj) {
			console.log("Gravity on object " + obj.body);
		}
	}
	self.addPhysicsBody = function (body, physics) {
		var obj = {
			'body': body
		}
		if(Array.isArray(physics)) {
			for (var i = 0; i < physics.length; i++) {
				obj[physics[i].toLowerCase()] = true;
			}
		}
		else if (typeof physics == 'string') {
			obj[physics.toLowerCase()] = true;
		}
		bodies.push(obj);
	}

	self.physicsTick = function() {
		for(var body = 0; body < bodies.length; body++){
			for(var prop in bodies[body]){
				if(bodies[body][prop] == true && physics[prop] != undefined){
					physics[prop](bodies[body]);
				}
			}
		}
	}
	return self;
})(window.game = window.game || {});

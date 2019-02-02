(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"dinonite_atlas_", frames: [[0,0,4000,2292],[0,4588,1103,1669],[1105,4588,1103,1669],[2210,4588,1103,1669],[0,2294,4000,2292]]}
];


// symbols:



(lib.אדמהבלבד01 = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ביצהדור = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ביצהשלאופיר = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ביצהשלעידן = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.רקע201 = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.כן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiEDIQgvgpgJhOIBcgJQAHAvAaAVQAZAWAqgBQAtAAAYgSQAWgUAAgZQAAgRgKgLQgJgMgZgJQgQgFg6gPQhLgTgfgaQgqgnAAg2QAAgkAUgfQAUgfAmgQQAmgQA1gBQBXAAAsAnQAsAmACBAIhdAFQgGglgUgPQgUgQgnAAQgpAAgXARQgOALAAASQAAAQANAMQASAPBEARQBFAQAgARQAhARATAdQASAeAAAsQAAAogWAjQgXAjgoARQgpARg8AAQhYAAgvgpg");
	this.shape.setTransform(43.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiwDpIAAnRIFYAAIAABPIj6AAIAABoIDoAAIAABMIjoAAIAAB/IEDAAIAABPg");
	this.shape_1.setTransform(1.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguDpIAAjEIiqkNIBuAAIBsC5IBri5IBsAAIirENIAADEg");
	this.shape_2.setTransform(-42.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_3.setTransform(0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_4.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.להשמיע = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjqkuIHVFVInBEIg");
	this.shape.setTransform(7.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Aj7D7QhnhngBiUQABiSBnhpQBohnCTAAQCTAABoBnQBoBpAACSQAACUhoBnQhoBpiTAAQiTAAhohpg");
	this.shape_1.setTransform(-1.5,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Aj7D7QhnhngBiUQABiSBnhpQBohnCTAAQCTAABoBnQBoBpAACSQAACUhoBnQhoBpiTAAQiTAAhohpg");
	this.shape_2.setTransform(-1.5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj7D7QhnhngBiUQABiSBnhpQBohnCTAAQCTAABoBnQBoBpAACSQAACUhoBnQhoBpiTAAQiTAAhohpg");
	this.shape_3.setTransform(-1.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-37,71.1,71.1);


(lib.לא = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijCyQg9hAgBhvQAAhGAWgxQAQgjAbgcQAcgcAggOQAsgSA4gBQBmAAA+BBQA9A/AABwQABBxg+BAQg9BAhmAAQhnAAg9g/gAhch3QgjAnAABQQAABOAkApQAkApA3AAQA4AAAlgoQAkgogBhRQABhQgjgnQgjgng7AAQg4AAgkAog");
	this.shape.setTransform(24,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABbDpIi7kvIAAEvIhYAAIAAnRIBcAAIC+E2IAAk2IBWAAIAAHRg");
	this.shape_1.setTransform(-25,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_2.setTransform(0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_3.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.התחלמשחק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1EKIAAjgIjDkzIB+AAIB8DSIB7jSIB8AAIjEE0IAADfg");
	this.shape.setTransform(81.4,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWEKIguh5IjUAAIgsB5IhyAAIDPoTIBxAAIDVITgAhLA4ICQAAIhIjFg");
	this.shape_1.setTransform(29.6,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7EIIAAoPIBsAAIAAG1IELAAIAABag");
	this.shape_2.setTransform(-18.1,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjLEKIAAoTICsAAQBiAAAdAIQAvAMAeAoQAfAoAAA/QAAAygSAhQgSAggbAUQgcATgcAGQgmAHhIAAIhHAAIAADJgAhggYIA8AAQA+AAAVgIQAWgJANgSQAMgRgBgYQAAgdgRgTQgRgTgagFQgTgDg5AAIg1AAg");
	this.shape_3.setTransform(-66.4,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhDAAheIAAogQAAheBDhCQBDhDBeAAIehAAQBeAABDBDQBDBCAABeIAAIgQAABehDBDQhDBDheAAg");
	this.shape_4.setTransform(3.5,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhDAAheIAAogQAAheBDhCQBDhDBeAAIehAAQBeAABDBDQBDBCAABeIAAIgQAABehDBDQhDBDheAAg");
	this.shape_5.setTransform(3.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-43.9,241,100);


(lib.ביצהעידן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלעידן();
	this.instance.parent = this;
	this.instance.setTransform(-357,-534,0.569,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EApfAgdQAAHRi+G4QjQHel0ErQsLJvxOAAQxMAAsLpvQsLpwAAtxQAAh+AjlGQApl6BFnAQC4y1EWwLQFu1QHLsNQIzu/KbgRQKYgSIxObQHJLxFqU0QEVP3C3SlQBDG5ApF2QAjFDAAB+g");
	this.shape.setTransform(-40.5,-64.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357,-534,628,951.5);


(lib.ביצהדור_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהדור();
	this.instance.parent = this;
	this.instance.setTransform(-321,-476,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EAs3AjGQAAH4jNHcQjgIFmTFDQtLKiynAAQymAAtLqiQtKqjAAu5QAAiIAmlgQAsmaBKnkQDI0XEsxhQGM2+HxtOQJhwMLRgTQLOgTJfPmQHuMvGIWhQErRJDGUGQBJHdAsGVQAlFeAACHg");
	this.shape.setTransform(-7.9,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-476,628.9,951.5);


(lib.ביצהאופיר = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלאופיר();
	this.instance.parent = this;
	this.instance.setTransform(-308,-470,0.569,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EAtjAjoQAAH/jRHkQjjIMmaFIQtXKty5AAQy4AAtXqtQtYqsAAvIQAAiKAnlmQAtmgBLnrQDK0rEyxxQGR3VH5taQJqwdLcgTQLZgTJoP1QH2M7GOW3QEvRaDJUZQBKHlAsGbQAnFjAACJg");
	this.shape.setTransform(16.7,-10.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308,-470,628,951.5);


(lib.בועה1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRgBMAmtAAAQBRABAABkIAAHyICSFFg");
	this.shape.setTransform(8.4,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRAAMAmtAAAQBRAAAABkIAAHxICSFGg");
	this.shape_1.setTransform(8.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009966").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRgBMAmtAAAQBRABAABkIAAHyICSFFg");
	this.shape_2.setTransform(8.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-41.9,278.6,92.5);


(lib.myStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDoIAAmBIiKAAIAAhOIFxAAIAABOIiKAAIAAGBg");
	this.shape.setTransform(88.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABhDoIhEhlQgjg2gOgOQgNgOgPgFQgOgGghABIgTAAIAADBIheAAIAAnPIDFAAQBKAAAiAMQAiAMAUAgQAUAgABAqQAAA0ggAjQgeAgg+AKQAfARAUAWQAUAUAiA3IA4BagAhygjIBGAAQBCAAARgFQARgGAJgOQAKgOAAgVQgBgXgLgPQgOgPgWgDQgLgCg5AAIhJAAg");
	this.shape_1.setTransform(47.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACDDoIgohpIi5AAIgnBpIhjAAIC1nPIBiAAIC6HPgAhBAxIB9AAIg/isg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguDoIAAmBIiKAAIAAhOIFxAAIAABOIiKAAIAAGBg");
	this.shape_3.setTransform(-44.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiDDIQgwgpgJhOIBcgIQAHAtAaAWQAZAVAqAAQAtABAXgUQAXgTAAgaQAAgQgJgMQgKgMgZgIQgQgGg5gOQhMgTgfgaQgqgnAAg3QAAgjAUgfQAUgfAmgQQAmgQA1AAQBXAAAtAmQAsAmACBAIheAFQgGglgUgPQgUgPgngBQgoABgXAQQgPALgBASQABAQAOAMQARAPBEAQQBEAQAiASQAgARASAdQATAeAAAsQAAAogWAjQgWAjgpARQgoAQg9AAQhXAAgvgog");
	this.shape_4.setTransform(-86.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_5.setTransform(0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_6.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.playagin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyCBIhminIAACnIgxAAIAAkBIAyAAIBpCrIAAirIAwAAIAAEBg");
	this.shape.setTransform(99.2,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZCBIAAkBIAzAAIAAEBg");
	this.shape_1.setTransform(81.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJCBIgXg7IhmAAIgVA7Ig3AAIBkkBIA2AAIBnEBgAgkAbIBGAAIgjhfg");
	this.shape_2.setTransform(63.3,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7B0QgegRgPggQgPgfAAgkQAAgoARgfQARgfAggRQAZgNAkAAQAvAAAbAUQAbAVAIAiIg0AKQgFgSgPgMQgPgLgWABQghgBgUAWQgVAVAAArQAAAtAVAXQAUAXAggBQAQABARgHQAQgGAMgJIAAghIg8AAIAAgqIBwAAIAABlQgQAQgfAMQgfAMggAAQgnAAgegRg");
	this.shape_3.setTransform(36.2,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABJCBIgXg7IhlAAIgWA7Ig3AAIBkkBIA2AAIBnEBgAgkAbIBFAAIgihfg");
	this.shape_4.setTransform(9.5,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZCBIAAhsIheiVIA9AAIA7BmIA7hmIA8AAIheCVIAABsg");
	this.shape_5.setTransform(-25.4,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABJCBIgXg7IhlAAIgWA7Ig3AAIBkkBIA2AAIBnEBgAgkAbIBFAAIgihfg");
	this.shape_6.setTransform(-50.4,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaCAIAAj+IA0AAIAADSICAAAIAAAsg");
	this.shape_7.setTransform(-73.4,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhhCBIAAkBIBTAAQAuAAAPAFQAVAFAQAUQAOATAAAeQABAYgJARQgJAOgNAKQgNAJgOADQgTADgiAAIgiAAIAABigAgugLIAdAAQAdAAALgEQAKgEAGgJQAGgJAAgLQAAgOgIgJQgJgJgMgDQgKgBgbAAIgZAAg");
	this.shape_8.setTransform(-96.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_9.setTransform(0.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_10.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.butNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDpIAAmCIiKAAIAAhPIFxAAIAABPIiKAAIAAGCg");
	this.shape.setTransform(67.3,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABnDpIhniiIhnCiIhwAAICfjyIiQjfIBtAAIBdCWIBbiWIBtAAIiRDiICfDvg");
	this.shape_1.setTransform(25.7,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiwDpIAAnRIFYAAIAABPIj6AAIAABoIDoAAIAABMIjoAAIAAB/IEDAAIAABPg");
	this.shape_2.setTransform(-16.8,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbDpIi7kvIAAEvIhYAAIAAnRIBcAAIC9E2IAAk2IBXAAIAAHRg");
	this.shape_3.setTransform(-62.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_4.setTransform(0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_5.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("mySundEnd");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.music, null, null);


(lib.מדליה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2BA49").s().p("AAACZIi8CJIBIjdIi8iIIDpAAIBHjeIBIDeIDpAAIi8CIIBIDdg");
	this.shape.setTransform(3.1,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2BA49").s().p("AldFeQiSiRAAjNQAAjMCSiRQCRiSDMAAQDNAACRCSQCSCRAADMQAADNiSCRQiRCSjNAAQjMAAiRiSgAlClCQiGCGAAC8QAAC9CGCGQCGCGC8AAQC9AACGiGQCGiGAAi9QAAi8iGiGQiGiGi9AAQi8AAiGCGg");
	this.shape_1.setTransform(3.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD34D").s().p("AmaGbQiqiqAAjxQAAjvCqirQCriqDvAAQDxAACqCqQCqCqAADwQAADxiqCqQiqCqjxAAQjwAAiqiqg");
	this.shape_2.setTransform(3.1,-5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AAABqIlEFFIAAtdIKJAAIAANdg");
	this.shape_3.setTransform(3.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מדליה, new cjs.Rectangle(-55,-63.9,116.3,176.1), null);


(lib.מדהתקדמות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EAAAghWQBHAAAxBIQAyBJAABoMAAAA67QAABogyBIQgxBJhHAAQhGAAgyhJQgxhIAAhoMAAAg67QAAhoAxhJQAyhIBGAAg");
	this.shape.setTransform(-4,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EgB3AgOQgyhIAAhnMAAAg68QAAhnAyhKQAxhIBGAAQBGAAAyBIQAyBKAABnMAAAA68QAABngyBIQgyBJhGAAQhGAAgxhJg");
	this.shape_1.setTransform(-4,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מדהתקדמות, new cjs.Rectangle(-22,-212.4,36,429), null);


(lib.תבחראתהביצהשלך = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Layer>
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJFGQgdgdAAgkQAAgYANgaQAMgaAUgSQAogpBNgkQANgHAIAAQADAAADACQACADAAADQAAADgGALQgPAagMApQgLAoAAAeQAAAjAKAAQAHAAAHgMQAIgNAHgQQArhvANheIADgpIgOAKIgEAEIgJAGQhYBFgzAdQgyAcglAAQgqAAgageQgZgfAAgyQAAg/AkhDQAkhEA6g4QA6g4BGgiQBFgjBBAAQBAAAAiAWQAiAWAAAtQAAAlgeA2QAWABAJAMQAKAMAAAYQAAAogRBIQgQBGgXA9QgeBMg0A5QgpAqg9AfQg6AfgrAAQglAAgbgdgAAfj1QgaAbgXAmQgXAmgNAmQgMAmAAAeQAAAeAOAAQAPAAA5gwQAagXA6gqIABACIAAgCIgBAAIgBAAIgIABIgYABQgbAAAAgKQAAgFAHgHQAUgWAOgkQAOgkABgdIABgNIABgEIAAgCQAAgIgKAAQgTAAgqAsg");
	this.shape.setTransform(300.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiJFGQgdgdAAgkQAAgYANgaQAMgaATgSQAogpBOgkQANgHAIAAQADAAACACQADADAAADQAAADgGALQgQAagLApQgLAoAAAeQAAAjALAAQAFAAAIgMQAJgNAGgQQArhvANheIADgpIgOAKIgEAEIgJAGQhYBFgzAdQgyAcgmAAQgpAAgageQgZgfAAgyQAAg/AkhDQAjhEA7g4QA6g4BGgiQBFgjBBAAQBBAAAhAWQAiAWgBAtQAAAlgdA2QAVABAKAMQAKAMAAAYQAAAogQBIQgRBGgYA9QgdBMg1A5QgoAqg9AfQg6AfgrAAQgkAAgcgdgAAej1QgZAbgWAmQgYAmgMAmQgOAmAAAeQAAAeAPAAQAPAAA5gwQAagXA6gqIABACIAAgCIgBAAIgBAAIgIABIgYABQgbAAAAgKQAAgFAHgHQAUgWANgkQAOgkACgdIABgNIABgEIAAgCQAAgIgKAAQgUAAgqAsg");
	this.shape_1.setTransform(242.5,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_2.setTransform(191.9,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_3.setTransform(119.2,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjiDkQgVgZAAgnQAAgYAGgjQAGgiAJgoQAKgnANgqQANgqAPgmQAYg/AigkQAXgXAhAAQA1AAAABGQAAAygVBfIACACIAegkQAvg0AbgZQAbgaAXgLQAVgLAXAAQAkAAAPATQAPAUAAAwQAAAUgEAnQgGAzAAAtQAAA0AFAgQADATAIAUQAFASAAAHQAAAIgGAFQgQANgbALQgaAKgSAAQgdAAgYgUQgYgUgNgkQgNgjAAgtQAAgdAGgpIgCgCIgjAnIgZAbQg5BCgoA1IgdAkQgTATgYAAQggAAgVgZg");
	this.shape_4.setTransform(69.8,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_5.setTransform(14.4,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_6.setTransform(-64.1,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AizERQghgXAAgnQAAgcAWgcQAVgdAggSQAggSAfAAQAXAAAAALQAAAFgHALQgUAkAAAfQAAAVAQATQAfgBAZgcQAXgcAAghQAAgXgOgNQgPgQg4gPQhRgXgZgeQgXgWAAghQAAg8Arg6QArg8BCglQBCgmBEAAQAhAAAcAPQAdAQARAaQARAZAAAdQAAAegTAfQgSAggcAVQgcAUgZAAQgOAAgLgGQgKgHAAgGQAAgIAEgOQALgsAAggQAAghgUgdQgZASgHAKQgUAWgKAeQgMAcAAAbQAAATAJAKQAIAMATAHQATAIAnAJQBBAQAbAOQAGADANALQATAWAAAhQAAAkgWAjQgWAlguAnQgxApgxASQgwASg7AAQg5AAgggWg");
	this.shape_7.setTransform(-110.3,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_8.setTransform(-162.4,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_9.setTransform(-219.4,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABDE9QgYgkAAg6QABgXAEgiIgDgCIhgBlQhbBZgxAAQgXAAgOgeQgPgegBgxQAAhnBBigQAag+Acg5QAdg6AagpQATgeAVgVQAUgXAVgOQAVgPAWgHQAWgHAWAAQA4AAAiAhQAjAjAAA0QgBAmgUApQgVApgnAmQgXAXgfATQgfASgQAAQgGAAgDgDQgFgEAAgGQAAgIAOgZQAPgdAPgoQAOgpAJgkQAIglgBgZIAAgJQAAgTgEAAQgHAAgOAVQgPAUgLAZQgcBBgWBHQgUBIgMBGIgIA8IACACQAyg1AZgVQAagXAogbQAygjAhAAQAVAAALAPQAMAPAAAaQAAAPgHAdQgKA8AAArQAAASADAVQACARAPAyQALAlAAAEQAAAIgQAKQg2AkgvAAQgkAAgYglg");
	this.shape_10.setTransform(-273.9,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiNDWQgpgmAAg7QAAg6AahAQAahAAtg6QAtg6A4gnQApgcAnAAIACAAQAnACAXAVQAXAVAAAjQAAAfgRAfQgSAfgbAUQgbAUgbAAQgQAAgBgLQABgEAGgOQAUgiAAgsQAAgWgGAAQgGAAgOATQgNASgJAZQgRAogJAsQgKAsAAAfQAAAjAKAUQAKAUASAAQASAAAdgTQAdgSAbgbQAKgOAJAAQAMAAAAAOQAAA/gxAzQgiAigrAVQgsAVgjAAQg9AAgogng");
	this.shape_11.setTransform(-320.4,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תבחראתהביצהשלך, new cjs.Rectangle(-343.4,-59.5,674.7,119), null);


(lib.myName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaDCQgkghABg4QAAgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAZAbgBAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgKAAgMgFQAFAcAfAAQAjAAA4gqQAigYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogLAnQgMAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAHggQAGgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape.setTransform(277.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADQDnQgQgQgHgQQgJgQgDgWQgEgXAAgkQAAgYAGhLIgCgCIgIAMIiACDQgaAZgOAJQgPAJgTAAQgcAAgTgVQgUgWAAgfQAAgTAHgWQAFgXARgtQADgJAEgGIAEgMIgCgCQgtAvgsA1QgkAsgVAVQgWAWgSAKQgRALgOAAQgeAAgRgYQgTgYABgpQgBg0AuhzQAohnAWgjQAggxAqAAQAZAAAQAMQASAMgBATQAAAjgaBIQgKAbgMAiIACACIA4hCQBDhSAggeQAsgoAkAAQAQAAAPALQAOALAJASQAJASgBATQAAAVgdBTIgJAbIgHARIADACIAMgMIALgLIAMgLIBAhAQAigmATgOQATgOASAAQAdAAAQAVQAPATgBAnQAAAYgHA0QgHA5gCAhIgDAuIABAZQABAPAEASIAHAmIAHAoQgDARgVAMQgVAMgYAAQgnAAghgjg");
	this.shape_1.setTransform(219.6,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjZDFQgigjAAg2QAAghARguQARgsAegsQAwhHBLgyQBMgzBIAAQA7AAAoAZQAmAYgBAmQAAAcgSAeQAZABAGAFQAHAFAAAUIgCATQgDAuAAAoIABAgIABAZIADAWQADAWAJAWQgcAbgaANQgZANgbAAQhJAAABh5IAAgUIABAAIAAgCIgBACIgBgCQgsAzgjAhQgkAggfARQgfAQgaAAQg0AAgjgjgAAPiWQgrAvgZAyQgZAyAAAmQAAAZAKARQALARAQAAQANAAAkgdQAmgdAugvIAMgLIgBgBIgJACQgiAKgPAAQgSAAgBgKQAAgDAIgOQAbgogBgjQABgUgIgRQgGgQgJAAQgHAAgQAQgABLBVIgBAAIABgCIAAACg");
	this.shape_2.setTransform(156.6,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjPDQQgSgWAAgkQAAgWAFgfQAFggAJglQAJgjAMgnQAMgmAOgjQAVg6AfggQAVgVAeAAQAxAAAABAQAAAugUBWIADADIAbgiQAqgvAZgXQAagXATgLQAVgKAUAAQAhAAAOARQANATAAArQAAATgDAjQgGAvAAApQAAAvAFAdQADASAHASQAEARAAAGQAAAIgFADQgPAOgYAJQgYAJgQAAQgbAAgVgSQgXgSgLghQgMggAAgpQgBgbAGglIgCgCIggAkIgWAYQg1A8glAxIgaAgQgRASgVAAQgeAAgUgXg");
	this.shape_3.setTransform(105.7,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwEYQgfgiAAg3QAAgXAIgmQAIgmAShAIAGgYIADgNQgSgBgIgHQgIgIAAgRQAAgdAXgaQAWgaAfgIIACgFQAfhXAWgkQAKgQATgNQAkgYAgAAQATAAAKAJQAJAIAAAQQAAALgOAhQgYA3gLAxQAIABAHABQAcAFAJAFQAJAFAAAPQAAAZgNAVQgMAUgVAKQgPAIgjACQgGARgIAgIgIBOQgDASAAAQQAABKBHAAIADAAIACAAQAIAAAAADQAAAHgQATQgQARgTANQgVAPgYAIQgXAJgVAAQgxgBgeggg");
	this.shape_4.setTransform(39.3,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiaDCQgkghABg4QAAgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAZAbgBAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgKAAgMgFQAFAcAfAAQAjAAA4gqQAigYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAHggQAGgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_5.setTransform(2.3,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjnEhQgPgaAAgvQAAg0ALhIQAMhJAUhKQAThLAZg9QAQgmATgcQATgcARgNQANgHAOAAQAWAAAMAMQALALAAAXQAAASgDAWIgGAyIACACIAPgbQATgkASgZQASgYANgMQAOgLASgHQAQgFASAAQAkgBAcAWQAbAUAPAoQAPAnAAA0QAABJgiBEQggBDg2ApQg2Aqg5AAQggAAgXgOQgWgOgSgjIgEAIIgDALQgeBigSAuQgSAugNALQgLAJgNABQgbAAgPgbgAAuieQgTAZgTAgQgnBBgUAvQgFAMgCAJQANAnAkgBQAZABAXgXQAWgYANgmQANgoAAgrQAAgkgFgZQgFgZgHAAQgFAAgTAZg");
	this.shape_6.setTransform(-44.7,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7DPQgNgUAAguQAAglAIg1QAIg1AMgrIAEgMIACgMQASg/AOgfQAPgfAUgSQATgPAWAAQAhAAAHAoQAHgFAGgIQANgQAIgFQAHgGAKAAQAoAAAABQQAAArgJApQgJApgOAZQgPAZgOAAQgPAAAAg5QAAgfgEgRQgDgSgIgKQgOAagEBdIgFBEIgCAKIgCAXQgCAXgDAOQgDAPgHAKQgFAJgMALQgiAfgiAAQgdAAgNgVg");
	this.shape_7.setTransform(-112.5,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AibDCQgjghAAg4QABgrASg1QATg1AfgvQAlg3A2glQBBgsA9AAQAsAAAaAdQAYAbAAAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgLAAgLgFQAGAcAeAAQAkAAA4gqQAggYAMAAQAOAAAMAIQAMAHAAAJQAAAIgOANQgZAZggAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgkgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPAKgOQAagfANgmQALgaAFggQAHgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_8.setTransform(-148.2,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwEYQgfgiAAg3QAAgXAIgmQAIgmAShAIAGgYIADgNQgSgBgIgHQgIgIAAgRQAAgdAXgaQAWgaAfgIIACgFQAfhXAWgkQAKgQATgNQAkgYAgAAQATAAAKAJQAJAIAAAQQAAALgOAhQgYA3gLAxQAIABAHABQAcAFAJAFQAJAFAAAPQAAAZgNAVQgMAUgVAKQgPAIgjACQgGARgIAgIgIBOQgDASAAAQQAABKBHAAIADAAIACAAQAIAAAAADQAAAHgQATQgQARgTANQgVAPgYAIQgXAJgVAAQgxgBgeggg");
	this.shape_9.setTransform(-185.3,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjODQQgTgWAAgkQAAgWAFgfQAFggAJglQAIgjAMgnQAMgmAOgjQAWg6AfggQAVgVAeAAQAxAAAABAQAAAugTBWIABADIAbgiQArgvAagXQAYgXAVgLQATgKAVAAQAhAAAOARQANATAAArQAAATgDAjQgGAvAAApQAAAvAEAdQAEASAHASQAEARAAAGQAAAIgGADQgOAOgYAJQgYAJgQAAQgbAAgWgSQgVgSgMghQgNggAAgpQABgbAFglIgBgCIghAkIgXAYQg0A8gkAxIgaAgQgSASgWAAQgeAAgSgXg");
	this.shape_10.setTransform(-226.4,8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiaDCQgkghAAg4QABgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAYAbAAAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgLAAgLgFQAGAcAeAAQAjAAA5gqQAhgYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAGggQAHgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_11.setTransform(-271.2,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.myName, new cjs.Rectangle(-294.4,-56.6,594.1,109), null);


(lib.כותרותפתיחה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibI5Qg0gRghgZQgggbAAgZQAAgRASgVQATgWAggVQAzgjARAAQARAAAfAmQAnAtArAcQAWg2AXhQQAVhQAEgrQhCA/g5AeQg6Adg7gBQhHAAgyghQgygigag+QgbhAAAhVQAAhpA4hyQA4hxBehhQBfhhBug5QBvg6BqAAQCoAAAACUQAAA6geA2QggA3g0AgQg0Ahg5AAQgYAAABgRQgBgFAJgRQASgkAJgqQALg6AAggQAAg4gNAAQggAAg4AtQg5AsglA2QggAtgbBAQgcBAgPBBQgQBBgBA1QAAA0AXAhQAWAhAjAAQA9AABLiaQAZgqAIgMQAJgMAPgKQApgaA/gTQBAgWAjABQApAAAAAoIgFAeQgvDDhECjQhDCjhABFQgdAgg6AUQg6AVg7AAQgxAAgzgRg");
	this.shape.setTransform(323.7,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoPGxQAAgUAeg0QAjg5AshnQAHgVANgeIAviAIBAigQAghXAag0QATgjAAgQQAAgTgfgWQgVgOAAgMQAAgNApgPQAkgPAugKQAugMAcAAQA4AAAcAeQAhAiAyCzQATBIAZBDQAZBEAPAcQAFAMAUAeQAWhFAehyQAsi0Alg/QALgTAPgQQAbgaAggNQAggOAhAAQASAAAIALQAIAKgBAaQAAAUgCAJQgHAigRA4QgRA3geBXQgeBXgtB6IgKAZIgJAaQhSDjgqBDQgKAOgLAMQgVAWgUAAQg0gBg7huQhtjEg8jPQgNgngHgiIgDAAIhRD+QgBAHgEAKIgHAUIgGAQIgGAPQgXBDgOAiQgOAigOAXQgMAUgYAYQghAfgqASQgqATgoAAQgjAAAAgcg");
	this.shape_1.setTransform(225.7,111.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibI5Qg0gRghgZQgggbAAgZQAAgRASgVQATgWAggVQAzgjARAAQARAAAfAmQAnAtArAcQAWg2AXhQQAVhQAEgrQhCA/g5AeQg6Adg7gBQhHAAgyghQgygigag+QgbhAAAhVQAAhpA4hyQA4hxBehhQBfhhBug5QBvg6BqAAQCoAAAACUQAAA6geA2QggA3g0AgQg0Ahg5AAQgYAAABgRQgBgFAJgRQASgkAJgqQALg6AAggQAAg4gNAAQggAAg4AtQg5AsglA2QggAtgbBAQgcBAgPBBQgQBBgBA1QAAA0AXAhQAWAhAjAAQA9AABLiaQAZgqAIgMQAJgMAPgKQApgaA/gTQBAgWAjABQApAAAAAoIgFAeQgvDDhECjQhDCjhABFQgdAgg6AUQg6AVg7AAQgxAAgzgRg");
	this.shape_2.setTransform(128,124.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah7BMQgXgUAAgfQAAgUAMgdQALgfAMgLQAegdBiAAQBGAAAeANQAeANAAAeQAAAkgTAZQgRAYguARQhYAhgrAAQgjAAgWgUg");
	this.shape_3.setTransform(67.6,127.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnXHIQgQgIAAgSQAAgWBKhkQAagjANgUQhHgNAAgkQAAgeA5g6QAagcAYgIQAXgIA5AAIBFh9QAOgbAYgpIA1heIBQiMIgphKQAQgMANgFQAzgRBJAAQBJAAApAqQAiAlAXBCQAWBCASB7QAKA+AIAgIAfBvQAIAZAUA1IASAsIAVAzQAWA0AtBWQg5AognARQgmASghAAQgnAAgagQQgbgPgVgiQgagtgZhPIgGgSIgJgZQhOAhgtAAQgXAAgTgCQgPgBiAgDIgGAOQglBOggApQggApgqARQgqAQg/AAQgkAAgPgIgAhSBQIC0AAIg5kDIgCAAg");
	this.shape_4.setTransform(0.7,111.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnLG+QgegWAAgiQAAgZAShAQARhAAVg5Qg0gKAAgjQAAgZAQggQARgfAZgYQAZgYAXgHQAKgdAchdQBAjIAnhEQAQgXAMgNQAjggA2AAQAhAAAbALQAZAMAOAVQANAUAAAcQAAAmhfEaIgEAOIgGARIgDAEID2gEIAMgrQAVhEAXhDQAWhDARgoQAQgoARggQARgeAPgQQAjgmA9AAQBpAAAABaQAABVhcDiIgQAoIAFAAIAFAAQAkgBAVANQAWANAAAVQAAAPgSAcQgSAbgVAVQgUAVgOAJQgOAIgpAHIgDAMQgFAJgJAbIgdBOQgPAngKAWQgJAWgJAOQgMAQgPAMQggAZgqAQQgpAPgcAAQgfAAgSgPQgSgQAAgbQAAgxAyiYIAQgxIjtgDIgNAsIgLAnQgkB/gYAoQgEAIgNAPQgsAog+AAQgyAAgegWg");
	this.shape_5.setTransform(-97.9,112.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlvG/QgOgNAAgZQAAgcAOg1QANg1AriIIAMgmIANgpIB6lqIAJgYQgWAAgPAEQgQADgVAJQgZAJgJAAQgMAAgHgJQgHgIAAgOQAAgZAVgcQAVgcAfgMQAogQA/gJQA/gKA+AAQBGAAA4AKQA4AKArAWQAsAXAhAgQAhAhASArQARAsAAAxQAAAsgRA3QgSA3ggA0QgfA0gmAjQgrArhDAdQhDAdg3AAQgWAAgSgIQgSgIAAgNQAAgSAOgQQAPgRAkgZQAggSAcgaQAiglAQgpQAPgpAAg6QAAg3gSgmQgTgmgqgeIhbEoIgRA0QgLAggSBLQghCBgcAyQgNAWgUAWQggAbgxAWQgyAVgjAAQgYAAgNgOg");
	this.shape_6.setTransform(-190.4,111.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai2HLIgWgHQgngQAAgzQABglAVhhQAVhiAoiSQBblDAuhMQAPgaAVgOQAXgPAngIQAlgIAxAAQAtAAASAMQAUALAAAdQAAAbgYBMQgZBLgvBzIgXA2QgrBmgmBnQgRAxglB8QA3gFBegTQA9gMAMAAQAXAAABATQAAAWgaAoQgaAoghAcQgVAVgsAIQgsAIhbAAQhXAAgugFg");
	this.shape_7.setTransform(-257.8,112.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnXHIQgQgIAAgSQAAgWBKhkQAagjANgUQhHgNAAgkQAAgeA5g6QAagcAYgIQAXgIA5AAIBFh9QAOgbAYgpIA1heIBQiMIgphKQAQgMANgFQAzgRBJAAQBJAAApAqQAiAlAXBCQAWBCASB7QAKA+AIAgIAfBvIAcBOIASAsIAVAzQAWA0AtBWQg5AognARQgmASghAAQgnAAgagQQgbgPgVgiQgagtgZhPIgGgSIgJgZQhOAhgtAAQgXAAgTgCQgPgBiAgDIgGAOQglBOggApQggApgqARQgqAQg/AAQgkAAgPgIgAhSBQIC0AAIg5kDIgCAAg");
	this.shape_8.setTransform(-333.8,111.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlbG0QhPhMAAh+QAAhfAqh3QAph4BGhqQBTh7B5hRQCUhjCIAAQBkAAA4A/QA4A+AABuQAABUgsBdQguBchXBUQhHBHhEApQhGAogygBQgXAAgYgLQALA/BFAAQBPAAB/hdQBJg1AZAAQAgAAAbARQAbARAAARQAAAUgeAeQg4A3hIA2QhJA0hDAlQhDAihDAVQhDAUg0AAQiEAAhOhKgAAYjQQgnBagZBZQgbBXAABAQAAAXAJAoQAwggAYghQA3hEAfhYQAZg5ANhIQANhHAAg+QAAg6gYABQghgBhGCUg");
	this.shape_9.setTransform(405.7,-49.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj8JyQhGhLAAh7QAAg0AThVQAShVAniPIANg0IAIghQgqgBgRgRQgSgRAAgmQAAhCAzg7QAzg6BEgPIAFgMQBFjEAyhQQAXglAsgeQBQg0BHABQArgBAWAUQAVASABAkQgBAYgfBLQg1B7gaBtQASACAQAEQA/AKAUALQAUANAAAfQAAA4gcAvQgdAvguAXQgjAPhOAFQgNApgRBHQgIA/gMBvQgGApAAAkQAACmChAAIAGAAIADAAQATAAAAAGQAAARgjAoQglAngqAfQguAgg3ASQg2AUgtgBQhuAAhEhKg");
	this.shape_10.setTransform(322.7,-70.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMLZQgwgDgmgoQgngqgRgxQgQgxAAhOQAAitBBjZQBAjZBShjQAggpA6ABQA9AAAkA3QAmA4AABaQAACFgnCyQgmC0hFDBQgbBOgnAbQgbARglAAgAAxlFQhigEAAhzQAAg6AdhLQAchOAlgkQASgUAUgIQATgJAfAAQA0AAAaAbQAYAZAAA7QAABLgaBDQgaBDgrApQgrAqgtAAg");
	this.shape_11.setTransform(258.8,-69.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnQHTQgqgyAAhQQAAgyAMhHQAMhHAThSQAThRAchVQAahXAfhNQAxiCBFhIQAvgwBEABQBtgBAACPQAABngrDDIAEAEIA+hKQBghqA4g0QA4g0AtgYQAsgXAuAAQBLAAAeAoQAfAoAABiQAAApgJBRQgMBpAABdQAABpAKBBQAIAoAOAoQALAmAAANQAAASgNAIQggAdg2AVQg1AVglAAQg8AAgwgpQgygpgahJQgbhIAAhbQAAg9AMhTIgEgEIhIBPIg0A4Qh1CGhSBtQggAqgaAgQgnAmgxABQhEAAgqgzg");
	this.shape_12.setTransform(176.8,-46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkYHpQhtglg+g+QhVhUAAibQAAh6A8h5QA8h5BnhjQBmhkB7g5QB6g5B/AAQCcAAAAAkQAAAqhGAEQhVAFhKArQhJArg4BLQg6BKggBeQggBdAABnQAABzA2BGQA2BFBUAAQBQAAA8hSQA8hSAAhtQAAhYglhOQgmhPhHg1QgfgYABgLQgBgPAsgeQAwghA8gWQA8gWApAAQAvAAArAaQAqAYAgAuQAhAtASA8QAQA7ABBDQAABugqBtQgqBthEBDQhZBVh8A3Qh9A1hvAAQhtAAhrgmg");
	this.shape_13.setTransform(63.4,-50.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkaKbQg6g7AAhJQAAgyAZg0QAZg2AogmQBShTCfhKQAcgPAQAAQAGAAAFAFQAGAGAAAGQAAAHgNAVQgfA2gYBUQgYBTAAA9QAABHAWAAQAMAAARgZQAQgaAOghQBZjjAajBQADgcADg4IgcAVIgKAHIgSAOQi0COhnA6QhoA5hNAAQhVAAg0g+Qg0g+AAhoQAAiABJiJQBJiLB4h0QB3hzCPhFQCOhHCFAAQCEAABFAtQBEAuAABaQAABMg8BvQAsADATAYQAUAXAAAzQAABSghCTQgiCRgwB8Qg7CchtB0QhTBXh7A/Qh6A+hYAAQhKAAg5g7gAA/n3Qg1A5gvBNQgvBOgaBOQgaBNAAA+QAAA9AeAAQAdAAB2hiQA1guB3hWIACACIAAgEIgCACIgCgCQgGACgLAAQgTACgfAAQg2AAAAgTQAAgLAOgPQAogtAdhJQAdhKADg8QAAgOACgMIACgHIAAgGQAAgOgUAAQgpAAhVBYg");
	this.shape_14.setTransform(-55,-24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnnG5QhNhOABh6QgBhKAmhmQAmhlBDhiQBuifCmhwQCshyCfAAQCHAABXA4QBXA3AABTQgBA+grBGQA5AAAPAMQAOAMAAAsIgFArQgGBnAABbIABBGIAEA5QADAfADATQAJAxASAwQg+A/g6AdQg6Acg8AAQiiAAABkPQgBgcACgSIAAABIAAgEIAAADIgDgDQhjBzhPBJQhSBJhFAkQhFAlg6AAQh1AAhNhPgAAhlTQhgBrg5BvQg6BvAABXQAAA5AYAmQAYAmAjAAQAeAABUhBQBThBBnhrIAdgWIgFgFIgTAHQhMAUghAAQgpAAgBgUQAAgIARgfQA7haAAhOQAAgugPgkQgRgmgTAAQgQAAgjAjgACmC+IAAgBIAAgDIAAAEg");
	this.shape_15.setTransform(-172.2,-47.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkUHQQgfguAAhmQAAhSATh4QASh4AahgIAJgbQAAgGAGgUQAniPAghEQAhhFAugqQApghAzAAQBKAAAQBaQAPgMANgRQAfglARgMQAQgMAWAAQBbAAAACzQAABhgVBcQgVBbggA4QggA7ggAAQgjgBAAiCQAAhFgHgnQgIgogRgWQggA7gJDRQgHB5gEAgIgEAVQAAASgEAhQgEA0gIAhQgHAggPAXQgNAUgaAZQhMBGhOAAQg/AAgdgvg");
	this.shape_16.setTransform(-266.8,-48.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AoHLFQh3gWgmgiQgYgTAAglQAAgJAEgVID6tLQAbhhAcgoQATgYAdgPIAAgFIgPAAQgfABhgAiQhqAlgoAAQgVAAgIgHQgHgIgBgRQAAgqAYgyQAYgyAmgoQAlgoAogRQBcgkCcgUQCcgTC4AAQDEgBCLA/QCLA9BJB6QBHB6AACtQAACthFCvQhECvhyB3QkKEam7AAQiPAAh1gYgAjFFAIgIAnQgUBTgYAtQgRAigkAuQAeACAmAAQBbAAA+gMQA8gMA0geQA1gdAtgvQBYhZAvh1QAuh2AAiIQAAh/gmhnQgmhmhDg7QhDg8hXgGg");
	this.shape_17.setTransform(-374.2,-71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.כותרותפתיחה, new cjs.Rectangle(-451,-189.2,903.1,378.4), null);


(lib.טעות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ASvGEMgpIAAAQhZAAAAh5IAArDQAAh6BZABMAqTAAAQBZgBgBB6IAAJeIChGNg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.טעות, new cjs.Rectangle(-151.8,-56.2,304.6,112.5), null);


(lib.MyQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtQ = new cjs.Text("", "bold 15px 'Arial'");
	this.txtQ.name = "txtQ";
	this.txtQ.textAlign = "center";
	this.txtQ.lineHeight = 19;
	this.txtQ.lineWidth = 703;
	this.txtQ.parent = this;
	this.txtQ.setTransform(-1.5,-9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF66").s().p("Eg3YAEiIAApDMBuxAAAIAAJDg");
	this.shape.setTransform(-0.5,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtQ}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MyQ, new cjs.Rectangle(-354.9,-30.9,709,58), null);


(lib.ביצהבפתיחה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("Ak1gaII0iYIA4DNIo1CYg");
	this.shape.setTransform(30.7,-39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AkygPII4iXIAtC8IooCRg");
	this.shape_1.setTransform(30,-40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AkugEII6iWIAjCqIocCLg");
	this.shape_2.setTransform(29.4,-41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AkqAGII9iTIAYCXIoPCFg");
	this.shape_3.setTransform(28.7,-42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AknARIJAiSIAOCFIoCB+g");
	this.shape_4.setTransform(28.1,-43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AkjAcIJDiRIAEB0In2B3g");
	this.shape_5.setTransform(27.4,-44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AkiAnIJFiQIgGBjInqBwg");
	this.shape_6.setTransform(27.1,-46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AkkAxIJJiOIgRBRIneBpg");
	this.shape_7.setTransform(27,-47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AklA9IJMiNIgcA/InRBig");
	this.shape_8.setTransform(26.8,-48.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AEohGIgnAtInDBdIhlACg");
	this.shape_9.setTransform(26.7,-49.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("ADkg1IgwAbImXBPg");
	this.shape_10.setTransform(33.4,-50.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("Ai7AUIHmhYIpVCJg");
	this.shape_11.setTransform(26.4,-49.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("Ai3ABIGehJIBFAJIpXCIg");
	this.shape_12.setTransform(26.3,-49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ai0gOIGShCIBQAbIpbCHg");
	this.shape_13.setTransform(26.1,-50.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("Ai0gOIGRhDIBRAcIpbCHg");
	this.shape_14.setTransform(26.1,-50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AizgPIGQhCIBRAcIpbCHg");
	this.shape_15.setTransform(26.1,-50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AizgQIGQhCIBRAeIpbCHg");
	this.shape_16.setTransform(26.1,-50.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AizgRIGPhBIBSAeIpbCHg");
	this.shape_17.setTransform(26.1,-50.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AizgRIGPhCIBSAgIpbCHg");
	this.shape_18.setTransform(26.1,-50.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AizgSIGOhBIBTAgIpbCHg");
	this.shape_19.setTransform(26.1,-50.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AizgTIGNhBIBUAiIpbCHg");
	this.shape_20.setTransform(26.1,-50.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AiygUIGMhAIBUAiIpbCHg");
	this.shape_21.setTransform(26.1,-51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AiygVIGMg/IBUAiIpbCHg");
	this.shape_22.setTransform(26,-51);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AiygVIGMhAIBUAkIpbCHg");
	this.shape_23.setTransform(26,-51.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AiygVIGLhAIBVAlIpbCGg");
	this.shape_24.setTransform(26,-51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AixgWIGKg/IBWAlIpcCGg");
	this.shape_25.setTransform(26,-51.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AixgXIGJg/IBXAnIpcCGg");
	this.shape_26.setTransform(26,-51.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AixgYIGJg+IBXAnIpcCGg");
	this.shape_27.setTransform(26,-51.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AixgYIGIg+IBYAnIpcCGg");
	this.shape_28.setTransform(26,-51.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AixgZIGIg+IBYApIpdCGg");
	this.shape_29.setTransform(26,-51.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AixgaIGIg9IBYApIpdCGg");
	this.shape_30.setTransform(26,-51.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AixgbIGHg8IBZApIpdCGg");
	this.shape_31.setTransform(26,-51.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AiwgbIGGg9IBZArIpdCGg");
	this.shape_32.setTransform(26,-51.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AiwgcIGGg8IBZArIpdCGg");
	this.shape_33.setTransform(26,-51.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AiwgdIGFg8IBaAtIpdCGg");
	this.shape_34.setTransform(26,-51.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AirgWIGNhCIBQAmIiOAYIkdA9Ii4A2g");
	this.shape_35.setTransform(26.5,-50.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AingQIBfgNIE3g7IAZAIIAtAYIiRARIklA8IizBEg");
	this.shape_36.setTransform(27,-49.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AiigJIBhgNIE9hCIAaAHIAiATIiUAKIksA8IivBRg");
	this.shape_37.setTransform(27.5,-47.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AiegDIAPgCIEzg9IAFAAIjjAzIhVAKIirBdgAEKhXIAaAEIAXAPIiSACg");
	this.shape_38.setTransform(28.1,-46.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AiWgRIE7g+IBHACIkfBFIhmALIikBVgADshNIArgKIAaAEIANAJgADshNg");
	this.shape_39.setTransform(28.6,-45.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AiegcIFCg9IByAIIlDBRIhoAMIirBOgAEWhRIANgDIAcACIACAEgAEWhRg");
	this.shape_40.setTransform(29.1,-44.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AipgjIFJg9ICpATIgcAAIlXBbIhqALIizBIg");
	this.shape_41.setTransform(30.1,-44);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("Ai3gpIFSg9ICjAaIATAFIgdABIlcBhIhuAMIi6BAg");
	this.shape_42.setTransform(31.2,-43.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AjDgwIFZg9IClAhIAfAKIgeADIljBoIhwALIjBA5g");
	this.shape_43.setTransform(32.2,-42.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AjQg2IFgg9ICpAoIApAPIgfAEIlpBvIhyAKIjJAzg");
	this.shape_44.setTransform(33.3,-42.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("Ajcg9IFng8ICsAvIAzAUIgfAFIlvB2Ih0AKIjRArg");
	this.shape_45.setTransform(34.3,-41.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AjphDIFvg9ICuA2IA+AZIgfAHIl1B8Ih3AKIjYAlg");
	this.shape_46.setTransform(35.4,-41.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("Aj2hKIF3g8ICxA9IBJAeImcCKIh5AKIjgAeg");
	this.shape_47.setTransform(36.5,-40.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AkChQIF9g9IEJBmImkCUIliAgg");
	this.shape_48.setTransform(37.6,-40.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AkPhXIGFg8IEWByImqCcIltAZg");
	this.shape_49.setTransform(38.6,-39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

	// Layer 3
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","rgba(251,253,251,0.988)","rgba(242,249,244,0.957)","rgba(229,243,233,0.902)","rgba(212,235,218,0.827)","rgba(189,225,199,0.725)","rgba(160,213,177,0.604)","rgba(125,200,153,0.459)","rgba(77,187,127,0.29)","rgba(0,174,100,0.106)","rgba(0,168,90,0)"],[0,0.247,0.38,0.49,0.584,0.667,0.749,0.82,0.89,0.953,0.988],0,0,0,0,0,3.5).s().p("AgYAZQgJgKgBgPQABgNAJgLQALgKANAAQAOAAALAKQAKALgBANQABAPgKAKQgLAJgOABQgNgBgLgJg");
	this.shape_50.setTransform(23.4,-40.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#373535","#292929","#2A2C2B","#2B362F","#284633","#1F5D3D","#147849","#029553","#00A85A","rgba(0,168,90,0)"],[0,0.212,0.325,0.42,0.502,0.573,0.639,0.702,0.725,0.988],0,0,0,0,0,10).s().p("AhGBHQgdgeAAgpQAAgoAdgeQAegdAoAAQAqAAAcAdQAdAeAAAoQAAApgdAeQgcAdgqAAQgpAAgdgdg");
	this.shape_51.setTransform(31,-38.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#EE3338","#EE3738","#EF4338","#F05439","#F2693B","#F5823F","#F89D46","#FBB24C"],[0,0.169,0.322,0.475,0.624,0.769,0.91,1],0,0,0,0,0,25.3).s().p("AiOBZQhJgOg3gkQArgxBCgiQBEgjBRgMQBQgLBLAOQBJAOA3AkQgrAxhCAiQhFAjhQAMQgjAFgiAAQgsAAgqgIg");
	this.shape_52.setTransform(32.3,-38.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AA0AzIghgpIg7hNIiYAoIhRASQgXAGg6ALIBOgcIBPgaICog0IBmCGIAaAlIC+guQAYgGAqgIIkIBWg");
	this.shape_53.setTransform(-51.3,-28.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AhZAGIgng/Iggg2QgjAwgeAlQAWgpAlg/IAGgKIBeCEIBKByIAugUIA5gYIA5gXQAkgOAWgIIihBbIhBAhg");
	this.shape_54.setTransform(100.8,-40.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgiC8IimAtIkNh4IEhl6IFyAdIEYDDIjTEzg");
	this.shape_55.setTransform(31.2,-38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},14).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},36).wait(1));

	// Layer 2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFF215").s().p("AijA3Ij+qzIK/DcIExjvQgCGsjsFiQjlFal5CrIlRAMg");
	this.shape_56.setTransform(84.8,140.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF215").s().p("AmMIZIlhDwQA8l/CDmpQCNnOC2lvIBdCQIN8AbIo1K0ID7NZg");
	this.shape_57.setTransform(-63.9,-46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F89734").s().p("EgItAgKQkBhtjHjHQjGjGhtkCQhxkKAAkkQAAiuAnj3QA9l/CCmqQCOnNC2lvQDBmFDQjYQDqjyDqAAQEWAAEZFXQD0EqDXIDQC/HKB4H4QBzHgAAEzIAAAIQgCGsjsFkQjmFal6CqIAAAAQkXB+k1AAQkjAAkKhwg");
	this.shape_58.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},14).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.8,-217,286.8,434.1);


(lib.EggIdan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלעידן();
	this.instance.parent = this;
	this.instance.setTransform(-150,-229,0.273,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggIdan1, new cjs.Rectangle(-150,-229,301.6,456.3), null);


(lib.EggDor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהדור();
	this.instance.parent = this;
	this.instance.setTransform(-154,-240,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggDor1, new cjs.Rectangle(-154,-240,317.4,480.3), null);


(lib.EggOfir1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלאופיר();
	this.instance.parent = this;
	this.instance.setTransform(-157,-237,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggOfir1, new cjs.Rectangle(-157,-237,317.5,480.4), null);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBgQAAgEABgHIAHgMQAEgGAGgFQAIgFARgHIgPgaQgFgIgFgOQgOgeAAgYQABgUAFgMQADgKAMgEQAJgDAHgBQAKAAADAIQAEAIADAcQACAfAHAdIACAMIABAAIAIgVIALgcIAIgXIACgHQAFgPAIgJQAFgFAHgDQAGgEAHAAQAJAAABAIQAAAFgDAJIgHAVIgMAaIgNAcQgOAbgNATQgKAOgKALQgLAKgLAIQgLAJgKAEQgKAFgIAAQgIAAABgHg");
	this.shape.setTransform(67.8,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBFQgFgHAAgPQAAgNADgRQADgRAEgOIABgFIABgDQAGgWAFgKQAEgKAHgGQAGgFAHAAQALAAADAOIAEgFIAHgHQACgCAEAAQANAAAAAaQAAAPgDANQgDAOgFAIQgFAJgEAAQgGgBAAgSIgBgQQgBgGgCgDQgFAIgCAeIgBAYIgBADIAAAHIgCAMIgDAJIgFAHQgMAKgLAAQgKAAgEgHg");
	this.shape_1.setTransform(54.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBCQgLgMAAgSQAAgLAFgPQAGgOAKgPQARgYAZgQQAYgRAXAAQAVAAANAIQANAIgBANQAAAJgGAKQAJAAACACQACACAAAGIgBAHIgBAcIABAKIAAAJIABAHQABAHADAIQgJAJgJAEQgJAEgJAAQgXAAAAgoIAAgHIAAAAIAAAAIgBAAQgOARgLALQgMALgLAFQgKAFgJAAQgSAAgLgLgAAFgxQgOAPgIARQgJARAAAMQABAIADAGQADAFAFAAQAFAAALgJQANgKAPgPIAFgDIgBgBIgDABQgLADgFAAQgGAAgBgDIADgGQAJgNAAgMQAAgHgDgFQgBgGgEAAQgCAAgFAGg");
	this.shape_2.setTransform(40.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BfQgNgOAAgVQAAgSAHgXQAIgXAMgYQANgYAPgTQAOgTAOgLQAJgGAMAAQAIAAAHAFQAHAGADAJQAEAJAAAMQAAAYgJAXQgKAXgRARQgIAIgIAFQgHAFgGAAQgEAAAAgFQAAgCADgHQAFgIAHgRIACgDIACgGQAGgRAEgTQAEgUAAgKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgDAAgGALQgGALgEALIgNAqQgFAQgCALQgCAMAAAMQAAAKACAFQADAEAFABQAHgBALgHQAKgIAJgMQAHgJADAAQAFgBAAAJQAAAQgKAQQgLAQgQAKQgQAKgRAAQgVAAgNgNg");
	this.shape_3.setTransform(24.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBGQgGgIAAgKQAAgUAGgYQAGgYAJgZQALgaAPgGQAFgDAHAAQAKABAGAFQAFAHAAAKQAAAGgCAIIgHATIgCAEQgNAbAAAHQAAAAAAABQAAABAAAAQABABAAAAQABAAAAAAQADAAAEgDIALgMIANgOIAGgGIAFgFQAQgPAKgIQAKgGAGgBQANABAAAVIgBAQQgCAWAAAQIAAAFIAAAGIACARIABAIQAAAFgJAEQgIAEgLgBQgKAAgIgDQgHgEgEgIQgDgIAAgMIAAgEIAAgJIgCACIgLAIIgeAXQgMAJgIADQgIAEgFAAQgIAAgFgGg");
	this.shape_4.setTransform(8.5,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBqQgLgHgGgOQgGgNAAgSQAAgRAFgVQAGgUAKgWQAJgWAOgUQAOgWASgNQANgJAOAAQAOAAAJAJQAIAIAAAPQAAAKgHAMQgIALgMAHQgMAIgMAAQgFAAAAgDQAAgCAEgGQAIgKAFgMQAFgMAAgJQAAgIgCAAQgDAAgHAKQgHAKgFAOQgLAfgGAdQgHAcAAAUQAAAPAFALQAFAKAGAAQAJAAAGgKQAGgKABgSIgGABQgFAAgEgEQgDgEAAgGQAAgNAJgTQAIgTAKgJQAHgHAJAAQAHAAAFAEQAFAFACAJQADAIAAALQAAAdgMAZQgMAagVAPQgUAPgWAAQgPAAgMgHg");
	this.shape_5.setTransform(-7.5,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBCQgMgMAAgSQAAgLAGgPQAFgOAKgPQAQgYAZgQQAZgRAYAAQATAAANAIQANAIABANQgBAJgGAKQAIAAACACQADACAAAGIgBAHIgBAcIAAAKIABAJIABAHQABAHADAIQgJAJgJAEQgIAEgKAAQgYAAAAgoIAAgHIAAAAIAAAAIAAAAQgOARgMALQgMALgKAFQgKAFgJAAQgSAAgKgLgAAFgxQgNAPgJARQgJARABAMQgBAIAEAGQAEAFAEAAQAFAAAMgJQAMgKAPgPIAEgDIAAgBIgDABQgLADgFAAQgHAAABgDIACgGQAJgNAAgMQAAgHgCgFQgDgGgDAAQgCAAgFAGg");
	this.shape_6.setTransform(-23.7,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBCQgNgNAAgRQABgSAHgTQAIgTAOgSQANgSARgMQAMgIAMAAIABAAQALABAIAGQAGAHABALQgBAIgFAKQgFAKgIAGQgJAGgIAAQgEAAgBgDIACgGQAHgKgBgNQABgIgCABQgCAAgFAFQgDAGgEAIIgHAZQgDAMAAAKQAAAKADAHQADAGAGAAQAFAAAJgGQAIgGAIgHQAEgFADAAQADAAAAAFQAAASgPAQQgKALgNAGQgNAGgLAAQgSAAgMgLg");
	this.shape_7.setTransform(-38.7,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBJQgQgGgKgJQgMgNAAgWQAAgTAJgRQAJgSAPgPQAQgOASgJQARgIATAAQAXAAAAAFQAAAGgLABQgMABgLAGQgLAGgIALQgIAMgEANQgGAOAAAPQABARAHAKQAIALAMAAQAMAAAJgNQAJgMAAgQQAAgMgGgMQgFgMgLgIQgEgDAAgCQAAgCAGgEQAIgFAIgEQAJgDAGAAQAIAAAFAEQAHAEAFAGQAFAHADAJQACAJAAAKQAAAPgHARQgFAQgLAKQgNAMgSAIQgTAIgPAAQgRAAgQgFg");
	this.shape_8.setTransform(-53.6,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvA9QgDgKgEgPQgDgPgCgPQgCgPAAgOQAAgTAEgOQADgNAGgFQAGgDAFAAQAIAAAGADQAHACADAEQAEADABAGQABAFABALIABAfIAAAIIAAAOIAAARIABAAIAEgKIASgpIAMgZIADgGIACgFIAHgLQADgDAEAAQANAAAAAdQAAAJgCAGQgBAGgCAFIgKASIgOATIgRAVQgPAUgKAJQgLAKgHAAQgOAAgGgRg");
	this.shape_9.setTransform(-68.5,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-19.5,235,39);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBgQAAgEABgHIAHgMQAEgGAGgFQAIgFARgHIgPgaQgFgIgFgOQgOgeAAgYQABgUAFgMQADgKAMgEQAJgDAHgBQAKAAADAIQAEAIADAcQACAfAHAdIACAMIABAAIAIgVIALgcIAIgXIACgHQAFgPAIgJQAFgFAHgDQAGgEAHAAQAJAAABAIQAAAFgDAJIgHAVIgMAaIgNAcQgOAbgNATQgKAOgKALQgLAKgLAIQgLAJgKAEQgKAFgIAAQgIAAABgHg");
	this.shape.setTransform(67.8,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBFQgFgHAAgPQAAgNADgRQADgRAEgOIABgFIABgDQAGgWAFgKQAEgKAHgGQAGgFAHAAQALAAADAOIAEgFIAHgHQACgCAEAAQANAAAAAaQAAAPgDANQgDAOgFAIQgFAJgEAAQgGgBAAgSIgBgQQgBgGgCgDQgFAIgCAeIgBAYIgBADIAAAHIgCAMIgDAJIgFAHQgMAKgLAAQgKAAgEgHg");
	this.shape_1.setTransform(54.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBCQgLgMAAgSQAAgLAFgPQAGgOAKgPQARgYAZgQQAYgRAXAAQAVAAANAIQANAIgBANQAAAJgGAKQAJAAACACQACACAAAGIgBAHIgBAcIABAKIAAAJIABAHQABAHADAIQgJAJgJAEQgJAEgJAAQgXAAAAgoIAAgHIAAAAIAAAAIgBAAQgOARgLALQgMALgLAFQgKAFgJAAQgSAAgLgLgAAFgxQgOAPgIARQgJARAAAMQABAIADAGQADAFAFAAQAFAAALgJQANgKAPgPIAFgDIgBgBIgDABQgLADgFAAQgGAAgBgDIADgGQAJgNAAgMQAAgHgDgFQgBgGgEAAQgCAAgFAGg");
	this.shape_2.setTransform(40.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BfQgNgOAAgVQAAgSAHgXQAIgXAMgYQANgYAPgTQAOgTAOgLQAJgGAMAAQAIAAAHAFQAHAGADAJQAEAJAAAMQAAAYgJAXQgKAXgRARQgIAIgIAFQgHAFgGAAQgEAAAAgFQAAgCADgHQAFgIAHgRIACgDIACgGQAGgRAEgTQAEgUAAgKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgDAAgGALQgGALgEALIgNAqQgFAQgCALQgCAMAAAMQAAAKACAFQADAEAFABQAHgBALgHQAKgIAJgMQAHgJADAAQAFgBAAAJQAAAQgKAQQgLAQgQAKQgQAKgRAAQgVAAgNgNg");
	this.shape_3.setTransform(24.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBGQgGgIAAgKQAAgUAGgYQAGgYAJgZQALgaAPgGQAFgDAHAAQAKABAGAFQAFAHAAAKQAAAGgCAIIgHATIgCAEQgNAbAAAHQAAAAAAABQAAABAAAAQABABAAAAQABAAAAAAQADAAAEgDIALgMIANgOIAGgGIAFgFQAQgPAKgIQAKgGAGgBQANABAAAVIgBAQQgCAWAAAQIAAAFIAAAGIACARIABAIQAAAFgJAEQgIAEgLgBQgKAAgIgDQgHgEgEgIQgDgIAAgMIAAgEIAAgJIgCACIgLAIIgeAXQgMAJgIADQgIAEgFAAQgIAAgFgGg");
	this.shape_4.setTransform(8.5,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBqQgLgHgGgOQgGgNAAgSQAAgRAFgVQAGgUAKgWQAJgWAOgUQAOgWASgNQANgJAOAAQAOAAAJAJQAIAIAAAPQAAAKgHAMQgIALgMAHQgMAIgMAAQgFAAAAgDQAAgCAEgGQAIgKAFgMQAFgMAAgJQAAgIgCAAQgDAAgHAKQgHAKgFAOQgLAfgGAdQgHAcAAAUQAAAPAFALQAFAKAGAAQAJAAAGgKQAGgKABgSIgGABQgFAAgEgEQgDgEAAgGQAAgNAJgTQAIgTAKgJQAHgHAJAAQAHAAAFAEQAFAFACAJQADAIAAALQAAAdgMAZQgMAagVAPQgUAPgWAAQgPAAgMgHg");
	this.shape_5.setTransform(-7.5,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBCQgMgMAAgSQAAgLAGgPQAFgOAKgPQAQgYAZgQQAZgRAYAAQATAAANAIQANAIABANQgBAJgGAKQAIAAACACQADACAAAGIgBAHIgBAcIAAAKIABAJIABAHQABAHADAIQgJAJgJAEQgIAEgKAAQgYAAAAgoIAAgHIAAAAIAAAAIAAAAQgOARgMALQgMALgKAFQgKAFgJAAQgSAAgKgLgAAFgxQgNAPgJARQgJARABAMQgBAIAEAGQAEAFAEAAQAFAAAMgJQAMgKAPgPIAEgDIAAgBIgDABQgLADgFAAQgHAAABgDIACgGQAJgNAAgMQAAgHgCgFQgDgGgDAAQgCAAgFAGg");
	this.shape_6.setTransform(-23.7,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBCQgNgNAAgRQABgSAHgTQAIgTAOgSQANgSARgMQAMgIAMAAIABAAQALABAIAGQAGAHABALQgBAIgFAKQgFAKgIAGQgJAGgIAAQgEAAgBgDIACgGQAHgKgBgNQABgIgCABQgCAAgFAFQgDAGgEAIIgHAZQgDAMAAAKQAAAKADAHQADAGAGAAQAFAAAJgGQAIgGAIgHQAEgFADAAQADAAAAAFQAAASgPAQQgKALgNAGQgNAGgLAAQgSAAgMgLg");
	this.shape_7.setTransform(-38.7,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBJQgQgGgKgJQgMgNAAgWQAAgTAJgRQAJgSAPgPQAQgOASgJQARgIATAAQAXAAAAAFQAAAGgLABQgMABgLAGQgLAGgIALQgIAMgEANQgGAOAAAPQABARAHAKQAIALAMAAQAMAAAJgNQAJgMAAgQQAAgMgGgMQgFgMgLgIQgEgDAAgCQAAgCAGgEQAIgFAIgEQAJgDAGAAQAIAAAFAEQAHAEAFAGQAFAHADAJQACAJAAAKQAAAPgHARQgFAQgLAKQgNAMgSAIQgTAIgPAAQgRAAgQgFg");
	this.shape_8.setTransform(-53.6,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvA9QgDgKgEgPQgDgPgCgPQgCgPAAgOQAAgTAEgOQADgNAGgFQAGgDAFAAQAIAAAGADQAHACADAEQAEADABAGQABAFABALIABAfIAAAIIAAAOIAAARIABAAIAEgKIASgpIAMgZIADgGIACgFIAHgLQADgDAEAAQANAAAAAdQAAAJgCAGQgBAGgCAFIgKASIgOATIgRAVQgPAUgKAJQgLAKgHAAQgOAAgGgRg");
	this.shape_9.setTransform(-68.5,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-19.5,235,39);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBgQAAgEABgHIAHgMQAEgGAGgFQAIgFARgHIgPgaQgFgIgFgOQgOgeAAgYQABgUAFgMQADgKAMgEQAJgDAHgBQAKAAADAIQAEAIADAcQACAfAHAdIACAMIABAAIAIgVIALgcIAIgXIACgHQAFgPAIgJQAFgFAHgDQAGgEAHAAQAJAAABAIQAAAFgDAJIgHAVIgMAaIgNAcQgOAbgNATQgKAOgKALQgLAKgLAIQgLAJgKAEQgKAFgIAAQgIAAABgHg");
	this.shape.setTransform(67.8,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBFQgFgHAAgPQAAgNADgRQADgRAEgOIABgFIABgDQAGgWAFgKQAEgKAHgGQAGgFAHAAQALAAADAOIAEgFIAHgHQACgCAEAAQANAAAAAaQAAAPgDANQgDAOgFAIQgFAJgEAAQgGgBAAgSIgBgQQgBgGgCgDQgFAIgCAeIgBAYIgBADIAAAHIgCAMIgDAJIgFAHQgMAKgLAAQgKAAgEgHg");
	this.shape_1.setTransform(54.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBCQgLgMAAgSQAAgLAFgPQAGgOAKgPQARgYAZgQQAYgRAXAAQAVAAANAIQANAIgBANQAAAJgGAKQAJAAACACQACACAAAGIgBAHIgBAcIABAKIAAAJIABAHQABAHADAIQgJAJgJAEQgJAEgJAAQgXAAAAgoIAAgHIAAAAIAAAAIgBAAQgOARgLALQgMALgLAFQgKAFgJAAQgSAAgLgLgAAFgxQgOAPgIARQgJARAAAMQABAIADAGQADAFAFAAQAFAAALgJQANgKAPgPIAFgDIgBgBIgDABQgLADgFAAQgGAAgBgDIADgGQAJgNAAgMQAAgHgDgFQgBgGgEAAQgCAAgFAGg");
	this.shape_2.setTransform(40.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BfQgNgOAAgVQAAgSAHgXQAIgXAMgYQANgYAPgTQAOgTAOgLQAJgGAMAAQAIAAAHAFQAHAGADAJQAEAJAAAMQAAAYgJAXQgKAXgRARQgIAIgIAFQgHAFgGAAQgEAAAAgFQAAgCADgHQAFgIAHgRIACgDIACgGQAGgRAEgTQAEgUAAgKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgDAAgGALQgGALgEALIgNAqQgFAQgCALQgCAMAAAMQAAAKACAFQADAEAFABQAHgBALgHQAKgIAJgMQAHgJADAAQAFgBAAAJQAAAQgKAQQgLAQgQAKQgQAKgRAAQgVAAgNgNg");
	this.shape_3.setTransform(24.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBGQgGgIAAgKQAAgUAGgYQAGgYAJgZQALgaAPgGQAFgDAHAAQAKABAGAFQAFAHAAAKQAAAGgCAIIgHATIgCAEQgNAbAAAHQAAAAAAABQAAABAAAAQABABAAAAQABAAAAAAQADAAAEgDIALgMIANgOIAGgGIAFgFQAQgPAKgIQAKgGAGgBQANABAAAVIgBAQQgCAWAAAQIAAAFIAAAGIACARIABAIQAAAFgJAEQgIAEgLgBQgKAAgIgDQgHgEgEgIQgDgIAAgMIAAgEIAAgJIgCACIgLAIIgeAXQgMAJgIADQgIAEgFAAQgIAAgFgGg");
	this.shape_4.setTransform(8.5,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBqQgLgHgGgOQgGgNAAgSQAAgRAFgVQAGgUAKgWQAJgWAOgUQAOgWASgNQANgJAOAAQAOAAAJAJQAIAIAAAPQAAAKgHAMQgIALgMAHQgMAIgMAAQgFAAAAgDQAAgCAEgGQAIgKAFgMQAFgMAAgJQAAgIgCAAQgDAAgHAKQgHAKgFAOQgLAfgGAdQgHAcAAAUQAAAPAFALQAFAKAGAAQAJAAAGgKQAGgKABgSIgGABQgFAAgEgEQgDgEAAgGQAAgNAJgTQAIgTAKgJQAHgHAJAAQAHAAAFAEQAFAFACAJQADAIAAALQAAAdgMAZQgMAagVAPQgUAPgWAAQgPAAgMgHg");
	this.shape_5.setTransform(-7.5,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBCQgMgMAAgSQAAgLAGgPQAFgOAKgPQAQgYAZgQQAZgRAYAAQATAAANAIQANAIABANQgBAJgGAKQAIAAACACQADACAAAGIgBAHIgBAcIAAAKIABAJIABAHQABAHADAIQgJAJgJAEQgIAEgKAAQgYAAAAgoIAAgHIAAAAIAAAAIAAAAQgOARgMALQgMALgKAFQgKAFgJAAQgSAAgKgLgAAFgxQgNAPgJARQgJARABAMQgBAIAEAGQAEAFAEAAQAFAAAMgJQAMgKAPgPIAEgDIAAgBIgDABQgLADgFAAQgHAAABgDIACgGQAJgNAAgMQAAgHgCgFQgDgGgDAAQgCAAgFAGg");
	this.shape_6.setTransform(-23.7,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBCQgNgNAAgRQABgSAHgTQAIgTAOgSQANgSARgMQAMgIAMAAIABAAQALABAIAGQAGAHABALQgBAIgFAKQgFAKgIAGQgJAGgIAAQgEAAgBgDIACgGQAHgKgBgNQABgIgCABQgCAAgFAFQgDAGgEAIIgHAZQgDAMAAAKQAAAKADAHQADAGAGAAQAFAAAJgGQAIgGAIgHQAEgFADAAQADAAAAAFQAAASgPAQQgKALgNAGQgNAGgLAAQgSAAgMgLg");
	this.shape_7.setTransform(-38.7,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBJQgQgGgKgJQgMgNAAgWQAAgTAJgRQAJgSAPgPQAQgOASgJQARgIATAAQAXAAAAAFQAAAGgLABQgMABgLAGQgLAGgIALQgIAMgEANQgGAOAAAPQABARAHAKQAIALAMAAQAMAAAJgNQAJgMAAgQQAAgMgGgMQgFgMgLgIQgEgDAAgCQAAgCAGgEQAIgFAIgEQAJgDAGAAQAIAAAFAEQAHAEAFAGQAFAHADAJQACAJAAAKQAAAPgHARQgFAQgLAKQgNAMgSAIQgTAIgPAAQgRAAgQgFg");
	this.shape_8.setTransform(-53.6,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvA9QgDgKgEgPQgDgPgCgPQgCgPAAgOQAAgTAEgOQADgNAGgFQAGgDAFAAQAIAAAGADQAHACADAEQAEADABAGQABAFABALIABAfIAAAIIAAAOIAAARIABAAIAEgKIASgpIAMgZIADgGIACgFIAHgLQADgDAEAAQANAAAAAdQAAAJgCAGQgBAGgCAFIgKASIgOATIgRAVQgPAUgKAJQgLAKgHAAQgOAAgGgRg");
	this.shape_9.setTransform(-68.5,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-19.5,235,39);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אדמהבלבד01();
	this.instance.parent = this;
	this.instance.setTransform(-510,28,0.251,0.198);

	this.instance_1 = new lib.רקע201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-542.3,-573.6,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-542.3,-573.6,1084.7,1054.6);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOHZIAAAAQgYgDgQgOQgQgPgGgYQgOg3AmhCQAegyAugbQARgKARgFQAUgFATADQAxAEAOAzQANA4gpBBQgeAxgrAaQgTAMgTAFQgNADgNAAIgJAAgAAADmQgLADgQAJQgnAXgcAtQghA4AMAsQAIAhAfADQANACAOgEQAPgEAQgKQAmgXAbgrQAig4gKgsQgJghgggDIgLAAQgKAAgJACgAhiCqQgLgIAAgOIAIokQAAgJAFgHQAGgHAIgCIABAAIDDgvQAOgDAKAKQAKALgDAOQgnCxgOBdQgUB+gFCRQAAAIgEAHQgFAHgIACIh9AwIgCABIgIABQgHAAgGgFgAhLmPIgJIjIB+gwQAEiSAUiBQANhXAoi4g");
	this.shape.setTransform(840.3,211.7,2.671,2.671);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD00").s().p("AhMG+QgfgDgJghQgLgsAhg4QAbgtAngXQAfgSAaAEQAhADAIAhQAMAsgkA4QgbArglAXQgbARgYAAIgHgBgAhMmPIDDgvQglCpgQBmQgUCBgFCSIh9Awg");
	this.shape_1.setTransform(845.5,214.9,2.671,2.671);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNHMQgpgFgKgqQgMgxAjg9QAdgvAqgZQAQgKAPgEQAQgFASADQAqAEAKAqQAMAyglA8QgcAugqAZQgRAKgRAFQgMADgLAAIgIAAgAhbCfQgFgEAAgHIAIojQAAgLAJgCIDEgvQAHgBAFAFQAEAEgBAIQgkCkgRBrQgTB+gGCTQAAAJgIADIh9AwIgBAAIgEAAQgEAAgDgCg");
	this.shape_2.setTransform(840.3,211.8,2.671,2.671);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSHeIgBAAQgYgDgQgOQgQgPgGgYQgOg3AnhCQAegyAugbQARgKARgFQATgFATACQAyAGANAyQAOA4gpBBQgfAxgrAaQgSAMgTAFQgOADgMAAIgJAAgAhpmgID+g9IgJAqQgnCzgOBbQgUCEgECLIgBASIiwBDg");
	this.shape_3.setTransform(849.8,219.3,2.671,2.671);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhqHIQgpgSgjgxQglgzgThLQgRhHgBhcQAAiaA2iZQBEjBB7g1QANgGALgCQAwgOAtAUQApATAiAwQAmA2ATBMQASBFABBcQABCXg3CbQhGDAh5A0IgZAJQgUAGgTAAQgcAAgagMgAAUm0QgMADgJAFQhxAwhAC2Qg0CUAACWQAABWARBHQARBDAiAxQA9BVBSgWQALgDAKgEQBwgwBAi1QA1iVAAiUQAAhXgShEQgRhGgjgyQgwhEg+AAQgPAAgQAEgAgjDrQgYgSgKgnQgHgcgBgmQAAhJAYhUQAehtAwgVIAHgDQAngKAZA7QAbBCACBPQABBEgVA7QgaBJgzAWIgNAFQgJACgIAAQgSAAgPgKgAAniYIgEABQglARgaBgQgXBTAABDQAAAhAHAaQAHAeAQAMQANAJARgFIAJgDQAogSAWg/QAUg1gBhAQgBhIgZg+QgQgigOAAIgEAAg");
	this.shape_4.setTransform(529,310.3,2.671,2.671);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCD00").s().p("AiiF1QghgvgShGQgRhFAAhXQgBiUA0iWQBCi2BvgwQBegpBEBhQAjAxASBHQARBFABBWQABCUg2CUQhBC2hvAvQgcANgaAAQg+AAgwhEgAAZivQgxAVgdBtQgYBUAABJQABAmAGAcQAKAnAYASQAcATAkgQQAygWAahJQAVg7gBhEQAAhPgchCQgWgygeAAQgJAAgKAEg");
	this.shape_5.setTransform(534.3,313.5,2.671,2.671);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AisF9QgjgxgShIQgShHAAhZQAAiYA1iWQBCi8B2gyQAJgFANgDQBagYBBBcQAlA1ASBIQARBDABBbQAACXg2CWQhCC7h1AyQgLAFgMADQgTAFgRAAQhEAAg0hJgAAkilIgHACQgpATgdBmQgXBUAABGQAAAkAHAbQAIAiAVAPQASANAVgHIAMgEQAtgTAYhFQAVg5gChBQAAhLgbhBQgSgqgXAAIgHABg");
	this.shape_6.setTransform(529.1,310.3,2.671,2.671);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai2GFQglg0gShKQgShGgBhdQAAiaA2iZQBEjBB7g1QANgGALgCQA3gPAwAaQAkAUAdAqQAmA2ATBMQASBEABBcQABCag3CZQhGDAh5A0IgZAJQgUAGgTAAQhKAAg4hPgAAniYIgEABQglARgaBgQgXBSAABEQAAAgAHAbQAHAeAQAMQAOAJAQgFIAJgDQAogSAWg/QAUg1gBhAQgBhIgZg+QgPgjgQAAIgDABg");
	this.shape_7.setTransform(537.4,319.2,2.671,2.671);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhqHIQgpgSgkgxQgkg1gShIQgShGgBheQAAiZA2iaQBEjAB6g2IAZgJQAxgMArATQApASAkAxQAmA4ATBKQASBIAABZIAAAAQAACbg2CXQhFC/h6A2QgLAFgOAEQgUAFgTAAQgcAAgagMgAAUm0IgWAIQhvAxhBC1Qg0CXAACTQAABYASBEQARBHAiAuQA8BVBRgWQANgDAJgFQBvguBCi2QA1iVgBiUQAAhWgShFQgRhGgjgyQgxhEg9AAQgPAAgQAEgAgjDrQgZgRgJgoQgHgbgBgnQAAhIAYhWQAdhsAxgVIAHgCQAngLAZA7QAcBDABBOQABBFgWA5QgZBLgzAVIgNAFQgJACgIAAQgSAAgPgKgAAniYIgEACQglAQgaBgQgXBQAABGQAAAhAHAbQAHAdAQAMQANAJARgFQAEgBAFgDQAogQAXhAQATg4gBg9QgBhIgZg+QgQgigPAAIgDAAg");
	this.shape_8.setTransform(375.6,342.6,2.671,2.671);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCD00").s().p("AiiF2QghgvgShGQgQhCgBhbQgBiUA1iVQBAi3BwgwQBfgoBDBgQAkA0ARBFQARBEABBWQABCUg2CVQhBC2hvAvQgbAMgbAAQg9AAgxhDgAAZivQgwAVgeBtQgYBVAABIQABAoAHAaQAKAoAYARQAbATAkgPQAygWAahKQAWg8gChDQAAhOgchDQgWgygeAAQgJAAgKAEg");
	this.shape_9.setTransform(380.8,345.8,2.671,2.671);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AisF9QgjgwgShJQgRhGgBhaQgBiWA1iYQBDi8B1gyQANgGAKgDQBZgYBCBdQAlA0ASBJQARBFABBZQABCWg3CXQhDC7h0AyQgNAGgKACQgTAFgRAAQhEAAg0hJgAAjilIgFACQgrASgcBnQgXBSAABIQABAjAGAcQAJAjAUAOQASAMAVgGIAMgEQAtgTAYhFQAUg3gBhDQAAhMgbhAQgSgqgXAAIgIABg");
	this.shape_10.setTransform(375.6,342.6,2.671,2.671);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah0HDQglgUgegqQglg1gShJQgShHAAhcQAAibA1iXQBFjBB6g1QALgFAOgEQA3gPAvAbQAlAUAdAqQAnA3ASBKQASBIABBZQAACag3CYQhEDAh6A0QgMAGgNADQgUAGgUAAQghAAgegRgAAniYIgEACQglAQgaBgQgXBQAABGQABAkAFAYQAIAdAQAMQAMAJARgFIAKgDQAogRAWg/QAUg4gCg+QAAhIgag+QgPgigPAAIgDAAg");
	this.shape_11.setTransform(384.1,351.4,2.671,2.671);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ak+ILQgNgJACgQQAml8gVlsQgBgQANgJIDNiBIAGgDIABAAIABAAQAKgDAJAGQAJAGADAKIAJA3IAAgsQAAgOAMgJIDEh+IAGgDIABgBIAAAAQAKgCAKAFQAJAGACALIABAEQApFHA/D6IAZBjQAFASgRALIiuBxQgDADgEAAQgJADgIgEQgNgGgCgOIgWiFIgBDSQAAAQgNAIIheA4IgGADQgIACgKgEQgMgGgCgOIgjj0IABDKQAAAPgNAIIi0BrQgDACgDABIgGABQgIAAgHgFgAkej4QAVFugnF/IC0hrIgEpEIBZJqIBeg5IABoEIBJGzICvhxIgZhkQg+j3grlOIjDB/IgDFqIg5lug");
	this.shape_12.setTransform(696.5,249,2.671,2.671);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCD00").s().p("Akej4IDNiBIA6FuIAClqIDEh/QAqFKA+D7IAZBkIiuBxIhJmzIgBIEIheA5IhZpqIAEJEIi0BrQAnl8gWlxg");
	this.shape_13.setTransform(701.8,252.2,2.671,2.671);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak2IAQgHgEABgJQAnl+gWlsQAAgIAHgEIDNiCIADgBQAGgBADACQAGADABAHIAhDRIABjLQAAgHAGgEIDEh/IAEgCQAFgBADACQAGADACAIQApFJA/D6IAZBjQACAJgIAGIiyBzQgFABgDgCQgHgDgBgHIgwkdIAAFsQAAAJgHADIheA5IgDABQgFABgEgCQgGgDgBgHIg+mvIADGHQAAAIgHADIi0BrIgDACIgDAAQgEAAgDgCg");
	this.shape_14.setTransform(696.5,249,2.671,2.671);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AlIHwQAml9gVlrIgBgRID7ieIAPBcIAAg7IDyicIAFAoQApFJA/D6IAdB2IjeCQIgdisIgBDiIiMBUIgokbIABDZIjsCMg");
	this.shape_15.setTransform(704.8,258.4,2.671,2.671);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiYHVQgLgHgBgOQgOjTgpleQgMhrgIgwQgCgSAOgJQAVgNBPg6IAAAAQBFgyAlgVIACAAIAfgPQAXgKARgEQA5gPAjAWQAgATALAuQASBHgXBWQgPA5ggBBQAigEAZAQQASAMAKAUIABABQAGAMAFAUQAVBQgyBvQglBRhABOQhOBeh2AyQgSAJgTAGIgCABIgHABQgHAAgHgEgAA6m5QgQAFgUAIIgeAPQgqAYg+AtQhLA3gaARQAIA0AMBnQApFfAODUIAkgOQBvgwBLhaQA+hKAjhOQAuhmgShHQgEgQgFgLQgXgqg4APQgUAFgWAMQBzi/ggiAQgOg7g2AAQgQAAgUAFgAgSBXQAvgkAcgNIALgEQAVgGAEAQQAOA1h0BgQgHg+gCgsgABDA/QgYALgkAaIAEAoQAygwAHgegAghi/QAcgWATgKIAHgCQARgFADAOQACAIgDAPQgNBEg2BIgAgHiyIABApQAOgeAFgag");
	this.shape_16.setTransform(231.3,393.5,2.671,2.671);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCD00").s().p("AjBh0QgKhZgKhDQAYgPBNg5QBAguAogXIAegOQB2gzAWBbQAgB/hzDAQBbguAeA4QAHAPACAMQATBHgvBmQghBNhABMQhJBZhxAwIgkAPQgOjUgplfgAA5AnQgdAMguAkQABAhAJBJQBzhggOg1QgDgLgLAAQgJAAgNAGgAAOjeQgTAJgcAWIAGCKQA1hHAOhFQADgNgCgKQgDgKgKAAQgGAAgIAEg");
	this.shape_17.setTransform(236.5,396.6,2.671,2.671);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiRHJQgFgDgBgHQgOjZgplZQgJhTgLhIQgBgJAHgFQAbgQBJg3QBBgvApgXIAAAAIAfgPQAXgJAPgEQAzgOAgATQAbARAKAoQAeB6hfCtIAIgCQAlgKAZAMQAUAKALAVIAAABQAHANAEAQQATBMgwBqQgjBOhABOQhMBchzAxIglAPIgBAAIgDABQgDAAgEgDgABIAvIgKAEQgaALgpAfQACAiAEAoQBahQgKgoIgBgBIgCAAIgGABgAATjSQgQAGgXATIAEBeQAhg2AKgzIACgMIAAgFIgBAAg");
	this.shape_18.setTransform(231.3,393.5,2.671,2.671);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiiG8QgPjTgolfQgMhqgIgwIgDgSIAPgKQAdgSBGg0QBBgwAqgXIABgBIAAAAQAVgLALgEQAXgKAQgEQA5gQAkAXQAgAUALAuQAdB0hSCjQA9gIAbAzIAAABQAHANAFATQAUBRgyBuQglBShABNQhNBeh2AzQgPAHgXAIIggAMgABFA6QgWAJgmAcIADAoQAzgwAGgdgAgGi3IACApQANgdAGgaQgGADgPALg");
	this.shape_19.setTransform(239.3,403.6,2.671,2.671);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7331B").s().p("AD4gkIAGAgIn7Apg");
	this.shape_20.setTransform(871,342.6,2.671,2.671);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7331B").s().p("AHsiUIARAeIv5ELg");
	this.shape_21.setTransform(872.8,312.5,2.671,2.671);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7331B").s().p("Ai0kOIFpISIgrALg");
	this.shape_22.setTransform(657.3,533.4,2.671,2.671);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7331B").s().p("Ai2lRIFtKZIgtAKg");
	this.shape_23.setTransform(657.6,605.7,2.671,2.671);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7331B").s().p("AgWE7IAAp1IAuJ1g");
	this.shape_24.setTransform(581.5,497.6,2.671,2.671);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7331B").s().p("AjZBQIGzi6ImaDVg");
	this.shape_25.setTransform(277.9,413.5,2.671,2.671);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7331B").s().p("Ap4G/ITxuTIzOOpg");
	this.shape_26.setTransform(271.1,459.3,2.671,2.671);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7331B").s().p("Am8BiIN5jgItmD9g");
	this.shape_27.setTransform(223.1,408.6,2.671,2.671);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7331B").s().p("AmnhHIAOgeINADLg");
	this.shape_28.setTransform(113.1,221.4,2.671,2.671);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7331B").s().p("AnIieIAWgcIN7F1g");
	this.shape_29.setTransform(220,223.7,2.671,2.671);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7331B").s().p("AmNkgIAjgVIL4Jrg");
	this.shape_30.setTransform(180.9,145.3,2.671,2.671);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7331B").s().p("AlgjvIAjgVIKeIJg");
	this.shape_31.setTransform(308.7,186.3,2.671,2.671);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7331B").s().p("AjhkJIAqgOIGZIvg");
	this.shape_32.setTransform(275.4,101.1,2.671,2.671);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7331B").s().p("ABqivIAqAOIknFRg");
	this.shape_33.setTransform(700.5,122.3,2.671,2.671);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7331B").s().p("AgWihIAtAAIgtFDg");
	this.shape_34.setTransform(657.3,108.7,2.671,2.671);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7331B").s().p("ADrj9IAnASIojHpg");
	this.shape_35.setTransform(734.4,142.4,2.671,2.671);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7331B").s().p("AJDkuIAbAaIy7JDg");
	this.shape_36.setTransform(806,155.5,2.671,2.671);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6800").s().p("AD5gkIAFAfIn7Aqg");
	this.shape_37.setTransform(886.1,351.5,2.671,2.671);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6800").s().p("AHsiUIARAeIv5ELg");
	this.shape_38.setTransform(887.9,321.4,2.671,2.671);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6800").s().p("Ai0kOIFpISIgsALg");
	this.shape_39.setTransform(672.4,542.3,2.671,2.671);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6800").s().p("Ai2lSIFtKaIgtAKg");
	this.shape_40.setTransform(672.8,614.5,2.671,2.671);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6800").s().p("AgWE7IAAp1IAuJ1g");
	this.shape_41.setTransform(596.6,506.5,2.671,2.671);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6800").s().p("AjZBRIGzi7ImaDVg");
	this.shape_42.setTransform(293,422.4,2.671,2.671);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6800").s().p("Ap4G/ITxuTIzPOpg");
	this.shape_43.setTransform(286.3,468.3,2.671,2.671);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6800").s().p("Am8BiIN5jgItmD9g");
	this.shape_44.setTransform(238.1,417.5,2.671,2.671);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6800").s().p("AmmhHIANgeINADMg");
	this.shape_45.setTransform(128.3,230.3,2.671,2.671);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6800").s().p("AnJieIAXgcIN8F1g");
	this.shape_46.setTransform(235.1,232.7,2.671,2.671);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6800").s().p("AmMkgIAigVIL3Jrg");
	this.shape_47.setTransform(196.1,154.2,2.671,2.671);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6800").s().p("AlgjvIAkgVIKcIJg");
	this.shape_48.setTransform(323.8,195.2,2.671,2.671);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6800").s().p("AjhkJIAqgOIGZIvg");
	this.shape_49.setTransform(290.6,110,2.671,2.671);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6800").s().p("ABqivIAqAOIknFRg");
	this.shape_50.setTransform(715.6,131.2,2.671,2.671);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6800").s().p("AgWihIAtAAIgtFDg");
	this.shape_51.setTransform(672.4,117.5,2.671,2.671);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6800").s().p("ADrj9IAnASIoiHpg");
	this.shape_52.setTransform(749.6,151.4,2.671,2.671);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6800").s().p("AJDkuIAbAaIy7JDg");
	this.shape_53.setTransform(821.2,164.5,2.671,2.671);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6E6D4").s().p("AmUJcQAllBhOhwQhRh0jbByQiKBIiLB8QBPhLBOhgQCmjOgEh6QgEh7jfhCQhGgVhTgMIhFgJIA+AFQBNAFBKgDQDsgIB0hJQBkg+gth5QgOgmgagnIgYggIAVAVQAaAZAbASQBXA5BBggQBCgfASh1QAJg6gEg1IAGAlQAJAtAQAnQAwB+BdAYQBHATBphvQAvgxAkg1QghA0gVBDQgwCWBOBdQBfBxEgBnQEmBpFeAqQi5AeiSBFQkkCJDCDEQh8hKiZg7Qkwh2iOBIQiWBMhsDJQgsBRg1CDQggBPhGC0QAiiKASigg");
	this.shape_54.setTransform(588.2,324,2.671,2.671);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF771F").s().p("Am0KvQAclohZiAQhdiGj8CEQieBSifCPQBahWBZhwQC+jrgEiNQgFiNkAhMQhQgYhfgOIhQgKIBIAGQBYAFBVgDQEPgJCGhTQByhIgiiPQgKgtgYgvIgWgmIATAaQAXAdAaAXQBSBFBLgjQBKgjAuiBQAXhAAHg5IAAAoQABAxAKArQAgCKBqAcQBSAWCOh/QA+g3Ayg6QgvA6ggBKQhNCrBaBsQBrB/E/BsQE9BrGaAwQjOApihBWQlDCrDfDgQiOhUivhEQleiHijBSQiqBWhwDfQgrBVg7CZIhxEmQAhiaAOizg");
	this.shape_55.setTransform(585.1,333,2.671,2.671);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FF6900","#FF6701","#FC3A14"],[0,0.043,1],0,0.3,0,0,0.3,151.7).s().p("AomO4QA8nAiAi3QiEi9knCRQizBYjhDOQBohrBoiUQDPkngGjHQgGjClLiIQhogrh8gfIhngYQCPAdCzAFQFmAKCzhyQCwhwgfi1QgPhVgvhCIARAWQAcAiAfAZQBkBOBfguQBqg0BVieQArhOAVhFQgTBXAMBaQAWC0CcATQCaATCli1QA2g8Aog9QgnBJgcBWQhSD9B4CQQCWC1FOBtQFBBqJNBGQhGAMhgAZQjDAziGBFQi+BggsB3Qg4CVCvCwQiahVjJg+QmRh9jpB0QkDCEihD2Qh9C/jHH3QA3i7Adjhg");
	this.shape_56.setTransform(587,364.5,2.671,2.671);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#231F22").s().p("AqTO4QBUm6iAi3QiFi/k+CQQjOBdjNC4QBshmBriIQDnkkgGjIQgGjIj3hyQhNgjhbgXIhNgPIBCALQBSALBVgCQENgFC7h9QCWhlgwi5QgOg6ghg8IgegvIAeAcQAlAgAmAXQB6BKBRgwQBcg2BLiXQAlhMAThBQgGBYAZBbQAxC1CcAQQB7AMCWiyQBGhUAxhWQgxBdgbB2Qg5D8B9CSQCaC0FKBtQFFBrJJBGQhHANhjAbQjFA3iKBIQjBBkgvB5Qg6CYCuCwQiVhajEhDQmIiGjoB0QkRCKisDqQikDei5HTQBDi5Aqjeg");
	this.shape_57.setTransform(624,363,2.671,2.671);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1057.7,729), null);


(lib.D1114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD1114");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D1114, null, null);


(lib.D1113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD1113");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D1113, null, null);


(lib.D1112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD1112");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D1112, null, null);


(lib.D1111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD1111");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D1111, null, null);


(lib.D774 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD774");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D774, null, null);


(lib.D773 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD773");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D773, null, null);


(lib.D772 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD772");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D772, null, null);


(lib.D771 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD771");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D771, null, null);


(lib.D444 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD444");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D444, null, null);


(lib.D443 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD443");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D443, null, null);


(lib.D442 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD442");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D442, null, null);


(lib.D441 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD441");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D441, null, null);


(lib.D104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD104");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D104, null, null);


(lib.D103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD103");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D103, null, null);


(lib.D102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD102");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D102, null, null);


(lib.D101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD101");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D101, null, null);


(lib.D54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD54");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D54, null, null);


(lib.D53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD53");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D53, null, null);


(lib.D52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD52");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D52, null, null);


(lib.D51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD51");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D51, null, null);


(lib.D34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD34");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D34, null, null);


(lib.D33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD33");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D33, null, null);


(lib.D32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD32");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D32, null, null);


(lib.D31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("MD31");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.D31, null, null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49A6C").s().p("AiEFcQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAOgQAGgPQAGgPACgVQABgUAAg6QgBg2gCgUQgEghgUgtQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAaAcAGAzQADAVABBCIABAjQAAAZgCASIABAAIAFgCIAKgsIABgNIABg7IAAgCQgDgIgBgKQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQADgBACADQARAYALAeQALAgAAAdQBOgqAnhCQAshJgVhTQgJglgZg9QgIgTgQgZIgbgqQgphJAOhZQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQgCARABAWQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAHApASAmQAEAJAPAXQAMATAEANQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAJANQAOAZAZBDQAWA6ABApQACBNgyBBQgrA5hKAlIgBACQAAAEgEABQgDABgEgCIgMAFQgCADgDABQgCACgEgBIgJADIgBABQgCACgDgBIgEACQgEABgDgCQgIAogbAGIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape.setTransform(96.3,101.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C49A6C").s().p("AgfAvQgEAAgBgDQgMgZgEgQQgHgWABgVQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQAGAcAWAqQArgzAkgYQAEgDAEAFQADAEgEADQgNAOgdAaQgcAbgNAPQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(39.1,91.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C49A6C").s().p("AgXBpQgIgmAKhJQAJg3AZgqQACgDAEAAQADAAADACQABABABAAQAAAAAAABQABAAAAABQAAABgBABIAAAAIgBAEIAAABQgFAOgOAiQgDAPgEASIgHAbIAAAJQAAADgCACIgCAnQgBAWgEAQQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_2.setTransform(23.3,113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C49A6C").s().p("AAWCOQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAEgRAZgVIAPgNQALgIAHgBIABgnIghAeQgXAYgUAbQgFAGgFgDQhBgdgagaIASAWIANAPQAGAJgCAIQAAAFgFAAQgDAFgEgDQgTgLgXgsQgTgigKgjQgXhUAUg+QABgCADAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQgCAxABAVQACAmAJAfQAJAeAKAUIAPATIAAgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQARAHAcAOIAtAWQAwhBAmgXQAIhjAzgxQAEgEAEAEQAEAEgEAEQgiAogLA7QgHAigCBMQAAAEgEACQgDACgEgBQgDABgDgCIgOAKIgQAMIgNANQgHAIgGAEIgCABIgCgBg");
	this.shape_3.setTransform(40.6,117.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C49A6C").s().p("AggAtQgIgHgPgRQggghgDgbIABgCIACABQAIAHAKARQALASAGAHQAQARAfAVQADgMAMgQIAWgWQAPgUAJgJQAQgSAOgEQABgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABQgFAMgPAQIgaAZIgVAbQgOASgKAFQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgFABQgKAAgOgLg");
	this.shape_4.setTransform(35.9,108.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C49A6C").s().p("AgiBCQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBABAAQACglAOgaQAGgKALgQIARgRQALgKADgJQACgDAEAAQAEAAAAAFQgBAMgOANIgWAWQgaAhgGAsQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_5.setTransform(53.4,144.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C49A6C").s().p("AhOBAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAHgTAUgPQAMgKAagNQAdgOATgOQAVgOAFgHQAHgNAGgFQABAAAAgBQABAAABAAQAAAAABABQAAAAABABQAKAPgaAWQgIAGgfATQgRAJgiASQgfARgQAUIgBABIgCgBg");
	this.shape_6.setTransform(42.8,141.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C49A6C").s().p("AhZAhQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAcgXAtgJQAMgDAagEQAPgCAQgHIAcgOQAFgDACAFQADAFgEACIgUANQgMAIgJACQgHACgLABIgTACQg+AJghAUIgBAAIgDgBg");
	this.shape_7.setTransform(38.1,136.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C49A6C").s().p("AhNCtQAAgDADgBQAYgHAUgQQAQgMASgXQAYgeAFgTQACgNgCgRIgFgeQgMg7gNghQgRgzgggfQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAHAIQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAXANAmAkQASAQAIAJIAGAMQAEAJADACQAFACgCAGQgBAFgFgBIgCAAQAIAbgEAWIAAAAQABAMgCAHIABAZQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAABQAHAJgGAQQAJAOgDAKQgDAKgSAHQgEABgDgEQgEAEgHADQAAAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAQgbIAEgeIADghQgGgJgEgTIgHgfIgYhAIAAgBIgFgEIgfgfQAvA8AQB2QADAYgGASIAAACQAAANgRAgQgOAagOADQgEABgBgEQggAggfABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_8.setTransform(64.7,123.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C49A6C").s().p("AgDANQgCgHgBgPQAAgFAGgBQAFgBABAFQACAOgEAKQgBADgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_9.setTransform(62.3,101.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C49A6C").s().p("ABJASQgvgNgXgFQgSgEgWABIgpACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAggQAvAHQAbAFAyAQQAGACgBAGQgCAGgFAAIgCgBg");
	this.shape_10.setTransform(77.3,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C49A6C").s().p("AA0AgIg2gdIgdgPQgSgJgMgEQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAQANAAAPAFIAbAMQAjAPAfARQAHAEgEAHQgDAFgFAAIgEgBg");
	this.shape_11.setTransform(76.5,81.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C49A6C").s().p("AAdAsQgggkgJgKIgRgTQgJgLgEgKQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAKAFALAKIARATIApArQAFAGgGAGQgDADgCAAQgDAAgDgDg");
	this.shape_12.setTransform(71.4,84.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C49A6C").s().p("AAWAPIgbgFQgSgDgGgEQgDgBABgDQAAgDADgBQAFgBAUADIAJABIADgCQAFgDADgFQACgDAEAAQAEABAAAEIAFAQQABAFgDACQgCADgDAAIgDgBg");
	this.shape_13.setTransform(57.5,97.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C49A6C").s().p("AgEAQQgEgBgBgFQgBgOACgHQABgEAEAAQADABAAADIABgBQADgDAEACQAEADgBAEIgCAGQgBACgCABIgCABIgDAIQgBAEgCAAIgCAAg");
	this.shape_14.setTransform(29.8,90.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C49A6C").s().p("AhDAiIgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgFAGgDIAJgFIAvgYQAWgNANgGQAXgLAQADQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgRAHIgRAFQgMAFgXALIgpAUQgIAEgOADIgBABIAAAAIgBACIgBAAg");
	this.shape_15.setTransform(7,77.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C49A6C").s().p("Ag1AwQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAPgbAdgZQAZgXAegRQAGgDADAGQAEAGgGADQgcAPgbAXIgZAVQgPANgHAKIgCACIgBgBg");
	this.shape_16.setTransform(10.9,84.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C49A6C").s().p("AggAyQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAHgUAWgjQAVggALgJQAEgCACADQADADgBAEQgJAQgYAdIgOAXQgJAOgIAIIgCACIgBgBg");
	this.shape_17.setTransform(17.1,86.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C49A6C").s().p("AgxAzIAAgCQACgKAOgOIAHgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEIAEgFIACgBIArglIAHgJQAEgFAEgCQABAAAAAAQABgBAAAAQABAAAAABQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQABAQgdAYQgSANgNAHQgCAFgFAGIgKAKQgMAOgJADIgBABIgCgBg");
	this.shape_18.setTransform(62.5,62.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C49A6C").s().p("AgOAVQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDAEgGIAHgIQAFgNAEgGQADgDADABQAEAAAAAFQAAAHgKAPIgDAEQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgDAGgIAEIgDABIgBAAIgDgBg");
	this.shape_19.setTransform(55.4,67.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C49A6C").s().p("AgwAiQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgNIAHgOIACgLQABgHAEgEQAFgEAEAGQAMgDAXgKQAWgHAPACQADABABAEQAAAEgDACIgXAHIgXAGQgWAGgIgCIgCAIQAAAGgCACQgBAEgFAHIgHAKQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_20.setTransform(48.6,69.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C49A6C").s().p("AhyAWIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADgIAOgDIAVgDICPgXIAcgFQARgCAMADQADAAAAAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgKAHgSADIgeAEIidAXIgPACQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_21.setTransform(29.7,71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C49A6C").s().p("AhIA7QgUgCgGgMQgEgGACgHQADgGAGgDIABAAIABgEQABgDAEgCIAGgEIgCgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBABAAQAHgEAMgBIAVgBQAVgEAWgJQA6gVAbgWQAFgFAFAFQAFAFgFAGIgBABQAAABABAAQAAABgBAAQAAABAAAAQgBABAAAAIhAA5QgnAggkAIQgNACgKAAIgHAAgAg3AwQAKgBAOgFQATgGAWgQQgWAMgXAEQgUAEgIABQgSABgHgKIgBgDQACAUASgBQAHABAHgBgAhHAXQABABAIAAQAYABAegLQAVgHAWgNIgXAHQgZAKgQADQgbAOgNgKQgBABAAABQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_22.setTransform(46.8,77.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C49A6C").s().p("AiSBFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQATgWAdgXIgDACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEgMAOgKQAMgJAPgGQAEgCADAEQADAEgBAEQBag0BlgJQAHAAABAHQABAIgHABQhbAQg9AcQgeANglAXIhBArIgBAAIgCgBg");
	this.shape_23.setTransform(31.6,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C49A6C").s().p("AAkAPQgGgBgLgHQgKgGgHgBQgPgEgGADQgDABgKAMQAAABgBAAQAAABgBAAQgBAAAAAAQgBgBAAAAQgDgDACgCIAFgLQAEgHAEgCQAGgDAQABQAMACAMAGQAPAHACALQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIAAAAg");
	this.shape_24.setTransform(12,61.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C49A6C").s().p("AAVAhQgEgCABgFIACgEIgBgBQAAgPgBgFQgBgFgHgLQgngNgOAGQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAIgGAMAAIAWABQAZACALAIQARAMgDAPQgCAQgQAMQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_25.setTransform(39.7,57.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C49A6C").s().p("Ag5BuQgegQgMgeQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAQAcAeAOQAfAOAegIQAlgJAZgnIgKAJQgkAbgtgDQgwgEgagkQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABABAAAAQAnAZAlACQApABAfgeQAcgcgGgxIgWhUQgCgHAIgCQAHgCABAHIAQA4QAJAiABAYQABAOgGAQQgCAhgcAbQgbAaghAGIgQABQgYAAgWgMg");
	this.shape_26.setTransform(58.1,44.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C49A6C").s().p("AgCAfQgEgEAAgIIAAgNQAAgaABgHQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQABAAAAAAQAAABAAAAQAAABABABQADAKACAWIACAOQgBAIgFAFIgCABIgCgBg");
	this.shape_27.setTransform(73.6,41.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C49A6C").s().p("AgNAqQgJgJAIgUIAOgZQAKgRADgLQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQgCASgJAOQADABAAADQABAQgQAbQgCADgDAAIgEgBg");
	this.shape_28.setTransform(66.1,17.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C49A6C").s().p("Ag5B8QgVgHgIgQQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAKAEQABgcAMgfQAIgWASghQAWgqAKgRQAUghAVgTIABAAIAAABQgJATgVAiQgWAkgIAQQgRAigJAXQAEAAACADQADADgDAEQgSAYgCAdIgBAEQAIAEAIAAQATACAagQIABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAlgyQADgFAFABQAXAFAPATQADAEgBAEQgBAEgFACQgbALgeARIgVAMQgMAHgLACQgJADgJAAQgKAAgKgDgABBBAIABgBIgBgBg");
	this.shape_29.setTransform(53.2,12.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C49A6C").s().p("AAcByQgPgIgMgeQgJgYgKglQgSg9gBhDIABgBIACABQALBKALAnQARBBAfAnQADAEgDAFQgCACgCAAIgEgBg");
	this.shape_30.setTransform(11.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,109.6,150.9), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AAeBSIgIgEIgKgHIgBAAIgIgaIgGgqIgDgsIgBgDIAAgEIgBgHQgDgQgPgEIgKgBQAKgLAOAEQAPAEADAQIABAHIAAAEIAIBLIAKAmIAIARIAEAHg");
	this.shape.setTransform(3.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,7.4,17), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AAHA8IgGgEIgDgMIgFgeIgCg9IgBgFQAAgIgHgGIAIABQALAEABANIAAAFIACA9IAGAeIAFANIACAGg");
	this.shape.setTransform(1.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,3.7,13.3), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AgGBoQgqgqgZhGQgZhFAGg6QAGAcAIAXQAZBIAqAoQAqAqAigNQATgHAFgsQACgXgChUQAEASAAAQIABCGQgCA6gWAIQgIADgIAAQgcAAggggg");
	this.shape.setTransform(9.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,18.9,27.3), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AAGApQgSgCgZgfQAVgOATgYQAMgOAXggIAACZQgQgigQgCg");
	this.shape.setTransform(3.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,7.6,15.5), null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("Ag+AGQgVgEgIgTQgEgLADgMQADgMAJgIIAcgZQASgOAVAHIgWAUQgJAIgDAMQgDAMAEALQAIAUAVAEQA3AJA4BBIghAaQg9hOg+gLg");
	this.shape.setTransform(9.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,18.9,19.1), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AgoBDIgRgQQgFgEgBgGQgBgHAEgGIAFgIIAJAIQAHAHAJgDQAJgDADgJQAMgiAJgPQALgRASgGQAHgCACgFIAHgLIAFACQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAGgMARQgJAOgLAkQgDAJgJACIgFABQgGAAgGgEg");
	this.shape.setTransform(6.4,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,12.9,14.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgGBVIgMgOIgBgRIAEgnIAQhGIAAgEIABgDIACgHQABgMgFgIQAEABAFADQANAJgCAQIAAAAIgWBiIgBAkIADAQg");
	this.shape.setTransform(2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,4,18), null);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("Ag4AcIAkgHQAQgDAIgMQAJgMgBgPQgEgogQgnIAMADQAgAiAPAyQAOArgCAtIh9AZIAGhIg");
	this.shape.setTransform(6.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,12.7,20.1), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AhHBYIAkhXQAQgwACg2IAzAaQgIAagTAvQgGALAHAMQAHALANACIAsAEQgDAfgNAhg");
	this.shape.setTransform(7.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,14.3,20.5), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAE88C").s().p("AhJBEQgSgCgCgGIAOgGQApACAhgTIABAAQAqgVAWgpIAQgeIASgRQAAAPgQAeIgZAxQgjAXgOAGQgKAGgmAPQgHgDgWgBg");
	this.shape.setTransform(9.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,18.8,14.5), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AAcD8QgjgDgXgdQgYgcAEgkIAVhfIAKhNIgEhSIgIgcIgJgWQgEgJgDgDIgLgTQgLgSADgUQAEgVAOgNIAFAFQATAVAVAQQAAAPAHAPIAMATIAKAUIAKAeIAEASIAEBIIgBAEIAAAEIgPBkIgOA3QgCAIAAAFQgDAeAQAZQAQAZAbAKQgPAGgSAAIgHAAg");
	this.shape.setTransform(6.7,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,13.5,50.5), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgVBUIgHgNIABgIIAJgmIAghQQAFgPgLgLQgGgFgEgBQAMgEALAKQALALgFAPIgEAKIgBADIgWA2IgJAbQgCAHgBAGIgCALIgCATIABAHg");
	this.shape.setTransform(2.9,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,5.8,17.9), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("Ah3gOQAzhMBVhQIAagDQBhgIBBAOQgvBugaBuQgOhlgpgCQg1gDhnBgQg/A8g+BKQAXhlA+hag");
	this.shape.setTransform(20.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0.1,41,35.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AgzCGIAVgEQAUgCANgOQAOgOACgUIAHgwQACgcgHgjQgKg0gqhbIAUgFQAOAcAQAmQAiBKAJAuQAIAqgGAoQgHA0ABAWIh7ARQAHgcAHgSg");
	this.shape.setTransform(6.6,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,13.3,35.9), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("ABDA4QhQg1gwARQglANgLAtQgGAWACAUIgEgGQgViphHiQQAhgCAmADQA+AGA3ATQCpCnA+DOQhAhbhPg1g");
	this.shape.setTransform(21,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,42.1,40.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AhRCZQAMgWASgaIAgAEQAQACANgIQANgJAGgPQANgeAFgQQAKgcABgiQABgvgShaIAKABQAJAdAHAnQAQBLgCAtQgBApgOAjQgTAugEAVIh8gNg");
	this.shape.setTransform(8.2,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,16.3,33.3), null);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AARBVIgHgGQgFgEgDgFIgCgEIgBgIIABhhIAAgDIABgOQAAgQgOgHIgJgCQAMgLAPAHQAOAHAAAQIAAAHIgBADIAAAHIgCA3IAAAOIABAoIACAKIACAIIACAHg");
	this.shape.setTransform(2.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,4.6,17.7), null);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgTA/IgIgRIAAgCIAGgSIAVgvIAEgHIAEgJIAEgHIAAAAQAEgLgIgJIgCgDQAJgBAHAHQAIAJgEAMIgEAHIgBADIgZAxIgHAUIgEAXIAAAGg");
	this.shape.setTransform(2.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,5.5,13.6), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AhICIQgEhrgUihQAngQAqgHQAfA9AeBPQASAxAgBeQgZgfgagRQgigYgbAEQgnAHgJAtQgEAXADAVg");
	this.shape.setTransform(9.7,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,19.3,31.3), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AguBKIgCgIQgCgFAAgHIAAgEIAHgMIAHgLIAaggIAogsQAKgNgIgOIgCgEQANACAFALQAHAOgJANIhCBMIgOAVIgHARIgCAHIgDgHg");
	this.shape.setTransform(5.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,10.3,16.3), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AhCAqIgogLQgUgHgKgMIAhgXIAtAMQAOADAIAFICrg6IABACQgdAkgUAQIgBABIiCAsg");
	this.shape.setTransform(13.7,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,27.3,10), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AAHhvIAPAGIAPAGIAYAOQAQAKAJAIIgwCuQgChFgdgHQgRgEggAgQgVAVgWAgQAchbBAiEg");
	this.shape.setTransform(8.6,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,17.3,22.4), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgjA5IgDgPIAAgEIABgBIAEgIIATgaIAlgoQAIgLgGgKIgCgEQAKACAEAJQAGAKgIAKIgFAHIgnArIgMARIgKAVIgCAGg");
	this.shape.setTransform(3.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,7.9,12.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AABBBIgEgFIgGgHIgBgBIAAgHIABgpIAHgvIAAgDIABgFIAAAAQAAgLgIgGQAFAAAFADQAKAFAAANIgBAFIAAADIgBAFIAAAEIgFAlIgBAyIABAGIABAGg");
	this.shape.setTransform(1.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,2.3,13.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAE88C").s().p("AhjB7QgigjgHghQgGgbALgtQAQgqAMgXQARghAWgTIAFAOQgKAXgMAgQgLAuAFAaQAHAhAjAjQBhAcBfgjIgPAhQg0Abg8AFQgQACgPAAQgqAAgqgMg");
	this.shape.setTransform(14.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,28.6,27), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AgxCJQgNhyAgiIQAZgQAWgNQAVCUAQBCQgbgpggAEQglAEgHA0QgDAbAEAZg");
	this.shape.setTransform(5.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,10.9,28.6), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgaBLIgEgKIgBgDIACgIIALgmIAQgmIAMggIAEgKQAEgNgIgLQAIACAFAFQAMAMgFAOIgEAKIgCADIgRApIgSA1IgEAVIgCAQg");
	this.shape.setTransform(3.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,6.3,17.8), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AAdAxQgHgmgUgKQgXgLgcApQAMgrAihbQAnAmAOAoQgCBIgPA5QABgegFgZg");
	this.shape.setTransform(5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,10,20.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgQBAIgEgGIgDgIIAAgCIABgHIAFgSIAchIQADgKgGgIQAGABAEAEQAJAJgEALIgcBIIgDAKIgEAQIgBAMg");
	this.shape.setTransform(2.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,4.8,13.7), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDCC4").s().p("AgFBBIgIgLIgBgMIACgeIAMg3IABgCIACgIIAAAAQABgJgEgGIAHADQAKAHgCAMIgCALIgNA2IgCAeIABAOIABAGg");
	this.shape.setTransform(1.5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,3.1,13.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#736000").s().p("AhBClQgTgTgKgfQAfg6ATgZQAigqACg2QACgugWggQApgpAmARQAjAQAIA9QAHBCgqA2QgcAlglBIQgUAggUAAQgKAAgJgHg");
	this.shape.setTransform(9.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,19,34.4), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#736000").s().p("AAaDVQhAgEg5gTIgUgHIAAAAIgBAAIgBgBIgHgDIgcgNQgdgQgVgRQgpgggegpQgZgigQggQgLgYgJgYIgFgQQgDgJgBgMIADAHQAQAhAZAiQAfAoApAgQAVARAcAQIAcANIAHADIACABIAAAAIABAAIATAHQA5ATBBAFQAlABAdgDQAkgDAigLQAUgHAQgJIAOgHIARgNQAcgVAYgcQAYgcAOgfQAPghAFgiQAKg6gNhAQAQAlAIAkQAPBDgKA8QgHAkgOAeQgOAggYAcQgXAcgdAVIgRANIgOAHQgOAIgVAIQgiALglADQgSACgUAAIgcgBg");
	this.shape_31.setTransform(34.4,35.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#736000").s().p("AgxAVIgTgCQgHAAgEADIgPgaQANgGAPACIAGABIAPAEIAlAHQAfAGAagIQASgEARgLIAIgHIADgCIgJAKQgQAOgSAIQgZANglAAIgngCg");
	this.shape_32.setTransform(70.2,2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#736000").s().p("AgHgSQAJAOADALIADAMQgKgTgFgSg");
	this.shape_33.setTransform(18,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,79.8,56.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAE88C").s().p("AAKA0QgzgwgngzQgLgQgDgSQgCgTAGgRQAjAuAsApQApAmAjAWQALAsAUArQgmgUgwgtg");
	this.shape.setTransform(9.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,19.1,23.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAE88C").s().p("Ah5BuQgzgQgygfQgtgbgWgZQgDgbgDg7IgCg1IAGAHQACBOADAiQAXAYAtAbQAyAfAzAQQA6ATBKgBQBPAAArgXQAzgZAfgdQAlgiAXg2QAMgXAGggQgGArgPAhQgYA1glAjQgfAdgyAZQgsAWhQABIgDABQhIAAg4gTg");
	this.shape.setTransform(29.8,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE88C").s().p("AhYAKQAOgDAeAEIAmAFQAdgBAcgMQAagKAMgPQgUAhg9AKQgRADglgDQgggBgIADQgDgJABgEg");
	this.shape_1.setTransform(61.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE88C").s().p("AANAIQgJgogNgnIgPgnQgJgeAJgJQACAMAIAUIAJAZQARA2AHAkQATBbgPA9QAIg8gShSg");
	this.shape_2.setTransform(54.1,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,70.8,57.2), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7ED36").s().p("ADoGdQg8iehng2QgViBguhBQgxhFhyg1QgQhZhChDQg+g/g+gDQARgaAPgvIACAGQB6AgA+A7QA5A4AsB7QBuAjBYCQQArBIAWBCQAehSAFiEQAIkLiCkEIAAgCQCECqA8DOQBREXg5EFQgcCCgtBLQgJhEgehQg");
	this.shape_1.setTransform(36.8,56.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,73.6,112.2), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89665C").s().p("Ah5FHQAAgLgDgMQgCgJAFgIQAFgHAJgDIBegWIAHgDIAdgUQAMgIgBgOQgCgNgNgGIhLgdQgfgNgTgbQgTgcABghIADjvQAAg9ArgsQAsgrA8AAIADAAQgyAQgdAsQgdAtAGA1IAYDuQADAhAWAZQAVAaAfAIIBQAVQANAEADANQADAOgKAJIgcAXQgDACgEACIhaAhQgIADgFAIQgEAJADAIIAEAQg");
	this.shape_1.setTransform(12.5,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,25,65.5), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89665C").s().p("AAMDAQgFhHgfgqQgshbgLhUQgNhdAchMQAMgnAUgeQghCKBSCuQAbAiAIA1QAGAugHBBQgBAQAKAMQAJAMAPABQgXA6gEAsIg4APQAOhXgDg3g");
	this.shape_1.setTransform(8.4,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,16.9,66.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC156").s().p("AAkJoQg7AEgsgSQgvgSgshTQgzhhgegaQgQgNgTgKIgmgRQg6gXgfgRQgvgbgmgnQgTgVgGgbQgHgcAJgaQAZhMAPhrQgBh1AUipQAbjDALhiIATAAQAAAogCA2QgWClgGA9QgNB+ABBgQgQBrgYBMQgJAbAGAbQAHAcATAUQAmAnAvAbQAfASA5AWIAmASQAUAJAPANQAfAaAzBhQAsBUAvASQArARA8gEQCFAiB6ghQBvgeBPhMQhMBdh4ApQhKAZhOAAQhAAAhDgRg");
	this.shape_3.setTransform(51.5,85.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC156").s().p("ACIIGQAJhIgtiYQgfhogghKQg4hrgvhYQhaiugKhKQgLhQAUg+QAKgeAohFQAOgYAighIgMAQQg8BKgRBSQgWBkAuBlQAeBBBFB0QBYCUAaAwQAkBeAVBUQAfB3gHA7QgLBXhBA6QAjguAHg+g");
	this.shape_4.setTransform(89.5,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,106.7,149), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C49A6C").s().p("AiEFcQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAOgQAHgPQAGgPACgVQACgagBg0QAAgsgDgeQgEgggUguQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAZAbAHA0QACARACBGIABAjQAAAZgCASIAAAAIAGgCIAJgsIACgNIAAg7IABgCQgEgLgBgHQAAgEADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQASAXAKAfQAMAgAAAdQBOgrAnhBQAshJgVhTQgJgjgZg/QgIgTgQgZIgbgqQgqhJAOhZQABAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQAAAAABAAQABABAAAAQAAABAAAAQABABgBAAQgBAUABATIACACQAHArASAkIASAgQANATAEANQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAIANQASAdAWA/QAWA5ABAqQACBNgyBBQgsA5hKAlIAAACQAAAEgEABQgDABgEgCIgMAFIgFAEQgDACgDgBIgKADIAAABQgCACgDgBIgEACQgFABgCgCQgJAogbAGIAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBg");
	this.shape_34.setTransform(96.3,101.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C49A6C").s().p("AgfAvQgEAAgBgDQgLgZgFgQQgHgWABgVIABAAQAFAZAXAtQAug1AhgWQAFgDADAFQADAEgEADQgNAOgdAaQgbAbgOAPQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_35.setTransform(39,91.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C49A6C").s().p("AgXBpQgIgmAKhJQAIg1AagsQACgDAEAAQADAAADACQADABgBAEIAAAAIgBAEIAAABIgJAYIgKAYIgHAhIgIAbIAAAJQABADgDACIgBAnQgCAWgDAQQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_36.setTransform(23.3,113);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C49A6C").s().p("AAWCOQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQADgQAZgWIAQgNQAKgIAIgBIABgnIghAeQgXAXgVAcQgDAGgGgDQhBgdgagaIASAWIAMAPQAHAJgCAIQgBAFgEAAQgDAEgEgCQgTgMgYgrQgRgfgLgmQgYhUAVg+QAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQgCAwABAWQABAmAKAfQAHAaAMAYIAPATIAAgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQASAHAcAOIAsAWQAwhBAmgXQAJhkAzgwQAEgEAEAEQADAEgDAEQgiAogMA7QgHAjgBBLQAAAEgEACQgDACgEgBQgDABgDgCIgPAKIgPAMIgNANQgHAIgGAEIgCABIgCgBg");
	this.shape_37.setTransform(40.6,117.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C49A6C").s().p("AgfAtQgIgHgQgRQggghgCgbIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAIAHAKARQALASAHAHQAQARAeAVQADgMAMgQIAWgWQAPgUAJgJQAQgSAOgEQABgBAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgEAMgQAQIgaAZIgVAbQgOASgKAFIgCACIgFABQgKAAgNgLg");
	this.shape_38.setTransform(35.8,108.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C49A6C").s().p("AgiBCQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQADglAOgaQAGgLALgPIARgRQALgKADgJQABgDAFAAQAEAAAAAFQgBAMgOANIgWAWQgaAhgGAsQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_39.setTransform(53.4,144.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C49A6C").s().p("AhOBAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAIgTATgPQAMgJAagOQAcgOAUgOQAWgQAFgFQAHgNAGgFQAAAAABgBQAAAAABAAQAAAAABABQAAAAABABQAKAPgaAWQgIAHgeASIg0AbQgeARgQAUIgCABIgCgBg");
	this.shape_40.setTransform(42.7,141.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C49A6C").s().p("AhZAhQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAcgXAugJIAmgHQAPgCAQgHIAcgOQAFgDACAFQADAFgFACIgTANQgMAIgJACQgHACgMABIgTACQg9AJghAUIgBAAIgDgBg");
	this.shape_41.setTransform(38.1,136.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C49A6C").s().p("AhNCtQAAgDADgBQAYgHAUgQQAQgMASgXIASgXQAIgNADgNQADgMgCgSIgGgeQgMg7gMghQgSgzgfgfQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAIAIQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAXANAmAkQAUARAGAIIAGAMQAEAJAEACQAEACgBAGQgCAFgFgBIgCAAQAIAZgEAYIAAAAQACAMgCAHIAAAZQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAGAIgFARQAIAQgCAIQgEAKgSAHQgEABgDgEQgDAEgHADQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAPgbIAFgeIACghQgGgJgEgTIgHgfIgYhAIAAgBIgFgEIgfgfQAvA8AQB2QADAWgGAUIABACQAAAOgSAfQgNAagPADQgEABgBgEQgfAgggABIgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_42.setTransform(64.7,123.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C49A6C").s().p("AgDANQgCgHgBgPQAAgFAGgBQAFgBABAFQACAOgEAKQgBADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_43.setTransform(62.3,101.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C49A6C").s().p("ABJASIgjgJQgXgHgNgCQgRgEgWABIgpACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAggQAuAHQAbAFAzAQQAGACgCAGQgBAGgFAAIgCgBg");
	this.shape_44.setTransform(77.3,73.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C49A6C").s().p("AA0AgIg3gdIgcgPQgSgJgMgEQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAQAMAAAQAFIAbAMQAgAOAhASQAHAEgEAHQgDAFgEAAIgEgBg");
	this.shape_45.setTransform(76.5,81.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C49A6C").s().p("AAdAsIgqguIgQgTQgJgLgEgKQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQALAFALAKIARATIApArQAFAGgGAGQgDADgDAAQgDAAgCgDg");
	this.shape_46.setTransform(71.4,84.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C49A6C").s().p("AAXAPQgLgBgQgEQgSgDgHgEQgCgBAAgDQAAgDADgBQAFgBAVADIAJABIACgCQAFgCADgGQACgDAEAAQAEABABAEIAEAQQABAFgDACQgCADgDAAIgCgBg");
	this.shape_47.setTransform(57.5,97.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C49A6C").s().p("AgEAQQgEgBgBgFQgCgMADgJQAAgEAEAAQAEABAAADIABgBQADgDAEACQADADgBAEQgBAIgEABIgCABIgCAIQAAAEgDAAIgCAAg");
	this.shape_48.setTransform(29.8,90.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C49A6C").s().p("AhDAiIgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgFAFgDIAKgFIAvgYQAWgNANgGQAXgLAQADQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgRAHIgRAFIgjAQIgpAUIgXAHIAAABIgBACIgBAAg");
	this.shape_49.setTransform(7,77.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C49A6C").s().p("Ag1AwQgBAAAAgBQAAAAAAAAQgBgBABAAQAAgBAAAAQAQgbAcgZQAZgXAegRQAGgDAEAGQACAGgFADQgbAPgcAXIgZAVQgOANgHAKIgCACIgCgBg");
	this.shape_50.setTransform(10.9,84.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C49A6C").s().p("AghAyQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAHgVAWgiQATgeANgLQAEgCACADQADADgCAEQgIAQgZAdIgOAXQgIAOgIAIIgCACIgCgBg");
	this.shape_51.setTransform(17.1,86.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C49A6C").s().p("AgxAzIAAgCQABgIAOgQIAIgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAEgEIAEgFIADgBIAagVIARgQIAHgJQAEgFAEgCQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAQgdAYQgPALgQAJQgCAGgOAPQgNAOgJADIAAABIgCgBg");
	this.shape_52.setTransform(62.5,62.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C49A6C").s().p("AgOAVQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAGgJIAGgIIAEgJQADgHACgDQADgDADABQAEAAAAAFQAAAIgKAOIgCAEIAAABQgEAHgHADIgBABIgBAAIgBAAIgBAAIgDgBg");
	this.shape_53.setTransform(55.4,67.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C49A6C").s().p("AgwAiQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgKACgDIAGgOIACgLQABgHAEgEQACgCADABQADAAABADQAMgDAXgKQAWgHAPACQADABABAEQABAEgEACIgXAHIgXAGQgVAGgIgCQgCACAAAGIgCAIIgHALIgGAKQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_54.setTransform(48.5,69.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C49A6C").s().p("AhyAXIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADgIANgDIAWgDICPgXIAcgFQARgCAMADQADABAAADQAAADgCABQgLAHgRADIgeAEIidAXIgPACQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBABAAg");
	this.shape_55.setTransform(29.7,71.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C49A6C").s().p("AhiAtQgEgGACgHQACgGAHgDIABgEQABgDAEgCIAHgEIgCgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABAAQAHgEAMgBIAVgBQAVgEAWgJQA6gVAbgWQAFgFAFAFQAFAFgFAGIgBABQABAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIhBA5QgmAgglAIQgNACgKAAQgYAAgIgOgAg3AwQALgCAMgEQAUgGAVgQQgWAMgXAEQgTAEgIABQgSABgHgKIgCgDQADAUASgBQAHABAHgBgAhIAXQABABAIAAQAYABAfgLQATgHAYgNIgXAHQgZAKgQADQgbAOgOgKQAAABgBABQAAABAAAAQgBABAAAAQAAABAAAAg");
	this.shape_56.setTransform(46.8,77.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C49A6C").s().p("AiSBFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQARgUAfgZIgDACQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAEgMAOgKQAMgJAOgGQAFgCADAEQADAEgBAEQBZg0BmgJQAHAAABAHQABAIgHABQhcAQg8AcQgeANgmAXIhAArIgBAAIgCgBg");
	this.shape_57.setTransform(31.6,20.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C49A6C").s().p("AAkAPQgGgBgLgHQgKgGgHgBQgPgEgGADQgDABgEAEIgGAIQgCADgDgCQgCgDABgCIAGgLQAEgHAEgCQAFgEAQACQANACALAGQAPAHADALQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgBACIgBgBg");
	this.shape_58.setTransform(12,61.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C49A6C").s().p("AAVAhQgEgCABgFIACgEIAAgBQAAgNgBgHQgDgHgGgJQgmgNgPAGQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAJgGAMAAIAVABQAZACALAIQAQAMgCAPQgCAPgQANQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_59.setTransform(39.6,57.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C49A6C").s().p("Ag5BuQgegQgMgeQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQARAcAeAOQAfAOAegIQAmgJAXgnIgKAJQgjAbgtgDQgxgEgZgkQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAABABAAQAnAZAlACQApABAfgeQAcgcgHgxIgVhUQgCgHAHgCQAHgCACAHIAQA4QAJAiABAYQABAPgGAPQgCAhgcAbQgcAaghAGIgPABQgYAAgWgMg");
	this.shape_60.setTransform(58.1,44.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C49A6C").s().p("AgCAeQgEgEAAgHIAAgNIAAgiQAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQAAABAAAAQAAABAAAAQAEALACAWIABAOQAAAIgEAEQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCgCg");
	this.shape_61.setTransform(73.5,41.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C49A6C").s().p("AgNAqQgJgJAIgUQADgGALgTQAKgQADgMQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQgDASgJAOQAEABAAADQABARgQAaQgCADgDAAIgEgBg");
	this.shape_62.setTransform(66.1,17.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C49A6C").s().p("Ag5B8QgVgHgIgQQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAEQACgcALgfQAJgWARghIAhg7QAUghAVgTQAAgBAAAAQABAAAAABQAAAAAAAAQAAAAAAABQgJAUgVAhQgWAkgIAQQgVAqgGAPQAFAAACADQADADgDAEQgSAZgCAcQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAJAEAHAAQAUACAagQIABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAlgyQADgEAFAAQAWAEAQAUQADAEgBAEQgBAEgFACQgbALgeARIgWAMQgLAHgLACQgJADgJAAQgKAAgKgDgABBBAIABgBIgBgBg");
	this.shape_63.setTransform(53.2,12.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C49A6C").s().p("AAdByQgRgJgKgdQgMgegIgfQgSg/gBhBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAABQALBKALAnQARBBAfAnQADAEgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_64.setTransform(11.3,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,109.6,150.9), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AAeBSIgIgEIgKgHIAAAAIgJgaIgGgwIgDgmIgBgOQgEgQgPgEIgKgBQALgKAOADQAOAEADAQIABAHIAAAEIAJBLQABAHACAHIADANIAEALIALAYg");
	this.shape_1.setTransform(3.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,7.4,17), null);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AANBAIgGgEIgFgEIgGgVIgBgKQgCgFAAgGIgCg9IgBgFQAAgIgHgGIAIABQALAEABANIABAFIAAAeIABAfQABAGABAFIABAKIAHAWIADAGg");
	this.shape_1.setTransform(1.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,3.6,13.3), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AgGBoQgqgqgahGQgYhGAGg5QAEAWAKAdQAZBIAqAoQAqAqAigNQATgHAEgsQADgYgChTQAEARAAARIABCGQgDA6gVAIQgIADgIAAQgcAAggggg");
	this.shape_1.setTransform(9.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,18.9,27.3), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AAFApQgRgCgZgfQAVgOATgYQAMgOAXggIAACZQgRgigQgCg");
	this.shape_1.setTransform(3.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,7.6,15.5), null);


(lib.Path_9_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("Ag+AGQgVgEgIgTQgEgLADgMQACgMAJgIIAdgZQASgOAVAHIgXAUQgJAIgCAMQgDAMAEALQAIAUAVAEQA2AIA5BCIghAaQg+hOg9gLg");
	this.shape_1.setTransform(9.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0_1, new cjs.Rectangle(0,0,18.9,19.1), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AgoBDIgRgQQgFgEgBgGQgBgHADgGIAGgIIAJAIQAHAHAJgDQAJgDADgJQAMgiAJgPQALgRASgGQAGgCADgFIAHgLIAFACQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAGgMARQgJAOgLAkQgDAJgJACIgGABQgGAAgFgEg");
	this.shape_1.setTransform(6.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0.1,0,12.9,14.2), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgGBVIgMgOIgBgdIADgbIAUhUQABgLgFgJQAEABAFADQANAJgDAQIAAAAIgBAHIgNAzIgDANIgFApIAAAWIADAQg");
	this.shape_1.setTransform(2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,4,18), null);


(lib.Path_7_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("Ag4AcIAkgHQAQgDAIgMQAJgMgCgPQgEgrgPgkIAMADQAgAiAPAyQAOArgDAtIh8AZIAGhIg");
	this.shape_1.setTransform(6.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_0_1, new cjs.Rectangle(0,0,12.6,20.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AhHBYQAag6AKgdQAQgwACg2IAzAaQgJAegTArQgFALAHAMQAHALANACIAsAEQgDAfgNAhg");
	this.shape_1.setTransform(7.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,14.4,20.5), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE88C").s().p("AhJBEQgSgCgCgGIAPgGQAnACAjgTIABAAQApgVAWgpIAQgeIASgRQAAAPgQAeQgVAmgEALQgiAWgPAHIgwAVQgHgDgWgBg");
	this.shape_1.setTransform(9.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,18.9,14.5), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AAcD8QgjgDgXgdQgYgcAEgkIAVhfIAKhNIgDhMIgJgiIgQgiIgLgTQgLgSADgUQADgVAPgNIAFAFQAUAWAUAPQAAARAHANIALATIAHAMIAOAmIAIA0IgBAqIgEApIgbCDQgDAeAQAZQAQAZAbAKQgQAGgRAAIgHAAg");
	this.shape_1.setTransform(6.7,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,13.6,50.5), null);


(lib.Path_4_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgUBUIgFgIIgDgFIABgIIAJgmIAhhQQAFgPgMgLQgEgEgGgCQANgEAKAKQAMALgFAPIglBeIgFAYIgBAag");
	this.shape_1.setTransform(2.9,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0_1, new cjs.Rectangle(0,0,5.8,17.9), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("Ah4gOQA0hMBWhQIAZgDQBigIA/AOQgvBygZBqQgFgmgKgZQgPgmgZgCQg0gDhnBgQhAA8g+BKQAXhlA9hag");
	this.shape_1.setTransform(20.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0.1,40.9,35.4), null);


(lib.Path_3_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("Ag0CGIAWgEQATgCANgOQAPgOACgUQAFggABgQQACgdgGgiQgLg2gphZIAUgFQAOAcAQAmQAiBKAIAuQAJAqgGAoQgHA0ABAWIh7ARQAGgaAHgUg");
	this.shape_1.setTransform(6.6,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1_1, new cjs.Rectangle(0,0,13.3,35.9), null);


(lib.Path_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("ABCA4QhPg1gxARQglANgKAtQgGAWACAUIgEgGQgViphHiQQAhgCAlADQA+AGA4ATQCpCnA+DOQhAhbhQg1g");
	this.shape_1.setTransform(21,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0_1, new cjs.Rectangle(0,0,42.1,40.1), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AhRCZQAMgWASgaIAgAEQAQACANgIQANgJAFgPQANgeAGgQQAJgcACgiQACgygUhXIALABQAJAdAHAnQAQBLgCAtQgBApgOAjQgTAvgFAUIh7gNg");
	this.shape_1.setTransform(8.2,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,16.3,33.3), null);


(lib.Path_2_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AARBVIgIgGIgJgNIgCgVIAChPIAAgIIAAgDIABgLQgBgQgNgHIgJgCQANgLANAHQAPAHAAAQIgBANIAAAEIgCBhIABAMIACAKIABAIIADAHg");
	this.shape_1.setTransform(2.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_5_1, new cjs.Rectangle(0,0,4.6,17.7), null);


(lib.Path_2_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgTA/IgDgGIgEgLIAAgCIANgnIAWgqIABgCIACgFIAAAAQAFgLgIgJIgDgDQAJgBAHAHQAJAJgFAMIgEAHIgWAqIgNAnIgCAUg");
	this.shape_1.setTransform(2.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_4_1, new cjs.Rectangle(0,0,5.5,13.6), null);


(lib.Path_2_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AhICIQgEhrgUihQAngQAqgHQAeA9AfBPQATA0AfBbQhBhLgvAHQgoAHgJAtQgDAXADAVg");
	this.shape_1.setTransform(9.7,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3_1, new cjs.Rectangle(0,0,19.3,31.3), null);


(lib.Path_2_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgxBCIgBgMIAAgEIAWgjIAJgLIAngqIACgDIADgDIAFgFQAJgNgHgOIgDgEQANACAGALQAHAOgJANIhCBMIgOAVIgKAYg");
	this.shape_1.setTransform(5.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2_1, new cjs.Rectangle(0,0,10.2,16.3), null);


(lib.Path_2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AhDAqQgbgHgMgEQgUgHgJgMIAggXQANAFAfAHQANADAKAFICrg6IABACQgbAjgWARIgBABIiCAsg");
	this.shape_1.setTransform(13.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1_1, new cjs.Rectangle(0,0,27.3,10), null);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AAHhvIAPAGIAQAGIAXAOQANAIAMAKIgvCuQgDhFgdgHQgSgEgfAgQgVAVgXAgQAehcA/iDg");
	this.shape_1.setTransform(8.7,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, new cjs.Rectangle(0,0,17.3,22.4), null);


(lib.Path_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AglAzIgBgJIAAgEIAAgBIALgRIAUgYIAXgZIABgDIAGgFQAHgLgFgKIgCgEQAJACAFAJQAGALgIAJIgFAHIgWAYIgEACIgTAaIgLARIgDAHIgEALg");
	this.shape_1.setTransform(3.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,7.9,12.5), null);


(lib.Path_1_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AAABBIgDgFIgGgHIgBgBIAAgHIAAgeIAHg3IAAgDIABgIIAAAAQABgKgIgHQAFAAAFADQAKAFAAANIgBAIIAAACIgHA4IAAAmIACAMg");
	this.shape_1.setTransform(1.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4_1, new cjs.Rectangle(0,0,2.3,13.8), null);


(lib.Path_1_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE88C").s().p("AhiB7QgjgjgHghQgGgbALgtQARgrALgWQASghAVgTIAGAOQgGAMgRArQgLAuAGAaQAHAhAiAjQBhAcBfgjIgPAhQg0Abg7AFQgRACgOAAQgrAAgpgMg");
	this.shape_1.setTransform(14.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3_1, new cjs.Rectangle(0.1,0,28.6,27), null);


(lib.Path_1_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A73").s().p("AgxCJQgNh0AgiGQAWgOAagPQAUCUAQBCQgagpghAEQglAEgGA0QgEAbAEAZg");
	this.shape_1.setTransform(5.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2_1, new cjs.Rectangle(0,0,10.8,28.6), null);


(lib.Path_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgWBTIgEgIIgEgKIgBgDIACgIIADgMIADgMIAhhUIABgDIADgHQAEgNgIgLQAIACAFAFQAMAMgFAOIgFAKIgBADIgBADIgCAFIgOAhIgSA1IgFAVIgBAJIAAAHg");
	this.shape_1.setTransform(3.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(0,0,6.3,17.8), null);


(lib.Path_1_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000A73").s().p("AAdAxQgHgmgUgKQgXgLgcApQAMgrAihbQAnAnAOAnQgCBIgPA5QABgegFgZg");
	this.shape_2.setTransform(5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, new cjs.Rectangle(0,0,10,20.9), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgQBAIgDgGIgEgIIAAgCIAGgZIAchIQAEgLgHgHQAGABAEAEQAJAJgEALIgcBIIgGAaIgBAHIAAAFg");
	this.shape_2.setTransform(2.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,4.9,13.7), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEDCC4").s().p("AgJA8IgEgGIgBgEIAAgRIAGgqIAJgkIABgCIABgGQABgJgEgGQADAAAEADQAJAIgBALIgBAGIgBACIgNA5IgCAeIABAOIABAGg");
	this.shape_1.setTransform(1.5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,3,13.8), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000A73").s().p("AhBClQgTgUgKgeIAXgpQAOgYAOgSQAhgqACg2QACgugWggQApgpAnARQAjAQAHA9QAIBCgrA2QgcAlgkBIQgVAggUAAQgJAAgKgHg");
	this.shape_2.setTransform(9.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,19.1,34.4), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000A73").s().p("AAaDVQhAgEg5gTIgUgHIAAAAIgBAAIgBgBIgHgDQgPgGgOgHQgagPgXgSQgogggggpQgXgggRgiQgLgYgJgYIgFgQQgEgMAAgJIADAHQASAkAXAfQAeAoApAgQAYASAaAPQANAHAPAGIAHADIACABIAAAAIABAAIATAHQA4ATBBAFQAmACAdgEQAlgDAhgLQATgHARgJIAOgHIARgNQAcgVAYgcQAXgcAPgfQAOgeAGglQALg7gPg/QAQAlAJAkQAPBCgKA9QgHAkgOAeQgPAggXAcQgWAbgeAWIgRANIgOAHQgRAJgTAHQghALglADQgSACgUAAIgcgBg");
	this.shape_65.setTransform(34.4,35.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000A73").s().p("AgxAVIgTgCQgGAAgGADIgOgaQANgGAPACIAGABIAPAEQARADATAEQAgAGAagIQARgEASgLIALgJIgKAKQgOANgTAJQgaANgkAAIgngCg");
	this.shape_66.setTransform(70.3,2.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000A73").s().p("AgHgSQAIAMAEANIADAMQgIgSgHgTg");
	this.shape_67.setTransform(18,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,79.8,56.7), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE88C").s().p("AAKA0Qg0gwgmgzQgLgPgDgTQgCgTAGgRQAjAuAsApQApAmAjAWQAMAvATAoQgmgUgwgtg");
	this.shape_1.setTransform(9.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,19.1,23.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAE88C").s().p("Ah5BuQgzgQgzgfQgsgbgWgZQgDgbgDg7IgCg1IAGAHQACBOADAiQAXAYAtAbQAyAfAzAQQA6ATBJgBQBPAAAsgXQAzgZAegdQAlgiAYg2QAMgXAGggQgFAogQAkQgYA1glAjQgfAdgyAZQgtAWhPABIgEABQhIAAg3gTg");
	this.shape_5.setTransform(29.8,44.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAE88C").s().p("AhYAKQAOgDAeAEIAmAFQAdgBAcgMQAZgKANgPQgUAhg9AKQgRADglgDQghgBgHADQgDgJABgEg");
	this.shape_6.setTransform(61.8,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAE88C").s().p("AANAIQgFgWgQg5QgKgXgFgQQgKgeAJgJQACAMAIAUIAKAZQAQA2AHAkQATBbgPA9QAIg7gShTg");
	this.shape_7.setTransform(54,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,70.8,57.2), null);


(lib.Path_1_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F196E").s().p("ADoGdQg8iehng2QgViBguhBQgxhFhyg1QgQhZhChDQg+g/g+gDQASgaAOgvIADAGQB6AgA9A7QA5A4AsB7QBvAjBXCQQAsBIAVBCQAfhSAEiEQAJkLiCkEIgBgCQCFCqA7DOQBREXg5EFQgcCCgtBLQgJhEgehQg");
	this.shape_3.setTransform(36.8,56.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_3, new cjs.Rectangle(0,0,73.6,112.2), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89665C").s().p("Ah5FHQAAgKgDgNQgCgJAFgIQAFgHAJgDIBegWIAHgDIAdgUQAMgIgCgOQgBgNgNgGIhMgdQgfgNgSgbQgTgcABghIACjvQAAg9AsgsQArgrA9AAIADAAQgyAQgdAsQgeAtAHA1IAXDuQAEAhAVAZQAWAaAfAIIBQAVQANAEADANQADAOgLAJIgbAXIgHAEIhaAhQgIADgFAIQgEAJADAIIAEAQg");
	this.shape_3.setTransform(12.5,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,25,65.5), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89665C").s().p("AAMDAQgFhHgfgqQgshagMhVQgMhdAchMQAMgoAUgdQghCJBSCvQAbAiAHA1QAHAugHBBQgCAQALAMQAJAMAPABQgXA6gEAsIg4APQAOhXgDg3g");
	this.shape_3.setTransform(8.4,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,16.9,66.9), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBC156").s().p("AAkJoQg7AEgsgSQgvgSgshTQgzhhgegaQgQgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAXhKARhtQgBh0AUiqQAajDALhiIAUAAQAAAogCA2QgXCqgFA4QgOB+ACBgQgQBrgYBMQgJAbAGAbQAHAcATAUQAmAnAvAbQAgASA4AWIAmASQAUAJAPANQAfAaAzBhQAsBUAuASQAtARA7gEQCEAiB7ghQBvgeBPhMQhMBeh4AoQhKAZhOAAQhAAAhDgRg");
	this.shape_8.setTransform(51.5,85.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBC156").s().p("ACIIGQAJhIgtiYQgfhogghKQg4hrgvhYQhaiugLhKQgLhQAVg+QAKgeAohFQAOgYAighIgMAQQg8BLgSBRQgVBkAuBlQAdBBBGB0QBYCTAaAxQAkBeAVBUQAfB3gHA7QgLBXhBA6QAiguAIg+g");
	this.shape_9.setTransform(89.6,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,106.7,149), null);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C49A6C").s().p("AiEFcQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAOgQAGgPQAGgPACgVQABgUAAg6QAAgsgDgeQgEgggTguQAAAAAAgBQgBAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAZAbAHA0QACATABBEIABAjQAAAZgCASIABAAIAFgCIAKgsIABgNIABg7IAAgCQgDgIgBgKQgBgEADgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQARAYALAeQALAgAAAdQBOgqAnhCQAshJgVhTQgJglgZg9QgIgTgQgZIgbgqQgphJAOhZQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQgCARABAWQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAHApASAmQAEAJAPAXQAMATAEANQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAJANQAOAZAZBDQAWA3ABAsQACBNgyBBQgrA5hKAlIgBACQAAAEgEABQgDABgEgCIgMAFIgFAEQgCACgEgBIgJADIAAABQgDACgDgBIgEACQgEABgDgCQgIAogbAGIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_68.setTransform(96.3,101.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C49A6C").s().p("AgfAvQgEAAgBgDQgLgZgFgQQgHgWABgVIABAAQAGAcAWAqQArgzAkgYQAFgDADAFQADAEgEADQgNAOgdAaQgcAbgNAPQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_69.setTransform(39.1,91.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C49A6C").s().p("AgXBpQgJgoALhGQAIg3AZgqQAFgIAIAHQADABgBADIAAABIgBAEIAAAAIgTAxIgHAgIgIAbIAAAJQAAAEgCABIgCAnQgBAXgEAPQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_70.setTransform(23.3,112.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C49A6C").s().p("AAWCOQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAEgRAYgVIAQgNQAKgIAIgBIABgnIghAeQgXAYgVAbQgEAHgFgEQgfgOgRgJQgbgPgQgRIASAWIAMAPQAHAJgCAIQgBAFgEAAQgEAFgDgDQgTgMgYgrQgTgigJgjQgYhUAVg+QAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAABQABABgBAAQgBAxABAVQABAmAKAfQAHAaAMAYIAPATIAAgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQASAHAbAOIAtAWQAwhBAmgXQAJhjAzgxQAEgEADAEQAEAEgDAEQgiAogMA7QgHAjgBBLQgBAEgDACQgEACgDgBQgDABgDgCIgPAKIgPAMIgNANQgIAJgFADIgCABIgCgBg");
	this.shape_71.setTransform(40.7,117.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C49A6C").s().p("AggAtQgIgHgPgRQgggigCgaQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACABQAIAHAKARQALASAGAHQATATAcATQADgMAMgQIAWgWQAPgUAJgJQAQgSAOgEQABgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgEAMgQAQIgaAZIgVAbQgOASgKAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgFABQgKAAgOgLg");
	this.shape_72.setTransform(35.9,108.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C49A6C").s().p("AgiBCQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQADglAOgaQAHgOAKgMIAQgRQALgKAEgJQABgDAFAAQAEAAAAAFQgBAMgOANIgXAWQgZAhgGAsQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_73.setTransform(53.5,144.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C49A6C").s().p("AhOBAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAIgTATgPQAMgJAagOQAdgOATgOQAVgOAFgHIAHgJQADgGADgDQABAAAAgBQABAAABAAQAAAAABABQAAAAABABQAKAPgaAWQgKAIgdARQgRAJgiASQgfARgQAUIgBABIgCgBg");
	this.shape_74.setTransform(42.8,141.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C49A6C").s().p("AhZAhQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAcgXAtgJIAngHQAPgCAPgHIAdgOQAEgDADAFQADAFgFACIgTANQgMAIgJACQgHACgMABIgTACQg9AJghAUIgBAAIgDgBg");
	this.shape_75.setTransform(38.1,136.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C49A6C").s().p("AhNCtQAAgDADgBQAYgHAUgQQAQgMASgXIARgXQAJgNADgNQADgMgDgSIgFgeQgMg6gMgiQgSgzgggfQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAIAIQAAgBgBAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAXANAmAkQASAQAIAJIAGAMQAEAJADACQAFACgCAGQgBAFgFgBIgCAAQAIAZgEAYIAAAAQABANgBAGIAAAZQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAGAIgGARQAJAOgDAKQgDAKgSAHQgEABgDgEQgDAEgHADQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBIAPgbIAFgeIACghQgGgJgEgTIgHgfIgYhAIAAgBIgFgEQgVgUgKgLQAvA9AQB1QADAWgGAUIABACQgBAPgRAeQgNAagPADQgEABgBgEQggAggfABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_76.setTransform(64.7,123.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C49A6C").s().p("AgDANQgCgHgBgPQAAgFAGgBQAFgBABAFQACAPgEAJQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAAAgDg");
	this.shape_77.setTransform(62.4,101.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C49A6C").s().p("ABJASQgugNgYgFQgSgEgWABIgpACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAggQAvAHQAaAFAzAQQAHACgCAGQgCAGgFAAIgCgBg");
	this.shape_78.setTransform(77.3,73.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C49A6C").s().p("AA0AgIg2gdIgdgPQgRgJgNgEQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAQANAAAPAFIAbAMQAjAPAfARQAHAEgEAHQgDAFgEAAIgFgBg");
	this.shape_79.setTransform(76.5,81.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C49A6C").s().p("AAdAsIgqguIgRgTQgJgLgDgKQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQALAFALAKIARATIAoArQAGAGgGAGQgDADgDAAQgCAAgDgDg");
	this.shape_80.setTransform(71.5,84.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C49A6C").s().p("AAWAPIgbgFQgSgDgGgEQgDgBABgDQAAgDADgBQAFgBAUADIAJABIADgCQAGgDACgFQACgDAEAAQAEABABAEIAEAQQABAFgDACQgCADgDAAIgDgBg");
	this.shape_81.setTransform(57.5,97.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C49A6C").s().p("AgEAQQgFgBAAgFQgCgLACgKQABgEAEAAQAEABAAADIABgBQADgDAEACQADADgBAEQgBAIgEABIgCABIgCAIQAAAEgDAAIgCAAg");
	this.shape_82.setTransform(29.9,90.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C49A6C").s().p("AhDAhIgBAAIgBgCQAAgEAGgEIAJgFIAvgYQAWgNANgGQAXgKAQADQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAADgCACQgGADgLADIgRAGQgMAFgXALIgpATQgJAFgNADIAAAAIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBgBg");
	this.shape_83.setTransform(7,78);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C49A6C").s().p("Ag1AwQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAPgbAdgZQAZgXAegRQAGgDADAGQAEAGgGADQgbAPgcAXIgZAVQgPANgHAKIgBACIgCgBg");
	this.shape_84.setTransform(10.9,84.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C49A6C").s().p("AghAyQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAGgUAXgjQAVggALgJQAEgCACADQADADgCAEQgIAQgZAdIgOAXQgJAOgHAIIgCACIgCgBg");
	this.shape_85.setTransform(17.2,86.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C49A6C").s().p("AgxAzIAAgCQACgKAOgOIAIgIQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEIAEgFIACgBIArglIAHgJQAEgFAFgCQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAQgdAYQgPALgQAJQgCAFgFAGIgJAKQgOAOgIADIgBABIgCgBg");
	this.shape_86.setTransform(62.5,62.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C49A6C").s().p("AgOAVQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgEAEgFIAGgIIAEgJQADgHACgDQADgDADABQAEAAAAAFQAAAIgKAOIgDAEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgEAHgHADIgDABIgBAAIgDgBg");
	this.shape_87.setTransform(55.4,67.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C49A6C").s().p("AgwAiQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgKACgDIAGgOIACgLQABgHAEgEQACgCADABQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQAMgDAXgKQAWgHAPACQADABABAEQABAEgEACIgXAHIgXAGQgVAGgIgCQgCACAAAGIgCAIIgHALIgGAKQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_88.setTransform(48.6,69.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C49A6C").s().p("AhyAWIgCABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADgIANgDIAWgDICPgXIAcgFQARgCAMADQADABAAADQAAADgCABQgLAHgRADIgeAEIidAXIgPACQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAABgBg");
	this.shape_89.setTransform(29.8,71.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C49A6C").s().p("AhiAtQgEgGACgHQACgGAHgDIABgEQABgDAEgCIAGgEIgBgBIgBgCIABgBQAHgEANgBIAVgBQAWgFAVgIQA6gVAagWQAGgFAFAFQAFAFgFAGIgBABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIhAA5QgmAgglAIQgNACgKAAQgYAAgIgOgAg4AwQALgBANgFQAUgGAVgQQgVAMgYAEQgTAEgIABQgSABgHgKIgCgDQADAUASgBQAHABAGgBgAhIAXQABABAIAAQAZABAegLQATgHAYgNIgXAHQgaAKgPADQgbAOgOgKQAAABgBABQAAABAAAAQgBABAAAAQAAABAAAAg");
	this.shape_90.setTransform(46.8,77.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C49A6C").s().p("AiSBFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQASgWAegXIgDACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEgMAOgKQAMgJAOgGQAFgCADAEQACAEgBAEQBag0BmgJQAHAAABAHQABAIgHABQhbAQg9AcQgfANglAXIhAArIgBAAIgCgBg");
	this.shape_91.setTransform(31.6,20.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C49A6C").s().p("AAkAPQgGgBgLgHQgLgGgHgBQgOgEgGADQgDABgKAMQgBABAAAAQgBABAAAAQgBAAAAAAQgBgBgBAAQgCgDABgCIAGgLQAEgHAEgCQAFgDAQABQANACALAGQAPAHADALQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgBABIgBAAg");
	this.shape_92.setTransform(12,61.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C49A6C").s().p("AAVAhQgEgCABgFIACgEIAAgBQAAgNgCgHQgBgFgHgLQgmgNgPAGQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAJgGAMAAIAVABQAZACALAIQARAMgDAPQgDAPgPANQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_93.setTransform(39.7,57.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C49A6C").s().p("Ag5BuQgegQgMgeQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAQAcAeAOQAfAOAegIQAlgJAZgnIgKAJQgkAbgtgDQgwgEgagkQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABABAAAAQAnAZAlACQApABAfgeQAdgcgHgxIgWhUQgCgHAIgCQAHgCACAHIAPA4QAJAiABAYQABAPgFAPQgCAhgdAbQgbAaghAGIgQABQgYAAgWgMg");
	this.shape_94.setTransform(58.1,44.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C49A6C").s().p("AgCAeQgEgEAAgHIAAgNQAAgaABgIQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQABAAAAAAQAAABAAAAQAAABABAAQADALACAWIACAOQgBAIgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgCg");
	this.shape_95.setTransform(73.6,41.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C49A6C").s().p("AgNAqQgKgJAJgUQADgHALgSQAJgRAEgLQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQgDASgJAOQAEABAAADQABAPgQAcQgCADgDAAIgEgBg");
	this.shape_96.setTransform(66.1,17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C49A6C").s().p("Ag5B8QgVgHgIgQQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAJAEQACgcALgfQAJgWARghQAWgqALgRQATghAWgTIABAAIAAABQgJAUgVAhQgWAkgIAQQgSAigJAXQAEAAADADQADADgDAEQgSAYgCAdIgCAEQAJAEAHAAQAUACAagQIABAAIABgEIAkgyQADgFAGABQAWAFAQATQADAEgBAEQgBAEgFACQgcALgdARIgWAMQgMAHgKACQgJADgJAAQgKAAgKgDg");
	this.shape_97.setTransform(53.3,12.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C49A6C").s().p("AAcByQgPgIgMgeQgLgfgIgeQgSg9gBhDQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAABQALBKALAnQARBBAfAnQADAEgDAFQgCACgCAAIgEgBg");
	this.shape_98.setTransform(11.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,109.6,150.9), null);


(lib.Path_13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AAeBSIgIgEIgKgHIAAAAIgJgaIgGgqIgDgsIgBgOQgEgQgPgEIgKgBQAKgLAPAEQAOAEADAQIANBkIADANIAEALIAEAKIAHAOg");
	this.shape_2.setTransform(3.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_2, new cjs.Rectangle(0,0,7.4,17), null);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AANBAIgGgEIgFgEIgCgEIgEgRIgEgfIgBgtIAAgDIAAgIQgBgIgHgGIAIABQALAEABANIAAAIIABACIAAAjIADAgIAGAbIAFALg");
	this.shape_2.setTransform(1.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(0,0,3.7,13.3), null);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AgGBoQgrgqgZhGQgYhGAGg5QAEAWAKAdQAZBIAqAoQAqAqAigNQATgHAEgsQADgYgChTQAEARAAARIABCGQgDA6gVAIQgIADgJAAQgcAAgfggg");
	this.shape_2.setTransform(9.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,18.9,27.3), null);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AAFApQgSgCgYgfQAVgOATgYQAMgOAXggIAACZQgRgigQgCg");
	this.shape_2.setTransform(3.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,7.6,15.5), null);


(lib.Path_9_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("Ag9AGQgVgEgIgTQgFgLADgMQADgMAJgIIAcgZQASgOAWAHIgXAUQgJAIgDAMQgDAMAFALQAHAUAWAEQA2AIA4BCIghAaQg+hOg8gLg");
	this.shape_2.setTransform(9.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0_2, new cjs.Rectangle(0.1,0,18.8,19.1), null);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AgnBDIgSgQQgFgEgBgGQgBgHAEgGIAFgIIAJAIQAHAHAKgDQAJgDADgJQAMgiAIgPQALgRASgGQAGgCAEgFIAGgLIAFACQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAGgLARQgKAOgLAkQgDAJgJACIgFABQgGAAgFgEg");
	this.shape_2.setTransform(6.4,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,12.9,14.2), null);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgGBVIgMgOIgBgdIADgbIAUhUQABgLgGgJQAEABAGADQANAJgDAQIAAAAIgCALIgBADIgLAsIgDANIgFApIAAAWIADAQg");
	this.shape_2.setTransform(2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,4,18), null);


(lib.Path_7_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("Ag4AcIAlgHQAPgDAIgMQAJgMgBgPQgEgrgQgkIAMADQAgAiAQAyQAOArgDAtIh9AZg");
	this.shape_2.setTransform(6.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_0_2, new cjs.Rectangle(0,0,12.7,20.1), null);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AhHBYQAag6AKgdQARgwACg2IAyAaQgJAdgSAsQgGALAHAMQAHALANACIAsAEQgDAhgNAfg");
	this.shape_2.setTransform(7.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,14.3,20.5), null);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE88C").s().p("AhJBEQgSgCgCgGIAPgGQAnACAjgTIAAAAQAogUAYgqIAQgeIASgRQAAAPgQAeQgVAmgEALQgiAWgPAHIgwAVQgHgDgWgBg");
	this.shape_2.setTransform(9.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,18.8,14.5), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AAcD8QgkgDgXgdQgXgcAEgkQAAgFACgIIAThSIAKhJIAAgEIAAgEIgDhIIgEgSIgKgeIgLgUIgLgTQgLgSADgUQADgVAPgNIAFAFQAUAWAUAPQAAAQAHAOIALATIAHAMIAOAmIAHA0IAAAqIgPBoIgQBEQgDAeAQAZQAQAZAbAKQgQAGgRAAIgHAAg");
	this.shape_2.setTransform(6.8,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0.1,0,13.5,50.5), null);


(lib.Path_4_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgUBUIgFgIIgDgFIADgTIAMgoIAWg2IABgDQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIADgGQAEgQgLgKQgFgFgFgBQANgEAKAKQAMALgFAPIglBeIgGAjIAAAPg");
	this.shape_2.setTransform(2.9,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0_2, new cjs.Rectangle(0,0,5.8,17.9), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("Ah3gOQAzhMBWhQIAZgDQBigIBAAOQgwBygZBqQgFgmgKgZQgPgmgYgCQg1gDhnBgQg+A6hABMQAXhlA+hag");
	this.shape_2.setTransform(20.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0.1,41,35.4), null);


(lib.Path_3_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("Ag0CGIAVgEQAUgCANgOQAPgOACgUQAFggABgQQADgdgHgiQgLg2gphZIAUgFQAOAcAQAmQAhBKAJAuQAJAqgGAoQgHA1AAAVIh6ARQAEgUAJgag");
	this.shape_2.setTransform(6.6,18);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1_2, new cjs.Rectangle(0,0,13.3,35.9), null);


(lib.Path_3_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("ABCA4QhPg1gxARQglANgKAtQgGAWACAUIgEgGQgUinhIiSQAhgCAlADQA/AGA3ATQCpCnA+DOQhAhbhQg1g");
	this.shape_2.setTransform(21,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0_2, new cjs.Rectangle(0,0,42.1,40.1), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AhRCZQAOgZAPgXIAhAEQAQACANgIQANgJAFgPQANgeAGgQQAJgcABgiQACg0gThVIALABQAIAdAIAnQAQBLgCAtQgBApgOAjQgTAvgFAUIh7gNg");
	this.shape_2.setTransform(8.2,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,16.3,33.3), null);


(lib.Path_2_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AARBUIgIgGIgJgNIgCgVIAChaIABgLQgBgPgNgHIgJgCQAFgFAIgBQAIgCAFAEQAOAGABAQIgBAOIAAAEIAAAEIgCBcIACAWIAFAPg");
	this.shape_2.setTransform(2.3,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_5_2, new cjs.Rectangle(0,0,4.6,17.7), null);


(lib.Path_2_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgTA/IgDgGIgFgLIADgLIALgeIAVgqIACgCIACgFIAAAAQAFgMgIgIIgDgDQAJgBAHAHQAIAJgEAMIgEAHIgNAYIgQAmIgDAKIgDAJIgCAUg");
	this.shape_2.setTransform(2.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_4_2, new cjs.Rectangle(0,0,5.5,13.6), null);


(lib.Path_2_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AhICIQgDhlgVinQAmgQAsgHQAdA9AfBPQAUA0AfBbQhChLgvAHQgnAHgJAtQgFAXAEAVIgHgUg");
	this.shape_2.setTransform(9.7,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3_2, new cjs.Rectangle(0,0,19.4,31.3), null);


(lib.Path_2_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AguBKIgEgUIAAgEIAWgjIAxg1IACgDIAHgIQAKgNgIgOIgCgEQAMACAGALQAHAOgJANIgfAiIgFAFIgFAEIgZAhIgNAVIgKAYg");
	this.shape_2.setTransform(5.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2_2, new cjs.Rectangle(0,0,10.2,16.3), null);


(lib.Path_2_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AhDAqQgbgHgMgEQgVgHgIgMIAggXQANAFAfAHQANADAKAFICrg6IABACQgaAigXASIgBABIiCAsg");
	this.shape_2.setTransform(13.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1_2, new cjs.Rectangle(0,0,27.3,10), null);


(lib.Path_2_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AAHhvIAPAGIAPAGIAZAOQAOAJAKAJQgPA6ggB0QgDhFgcgHQgSgEggAgQgVAVgWAgQAdhcA/iDg");
	this.shape_2.setTransform(8.6,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0_2, new cjs.Rectangle(0,0,17.3,22.4), null);


(lib.Path_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AglAzIgBgJIAAgEIAAgBIAKgRIAVgYIAXgZIABgDIAGgFQAHgLgFgKIgCgEQAJACAFAJQAFAKgHAKIgEAFIgDAEIglApIgRAaIgDAHIgEALg");
	this.shape_2.setTransform(3.9,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,7.9,12.5), null);


(lib.Path_1_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AAABBIgDgFIgGgHIgBgBIAAgHIAAgeIAHg3IAAgDIABgIIAAAAQABgKgJgHQAGAAAFADQALAFgBANIgBAFIAAADIAAACIgHA4IAAAmIACAMg");
	this.shape_2.setTransform(1.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4_2, new cjs.Rectangle(0,0,2.2,13.8), null);


(lib.Path_1_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE88C").s().p("AhiB7QgjgjgHghQgGgbALgtQAQgqAMgXQASghAVgTIAGAOQgLAWgMAhQgLAuAGAaQAHAhAiAjQBhAcBfgjIgPAhQg0Abg7AFQgRACgOAAQgrAAgpgMg");
	this.shape_2.setTransform(14.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3_2, new cjs.Rectangle(0.1,0,28.6,27), null);


(lib.Path_1_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A7300").s().p("AgxCJQgNh0AgiGQAZgQAWgNQAUCPARBHQgagpghAEQglAEgHA0QgDAbAEAZg");
	this.shape_2.setTransform(5.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2_2, new cjs.Rectangle(0,0,10.8,28.6), null);


(lib.Path_1_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgVBTIgFgIIgEgKIgBgDIACgIIADgMIAEgMIAghUIACgDIACgHQAEgNgIgLQAJACAFAFQALALgFAPIAAAAIgFANIgCADIgBAFIgdBJIgIAiIgBAJIAAAHg");
	this.shape_2.setTransform(3.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_2, new cjs.Rectangle(0,0,6.4,17.8), null);


(lib.Path_1_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A7300").s().p("AAeAxQgIgmgUgKQgXgLgcApQANgrAhhbQAoAoANAmQgCBIgPA5QABgfgEgYg");
	this.shape_4.setTransform(5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_4, new cjs.Rectangle(0,0,10,20.9), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEDCC4").s().p("AgQBAIgDgGIgEgIIAAgCIADgQIAZhBIABgEIABgCIABgDIABgCIACgFQADgKgGgIQAGABAEAEQAJAIgEAMIgcBIIgGAaIgBAHIAAAFg");
	this.shape_4.setTransform(2.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,4.9,13.7), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEDCC4").s().p("AgJA8IgFgGIAAgEIAAgRIAGgqIAJgkIABgCIABgGQABgJgEgGIAHADQAJAIgBALIgBAGIgBACIgNA5IgCAVIABAXIABAGg");
	this.shape_2.setTransform(1.5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,3,13.8), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A7300").s().p("AhBClQgTgTgKggQAfg5AUgZQAhgrACg1QACgvgWggQApgoAnARQAjAQAHA8QAIBCgrA2QgcAlglBIQgUAhgUAAQgJAAgKgHg");
	this.shape_4.setTransform(9.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,19.1,34.4), null);


(lib.Group_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0A7300").s().p("AAaDVQhAgEg6gTIgTgHIgBAAIAAAAIgJgEQgPgGgNgHQgagPgXgSQgpgggfgpQgXgggRgiQgLgYgJgYIgFgQQgEgMAAgJIADAHQARAjAYAgQAeAoApAgQAYASAaAPQAMAHAQAGIAJAEIAAAAIABAAIATAHQA4ATBBAFQAlABAegDQAkgDAigLQATgHARgJIAJgEIAHgGIAPgKQAegXAVgaQAYgcAPgfQAOgeAGglQAKg6gOhAQAQAlAJAkQAPBCgKA9QgHAkgOAeQgPAggXAcQgVAagfAXIgOAKIgDADIgOAHQgRAJgTAHQgiALgkADQgSACgUAAIgcgBg");
	this.shape_99.setTransform(34.4,35.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0A7300").s().p("AgxAVIgTgCQgHAAgFADIgOgaQANgGAPACIAGABIAPAEQARADATAEQAgAGAagIQASgEARgLIALgJIgCADIgHAHQgOAOgUAIQgZANglAAIgngCg");
	this.shape_100.setTransform(70.3,2.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0A7300").s().p("AgHgSQAIANAEAMQADAHAAAFQgIgSgHgTg");
	this.shape_101.setTransform(18,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_5, new cjs.Rectangle(0,0,79.8,56.7), null);


(lib.Group_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE88C").s().p("AAJA0QgzgwgmgzQgLgPgDgTQgCgTAGgRQAjAuAsApQApAmAjAWQAMAvATAoQgmgUgxgtg");
	this.shape_2.setTransform(9.6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0.1,0,19.1,23.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAE88C").s().p("Ah5BuQgzgQgzgfQgsgbgWgZQgDgbgDg7IgCg1IAFAHQAEBbACAVQAXAYAtAbQAyAfAzAQQA6ATBJgBQBPAAAsgXQAzgZAegdQAlgiAYg2QAMgaAGgdQgFAogQAkQgYA1glAjQgfAdgyAZQgtAWhPABIgEABQhIAAg3gTg");
	this.shape_10.setTransform(29.8,44.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAE88C").s().p("AhYAKQAOgDAeAEIAnAFQAdgBAcgMQAZgKAMgPQgUAhg8AKQgRADglgDQghgBgIADQgCgJAAgEg");
	this.shape_11.setTransform(61.8,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAE88C").s().p("AANAIQgFgWgQg5QgKgXgFgQQgKgeAJgJQACANAIATIAKAZIAXBaQATBbgPA9QAIg7gShTg");
	this.shape_12.setTransform(54,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,70.7,57.2), null);


(lib.Path_1_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C6E19").s().p("ADoGdQg8iehng2QgViBguhBQgxhFhyg1QgQhZhChDQg+g/g+gDQATgcANgtIACAGQB6AgA+A7QA5A4AsB7QBvAjBXCQQAsBIAVBCQAfhSAEiEQAJkLiCkEIgBgCQCFCqA7DOQBREXg5EFQgcCCgtBLQgJhEgehQg");
	this.shape_5.setTransform(36.8,56.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_5, new cjs.Rectangle(0,0,73.6,112.2), null);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89665C").s().p("Ah5FHIgDgXQgCgJAFgIQAFgHAJgDIBegWIAHgDIAdgUQAMgIgCgOQgBgNgNgGIhMgdQgfgNgSgbQgTgcABghIACjvQAAg9AsgsQArgrA9AAIADAAQgyAQgdAsQgeAtAGA1IAYDuQAEAhAVAZQAWAaAfAIIBQAVQANAEADANQADAOgLAJIgbAXIgHAEIhaAhQgIADgFAIQgEAJADAIIAEAQg");
	this.shape_5.setTransform(12.6,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0.1,0,25,65.5), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89665C").s().p("AAMDAQgFhHgfgqQgshagMhVQgMhdAchMQAMgoAUgdQghCKBSCuQAbAiAHA1QAHAugHBBQgCAQAKAMQAKAMAPABQgXA3gEAvIg4APQAOhYgDg2g");
	this.shape_5.setTransform(8.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,16.9,66.9), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBC156").s().p("AAkJoQg7AEgsgSQgvgSgshTQgzhhgfgaQgPgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAYhMAQhrQgBh0AUiqQAajDALhiIAUAAQAAAogCA2QgWCggHBCQgNB+ACBgQgQBrgYBMQgJAbAGAbQAGAcAUAUQAlAnAwAbQAfASA5AWIAmASQAUAJAPANQAfAaAzBhQAsBUAuASQAtARA7gEQCEAiB7ghQBvgeBPhMQhMBdh4ApQhKAZhOAAQhAAAhDgRg");
	this.shape_13.setTransform(51.5,85.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBC156").s().p("ACIIGQAJhIgtiYQgehlghhNQg4hrgvhYQhaiugLhKQgLhQAVg+QAKgeAohFQAMgWAjgjIgLAQQg8BLgSBRQgVBkAuBlQAdBBBGB0QBYCTAaAxQAkBeAVBUQAfB3gHA7QgLBXhBA6QAiguAIg+g");
	this.shape_14.setTransform(89.6,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,106.7,149), null);


(lib.רקע = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(39).call(this.frame_77).wait(1));

	// Layer 1
	this.instance = new lib.אדמהבלבד01();
	this.instance.parent = this;
	this.instance.setTransform(0,622,0.268,0.229);

	this.instance_1 = new lib.רקע201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.271,0.271);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(542.3,573.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_2}]},39).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:305.9},37).to({y:573.6},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1084.7,1147.2);


(lib.PetIdan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape.setTransform(164.2,-138.7,0.077,0.077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3B3B").s().p("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");
	this.shape_1.setTransform(156.4,-146.5,0.077,0.077);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape_2.setTransform(128.8,-120.5,0.14,0.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3B3B").s().p("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");
	this.shape_3.setTransform(114.7,-134.5,0.14,0.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3838").s().p("AgmAwQgOgKgBgQQAAgPAegdQAdgfAPAAQARAAAKANQAKANgIAPQgTAkgqAaQgGAEgGAAQgHAAgIgGg");
	this.shape_4.setTransform(130.9,-154.5,0.243,0.243);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424142").s().p("AgmAxQgNgIgCgRQgBgQAegeQAdgfARAAQARABAKAOQAJAPgJAPQgaAmghAUQgHAEgHAAQgHAAgHgFg");
	this.shape_5.setTransform(135.2,-150.2,0.243,0.243);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424142").s().p("AgvAmQgMgUAOgPQASgTAegdQAPgOAUALQARAIgBATQAAAOgeAeQgdAegPABIgCAAQgRAAgIgQg");
	this.shape_6.setTransform(133.1,-152.3,0.243,0.243);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424142").s().p("AgWA2QgRgBgIgLQgJgLAFgPQARgpAwgZQANgHAOALQAOALgBAPQgBAPgfAdQgdAegOAAIgBAAg");
	this.shape_7.setTransform(138.5,-153.4,0.243,0.243);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424142").s().p("AgxAmQgKgVAOgOQAfggAQgPQAKgJAMABQALABAKAKQAJAKAAALQAAALgJAJIgdAfQgQARgNAGIgCAAQgbAAgHgQg");
	this.shape_8.setTransform(136.3,-155.6,0.243,0.243);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424142").s().p("AgVA1QgTAAgJgQQgJgRAMgPQAXgdAdgWQAPgMARAJQAQAJAAATQAAAQgfAdQgcAdgQAAIAAAAg");
	this.shape_9.setTransform(141.7,-156.7,0.243,0.243);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424142").s().p("AgXA1QgQAAgJgOQgJgOAIgOQAVgkAmgYQANgIAPAJQAPAIABARQABAQgfAeQgdAegRAAIgBAAg");
	this.shape_10.setTransform(139.6,-158.8,0.243,0.243);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3838").s().p("AgvAnQgMgUAOgPQATgUAegdQAQgOASAMQARAKgCASQAAAOgeAcQgcAegOAAIgEAAQgRAAgHgOg");
	this.shape_11.setTransform(134.1,-157.8,0.243,0.243);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3838").s().p("AgwAlQgKgQAMgPQAXgeAggXQANgKAQAJQAPAJABARQAAAPgeAdQgdAfgQAAQgSAAgJgQg");
	this.shape_12.setTransform(137.4,-161,0.243,0.243);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3838").s().p("Aj+C9QgzgjgNg+QgMg/AigzQAig1A9gOQA9gNA2AiQAOAJAOABQAMABAPgGQBTgfAyheQAJgQAMgGQAKgGATABIBSABIBYAAQg9CEhBBLQhSBdhzAkQgaAJgPATQgmA1g9ALQgOACgNAAQguAAgogbg");
	this.shape_13.setTransform(99.7,-96,0.243,0.243);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3838").s().p("AB7DZQg8gOgjg2QgNgUgagKQhwgnhMhYQhChMgvh8QBAABAlgCQA1gCAsgJQANgCAGAIQAEAFAFALQA3BcBEAkQAOAHAKABQANABAOgIQA5geA7ATQA8ASAeA4QAdA1gQA8QgQA7g1AgQgmAXgpAAQgSAAgSgEg");
	this.shape_14.setTransform(153.8,-96.1,0.243,0.243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A3838").s().p("AB1ErQgHgBgLgKImBmCQgKgKgBgGQgBgHALgJQB4hkCFg/IANgEQAJgBAGAGIAKAKIEZEYQAKAKACAJQACAKgGANQhACChfB1QgJAMgIAAIAAAAg");
	this.shape_15.setTransform(144.1,-162.9,0.243,0.243);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3838").s().p("As1XnQhbgBg3gDQhPgFhCgMQiagehshgQhkhag/iXQgjhRgbh3QgciJgPhEQgfiNgkixQgDgNgFgFQgHgGgMABIgTAAQh3ANgthqIAAjDQAag0AtgVQAogRBAAAUAQkAABAhGAAAQAcAAAIgHQAKgIgBgbQgBpgABq2QABgXgJgIQgHgIgZgDQidgWhfB5QgHAKgUAQQgpAhgPAWQgXAjAIAsQACAPgGAUIgMAgIjRjRQA4gZA0AFQAQACAOgFQAMgFANgMIC4irQAfgeArAAQBRABCjAAQApAAARASQASARAAAqQAAQ6gBE2QAAAaAJAIQAJAIAZgCQAdgBAqABIBHAAQA5ABAlAjQAkAkAAA5QABA3gBA2QAABCgjAkQgkAlhAgBQgcAAgLAKQgLAJgGAaIg+EcQgkCgghB5Qg8DjigCJQimCOjtAQQg2ADg3AAg");
	this.shape_16.setTransform(125.6,-139.5,0.243,0.243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B393A").s().p("ApZD8IgKgFQhFgdgGgPQgGgRAlg+QDalsG9gTQHOAZDTGOQAJARgDAJQgDAJgRAGQgnAOgiASQgRAKgKgEQgKgEgKgTQiIkBkYg+QjOgui/BdQi/BchcC/QgKAWgKAFQgEACgFAAQgKAAgNgIg");
	this.shape_17.setTransform(133.6,-127.3,0.224,0.224);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A3839").s().p("AjUDXQhZhZAAh+QAAh9BYhYQBYhYB9AAQB9gBBYBYQBYBYABB9QABB9hYBZQhXBYh9ABIgDAAQh8AAhYhXg");
	this.shape_18.setTransform(119.7,-159.5,0.224,0.224);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3839").s().p("AgEEuQh9gChWhYQhXhaABh9QABh9BZhXQBZhXB9ABQB9ACBYBYQBXBZgBB8QgBB/hZBXQhYBWh8AAIgEAAg");
	this.shape_19.setTransform(147.5,-159.5,0.224,0.224);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B393A").s().p("Ao8csQmJh8lNkvQnxnDhqqzIgEg2QgDghgKgUIAAlIQALgYAEgmQADgrAEgVQB5rcI9nTQHAluIrgxQIBguGqCyQGpCyFKGNQFpGyA2I6QAoGsh9F3Qh9F5kiE9QjoD9keCXQkgCXlRAtQiRATiKAAQkiAAkKhTgAqc45Qk2CCjwDvQjvDviEE2QiJFBgBFfQgBFeCHFBQCCE2DvDwQDvDvE2CFQFBCJFfABQFeACFBiHQE2iCDwjvQDwjvCEk2QCJlBAClfQABleiHlCQiCk3jvjwQjvjwk3iFQlBiIlggBIgDAAQldAAk/CHg");
	this.shape_20.setTransform(133.5,-146.5,0.224,0.224);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A3839").s().p("AgJFGQiPgGhahkQhahkAHiPQAGh/BkhbQBkhaB/AGQCLAGBcBjQBdBjgGCGQgGCGhkBdQhdBXh5AAIgPgBg");
	this.shape_21.setTransform(122.9,-129.6,0.23,0.23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3839").s().p("Ag7eAQgDgJgLgDIgRgGQhxg4gIh4IAAg0IADqLQABl9gBkNQgBhGgLhgIgVimQggkZgpjDIgDgPQgCgJgHgHIiFChQhVBoh0CiQgtA+guAVQgtAVg4gRQg9gTgsg3Qgsg3gEhAQgEhLAsg/QE1m2GimYQAUgUAigOQAUgJApgOQA5gWBOALQAsAGBYARQBmAMB9gFQBTgDCPgPQAMgBAEgHQABgEABgNQALiUgYiMQgDgPgHgGQgGgHgOgBImNg2QgJgCgDgCQgFgDADgJIAEgOQAEgGAKADQAZAJAXgMQALgFAcgYQA+gzBHgFQAmgDAHgdQAHgbAPgQQARgSAegIIkIhMIgUgGQgJgGAFgPQAGgQALADQAGACALAGQDbA9CbAuQAbAIAYgQQA6gnBGAEQA1AEAkAeQAmAeAMA0QBKFCgZECIgQCgQgJBIgtAuQguAvhIAJQj+AiirAHQgVABgFAIQgFAHAFATQA3DqAnELQAiDlAZETQAJBjAmCEIBCDhQBnF9CPHiQAaBWgnBNQgoBQhWAYQhVAZhIgrQhIgsgahaIkFuNQgFgTgLgJIAAAfIgDGxQgCEAACCxQABBngkA+QgpBEhdAdg");
	this.shape_22.setTransform(128.5,-94,0.23,0.23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgEABQgBgDACgCQADgDACAEIAEAEIgGAFQgDgCgBgDg");
	this.shape_23.setTransform(143.6,-104.1,0.238,0.238);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3B3C").s().p("Ak+DGQgTgRAVgaIBBhJQBBhGBZhBQAPgMAIgFQANgHAOAHQAOAHAAAPQAAAJgEATIACAOICAhUQBRg1Bog1QAQgIAJgBQANAAAIAOQAIAPgIALQgGAJgQAIQiMBEi+CGQgJAGgRAQQgQAKgQgHQgRgHABgUQACgegBgFQhKA4hOBZIgVAaQgMANgIADQgDACgEAAQgIAAgJgIg");
	this.shape_24.setTransform(101.1,-91,0.238,0.238);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3B3C").s().p("AnbHVQgbgBgMgXQgLgXAOgcQAphRA6haQBnifCOiYQAOgPAMgFQAQgHARAHQARAGAIAPQAGAMAAAVIAEBCQDtj5DAiaIBNg8QAXgRATAAQAUABAOASQAcAmgvAjQjmCvkMEaIg/BEQgPARgNAFQgQAHgTgHQgRgHgHgPQgFgMAAgVIgDg0QgJgBgGAGIgJAMQiLCmhdC1QgLAUgJAJQgNAMgSAAIgCAAg");
	this.shape_25.setTransform(101.9,-80.1,0.238,0.238);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A3839").s().p("AkJEZQh0hugFimQgEiZBvh0QBuh1CcgEQCjgFB0BvQB0BuAFClQAECZhuB1QhuB0iZAEIgNAAQieAAhwhpg");
	this.shape_26.setTransform(115.8,-131.5,0.238,0.238);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3839").s().p("AIRYEQgIgIgPgEIgZgHQhsgtgkh1QhTkRg3k1Qg4k3gYlxQgBgTgbgVQgbgUgRAEQgHABgCAHIgEANQhVD9gpEFQg1FLARFHQAGB9hJBIQhCBBhtAEQh0AEhPhJQhOhJgFh0QgZp2C5pYQAoiBA/inQAFgOAJgGQAIgGAQAAQBWgBBogJQBKgHBzgPQB3gPBDhOQBEhOgMhuQgLhshUhBQhThBhrANQjnAei4gGQgUAAgOgGQgOgIgLgQQgLgQgYgeQgYgfgLgQQgHgKgGgBQgGAAgJAJQg3AygqA1QgOASAEAKQAEAIAVAHQBJAaBeAHQA3AEBzgBQB2gBCqgWQBdgMBIBRQBHBRgcBYQgRA2grAjQgpAgg4AJQjVAjiXAEQjGAGimgpQjRgyhfiXQhqiqBXi4QAphXBKhQQA5g+BehMQB8hlB8g9QCKhECQgXQCWgXB5AyQJ+EEFzIbQAzBKgIBBQgHBChBAwQhHAzhPgKQhPgKgyhEQg+hWgsg2Qg8hLg7g3IgEgFQgDgDgDACQgCACABAEQABAEAEACQA+CvAmCRQAWBVAGB1QAEBEADCHQAaKACtJJQAnCFg1BXQg0BXiIAeIgDAGg");
	this.shape_27.setTransform(131.8,-86,0.238,0.238);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3839").s().p("Al0NtQgWgJgfggQiaiekUkQQgSgSgFgQQgFgRAHgZQAHgYAFgqQAGg1ADgOQAhipB9h9IMAsBQAOgOAJAAQAKgBANAPQA6A/A3AyQAQAOgBAKQgBAKgPAOQl0F2i8C5QgQAQgBAKQgBALARAPQAyAsA9BBQAOAPAJAAQAKABAPgQQCuivFfleQAtgtAPAAQAQAAAuAuIBgBiIgaAbQm7G6hvBuQgSASAAALQgBANATAQQAoAlBFBJQANAOAIAAQAJgBANgNIEXkYQCvitBohrQATgTAMAAQANAAARAUQAuA1A6AzQARAPgBAMQgBAKgQAQIq7K5QhFBFgZAWQg3AxgzAcQhoA4iIAMIgRAAQgKABgFACQgVALgUAAQgMAAgMgEg");
	this.shape_28.setTransform(148.3,-109.6,0.193,0.193);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3838").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_29.setTransform(107.3,-68.7,0.193,0.193);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3838").s().p("AVddzQhVgahDhLItgvFQj2kSh4iKQgPgRgLAAQgKgBgPARQgZAbgqAqIhEBEQgMAMgIAAQgIAAgMgMIipiqIpCpCQlVlWjujrQiUiRg8i5Qg4itASjWQAIhqAih3QAahcAwh9ICQAAQAVAZAHAHMAwtAwtQBrBqAWAcQBCBQATBUIAABwQgIAFgDALIgDATQg7C+i5AtQgtAKgrAAQgxAAgsgNg");
	this.shape_30.setTransform(130.6,-89.8,0.193,0.193);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_31.setTransform(107.3,-68.7,0.193,0.193);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3A3839").s().p("AgCGdQiqgBh5h6Qh5h5ABipQAAirB6h5QB6h5CrABQCrAAB5B6QB6B6gCCqQgBCsh6B4Qh5B3iqAAIgCAAg");
	this.shape_32.setTransform(124,-129.5,0.234,0.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B3939").s().p("AGYG6QgWgYAAgoIAAjYQAAgQgCgEQgEgJgPAAIm9ABIB8DaQARAdgIAeQgIAdgcAPQgaAQgdgIQgcgIgTgeIgUgiIh7jWIh+DxQgdA4g3gLQg0gKgJg3QgCgOAFgQQAEgKAJgRIBrjNQANgZAAgcQgCigAChrQABgfgZgTQg4grg8gyQgcgXgEgeQgFgfAUgZQAUgaAegCQAegDAdAXQBFA0AcAZQAVATAYAJQAWAIAegBQB8gCD3ABQAjAAAgASQCkBgB/BHQAOAIAGAKQAGAJgBARIgBHiQAAAngUAYQgUAYghABIgCAAQghAAgUgYg");
	this.shape_33.setTransform(159.9,-63,0.234,0.234);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A3839").s().p("AxoXDQhRgegjhNQgjhOAghUQCMl0BDijQA9iSAHijQADhcAJiBIAPjdQACgcgMgRQhFhnAdiGIB0oWIAEgYQABgOgFgOIhXBMQiUCIidDEQhEBVhigVQhjgWgYhlQgRhIArg1QCtjYCQiKQC4ixDBhuQCkheCtgYQDNgbCgCpQA+BCBSBmICKCtQC8DmELCvQBBAqAWAxQAaA2gYBGQgEAJAEAHIAKAKQBdBbFIFSQEDEMCrCaQAQAPABAKQAAAKgRAMQgLAIgGAJQgNATgNgBQgMAAgRgRQh+hzihinIkUkjIiDiJIiEiJQgMgMgLgCQgLgCgQAHQhOAkhUg5QlOjejSkGQgCgCgBgFIgDgIIgLAHIiCJgIgBAEQgbAtAOAuQAIAaAkA3QBZCHCrETQAcAtAOAxIDJLfQAYBcgoBKQgoBKhWAYQhVAXhGgsQhIgsgZhaIi7qtQgLgqgWgiIjdlbIgJB8QgGBGgBAvQgDCUg8CSQguBzhIC6Ih0EtQgfBRhMAiQgpATgqAAQgjAAgkgNg");
	this.shape_34.setTransform(128.2,-85.6,0.234,0.234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3B3939").s().p("Ag2EtQhZg1i1hkQgRgKgBgIQgCgIALgQQBEhiBIhtQAxhKAThGQAUhHA1AHQAbADATAXQAUAZgFAeQgJA1ASAnQARAlAsAdQAIAGAIALIANAVQAkA5A+AZQAtASAfAVQAlAZAZAiIAAAwQgpBFhAAUQhCAUhOghQgfgNgVADQgVAEgSAZQgLASgOACIgFAAQgLAAgRgKg");
	this.shape_35.setTransform(173.4,-74.9,0.234,0.234);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B3A3A").s().p("Ai8ELQgvAAgPghQgQgiAegkIEdlJIjCgBQgLAAgRgBIgcgDQgggEgFgfQgEgkAggRQAQgJAiAAIEnAAQAVAAAOADQAvAKALAeQAKAegfAlQgsA0hABIIhtB4Ig9BFQAGAHAKABIARgCIDrABQAdAAAQAPQAQAPgBAYQgCAyg5AAIjCABIjAgBg");
	this.shape_36.setTransform(144.5,-101.8,0.196,0.196);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B3A3A").s().p("AjZFQQgeAAgVgHQgsgQgKglQgLglAegjQAkgqA3g9IBchmICxjIQgKgKgNgBQgOACgHgBIj7gDQgeAAgPgLQgTgNABgfQAAgcARgSQATgTAeAAQDngCDQADQA+ABARAqQALAagIAZQgHAVgUAXIlhGLIFHAAQAkAAATAJQAnASgBArQAAAqgpAQQgTAIggAAInDAAg");
	this.shape_37.setTransform(129.4,-110.5,0.196,0.196);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A3838").s().p("AoHahQkdhijwi1Qjxi3iqj5QiwkBhTkvQhblKAhlUQAglKCQktQCRktDujnQD2juE7iGIAfgNQASgGAPABQAtAEATAkQATAlgUAtQhOCygnCtQhFE4AzE7QAxEyCbEPQCaENDuDGQD1DMEvBjQJEC+JCjbQAngOAKgCQAtgJAdAmQAfAogaA2QhnDWiLCpQmuIJqdCGQidAfjAACQk1gCkihkg");
	this.shape_38.setTransform(125.8,-93,0.196,0.196);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3A3A").s().p("ADoFOInOgBQgwAAgZgYQgZgYAFgoQACgOAJgOQAFgJANgOIExlWIAzg+IjmAAQg0AAgggEQgvgFgCgqQgDgzAugRQAMgEAgAAIF+AAQAeAAAOADQA5AJAPAnQAPAmgkAsQgqAziVCoIinC8IEFAAIBEgBQA7gDAgAxIAAAoQggAqg6AAIgDAAg");
	this.shape_39.setTransform(159.7,-111.6,0.196,0.196);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3B3939").s().p("AhnBpQgrgrgBg+QABg8ArgrQArgrA8AAQA8AAAsArQAsArAAA8QgBA9grArQgrArg9AAIAAAAQg9AAgqgqg");
	this.shape_40.setTransform(144,-100.5,0.193,0.193);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B3939").s().p("AAACTQg9AAgrgrQgrgsABg8QAAg9AsgrQAsgrA8ABQA9AAAqAsQArArgBA9QAAA9grArQgqApg8AAIgCAAg");
	this.shape_41.setTransform(115,-100.5,0.193,0.193);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B3939").s().p("AiuEdQgsgCgggfQghgfgCguQgCgvAfggQBahdEFkDQAOgOATgHQAQgIAMABQAuABAcAPQAcAQAPAfQAPAigDAfQgDAhgZAZQivCzizCvQgeAdgpAAIgGAAg");
	this.shape_42.setTransform(141.9,-107,0.193,0.193);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B3939").s().p("ABeD+Qhehcj9j+QgfggABgvQAChKBBgdQAhgPAiAHQAjAHAcAcIErEqIAqArQAeAjgBAtQgBAtgfAgQggAhguABIgDAAQgtAAgggfg");
	this.shape_43.setTransform(117.1,-107,0.193,0.193);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3939").s().p("Ap2HjQh1AAhUhEQhVhDgYhwQgFgaAAgwQgCiRABi0QABiPBYhYQBZhZCOAAITjAAQCQAABYBYQBZBYABCOQABDbgBBuQgBCOhaBYQhZBZiOAAIpxABIp2gBgAJ+FtQAsAHAigVQAbgSAagoQAlg6gEg2QgDgkADgvQABgQgGgFQgGgGgQABQiAABhwgCQgQAAgFAHQgFAFAAAQIABB0IAAA6IgBA6QgBAUAGAHQAHAIAUgBQAfgDAYAAQAYAAASADgAoUFsQAOABAFgFQAFgFAAgNQgCh8ACh7QAAgOgFgFQgFgFgNABIh8AAIglAAIg4gDQghgCgMALQgOAMACAiIAFA6QgDAzAaAuQAUAjAtAoQAKAKAUAAIBYAAIA+AAgAFVFsQAOABAFgGQAFgFAAgNIgBh4IABh8QAAgOgFgGQgFgGgPABQh6ABh6gBQgNgBgFAFQgFAFAAAOQACB6gCB5QAAAPAEAFQAFAHAQgBIB5AAIB6AAgAlnBNQgFAFABAPQABBRgBCjQAAANAEAFQAFAGAOgBQB6gBB5ABQAPABAGgHQAEgFAAgPIgBh3IABh8QAAgOgFgEQgEgGgOABQh6ABh5gBIgDAAQgNAAgFAFgArJlfQgYAOgbAkQggAqgEBAQgDAkADBKQgBAKAIACIAPABID0AAQAPABAFgFQAGgGAAgPQgCiSAChhQAAgQgHgEQgFgEgPAAIg2ACQggABgWgDIgSgBQgdAAgXAOgAlnlmQgFAGABAOQABCggCBQQAAARAHAFQAGAFAQgBIDtAAQAOABAGgFQAGgGAAgOQgCh6ACh6QAAgNgFgFQgEgGgOAAQh6ACh6gCIgCAAQgNAAgFAGgABOlnQgFAEAAANIABB7IgBB8QAAANAFAGQAGAFANgBID0AAQANABAGgGQAFgFAAgOQgCh5ACh6QAAgOgEgFQgFgGgOAAQh7ACh8gCQgNAAgEAFgAMMhIQANAAAEgFQAFgEAAgNQgCg2ACgcQAEgzgZguQgTglgrgpQgOgNgUAAQhmABgzgBQgNAAgFAFQgFAFAAANIABB8IAAB7QgBAMAEAFQAFAFAMAAIB9AAIB9AAg");
	this.shape_44.setTransform(129.5,-84.7,0.193,0.193);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AtuNwQgHgGAAgUIAB7KQALAYADAoIAHBCQDERcQgGaQDPBQEPAZIALAAQAFABADAHI7MAAQgTAAgFgFg");
	this.shape_45.setTransform(109.5,-77,0.193,0.193);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B3939").s().p("AiVeAQgCgHgGgBIgLAAQkOgZjPhQQwhmajExdIgHhCQgEgogKgYIAAkzQAHgDABgHIAAgMQAaj3BMjYQC+obHGlZQHGlaI8gqQHxgkG+DOQE9CTDzD1QDtDvCNExQCNExAdFPQAeFYhcFTQiZIwnBGBQjZC5kCByQkJB0kcAfIgpACQgZACgPAKgAAA5XQlLAAkuCAQkkB8jgDhQjhDhh7EjQh/EuABFJQABFMCBEuQB8ElDhDgQDiDgEjB7QEtB+FIgCQFNgCEtiAQEjh7DgjgQDfjgB7kjQB+ksAAlLQABlKiAktQh7kkjhjhQjhjhkjh7Qkth/lJAAIgCAAg");
	this.shape_46.setTransform(129.5,-97,0.193,0.193);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#403F3F").s().p("Ai+gIQAlgZA2gRQAfgJA9gPQAcgIAVAHQAVAGAUAYQAUAZAgAhIA4A5IgEAJg");
	this.shape_47.setTransform(83.2,-113.8,0.281,0.281);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#403F3F").s().p("AisA/QgjgTgPgpQgKgbAQgbQARgbAaADQBMAKFDAwIABAIIlCBRQgPAEgOAAQgZAAgXgNg");
	this.shape_48.setTransform(80.6,-110.7,0.281,0.281);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AiahsQCJAZCsA3Ii0CJQhKhxg3hog");
	this.shape_49.setTransform(115,-84,0.281,0.281);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3A3839").s().p("AAAEsQh8gBhXhZQhYhZAAh6QABh8BYhYQBZhXB7ABQB9AABWBYQBYBYgBB8QgBB8hXBYQhYBXh6AAIgCAAg");
	this.shape_50.setTransform(145.9,-135,0.281,0.281);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A3839").s().p("AqvOEQgUAAgJgHQgJgGgGgTQgqiAgtjJIhLlMQgEgQAJgGIASgGQHWixDym6QBdipAsjOQAEgTAIgHQAIgIATgBQHWgZF4gYQAVgBAGAIQAEAFAAAVIAANiIAANhQAAAVgHAHQgHAHgUAAQsHgCsFACg");
	this.shape_51.setTransform(154.4,-77.9,0.281,0.281);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3A3839").s().p("AuzXDQhLgQgxhEQg8hUANhdQANhfBQg5QB3hWDkicQAQgLACgJQACgJgLgRQiXjqi3lvQg1hqAqhmQArhmBrgYQAkgHAwABQAcABA4AEQCIAICMAXIAQADQAJgBADgNQAeh3BPhwQA9hWBshpIBohfQhzADiTAVQiOATiUAmQgOAEgDAFQgEAFADANQASBLhCA/QgyAwhFAgQg6AahPASQlwBUlKhsQhQgag0glQg+gsgihCIAAhLQA5hiBsgzQBJgjCMgaQEog4ErBSQABgNgDgdQgDgaACgPQATiMCFgjQHGh3HQARQCtAGCGATQAcAEAQAGQAYAIAPANQAYAWAjAMQAUAGAvAIQBfARBmAoQBTAgBnA2QB3A+CKAlQgLgygkhLQgrhYgLgiIhYBGQgMAKgHAAQgIgBgKgNQgigthNhgQgJgKAAgGQAAgHALgJQDni1DdiyQAKgIAHACQAFABAIAKQBUBrAhAnQAIAKgCAHQgCAFgJAHIhiBOQArAQAdAnQARAWAcA4QCFEKAOEeQADBOg3A9Qg4A9hIgEQgvgDg/gGIhtgOQh9gQiKhCQgUgKgIADQgKADgIAWQigGhj1FFQh9CnjMBpQgRAJgXATIgmAfIklDhQgPALgBAIQgBAJAJAPQBJB6hQB5QhQB4iFgQQhNgJg7hMQgLgPgKgCQgKgBgQAMIizB9QhxBOhCAwQhGAzhEAAQgTAAgTgEgAkjIcIC2iKQiug3iJgZQA3BoBKBygA3rrNQiIAihNBFQgvArgBAvQAAAvAvAsQApAnBCAcQBfApByATQBdAQBzACQDCgBCOgoQBDgTAsgUQA6gaApglQAbgYALgXQAPgdgFggQgDgPgGgHQgHgIgRgCQhqgIg3hiQgPgbgegIQiqgvisAAQihAAiiAqg");
	this.shape_52.setTransform(122.5,-96.1,0.281,0.281);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8B019").s().p("AAkAiQgZgrg/gZQA1gGApAnIALAFQAAANgPATg");
	this.shape_53.setTransform(-166.4,-111.1,1.224,1.224,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8AF38").s().p("AgRAAQARgEASgEQgCAHgFAFQgGAEgGAAQgJAAgHgIg");
	this.shape_54.setTransform(-133.2,-108.5,1.224,1.224,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5AE97").s().p("AgsAHQAkgMA1gIQgSASgNAGQgHADgKAAQgQAAgZgHg");
	this.shape_55.setTransform(-134.6,-108.7,1.224,1.224,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8AF38").s().p("AgTAQQgTgDgPgGQANgFAYgFQAjgJAjgEQgWAYgQAHQgHACgJAAQgIAAgLgBg");
	this.shape_56.setTransform(-134.8,-108.4,1.224,1.224,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B8AF38").s().p("AgeAFQAdgJAggEQgMALgKAFQgEABgGAAQgLAAgSgEg");
	this.shape_57.setTransform(-109.8,-104.6,1.224,1.224,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIguAyg");
	this.shape_58.setTransform(-160.7,-127.7,1.224,1.224,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E7FF2F").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQAEgQAHgNQAVANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAKgJAAgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgPABIgDAAQgMAAgIgKg");
	this.shape_59.setTransform(-126.4,-104.7,1.224,1.224,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F1FF59").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQALgwAygiQBBAIBlgTQBUgRB8gmIgLCrQgBAKgHAHQgHAHgKABIgPABIgDAAQgMAAgIgKg");
	this.shape_60.setTransform(-126.4,-104.7,1.224,1.224,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBC156").s().p("AiDATQgHgIgKgJQAYgDA7gPQA3gNAcgEQBfgMAkA9IjvATIgGABQgVAAgOgRg");
	this.shape_61.setTransform(-126,-95.7,1.224,1.224,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F1FF59").s().p("AEFKpQAuhpASiHQAejhhBjhQhFjuili3Qh8iLiPhJQE/Glg2JOQAGiegkjQQhJmejZj6QA+CIAkC7QAvD3guClQAQiegnjGQgfiag5iVQAXBvgOCDQgPB+gnA+QgYgKgUAAQA2hRACiyQADi6g7h5QAqgEBYAqQBjAwBjBTQEIDeBfFIQBREWg5EFQgcCDgtBKQgDgUgHgfg");
	this.shape_62.setTransform(-213.2,-22.2,1.224,1.224,0,0,180);

	this.instance = new lib.Path_1_0_1();
	this.instance.parent = this;
	this.instance.setTransform(-213.2,-1.1,1.224,1.224,0,0,180,36.8,56.1);
	this.instance.alpha = 0.5;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E7ED36").s().p("ADoJJQg8iehng3QgViBguhBQgxhGhyg1QgQhYhChDQg+g/g+gCQA2hRACiyQADi6g7h5QAqgEBYAqQBjAwBjBTQEIDeBfFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_63.setTransform(-213.2,-22.2,1.224,1.224,0,0,180);

	this.instance_1 = new lib.Path_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-149.3,16.7,1.224,1.224,0,0,180,8.3,33.4);
	this.instance_1.alpha = 0.27;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999317").s().p("AAaDeQAghJgLg3QgsghAYg2IAbg4QAQglAFgkQAHhMgTg5QgYhFg6gMQgkgHgkAkQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA4gHBNQgFAkgRAlQgJAWgRAiQgYA1AsAiQAKA3ghBOQgoBegEAwIgNADQAFgnAnheg");
	this.shape_64.setTransform(-157.2,12.8,1.224,1.224,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F1FF59").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAkgRAmQgJAVgRAiQgYA2AsAhQAKA3ghBOQgpBfgEAvIg3APQAOhXgDg3g");
	this.shape_65.setTransform(-153.8,13.5,1.224,1.224,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F1FF59").s().p("AAvAhIhpAAIgHgCQgDgOgJgOIADAAICYgjQACAbgKATQgJATgNAAIgBAAg");
	this.shape_66.setTransform(-146.9,59.8,1.224,1.224,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8B019").s().p("AgRgEQATgIAkgDQAJAOAEANIgZgGQgggDgsANQASgPAPgFg");
	this.shape_67.setTransform(-132.7,62.1,1.224,1.224,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFF530").s().p("AgUACIApgDIgFABQgEACgGAAg");
	this.shape_68.setTransform(-209.7,63.2,1.224,1.224,0,0,180);

	this.instance_2 = new lib.Path_1_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-201.9,23.2,1.224,1.224,0,0,180,12.6,32.6);
	this.instance_2.alpha = 0.27;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F1FF59").s().p("AivFHQgBgLgCgMQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQAMgIgCgOQgBgNgNgGIhNgdQgfgNgSgbQgTgcAAghIADjvQAAg9AsgsQArgrA+AAQA7AAAsAqQArArABA9IAAAFIguDiQgDAJAGAIIBjCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_69.setTransform(-208.6,23.4,1.224,1.224,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8B019").s().p("AAugTIAPgDQALAOABAcIgEAAQgegMgnACQgiABgmAMQAwguBGAEg");
	this.shape_70.setTransform(-180.7,61,1.224,1.224,0,0,180);

	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-195.4,-40.7,1.224,1.224,0,0,180,53.2,74.4);
	this.instance_3.alpha = 0.398;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBC156").s().p("AAALgQg7AEgtgSQgugSgshTQgzhhgfgaQgPgNgUgKIgmgRQg5gXgfgRQgwgbglgnQgUgVgGgbQgGgcAJgaQAYhMAQhsQgCh0AVipQAajDALhiIAUAAQgBBQgODeQgMC6AFA1QAGA9ClCuQBjBpAVAXQA6BDANAhQAOAoA3ArQAxAoAiAIQAzALBCABQBdABAwgbQBEgmAigkQAwg1AJhLQAJhHgtiZQgfhngghLQg5hpgvhZQhaiugKhKQgLhQAUg+QAKgeAohFQARggAygrQhLBMgbBZQgiBwA0BxQAeBBBHB3QBYCUAcAyQCFD4gUCqQgIBEgtBBQgtBDhIAuQhxBHiDAAQhBAAhGgSg");
	this.shape_71.setTransform(-197.8,-41.7,1.224,1.224,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999317").s().p("AFFGFQAAiRhGhvQhDhuhogYQgWgFgmgXIhIgtQhjg8hGACIgVADQg7ibALjJIAAgxQgBgfACgUIg2AAIACgUIBFAAQgDAUAAAfIABAxQgLDIA8CcIAUgDQBGgCBjA8IBIAtQAmAXAWAFQBoAYBEBuQBEBvAACRQAACCg4BpIgIACQAxhiAAh3g");
	this.shape_72.setTransform(-184.1,-30.3,1.224,1.224,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F1FF59").s().p("AhZAEQAejZAMhuIBEAAQgDAUABAfIAAAyQgND8BiC2IjNBvQgJiBAVi+g");
	this.shape_73.setTransform(-148.6,-64.8,1.224,1.224,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F1FF59").s().p("AkTMFQAphHBaiLIBTh8QAsALAtgcQA1ggAVhEQA4i2jMlCQiUjqBtjKQAohKBBgzQA7gsArgDQhnA4g9BsQhTCTBGCZQAdBBBGB2QBZCTAbA0QCFD4gUCpQgHBFgtBBQguBChIAuQhwBIiDAAQhBAAhGgSg");
	this.shape_74.setTransform(-231.5,-46.2,1.224,1.224,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F1FF59").s().p("AA4GPQgugSgrhTQgzhigfgaQgPgNgUgJIgmgRQg5gXgfgSQgwgbglgnQgUgUgGgbQgGgbAJgbQAWhHAPhhIAXirIBJBBQAsghA4gCQBFgDBjA8IBIAtQAmAXAWAFQBoAaBEBtQBFBvAACQQAACCg5BpQhfAdguAHQgbAEgZAAQguAAgmgOg");
	this.shape_75.setTransform(-178.1,-2.1,1.224,1.224,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B8AF38").s().p("AgWDbQgFhHghgqQgrhcgMhTQgMhdAchNQATg9AjghQAiggAhAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3giBOQgoBfgEAvIg3APQAOhYgDg2g");
	this.shape_76.setTransform(-148.6,13.5,1.224,1.224,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B8AF38").s().p("AhYAMQAUgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgqANQASgQAPgGg");
	this.shape_77.setTransform(-136.4,60,1.224,1.224,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B8AF38").s().p("AgzAFIDeg1IAABdIjIAAQgegLgnABQgiACgmAMQAvgwBIAEg");
	this.shape_78.setTransform(-185,57.9,1.224,1.224,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B8AF38").s().p("Ai1FHIC2h3Ii6hJIAEk5QAAg9ArgsQAsgrA+AAQA8AAAsArQArAsAAA9IgxDuIB3C6IiqBRg");
	this.shape_79.setTransform(-204.1,23.4,1.224,1.224,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3B393A").s().p("Ah1B4QgwgxgBhGQAAhEAxgxQAxgyBEAAQBEgBAyAxQAxAxgBBFQABBGgwAxQgxAwhFAAIgBAAQhFAAgwgvg");
	this.shape_80.setTransform(161,-99,0.277,0.277);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3B393A").s().p("Ah1B4QgwgwgBhGQAAhFAwgxQAxgxBFgBQBDgBAyAxQAxAxABBFQAABFgwAxQgxAxhFAAIgBAAQhFAAgwgvg");
	this.shape_81.setTransform(142.1,-99,0.277,0.277);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3B393A").s().p("AgBCnQhEgBgxgyQgxgyAAhDQABhGAxgwQAxgwBFAAQBGABAwAxQAxAxgBBFQAABEgyAyQgyAxhCAAIgCgBg");
	this.shape_82.setTransform(151.6,-89.6,0.277,0.277);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3B393A").s().p("AAACnQhEABgygyQgxgyABhEQAAhFAxgxQAxgxBFABQBFAAAxAxQAwAxABBEQAABFgyAxQgxAyhEAAIgBgBg");
	this.shape_83.setTransform(151.6,-108.4,0.277,0.277);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3B393A").s().p("AABIUQhhgBhMg+QhNg/gUhgQgDgRgHgIQgIgIgRgEQhngUg/hNQg+hNAAhnQABhkBBhLQBBhLBngSQASgDAGgMIAGgYQAoijCfgtQCfgsB4B/QA0A3AMBHQADATAIAIQAHAJAUADQBiAUA+BPQA+BNgBBkQgBBgg9BLQg8BLheAVQgVAEgJAIQgKAJgEAWQgUBdhOA+QhOA+heAAIgCAAgAjABgQAtACAYAZQAYAaABAsIAAAiIABAiQAEAqAcAaQAbAZAoAAQAqAAAbgaQAcgaACgqIABgiIABgiQADgqAZgYQAZgXArgCIAkABQAVAAAOgCQApgEAagdQAagdgCgoQgCgpgagbQgbgagqgCIg4AAQhogCgChpQABglgCgTQgCgrgbgaQgagZgqgBQgogBgcAZQgcAZgFAqQgCAXABAtQgBAugZAZQgZAagtACQgwgBgYACQgoADgZAdQgZAcABAnQABAlAaAbQAaAaAmADQAMABAYgBIAkABg");
	this.shape_84.setTransform(103.7,-99,0.277,0.277);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3B393A").s().p("A6qS7Qhjg9gziAQg9ibgBjGQgHrfEep9QBZjGCUibQDjjtFfArQBzAOCKAgQBfAWCaArQClAtCqgCQChgDCsguQCVgoBLgSQB9geBmgQQGQg9D+EyQBkB4BNCbQBACCA4CtQCAGKAjGlIAAAMQABAGAHACIAAFYQgLAdgHAzQgIA9gFAVQghB2gsBFQhBBnhoAkQhpAliDghQhngahtg9QhMgrhzhTQiahuhghgQiwixkLg0QmshTluCGQiAAwhlBeQiLCAhuBUQiMBriHBGQg/AhgyASQg+AWg6AGQgaADgYAAQhpAAhRgygAE1GiQCjAgB/A8QCOBDBrBrQBpBqCOBnQBlBIA+AkQBdA1BXAXQBjAaA9ggQA9ggAjhfQAahHAMhUQAJhGABhZQACmjiGniQgsifg2h/Qg/iShUh3QjXk0l2BAQheAQiIAhQiZAnhMARQiZAkiHAFQiVAFiMghIjTg0QiEghhPgRQhjgWhIgFQhdgHhQARQh2AahgBPQhQBDhKBzQhPB5g9CaQgwB8guCqQh2G1ADGWQABBaAIBDQALBUAaBGQAiBYA8AgQA9AfBbgXQBjgaBshCQBig8BnhRQBUhCBnheQBVhOBGgpQEaikGNgHQC/ACCMAcg");
	this.shape_85.setTransform(128.5,-92,0.277,0.277);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_86.setTransform(211.3,-98.4,0.162,0.162);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_87.setTransform(155.6,-84.2,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_3},{t:this.shape_70},{t:this.shape_69},{t:this.instance_2},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_1},{t:this.shape_63},{t:this.instance},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(2));

	// Layer 4
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").p("AIcqsQgwAAgvAIQhDhJhjgqQhmgrh1AAQh3AAhqAuQhmAshDBNQhRgWhZAAQjWAAiWB0QiXBzAACkQAAB3BUBiQBSBfCJAvQAlBeBYBEQgqD8iRDXIhRB5IEOjbQCSh2B9iSQAcADAfAAQB/AABxg0QBvA0CAAAQCZAAB8hHQB6hGAzhyQCZgjBihmQBjhoAAiFQAAihiNhzQiMhyjHAAg");
	this.shape_88.setTransform(130.3,-114.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AsJLAQCQjXArj8QhZhEglheQiIgvhThfQhUhjAAh2QAAikCXh0QCWhzDWAAQBZAABRAWQBDhNBmgtQBqgtB3AAQB0AABnArQBjApBDBKQAugIAxAAQDHAACMByQCNByAACiQAACEhjBpQhiBmiZAjQgzByh6BFQh8BIiZAAQiAAAhvg1QhxA1h/AAQgeAAgdgDQh9CSiSB2IkODbg");
	this.shape_89.setTransform(130.3,-115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89,p:{x:130.3,y:-115.5}},{t:this.shape_88,p:{x:130.3,y:-114.5}}]}).to({state:[{t:this.shape_89,p:{x:130.7,y:-114.5}},{t:this.shape_88,p:{x:130.7,y:-113.5}}]},1).to({state:[{t:this.shape_89,p:{x:131.6,y:-121.5}},{t:this.shape_88,p:{x:131.6,y:-120.6}}]},1).to({state:[{t:this.shape_89,p:{x:130.7,y:-72.2}},{t:this.shape_88,p:{x:130.7,y:-71.2}}]},1).to({state:[{t:this.shape_89,p:{x:188.8,y:-72.2}},{t:this.shape_88,p:{x:188.8,y:-71.2}}]},8).to({state:[{t:this.shape_89,p:{x:210.7,y:-72.2}},{t:this.shape_88,p:{x:210.7,y:-71.2}}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(3).p("ADXi0IhfCIIA8A7AjgCvIBzgUIAKhp");
	this.shape_90.setTransform(-2.5,3.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#373535").ss(3).p("ADXiUIhfCHIAtAsIAPAPACFB8IAghdIidhHIgJDWAhllLIBtBQIhoAjAhtC6IAKhpAjgDOIBzgUIASCAIBeAP");
	this.shape_91.setTransform(-1.2,-0.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(3).p("ACPB8IAhhdIAPAPADiiUIhfCHIAtAsIiehHIgJDRACVFJIhBhLIAog8Ah4lLIBuBQIhpAjAjhhBICbAUIBthlAh/C6IARCAIBfAPAjyDOIBzgUIAKhpAgTCpIgBAF");
	this.shape_92.setTransform(-1.2,2.2,1,1,0,0,0,-0.4,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#373535").ss(3).p("ADmiUIhfCHIAtAsIAPAPACTB8IAhhdACZFJIhBhLIAog8QgcgKgdgJQg6gQAAAKIAJjRICeBHAjdhBICbAUIAngkIBGhBIgkB4Igig3Ah0lLIBuBQIhpAjIBUCHAgPCpIgBAFAh7C6IAKhpAjuDOIBzgUIARCAIBfAP");
	this.shape_93.setTransform(-1.2,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[]},1).to({state:[]},4).wait(5));

	// OBJECTS
	this.instance_4 = new lib.EggIdan1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,0.1,0.194,0.194,0,0,0,0.8,-0.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EE4544").s().p("AgCAJIgEgBQgIgCAAgGQABgFAHgCQAGgCAGACIABAAQAGADABAEQABAFgHACIgIACIgCAAg");
	this.shape_94.setTransform(16.3,-20.5,1.038,1.038);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EE4544").s().p("AgDAMIgEgBQgLgDAAgIQABgGAKgDQAIgDAHADIABAAQAIAEACAFQABAHgJADQgGACgFAAIgDAAg");
	this.shape_95.setTransform(-4.8,-19.6,1.038,1.038);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6C2D00").s().p("AANAPQgCgCgCgIQgCgGgDgDQgEgDgGAGQgGAIgDACIgCAAIgCgBQgEgGALgKQAJgKAIADQAIACAFAKQAFAJgCAHQgBABAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCABIgDgCg");
	this.shape_96.setTransform(14,-23.7,1.038,1.038);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6C2D00").s().p("AgfAWQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgOAJgLQAJgMAOgCQANgCAMAKQALAIACANQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgFgBgDgFIgHgKQgEgFgHgBQgLgDgJAKQgFAFgGAPQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_97.setTransform(0,-24,1.038,1.038);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#98F51F").s().p("AgWgKQALgfAggCIAGAAQgQADgJAQQgJARABAeIAAANIAAAAIgFAJQgXgYAMgfg");
	this.shape_98.setTransform(16.9,9.8,1.038,1.038);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#98F51F").s().p("AgggKQANgcAbgBQAMgCANAIIAAAAIAHAFQgZgDgSAOIgCAAIgBACIgGAGQgVATADAeQgPgYANgag");
	this.shape_99.setTransform(-10.2,11.3,1.038,1.038);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#98F51F").s().p("AgCgBIACAAIADADQgDgBgCgCg");
	this.shape_100.setTransform(-8.5,-12.6,1.038,1.038);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#98F51F").s().p("Ag7EAIAeg3QASghARgTIAGABQAAABABgBQABAAAAAAQAAAAABgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgugWgeg8QgZgygGg9IAZgLIABgBQAHAIAJADQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgNgLgEgGQgGgKgBgVIABAAQABABAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgCgDgFgEIgIgGQgIgIABgSIgBgCIgBAAIgLgDQAZg/A8gkQA6glBCAEQg6AMgfAhQgaAegKAwQgGAjACA3QAAAqAIAZQAGASARAcIAEAGQgFACgFAAQgHAAgKgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAEAGAJAEQAGACAJgBQAFALAKAAQAbAjAhAcQgOAmAVAsQgZAWgHAoQgHgRgQgJIgBgLQAAgHADgNQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQgFAPABANQgJgDgNgBQgQgBgOAMQgOALgFATQgHgNgKgOgAgRDWQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQADAFAFgBQAGgBACgFQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCAAQgEAEgGgEIgBAAIgBABg");
	this.shape_101.setTransform(-10.2,-18.8,1.038,1.038);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6C2D00").s().p("AAJAUIgJgVIgLgSQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAPAOAHAZQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBAAIgBgBg");
	this.shape_102.setTransform(25.6,0.5,1.038,1.038);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6C2D00").s().p("AgGAdQgGgdARgcQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgKAYAAAeQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_103.setTransform(-21.4,0.3,1.038,1.038);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C2D00").s().p("AARAEIghgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAVADALACQABABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIgCACIAAgBg");
	this.shape_104.setTransform(-21.9,-30.6,1.038,1.038);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6C2D00").s().p("AgUABIgBgBIABgBIAoABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIgNAAIgcgBg");
	this.shape_105.setTransform(-22.2,-27.4,1.038,1.038);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6C2D00").s().p("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");
	this.shape_106.setTransform(0.6,0.1,1.038,1.038);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C2D00").s().p("AgJAMQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQABgIAGgGQAGgHAIgBIACABIgCACQgNAHgEANQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_107.setTransform(0.5,-12,1.038,1.038);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6C2D00").s().p("AgDADQAAgEAEgDIACAAIABACQABAEgFADIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_108.setTransform(18.8,-17,1.038,1.038);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C2D00").s().p("AAAAGQgEgEACgHIACgBIABABIACAIIgBADIgBABIgBgBg");
	this.shape_109.setTransform(7.2,-16.7,1.038,1.038);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C2D00").s().p("AgPARQgIgJAFgKQAFgKAMgDQAMgDAGAIQAGAJgDAIQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgEgKQgDgGgHACQgHADgEAFQgCAEACAJQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAIgCAAg");
	this.shape_110.setTransform(7,-18.1,1.038,1.038);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C2D00").s().p("AgHAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIACAAQAFADAEgDIACAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQgCAEgGAAIAAAAQgEAAgDgDg");
	this.shape_111.setTransform(-11.3,3.7,1.038,1.038);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C2D00").s().p("AAEAFQgEgCAAgDQgHACgGgEIAAgCIACAAQAFADAGgDIACAAIAAACIgBAAQAEAFAHgBQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgFABIgEgBg");
	this.shape_112.setTransform(14.8,0.9,1.038,1.038);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C2D00").s().p("AgPAJQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAHABAHgGQgCgBgDgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAGAGAKgFQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgFAEgHAAIAAAAQgCAGgFACIgHABIgFAAg");
	this.shape_113.setTransform(18.4,9,1.038,1.038);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6C2D00").s().p("AgFABQgHAAgEgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAFAEAJgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDABQAHAFAHgFQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgFAEgHAAQgGAAgDgGg");
	this.shape_114.setTransform(-9.2,10.2,1.038,1.038);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6C2D00").s().p("AAMALQgHgDgDgGQgHABgIgDQgJgCgDgGQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQALAIAHAAQAFAAANgHIADABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgEAGgGAAQAFAHAMgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABIgGABIgHgBg");
	this.shape_115.setTransform(-9.5,-12.9,1.038,1.038);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFD68E").s().p("AhMgSQAUgBASgEIAcgKQAQgHALACQAQADAZAgQAGAIANAaQgggRgbAOQgFADgLgCQgLgBgEABQgOADgIAHQgLgagegfgAgIgOIAKARIAKAWQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgGgZgPgOIgBAAIgBABg");
	this.shape_116.setTransform(25.3,0,1.038,1.038);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFD68E").s().p("AgQASQAFABAFgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgKAAIgEgTQAIgBAHgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgOAFIgGgQQARgEAWgNQABAHgFAKIgJAOQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIACgBIANAEIACABIgBACIgKANQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAIAMAIQgIAIgMAEIgUAEg");
	this.shape_117.setTransform(22.2,-31.7,1.038,1.038);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#77F82C").s().p("AAogIQgPgLgWAIIgjAMQgTAGgRACIgBAAIgIgJQAUgCAYgKIAYgNQARgLAcAQQAcAQAOAjQgOgXgYgQg");
	this.shape_118.setTransform(24.3,-3.2,1.038,1.038);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4F3867").s().p("AgdAHQACgNAEgJQAHgQASABQALABAVAHIgBAAQgmATgcAiIAEgYg");
	this.shape_119.setTransform(-14.5,-44.1,1.038,1.038);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFD68E").s().p("AhCA8QAZgMAMgSIAGADQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgagUQgNgLgFgOQAfAEAJAAIAEAGQABABAAAAQABAAAAAAQAAABABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgOgbQgGgPgBgNQANAGAXATQAVANAUAAQgDAKAFALQAEAKAMAGQgEAWALASIAAAAQguAQgoAAQgYAAgWgGgAAAAfIABACQAcADAOgCQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgpgBIgBABgAAGgBQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAiAGQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQgLgDgWgCIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_120.setTransform(-24.4,-30.8,1.038,1.038);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#77F82C").s().p("AisEBIAfg4QASghARgTIAGACQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAgBgBQgvgWgeg8QgYgygHg9IAZgKIABgCQAHAJAJACQAAAAABAAQAAABABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBgBAAQAAAAAAgBQAAAAgBAAQgNgLgEgHQgGgJgBgWIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAQgCgDgFgEIgIgHQgIgIABgSIgBgBIgBAAIgLgEQAfhKBKgkQBLgkBMAXQAhAKAhAeQAeAcATAiQASAeADAvQACAVgCA9QgLABgIAHQgIAHADAKQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQADgNAQgEIABgBIACAAQAGABADAIQACAIgHAIQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAgBABAAIAAAAIABABQAdAAACAbQACAWgOAXQgKAQgWAFQgJACgeAAQhFABg8gvQgBgBAAAAQgBgBgBAAQAAAAgBABQAAAAgBABQgCACACADQAbAhA8AOQASAEARABQgrAbhCgQQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABACQBIAVApgbIAiApQATAYAIAVQgNgEgLACQgOACgLAIQgBgLgGgLQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIAEAOIABALQgNAKgEATQgIgcgVgUQgXgWgcgCQgkgCgYAYQgXAXgGAkQgHgQgPgJIgCgMQAAgHADgNQABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgGAPABAOQgJgEgMgBQgSgBgOANQgOALgFASQgHgMgKgOgAiCDWQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQACAEAGgBQAFAAACgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCAAQgEAEgGgEIAAAAIgCAAgACEDDQAEABAEgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgGACgEgGIAAAAIAAgCIgCgBQgGADgFgDIgCABIAAACQAGAFAGgDQACAEAEACgAgOA8QgGAHgBAJQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAEgOANgGIABgCIgBgBQgIAAgGAHgAhdBEQAHADAGgDQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgMABgFgHQAGgBAEgGQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAIgDgBQgOAHgFAAQgHAAgLgIQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAABQADAGAJADQAIADAIgBQADAGAHADgAA0APQgCAHAEAEIADABIABgDIgCgJIgCgBIgCABgAAzgJQgMADgFAKQgFALAIAIIADABQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgCgKACgDQAEgGAIgCQAHgDADAFIAEALQAAABAAAAQABAAAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQADgIgGgIQgFgHgIAAIgGABgACnAMQgFADABAFQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAFgDgBgFIgBgCIgBgBIgBABg");
	this.shape_121.setTransform(1.5,-18.8,1.038,1.038);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4F3867").s().p("AgdASQAGgRAMgNIAHgHQAHgIANALQAIAGAIAQQggAEgfANIACgFg");
	this.shape_122.setTransform(-6.3,-49.5,1.038,1.038);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4F3867").s().p("AgNgGQACgJAJgEQAEgDANgDQgQAYgKAbQgEgTACgNg");
	this.shape_123.setTransform(-20,-37.6,1.038,1.038);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#77F82C").s().p("AgsgJQAMggAggCQANgBAMAIQALAHAHANQAHANgDAQIgIAdIgIgDQgFgDgEgGIgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgJAJIgJAHIgIgFIgIgKQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAABgBAAIgGAIIgFAJQgWgYALgegAgXgBQAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAHACAFgCQAGgCACgGIAAAAQAGABAFgFQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAABQgJAEgHgFQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQADAEADAAQgIAHgHAAIgBgBQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_124.setTransform(19.1,9.8,1.038,1.038);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4F3867").s().p("AgLASIgHgTQgDgJgBgOQAUAeAZAKIgJAJQgNgCgMgFg");
	this.shape_125.setTransform(-12.6,-5.2,1.038,1.038);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#77F82C").s().p("AgRgeQAPgIARANQALAHASAQQAWAQAXgCIgKAOQgngNgcgUQgHgGgHAAQgEAAgOAEQgoAMgcAfQAVgjAygdg");
	this.shape_126.setTransform(-20.8,-3.3,1.038,1.038);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4F3867").s().p("AgDAZQgIgFgBgHQgCgGADgKQACgKAJgWQADAgALAhIAAABIgCAFg");
	this.shape_127.setTransform(-20.4,-19.3,1.038,1.038);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4F3867").s().p("AgFAZQgLgGAAgLQAAgHACgLIADgUQAJAXAHAQQAFAMAHAKQgQgDgGgDg");
	this.shape_128.setTransform(-17.5,-12.2,1.038,1.038);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFD68E").s().p("AAVAiQgUADgEAGQgIgagbgHQgcgGgUAQIABgEQAignAsgQQANgFANAGQAIAEARAMQATAMAZAGIgHAKIgWAlQgOgNgYAEgAAKgdQgQAdAFAcQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQgBgeALgYQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBAAIgCABg");
	this.shape_129.setTransform(-22,0.4,1.038,1.038);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#77F82C").s().p("AAaApQgDgDgEgHIgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEACgHAHIgHAFIgJgHIgGgKQAAAAAAAAQgBAAAAAAQAAgBgBABQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAABgBAAQgDACgEAFIgGAIQgSgYAMgdQANgdAegCQAKgCANAIIABAAIABABQALAHAHANQAIAOgEARQgCAIgKAXQgGgCgDgCgAgPgWQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQADAGAHAAQADAGAHAAQAHAAAFgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAABQAAAAgBAAQgHAFgHgFIADgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgIACgGgEIgBAAIgBAAg");
	this.shape_130.setTransform(-9.3,11.8,1.038,1.038);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFD68E").s().p("AgyA3IgdgYIgCgKQAZhOA4gBQA8gBAWBVIAAAAQgJAIgGABQgGACgKgFIgpgYQgCgBgEACQgUAXgNAQIgJALIgCAAQgEAAgGgEg");
	this.shape_131.setTransform(4.7,8.4,1.038,1.038);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F27D7B").s().p("AgLAMQgFgCgCgEQgCgCAAgEQABgDADgCIAHgFQAGgDAIAAIADABQAKAAACAIQABAEgCADQABAFgHAEQgGACgHAAQgFAAgGgCg");
	this.shape_132.setTransform(10.9,-49.3,1.27,1.27);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F27D7B").s().p("AgGANIgDAAQgJgDgCgHQgBgDADgEQAAgGAHgCQAGgBAHABQAGABAFADQAEACACAEQACACgBAEQgBADgDACQgDADgFAAQgEACgEAAIgGgBg");
	this.shape_133.setTransform(40.4,-51.1,1.27,1.27);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_134.setTransform(13.1,-57.2,1.27,1.27);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgEAFQgFgFAEgDQAEgFAFADQAHADgGAGQgCADgDAAQgCAAgCgCg");
	this.shape_135.setTransform(35.7,-58.3,1.27,1.27);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#451738").s().p("AAAAfQgIgCgFgJQgDgHgBgKQgBgOACgGQAHgTANAIQAMAIACAPQABAMgDAKQgDAOgLAAIgCAAg");
	this.shape_136.setTransform(35.2,-56.7,1.27,1.27);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#451738").s().p("AAAAfQgHgCgGgJQgCgFgBgLQgCgNACgIQAIgSALAHQANAIACAPQABALgCALQgFAOgKAAIgCAAg");
	this.shape_137.setTransform(12.8,-55.7,1.27,1.27);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4DC955").s().p("AgXgBIAagOIALgIIAKAGQgTASgNAXg");
	this.shape_138.setTransform(-8.1,-69.5,1.27,1.27);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4DC955").s().p("AgWgTQAHgCAHgEQAPANAQAJQgNAcgHABQgKgagPgTg");
	this.shape_139.setTransform(43.8,-70.3,1.27,1.27);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4DC955").s().p("AgXgNQACgCAFgLIACgDQARAZATARIACARQgRgOgegdg");
	this.shape_140.setTransform(46.6,-27,1.27,1.27);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4DC955").s().p("AgjgGIgEgFQACgUgCgUIARAeQAZAsAlAZIgEAEQgqgcgdgeg");
	this.shape_141.setTransform(-14.9,-29,1.27,1.27);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4DC955").s().p("AAKA3QgGgBgHgDIgNgFIgLgfQgKghABgkQAPAEAIARQADAHAEANIAGAUQAKAbAcAMQgBABAAAAQgBABAAAAQAAABAAAAQAAAAABABIgBACQgBADgLAAIgOAAg");
	this.shape_142.setTransform(30.3,-2.3,1.27,1.27);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4DC955").s().p("AAPBFQgmhBgLgwIgHgdQgDgSAEgNIACgDQADAoAXAmQAUAhAjAcIgBACQgJAlAHAlg");
	this.shape_143.setTransform(-31.6,-0.1,1.27,1.27);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4DC955").s().p("AAvBDIgQgFIgfgJQgmgMgcgeQA9gYAKg1QALAFAGAJQANASgCAbIgCAXQgBAOAHAIQADAFAPAIIAMAGIgEABIAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQADAGgHAAIgGAAg");
	this.shape_144.setTransform(31.1,29,1.27,1.27);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4DC955").s().p("ABqHpQgKgBgUgEQgagGgYgKQgZgLgOgWQgNgVgDgbQAQAIANAEQACABABgDQABgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAQhIgogngpQgcgegEgsQgEgnAOgsQAUhAA1hEQAmgxBAg/IABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgrgxQgXgdgKgbQgWg8AahHQATg2AsgqQArgoA4gTIAIgDQgyAbghAwQghAwgIA4QgEAeAFAjQgGgCgGgIQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQACAJANAGQAAAGAEAEQAKAqAWAkQAXAkAhAaQgpAfgsApIgKAKIgGABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAQgWAZADAXQACAQANATIATAVQgKAAgCgJQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQABAHAFADQAGAEAGgDIAAgBIAYAYIAXAXIAAACQgDAFgFAGQgMgPgfgDQgfgDgSgZQgMgRgKglQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBABQAAAAgBAAQgBAAAAABQAAAAAAAAQgBABAAABQADAqAbAcQAKALAOAFQAKAEAYACQAUADAIANQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIAJgQIADABIAAABQgJAcAEAeQghgNgfAFQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAbgBAdALIgHgBQgQgBgNAKQgNALABAPQABAIAGAHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAEAHAGAAIACgBQAHAJATAQQALAMADARQAEASgGAPQgFANgOAYQgMAWAGAPQAIAWAnAHQAVAEAWAAQgDADgFAAQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAEAKgTAAIgHAAgAAhFkQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAHAJAGACQAIADAEgIQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgHAIgLgPIgBgBIgCABgAgREgQAIABAIgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAABQgMADgJgIIAFgEQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgSAKgKgPQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQACAHAHAEQAGAEAHgBQAFAHAIACg");
	this.shape_145.setTransform(-7.4,-18.2,1.27,1.27);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#451738").s().p("AAUAQQgYgHgRgXQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQAOARAaALQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIgBAAg");
	this.shape_146.setTransform(46.5,-22.8,1.27,1.27);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#451738").s().p("AAEAaQgNgXACgcQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQADAZAKAZQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAIgCgBg");
	this.shape_147.setTransform(39.2,-19.1,1.27,1.27);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#451738").s().p("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");
	this.shape_148.setTransform(0.8,-18.9,1.27,1.27);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#451738").s().p("AgsAlIAAgCQAjg0AzgTQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQg3AdgfAnIgBABIgBAAg");
	this.shape_149.setTransform(-38.7,-31.3,1.27,1.27);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#451738").s().p("AgTAnQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQALg1AagWQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgOAPgJAUQgHANgJAZIgBABIAAAAg");
	this.shape_150.setTransform(-27.4,-24.5,1.27,1.27);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#451738").s().p("AgDABIgBgBIABgBIAHABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABgBAAIgBABg");
	this.shape_151.setTransform(32.4,-75.5,1.27,1.27);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#451738").s().p("AgIgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQADACAMABIACACIgCABIgEABQgFAAgHgFg");
	this.shape_152.setTransform(32.4,-74.1,1.27,1.27);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#451738").s().p("AgCATQgPgGgHgKIABgCQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAIACACQAGgJAMgKQAHgIAFACQAEACADAIIAEAMQAFAKgCAHIABACIgBACQgDACgFAAQgIAAgKgEgAgSAFQAQANAVgBIgCgOIgHgPQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgHAAgSAUg");
	this.shape_153.setTransform(31.8,-74.8,1.27,1.27);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#451738").s().p("AgEACIABgCIAGgBIACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgHACIAAAAIgBAAg");
	this.shape_154.setTransform(8.5,-74.9,1.27,1.27);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#451738").s().p("AgJADIgBgBIABgBQAHAAAMgEQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgHAEgJAAIgEgBg");
	this.shape_155.setTransform(8.6,-73.2,1.27,1.27);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#451738").s().p("AgcATQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIADABQgCgMADgNQAEgOAFgBQAFgBAGAEIAJAHQAOAMAEAFQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQgBARgXAEIgJAAQgOAAgLgGgAgRgGQgDAJAAAOQAdAHANgRIgNgMQgJgIgGgDIgDgBQgFAAgDALg");
	this.shape_156.setTransform(8.6,-74.2,1.27,1.27);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#451738").s().p("AgKAOQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAEgRAQgIQABABABAAQAAABABAAQAAAAAAABQgBAAAAAAQgMAHgGAQIgCABIgBAAg");
	this.shape_157.setTransform(7.3,-39.5,1.27,1.27);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#451738").s().p("AgBAHQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQgCgHAGgEQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQADAFgEAGQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBgBg");
	this.shape_158.setTransform(37.6,-44.8,1.27,1.27);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#451738").s().p("AAAAIQAAgBgEgKQgBgDAEgBQACgBACADQADAIgCAEQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_159.setTransform(18.8,-43.4,1.27,1.27);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#451738").s().p("AgtABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQArAMAvgRQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQgZAKgaAAQgUAAgUgGg");
	this.shape_160.setTransform(19.1,17.5,1.27,1.27);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#451738").s().p("Ag1gEIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAyAPA3gKQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIgBABQgVAGgWAAQgfAAghgLg");
	this.shape_161.setTransform(17.1,4.8,1.27,1.27);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#451738").s().p("AgdAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAYADAhgEQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgNAEgQAAQgNAAgQgEg");
	this.shape_162.setTransform(15.7,-4.6,1.27,1.27);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#451738").s().p("AAIAQQgFgBgDgFQgEgEAAgGIABgBQgIgDgBgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQACAGAGADQAFADAGgBQABgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgGACgGgCQAAAKAJADQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_163.setTransform(7.7,-22.6,1.27,1.27);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#451738").s().p("AADAJQgDgDAAgFQgIgBgEgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAEAFALgCQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgCADgCAAIAAAAQAAAFAGABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABIgDAAQgDAAgCgCg");
	this.shape_164.setTransform(35.4,22.9,1.27,1.27);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#451738").s().p("AAAAHQgFgCgHgIQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAKAOAHgIQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAgBAAQgDAGgFAAIgEgBg");
	this.shape_165.setTransform(-1.7,27.9,1.27,1.27);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#451738").s().p("AgLAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQADADAFgBIAJgEQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAgBABQAAAAAAAAQgHAGgHAAQgGAAgDgFg");
	this.shape_166.setTransform(-2.9,16.5,1.27,1.27);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#451738").s().p("AAJAMQgJgCgDgHQgHABgGgEQgHgDgCgHQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAJAOASgJQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgFADQAKAIALgDQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgFACgGAAIgFAAg");
	this.shape_167.setTransform(-10.7,16.9,1.27,1.27);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#451738").s().p("AgCAFQgFgDgBgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAFAEABQADADAEgBQABgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAACIgGABQgDAAgCgCg");
	this.shape_168.setTransform(-4.6,-5.5,1.27,1.27);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#451738").s().p("AAGASQgEgCgCgGQgEgGABgEIgBgBQgIgHACgIIABgBIACABQABAIAGAEQACACAIABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQgDACgEgCQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAFAJQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgCAAIgBAAg");
	this.shape_169.setTransform(-4.2,-10.9,1.27,1.27);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#451738").s().p("AADAOQgGgGAAgHQgNgFgCgJQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAGAIAGACQADACAJAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDADgGAAIADAFQAFAEAGAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDAAQgFAAgGgDg");
	this.shape_170.setTransform(-4.3,-48.5,1.27,1.27);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFDB64").s().p("AgSAEQAYgbAEAKIAHAPIACAOIgDABQgTAAgPgNgAgDABQAAABgBAAQAAAAAAAAQAAAAAAAAQABABAAAAQAIAHAIgCIACgCIgCgBQgNgCgCgCIAAAAIgBAAgAAAgGIABABIAHABIABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgIgBIgBABg");
	this.shape_171.setTransform(31.8,-74.7,1.27,1.27);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFDB64").s().p("AgUARQgBgOADgJQAEgPAHAEQAHAEAIAIIAOALQgKANgRAAQgHAAgIgCgAAJAEQgMAFgHAAIgBABIABABQAMABAIgGQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAIgBgBIAAAAgAgFgEIgBABQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAHgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgCgBg");
	this.shape_172.setTransform(8.7,-74.2,1.27,1.27);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3DDB5A").s().p("AgWAFQgDgHgBgMQgBgGACgKQAEgNAIAIIATASQALAKALAFQgTATgNAWQgOgXgEgLg");
	this.shape_173.setTransform(-8.6,-71.5,1.27,1.27);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFDB64").s().p("AgOAEIgFgQQATAHAUAFIgKAHQgGAFgGABIgBAAQgHAAgEgJg");
	this.shape_174.setTransform(19.1,-31,1.27,1.27);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFDB64").s().p("AgQABQASgEAPgKQgEAOgEAGQgDAHgFAAQgGAAgLgNg");
	this.shape_175.setTransform(42.1,-30.9,1.27,1.27);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3DDB5A").s().p("ABpAaQgLgMgRgXIgbgjIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIg6AEQgiACgagCQgogDgWgFQglgJgSgUQAvAUA7ADQA2ADA2gNIAZgEQAMAAAIAMIAKAVQAOAdAPAXQAaAuAlAYIgEAFQgrgdgdgeg");
	this.shape_176.setTransform(-32.8,-33.1,1.27,1.27);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3DDB5A").s().p("AgagFQASgGAdgcQADgEADAZQAAALgHAPQgOAegGACQgLgbgPgSg");
	this.shape_177.setTransform(44.3,-72.1,1.27,1.27);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D6BED0").s().p("AALBRIAAgBQglgrhSgDIAAAAQADghgRgkQgPgjgbgZQAUAKAwAHQBPAMA4gLQAXArAeAiQAjAnAmASQgPAPgSAYQgpgXhQAIgAA1gEQgcAVgLA2QAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAQAIgZAHgOQAKgUAOgOQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCAAIgBAAgAgKg3Qg1ATgiAzIAAACQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAfgoA4gcQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_178.setTransform(-31.9,-28.8,1.27,1.27);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D6BED0").s().p("AgJA2QgKgGgQgCQgXgFgXANQgJgRgRgGQAKgWANgNQA9gIAggqIAAAAQAFABADgCIAEgCQAoAsAfAUQAFAFALAGQg0ABgwAhIgIAGIAAAAQgEAAgFgEgAgTgJQgCAcAOAXQAAABABAAQAAAAAAAAQAAABABAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgMgagCgYQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAgAAYgcQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQASAYAZAGQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBQgcgKgOgSIgBAAIAAAAg");
	this.shape_179.setTransform(40.7,-21.2,1.27,1.27);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D6BED0").s().p("AhTCuQARgcAGgeQAGgggHgeQgHghgmgSQgCgZAFgjQAGABAFgBQADAAAAgFIgBgHQAHAAAFgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgIgGgIIgLgOQAHgjAbgUQAcgVAjAIQAjAIAKAnIAFAZQADAOAGAJIABABIAVA9QAOAiAGAdQAGAYgIAWQgGATgSAUQgZAegzAKQgWAEgaAAQgSAAgUgCgAgfA/QAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAwAPAsgUQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgvASgrgNIgBAAIgBABgAg2gpIABABQA3AUA0gOIABgCQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQg2ALgzgQIgBAAIgBABgAgohuQgBAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAiAHAYgIQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQghAFgXgEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_180.setTransform(17.1,9.4,1.27,1.27);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3DDB5A").s().p("AAmArQgNgGgTgNQgNgKgRgPIgcgdQACgCAFgKIABgDQAoA2AvAZQAKAFAAAFQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgDAAgJgDg");
	this.shape_181.setTransform(50.4,-25,1.27,1.27);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3DDB5A").s().p("AAGBVQgGgBgHgDIgNgFIgLgfQgKgfAAggQAAgkALgeQATAKAHAaQAEAPADAfQADALAIAPQAhAegGAEIgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIADAKIgJAFQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIgBACQAAADgMAAIgNAAg");
	this.shape_182.setTransform(30.8,-6.1,1.27,1.27);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3DDB5A").s().p("AApByIgRgFIgegJQgngMgcgeQBMgfgDhKQgBgdgNglQA2AZATAuQASArggA6QgBAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgDQAIADAIAHIAGAIQADAFgJADIgBABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIACAFIAAAEQgBAFgJADIAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABABAAQACAGgHAAIgFAAgAAPgLQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAABABQAEAIAJAAQgBAFAEADQAEAEAEgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgGgBAAgEIAAAAQACgBACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgMACgEgFIgBgBIgBAAg");
	this.shape_183.setTransform(32,23,1.27,1.27);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#3DDB5A").s().p("AAJBFQglhCgMgvIgGgeQgDgRADgNQADgLALATQAFAIADAIIAOAYQAKASANAKIAKAIQAGAFAFACQALAGACADIABABIgMAlQgIAmAGAlg");
	this.shape_184.setTransform(-30.9,-0.1,1.27,1.27);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4DC955").s().p("AgCAXQgIgCgFgGQgEgGgBgIQAAgGAEgHQAEgGAHgDQAJgEAHAFQADACADAFQAIAOgJAOQgEAHgGABIgEABIgEgBg");
	this.shape_185.setTransform(37.8,-44.8,1.27,1.27);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4DC955").s().p("AgEAWQgHgCgDgCQgGgFAAgNQgBgPAHgEIAGgCQAOgDAKAMQAJAMgHANQgCAHgFACQgDABgEAAIgIgBg");
	this.shape_186.setTransform(19.4,-43.7,1.27,1.27);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3DDB5A").s().p("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QgBAAAAAAQgBAAAAAAIgJAFQgGACgDgEIgBgBIgBAAgAh6BiQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQABAHAFADQAGAEAGgDIABgCQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgFABgDgDQgFgCAAgFIgCgBIAAAAgAh7AtQgCAIAIAHIACABQgBAFADAGQADAGAEACQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgFgJQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAFACADgCIABgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHgBgEgCQgFgEgCgIIgBgBIgCABgAgegtQAAABgBAAQAAAAAAAAQAAAAAAABQgBAAABAAQABAJAIAEIgBABQAAAGAEAEQAEAFAFABQABABAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgJgDgBgJQAHACAGgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgGABgGgDQgGgDgCgGIgBgBIgBAAgAghiWQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAGgRANgHQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAgBgBQgRAIgEASgABDjJQgEABABAEQAEAKABABQABABAAAAQABAAABAAQAAAAAAgBQABAAAAgBQACgDgDgJQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgBAAgADXjTQgGAEADAIQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQAEADABgEQAEgGgCgGQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBAAIgCABgAiCj6QAAABgBAAQAAAAAAAAQAAABAAAAQgBAAABABQABAJAOAGQgBAHAHAGQAHAEAHgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgGAAgFgEIgEgFQAGAAADgDQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgJAAgFgCQgFgCgGgIIgCgBIgBAAgAgomjQgBABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAPAIAUgDQAXgDAAgSQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgFgGgMgLIgKgHQgHgFgFACQgFABgEAOQgDANACANIgDgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgACTm3IgBACQAHAKAPAGQASAHAJgFIABgCIgBgCQACgHgFgLIgEgMQgDgIgEgCQgFgCgIAIQgMAKgGAKIgCgCIgBgBIAAABg");
	this.shape_187.setTransform(10.1,-18.8,1.27,1.27);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F2796E").s().p("AgHAHQgLgGAIgFQAHgFAJACQAKACgCAHQgCAGgIABIgDAAQgEAAgEgCg");
	this.shape_188.setTransform(-47,-77.1,1.143,1.143);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F2796E").s().p("AgNAPQgLgDgBgJQAAgHAJgHQAGgEAKAAQAHgBAIADQAIADACAIQACAHgIAEQgMAHgLAAIgJgBg");
	this.shape_189.setTransform(-21.6,-75.3,1.143,1.143);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgCgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAAADQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBgBQADAEgFABIgBAAQgFAAADgJg");
	this.shape_190.setTransform(-44.1,-81.7,1.143,1.143);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgEADQAAgEADgEQABAAAAgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQABAFgFABIgBAAQgEAAAAgFg");
	this.shape_191.setTransform(-25,-83.3,1.143,1.143);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#003C1A").s().p("AgVANQgCgVAJgQQAIgNAIADQAFABAHAHQAFAJACAKQADAOgEAMQgFANgNADIgEABQgRAAgCgXg");
	this.shape_192.setTransform(-24.1,-81.8,1.143,1.143);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#003C1A").s().p("AgIATQgFgFgBgHQgCgKAFgKQADgGAFgCQAFgDAFAEQAKAHgCAQQgBAPgLAFIgDAAQgEAAgEgEg");
	this.shape_193.setTransform(-43.3,-80.9,1.143,1.143);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFDB64").s().p("ACMBaQgzgGgrAXIgQAIQANhvgxg/QAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAXAkAIAuQAHAmgCAzQgIACgPgHQgegMgWgBQglgBgaASQAehFAAhEQAAgEgEAAQgDAAgBAEQgLBQgVBBQguglgqgEQgFABABAEQgFgEgCgFQgDgEgBgKIgBgNIAGgOQADgHADgEIAHgJQAGgFAMgHIACABQA3gTAtggQAygjAaguIAFACQA/AcAmAfQAwAmAYA2QACAEAEgCQAEgCgBgDQgFgPgJgQIALAOQAKAPANAbIAVAqIAMAjQgogfgwgFg");
	this.shape_194.setTransform(29.3,-23.8,1.143,1.143);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#70A13B").s().p("AgLAiIgGgCQgEgBgBgDIgCgIQADABABgEQABgVACgJQADgQARgEQATgDADAUQACARgJAOQgCAGAGACIAAABQgDAEgEACQgDACgEABIgKACIgJgBgAgBgHQgDADgDAIQgEAHACAHQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQADgEACgGQACgMAAgDQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape_195.setTransform(-39.3,-69.3,1.143,1.143);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#70A13B").s().p("AgCAeQgEgBgEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgBQgMgIgEgMQgDgHADgIQADgHAHgDQAMgHALAOQAHAIgBARQAAAEAFABQAEABACgDIABgCIgBAGQgBACgHAHQgHAIgGABIgEAAIgDAAgAgLgHQgDADADADIAEAIIAEAIQADACACAAQADgBABgDQACgMgMgIIgEgBQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_196.setTransform(-61.7,-67.2,1.143,1.143);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#70A13B").s().p("AgiAMQBFgVAfg2QgDARgOATQgQAXgEAEIgNAJIgZAUQgLAIgUANIgWAMIgEACQANggATgUg");
	this.shape_197.setTransform(-21.8,-36.6,1.143,1.143);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A1CD53").s().p("AhQBUQACgIAJgDQAJgGAMgFIAigRQAXgNANgZQAOgbgPgXIgCgEIAFgQIAEgLQADgGAEgCQAIgCAKACQAKACAHAGQAJAJAAAJIACATIgDAMQgEARgJAMIgHAKQgDgDgBgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgBAFIABAAIABAEIADAFQgHAKgIAFIgaATQgZATgOAEQgOAEgNACIgOABIgFAAIgIAAg");
	this.shape_198.setTransform(48.6,48.3,1.143,1.143);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#70A13B").s().p("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TBDgbBQQgPAqglAjQghAggtAUQgoATgrAAIgQgBgAExJpIgBAFIABAAIABAEQABAEAEACQAHAGAKgGQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgFADgFgDQgFgDgBgHQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAgAFfIMQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQABAKAIAFQAIAFAJgDQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQgHABgGgEQgGgEgCgHQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAIAAAAgAElHzQAJAKANABQAMABAKgKQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIAHgKAAQgKgBgIgHQAFgCADgFQABAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBABQgKAHgKAAQgLAAgIgJQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQABABAAAAQAGAJAKADQAJADAJgDgACwFZIgFALIgBABIgDAEQgHAIgMACQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAABAAQAMgCAJgIIABABIAEABIABAAIAEABIAAAAIAJgDQAIgEADgJQABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgGANgQgBQAHgJAAgIQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABgAhjDFQAAAAgBABQAAAAAAABQABAAAAAAQAAABAAAAQAMAHANgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAABQAAAAgBAAQAAAAAAABQgFAKgKAEQgKAEgKgFIgBAAIgBABgAiRCsQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgQAAgOgHQAHgCAGgFQAAAAAAgBQAAAAAAAAQABgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAABgBAAQgiAQgRgaQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQASAMATgCgACzhXQAxAnAYA3QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAgBgBQgDgCgCADIgkAoQgVAXgQAOQgsAlg3AYQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQA3gTAtghQAxgkAagtQBCAcAoAfg");
	this.shape_199.setTransform(19.4,-21.5,1.143,1.143);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#70A13B").s().p("AAAgCIAEAEIgHABg");
	this.shape_200.setTransform(39.8,19.5,1.143,1.143);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#70A13B").s().p("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");
	this.shape_201.setTransform(16,-21.5,1.143,1.143);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#003C1A").s().p("AgPgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAFAFAHAAQAHAAAFgFQABAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgGAHgKAAQgIAAgHgHg");
	this.shape_202.setTransform(-9.5,-53.9,1.143,1.143);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#003C1A").s().p("AATASQgSgEgEgPIAAABQgBAAAAgBIAAAAQgLgDgFgKQAAgBAAAAQgBgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAABQAFAIAJABQAHACAJgGQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgGAHgJAAQAKALAKAEQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIgBAAg");
	this.shape_203.setTransform(-3.7,-71.3,1.143,1.143);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#003C1A").s().p("AAAAFQgJgBgGgGIABgCIABAAQAGAEAHABQAHABAGgEQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgFAFgIAAIgCAAg");
	this.shape_204.setTransform(-21.7,-31,1.143,1.143);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#003C1A").s().p("AALAVQgMAAgEgLQgKgCgIgIQgIgIAAgKQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQABAQANAFQAKADAOgGQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQgGAHgIABQADAHAKgCQAHgBAIgFQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgIAIgLAAIgBAAg");
	this.shape_205.setTransform(-12.6,-32.6,1.143,1.143);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#003C1A").s().p("AgTAHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAKAFAJgEQAJgEAFgJQABgBAAAAQAAAAABAAQAAgBAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgEANgNAFQgEACgEAAQgIAAgHgFg");
	this.shape_206.setTransform(10.3,0.5,1.143,1.143);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#003C1A").s().p("AAAAHQgLAAgKgFQgKgFgGgKQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAAAAAAAAQARAZAhgPQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQgGAEgHABQAOAHAQAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgEAAQgRAAgPgKg");
	this.shape_207.setTransform(-1.4,-3.7,1.143,1.143);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#003C1A").s().p("AgaAOQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAMgCAHgIIAFgHIADgIQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAIgHAIQAQABAGgMQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQgDAIgJAEQgIAFgIgEIgBgBQgJAIgMACIgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_208.setTransform(39.3,19.5,1.143,1.143);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#003C1A").s().p("AgFAHQgIgGACgIQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAHAEACQAEADAGgDQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgFADgEAAQgDAAgEgDg");
	this.shape_209.setTransform(55.6,49.9,1.143,1.143);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#003C1A").s().p("AgEAHQgIgFgBgJQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQACAHAGADQAFAEAHgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgGABQgFAAgFgDg");
	this.shape_210.setTransform(60.9,39.5,1.143,1.143);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#003C1A").s().p("AARAOQgNgBgIgKIAAgBQgJADgJgDQgKgCgGgJQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAABABQAIAJALAAQAKAAAJgHQABgBAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQABAAgBAAQAAABAAAAQgDAFgFABQAIAHAKABQAKAAAIgHQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQgJAJgLAAIgCAAg");
	this.shape_211.setTransform(53.5,35.2,1.143,1.143);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#003C1A").s().p("AALAOQgJgDgBgKQgHgCgHgIQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAHAIAPACQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgHAAQABAFAGADQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_212.setTransform(16.7,40.1,1.143,1.143);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#003C1A").s().p("AAGADQgJAGgLgDQgLgDgHgJQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAMANATgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAJAIAQgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgHABQgKAAgJgHg");
	this.shape_213.setTransform(28,34,1.143,1.143);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#003C1A").s().p("AgDAKQgQgDgGgOQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAgBAAABQABAAAAAAQAAAAABABQAGAKAOABQAGAAATgDQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgLAFgLAAIgGAAg");
	this.shape_214.setTransform(22.8,29.4,1.143,1.143);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#003C1A").s().p("AAGAKIgBABQgNABgMgGQgNgGgBgNQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABQACALAKADIAUAEQgFgGABgJQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAALAKAGQAJAEAMgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgJACQgKAAgIgGg");
	this.shape_215.setTransform(18.7,18.9,1.143,1.143);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#003C1A").s().p("AgCAHQgKgFgGgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQAIAHAGACQAFADALACQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgFABQgHAAgGgEg");
	this.shape_216.setTransform(-28.2,25.5,1.143,1.143);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#003C1A").s().p("AgNAKQgQgFgIgLQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAAAQALALAOACQAHABANgEQgFgDgEgGQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAKAOAUgDQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgLADgKgFIgBACQgHAGgJAAQgGAAgGgCg");
	this.shape_217.setTransform(-8.8,31.1,1.143,1.143);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#003C1A").s().p("AAMARQgKgEgEgKQgKABgJgFQgIgFgEgJQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABABQAAAAABAAQAPAXAagPQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQgFAGgIABQAJAMASgCQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgFACgFAAQgFAAgGgDg");
	this.shape_218.setTransform(-5.2,17,1.143,1.143);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A1CD53").s().p("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AAAAgBAAQAAAAgBABQgKAHgKAAQgLAAgIgJQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAGAJAKADQAJADAJgDgAEQHvQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgQABgJgJQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQgUAGgMgOQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAHAKALADQALADAKgGQAMAKAOgEgAh3HDQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAABABQAIAMAQAFQASAFALgJIABgCQAKAFALgDQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgUADgKgPQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAEAGAFAEQgOAEgHgBQgOgCgLgMIgCgBIgBABgACpGzQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAGAOAQADQAPADAOgHQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgTAEgGgBQgPAAgGgMIgCgBIgBAAgAFVFZIgEAIIgFAIQgHAIgMACQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAMgCAJgIIABABQAJAEAIgFQAJgEADgJQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgGANgQgBQAHgJAAgIQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABgADAFwQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgMACgJgFQgKgFAAgMQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAJAGAGIgVgEQgKgEgCgLQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQABANANAHQAMAGAOgCIABgBQAMAJAPgEgAglFjQAKAEAKgEQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgSABgKgLQAIgCAGgHQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgaAQgQgXQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABABAAQADAJAJAGQAIAFAKAAQAGAJAKAFgABBDFQgBAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAMAHANgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBgBAAABQgBAAAAAAQAAAAAAABQgFAKgKAEQgKAEgKgFIgBAAIgBABgAATCsQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgQAAgNgHQAHgCAFgFQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAABQAAAAAAAAQgiAQgRgaQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQARAMATgCgAFYhXQAxAnAYA3QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgDgCgCADIgkAoQgVAXgRAOQgsAlg3AYQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQA3gTAtghQAygkAagtQBCAcAoAfgAiRh1QAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAKAIAJQAHAIAKACQAFALAMAAQAMAAAJgIQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgIAFgIABQgJACgEgHQAIgBAHgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgQAHgKgDQgNgGgBgQIgBgBIgBAAgAjRhWIAAABQAFAHAKACQAJABAHgGQAAgBAAAAQAAAAAAgBQABAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAQgHAEgHAAQgIgBgFgGIgBAAIgBABgAhnkgQAAABgBAAQAAABAAAAQAAAAAAABQAAAAABABQAHAIAJAAQAKAAAGgJQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgFAFgHAAQgIAAgFgFIgCgBIgCAAgAimlXQAIALACAUQAAABAAAAQAAABAAAAQABABABAAQAAAAABAAQAEABAAgEQAEgWgPgQQgQgRgVALQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAABAAQAFgCAFAAQALAAAIAKgAormWQgDACACAEIAEAIIAFAIQACADADgBQAEAAAAgEQADgLgOgKIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABgAlDmxQACARgJAPQgCADADADQADADADgCQARgFgBgfQgBgNgHgJQgIgKgMgCQgLgDgNAGQgMAGgGAKQgFAKAAANQABANAEALQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQABgWACgJQADgQASgEIAFgBQAOAAADASgAlempQgDADgDAJQgEAIACAHQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAEgEACgHQACgMAAgEQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAgAgRmgQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgKgEgKgNQAJAAAGgHQAAAAABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAABAAAAQgJAFgIgBQgJgBgFgJQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABABAAQAFALALACIAAABQAAAAABAAIAAAAQAFAPASAFgAhjptQgGAWAGATQAHAXAVADQABABAAAAQABAAABgBQAAAAAAAAQABgBAAgBQAMgGAHgSQAGgPAAgPQABgQgUABQgPAAgQAIIAAgCQABgEgEgBIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAABAAAAg");
	this.shape_219.setTransform(0.6,-21.6,1.143,1.143);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#003C1A").s().p("AABAkQgUgEgHgXQgGgSAGgVQABgEADABQAEABgBADIAAACQAQgHAOgBQAUAAgBAQQAAAOgGAPQgHASgMAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBAAgAABgZIgUAEQgDAfAXAQIAGgKQAJgOADgLQAEgQgIgBg");
	this.shape_220.setTransform(-7.8,-89,1.143,1.143);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#003C1A").s().p("ACuBRQgYg4gxgmQgogfhBgcQgaAtgyAjQgtAgg3ATQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQA3gYAsgjQARgPAVgXIAkgoQACgCADACQABAAABAAQAAABAAAAQAAABAAABQAAAAAAABQA/ATAwAlQA2ApATA5QABAEgEACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_221.setTransform(28.3,-29.9,1.143,1.143);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#003C1A").s().p("AAVAaQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQgBgUgJgKQgJgOgTAGQAAAAgBABQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAVgKAPARQAQAPgEAWQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAg");
	this.shape_222.setTransform(-19.4,-59.9,1.143,1.143);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#003C1A").s().p("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");
	this.shape_223.setTransform(0.6,-22,1.143,1.143);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#003C1A").s().p("AgDAPQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgCgHAEgGQADgJACgDQACgCADAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABADgDAMQgBAGgFAEIgCACIgBgBg");
	this.shape_224.setTransform(-39.6,-68.6,1.143,1.143);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#003C1A").s().p("AAAALIgEgIIgEgHQgCgEADgCQADgDADACQANAKgDAKQAAAEgEAAIgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBg");
	this.shape_225.setTransform(-62.1,-66.8,1.143,1.143);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#003C1A").s().p("AAQAiQgDgDACgDQAIgPgCgQQgCgVgTAEQgSAEgDAQQgCAIgBAWQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgFgLAAgNQAAgMAFgKQAFgKANgGQAMgGAKADQANACAHAKQAHAJABANQABAegQAFIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_226.setTransform(-38.9,-70.7,1.143,1.143);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FBB216").s().p("AgohIQA0AYAFADQAhAVgNAbQgRAkggAiQADhQgfhBg");
	this.shape_227.setTransform(6.6,-80.5,1.143,1.143);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FBB216").s().p("AALAFQgWgYgagPQAegGAJAAQAXABAIASQAFAMAAASIgBAgQgKgSgQgSg");
	this.shape_228.setTransform(-3.6,-95.8,1.143,1.143);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FBB216").s().p("AgbgwQAmAgARAbIgjAmQgRgygDgvg");
	this.shape_229.setTransform(3.2,-28.6,1.143,1.143);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FBB216").s().p("AgTAIIACgOQADgLAFgBQAHgBAJAGIAPALIgEACQgUAHgTANg");
	this.shape_230.setTransform(-33.9,-100.8,1.143,1.143);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FBB216").s().p("AgKgJQAIghACgcIAYAuQALAZgRAYQgIALgNANIgZAWIAShQg");
	this.shape_231.setTransform(5.1,-61.5,1.143,1.143);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FBB216").s().p("AgWADQAEgeAGglQAVAXAIAOQAOAXgIARQgGANgQAPIgZAYQgBgaADgkg");
	this.shape_232.setTransform(2.8,-42.8,1.143,1.143);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBB216").s().p("AgYgLQAQgRAYgFQAHAdABAFQABALAAAWg");
	this.shape_233.setTransform(18.7,-6.8,1.143,1.143);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FBB216").s().p("AgTgUIAUgEIAOgBQAIABgEAQQgDAKgJAPIgGAJQgXgQADgeg");
	this.shape_234.setTransform(-7.8,-89.1,1.143,1.143);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFDB64").s().p("AgBAMIgGgBQgCgBACgFQADgHAGgFIAHgFQgCAHAAAJQAAAEACAFg");
	this.shape_235.setTransform(5.6,44,1.143,1.143);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFDB64").s().p("AgDAQQgKAAgDgMIgDgTQASARAVAMIgMABIgJABIgCAAg");
	this.shape_236.setTransform(-32.4,32.2,1.143,1.143);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFDB64").s().p("AgOAGQgEgGgCgIQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAUAJATAEIgSAJQgFACgDAAQgFAAgEgGg");
	this.shape_237.setTransform(-26.7,35.8,1.143,1.143);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFDB64").s().p("AABAGQgFgEgIgKIAVABIABgBQAAAKADAHQgIgBgEgCg");
	this.shape_238.setTransform(-21,37.2,1.143,1.143);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#A1CD53").s().p("AA5BPQgigEgXgIQgcgJgYgRQgQgMAFgZIAMgkIAQgvQAjBNA/AwIACABIgHAhgAgggMQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAGAIAKAEQAKAFAIgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgKgCgFgCQgHgCgIgIIgCAAIgBAAg");
	this.shape_239.setTransform(-26.4,25.8,1.143,1.143);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FBB216").s().p("AAQAPQgVgQgogjQAqABAVAIQANAEAHAXQAEALAEAbg");
	this.shape_240.setTransform(28.4,2.9,1.143,1.143);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FBB216").s().p("AgbgWIABAAIACABIAYAEQAMADAHAJQAHAHACAVQgUgWgjgXg");
	this.shape_241.setTransform(59.8,24,1.143,1.143);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FBB216").s().p("AgigPIABgDIgBgCIACAAIABgBIAPgBQARgCAJABQAOABAEASIAHAcQgdgTgogUg");
	this.shape_242.setTransform(52.3,18.4,1.143,1.143);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFDB64").s().p("AgTAGQgCgGAAgRQARAQAbAFQgTALgKADIgCAAQgIAAgDgMg");
	this.shape_243.setTransform(-15.4,42.7,1.143,1.143);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FBB216").s().p("AgxgeIBDAHQAPACAHATIAKAiQgugag1gkg");
	this.shape_244.setTransform(41.4,12.2,1.143,1.143);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFDB64").s().p("AgFAKQgHgCgHgQIAAgBIABgBIAMABIAaABIgJANQgEAGgHAAIgFgBg");
	this.shape_245.setTransform(-9,44.8,1.143,1.143);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFDB64").s().p("AgHAJIgOgJIAAAAQAagCARgHQgIALgJAGQgDACgDAAIgGgBg");
	this.shape_246.setTransform(-2.8,43.9,1.143,1.143);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFDB64").s().p("AgwB1QgfhCgIhLQgIhIAQhZQAOgcAWgMQAZgPAbAKQAcAKAOAmQAIAWAGArQADAcgDA/QABA4AYAcIAAABIgbBYQgQA0gJAkQg1gyghhEg");
	this.shape_247.setTransform(-23.1,3,1.143,1.143);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgEAEQgCgCABgCIAAgCQACgEADAAQAEAAACAEIAAACQABACgCACQgCADgDAAQgCAAgCgDg");
	this.shape_248.setTransform(3.2,-71.1,1.285,1.285);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgiAWQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABAAQAMgTARgLQAUgOATADQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBABQgZAHgKAHQgPAIgPAQIgBABIgCgBg");
	this.shape_249.setTransform(9.7,-78.9,1.285,1.285);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#030100").s().p("AhmFOQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQBEgUA+hNQAegmAQgcQAVgnAEgmQAJhJgohMIgmhAQgYgngKgaQgfhLAShKIABAAQgLA1ALAyQAIAnAZAtIAnBBQAWAmAKAdQAbBMgWBHQgQA2hBBIQg1A9g8AQIAAAAIgBgBg");
	this.shape_250.setTransform(61.5,1.6,1.285,1.285);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#030100").s().p("AArAIQg1gLgeAEIADgBIgGABIAAAAIADAAIgDABIgBgBIABgBQAQgIAlABQAbABAHAMIAAACIAAAAIgBAAgAAAAAQAnAGAAgCQACgEgSgCQgMgCgKAAQgVgBgRAFQALgBAKAAIAQABg");
	this.shape_251.setTransform(34.5,44.2,1.285,1.285);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#030100").s().p("Ag+ALQAmgNAXABQAMABATACIAZAFQgbgMgdgDQgPgBgQAFIgcAMQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAVgJAIgDQAQgGAPACQAhADAeAPIABACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgfgGQgTgDgMgBQgNAAgSADIgeAJIAAAAIAAgBg");
	this.shape_252.setTransform(7.1,37.2,1.285,1.285);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#030100").s().p("AhOANQAjgRAsgGQAUgDAZABQAWAAALAIIABABQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgQgJgYAAQgPAAgaAEQgdAEguARQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_253.setTransform(-53.7,43,1.285,1.285);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#030100").s().p("AgZAZQAGgbAEgMQAMggAkgaQABAAAAABQABAAAAAAQAAABAAAAQAAAAgBAAQgXARgIAJQgMAQgGAXQgFAMgFAaQgFAbgEANIAJgwg");
	this.shape_254.setTransform(2.8,59.3,1.285,1.285);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#030100").s().p("AhOBFQAQgxAtgnQAqglA1gNQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBABQg4AQgnAjQgjAfgZA2IgBABIAAgBg");
	this.shape_255.setTransform(-10,56.9,1.285,1.285);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#030100").s().p("AhZAhQAjgjAvgRQAugRAyAFIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgxgFguARQguARgkAhg");
	this.shape_256.setTransform(-16.6,50.3,1.285,1.285);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#030100").s().p("AAeAOQgbgSghABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAagCAWAKIALAHQABgBgLgKQgKgIgPgDQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAZADANAWIAAACIgBAAIgBAAg");
	this.shape_257.setTransform(-34.7,38.6,1.285,1.285);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#030100").s().p("AhdAkQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQALAEARgBQAIgBAUgEQAWgFAXgKQAxgSAjgnIABABQgdAlg3AWQgaAKgeAFQgRAEgHAAIgEAAQgLAAgIgEg");
	this.shape_258.setTransform(-4.7,-27.8,1.285,1.285);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#030100").s().p("AhRAkQgHgBgDgEQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQADAEAKAAIAPAAQAMAAAOgDQAYgEASgIQAYgIATgMQAIgFALgKIALgJIgcARQgVAJgWAIQgwAQgrAAQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAAAQA1gFAlgMQAogMArgeIACAAIAAABQgnAog0ASQgXAJgeADIgVAAIgIAAg");
	this.shape_259.setTransform(-4,-28.5,1.285,1.285);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#030100").s().p("Ag+BOIABgBQAMASApgfQAUgQAPgZQAYglAKhGQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQgFBKgoAxQgVAagaAOQgLAFgIAAQgJAAgFgHg");
	this.shape_260.setTransform(12.4,-12.6,1.285,1.285);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#030100").s().p("AhYAPQALgcBCgBQA1gCAvAcQAAABAAgBQgugZgyABQgbAAgXAGQgQAFgGAFQgHAHACACQABABAPgGQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgUAHg");
	this.shape_261.setTransform(32.5,-32.2,1.285,1.285);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#030100").s().p("ABLAcQgvgdgUgJQgTgIgVgFQgNgCgLAAIgHgBIgGABQgHAAANAEQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAQgIAAgEgGQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQBCgHBUA9IAAABIAAABIgBgBg");
	this.shape_262.setTransform(31.5,-23.7,1.285,1.285);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#030100").s().p("AANgIQgSgTgJgHQgTgMgRACIAAAAQAPgFATAMQAHAEATATQAjAhAGAbQAAAAgBAAQgMgfgZgXg");
	this.shape_263.setTransform(27.3,-18,1.285,1.285);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#030100").s().p("Ag6AmQA3g2A9gUQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgeAJggAWIg3Aqg");
	this.shape_264.setTransform(-57,-26.5,1.285,1.285);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#030100").s().p("AgfAxQAHgaAUgfQATgiARgHQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgVANgQAfQgKARgQAkIAAABIAAgBg");
	this.shape_265.setTransform(-43.8,-16.7,1.285,1.285);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#030100").s().p("Ag5A6QAVgkAggiQAWgXAFgFQATgQAPgBQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgKABgLAIQgGAEgMALQgNALgMAPQgYAagaAmg");
	this.shape_266.setTransform(-51.7,-19.1,1.285,1.285);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#030100").s().p("AgaAzIAAgCIANgKIAJgNIAKgUQAOgcgJgcQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAABQALAbgPAeQgGAOgJANQALgLAIgNQAOgSgCgNQgBgIgHgTQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACABIAGASQADALgBAHQAAAHgKAPQgOATgRAPIgCACQgFAGgEABIgBgBg");
	this.shape_267.setTransform(6.9,-98.4,1.285,1.285);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#030100").s().p("AgRA2QgLgIABgTQAAgOAHgOQAOgiAhgSQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgdAQgOAaQgIAQgCAPQgCAUALALIAAABIAAAAIgBAAg");
	this.shape_268.setTransform(-9.9,-98.6,1.285,1.285);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#030100").s().p("AAJApIAJgZQADgOgCgLQgDgPgLgIQgKgIgPACIAAgBIAAgBQAMgCAKAGQALAGAFALQAFAOgDAQQgCALgJATIAAAAIAAAAg");
	this.shape_269.setTransform(-40.1,-86,1.285,1.285);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#030100").s().p("AAEAyQASgjgDgYQgCgPgLgLQgKgLgQgCIAAgBQAjACAFAlQAFAhgTAbIgBABIgBgBg");
	this.shape_270.setTransform(-41,-84.8,1.285,1.285);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#030100").s().p("AgKAIQgFgOACgUIACAAQgBAWAEAKQAFASARADIAAABIgBAAQgQAAgHgUg");
	this.shape_271.setTransform(-49.9,-78.2,1.285,1.285);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#030100").s().p("AgIApQACgxAPggQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgJAcgCANQgDANgDAaIAAAAIAAAAg");
	this.shape_272.setTransform(-34.1,-103.4,1.285,1.285);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#030100").s().p("AAQBmQgFgFgHgNQgOgcgJggQgUg/AGg8IAAgEIABgFIABAAIgBAMIAVBiQAIAkAHAVQAMAeATASIAAABIAAABIgDAAQgJAAgHgHgAgWAIQAIAfALAYIAMAaQAEAHAFAFQAEAEAFACQAHABgEgDIgGgHIgIgLQgHgLgFgNQgIgUgIgiQgKgwgKg0QgBA1ALAug");
	this.shape_273.setTransform(-50.2,-93.2,1.285,1.285);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#030100").s().p("AAXAOQAAgJgFgGQgFgHgJgCQgGgCgVACIgBAAQARgGAPAGQATAHgDARIAAAAIgBAAg");
	this.shape_274.setTransform(-48.1,-45.6,1.285,1.285);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#030100").s().p("AgiABIAAgBQAmgDAfAEIAAAAQgugBgXABg");
	this.shape_275.setTransform(-29.4,-31.6,1.285,1.285);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#030100").s().p("AhYALQAdgOAygDIAwgDQAdgCAUABIABABIgBABIhZADQg3ABggAPg");
	this.shape_276.setTransform(-29.4,-31.7,1.285,1.285);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#030100").s().p("AgPAdQgEgTAJgPQAIgQAQgHIABgBIABAAIABABIgBACIgFACQgGAHgFAIQgIAPgFAXIgBABIgBgBgAgEgKQgJALgBAOIAAAFIAAAEIADgJIAGgPQAFgMAIgKQgIAFgEAHg");
	this.shape_277.setTransform(-24.1,-50,1.285,1.285);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#030100").s().p("AgQAJQgJgEgDgIIABAAQAIAQAVgEQAXgDACgRQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAKgLAFQgIAFgLACIgDAAQgHAAgGgDg");
	this.shape_278.setTransform(-5.9,-60.7,1.285,1.285);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#030100").s().p("AgQBtQg1gIgZgqIAAAAQAcAqA1AHQA3AIAggnQAbghgLhAQgKg4gVghIAAgBIABAAQAZAhAJBGQAIA6gfAgQgbAcgoAAQgJAAgLgCg");
	this.shape_279.setTransform(9.8,-69,1.285,1.285);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#030100").s().p("AgQBrQgwgEgagmQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAcAmAwADQAwAEAggkQAagdgFg8QgDgtgYguIABAAQAaAvACA0QADA8geAcQgeAcgoAAIgKgBg");
	this.shape_280.setTransform(9.8,-69.9,1.285,1.285);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#030100").s().p("AASAsQgGgqgCgGQgIgcgUgLIAAAAQAkAOABBJIAAAAIgBAAg");
	this.shape_281.setTransform(17,-79.1,1.285,1.285);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#030100").s().p("AgIAEQgHgNACgQQABAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAQgEAdAdAVQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgOgHgHgQg");
	this.shape_282.setTransform(0,-63.6,1.285,1.285);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#030100").s().p("AhCAOIAAgBQAugEAWgFQAbgEAmgNQAAAAAAABQAAAAABAAQAAAAAAABQgBAAAAAAQhGAZg9AAIgCAAg");
	this.shape_283.setTransform(37.2,-74.3,1.285,1.285);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#030100").s().p("AgbAdQAZgpAegRQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgQAJgNARIgZAfIgBABIAAgBg");
	this.shape_284.setTransform(18.6,-104,1.285,1.285);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#030100").s().p("AgyB8QgLgIAGgSQACgIAGgJIAFgJQAKgTgGABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAdhpBEhHIABAAQg5BAgZBFIgMAkQgBAFABABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQADAGgNASQgIAOgCAIQgDAMAIAJQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgBAAIgBAAg");
	this.shape_285.setTransform(3,-110.7,1.285,1.285);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#030100").s().p("Ag/B3QANhDAhg9QAkhGAsgoIABABQgmAsgIAKQgQAXgSAhQggA8gOBDIAAABIgBgBg");
	this.shape_286.setTransform(2,-111.1,1.285,1.285);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#030100").s().p("AAHA2Qg9gVgugrIAAgCIACAAQAaAUAgAQQALAGAXAJQAIADADgBQADgCAGgHQAhgwAtgkQAEgCAEADQADADgEADQg0AtgiAzQgCADgDAAIgBAAg");
	this.shape_287.setTransform(-13.3,34,1.285,1.285);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#030100").s().p("AgJA9Qg+grgSg+QAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIACABQAcBAAyAgQAQgeAYgbQAhgpATgNQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQgBABAAAAQgIAKgOAQIgYAYQgXAbgXAlQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_288.setTransform(-18.8,13.8,1.285,1.285);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#030100").s().p("AgbAvQgcgtgCgvQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAHAuAWAmQAZgsA0goQADgDACAEQACADgDACQgnAegnA4IgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_289.setTransform(-14.9,-8.5,1.285,1.285);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#030100").s().p("AhLAPQAegaAsgEQAtgEAfAWQABABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgsgPgcABQgiAAgpAVIAAABIgBgCg");
	this.shape_290.setTransform(-38.4,-8.6,1.285,1.285);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#030100").s().p("AAmAVIgLgQQgHgHgIgFQgMgHgNABQgLAAgQAEQAAABgBgBQAAAAAAAAQAAAAAAgBQAAAAgBgBQAVgQAdAKQAfAKADAaQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBABIgCgBg");
	this.shape_291.setTransform(-53.7,-9,1.285,1.285);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#030100").s().p("AAUAlQgJgngkghQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQATAKANAVQAMAUAEAWQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_292.setTransform(-61.9,-16.4,1.285,1.285);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#030100").s().p("AArBIQgfgUgYgtIglhOQgBAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAQARARAbA2QAXAvAcASQAEADgCAEQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_293.setTransform(-31.1,-18.6,1.285,1.285);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#030100").s().p("AAuBFQhKg4gZhRIAAgBQArBPA+AzQAEACgDAEQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_294.setTransform(-33.2,-14.3,1.285,1.285);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#030100").s().p("AggBDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgjATgkQAQghAdgaQACgCADADQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQgcAagPAfQgHANgGATIgIAjQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_295.setTransform(-43.6,-13.1,1.285,1.285);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#030100").s().p("AgSBNQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgLghAOgtQALgnAXgiQACgDAFACQAEADgDADQgYAlgIAjQgDAOgCAXQgCAbgCAKQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_296.setTransform(-45.6,-14.4,1.285,1.285);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#030100").s().p("AhAA6QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAQAlhKBYgnQABAAAAAAQABgBAAABQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAQgBAAAAABQAAAAgBAAQhDAig7BNIgBABIgBgBg");
	this.shape_297.setTransform(-51.1,-17.1,1.285,1.285);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#030100").s().p("Ag2BIQAAgqAhgrQAegpAogSQADgBACADQABAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgtAdgWAfQgLAPgJAWIgQApQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_298.setTransform(-52.6,-18.8,1.285,1.285);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#030100").s().p("Ag7AgIAAgCQAQgQArgVIAcgPQARgIANgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIgBADQgKAGgTAIIgeANIgcAQQgSALgLAFIgBAAIgBAAg");
	this.shape_299.setTransform(-57.4,-25.3,1.285,1.285);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#030100").s().p("Ag4AtQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQASgcAfgYQAegYAggLQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgeAQQgRAJgKAJQgNAIgPAPIgZAaIgBABIgCgBg");
	this.shape_300.setTransform(-57.9,-26.9,1.285,1.285);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#030100").s().p("Ah4CJQgCgFAFgBQBigVBAhLQBAhJAJhlQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAABnhEBPQhCBPhmATIgBAAQgEAAgBgEg");
	this.shape_301.setTransform(61,27.3,1.285,1.285);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#030100").s().p("AA9DmIgCgCIAAgeQABgTgBgLQgDgegMgkQgJgagQgiIgcg4QgjhCgMglQgVg/ALgwQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQACBLAWA2QAKAZARAiIAdA4QAhBBALAvQAQBCgQAiIAAABIgBAAg");
	this.shape_302.setTransform(67.7,-13.4,1.285,1.285);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#030100").s().p("AgzEDQgBgFAEgCQAhgOAWgaQAXgbAIgiQAIgjgHgqQgFgfgQgrQgPgpgFgZQgIgkACghQAEhHAgg2IACgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQgSAwgGAfQgJArADAnQADAeASAxQAUA4AEAVQARBOgbA1QgaAxg3AYIgCAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAg");
	this.shape_303.setTransform(55.3,-8.7,1.285,1.285);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#030100").s().p("AgIABQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAIgCAIADQAEACgCADQgBAEgDAAQgHAAgHgFg");
	this.shape_304.setTransform(23.2,46.4,1.285,1.285);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#030100").s().p("AhdARQAAAAAAgBQgBAAABAAQAAAAAAgBQAAAAAAAAQAigZA3gGQAugEAwAKQAGABgCAGQgBAEgGgBQgugJgsAFQgSACgbAHIgrANIgBAAIgBgBg");
	this.shape_305.setTransform(-49.4,37.7,1.285,1.285);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#030100").s().p("AAbAGIgbgEQgJAAgTADIgbACIgCgBIABgBQAVgMAjgBQAkAAAUAMQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgKAAgSgDg");
	this.shape_306.setTransform(-54.5,39.5,1.285,1.285);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#030100").s().p("ABKAIIgZgDQgbgDgWAAIgxACQghACgQAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAigIBBAAIAyAAQAfACASAHQAEABgBADQAAADgEABIgFAAIgTgBg");
	this.shape_307.setTransform(-54.5,45.3,1.285,1.285);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#030100").s().p("AhhAZQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAngaA0gMQAvgLAzAEQAFAAAAAGQAAAGgFgBQhZgHhhAuIgBAAIgDgBg");
	this.shape_308.setTransform(-54.4,42.8,1.285,1.285);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#030100").s().p("AgDB4QgbghgNgoQgPgrAIglQAHgmAcgZQAcgbAlADQAEABAAAEQAAAEgEAAQgnAAgaAcQgZAbgCApQgCAfAPAkQAIASAYAsQACAEgDACIgCABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_309.setTransform(-36.8,21.1,1.285,1.285);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#030100").s().p("AgGAiQgjgBgYgIQgpgNAPgaIABgBIAAABQADAZAkAIQAYAGAjgDQAbgCAUgMQAWgNAIgXQACgGAFACQAGACgCAFQgKAegfAPQgZAOghAAIgDAAg");
	this.shape_310.setTransform(-31.4,44.5,1.285,1.285);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#030100").s().p("AglAfQgIgeAdgUQAdgWAaARQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgggDgRALQgLAHgFALQgDAIgEARIgBABIgCgBg");
	this.shape_311.setTransform(-39,40.7,1.285,1.285);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#030100").s().p("AgiCAQADhHAQg+QAKgqAHgXQANglAQgYQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgFATgPAqQgPAogEAWQgPA8gFBKQgBAFgEAAQgFAAAAgFg");
	this.shape_312.setTransform(-33.7,20.6,1.285,1.285);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#030100").s().p("ABAEYQhAgigkhFQgihBAAhNQABhQAlhWQAehFA5hPQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQg1BLgcBBQgkBRgDBKQgEBPAgBCQAiBIBCAjQAEACgDAEQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_313.setTransform(-22.2,9.5,1.285,1.285);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#030100").s().p("AAcDYQgzhigKhyQgKhwAhhrQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQg2DzBfC2QACAEgEACIgDABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_314.setTransform(-4.5,-0.2,1.285,1.285);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#030100").s().p("AhFAUIAAgCQAVgRAtgLQAwgOAXAGQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgMAEgXACQgYADgJACQgNACgVAIIghALIgBABIgBgBg");
	this.shape_315.setTransform(-19.6,52.8,1.285,1.285);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#030100").s().p("AhdAtQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAOgaAegVQAcgUAfgKQAdgKAXABQAlAAgFAbQAAABgBABQAAAAAAABQgBAAgBAAQAAAAgBAAQgEAAAAgDQgEgYgqAIQgaAFgdAOQgVAKgTAQQgMAJgXAYIgBAAIgCAAg");
	this.shape_316.setTransform(-16.5,49.7,1.285,1.285);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#030100").s().p("AhVBSQAAgBgBAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAQgWAZgSQASgMAegQQAagMAfgYIAJgIQANgJgIgNQACgOgMgBQgJgCgMADIgTAIIgBgBQAggdAXARQANAKgFAQQgEANgNALQgNAMgVAMIglASQg1AegZAiIgDABIgCAAg");
	this.shape_317.setTransform(-10,56.7,1.285,1.285);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#030100").s().p("AhBBOQgHghAug5QApg1AwgMQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgfASgNAJQgVAQgQASQgRATgMAZIgJAXQgEAPgGAHg");
	this.shape_318.setTransform(-12.7,57,1.285,1.285);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#030100").s().p("AgiBBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAGglARggQASgmAcgSQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgWAbQgNAQgGAMQgQAbgLApQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_319.setTransform(3.1,62.3,1.285,1.285);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#030100").s().p("AglBUQgNgrANgxQANg0AWgQQAKgIANABQAOABAGALQAHANgIAPQgHAMgNAJQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAIANgPQAJgKgDgGIgcgPQgIAGgGALQgMASgIAZQgMAmAFA6QAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgCgBg");
	this.shape_320.setTransform(3.3,59.8,1.285,1.285);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#030100").s().p("AgPgCIAAgCIACgBIALADIAOABQAEAAAAADQAAAEgEAAQgTgBgIgHg");
	this.shape_321.setTransform(-2.1,55.6,1.285,1.285);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#030100").s().p("AgmARQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAdgFAJgEQANgEAagQIACAAIAAACQgNARgXAJQgPAHgPAAIgNgBg");
	this.shape_322.setTransform(11.3,54.2,1.285,1.285);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#030100").s().p("AA7CfQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAZgtAIgWQAMglgKgkQgVhUgpgwQgQgSgPgJQgXgMgRAKQgWAOgQA6QgIAcgEAtQgFA6gCAPQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgFguAHgvQAHgyASgoQAKgWAGgJQANgQAQgCQAYgCAbAXQAxAoAeBtQALAngMAmQgKAfgbAnIgCACIgBgBg");
	this.shape_323.setTransform(12.4,29.1,1.285,1.285);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#030100").s().p("Ag1AgIAAgCQAOgYAggSQAhgUAbABIACABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgdALQgSAHgJAGQgLAFgOAMIgYAUIgBAAIgBAAg");
	this.shape_324.setTransform(-2.3,40.9,1.285,1.285);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#030100").s().p("AgqBEIABgCIAegbQAPgQAKgPQAJgOAGgWIAKgnIABgBQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAQAHAmgaArQgaAsgkALIgBAAIgCgBg");
	this.shape_325.setTransform(43.5,44.1,1.285,1.285);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#030100").s().p("AgZBEQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAWg1IAMgcIALgYQAGgUgNgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAOgFADANQACALgFAMQgaBEgUAiIgCACIgBgBg");
	this.shape_326.setTransform(35.3,57.7,1.285,1.285);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#030100").s().p("AgVBDQgIgdAKg1QAMg/AfANQAAABABAAQAAAAAAABQAAAAAAAAQABABgBAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgSABgIAYQgFAMgEAbIgDAfQgCAVgCALIAAABIgCgBg");
	this.shape_327.setTransform(34.6,57.6,1.285,1.285);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#030100").s().p("AgIADQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAFgBAKgBQAEABAAADQAAAEgEAAQgKAAgFgBg");
	this.shape_328.setTransform(31.8,53.1,1.285,1.285);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#030100").s().p("Ag0AYQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAGgPAcgIIAlgJQAWgFAOgIIAAABQgJAKgNAGQgIAEgSACQgTAEgJADQgHACgJAGIgNAJIgBAAIAAAAg");
	this.shape_329.setTransform(20.4,53.8,1.285,1.285);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#030100").s().p("AgtA5QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgVAbgeIAegbQAUgSADgPQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAABABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAFAOgNANQgIAHgQAMQgNALgPAVIgcAiIgBAAIgBAAg");
	this.shape_330.setTransform(26.4,57,1.285,1.285);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#030100").s().p("AgtA+QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQABgcARghQARggAWgUQAHgGAIgCQAKgCAGAGQAFAFAAAGQAAAGgGAEIgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQgSgQgJAMIgGAHIgLARQgGAJgIAOQgFAKgHASIgMAcIgBABIgBAAg");
	this.shape_331.setTransform(26.4,56.6,1.285,1.285);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#030100").s().p("Ag2AiQAHgXAUgRQASgRAXgIQAZgIAKAKQAFAEABAGQAAAGgEAFQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAEgSgTACQgMABgOAGQgMAGgLAJQgRANgSAbIgBABIAAgCg");
	this.shape_332.setTransform(20.6,52.1,1.285,1.285);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#030100").s().p("AAwCXQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAjhPAAhJQAAgugMgfQgQgrgkgMQgqgPgeAsQgWAigFAvQgDAeAGAtQAJA/ABANQAAAAAAABQAAABgBAAQAAAAAAABQgBAAgBAAQgDAAgBgCQgPgtgDgyQgDg0ALgrQALgoAZgYQAegdAlAKQAkAJATAnQAPAeAEAsQAIBfgyBQIgCABIgBAAg");
	this.shape_333.setTransform(37.9,28.1,1.285,1.285);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#030100").s().p("Ag1ARQgEgDADgDQAhglBMAKQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgsAEgLADQgcAHgTASIgDACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_334.setTransform(29.2,45.9,1.285,1.285);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#030100").s().p("ABAAqQgcgUglgWIhEglQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQBAAVBIA2QADADgCAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_335.setTransform(22.6,8,1.285,1.285);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#030100").s().p("AAKAmQgPgcgHgsQgBgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAABABQARAqAEAfQAAAAgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape_336.setTransform(13.2,2.2,1.285,1.285);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#030100").s().p("AAHBnQgehsAMhiQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQgBBzAWBZQABAEgEABIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_337.setTransform(9,-21,1.285,1.285);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#030100").s().p("AgEAwQgQgUAIgeQAHgfATgPIACAAIAAABQgQAZgEASQgDAKACAPIAFAZQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgCAAIgBgBg");
	this.shape_338.setTransform(43.6,-23.2,1.285,1.285);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#030100").s().p("AgjAgQgRgcAjgWQAhgXAZAQQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAABQgHACgRAAQgPAAgIAFQgXALgCAhIgCACIgBgBg");
	this.shape_339.setTransform(38.4,-13.6,1.285,1.285);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#030100").s().p("AhDAVIAAgCQAXgcAngJQAlgIAiAPQAEACgCAEQgCAEgEgBQhHgZg4AwIgBABIgBgBg");
	this.shape_340.setTransform(24.6,-9.4,1.285,1.285);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#030100").s().p("AAzA6IgUggQgMgTgKgKQgUgXgmgXQgEgCACgEQADgEAEACQAjAQAbAfQAfAhAEAiIgBABIgBAAg");
	this.shape_341.setTransform(26.8,-16.5,1.285,1.285);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#030100").s().p("AhBBWQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAbAIAbgaQAQgQAUgiQAZgrAHg5QABgEAEAAQAFgBAAAFQgGBGgpA3QgmA0geAAQgKAAgIgFg");
	this.shape_342.setTransform(13.4,-11.2,1.285,1.285);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#030100").s().p("AAmBEQgOgugRgaQgIgPgPgRIgbgdQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAgATAXApQAXAkAGAoQABAEgEABIgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_343.setTransform(28.4,-17.7,1.285,1.285);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#030100").s().p("ABPAmQgLgGgagSQgXgPgPgGQgQgIgagFIgqgKQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAigDA1AYQA4AXATAbQAAAAAAABQABAAAAABQAAAAgBAAQAAABgBAAIgCABIgBAAg");
	this.shape_344.setTransform(32.8,-21.6,1.285,1.285);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#030100").s().p("ABOA5IgegmQgSgTgTgNQgRgMgagKIgugOQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAQAtgBAxAjQAyAiAPArQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAIgCAAg");
	this.shape_345.setTransform(33,-24.1,1.285,1.285);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#030100").s().p("AAwAHQgcgJgMgCQgXgGgZADQgKABgNAEIgXAHQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAbgXA6AHQA/AIAfAYQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCABQgOgBgagKg");
	this.shape_346.setTransform(34.2,-31.4,1.285,1.285);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#030100").s().p("ABYAdQhMhBhnATIgCgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAvgRAzANQA0ANAjAjQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABIgDABIgCgBg");
	this.shape_347.setTransform(34,-32.8,1.285,1.285);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#030100").s().p("AhLCPQgLgKAFgNQAFgMAMgIIAZgQQAMgJAIgLQAMgUAGggQAHg9AKgfQATg4AtgGQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgrARgPAxQgIAdgJA9QgIAkgSAVQgHAJggASQgaAUAMAQIAAACIgBAAIgBAAg");
	this.shape_348.setTransform(14.7,-18.4,1.285,1.285);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#030100").s().p("AkHBgQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAABAAQAAAAABgBQAAAAABABIApAKQAaAHAQADQAuAHAqgBQBZgBBKgjQBEggAxg2QAZgcARgfQAGgKAJgVQAIgVAGgKQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAQgBAPgHAUIgQAfQgSAhgaAdQg0A5hGAgQhMAjhaABIgGAAQhnAAhAggg");
	this.shape_349.setTransform(-8.6,-41.4,1.285,1.285);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#030100").s().p("AgNAXQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIADgNIADgPQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAUIAIgLIAIgUQABgDAEAAQADABAAADQgCAXgXATIgCABIgCgBg");
	this.shape_350.setTransform(9.9,-40.8,1.285,1.285);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#030100").s().p("AgHAbQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgHgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAIAdQAEgIADgHIAHgXQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABABABAAQAAAAABABQAAAAAAABQABAAAAABQACAWgWAbIgDACIgBgBg");
	this.shape_351.setTransform(5,-37.6,1.285,1.285);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#030100").s().p("AACAcQgRglgDgLQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIABABQAGAIANAaIAIgnQABgEAEABQAEABgBAEQgEAcgGAXQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_352.setTransform(-9.6,-34.1,1.285,1.285);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#030100").s().p("AAQAgIAAgBIgSgUQgMgMgGgKQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAIACgBQAKAHAJAMIANAOQgDgUAAgcQABgEAEAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAABIAAAdIADAdQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBABIgBAAIgCgBg");
	this.shape_353.setTransform(-44.3,-27.5,1.285,1.285);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#030100").s().p("AgjATQgJgNAJgLQAHgLAPgCQAPgDAPAHQAQAIAHANQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAgBQgTgQgPgEQgQgEgNAIQgQAIAIARQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIAAAAIgCgBg");
	this.shape_354.setTransform(-49.7,-44.8,1.285,1.285);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#030100").s().p("AAnAjQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAHgVgEgPQgGgSgWgEQglgHgYATQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAKgQAcgCQAZgCARAKQAQAJADAUQAAAIgCALIgBAEIACgIQAFgRgCgLIABgBQAHAZgRAVIgBABIgBgBg");
	this.shape_355.setTransform(-17,-51,1.285,1.285);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#030100").s().p("AgLBqQgzgCgfgfQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABIAoAPQAYAKASABQAUABATgIQAVgIAMgQQAagggIgwQgDgZgWg5QgCgEAFgCQAFgCACAEQAXA1AEAmQAGA2gfAhQgcAegwAAIgEAAg");
	this.shape_356.setTransform(8.7,-71.5,1.285,1.285);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#030100").s().p("Ah2BdQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQAPAMAOgJQANgIAGgRQACgGAEgdQADgbAFgPQANgrAhgaQAcgYAmAAQAqgBATAfIAAACIgCABQg3gmgxAaQguAZgPA+QgDAOgCAeQgEAagNANQgKALgOABIgCAAQgMAAgKgJg");
	this.shape_357.setTransform(5.7,-73,1.285,1.285);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#030100").s().p("AgHAEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAGgEIAGgBQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIgFAEIgHADIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_358.setTransform(46.2,-75.7,1.285,1.285);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#030100").s().p("AhIAlQAAgBAAgBQgBAAABgBQAAAAAAgBQABAAAAgBQAOgKAWgLIAlgRIAigSQAUgLAPgDIACABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgMALgWALIgkAQIgiAUQgWALgPAFIgCAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_359.setTransform(37.2,-70.7,1.285,1.285);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#030100").s().p("AhIAGIgCgBIABgCQAUgFAxgCQA4gDATABQAEABAAADQAAACgEABQgPACgVAAIgjABIgkADIgOAAQgNAAgJgBg");
	this.shape_360.setTransform(37.7,-75.7,1.285,1.285);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#030100").s().p("AAMAwQgEgBACgEQAPgoAIgnIggARQgWANgRAGQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAOgKAYgMIAmgVQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgJAxgPAnQgBADgDAAIgCAAg");
	this.shape_361.setTransform(17.5,-102.4,1.285,1.285);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#030100").s().p("AkxErQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAqgeBAgOQAogKBLgIQCQgPA/gXQBwgpAoheQAUgvAAgyQABg0gSgvQgSgwglgoQgcgggxgmQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAAAgBQABAAABAAQAAABABAAQAvAXAnAuQAkAtATA0QARAvgBA0QgCAygUAvQgnBchkArQgsASg6ALQgkAGhFAIQhLAHgwALQhBAOg0AbIgCABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_362.setTransform(-10.2,-66.6,1.285,1.285);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#030100").s().p("AAGAlQgFgFgBgKIgCgSQgFgagBgMQgBgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAEASAEAWIAEAQQACAJgCAGIgCACIgBgBg");
	this.shape_363.setTransform(-32,-104.7,1.285,1.285);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#030100").s().p("AgTA3QgEgBAAgEQAQhDAcglQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIgWA0QgLAcgGAYQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCAAg");
	this.shape_364.setTransform(-35.8,-102.2,1.285,1.285);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#030100").s().p("AAGBtQgegxgBhBQAAhLAvgdQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQgoApAAA2QgBAXALAkQANAsACAPQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgCgBg");
	this.shape_365.setTransform(-56.9,-64.6,1.285,1.285);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#030100").s().p("AAeDUQgzh4gLhcQgPh9A5hWQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQgyBVAMB1QAFAvASA+QALAjAZBHQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_366.setTransform(-53.2,-55,1.285,1.285);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#030100").s().p("AiVBFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQA7g8BNghQBKgjBVgGQAEgBAAAFQAAAFgEAAQhRAGhLAiQhLAgg9A4IgBAAIgCAAg");
	this.shape_367.setTransform(-24.3,-99.9,1.285,1.285);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#030100").s().p("AAEB8QgDAAgBgEQAAgDADgCQAogKABgnQAAgfgXgkQgyhNgYgpQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQARAYApBAIAWAhQAMAUAGAQQAJAdgLAdQgMAfgdAAIgDAAg");
	this.shape_368.setTransform(-48.6,-93.7,1.285,1.285);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#030100").s().p("AgTAUQgThpAIgkIABgBIABABQAEATACAnQACAmADATQAFAbAHAaIAKApQALAcAPABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgDACgEAAQgbAAgRhng");
	this.shape_369.setTransform(-51.4,-93.3,1.285,1.285);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#030100").s().p("AhJBvIAAgCQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAwATAfgTQAdgSAOgxQAJgkAEguQADgeABg3QAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQgBBAgGA2QgDAdgDAOQgFAYgJARQgRAjgjANQgOAFgLAAQgYAAgTgSg");
	this.shape_370.setTransform(1.2,-110.7,1.285,1.285);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#030100").s().p("Ag+B7QgVgIAMgiQANgjAWgnQAphIBEg5QAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABgBAAQAAAAAAAAQAAABAAAAQg0AxgkA4QgSAcgPAdQgPAegDAHQgIAZAMAMQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_371.setTransform(0.6,-111.5,1.285,1.285);

	this.instance_5 = new lib.Group_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.4,-28.2,1.285,1.285,0,0,0,54.7,75.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#5D8918").s().p("AiaCCQgFgFADgKQADgKAHgDQAmgLAUgyQAGgQAFgZIAIgrQALg1AZgZQAdgcBGAUQAoAMA0AkQgzgRg2gLQgWgFgOABQgVACgLANQAvAKApAeQAoAeAZAqQhFg/hagNQAdAUAZArQAMAVAVA4QgehIhDgmQgXBqgyAwQgMAMgMADIgJABQgLAAgGgIg");
	this.shape_372.setTransform(25.6,-18.6,1.285,1.285);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#772B11").s().p("AhJgjQAFgbADgIQAGgUAMgKQAVgVAtAEQAgADAfALQAhALAZAQIgUAZQgQAhAPAlQgQgEgSAFQgkAJgGAqQgMgNgdgBQg5gChUBAQAxhCARhYg");
	this.shape_373.setTransform(28,-19.2,1.285,1.285);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#D9E38C").s().p("AgMB1Qgqh0AEh5QANASAWAkIAiA1QAXAiAFARQALAhgRAYQgKANgPAIQgKAFgGAAQgHAAgFgEg");
	this.shape_374.setTransform(-48.5,-93.7,1.285,1.285);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#D9E38C").s().p("Ag1B4QgXgIAEgNQARhCAlg5QAlg6A1gsQAHBQgWBWQgIAjgPAVQgUAdgeABIgEABQgRAAgQgHg");
	this.shape_375.setTransform(0.9,-111,1.285,1.285);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#0C0B00").s().p("AACAPIgPhhIADAHIAJARIAIAaIAGAfIABAPQABAIgBAHIgCAcIgHAag");
	this.shape_376.setTransform(10.2,-71.3,1.285,1.285);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F6C310").s().p("AgQBmQgIgBhAgVQACg5ALghQAQgxAkgZQATgNAXgEQAYgDAUAJQAYA+ACAgQAEA1gnAgQgZATgdAAIgQgBg");
	this.shape_377.setTransform(8.7,-72.1,1.285,1.285);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#0C0B00").s().p("AgdAZQgCgCAFgJIAGgMQAJgRAKgHQAGgFAIABQAJABAFAFQAFAGgBAJQgBAHgFAGQgJALgSADIgOAEIgIABQgEAAgBgCg");
	this.shape_378.setTransform(-17.8,-47.7,1.285,1.285);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#0C0B00").s().p("AAAASQgNgDgHgLQgDgFAAgGQABgHAEgFQAEgDASASQATASABAFIgLABQgGAAgHgCg");
	this.shape_379.setTransform(-50,-41.8,1.285,1.285);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#5EA231").s().p("AkyDWQgRg2gHguQgRhzArhUQAthYBphBQBng/BkgHQBEgFBEAiQBCAiAnA6QAoA8AFBMQAEBKghBBQgYAugtAjQgqAgg2ARQgtAPg9AIIhqAMQg7AGgtAMQg1APgsAYQgXg9gLgjg");
	this.shape_380.setTransform(-14.1,-67.9,1.285,1.285);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#772B11").s().p("AgWAAQAGgrAPgPQAHgJAKACQAKACgBANQAAAGgFALIgrBjQgCgqADgYg");
	this.shape_381.setTransform(35.2,57.9,1.285,1.285);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#772B11").s().p("AgVgCQAKgaAHgKQAGgKAMgGQAOgIAJAEQANAFgGANQgDAJgLAIQgsAjgfAxg");
	this.shape_382.setTransform(26.4,56.7,1.285,1.285);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#772B11").s().p("AgCgVQAQgJARgDQAXgDgDAWQgCAMgRAGIgbAGQggAFgXATQANgiAjgVg");
	this.shape_383.setTransform(20.5,52.1,1.285,1.285);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#772B11").s().p("AgkgCQAEgVAJgTQALgXAPgLQARgLANAOQANANgLASQgDAGgRARQgqArgKA6QgFg3AGgdg");
	this.shape_384.setTransform(3.6,59.7,1.285,1.285);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#772B11").s().p("AgegXQAoguAtgHQAagFAEATQAEARgTAQQgQANgYANIgqAVQg1AcgUAgQAWhAAhglg");
	this.shape_385.setTransform(-10.1,56.9,1.285,1.285);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#772B11").s().p("AgQgVQAtgXAwAEQAGABAFALQAEALgCAHQgEAKgOAEQgGACgTABQhNADg7AfQAbgpAugVg");
	this.shape_386.setTransform(-16.7,49.8,1.285,1.285);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#5EA231").s().p("AhFCpQgQAAgIgFQgOgGACgNQAAgIAJgHQANgPAdgNQgIgugEg3QgEhBAPgnQAKgaAUgSQAVgTAYgDQAWgCAVAUQARARALAaQAdBDgZBnQgRBLgqAVQgTAKglABIgVABIgcgBg");
	this.shape_387.setTransform(35.6,31.1,1.285,1.285);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#5EA231").s().p("AgTC2QgkgBg0gMQgfgIgFgQQgGgQAUgXQAhgmArgdQgEhKAkhuQAMgiASgBQAggEAeAhQAXAZASApQAUAsAGAXQALAlgGAfQgIAlgUAdQgVAggfAQQghASgsAAIgFAAg");
	this.shape_388.setTransform(6.6,32.7,1.285,1.285);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#F6C310").s().p("AgagMQgJgwAKgeQAGgUAOgOQAOgQASgDQgFCYAJCHQgrhIgOhUg");
	this.shape_389.setTransform(-55.4,-60.4,1.285,1.285);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgUgRQAFgIAMgGQALgHAIACQgCAiAHAoQgcgWgNghg");
	this.shape_390.setTransform(-44.7,-28.9,1.285,1.285);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgLgQIAXgIQABAbgYAWg");
	this.shape_391.setTransform(10.2,-41.9,1.285,1.285);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgRgdIAjAAIgJA8QgagZAAgjg");
	this.shape_392.setTransform(-9.9,-34.9,1.285,1.285);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgQgVQAXgCAKgGQgCAdgUAeg");
	this.shape_393.setTransform(5.1,-38.7,1.285,1.285);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#DAD32B").s().p("AkcB+QAnggA3gRQArgOA/gHQBXgKAVgEQA9gKArgWQA1gZArgwQAtgzAOg2QAHA+gYA/QgXA8guAvQgtAsg9AbQg7AahBAGQgVACgWAAQhlAAhrgrg");
	this.shape_394.setTransform(-10.5,-47.3,1.285,1.285);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#D9E38C").s().p("AgZBDQgFgHABgLIADgTQANg3AcgyQABAOAGAWIAHAkQAHAtgXAXQgJAJgJABIgDABQgKAAgHgJg");
	this.shape_395.setTransform(-34.8,-99.4,1.285,1.285);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#D9E38C").s().p("AgdA6QgOgEgHgMQgHgNAGgNQASgkBYgnIgKA1QgHAegQASQgKALgNAEQgIADgIAAQgGAAgGgCg");
	this.shape_396.setTransform(15.2,-100.1,1.285,1.285);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#D9E38C").s().p("AhTApQgHgDgCgKQgCgIAEgKQAGgSAEgHQAHgNAMgDQBMgPBPAIIhPAmIhOAlQgJAFgGAAIgFgBg");
	this.shape_397.setTransform(34.5,-70.6,1.285,1.285);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#5D8918").s().p("AiyEnQg4goglhFQghg9gNhLQgOhOAEhQQAEhbAahFQAxgIAugDQgGB+A1CcQCRAyBVB5QBAgKAmgwQATgXAJgeQAJgegCgeQgCgbgOgoIgXhDQgQg3AHg7QAHg6AbgzQgIAvARA2QAMAmAfA6QApBNAIARQAZA2AEAsQAGA6gYA7QgXA4gtArQgoAmg6AYQgvAThDAMIg1ALQhbgOhAgug");
	this.shape_398.setTransform(33.8,2.8,1.285,1.285);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DAD32B").s().p("AAfE9QhEgHg6gdQhAgfgkg0Qglg3gGhKQgFhDAWhFQASg7AnhCQAXgoA0hNIA4gKQgaBFgEBbQgEBQAOBPQANBKAhA9QAkBFA4AoQBAAuBbAOQhcAQhEAAQgaAAgXgDg");
	this.shape_399.setTransform(-0.1,9.3,1.285,1.285);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#5D8918").s().p("ACABrQg+ghgyhgQgZAZgRAjQgRAigFAmQAFg4AHgbQAMgxAYgbQhVAlgxBOQANgvAfgnQAfgnAsgWQgPgKgUAEQgNACgWALQgzAagrAcQAqgxAjgVQA/gmAkAUQAeASAYAwIATAnQALAXAKAOQAgArAoAAQAHABAGAJQAGAJgDAGQgHAOgRAAQgOAAgNgJg");
	this.shape_400.setTransform(-41.9,-18.6,1.285,1.285);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#772B11").s().p("AhRA8QgSAAgPAIQAFgpgZgbIgZgSQAoguBCgZQAqgQAZAOQAOAHALASIASAgQAoBQA/AzQhggog5ARQgaAIgJARQgQgnglAAg");
	this.shape_401.setTransform(-44.3,-18.8,1.285,1.285);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#5EA231").s().p("Ag0CwQgRgCgKgFQgOgIgCgNQgBgOAPgRQAOgRARgDQADiTBHiBQAtB4AYCAQAHAjgNAdQgQAhgfAKQgLADgWABQghAAgagEg");
	this.shape_402.setTransform(-31.3,25,1.285,1.285);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#5D8918").s().p("AgdBXQgZgfgMglQgSg4ATgsQALgYAVgQQAXgQAYAAQAKAAAaAHQAbA4gBBDQgCBAgbA7QgIASgKAEQghgUgZgfg");
	this.shape_403.setTransform(-33.6,23.8,1.285,1.285);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#772B11").s().p("AA/AUQhdgehNARQALgDAYgJQAYgKAOgCQAogIApAEIAgAFQAUAFAGALQAKAQgUAFQgHACgHAAQgJAAgJgDg");
	this.shape_404.setTransform(-47.9,39.5,1.285,1.285);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#772B11").s().p("AgSgPQASgCAmgBQAmgBASgDQAZgDADAVQACATgYAGQgHABgKAAIgRgCQhdgOheARQApgdA+gJg");
	this.shape_405.setTransform(-50.8,42.7,1.285,1.285);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#828634").s().p("AAKACIgKAAIgSABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAIgDAMAAIAKACIAKADIAAACIgBABg");
	this.shape_406.setTransform(17.5,-31.9,1.669,1.669);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#828634").s().p("AgVADIABgBIAKgEIAKgCQANAAAHAEIABACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgTgBIgJABIgKABIAAABIgCgCg");
	this.shape_407.setTransform(-20.2,-32.3,1.669,1.669);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#828634").s().p("AgEAWQgCgKABgMQACgMAFgIQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgEAHgCALIgCAUIgBABg");
	this.shape_408.setTransform(-25.9,-12.8,1.669,1.669);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#828634").s().p("AAEAWIgBgBIgDgUQgBgLgEgHQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAABQABAAAAAAQAFAIACAMQABAMgDAKg");
	this.shape_409.setTransform(24.1,-12.8,1.669,1.669);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#A0AC46").s().p("AgBANQgGgBgDgGQgDgFABgFQABgFAFgDQAEgCAFACQAFABADAGQADAFgBAFQgBAFgFADIgFABIgDgBg");
	this.shape_410.setTransform(-8.4,-17.9,1.669,1.669);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#A0AC46").s().p("AgBANQgGgCgDgFQgDgFABgFQABgFAFgDQAEgCAEACQAGACADAFQADAFgBAFQgBAFgFADIgFABIgDgBg");
	this.shape_411.setTransform(-14.5,-10.3,1.669,1.669);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#A0AC46").s().p("AgCAOQgFgCgEgFQgDgGABgFQABgGAFgDQAFgCAFACQAFACADAFQAEAGgBAFQgBAGgFADIgGABIgEgBg");
	this.shape_412.setTransform(-16,-20.2,1.669,1.669);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#A0AC46").s().p("AgGANQgFgDgBgFQgBgFADgFQADgGAGgBQAEgCAEACQAFADABAFQABAFgDAFQgDAGgGABIgDABIgFgBg");
	this.shape_413.setTransform(6.1,-19.4,1.669,1.669);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#A0AC46").s().p("AgGAMQgFgCgBgFQgBgFADgFQADgGAGgBQAEgCAEACQAFADABAFQABAEgDAGQgDAFgFACIgDABQgDAAgDgCg");
	this.shape_414.setTransform(12.2,-11.8,1.669,1.669);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#A0AC46").s().p("AgHAOQgFgDgBgGQgBgFADgGQAEgFAFgCQAFgCAFACQAFADABAGQABAFgEAGQgDAFgFACIgEABIgGgBg");
	this.shape_415.setTransform(13.7,-21.7,1.669,1.669);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#DFC598").s().p("AgOAdIgEgCIgDgEQgDgEAAgKIAAgJIABgFIABgCQAFgJAEgNIAFABQAKgBAJAGQAJAFAFAJQgCAJgGAJQgJAKgFAEQgGAHgIAAIgDgBg");
	this.shape_416.setTransform(-18.2,15,1.669,1.669);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#ECD0A4").s().p("AgWAaQgFgDAAgGIACgGIAIgRIAEgKIADgJQAFgDAHABQAMACAKAKIAEADQgEAMgFAJIgCADQgIAJgJAEQgIADgGAAQgEAAgEgCg");
	this.shape_417.setTransform(-25.1,12.2,1.669,1.669);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#ECD0A4").s().p("AgOAZQgGgBgCgGQgCgFACgGIACgLIAAgBQAGgJADgJQAJgCAKADQAJADAHAHQABABgGALIgJAKQgEAGgGADQgHAFgFABg");
	this.shape_418.setTransform(-11.8,17.4,1.669,1.669);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#828634").s().p("AgJArIgBgCQAMgngCgmQAAgGAFgBQAGAAAAAGIAAABQAAAUgGAUQgEATgIAUIgBABIgBgBg");
	this.shape_419.setTransform(-18.9,3,1.669,1.669);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#828634").s().p("AgNAsIALgqIADgVQACgLgBgJQAAgGAGgBQAFAAABAGIAAAAIgDAXIgGAVQgGAWgIATQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_420.setTransform(-11.9,5.9,1.669,1.669);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#ADBC50").s().p("ABRCtQgLgDgJACIgngUIgEgDQgKgKgLgBQgIgBgGACQAEgQACgNIAAgDIgCgFQgKgVAIghIACgGQABgEgBgBIgKgBIgUgDQgagEgJgDQgUgGgMgKQgVgRABgcQAAgYAPgbQAlhBAegVQAZgRAXAJQAZAKAAAdQAAAfALAHQAHAFAgAKQAnARAJAdQANAvgHA6QgGAtgTA6IgHASQgHgHgJgEg");
	this.shape_421.setTransform(-24.1,-15.4,1.669,1.669);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#828634").s().p("AAGArQgGgRgGgXQgEgSgBgWQgBgFAHgBQAFAAAAAGIAAAAQAAAWACARQADAUAGASIABAAQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_422.setTransform(17.3,3.2,1.669,1.669);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#828634").s().p("AAKAtQgIgTgGgWIgGgVQgDgRAAgGQAAgGAFAAQAGAAAAAGIAAABQAAAGACAOIADAVIALAqQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBABIgCgCg");
	this.shape_423.setTransform(10.2,5.9,1.669,1.669);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#DFC598").s().p("AgDAXIgNgOQgGgJgCgJQAEgJAKgFQAJgGAJABIAGgBQAEANAFAJIABACIABAFIAAAJQAAAJgDAFIgDAEIgFACIgDABQgHAAgHgHg");
	this.shape_424.setTransform(16.5,15,1.669,1.669);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#ADBC50").s().p("AhnCmQgTg6gGgtQgHg6ANgvQAIgdAngRQAUgIAUgHQALgHAAgfQAAgdAYgKQAYgJAZARQAdAUAlBCQAPAbABAYQABAcgVARQgLAKgVAGQgJADgaAEIgUADIgKABQgBABABAEIACAGQAIAhgKAVIgCAFIAAADQACANAEAQQgHgCgHABQgLABgKAKIgEADIgnAUQgVgEgQAQg");
	this.shape_425.setTransform(22.4,-15.4,1.669,1.669);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#1E120D").p("AgSALQAEgJAKgEQAIgGAKABQAFAAABgB");
	this.shape_426.setTransform(15.5,11.5,1.669,1.669);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#ECD0A4").s().p("AABAZQgJgEgHgJIgDgDQgFgJgEgMIAEgDQAKgKAMgCQAGAAAHACQAAAAACAJIADAKIAJARIACAGQAAAGgFADQgEACgEAAQgGAAgIgDg");
	this.shape_427.setTransform(23.5,12.3,1.669,1.669);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#ECD0A4").s().p("AANAZQgEgBgJgFQgFgEgEgFQgEgEgEgGQgHgLABgBQAQgQAUAFQACAJAGAJIAAABQACADABAIQADAQgMACg");
	this.shape_428.setTransform(10.2,17.4,1.669,1.669);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_429.setTransform(6.2,-120.2,1.669,1.669);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_430.setTransform(-10.6,-120.2,1.669,1.669);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#4F4F5E").s().p("AgHAJQgDgEAAgFQAAgEADgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAGgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_431.setTransform(-10.7,-119.3,1.669,1.669);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#4F4F5E").s().p("AgHAJQgDgDgBgGQABgEADgEQADgEAEAAQAFAAADAEQAEAEAAAEQAAAGgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_432.setTransform(6.2,-119.3,1.669,1.669);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#828634").s().p("AAJAkQgIgDgMgKIgMgKQgVgSgIgaQgCgFADgCQACgCAFADIAOAIQAKAFAZAEQAYAFAKAHQAKAIAEAKQACAGgDAGQgDAFgIAHIgIAEIgJACQgHAAgIgEg");
	this.shape_433.setTransform(-25.4,-135.9,1.669,1.669);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#C7CB62").s().p("AAJA9QgJgGgVgSIgRgRQgfgggJgrQgCgIAEgDQAEgCAHAGIAVAOQAOAIAoALQAlAKAPAOQAOALADAOQADAPgLAOQgMAPgRADIgIAAQgMAAgNgGg");
	this.shape_434.setTransform(-28.3,-138.5,1.669,1.669);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#828634").s().p("AgVAvIgKgDQgNgHgCgNQgCgJALgNQAKgKAVgIQAZgKAHgGIAMgLQAFgDACAAQADABAAAGQgDAcgRAWIgKAMQgMANgFAEQgJAHgKAAIgDAAg");
	this.shape_435.setTransform(20.5,-137.1,1.669,1.669);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#C7CB62").s().p("AgbBOQgKAAgFgCQgTgJgFgMIgCgKQgCgSAMgRQANgQAhgRIAZgNQAPgIAJgJIARgSQAHgHAEABQAFACgBAJQgBAsgWAlIgOAUQgNAUgMAJQgPAOgSAAIgBAAg");
	this.shape_436.setTransform(22.7,-140.4,1.669,1.669);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#DFC598").s().p("AgfgNQAUgLAVgDIAIALQAGAIAIAOQgZADgdATg");
	this.shape_437.setTransform(-15.6,-151.9,1.669,1.669);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#B01016").s().p("AgkgHQAegTAZgDQAKATAIATQgOAAgOAFQgOAGgQAJQgJgTgGgRg");
	this.shape_438.setTransform(-13.4,-145.8,1.669,1.669);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#B01016").s().p("AgEgRQAIAAAIALIAKAKQgWADgUAMQgEglAUABg");
	this.shape_439.setTransform(-17.5,-157.2,1.669,1.669);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DFC598").s().p("AgPATQgJgFgGgOIgCgDQAQgJAPgGQAOgFANAAIAFAPQAGAQgTALQgKAFgIAAQgHAAgIgFg");
	this.shape_440.setTransform(-11.7,-140.3,1.669,1.669);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#DFC598").s().p("AgfAGQAIgOAGgJIAIgKQAVADAUALIgJApQgbgTgbgDg");
	this.shape_441.setTransform(10.2,-152.7,1.669,1.669);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B01016").s().p("AgIAPQgNgFgPgBQAIgTAKgTQAaADAdAUQgGAQgJAUQgUgMgKgDg");
	this.shape_442.setTransform(7.9,-146.8,1.669,1.669);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#B01016").s().p("AgVAEIAKgKQAIgLAIAAQAUgBgEAlQgUgMgWgDg");
	this.shape_443.setTransform(12,-158.1,1.669,1.669);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#DFC598").s().p("AgRATQgTgLAGgQIAFgPQAOABANAFQALADAUALIgCADQgGAOgJAFQgIAFgIAAQgHAAgKgFg");
	this.shape_444.setTransform(6.2,-141.2,1.669,1.669);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgRAVQgIgIAAgNQAAgMAIgIQAHgJAKAAQALAAAHAJQAIAIAAAMQAAAMgIAJQgHAJgLAAQgKAAgHgJg");
	this.shape_445.setTransform(-11.9,-120.2,1.669,1.669);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgMAIgIQAIgJAJAAQALAAAHAJQAIAIAAAMQAAANgIAIQgHAJgLAAQgJAAgIgJg");
	this.shape_446.setTransform(7.8,-120.2,1.669,1.669);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#828634").s().p("AgUASQgEgBABgFQADgMAKgIQAKgJANgBIABAAQAEgBADADQADACAAAEQABAJgJABIgCAAQgIAAgHADQgJAFgDAIQgCADgDAAIgCgBg");
	this.shape_447.setTransform(-13.9,-127.2,1.669,1.669);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#828634").s().p("AAOAQQgDgIgJgFQgHgDgIAAQgEAAgDgBQgDgDAAgEQgBgDADgEQACgDAEAAIADAAQAMABALAJQAKAIADAMQABAFgFACIgBAAQgDAAgCgDg");
	this.shape_448.setTransform(10.1,-127.2,1.669,1.669);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#828634").s().p("AgLAWQgIgFgDgLQgDgLAFgJQAGgLAMAAQAOAAAIANIADAJQACAJgDAIQgEAIgKADIgHABQgGAAgGgEg");
	this.shape_449.setTransform(-13.6,-94.2,1.669,1.669);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#C7CB62").s().p("AgWAuQgSgLgGgXQgHgXAMgUQAMgVAYAAQANgBAMAIQANAHAIAMQAFAIADAMQAEASgIAQQgJASgTAFQgIACgHAAQgNAAgLgHg");
	this.shape_450.setTransform(-13.6,-94.2,1.669,1.669);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#828634").s().p("AgHAZQgKgDgEgIQgDgIACgJIADgJQAIgNAOAAQAMAAAGALQAFAJgDALQgDALgIAFQgGAEgGAAIgHgBg");
	this.shape_451.setTransform(11,-94.2,1.669,1.669);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#C7CB62").s().p("AgQAzQgTgFgJgSQgIgQAEgSQADgMAFgIQAIgMANgHQAMgIANABQAYAAAMAVQAMAUgHAXQgGAXgSALQgLAHgNAAQgHAAgIgCg");
	this.shape_452.setTransform(11,-94.2,1.669,1.669);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#A7BC50").s().p("AhFDFQgPgDgMgHQgIgGgGgIQgTgYADghQACgZAPghQAJgPABgGQADgKgIgLQgUgcgGgfQgFghAKgeQAfhZBegCQBfACAfBZQALAegGAhQgGAggUAbQgGAJAAAGQgBAGAGAJQAKARAHAaQAKAggFAUQgDAPgJAMQgHAKgJAGQgXAPgegGQgHgBgPgIQgOgHgJAAQgIABgMAHQgPAJgGABQgIADgJAAIgLgBg");
	this.shape_453.setTransform(-1.9,-109.4,1.669,1.669);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#DFC598").s().p("AAHAkQgKgFgIgiIgGghQAeANAFgBQABAsgGANQgCAEgCAAIgCgBg");
	this.shape_454.setTransform(-13.2,-74.3,1.669,1.669);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#DFC598").s().p("AgMAhQgFgNAAgsIAGgBQALgDATgIIgHAhQgIAigKAFIgCABQgCAAgCgEg");
	this.shape_455.setTransform(10.6,-74.3,1.669,1.669);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#A0AC46").s().p("AgJAiQgtgDgggZQgTgOgHgUQAGAIAJAGQALAHAPADQAQACAMgEQAGgBAPgJQAMgHAKgBQAIAAANAHQAQAIAGABQAfAGAXgPQAJgGAHgKQgKAgggARQggASgnAAIgJAAg");
	this.shape_456.setTransform(-1.7,-75.7,1.669,1.669);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#DFC598").s().p("AgVANQgKgPAGgMQAFgKAVgCQAVgCAFALQADAFgDAJQgFAMgIAJQgGAHgGABIgDABQgLAAgJgOg");
	this.shape_457.setTransform(-76.7,-29.2,1.669,1.669);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#DFC598").s().p("AgRATQgPgPAEgMQAEgMAWgHQAVgHAIAKQADAEgBALQgCAOgHAMQgFAIgFADQgEACgEAAQgIAAgLgLg");
	this.shape_458.setTransform(-71.5,-13.2,1.669,1.669);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#DFC598").s().p("AgTASQgOgRAFgMQAFgLAWgFQAWgFAHAKQADAFgCALQgCALgJANQgGAJgFACIgGABQgKAAgKgMg");
	this.shape_459.setTransform(-62.6,-0.2,1.669,1.669);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#CAD44A").s().p("AijAsIAnhnQB8AnB/gfIAlBjQhOAMhNAAQhWAAhWgQg");
	this.shape_460.setTransform(-0.8,-3.4,1.669,1.669);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#CAD44A").s().p("AirgDQgLgWgGgUQBgAeB6gGQBFgDBbgRQgIAUgIAPQhSAzhdABQhbgBhPgwg");
	this.shape_461.setTransform(-1,65.4,1.669,1.669);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#C5C309").s().p("AjBAlQAKgqATg2QCjAfCkgcQAVA6ALAsQhWAOhWAAQhsAAhsgXg");
	this.shape_462.setTransform(-0.7,14,1.669,1.669);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#CAD44A").s().p("AjPAzQgBgqAHgiQADgWAGgWQDAApDEggIAHAjQAGApgBAmQhkAQhiAAQhsAAhtgTg");
	this.shape_463.setTransform(-0.9,32,1.669,1.669);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#C5C309").s().p("Ai9AnQgQgugCg5QDPAmDQgiQgCA3gRAwQhbARhEAEIgnABQhjAAhRgag");
	this.shape_464.setTransform(-0.9,51.2,1.669,1.669);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#C5C309").s().p("Ah9AjIAWg9IAJgeQBdAZBfgTIAHAYQAGAUATAxQg4AOg3AAQhGAAhGgWg");
	this.shape_465.setTransform(-0.7,-19.3,1.669,1.669);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#CAD44A").s().p("AgzAhIAAAAQAAghgCgjIATAEQArAFAsgJQgBAVAAArQgfAHgeAAQgVAAgVgDg");
	this.shape_466.setTransform(-0.9,-80.6,1.669,1.669);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#C5C309").s().p("AgiAgIgSgDIgCgcIAAgBQAGgPAPgJQAOgJASAAQARAAAOAIQAQAIAHAQIACAHIgBAWQgdAGgbAAQgQAAgQgCg");
	this.shape_467.setTransform(-0.9,-91.4,1.669,1.669);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#CAD44A").s().p("Ag+AeQAGghACgiQAtAUBAgQIAHBCQgcAFgcAAQgiAAgigIg");
	this.shape_468.setTransform(-0.9,-58,1.669,1.669);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#C5C309").s().p("Ag2AdQADgfAAggIAAAAQA0AIAzgNQAAAlADAjQgdAHgZAAQgeAAgZgLg");
	this.shape_469.setTransform(-0.9,-69.2,1.669,1.669);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#C5C309").s().p("AhKAeQAJgpADgdQA9APA/gMQAHAmAGAfQgjAJgkAAQgmAAgogLg");
	this.shape_470.setTransform(-0.9,-46.1,1.669,1.669);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#CAD44A").s().p("AhdAeQAMgqAGgfQBLAWBKgUQAJApALAkQgpAIgpAAQg0AAg1gOg");
	this.shape_471.setTransform(-0.8,-33.8,1.669,1.669);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#828634").s().p("AgMBLQgGgCgDgGQgDgEgBgHQgCgJACgLQADgVAHgSQANgnAZgeQAAgBABAAQAAgBAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgXAegLAnQgGASgDATIgBASQACALAGACQAAAAABABQAAAAABABQAAAAAAABQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgBAAg");
	this.shape_472.setTransform(41.3,60.6,1.669,1.669);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#A0AC46").s().p("AAAALQgDAAgDgDQgDgDAAgFQABgEADgDQADgDACAAQAKABAAAKQgBAEgDADQgCADgDAAIgBAAg");
	this.shape_473.setTransform(76.8,23.6,1.669,1.669);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#A0AC46").s().p("AAAALQgEgBgDgDQgEgEABgEQAAgFADgCQAEgEADACQAFAAADAEQADAEAAAEQAAAFgDADQgDACgDAAIgCgBg");
	this.shape_474.setTransform(59.5,14.3,1.669,1.669);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#A0AC46").s().p("AgHAKQgDgEgBgGQABgEADgEQADgFAEAAQAFAAADAFQAEAEAAAEQAAAGgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_475.setTransform(70.6,35.7,1.669,1.669);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#A0AC46").s().p("AABANQgEgBgEgEQgEgEAAgFQgBgFAEgDQADgDAFABQAFAAADAEQAEAEAAAFQABAFgEADQgDADgEAAIgBAAg");
	this.shape_476.setTransform(54.2,22.5,1.669,1.669);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#A0AC46").s().p("AAAANQgEgBgEgEQgDgEAAgFQgBgFAEgDQAEgDAEABQAFAAADAEQAEAEABAFQAAAFgEADQgDADgEAAIgCAAg");
	this.shape_477.setTransform(59.9,29.9,1.669,1.669);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#A0AC46").s().p("AgHALQgFgEgCgGQgBgFADgEQAEgFAGAAQAEgBAGAEQAFAEABAGQACAFgDAEQgEAFgGAAIgBAAQgEAAgFgDg");
	this.shape_478.setTransform(68.7,12.7,1.669,1.669);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#A0AC46").ss(1.2,1).p("AgEgBQADADAGAAQAGAAADgDQACgFAAgFIAAgFQgCgHgIgDQgGgCgHACQgQAGAAAVQAAANALAJQALAIANgEQAFgCADgFQADgEABgF");
	this.shape_479.setTransform(68.7,22.8,1.669,1.669);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#DFC598").s().p("AgCAgIgXgHIgVgFQgDgYATgRQAIgHANgDQALgDALACQAWALAIASQAEAIAAAHIABADQgCAEgMAIIgMAGIgLABQgGAAgHgCg");
	this.shape_480.setTransform(81.4,72.5,1.669,1.669);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#D0B077").s().p("AALAlQgOgCgNgGQABgGgFgJQgIgRgVgLIAFABQALgSAVgGQBWAjggAhQgHAHgOAAIgKgBg");
	this.shape_481.setTransform(92,69.6,1.669,1.669);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#A7BC50").s().p("AgyDLQgcgDgWgMQgMgHgFgBIgTABQgdACgPgaQgMgVABgfQADhLAThFQARg/AcggQAQgSASgMQA0gmA1gCQAegBAbALQAcAMARAVQAoAvgNBkQgJBJgaAqQAuALAlAPQgVAGgLASQgNgEgNACQgOADgKAJQgSARACAYQgUgDgaABIgvADIgcACIgXgCg");
	this.shape_482.setTransform(57.8,42,1.669,1.669);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#C19C56").s().p("AAjAiIgtgEQgagCgSgJIgCgBQAHgNAKgMQAPgSATgHIAEgBIAKADQAeAMANAVQAFAJgBAIQgBAKgJAEIgEAAIgHAAg");
	this.shape_483.setTransform(94.5,67.6,1.669,1.669);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#A0AC46").s().p("Ag0gaQABADA9gFQAXAAAUAFIgEABQgSAIgQARQgKAMgFAOQgpgWgLghg");
	this.shape_484.setTransform(85.2,65.8,1.669,1.669);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#828634").s().p("AAJBIQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAGgCABgLQABgFgCgNQgEgXgFgOQgLgmgWgfQgBgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAAAABQAaAeANAnQAHAXACAQQACANgCAHQgBAHgCAEQgEAGgGACIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_485.setTransform(-42.3,60.6,1.669,1.669);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A0AC46").s().p("AgFAIQgDgDAAgEQgBgEADgDQADgEADAAQAJAAABAKQAAAFgDADQgCADgEAAIgBAAQgDAAgCgDg");
	this.shape_486.setTransform(-77.8,23.6,1.669,1.669);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#A0AC46").s().p("AgHAKQgEgDABgFQgBgEAEgEQADgEAEAAQAEgCAEAEQAEACgBAFQABAEgEAEQgEADgEABIgBABQgDAAgDgCg");
	this.shape_487.setTransform(-60.4,14.3,1.669,1.669);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#A0AC46").s().p("AgHAKQgDgEAAgGQAAgEADgEQADgFAEAAQAFAAADAFQADAEAAAEQAAAGgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_488.setTransform(-71.5,35.7,1.669,1.669);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#A0AC46").s().p("AgIAKQgEgDABgFQAAgFADgEQAEgEAEAAQAFgBAEADQADADAAAFQAAAFgDAEQgEAEgFABIgBAAQgEAAgDgDg");
	this.shape_489.setTransform(-55.1,22.5,1.669,1.669);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#A0AC46").s().p("AgIAKQgEgDABgFQAAgFAEgEQAEgEAEAAQAFgBADADQAEADgBAFQAAAFgEAEQgDAEgFABIgBAAQgEAAgDgDg");
	this.shape_490.setTransform(-60.9,29.9,1.669,1.669);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#A0AC46").s().p("AgDAOQgFAAgEgFQgDgEACgFQABgGAFgEQAFgEAGABQAGAAADAFQADAEgBAFQgCAGgFAEQgFADgEAAIgCAAg");
	this.shape_491.setTransform(-69.7,12.7,1.669,1.669);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#A0AC46").ss(1.2,1).p("AAFgBQgEADgFAAQgGAAgDgDQgCgEAAgGIAAgFQACgHAIgDQAFgCAHACQAIADAFAIQAEAIgBAIQAAANgLAJQgLAIgMgEQgFgCgDgFQgEgEAAgF");
	this.shape_492.setTransform(-69.7,22.8,1.669,1.669);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#DFC598").s().p("AgVAhIgMgGQgLgIgDgEIABgDQAAgHAEgIQAIgRAWgMQALgCAMADQAMADAJAIQARARgBAXIgWAGQgYAIgOAAIgJgBg");
	this.shape_493.setTransform(-82.4,72.5,1.669,1.669);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#D0B077").s().p("AgpAfQggghBWgjQAVAGAMASIAEgBQgVALgIARQgEAJAAAGQgNAGgOACIgJABQgPAAgHgHg");
	this.shape_494.setTransform(-93,69.6,1.669,1.669);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#A7BC50").s().p("AAADLIgvgDQgagBgUADQACgYgSgRQgJgJgOgDQgOgCgMAEQgMgSgVgGQAngPAsgLQgagqgJhJQgNhjAogwQASgVAcgMQAagLAeABQA1ACA0AmQAUANAOARQAdAhAQA+QAUBIACBIQABAfgMAVQgOAagegCIgTgBQgEABgNAHQgWAMgcADIgXACIgcgCg");
	this.shape_495.setTransform(-58.8,42,1.669,1.669);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#C19C56").s().p("AguAiQgIgDgBgLQgBgIAFgJQANgVAegMIAKgDIAEABQATAHAPASQAIAJAJAQIgCABQgSAJgaACIgtAEIgHAAIgFAAg");
	this.shape_496.setTransform(-95.4,67.6,1.669,1.669);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#A0AC46").s().p("AgOADQgPgRgTgIIgEgBQAUgFAYAAQA8AFABgDQgKAhgqAWQgHgQgIgKg");
	this.shape_497.setTransform(-86.1,65.8,1.669,1.669);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#93AC32").s().p("AhjFfQg8h7BLihQAYg0AzhSQA7hhARgfIAXgqQANgZAEgTQAFgUACgcIACgxIABgsQABgcAGgQQAQDOg/DGQgRA0gnBkQghBbgKBAQgKA6AHA4QAHA8AZAwQhHgtgjhHg");
	this.shape_498.setTransform(-30.8,-13.3,1.669,1.669);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#93AC32").s().p("AAaFkQAHg3gKg5QgKhAghhcIg4iXQg/jDAQjNQAFARACAZIABApIADAyQACAcAEAUQAFASANAZIAXArQAQAeA7BiQA0BRAYA1QBKChg8B6QghBFhIAtQAYgvAHg8g");
	this.shape_499.setTransform(29,-13.1,1.669,1.669);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#A7BC50").s().p("AC9DyQgEgBgDgEQhLh9gTiSIgRAtQgQAlgOAXIgRAdIgUAcQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgCgCACgDIAgg6QAMgXANgmQAKgbAIgjIADgWIgRAVQgYAcgZAXQgaAXgcAUQgXAQglAVQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABgBQAkgXAVgRQAXgRAbgcQAVgUAYggIAVgcIgpANQgmALgjAGIglAGIgmAEQgeADgugBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgBAAgBQAAAAAAgBQABAAABAAQAAAAABAAQAqgBAhgFIAlgFIAkgIQAmgKAggLIAmgPQiBgihshSQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQACgDADACQB8BTCRAYIAAAAIAEABIAAAAIABAAIABABIABAAIADADIAAABIAAAAIABACIAAADIABAAIAAABQAABbAYBYQAYBZAvBOQACAEgBAFQgBAEgEACQgDACgDAAIgCAAg");
	this.shape_500.setTransform(-50.7,-85,1.669,1.669);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#CACA1E").s().p("ABpCgQgygdgygCQgNgkgvgNIgtgHQACg6gwgpIgwgfQAmgpgFhIIgMg/QB7BXCTAcQAABcAZBbQAZBaAwBQQgwgygqgZg");
	this.shape_501.setTransform(-51.3,-85.6,1.669,1.669);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#A7BC50").s().p("AjEDwQgEgCgBgEQgBgFACgEQAvhOAYhZQAYhYAAhbIAAgBIABgBIAAgCIABgCIAAgBIAAAAIADgDIABgBIABAAIABgBIAAAAIAEAAIAAAAQCRgYB8hTQADgCACADQABACgCADQhsBRiBAjIAmAOQAgANAmAIIAkAIIAlAGQAdAEAuABQABAAAAAAQABABAAAAQABAAAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgzABgZgCIgmgEIglgGQgpgIgggKIgpgNIAVAdQAYAfAVAVQAXAYAbAVQASAPAnAZQACACgBADQgBAAAAABQgBAAAAAAQgBABgBgBQAAAAgBAAQglgVgXgQQgbgTgbgYQgagYgXgbIgRgWIADAXQAIAkAKAaQANAlAMAYIAQAdIAQAcQACAEgDABQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIglg4QgOgXgQgmQgKgWgHgWQgTCShLB8QgEAGgFAAQgDAAgDgCg");
	this.shape_502.setTransform(48,-84.5,1.669,1.669);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#CACA1E").s().p("Ah5BBQAYhaAAhdQCUgcB7hXIgMA/QgFBIAmApQgYAKgZAVQgvApACA7QgVgBgYAHQgwAOgMAjQgyACgyAdQgqAZgwAyQAwhQAZhag");
	this.shape_503.setTransform(48.7,-85.2,1.669,1.669);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#DFC598").s().p("AgIAeQgVgKgBgQQgBgMAVgPQAUgQALAIQAGADACAMQAEAQgDANQgBAKgFAGQgGAGgJAAQgIAAgJgFg");
	this.shape_504.setTransform(-48.8,10.2,1.669,1.669);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#A0AC46").s().p("ACmFcQgXgBgYgGQgmgLgxgaQiehZhmioQhsiwAQivQACgUAFgJQAFgHAGgEQAIgEAHABQAJACAIAKQAIALAEAQIAFAeQAPBTA1BIQA1BJBLAmQApATB9AUQBrARAyAtQAtApAKA9QAKBAgkAsQgXAagjANQgdAKgfAAIgLAAg");
	this.shape_505.setTransform(-33.2,13.7,1.669,1.669);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#737A1F").s().p("AgTBHQgFgDgBgGIAAgCQAAgQACgUIAIgiQAFgRAIgPQAHgPAMgOQADgEAEAEQADACgCAEIAAAAQgKAQgEANQgFAPgDAQQgCAQAAAPQAAATACAMQABAGgEAFQgCAFgGABIgDAAQgEAAgEgDg");
	this.shape_506.setTransform(-80.6,-56.1,1.669,1.669);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#849934").s().p("AgRBhIgHgCQgZgLgLgUQgNgXAKgeQAHgYAUgWQARgUAYgQIAWgRQAXgPAKADQAKADgDANQgBAHgGAMIgHAYQgDAOACAUIAGAhQAHAngSAUQgMAMgSADIgMABQgKAAgMgEg");
	this.shape_507.setTransform(-80.9,-58.1,1.669,1.669);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#F8B019").s().p("AAjAiQgZgrg+gZQA0gGAqAnIALAFQgBAPgOARg");
	this.shape_508.setTransform(-11,-107.2,1.198,1.198);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#146614").s().p("AgRAAQAQgEATgEQgBAHgGAFQgFAEgGAAQgLAAgGgIg");
	this.shape_509.setTransform(-43.5,-104.7,1.198,1.198);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#F5AE97").s().p("AgsAHQAlgMA0gIQgTATgMAFQgIADgJAAQgQAAgZgHg");
	this.shape_510.setTransform(-42.2,-104.9,1.198,1.198);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#146614").s().p("AgTAQQgSgDgQgGQANgFAZgFQAigJAjgEQgWAYgQAHQgGACgKAAQgIAAgLgBg");
	this.shape_511.setTransform(-42,-104.6,1.198,1.198);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#146614").s().p("AgeAFQAbgIAigFQgNALgIAFQgFABgGAAQgLAAgSgEg");
	this.shape_512.setTransform(-66.4,-100.9,1.198,1.198);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIgvAyg");
	this.shape_513.setTransform(-16.6,-123.5,1.198,1.198);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#38A81F").s().p("ACQBZQgpgzhjANQhzAbg2AHQgVgRgfgSQADgOAJgPQAUANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAJgJABgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_514.setTransform(-50.2,-100.9,1.198,1.198);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#24BD27").s().p("ACQBZQgpgzhjANQhzAbg2AHQgVgRgfgSQAMgxAwghQBCAIBmgTQBTgQB8gnIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_515.setTransform(-50.2,-100.9,1.198,1.198);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FBC156").s().p("AiEATIgQgRQAYgDA7gPQA2gNAdgEQBfgMAkA9IjwATIgFABQgWAAgOgRg");
	this.shape_516.setTransform(-50.6,-92.2,1.198,1.198);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#24BD27").s().p("AEFKpQAuhpASiHQAfjihCjgQhFjuiki3Qh8iLiPhJQE+Gkg2JPQAHiegljQQhImejZj6QA+CJAjC6QAvD3guClQAQiegnjGQgfibg5iUQAYBvgPCDQgOB+gnA+QgagKgTAAQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgCgUgIgfg");
	this.shape_517.setTransform(34.7,-20.2,1.198,1.198);

	this.instance_6 = new lib.Path_1_0_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(34.7,0.3,1.198,1.198,0,0,0,36.7,56);
	this.instance_6.alpha = 0.5;

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#1C6E19").s().p("ADoJJQg8iehng3QgViAguhCQgxhGhyg1QgQhYhChDQg+g/g+gCQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_518.setTransform(34.7,-20.2,1.198,1.198);

	this.instance_7 = new lib.Path_18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-27.6,17.9,1.198,1.198,0,0,0,8.4,33.5);
	this.instance_7.alpha = 0.27;

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#46E854").s().p("AAaDeQAfhJgKg3QgsghAYg2QARgiAJgWQARglAEgkQAIhMgUg5QgYhFg6gMQgRgDgSAIQgTAHgRARQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA5gIBMQgEAkgRAlIgaA4QgYA1AsAiQAKA3giBOQgnBegEAwIgNADQAFgnAnheg");
	this.shape_519.setTransform(-20,14,1.198,1.198);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#24BD27").s().p("AgWDbQgFhHgggqQgshcgMhTQgMhdAchNQATg9AkghQAhggAhAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3giBOQgoBfgEAvIg3APQAOhYgDg2g");
	this.shape_520.setTransform(-23.4,14.7,1.198,1.198);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#24BD27").s().p("AAuAhIhpAAIgGgCQgDgPgJgNIADAAICYgjQACAbgKATQgKATgMAAIgCAAg");
	this.shape_521.setTransform(-30.1,60,1.198,1.198);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#F8B019").s().p("AgRgEQASgIAlgDQAJANADAOIgZgGQgggDgqANQARgPAPgFg");
	this.shape_522.setTransform(-44,62.3,1.198,1.198);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#3CC951").s().p("AgVACIArgDIgGABQgEACgGAAg");
	this.shape_523.setTransform(31.3,63.3,1.198,1.198);

	this.instance_8 = new lib.Path_1_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(23.7,24.2,1.198,1.198,0,0,0,12.6,32.6);
	this.instance_8.alpha = 0.27;

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#24BD27").s().p("AiwFHIgCgXQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQALgIgBgOQgCgNgNgGIhMgdQgfgNgTgbQgSgcAAghIADjvQAAg9ArgsQAsgrA9AAQA8AAAsAqQArArABA9IgBAFIguDiQgBAJAEAIIBkCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_524.setTransform(30.3,24.3,1.198,1.198);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#F8B019").s().p("AAugTIAQgDQAJANACAdIgEAAQgegMgnACQgiABgmAMQAvguBHAEg");
	this.shape_525.setTransform(2.9,61.1,1.198,1.198);

	this.instance_9 = new lib.Group_6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(17.5,-38.4,1.198,1.198,0,0,0,53.3,74.4);
	this.instance_9.alpha = 0.398;

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FBC156").s().p("AAALgQg7AEgsgSQgvgSgshTQgzhhgfgaQgPgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAYhMAQhsQgBhzAUiqQAajDALhiIAUAAQAABQgPDeQgMC6AFA1QAGA9ClCuQBkBpAUAXQA7BDAMAhQAPAoA2ArQAxAoAiAIQAzALBCABQBeABAvgbQBFgmAhgkQAwg1AJhLQAJhHgtiZQgdhkghhOQg6hpguhZQhbiugKhKQgLhQAVg+QAKgeAnhFQASgfAxgsQhLBMgbBZQgiBwA0BxQAeBBBHB3QBZCUAbAyQCFD4gUCqQgIBEgsBBQguBDhIAuQhxBHiDAAQhCAAhFgSg");
	this.shape_526.setTransform(19.6,-39.3,1.198,1.198);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#46E854").s().p("AFEGFQAAiRhFhvQhEhuhogYQgVgFgmgXIhIgtQhjg8hGACIgVADQg8ibALjJQABgMgBglQAAggACgTIg3AAIADgUIBEAAQgCATAAAgQABAkgBANQgKDJA7CbIAWgDQBFgCBkA8IBHAtQAmAXAWAFQBnAYBEBuQBFBvAACRQAACCg4BpIgHACQAvhiAAh3g");
	this.shape_527.setTransform(6.3,-28.2,1.198,1.198);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#24BD27").s().p("AhYAEQAdjZAMhuIBEAAQgCATAAAgQABAkgBAOQgND7BiC3IjMBvQgJiCAVi9g");
	this.shape_528.setTransform(-28.5,-62,1.198,1.198);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#24BD27").s().p("AkTMFQAphHBaiLIBTh8QAsALAtgcQA1ggAVhEQA4i2jLlCQiVjqBtjKQAohKBBgzQA7gsArgDQhnA4g8BsQhUCTBGCZQAdBBBGB2QBZCUAbAzQCGD4gVCpQgHBFgtBBQgtBChJAuQhwBIiDAAQhBAAhGgSg");
	this.shape_529.setTransform(52.6,-43.7,1.198,1.198);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#24BD27").s().p("AA5GPQgvgSgrhTQgzhigfgaQgPgNgTgJIgngRQg5gXgfgSQgwgbglgnQgTgUgHgbQgGgbAJgbQAXhGAPhiIAXirIBJBBQArghA4gCQBGgDBiA8IBJAtQAmAXAWAFQBnAaBEBtQBFBvAACQQAACDg5BoQhfAdguAHQgbAEgZAAQguAAglgOg");
	this.shape_530.setTransform(0.3,-0.6,1.198,1.198);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#146614").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAkgRAmQgJAVgRAiQgYA2AsAhQAKA3ghBOQgpBegEAwIg3APQAOhXgDg3g");
	this.shape_531.setTransform(-28.5,14.7,1.198,1.198);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#146614").s().p("AhZAMQAVgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgrANQASgQAPgGg");
	this.shape_532.setTransform(-40.5,60.1,1.198,1.198);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#146614").s().p("AgzAFIDeg1IAABdIjIAAQgdgLgnABQgjACgmAMQAvgwBIAEg");
	this.shape_533.setTransform(7.1,58.1,1.198,1.198);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#146614").s().p("Ai0FHIC2h3Ii7hJIAFk5QAAg9ArgsQArgrA+AAQA8AAAsArQArAsABA9IgxDuIB2C6IiqBRg");
	this.shape_534.setTransform(25.8,24.3,1.198,1.198);

	this.instance_10 = new lib.Path_13_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(42.9,-39.9,1.409,1.409,0,0,0,3.8,8.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#EEDCC4").s().p("AAiBSIgIgEIgUgQIgOgSIgEgGIgJgPIgHgPIgGgPIgEgPQgCgHABgHIgBgSIACgLQADgKAJgFQAJgFAKACQAOAEADAQIAHBIIAJApIAEALIADAKIAIAOg");
	this.shape_535.setTransform(42.3,-39.8,1.409,1.409);

	this.instance_11 = new lib.Path_2_5_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(33.2,-37.7,1.409,1.409,0,0,0,2.3,8.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#EEDCC4").s().p("AAXBUIgHgGIgQgTIgGgNIgNgeIgFgQIgDgPIgBgWIABgOIACgPIADgHQAEgJAKgEQAJgEAJAFQAPAGABAQIgBAOIAAAEIAAAEIgDAlIACBDIADASIACAHg");
	this.shape_536.setTransform(32.3,-37.7,1.409,1.409);

	this.instance_12 = new lib.Path_4_0_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(24.7,-36.7,1.409,1.409,0,0,0,3,9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#EEDCC4").s().p("AgOBUIgFgIIgKgXIgDgPIgDgZIAAgIIABgQIACgRIAJgcIAJgPIAHgJQAHgIAJAAQALAAAHAHQAMALgFAPIgkBeIgHAjIAAAPg");
	this.shape_537.setTransform(23.7,-36.8,1.409,1.409);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#279932").s().p("AABBBIhSgWQgHgCgBgHQgBgIAHgDQA5gdA9g6IA4A1QggAPgOAOIghArQgEAEgEAAIgDAAg");
	this.shape_538.setTransform(34.9,-77.2,1.409,1.409);

	this.instance_13 = new lib.Path_7_0_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(33,-57.4,1.409,1.409,0,0,0,6.3,10);
	this.instance_13.alpha = 0.559;

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#37ED4F").s().p("Ag0AEQABg7gOg0IBIARQAgAiAPAxQAOAsgDAtIh9AaQAHhEABgkg");
	this.shape_539.setTransform(32.7,-58.4,1.409,1.409);

	this.instance_14 = new lib.Path_9_0_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(24.8,-90.3,1.409,1.409,0,0,0,9.5,9.5);
	this.instance_14.alpha = 0.559;

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#4DF324").s().p("AhOAGQgVgEgIgTQgEgLADgMQACgMAJgIIAdgZQAQgMASAEQATADALARQAYA2BaA/IhBAzQg+hOg9gLg");
	this.shape_540.setTransform(27.1,-90.3,1.409,1.409);

	this.instance_15 = new lib.Path_12_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(46.3,46.9,1.409,1.409,0,0,0,1.9,6.7);

	this.instance_16 = new lib.Path_1_4_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(39.2,47.9,1.409,1.409,0,0,0,1.2,6.9);

	this.instance_17 = new lib.Path_2_4_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(31.2,48,1.409,1.409,0,0,0,2.8,6.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#EEDCC4").s().p("AAWBAIgMgJIgIgHIgCgFIgOgVIgHgSIgFgSIgBgQIABgKIAAgEIABgDIABgFQACgIAIgDQAHgEAHADQALAEACAMIAAAIIAAADIAAAjIAFApIAFARIAFALg");
	this.shape_541.setTransform(45,46.9,1.409,1.409);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#EEDCC4").s().p("AALBBIgEgFIgGgHIgEgJIgFgKIgFgLIgDgNIgDgLIgCgNIAAgRIADgPIAEgMQAEgHAIgCQAHgCAHAEQALAFgBANIgBAFIAAADIAAACIgHA4IAAAmIACAMg");
	this.shape_542.setTransform(37.6,47.9,1.409,1.409);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#EEDCC4").s().p("AgQBAIgEgHIgDgIIgEgPIgCgUIABgNIAEgYIAEgLIAMgVIAGgGQAFgGAIAAQAIABAGAFQAIAJgFAMIgDAHIgeA+IgDAKIgEARIgBAMg");
	this.shape_543.setTransform(30.9,48,1.409,1.409);

	this.instance_18 = new lib.Path_11_2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(12.1,-23,1.409,1.409,0,0,0,9.4,13.6);
	this.instance_18.alpha = 0.559;

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#52EE37").s().p("AgGCPQgrgqgZhHQgZhGAHg8QAHg7AigMQAogOAxApQA2AuABBGIABCGQgDA6gVAIQgIADgIAAQgcAAggggg");
	this.shape_544.setTransform(12.1,-28.4,1.409,1.409);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#279932").s().p("AgeBhQghgDgHgTIgRioIBBgDIAaA7QAcA8AJANQAIAMAUAEQALACAIAAIhCAkQgTAHgVAAIgMAAg");
	this.shape_545.setTransform(25,-16.9,1.409,1.409);

	this.instance_19 = new lib.Path_3_1_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(39.2,15.8,1.409,1.409,0,0,0,6.7,17.9);
	this.instance_19.alpha = 0.559;

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#37ED4F").s().p("AghBZQAPglAAgYQgBgggXhVIgXhNIA2gMIAeBBQAhBKAJAuQAJAqgGAnQgHA2AAAVIh6AQQAJgnAXgzg");
	this.shape_546.setTransform(39.2,15.9,1.409,1.409);

	this.instance_20 = new lib.Group_0_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-7.4,-19.5,1.409,1.409,0,0,0,9.6,11.7);
	this.instance_20.alpha = 0.82;

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FAE88C").s().p("AAJB9Qgzgwgmg0QgPgVABgZQAAgZARgUQA3hDAIg5QApAxAQB4QAUCOAhBGQgmgVgxgtg");
	this.shape_547.setTransform(-7.5,-29.8,1.409,1.409);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#6BE333").s().p("AhlBlQAshWhLhPQCKAsB/hTQgZA/gJAqQgMA5AKAqQhKADgxAAQgxAAgagDg");
	this.shape_548.setTransform(-0.1,-54.3,1.409,1.409);

	this.instance_21 = new lib.Path_1_3_2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-1.9,-77.7,1.409,1.409,0,0,0,14.3,13.5);
	this.instance_21.alpha = 0.82;

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FAE88C").s().p("AhpCCQgjgjgHghQgGgbALgtQAQgqAMgXQASghAVgTIAKAaQAGARAAAKQAagYA3gQIBYgbQAZAaAJAzQAIArgEA0QgBARgJAXQgFANgMAYQg0Abg7AFQgPACgQAAQgrAAgpgMg");
	this.shape_549.setTransform(-1,-78.7,1.409,1.409);

	this.instance_22 = new lib.Path_10_2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(25.6,-94.5,1.409,1.409,0,0,0,3.8,7.7);
	this.instance_22.alpha = 0.559;

	this.instance_23 = new lib.Path_1_2_2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(41,-94.3,1.409,1.409,0,0,0,5.5,14.2);
	this.instance_23.alpha = 0.559;

	this.instance_24 = new lib.Path_2_3_2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(61.5,-97.8,1.409,1.409,0,0,0,9.7,15.6);
	this.instance_24.alpha = 0.559;

	this.instance_25 = new lib.Path_3_0_2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(94.8,-92.4,1.409,1.409,0,0,0,21.1,19.9);
	this.instance_25.alpha = 0.559;

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#74E878").s().p("AAFApQgSgCgYgfQAVgOATgYQAMgOAXggIAACZQgRgigQgCg");
	this.shape_550.setTransform(25.6,-94.6,1.409,1.409);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#74E878").s().p("AgyC3QgRijBGjQQAJA0AOBnQANBbAPA8QgbgpghAEQglAEgGA0QgDAbAEAZg");
	this.shape_551.setTransform(41,-100.7,1.409,1.409);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#74E878").s().p("Ag9DZQgDhdgPiFIgcjjQBHBVA4B/QAiBNA2CbQhChLgvAIQgnAGgJAuQgFAWAEAWIgHgUg");
	this.shape_552.setTransform(60.1,-109.3,1.409,1.409);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#74E878").s().p("ACKCgQhQg0gxAQQgkANgKAtQgGAXACATIgEgFQgSiWg7iDQg9iIhihpQDPBrCJCMQCgCiA7DGQhAhahQg2g");
	this.shape_553.setTransform(84.7,-107,1.409,1.409);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#0A7300").s().p("AD0CvQhghKg5AVQglANgLAsQgFAXACATQgTgbgagaQg1g0goAGQgnAHgJAtQgFAXAEAVQgHgZgOgZQgdgxglAEQglAEgGA0QgDAbAEAZQgGgZgKgaQgTgzgUgCQgUgCgbgkIgXgjQBwgzAsibQAghxgNhiQAiAjBpA7QB6BGA9AvQDuC2BEFOQg9hyhhhLg");
	this.shape_554.setTransform(73.2,-106.6,1.409,1.409);

	this.instance_26 = new lib.Group_5();
	this.instance_26.parent = this;
	this.instance_26.setTransform(48.1,-30.8,1.409,1.409,0,0,0,35.4,28.6);
	this.instance_26.alpha = 0.82;

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FAE88C").s().p("AixEMQgzgRgygeQgtgcgXgYQgCgcgCg7IgCg1QArA+BLA9QBoBUBVAAQBXAAApgTQAogTA4hDQAug4gRh5QgGgngMgqIgMgpQgLgZgFgQQgJgeAKgIQAMgIAjAEIAwAFQAeAAAcgNQAZgLAMgPQgTAig9AKQgRADgugDQghgBgEAHQgFAJAKATIAPAaQAJANANAfQARAnAEAYQAFAbADAtQACAWgFAfQgHAkgPAhQgYA1glAjQgeAegzAZQgsAWhOABIgEAAQhIAAg4gSg");
	this.shape_555.setTransform(48.1,-30.9,1.409,1.409);

	this.instance_27 = new lib.Group_1_5();
	this.instance_27.parent = this;
	this.instance_27.setTransform(41.6,-31.2,1.409,1.409,0,0,0,39.8,28.3);
	this.instance_27.alpha = 0.559;

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#6BE333").s().p("AgcEaQhBgEg5gTIgTgHIgBAAIAAAAIgJgEQgQgGgMgHQgagPgYgSQgpgggegpQgYgggRgjQgLgYgIgYIgGgPQgLgmASgjQASgjAlgMQAmgLAjASQAjASALAlQADAHAAAFIAAAAIABAEIABAHQACANAFAOQAGASAMAXQAOAaAUAUQAMANAMAJIARALIAAABIABAAIAAAAIAEACIAIAEQAlATAuAJQAxAJAlgHQAIgBALgEIAEgBIABAAIAAgBIAPgGQAXgMAPgNQAkgdARguQAQgrgDg2QgCgxgQgvIgLgeIgBgBIAAgBIAAAAIgBgBIgBgCIgEgOQgEgTAHgPQAIgRAQgGQAOgGAPABIAGABIAPAEQARAFATADQAhAGAagHQARgFASgMIALgIIgCACIgIAIQgOAOgTAJQgZAMgmAAIgngCIgTgBQgJABgEACQgFAEgBAFQgCAFADAHIABADIABACIABACIAUAhQAbAxANA4QAQBCgLA8QgGAlgOAeQgPAggYAcQgVAageAXIgPAKIgDADIgNAHQgRAJgTAHQgiALgkADQgSACgUAAIgcgBgAhsBvIAAAAIABABg");
	this.shape_556.setTransform(41.6,-31.2,1.409,1.409);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#1D1D1B").ss(0.1).p("ABqgLQgGg4gjgkQgkgkgrAFQgsAFgaArQgbArAGA3QAGA4AkAkQAjAkArgFQAsgFAbgrQAagrgGg3g");
	this.shape_557.setTransform(0.3,-36.3,1.409,1.409);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("Ag/BoQgkgkgGg4QgGg3AbgrQAagrAsgFQArgFAkAkQAjAkAGA4QAGA3gaArQgbArgsAFIgLAAQglAAgegfg");
	this.shape_558.setTransform(0.3,-36.3,1.409,1.409);

	this.instance_28 = new lib.Path_8_2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-33.7,-39.4,1.409,1.409,0,0,0,1.9,9);

	this.instance_29 = new lib.Path_1_1_2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-43.3,-40.8,1.409,1.409,0,0,0,3.1,8.8);

	this.instance_30 = new lib.Path_2_2_2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-53.2,-43.5,1.409,1.409,0,0,0,5,8.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#EEDCC4").s().p("AAEBVIgFgHIgHgJIgGgMIgJgWIgFgYIgCgQIABgZIABgIIADgNIAHgVIAEgFQAGgJAJgDQAKgCAJAHQANAJgCAPIAAABIgDAKIAAADIgMAsIgDANIgDAOIgDAnIABALIACAPg");
	this.shape_559.setTransform(-35.2,-39.5,1.409,1.409);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#EEDCC4").s().p("AgRBTIgFgIIgEgKIgHgcIgCgYIABgJIAAgPIADgQIAEgPIACgHIALgXIAHgIQAHgIAJAAQALAAAIAHQALALgFAPIAAAAIgFANIgCADIgBAFIgZA7IgMAwIgBAJIAAAHg");
	this.shape_560.setTransform(-43.8,-40.7,1.409,1.409);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#EEDCC4").s().p("AguBKIgEgUIABgVIACgQIAHgXIAHgQIAMgVIAOgRIAMgMIAJgGQAJgFAKAEQAKADAFAJQAHAOgJANIhCBMIgNAVIgKAYg");
	this.shape_561.setTransform(-53,-43.5,1.409,1.409);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#279932").s().p("AgGA2IhCgtQgGgFACgGQACgIAHAAQAegDAWgLQAUgKAVgVIAzA8QgcAGgOAKQgKAHgRAXQgCAEgFABIgBAAQgDAAgDgCg");
	this.shape_562.setTransform(-32.6,-76.4,1.409,1.409);

	this.instance_31 = new lib.Path_7_2();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-40,-62.4,1.409,1.409,0,0,0,7,10.1);
	this.instance_31.alpha = 0.559;

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#37ED4F").s().p("AhHBYQAag6AKgdQAQgwACg2IBGAkQAlBPgiBYg");
	this.shape_563.setTransform(-39.8,-62.3,1.409,1.409);

	this.instance_32 = new lib.Path_9_2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-20.2,-87.6,1.409,1.409,0,0,0,6.4,7.1);
	this.instance_32.alpha = 0.559;

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#4DF324").s().p("AgnBOIgSgQQgFgEgBgGQgBgHAEgGQAUgeAEgMQAFgOgBgjQABgQARgJQAPgIAQAIIAEACQAKAJAWAJQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAFgLASQgKAOgLAkQgDAJgJACIgFABQgGAAgFgEg");
	this.shape_564.setTransform(-20.2,-89.2,1.409,1.409);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#A31523").s().p("AgLAJIAWgTQACAGgCAFQgDAGgFACQgDACgDAAQgEAAgEgCg");
	this.shape_565.setTransform(-11.7,-143.8,1.409,1.409);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FDEBCF").s().p("AAfgXQgHAUgIAJQgKALgkAHQAdgZAggWg");
	this.shape_566.setTransform(-10.7,-144.6,1.409,1.409);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#279932").s().p("AgMAHQAXgSAagRQgHAbgLALQgHAHgSAGQgPAFgPABQAHgHARgPg");
	this.shape_567.setTransform(-10.4,-144.7,1.409,1.409);

	this.instance_33 = new lib.Path_6_2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-13.5,-134.8,1.409,1.409,0,0,0,9.3,7.2);
	this.instance_33.alpha = 0.82;

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FAE88C").s().p("AhJBEQgRgCgDgGQAzgSA2gqIBShIQAAAPgQAdQgVAngEALQgiAWgOAHIgxAVQgHgDgWgBg");
	this.shape_568.setTransform(-13.4,-134.8,1.409,1.409);

	this.instance_34 = new lib.Path_2_1_2();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-21.1,-136,1.409,1.409,0,0,0,13.6,5);
	this.instance_34.alpha = 0.559;

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#4DF324").s().p("AhcBPQAHgGAMgRQgIgCgTABQgRACgJgFQAugSA0gqQAdgYA6gzIALgDIA5BqIjFBDg");
	this.shape_569.setTransform(-17.5,-141.3,1.409,1.409);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#5BE842").s().p("AhQBGQgVgHgIgLIA1goQA7grAegRQAmgVAngMQg5A0geAYQgzApguASQAJAGARgCQATgBAHACQgLARgIAFQgbgGgMgFg");
	this.shape_570.setTransform(-24.8,-141.7,1.409,1.409);

	this.instance_35 = new lib.Path_5_2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-5.1,-116.2,1.409,1.409,0,0,0,6.8,25.3);
	this.instance_35.alpha = 0.559;

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#4DF324").s().p("AgDEEQglgEgXgcQgXgcAEgkQAAgFACgIIAZh2IAEgmIAAgEIAAgEIgBgzIgGgnIgKgeIgWgmQgNgVAGgXQAGgYAVgMQASgLAVADQAUAEANAPIAOAQIAOASIARAaIAYAzIARA7IAHA0IABAFIADA/IgBAkIgBAfIgFA/QgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_571.setTransform(-0.7,-117.4,1.409,1.409);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#277836").s().p("AgSBOQgGgFgCgIIAAgEIADgZIAJgkIAFgNQAJgZALgWIALgUQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBAAIgGAWQgFAVgEAbIgCAYIACArIABAAQABAIgFAHQgEAGgHABIgEABQgGAAgFgEg");
	this.shape_572.setTransform(-12.5,-158.5,1.409,1.409);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#277836").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIAUgQIAUgLQAKgHANgFIAYgJIAMgDIAagFIAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgGACIgOAFIgUAJIgVANIgSANIgPAPIgGAGIgCACIgGAHQgEAFgHABIgBAAQgGAAgEgEg");
	this.shape_573.setTransform(8.9,-149.9,1.409,1.409);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#277836").s().p("AgUBRQgIAAgFgGQgGgGABgIIAAgEIAEgOIAMgiIAMgZIAWgkIAXgbQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBAAIgUArIgPAzIgEAuQAAAIgGAFQgFAFgHAAIgBAAg");
	this.shape_574.setTransform(-4.3,-159.8,1.409,1.409);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#277836").s().p("AgyBGQgHgDgDgHQgDgHADgIIAGgJIALgPQATgZASgRIAWgVIAkgZIAGgDQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgSAQIgiAqQgMASgMAbIgKAXQgDAHgHADIgHABIgIgBg");
	this.shape_575.setTransform(4,-157.2,1.409,1.409);

	this.instance_36 = new lib.Path_4_2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-90.3,-83.3,1.409,1.409,0,0,0,20.4,17.7);
	this.instance_36.alpha = 0.559;

	this.instance_37 = new lib.Path_1_0_4();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-42.5,-82.5,1.409,1.409,0,0,0,5,10.4);
	this.instance_37.alpha = 0.559;

	this.instance_38 = new lib.Path_2_0_2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-58.1,-90.2,1.409,1.409,0,0,0,8.6,11.1);
	this.instance_38.alpha = 0.559;

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#74E878").s().p("AgygkQAsgnB+hnQBthXA4g5QiuEMg7D9QgFgngKgaQgQgmgXgBQg0gDhpBhQg9A5hABNQAqi4DAivg");
	this.shape_576.setTransform(-78.9,-103.8,1.409,1.409);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#74E878").s().p("AAeB0QgIgmgUgKQgXgMgcAqQANgtAhhYQAfhYANgvIAJCsQACBjgTBGQABgfgEgYg");
	this.shape_577.setTransform(-42.6,-92,1.409,1.409);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#74E878").s().p("AgEAAQBYi1AZg/QADBpggCLQgTBQgtCgQgDhFgbgHQgTgEggAgQgVAVgWAfQAehfBKiVg");
	this.shape_578.setTransform(-54.8,-108.8,1.409,1.409);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#0A7300").s().p("AhPhtQBBg2B/hXQBphIAbgdQghBbAaB+QAeCSBjAxQgMAegQAfQghA+gVAMQgWALgZAnQgNATgIASQADgYgDgaQgGg0gYgLQgXgMgcApQgNAUgJAXQABgWgDgXQgHgtgWgGQgXgGgpAwQgUAZgRAZQgBgfgIgfQgQg+gfgBQg7gEh6B6Qg+A8gxA9QAij9D9jQg");
	this.shape_579.setTransform(-68.7,-106.3,1.409,1.409);

	this.instance_39 = new lib.Path_0_2();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-13,52.7,1.409,1.409,0,0,0,1.5,7);

	this.instance_40 = new lib.Path_1_8();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-20.3,51.7,1.409,1.409,0,0,0,2.4,6.9);

	this.instance_41 = new lib.Path_2_7();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-27.9,49.6,1.409,1.409,0,0,0,3.9,6.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#EEDCC4").s().p("AAAA8IgGgHIgHgOIgEgMIgDgNIgDgSIABgTIADgQIAEgNIAEgIQAFgGAHgCQAIgBAHAEQAJAIgBALIgBAGIgBACIgBADIgJAiIgGApIABAYIABAFg");
	this.shape_580.setTransform(-14.2,52.6,1.409,1.409);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#EEDCC4").s().p("AgNBAIgDgGIgEgIIgDgKIgDgYIAAgYIAFgYIAGgPIAEgIIACgCIAEgEQAFgGAHgBQAIABAGAFQAJAJgEALIgcBIIgGAbIgBAGIAAAFg");
	this.shape_581.setTransform(-20.7,51.6,1.409,1.409);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#EEDCC4").s().p("AglAzIgBgJIABgWIABgGIACgHIADgLIAFgMIAKgRIADgEIANgPIADgDIAIgEQAHgEAHADQAIACAEAHQAFAKgHALIgEAEIgDAEIgrAyIgLARIgDAHIgEALg");
	this.shape_582.setTransform(-27.9,49.5,1.409,1.409);

	this.instance_42 = new lib.Path_17();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-21.1,-28.2,1.409,1.409,0,0,0,9.5,17.2);
	this.instance_42.alpha = 0.559;

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#52EE37").s().p("Ag7ClQghgigGg9QgIhDAeg/QAehCAlgcQAigbAgAPQAjAQAHA8QAIBCgqA2QgdAlgkBIQgVAhgUAAQgJAAgJgHg");
	this.shape_583.setTransform(-21.9,-28.2,1.409,1.409);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#279932").s().p("AANBnQglgDgZgRQgegVACgfIAciGIBtALQgXAhgLAuQgLAqAKASQAMAWApAig");
	this.shape_584.setTransform(-21.1,-14.6,1.409,1.409);

	this.instance_43 = new lib.Path_3_3();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-17.4,23.5,1.409,1.409,0,0,0,8.1,16.7);
	this.instance_43.alpha = 0.559;

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#37ED4F").s().p("AhRCZQATghAhgqQAXgeAFgYQAGgdgEhUIgEhNIA2ABIAQBEQAQBMgCAsQgBAqgOAiQgTAwgFAUg");
	this.shape_585.setTransform(-17.4,23.3,1.409,1.409);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#EEDCC4").s().p("AAXBUIgHgGIgQgTIgGgNIgNgeIgFgQIgDgPIgBgWIABgOIACgPIADgHQAEgJAKgEQAJgEAJAFQAPAGABAQIgEA7IACBDIADASIACAHg");
	this.shape_586.setTransform(32.3,-37.7,1.409,1.409);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#EEDCC4").s().p("AgQBAIgEgHIgDgIIgEgPIgCgUIABgNIAEgYIAEgLIAMgVIAGgGQAFgGAIAAQAIABAGAFQAIAJgFAMIghBFIgDAKIgEARIgBAMg");
	this.shape_587.setTransform(30.9,48,1.409,1.409);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#6BE333").s().p("AgcEaQhBgEg5gTIgTgHIgBAAIAAAAIgJgEQgQgGgMgHQgagPgYgSQgpgggegpQgYgggRgjQgLgYgIgYIgGgPQgLgmASgjQASgjAlgMQAmgLAjASQAjASALAlQADAHAAAFIAAAAIABAEIABAHQACANAFAOQAGASAMAXQAOAaAUAUQAMANAMAJIARALIAAABIABAAIAAAAIAEACIAIAEQAlATAuAJQAxAJAlgHQAIgBALgEIAEgBIABAAIAAgBIAPgGQAXgMAPgNQAkgdARguQAQgrgDg2QgCgxgQgvIgLgeIgBgBIAAgBIAAAAIgBgBIgBgCIgEgOQgEgTAHgPQAIgRAQgGQAOgGAPABIAGABIAPAEQARAFATADQAhAGAagHQARgFASgMIALgIIgCACIgIAIQgOAOgTAJQgZAMgmAAIgngCIgTgBQgJABgEACQgFAEgBAFQgCAFADAHIABADIABACIABACIAUAhQAbAxANA4QAQBCgLA8QgGAlgOAeQgPAggYAcQgVAageAXIgPAKIgDADIgNAHQgRAJgTAHQgiALgkADQgSACgUAAIgcgBgAhrBwgAhsBvIAAAAIABABg");
	this.shape_588.setTransform(41.6,-31.2,1.409,1.409);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#4DF324").s().p("AgDEEQgkgEgXgcQgXgcADgkQAAgFACgIIAZh2IAEgmIAAgEIABgEIgBgzIgHgnIgKgeIgWgmQgMgVAGgXQAGgYAUgMQASgLAVADQAVAEAMAPIAOAQIAPASIARAaIAXAzIARA7IAJA5IACBjIgCAfIgFA/QgDAlgcAXQgYAUgfAAIgJAAg");
	this.shape_589.setTransform(-0.8,-117.4,1.409,1.409);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#277836").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIAUgQIAUgLQAKgHANgFIAYgJIAMgDIAagFIAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgGACIgOAFIgUAJIgVANIghAcIgGAGIgCACIgGAHQgEAFgHABIgBAAQgGAAgEgEg");
	this.shape_590.setTransform(8.9,-149.9,1.409,1.409);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#277836").s().p("AgUBRQgIAAgFgGQgGgGABgIIAAgEIAEgOIAYg7IAWgkIAXgbQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBAAIgUArIgPAzIgEAuQAAAIgGAFQgFAFgHAAIgBAAg");
	this.shape_591.setTransform(-4.3,-159.8,1.409,1.409);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#277836").s().p("AgyBGQgHgDgDgHQgDgHADgIIARgYQATgZASgRIAWgVIAkgZIAGgDQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgSAQIgiAqQgMASgMAbIgKAXQgDAHgHADIgHABIgIgBg");
	this.shape_592.setTransform(4,-157.2,1.409,1.409);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#EEDCC4").s().p("AAAA8IgGgHIgHgOIgEgMIgGgfIABgTIADgQIAEgNIAEgIQAFgGAHgCQAIgBAHAEQAJAIgBALIgBAGIgBACIgQBOIABAYIABAFg");
	this.shape_593.setTransform(-14.2,52.6,1.409,1.409);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#EEDCC4").s().p("AglAzIgBgJIABgWIABgGIACgHIAIgXIAKgRIADgEIANgPIADgDIAIgEQAHgEAHADQAIACAEAHQAFAKgHALIgEAEIguA2IgLARIgDAHIgEALg");
	this.shape_594.setTransform(-27.9,49.5,1.409,1.409);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#6BE333").s().p("AgcEaQhBgEg5gTIgTgHIgBAAIAAAAIgJgEQgQgGgMgHQgagPgYgSQgpgggegpQgYgggRgjQgLgYgIgYIgGgPQgLgmASgjQASgjAlgMQAmgLAjASQAjASALAlQADAHAAAFIAAAAIABAEIABAHQACANAFAOQAGASAMAXQAOAaAUAUQAMANAMAJIARALIAAABIABAAIAAAAIAEACIAIAEQAlATAuAJQAxAJAlgHQAIgBALgEIAEgBIABAAIAAgBIAPgGQAXgMAPgNQAkgdARguQAQgrgDg2QgCgxgQgvIgLgeIgBgBIAAgBIAAAAIgBgBIgBgCIgEgOQgEgTAHgPQAIgRAQgGQAOgGAPABIAGABIAPAEQARAFATADQAhAGAagHQARgFASgMIALgIIgCACIgIAIQgOAOgTAJQgZAMgmAAIgngCIgTgBQgJABgEACQgFAEgBAFQgCAFADAHIABADIABACIABACIAUAhQAbAxANA4QAQBCgLA8QgGAlgOAeQgPAggYAcQgVAageAXIgPAKIgDADIgNAHQgRAJgTAHQgiALgkADQgSACgUAAIgcgBgAhsBvIAAAAIABABgAhsBvg");
	this.shape_595.setTransform(41.6,-31.2,1.409,1.409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.instance_5},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.instance_9},{t:this.shape_525},{t:this.shape_524},{t:this.instance_8},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.instance_7},{t:this.shape_518},{t:this.instance_6},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_585},{t:this.instance_43},{t:this.shape_584},{t:this.shape_583},{t:this.instance_42},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.instance_35},{t:this.shape_570},{t:this.shape_569},{t:this.instance_34},{t:this.shape_568},{t:this.instance_33},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_32},{t:this.shape_563},{t:this.instance_31},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.instance_27},{t:this.shape_555},{t:this.instance_26},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_549},{t:this.instance_21},{t:this.shape_548},{t:this.shape_547},{t:this.instance_20},{t:this.shape_546},{t:this.instance_19},{t:this.shape_545},{t:this.shape_544},{t:this.instance_18},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_540},{t:this.instance_14},{t:this.shape_539},{t:this.instance_13},{t:this.shape_538},{t:this.shape_537},{t:this.instance_12},{t:this.shape_536},{t:this.instance_11},{t:this.shape_535},{t:this.instance_10}]},1).to({state:[{t:this.shape_585},{t:this.instance_43},{t:this.shape_584},{t:this.shape_583},{t:this.instance_42},{t:this.shape_594},{t:this.shape_581},{t:this.shape_593},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_572},{t:this.shape_589},{t:this.instance_35},{t:this.shape_570},{t:this.shape_569},{t:this.instance_34},{t:this.shape_568},{t:this.instance_33},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_32},{t:this.shape_563},{t:this.instance_31},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_558},{t:this.shape_557},{t:this.shape_588},{t:this.instance_27},{t:this.shape_555},{t:this.instance_26},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_549},{t:this.instance_21},{t:this.shape_548},{t:this.shape_547},{t:this.instance_20},{t:this.shape_546},{t:this.instance_19},{t:this.shape_545},{t:this.shape_544},{t:this.instance_18},{t:this.shape_587},{t:this.shape_542},{t:this.shape_541},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_540},{t:this.instance_14},{t:this.shape_539},{t:this.instance_13},{t:this.shape_538},{t:this.shape_537},{t:this.instance_12},{t:this.shape_586},{t:this.instance_11},{t:this.shape_535},{t:this.instance_10}]},1).to({state:[{t:this.shape_585},{t:this.instance_43},{t:this.shape_584},{t:this.shape_583},{t:this.instance_42},{t:this.shape_594},{t:this.shape_581},{t:this.shape_593},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_572},{t:this.shape_589},{t:this.instance_35},{t:this.shape_570},{t:this.shape_569},{t:this.instance_34},{t:this.shape_568},{t:this.instance_33},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_32},{t:this.shape_563},{t:this.instance_31},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_558},{t:this.shape_557},{t:this.shape_595},{t:this.instance_27},{t:this.shape_555},{t:this.instance_26},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_549},{t:this.instance_21},{t:this.shape_548},{t:this.shape_547},{t:this.instance_20},{t:this.shape_546},{t:this.instance_19},{t:this.shape_545},{t:this.shape_544},{t:this.instance_18},{t:this.shape_587},{t:this.shape_542},{t:this.shape_541},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_540},{t:this.instance_14},{t:this.shape_539},{t:this.instance_13},{t:this.shape_538},{t:this.shape_537},{t:this.instance_12},{t:this.shape_586},{t:this.instance_11},{t:this.shape_535},{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-0.5,y:-0.5},0).wait(3).to({_off:true},1).wait(9));

	// Layer 3
	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("Ai9CiQhFhAgRhhQgLhAAKhUQAFgqAIgdIAtAcIAggfIGEgEIAnAVIAagdQAaB0gUB1QgnDojiACIgFAAQhzAAhNhIg");
	this.shape_596.setTransform(1.7,29.4);
	this.shape_596._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_596).wait(5).to({_off:false},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-199,263.4,243.2);


(lib.PetOfir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape.setTransform(153.1,-89.2,0.077,0.077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3B3B").s().p("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");
	this.shape_1.setTransform(145.3,-97,0.077,0.077);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape_2.setTransform(117.7,-71,0.14,0.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3B3B").s().p("AhYeBIAAlMIhaBfIhFBFQgqAqgaAcQgNAOgJgBQgJgBgNgNQgtgyglggQgNgMABgJQAAgHANgNIFMlLQAXgWgBgeIAAigQgLgBgHAGIgLAMQjqDphZBbQgPAQgKAAQgKAAgOgQQgigogrglQgOgNAAgJQAAgKAOgOQEpkpCWiTQARgRAHgTQAHgSAAgZIAAp2QgKAAgHAGIgKANIpoJmQgVAVAAAfIABINQAAAXgIAIQgIAHgWgBQg6gEgrAEQgYACgIgKQgHgIABgYIAAlKIAAgmQgKABgHAGIgKANQjHDFhiBkQgQAPgIABQgMACgNgRQgigpgrgkQgQgOABgLQABgJAPgPQA9g7BchdICZiYIAOgLQgHgJgKgBIgQABQj6gBhbABQgXABgIgJQgHgIACgWQADg1gEgoQgCgbAJgKQAJgKAcABQCqACFUgBQAVAAAPgFQAPgHAOgOIJdpdIAcgZQgIgHgJAAIgPAAIpqgBQggAAgYAYIjhDiIjgDiQgQAQgLgBQgLAAgOgQQgngtgmggQgOgMABgKQAAgIAOgNIFOlOIATgUIjDABQgIAAgGAHIgMANQjuDthaBcQgPAPgKAAQgKABgOgQQgfglgwgrQgNgLAAgJQAAgIAMgNQA9g6CjijQgEgJgJAAIgOABQivgBhXABQgTABgHgGQgHgGABgTQADg0gDg/QgBgTAHgGQAGgHATABQCmACCAgKIiQiLQg2g4gdgaQgNgMAAgIQgBgJANgMQAwgrAlgpQAMgOAJACQAHABANAMIFKFMQAWAWAfAAIChgBQABgJgHgHIgMgLQj+j/hEhBQgSgSABgMQABgMASgPQApgkAhgnQAMgOAKABQAIABANANIHFHGQAYAZAiAAIKBgBQAEgIgFgFIgJgIIpvpvQgTgTgeAAIoNABQgXAAgIgHQgIgIABgWQAEgvgDg+QgBgSAHgHQAHgGASAAIFlABIASgCQABgJgHgHIgMgKIjpjpQgNgMAAgJQAAgIANgMQArgnAngrQAMgNAJAAQAJAAANANID7D9QAJgGAAgKIgBgPQABkDgBhWQgBgUAHgHQAHgIAUABQA4ADA5gDQASgBAGAHQAHAHAAATIgCINQAAATAHAPQAGAOANAOIJ4J2QAHgGABgJIgCgQIABpnQAAghgXgXInDnCQgQgQgBgJQgCgMARgOQAoghAoguQAMgNAJABQAHAAANANIFjFjIgBhNQgBgrACgcQACgcgJgWQgJgUgVgVQg5g3hkhkIidicQgQgPABgLQAAgJAQgOQAngiAoguQAMgNAJABQAIAAAMANIDeDfQAIgEAAgJIgBgOQABiygBhZQAAgPAFgGQAGgHAQABQA9ADA+gDQAQgBAGAHQAEAGAAAQIgBD/IAAAuIByhyQBAg/AsgvQARgSAMAAQAMgBAQATQAYAdAyAuQAOAMAAAJQAAAJgNANIlKFIQgZAYABAjIABBOIgBBPQAKABAHgHIALgMQDZjXBqhtQAQgQALAAQALABAOAQQAkApApAkQAOAMgBAJQgBAJgNANInGHFQgZAZAAAhIABJjIAAASQABALAHAMIAKgQQAGgIAEgFIJjphQANgOAGgPQAGgOgBgTQABlXgCirQgBgbAKgJQAKgIAZACQAvAEAvgEQAXgCAIAIQAJAJAAAYQgBA9AAEyQAJADAGgGIAJgLQCPiNBahcQAOgOAJgBQAKgBANAPQAnAsAoAjQAQANgCALQgBAIgOAOIjiDhQgFAFgJAGIgQAJIAHANIB6AAQDRAAAqgBQAVgBAIAJQAHAHgBAVQgEA3AEAuQABAXgIAJQgIAIgYAAQhXgBm2AAQgPAAgHACQgMADgJAJIqBKDQAEAHAIAAIAOgBIJvABQAdAAAXgXIDhjiIDgjiQARgRAMABQALAAAPASQAdAjAvAqQANALAAAJQgBAIgMAMIllFjIBLgBQAoAAAaACQAgACAZgKQAYgKAXgYQA1g4BkhjICZiaQAPgQALABQAKAAANAQQAmAqAqAlQANAMgBAJQAAAIgNAMIjlDkIFHAAIAACzIlHAAIBwBwQBBBBAsApQATASgBANQAAANgTAQQgnAighAmQgNAPgKgBQgJgBgOgPIlIlJIgNgMQgHgHgGgBQgpgBiTAAIgFALIAeAXICfCfICgCeQAPAPAAALQgBAKgPANQgpAkgkApQgNAPgKgBQgJAAgOgOInFnHQgXgXggAAIpnABIgQAAQgLAAgJAJIAeAYQEvEtEtEvQAOAOAOAGQAPAHATgBIINgBQATAAAGAGQAHAHgBASQgCBCADAvQABATgIAHQgHAHgUAAQhzgBjmABQgKgCgGABQgJAAgGAJIFCE/QANAOABAIQAAAKgOAMQgqAlglArQgNAOgKAAQgKAAgNgOIksksIgKgMQgIgHgJABIAAAlIAAFOQABAVgHAIQgHAJgVgCQgugEg7AEQgWABgIgHQgIgIAAgXIABoNQAAgfgVgVIpqppIgJgLQgHgGgJABIAAKBQAAAjAaAbIHEHCQAOAOABAJQAAAKgPANQgmAhgnAsQgNAPgKABQgLAAgPgPQgogqg6g7IhkhjIiaiaIABBYIgBBRQgBAgAYAYQBuBsDbDcQAPAOAAAJQAAAKgPANQgnAigrAwQgLAMgIAAQgIgBgLgLQgfgggygyIhRhQQgPgQg0g5IAAFLg");
	this.shape_3.setTransform(103.6,-85,0.14,0.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3838").s().p("AgmAwQgOgKgBgQQAAgPAegdQAdgfAPAAQARAAAKANQAKANgIAPQgTAkgqAaQgGAEgGAAQgHAAgIgGg");
	this.shape_4.setTransform(124.8,-121,0.243,0.243);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424142").s().p("AgmAxQgNgIgCgRQgBgQAegeQAdgfARAAQARABAKAOQAJAPgJAPQgaAmghAUQgHAEgHAAQgHAAgHgFg");
	this.shape_5.setTransform(129.1,-116.7,0.243,0.243);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424142").s().p("AgvAmQgMgUAOgPQASgTAegdQAPgOAUALQARAIgBATQAAAOgeAeQgdAegPABIgCAAQgRAAgIgQg");
	this.shape_6.setTransform(127,-118.8,0.243,0.243);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424142").s().p("AgWA2QgRgBgIgLQgJgLAFgPQARgpAwgZQANgHAOALQAOALgBAPQgBAPgfAdQgdAegOAAIgBAAg");
	this.shape_7.setTransform(132.4,-119.9,0.243,0.243);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424142").s().p("AgxAmQgKgVAOgOQAfggAQgPQAKgJAMABQALABAKAKQAJAKAAALQAAALgJAJIgdAfQgQARgNAGIgCAAQgbAAgHgQg");
	this.shape_8.setTransform(130.2,-122.1,0.243,0.243);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424142").s().p("AgVA1QgTAAgJgQQgJgRAMgPQAXgdAdgWQAPgMARAJQAQAJAAATQAAAQgfAdQgcAdgQAAIAAAAg");
	this.shape_9.setTransform(135.6,-123.2,0.243,0.243);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424142").s().p("AgXA1QgQAAgJgOQgJgOAIgOQAVgkAmgYQANgIAPAJQAPAIABARQABAQgfAeQgdAegRAAIgBAAg");
	this.shape_10.setTransform(133.5,-125.3,0.243,0.243);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3838").s().p("AgvAnQgMgUAOgPQATgUAegdQAQgOASAMQARAKgCASQAAAOgeAcQgcAegOAAIgEAAQgRAAgHgOg");
	this.shape_11.setTransform(128,-124.3,0.243,0.243);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3838").s().p("AgwAlQgKgQAMgPQAXgeAggXQANgKAQAJQAPAJABARQAAAPgeAdQgdAfgQAAQgSAAgJgQg");
	this.shape_12.setTransform(131.3,-127.5,0.243,0.243);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3838").s().p("Aj+C9QgzgjgNg+QgMg/AigzQAig1A9gOQA9gNA2AiQAOAJAOABQAMABAPgGQBTgfAyheQAJgQAMgGQAKgGATABIBSABIBYAAQg9CEhBBLQhSBdhzAkQgaAJgPATQgmA1g9ALQgOACgNAAQguAAgogbg");
	this.shape_13.setTransform(93.6,-62.5,0.243,0.243);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3838").s().p("AB7DZQg8gOgjg2QgNgUgagKQhwgnhMhYQhChMgvh8QBAABAlgCQA1gCAsgJQANgCAGAIQAEAFAFALQA3BcBEAkQAOAHAKABQANABAOgIQA5geA7ATQA8ASAeA4QAdA1gQA8QgQA7g1AgQgmAXgpAAQgSAAgSgEg");
	this.shape_14.setTransform(147.7,-62.6,0.243,0.243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A3838").s().p("AB1ErQgHgBgLgKImBmCQgKgKgBgGQgBgHALgJQB4hkCFg/IANgEQAJgBAGAGIAKAKIEZEYQAKAKACAJQACAKgGANQhACChfB1QgJAMgIAAIAAAAg");
	this.shape_15.setTransform(138,-129.4,0.243,0.243);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3838").s().p("As1XnQhbgBg3gDQhPgFhCgMQiagehshgQhkhag/iXQgjhRgbh3QgciJgPhEQgfiNgkixQgDgNgFgFQgHgGgMABIgTAAQh3ANgthqIAAjDQAag0AtgVQAogRBAAAUAQkAABAhGAAAQAcAAAIgHQAKgIgBgbQgBpgABq2QABgXgJgIQgHgIgZgDQidgWhfB5QgHAKgUAQQgpAhgPAWQgXAjAIAsQACAPgGAUIgMAgIjRjRQA4gZA0AFQAQACAOgFQAMgFANgMIC4irQAfgeArAAQBRABCjAAQApAAARASQASARAAAqQAAQ6gBE2QAAAaAJAIQAJAIAZgCQAdgBAqABIBHAAQA5ABAlAjQAkAkAAA5QABA3gBA2QAABCgjAkQgkAlhAgBQgcAAgLAKQgLAJgGAaIg+EcQgkCgghB5Qg8DjigCJQimCOjtAQQg2ADg3AAg");
	this.shape_16.setTransform(119.5,-106,0.243,0.243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B393A").s().p("ApZD8IgKgFQhFgdgGgPQgGgRAlg+QDalsG9gTQHOAZDTGOQAJARgDAJQgDAJgRAGQgnAOgiASQgRAKgKgEQgKgEgKgTQiIkBkYg+QjOgui/BdQi/BchcC/QgKAWgKAFQgEACgFAAQgKAAgNgIg");
	this.shape_17.setTransform(124.6,-74.8,0.224,0.224);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A3839").s().p("AjUDXQhZhZAAh+QAAh9BYhYQBYhYB9AAQB9gBBYBYQBYBYABB9QABB9hYBZQhXBYh9ABIgDAAQh8AAhYhXg");
	this.shape_18.setTransform(110.6,-107,0.224,0.224);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3839").s().p("AgEEuQh9gChWhYQhXhaABh9QABh9BZhXQBZhXB9ABQB9ACBYBYQBXBZgBB8QgBB/hZBXQhYBWh8AAIgEAAg");
	this.shape_19.setTransform(138.4,-107,0.224,0.224);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B393A").s().p("Ao8csQmJh8lNkvQnxnDhqqzIgEg2QgDghgKgUIAAlIQALgYAEgmQADgrAEgVQB5rcI9nTQHAluIrgxQIBguGqCyQGpCyFKGNQFpGyA2I6QAoGsh9F3Qh9F5kiE9QjoD9keCXQkgCXlRAtQiRATiKAAQkiAAkKhTgAqc45Qk2CCjwDvQjvDviEE2QiJFBgBFfQgBFeCHFBQCCE2DvDwQDvDvE2CFQFBCJFfABQFeACFBiHQE2iCDwjvQDwjvCEk2QCJlBAClfQABleiHlCQiCk3jvjwQjvjwk3iFQlBiIlggBIgDAAQldAAk/CHg");
	this.shape_20.setTransform(124.5,-94,0.224,0.224);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A3839").s().p("AgJFGQiPgGhahkQhahkAHiPQAGh/BkhbQBkhaB/AGQCLAGBcBjQBdBjgGCGQgGCGhkBdQhdBXh5AAIgPgBg");
	this.shape_21.setTransform(126.9,-135.6,0.23,0.23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3839").s().p("Ag7eAQgDgJgLgDIgRgGQhxg4gIh4IAAg0IADqLQABl9gBkNQgBhGgLhgIgVimQggkZgpjDIgDgPQgCgJgHgHIiFChQhVBoh0CiQgtA+guAVQgtAVg4gRQg9gTgsg3Qgsg3gEhAQgEhLAsg/QE1m2GimYQAUgUAigOQAUgJApgOQA5gWBOALQAsAGBYARQBmAMB9gFQBTgDCPgPQAMgBAEgHQABgEABgNQALiUgYiMQgDgPgHgGQgGgHgOgBImNg2QgJgCgDgCQgFgDADgJIAEgOQAEgGAKADQAZAJAXgMQALgFAcgYQA+gzBHgFQAmgDAHgdQAHgbAPgQQARgSAegIIkIhMIgUgGQgJgGAFgPQAGgQALADQAGACALAGQDbA9CbAuQAbAIAYgQQA6gnBGAEQA1AEAkAeQAmAeAMA0QBKFCgZECIgQCgQgJBIgtAuQguAvhIAJQj+AiirAHQgVABgFAIQgFAHAFATQA3DqAnELQAiDlAZETQAJBjAmCEIBCDhQBnF9CPHiQAaBWgnBNQgoBQhWAYQhVAZhIgrQhIgsgahaIkFuNQgFgTgLgJIAAAfIgDGxQgCEAACCxQABBngkA+QgpBEhdAdg");
	this.shape_22.setTransform(132.5,-100,0.23,0.23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgEABQgBgDACgCQADgDACAEIAEAEIgGAFQgDgCgBgDg");
	this.shape_23.setTransform(151.4,-112.3,0.238,0.238);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3B3C").s().p("Ak+DGQgTgRAVgaIBBhJQBBhGBZhBQAPgMAIgFQANgHAOAHQAOAHAAAPQAAAJgEATIACAOICAhUQBRg1Bog1QAQgIAJgBQANAAAIAOQAIAPgIALQgGAJgQAIQiMBEi+CGQgJAGgRAQQgQAKgQgHQgRgHABgUQACgegBgFQhKA4hOBZIgVAaQgMANgIADQgDACgEAAQgIAAgJgIg");
	this.shape_24.setTransform(108.9,-99.2,0.238,0.238);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3B3C").s().p("AnbHVQgbgBgMgXQgLgXAOgcQAphRA6haQBnifCOiYQAOgPAMgFQAQgHARAHQARAGAIAPQAGAMAAAVIAEBCQDtj5DAiaIBNg8QAXgRATAAQAUABAOASQAcAmgvAjQjmCvkMEaIg/BEQgPARgNAFQgQAHgTgHQgRgHgHgPQgFgMAAgVIgDg0QgJgBgGAGIgJAMQiLCmhdC1QgLAUgJAJQgNAMgSAAIgCAAg");
	this.shape_25.setTransform(109.7,-88.3,0.238,0.238);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A3839").s().p("AkJEZQh0hugFimQgEiZBvh0QBuh1CcgEQCjgFB0BvQB0BuAFClQAECZhuB1QhuB0iZAEIgNAAQieAAhwhpg");
	this.shape_26.setTransform(123.6,-139.7,0.238,0.238);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3839").s().p("AIRYEQgIgIgPgEIgZgHQhsgtgkh1QhTkRg3k1Qg4k3gYlxQgBgTgbgVQgbgUgRAEQgHABgCAHIgEANQhVD9gpEFQg1FLARFHQAGB9hJBIQhCBBhtAEQh0AEhPhJQhOhJgFh0QgZp2C5pYQAoiBA/inQAFgOAJgGQAIgGAQAAQBWgBBogJQBKgHBzgPQB3gPBDhOQBEhOgMhuQgLhshUhBQhThBhrANQjnAei4gGQgUAAgOgGQgOgIgLgQQgLgQgYgeQgYgfgLgQQgHgKgGgBQgGAAgJAJQg3AygqA1QgOASAEAKQAEAIAVAHQBJAaBeAHQA3AEBzgBQB2gBCqgWQBdgMBIBRQBHBRgcBYQgRA2grAjQgpAgg4AJQjVAjiXAEQjGAGimgpQjRgyhfiXQhqiqBXi4QAphXBKhQQA5g+BehMQB8hlB8g9QCKhECQgXQCWgXB5AyQJ+EEFzIbQAzBKgIBBQgHBChBAwQhHAzhPgKQhPgKgyhEQg+hWgsg2Qg8hLg7g3IgEgFQgDgDgDACQgCACABAEQABAEAEACQA+CvAmCRQAWBVAGB1QAEBEADCHQAaKACtJJQAnCFg1BXQg0BXiIAeIgDAGg");
	this.shape_27.setTransform(139.6,-94.2,0.238,0.238);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3839").s().p("Al0NtQgWgJgfggQiaiekUkQQgSgSgFgQQgFgRAHgZQAHgYAFgqQAGg1ADgOQAhipB9h9IMAsBQAOgOAJAAQAKgBANAPQA6A/A3AyQAQAOgBAKQgBAKgPAOQl0F2i8C5QgQAQgBAKQgBALARAPQAyAsA9BBQAOAPAJAAQAKABAPgQQCuivFfleQAtgtAPAAQAQAAAuAuIBgBiIgaAbQm7G6hvBuQgSASAAALQgBANATAQQAoAlBFBJQANAOAIAAQAJgBANgNIEXkYQCvitBohrQATgTAMAAQANAAARAUQAuA1A6AzQARAPgBAMQgBAKgQAQIq7K5QhFBFgZAWQg3AxgzAcQhoA4iIAMIgRAAQgKABgFACQgVALgUAAQgMAAgMgEg");
	this.shape_28.setTransform(153.3,-120.8,0.193,0.193);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3838").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_29.setTransform(112.3,-79.9,0.193,0.193);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3838").s().p("AVddzQhVgahDhLItgvFQj2kSh4iKQgPgRgLAAQgKgBgPARQgZAbgqAqIhEBEQgMAMgIAAQgIAAgMgMIipiqIpCpCQlVlWjujrQiUiRg8i5Qg4itASjWQAIhqAih3QAahcAwh9ICQAAQAVAZAHAHMAwtAwtQBrBqAWAcQBCBQATBUIAABwQgIAFgDALIgDATQg7C+i5AtQgtAKgrAAQgxAAgsgNg");
	this.shape_30.setTransform(135.6,-101,0.193,0.193);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_31.setTransform(112.3,-79.9,0.193,0.193);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3A3839").s().p("AgCGdQiqgBh5h6Qh5h5ABipQAAirB6h5QB6h5CrABQCrAAB5B6QB6B6gCCqQgBCsh6B4Qh5B3iqAAIgCAAg");
	this.shape_32.setTransform(125.4,-140.3,0.234,0.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B3939").s().p("AGYG6QgWgYAAgoIAAjYQAAgQgCgEQgEgJgPAAIm9ABIB8DaQARAdgIAeQgIAdgcAPQgaAQgdgIQgcgIgTgeIgUgiIh7jWIh+DxQgdA4g3gLQg0gKgJg3QgCgOAFgQQAEgKAJgRIBrjNQANgZAAgcQgCigAChrQABgfgZgTQg4grg8gyQgcgXgEgeQgFgfAUgZQAUgaAegCQAegDAdAXQBFA0AcAZQAVATAYAJQAWAIAegBQB8gCD3ABQAjAAAgASQCkBgB/BHQAOAIAGAKQAGAJgBARIgBHiQAAAngUAYQgUAYghABIgCAAQghAAgUgYg");
	this.shape_33.setTransform(161.3,-73.8,0.234,0.234);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A3839").s().p("AxoXDQhRgegjhNQgjhOAghUQCMl0BDijQA9iSAHijQADhcAJiBIAPjdQACgcgMgRQhFhnAdiGIB0oWIAEgYQABgOgFgOIhXBMQiUCIidDEQhEBVhigVQhjgWgYhlQgRhIArg1QCtjYCQiKQC4ixDBhuQCkheCtgYQDNgbCgCpQA+BCBSBmICKCtQC8DmELCvQBBAqAWAxQAaA2gYBGQgEAJAEAHIAKAKQBdBbFIFSQEDEMCrCaQAQAPABAKQAAAKgRAMQgLAIgGAJQgNATgNgBQgMAAgRgRQh+hzihinIkUkjIiDiJIiEiJQgMgMgLgCQgLgCgQAHQhOAkhUg5QlOjejSkGQgCgCgBgFIgDgIIgLAHIiCJgIgBAEQgbAtAOAuQAIAaAkA3QBZCHCrETQAcAtAOAxIDJLfQAYBcgoBKQgoBKhWAYQhVAXhGgsQhIgsgZhaIi7qtQgLgqgWgiIjdlbIgJB8QgGBGgBAvQgDCUg8CSQguBzhIC6Ih0EtQgfBRhMAiQgpATgqAAQgjAAgkgNg");
	this.shape_34.setTransform(129.6,-96.4,0.234,0.234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3B3939").s().p("Ag2EtQhZg1i1hkQgRgKgBgIQgCgIALgQQBEhiBIhtQAxhKAThGQAUhHA1AHQAbADATAXQAUAZgFAeQgJA1ASAnQARAlAsAdQAIAGAIALIANAVQAkA5A+AZQAtASAfAVQAlAZAZAiIAAAwQgpBFhAAUQhCAUhOghQgfgNgVADQgVAEgSAZQgLASgOACIgFAAQgLAAgRgKg");
	this.shape_35.setTransform(174.8,-85.7,0.234,0.234);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B3A3A").s().p("Ai8ELQgvAAgPghQgQgiAegkIEdlJIjCgBQgLAAgRgBIgcgDQgggEgFgfQgEgkAggRQAQgJAiAAIEnAAQAVAAAOADQAvAKALAeQAKAegfAlQgsA0hABIIhtB4Ig9BFQAGAHAKABIARgCIDrABQAdAAAQAPQAQAPgBAYQgCAyg5AAIjCABIjAgBg");
	this.shape_36.setTransform(152.1,-107.2,0.196,0.196);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B3A3A").s().p("AjZFQQgeAAgVgHQgsgQgKglQgLglAegjQAkgqA3g9IBchmICxjIQgKgKgNgBQgOACgHgBIj7gDQgeAAgPgLQgTgNABgfQAAgcARgSQATgTAeAAQDngCDQADQA+ABARAqQALAagIAZQgHAVgUAXIlhGLIFHAAQAkAAATAJQAnASgBArQAAAqgpAQQgTAIggAAInDAAg");
	this.shape_37.setTransform(137,-115.9,0.196,0.196);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A3838").s().p("AoHahQkdhijwi1Qjxi3iqj5QiwkBhTkvQhblKAhlUQAglKCQktQCRktDujnQD2juE7iGIAfgNQASgGAPABQAtAEATAkQATAlgUAtQhOCygnCtQhFE4AzE7QAxEyCbEPQCaENDuDGQD1DMEvBjQJEC+JCjbQAngOAKgCQAtgJAdAmQAfAogaA2QhnDWiLCpQmuIJqdCGQidAfjAACQk1gCkihkg");
	this.shape_38.setTransform(133.4,-98.4,0.196,0.196);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3A3A").s().p("ADoFOInOgBQgwAAgZgYQgZgYAFgoQACgOAJgOQAFgJANgOIExlWIAzg+IjmAAQg0AAgggEQgvgFgCgqQgDgzAugRQAMgEAgAAIF+AAQAeAAAOADQA5AJAPAnQAPAmgkAsQgqAziVCoIinC8IEFAAIBEgBQA7gDAgAxIAAAoQggAqg6AAIgDAAg");
	this.shape_39.setTransform(167.3,-117,0.196,0.196);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3B3939").s().p("AhnBpQgrgrgBg+QABg8ArgrQArgrA8AAQA8AAAsArQAsArAAA8QgBA9grArQgrArg9AAIAAAAQg9AAgqgqg");
	this.shape_40.setTransform(145,-107.1,0.193,0.193);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B3939").s().p("AAACTQg9AAgrgrQgrgsABg8QAAg9AsgrQAsgrA8ABQA9AAAqAsQArArgBA9QAAA9grArQgqApg8AAIgCAAg");
	this.shape_41.setTransform(116,-107.1,0.193,0.193);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B3939").s().p("AiuEdQgsgCgggfQghgfgCguQgCgvAfggQBahdEFkDQAOgOATgHQAQgIAMABQAuABAcAPQAcAQAPAfQAPAigDAfQgDAhgZAZQivCzizCvQgeAdgpAAIgGAAg");
	this.shape_42.setTransform(142.9,-113.6,0.193,0.193);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B3939").s().p("ABeD+Qhehcj9j+QgfggABgvQAChKBBgdQAhgPAiAHQAjAHAcAcIErEqIAqArQAeAjgBAtQgBAtgfAgQggAhguABIgDAAQgtAAgggfg");
	this.shape_43.setTransform(118.1,-113.6,0.193,0.193);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3939").s().p("Ap2HjQh1AAhUhEQhVhDgYhwQgFgaAAgwQgCiRABi0QABiPBYhYQBZhZCOAAITjAAQCQAABYBYQBZBYABCOQABDbgBBuQgBCOhaBYQhZBZiOAAIpxABIp2gBgAJ+FtQAsAHAigVQAbgSAagoQAlg6gEg2QgDgkADgvQABgQgGgFQgGgGgQABQiAABhwgCQgQAAgFAHQgFAFAAAQIABB0IAAA6IgBA6QgBAUAGAHQAHAIAUgBQAfgDAYAAQAYAAASADgAoUFsQAOABAFgFQAFgFAAgNQgCh8ACh7QAAgOgFgFQgFgFgNABIh8AAIglAAIg4gDQghgCgMALQgOAMACAiIAFA6QgDAzAaAuQAUAjAtAoQAKAKAUAAIBYAAIA+AAgAFVFsQAOABAFgGQAFgFAAgNIgBh4IABh8QAAgOgFgGQgFgGgPABQh6ABh6gBQgNgBgFAFQgFAFAAAOQACB6gCB5QAAAPAEAFQAFAHAQgBIB5AAIB6AAgAlnBNQgFAFABAPQABBRgBCjQAAANAEAFQAFAGAOgBQB6gBB5ABQAPABAGgHQAEgFAAgPIgBh3IABh8QAAgOgFgEQgEgGgOABQh6ABh5gBIgDAAQgNAAgFAFgArJlfQgYAOgbAkQggAqgEBAQgDAkADBKQgBAKAIACIAPABID0AAQAPABAFgFQAGgGAAgPQgCiSAChhQAAgQgHgEQgFgEgPAAIg2ACQggABgWgDIgSgBQgdAAgXAOgAlnlmQgFAGABAOQABCggCBQQAAARAHAFQAGAFAQgBIDtAAQAOABAGgFQAGgGAAgOQgCh6ACh6QAAgNgFgFQgEgGgOAAQh6ACh6gCIgCAAQgNAAgFAGgABOlnQgFAEAAANIABB7IgBB8QAAANAFAGQAGAFANgBID0AAQANABAGgGQAFgFAAgOQgCh5ACh6QAAgOgEgFQgFgGgOAAQh7ACh8gCQgNAAgEAFgAMMhIQANAAAEgFQAFgEAAgNQgCg2ACgcQAEgzgZguQgTglgrgpQgOgNgUAAQhmABgzgBQgNAAgFAFQgFAFAAANIABB8IAAB7QgBAMAEAFQAFAFAMAAIB9AAIB9AAg");
	this.shape_44.setTransform(130.5,-91.3,0.193,0.193);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AtuNwQgHgGAAgUIAB7KQALAYADAoIAHBCQDERcQgGaQDPBQEPAZIALAAQAFABADAHI7MAAQgTAAgFgFg");
	this.shape_45.setTransform(110.5,-83.6,0.193,0.193);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B3939").s().p("AiVeAQgCgHgGgBIgLAAQkOgZjPhQQwhmajExdIgHhCQgEgogKgYIAAkzQAHgDABgHIAAgMQAaj3BMjYQC+obHGlZQHGlaI8gqQHxgkG+DOQE9CTDzD1QDtDvCNExQCNExAdFPQAeFYhcFTQiZIwnBGBQjZC5kCByQkJB0kcAfIgpACQgZACgPAKgAAA5XQlLAAkuCAQkkB8jgDhQjhDhh7EjQh/EuABFJQABFMCBEuQB8ElDhDgQDiDgEjB7QEtB+FIgCQFNgCEtiAQEjh7DgjgQDfjgB7kjQB+ksAAlLQABlKiAktQh7kkjhjhQjhjhkjh7Qkth/lJAAIgCAAg");
	this.shape_46.setTransform(130.5,-103.6,0.193,0.193);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#403F3F").s().p("Ai+gIQAlgZA2gRQAfgJA9gPQAcgIAVAHQAVAGAUAYQAUAZAgAhIA4A5IgEAJg");
	this.shape_47.setTransform(82.1,-121,0.281,0.281);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#403F3F").s().p("AisA/QgjgTgPgpQgKgbAQgbQARgbAaADQBMAKFDAwIABAIIlCBRQgPAEgOAAQgZAAgXgNg");
	this.shape_48.setTransform(79.6,-117.9,0.281,0.281);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AiahsQCJAZCsA3Ii0CJQhKhxg3hog");
	this.shape_49.setTransform(114,-91.2,0.281,0.281);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3A3839").s().p("AAAEsQh8gBhXhZQhYhZAAh6QABh8BYhYQBZhXB7ABQB9AABWBYQBYBYgBB8QgBB8hXBYQhYBXh6AAIgCAAg");
	this.shape_50.setTransform(144.8,-142.2,0.281,0.281);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A3839").s().p("AqvOEQgUAAgJgHQgJgGgGgTQgqiAgtjJIhLlMQgEgQAJgGIASgGQHWixDym6QBdipAsjOQAEgTAIgHQAIgIATgBQHWgZF4gYQAVgBAGAIQAEAFAAAVIAANiIAANhQAAAVgHAHQgHAHgUAAQsHgCsFACg");
	this.shape_51.setTransform(153.4,-85.1,0.281,0.281);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3A3839").s().p("AuzXDQhLgQgxhEQg8hUANhdQANhfBQg5QB3hWDkicQAQgLACgJQACgJgLgRQiXjqi3lvQg1hqAqhmQArhmBrgYQAkgHAwABQAcABA4AEQCIAICMAXIAQADQAJgBADgNQAeh3BPhwQA9hWBshpIBohfQhzADiTAVQiOATiUAmQgOAEgDAFQgEAFADANQASBLhCA/QgyAwhFAgQg6AahPASQlwBUlKhsQhQgag0glQg+gsgihCIAAhLQA5hiBsgzQBJgjCMgaQEog4ErBSQABgNgDgdQgDgaACgPQATiMCFgjQHGh3HQARQCtAGCGATQAcAEAQAGQAYAIAPANQAYAWAjAMQAUAGAvAIQBfARBmAoQBTAgBnA2QB3A+CKAlQgLgygkhLQgrhYgLgiIhYBGQgMAKgHAAQgIgBgKgNQgigthNhgQgJgKAAgGQAAgHALgJQDni1DdiyQAKgIAHACQAFABAIAKQBUBrAhAnQAIAKgCAHQgCAFgJAHIhiBOQArAQAdAnQARAWAcA4QCFEKAOEeQADBOg3A9Qg4A9hIgEQgvgDg/gGIhtgOQh9gQiKhCQgUgKgIADQgKADgIAWQigGhj1FFQh9CnjMBpQgRAJgXATIgmAfIklDhQgPALgBAIQgBAJAJAPQBJB6hQB5QhQB4iFgQQhNgJg7hMQgLgPgKgCQgKgBgQAMIizB9QhxBOhCAwQhGAzhEAAQgTAAgTgEgAkjIcIC2iKQiug3iJgZQA3BoBKBygA3rrNQiIAihNBFQgvArgBAvQAAAvAvAsQApAnBCAcQBfApByATQBdAQBzACQDCgBCOgoQBDgTAsgUQA6gaApglQAbgYALgXQAPgdgFggQgDgPgGgHQgHgIgRgCQhqgIg3hiQgPgbgegIQiqgvisAAQihAAiiAqg");
	this.shape_52.setTransform(121.5,-103.3,0.281,0.281);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8B019").s().p("AAjAiQgZgrg+gZQA0gGAqAnIALAFQgBAPgOARg");
	this.shape_53.setTransform(-136.1,-121.3,1.029,1.029,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#146614").s().p("AgRAAQAQgEATgEQgBAHgGAFQgFAEgGAAQgLAAgGgIg");
	this.shape_54.setTransform(-108.2,-119.1,1.029,1.029,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5AE97").s().p("AgsAHQAlgMA0gIQgTATgMAFQgIADgJAAQgQAAgZgHg");
	this.shape_55.setTransform(-109.3,-119.3,1.029,1.029,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#146614").s().p("AgTAQQgSgDgQgGQANgFAZgFQAigJAjgEQgWAYgQAHQgGACgKAAQgIAAgLgBg");
	this.shape_56.setTransform(-109.5,-119.1,1.029,1.029,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#146614").s().p("AgeAFQAbgIAigFQgNALgIAFQgFABgGAAQgLAAgSgEg");
	this.shape_57.setTransform(-88.5,-115.8,1.029,1.029,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIgvAyg");
	this.shape_58.setTransform(-131.3,-135.2,1.029,1.029,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#38A81F").s().p("ACQBZQgpgzhjANQhzAbg2AHQgVgRgfgSQADgOAJgPQAUANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAJgJABgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_59.setTransform(-102.4,-115.9,1.029,1.029,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#24BD27").s().p("ACQBZQgpgzhjANQhzAbg2AHQgVgRgfgSQAMgxAwghQBCAIBmgTQBTgQB8gnIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_60.setTransform(-102.4,-115.9,1.029,1.029,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBC156").s().p("AiEATIgQgRQAYgDA7gPQA2gNAdgEQBfgMAkA9IjwATIgFABQgWAAgOgRg");
	this.shape_61.setTransform(-102.1,-108.4,1.029,1.029,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#24BD27").s().p("AEFKpQAuhpASiHQAfjihCjgQhFjuiki3Qh8iLiPhJQE+Gkg2JPQAHiegljQQhImejZj6QA+CJAjC6QAvD3guClQAQiegnjGQgfibg5iUQAYBvgPCDQgOB+gnA+QgagKgTAAQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgCgUgIgfg");
	this.shape_62.setTransform(-175.4,-46.6,1.029,1.029,0,0,180);

	this.instance = new lib.Path_1_0_5();
	this.instance.parent = this;
	this.instance.setTransform(-175.5,-29.1,1.029,1.029,0,0,180,36.9,55.9);
	this.instance.alpha = 0.5;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1C6E19").s().p("ADoJJQg8iehng3QgViAguhCQgxhGhyg1QgQhYhChDQg+g/g+gCQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_63.setTransform(-175.4,-46.6,1.029,1.029,0,0,180);

	this.instance_1 = new lib.Path_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122,-14.1,1.029,1.029,0,0,180,8.6,33.2);
	this.instance_1.alpha = 0.27;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#46E854").s().p("AAaDeQAfhJgKg3QgsghAYg2QARgiAJgWQARglAEgkQAIhMgUg5QgYhFg6gMQgRgDgSAIQgTAHgRARQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA5gIBMQgEAkgRAlIgaA4QgYA1AsAiQAKA3giBOQgnBegEAwIgNADQAFgnAnheg");
	this.shape_64.setTransform(-128.3,-17.2,1.029,1.029,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#24BD27").s().p("AgWDbQgFhHgggqQgshcgMhTQgMhdAchNQATg9AkghQAhggAhAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3giBOQgoBfgEAvIg3APQAOhYgDg2g");
	this.shape_65.setTransform(-125.5,-16.6,1.029,1.029,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#24BD27").s().p("AAuAhIhpAAIgGgCQgDgPgJgNIADAAICYgjQACAbgKATQgKATgMAAIgCAAg");
	this.shape_66.setTransform(-119.7,22.3,1.029,1.029,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8B019").s().p("AgRgEQASgIAlgDQAJANADAOIgZgGQgggDgqANQARgPAPgFg");
	this.shape_67.setTransform(-107.7,24.3,1.029,1.029,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3CC951").s().p("AgVACIArgDIgGABQgEACgGAAg");
	this.shape_68.setTransform(-172.5,25.1,1.029,1.029,0,0,180);

	this.instance_2 = new lib.Path_1_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-166,-8.6,1.029,1.029,0,0,180,12.7,32.4);
	this.instance_2.alpha = 0.27;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#24BD27").s().p("AiwFHIgCgXQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQALgIgBgOQgCgNgNgGIhMgdQgfgNgTgbQgSgcAAghIADjvQAAg9ArgsQAsgrA9AAQA8AAAsAqQArArABA9IgBAFIguDiQgBAJAEAIIBkCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_69.setTransform(-171.6,-8.3,1.029,1.029,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8B019").s().p("AAugTIAQgDQAJANACAdIgEAAQgegMgnACQgiABgmAMQAvguBHAEg");
	this.shape_70.setTransform(-148.1,23.3,1.029,1.029,0,0,180);

	this.instance_3 = new lib.Group_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-160.6,-62.4,1.029,1.029,0,0,180,53.4,74.2);
	this.instance_3.alpha = 0.398;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBC156").s().p("AAALgQg7AEgsgSQgvgSgshTQgzhhgfgaQgPgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAYhMAQhsQgBhzAUiqQAajDALhiIAUAAQAABQgPDeQgMC6AFA1QAGA9ClCuQBkBpAUAXQA7BDAMAhQAPAoA2ArQAxAoAiAIQAzALBCABQBeABAvgbQBFgmAhgkQAwg1AJhLQAJhHgtiZQgdhkghhOQg6hpguhZQhbiugKhKQgLhQAVg+QAKgeAnhFQASgfAxgsQhLBMgbBZQgiBwA0BxQAeBBBHB3QBZCUAbAyQCFD4gUCqQgIBEgsBBQguBDhIAuQhxBHiDAAQhCAAhFgSg");
	this.shape_71.setTransform(-162.4,-63,1.029,1.029,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#46E854").s().p("AFEGFQAAiRhFhvQhEhuhogYQgVgFgmgXIhIgtQhjg8hGACIgVADQg8ibALjJQABgMgBglQAAggACgTIg3AAIADgUIBEAAQgCATAAAgQABAkgBANQgKDJA7CbIAWgDQBFgCBkA8IBHAtQAmAXAWAFQBnAYBEBuQBFBvAACRQAACCg4BpIgHACQAvhiAAh3g");
	this.shape_72.setTransform(-151,-53.4,1.029,1.029,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#24BD27").s().p("AhYAEQAdjZAMhuIBEAAQgCATAAAgQABAkgBAOQgND7BiC3IjMBvQgJiCAVi9g");
	this.shape_73.setTransform(-121.1,-82.4,1.029,1.029,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#24BD27").s().p("AkTMFQAphHBaiLIBTh8QAsALAtgcQA1ggAVhEQA4i2jLlCQiVjqBtjKQAohKBBgzQA7gsArgDQhnA4g8BsQhUCTBGCZQAdBBBGB2QBZCUAbAzQCGD4gVCpQgHBFgtBBQgtBChJAuQhwBIiDAAQhBAAhGgSg");
	this.shape_74.setTransform(-190.8,-66.7,1.029,1.029,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#24BD27").s().p("AA5GPQgvgSgrhTQgzhigfgaQgPgNgTgJIgngRQg5gXgfgSQgwgbglgnQgTgUgHgbQgGgbAJgbQAXhGAPhiIAXirIBJBBQArghA4gCQBGgDBiA8IBJAtQAmAXAWAFQBnAaBEBtQBFBvAACQQAACDg5BoQhfAdguAHQgbAEgZAAQguAAglgOg");
	this.shape_75.setTransform(-145.9,-29.7,1.029,1.029,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#146614").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAkgRAmQgJAVgRAiQgYA2AsAhQAKA3ghBOQgpBegEAwIg3APQAOhXgDg3g");
	this.shape_76.setTransform(-121.1,-16.6,1.029,1.029,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#146614").s().p("AhZAMQAVgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgrANQASgQAPgGg");
	this.shape_77.setTransform(-110.8,22.4,1.029,1.029,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#146614").s().p("AgzAFIDeg1IAABdIjIAAQgdgLgnABQgjACgmAMQAvgwBIAEg");
	this.shape_78.setTransform(-151.7,20.7,1.029,1.029,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#146614").s().p("Ai0FHIC2h3Ii7hJIAFk5QAAg9ArgsQArgrA+AAQA8AAAsArQArAsABA9IgxDuIB2C6IiqBRg");
	this.shape_79.setTransform(-167.7,-8.3,1.029,1.029,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3B393A").s().p("Ah1B4QgwgxgBhGQAAhEAxgxQAxgyBEAAQBEgBAyAxQAxAxgBBFQABBGgwAxQgxAwhFAAIgBAAQhFAAgwgvg");
	this.shape_80.setTransform(167.1,-104.1,0.277,0.277);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3B393A").s().p("Ah1B4QgwgwgBhGQAAhFAwgxQAxgxBFgBQBDgBAyAxQAxAxABBFQAABFgwAxQgxAxhFAAIgBAAQhFAAgwgvg");
	this.shape_81.setTransform(148.3,-104.1,0.277,0.277);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3B393A").s().p("AgBCnQhEgBgxgyQgxgyAAhDQABhGAxgwQAxgwBFAAQBGABAwAxQAxAxgBBFQAABEgyAyQgyAxhCAAIgCgBg");
	this.shape_82.setTransform(157.7,-94.7,0.277,0.277);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3B393A").s().p("AAACnQhEABgygyQgxgyABhEQAAhFAxgxQAxgxBFABQBFAAAxAxQAwAxABBEQAABFgyAxQgxAyhEAAIgBgBg");
	this.shape_83.setTransform(157.7,-113.5,0.277,0.277);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3B393A").s().p("AABIUQhhgBhMg+QhNg/gUhgQgDgRgHgIQgIgIgRgEQhngUg/hNQg+hNAAhnQABhkBBhLQBBhLBngSQASgDAGgMIAGgYQAoijCfgtQCfgsB4B/QA0A3AMBHQADATAIAIQAHAJAUADQBiAUA+BPQA+BNgBBkQgBBgg9BLQg8BLheAVQgVAEgJAIQgKAJgEAWQgUBdhOA+QhOA+heAAIgCAAgAjABgQAtACAYAZQAYAaABAsIAAAiIABAiQAEAqAcAaQAbAZAoAAQAqAAAbgaQAcgaACgqIABgiIABgiQADgqAZgYQAZgXArgCIAkABQAVAAAOgCQApgEAagdQAagdgCgoQgCgpgagbQgbgagqgCIg4AAQhogCgChpQABglgCgTQgCgrgbgaQgagZgqgBQgogBgcAZQgcAZgFAqQgCAXABAtQgBAugZAZQgZAagtACQgwgBgYACQgoADgZAdQgZAcABAnQABAlAaAbQAaAaAmADQAMABAYgBIAkABg");
	this.shape_84.setTransform(109.9,-104.1,0.277,0.277);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3B393A").s().p("A6qS7Qhjg9gziAQg9ibgBjGQgHrfEep9QBZjGCUibQDjjtFfArQBzAOCKAgQBfAWCaArQClAtCqgCQChgDCsguQCVgoBLgSQB9geBmgQQGQg9D+EyQBkB4BNCbQBACCA4CtQCAGKAjGlIAAAMQABAGAHACIAAFYQgLAdgHAzQgIA9gFAVQghB2gsBFQhBBnhoAkQhpAliDghQhngahtg9QhMgrhzhTQiahuhghgQiwixkLg0QmshTluCGQiAAwhlBeQiLCAhuBUQiMBriHBGQg/AhgyASQg+AWg6AGQgaADgYAAQhpAAhRgygAE1GiQCjAgB/A8QCOBDBrBrQBpBqCOBnQBlBIA+AkQBdA1BXAXQBjAaA9ggQA9ggAjhfQAahHAMhUQAJhGABhZQACmjiGniQgsifg2h/Qg/iShUh3QjXk0l2BAQheAQiIAhQiZAnhMARQiZAkiHAFQiVAFiMghIjTg0QiEghhPgRQhjgWhIgFQhdgHhQARQh2AahgBPQhQBDhKBzQhPB5g9CaQgwB8guCqQh2G1ADGWQABBaAIBDQALBUAaBGQAiBYA8AgQA9AfBbgXQBjgaBshCQBig8BnhRQBUhCBnheQBVhOBGgpQEaikGNgHQC/ACCMAcg");
	this.shape_85.setTransform(134.6,-97.1,0.277,0.277);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_86.setTransform(157.5,-105.9,0.162,0.162);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_87.setTransform(101.8,-91.6,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_3},{t:this.shape_70},{t:this.shape_69},{t:this.instance_2},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_1},{t:this.shape_63},{t:this.instance},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(2));

	// Layer 3
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").p("AIcqsQgwAAgvAIQhDhJhjgqQhmgrh1AAQh3AAhqAuQhmAshDBNQhRgWhZAAQjWAAiWB0QiXBzAACkQAAB3BUBiQBSBfCJAvQAlBeBYBEQgqD8iRDXIhRB5IEOjbQCSh2B9iSQAcADAfAAQB/AABxg0QBvA0CAAAQCZAAB8hHQB6hGAzhyQCZgjBihmQBjhoAAiFQAAihiNhzQiMhyjHAAg");
	this.shape_88.setTransform(124.5,-69);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AsJLAQCQjXArj8QhZhEglheQiIgvhThfQhUhjAAh2QAAikCXh0QCWhzDWAAQBZAABRAWQBDhNBmgtQBqgtB3AAQB0AABnArQBjApBDBKQAugIAxAAQDHAACMByQCNByAACiQAACEhjBpQhiBmiZAjQgzByh6BFQh8BIiZAAQiAAAhvg1QhxA1h/AAQgeAAgdgDQh9CSiSB2IkODbg");
	this.shape_89.setTransform(124.5,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89,p:{y:-70,x:124.5}},{t:this.shape_88,p:{y:-69,x:124.5}}]}).to({state:[{t:this.shape_89,p:{y:-78,x:124.5}},{t:this.shape_88,p:{y:-77,x:124.5}}]},1).to({state:[{t:this.shape_89,p:{y:-70,x:124.5}},{t:this.shape_88,p:{y:-69,x:124.5}}]},1).to({state:[{t:this.shape_89,p:{y:-78,x:135.5}},{t:this.shape_88,p:{y:-77,x:135.5}}]},1).to({state:[{t:this.shape_89,p:{y:-118,x:151.5}},{t:this.shape_88,p:{y:-117,x:151.5}}]},9).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(2).p("AD/inIhwBnIgyiRAkDBaICPAoIghBQ");
	this.shape_90.setTransform(-1.8,2.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#373535").ss(2).p("AD/htIhwBmIgyiRIiUAoIhQiiAkDCTICPAoIghBQIDGgZIhMix");
	this.shape_91.setTransform(-0.9,-3.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(3).p("ADfDiIgyigIhBBIAjskXICgAFAicEZICHg8");
	this.shape_92.setTransform(1.2,12.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#373535").p("AANgNIgZAb");
	this.shape_93.setTransform(10.8,27.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#373535").ss(2).p("AD7iRIhxBnIgyiRIiTAoIhQijAAtDPICqg2IAqClAgFDVIhABfIC9BuAkHBwICOAoIggBQICUgTIAygGIhNiyICqhHABYi7IhwisICSg5");
	this.shape_94.setTransform(-1.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).wait(9));

	// Layer 1
	this.instance_4 = new lib.EggDor1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,0.5,0.205,0.205,0,0,0,4.9,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EE4544").s().p("AgCAJIgEgBQgIgCAAgGQABgFAHgCQAGgCAGACIABAAQAGADABAEQABAFgHACIgIACIgCAAg");
	this.shape_95.setTransform(18.5,-26.7,1.196,1.196);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EE4544").s().p("AgCAMIgFgBQgLgDAAgIQABgGAKgDQAIgDAHADIABAAQAIAEACAFQABAHgJADQgGACgFAAIgCAAg");
	this.shape_96.setTransform(-5.8,-25.7,1.196,1.196);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6C2D00").s().p("AANAPQgCgCgCgIQgCgGgDgDQgEgDgGAGQgHAIgCACIgCAAIgDgBQgDgFAKgLQAKgKAIADQAHACAGAKQAFAJgCAHQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBABIgDgCg");
	this.shape_97.setTransform(15.8,-30.5,1.196,1.196);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C2D00").s().p("AgfAWQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgOAIgLQAKgMANgCQANgCAMAKQALAIACANQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgGgBgDgFIgHgKQgEgFgHgBQgLgDgIAKQgGAFgGAPQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_98.setTransform(-0.4,-30.8,1.196,1.196);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0049F5").s().p("AgWgKQALgfAggCIAGAAQgQADgJAQQgIAPAAAgIAAANIAAAAIgFAJQgXgYAMgfg");
	this.shape_99.setTransform(19.1,8.2,1.196,1.196);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0049F5").s().p("AgggKQANgcAcgBQALgBANAHIAAAAIAHAFQgYgDgTAOIgCAAIgBACIgGAGQgVATADAeQgPgYANgag");
	this.shape_100.setTransform(-12.1,9.9,1.196,1.196);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0049F5").s().p("AgCgBIACAAIADADQgDgBgCgCg");
	this.shape_101.setTransform(-10.1,-17.7,1.196,1.196);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0049F5").s().p("Ag6EAIAdg3QASghARgTIAGABQAAABABgBQABAAAAAAQAAAAABgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgugWgeg8QgYgygHg9QALgEAOgHIABgBQAHAIAJADQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgNgLgEgGQgGgLgBgUIABAAQABABAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgIgHIgIgGQgIgIABgSQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgLgDQAZg/A8gkQA6glBCAEQg6AMgfAhQgaAegKAwQgGAjACA3QACAuAGAVQAGASARAcIAEAGQgFACgFAAQgHAAgKgHIgCAAIgBACQAEAGAJAEQAHACAIgBQAFALAKAAQAbAjAhAcQgNAlAUAtQgZAWgHAoQgHgRgQgJIgBgLQAAgHADgNQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQgGAOACAOQgKgEgMAAQgRgBgOAMQgOALgFATQgEgHgMgUgAgRDWQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQADAFAFgBQAGgBACgFQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBAAQgGAEgEgEIgBAAIgCABg");
	this.shape_102.setTransform(-12.1,-24.8,1.196,1.196);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6C2D00").s().p("AAJAUIgJgVIgLgSQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIABAAQAPAOAGAZQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape_103.setTransform(29.2,-2.6,1.196,1.196);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C2D00").s().p("AgGAdQgFgdAQgcIACgBQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQgJAWgBAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_104.setTransform(-25,-2.8,1.196,1.196);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6C2D00").s().p("AARAEIghgEQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAWADAKACQAAABABAAQAAAAAAAAQAAAAAAABQABAAAAAAIgBACIgBgBg");
	this.shape_105.setTransform(-25.6,-38.5,1.196,1.196);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6C2D00").s().p("AgUABIgBgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAoABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgOAAIgbgBg");
	this.shape_106.setTransform(-25.8,-34.8,1.196,1.196);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C2D00").s().p("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");
	this.shape_107.setTransform(0.4,-3,1.196,1.196);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6C2D00").s().p("AgJAMQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQABgIAGgGQAGgHAIgBIACABIgCACQgNAHgDANQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBg");
	this.shape_108.setTransform(0.2,-17,1.196,1.196);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C2D00").s().p("AgDADQAAgDAEgEQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAFgEACIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_109.setTransform(21.4,-22.8,1.196,1.196);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C2D00").s().p("AAAAGQgEgFADgGQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAIABABIACAIQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgBABIgBgBg");
	this.shape_110.setTransform(8,-22.4,1.196,1.196);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C2D00").s().p("AgOARQgJgJAFgKQAFgKAMgDQAMgDAGAIQAGAJgDAIQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgEgKQgDgGgHACQgHADgEAFQgCAFADAIQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgCAAIgBAAg");
	this.shape_111.setTransform(7.8,-24,1.196,1.196);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C2D00").s().p("AgHAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQADADAGgDIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQgCAEgGAAIAAAAQgEAAgDgDg");
	this.shape_112.setTransform(-13.4,1.2,1.196,1.196);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C2D00").s().p("AAFAFQgFgCAAgDQgHADgFgFIgBgCIACAAQAFADAGgDIACAAIAAACIgBAAQAEAFAHgBQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgFABIgDgBg");
	this.shape_113.setTransform(16.7,-2.1,1.196,1.196);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6C2D00").s().p("AgPAJQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAHABAHgGQgCgBgDgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAGAGAKgFQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgEAEgIAAIAAAAQgEAJgJAAIgGAAg");
	this.shape_114.setTransform(20.9,7.3,1.196,1.196);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6C2D00").s().p("AgFABQgHAAgEgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAFAEAJgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDABQAHAEAHgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgFAEgHAAQgGAAgDgGg");
	this.shape_115.setTransform(-11,8.6,1.196,1.196);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6C2D00").s().p("AAMALQgHgDgDgGQgHABgIgDQgJgCgDgGIAAgCIACgBQALAIAHAAQAFAAANgHQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgEAGgGAAQAFAHAMgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgGABIgHgBg");
	this.shape_116.setTransform(-11.2,-18,1.196,1.196);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFD68E").s().p("AhMgSQAUgBASgEIAcgKQAQgHALACQAQADAZAgQAFAHAOAbQgggRgbAOQgFADgLgCQgLgBgEABQgNADgJAHQgLgagegfgAgHgPQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAKARIAKAWQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgGgZgPgOIAAAAIgBAAg");
	this.shape_117.setTransform(28.8,-3.2,1.196,1.196);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFD68E").s().p("AgQASQAGABAFgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgKAAIgEgTQAIgBAHgEIAAgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgPAFIgFgQQARgEAWgNQABAHgFAKIgIAOQAAABgBABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAgBABAAIABgBIAOAEIACABIgBACIgKANIAAADQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIANAIQgKAIgLAEIgUAEg");
	this.shape_118.setTransform(25.3,-39.7,1.196,1.196);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#486BF8").s().p("AAogIQgPgLgWAIIgjAMQgTAGgRACIgBAAIgIgJQAUgCAYgKQAIgDAQgKQASgLAbAQQAcAQAOAjQgOgXgYgQg");
	this.shape_119.setTransform(27.7,-6.8,1.196,1.196);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4F3867").s().p("AgdAHQACgNAEgJQAHgQASABQALABAVAHIgBAAQgmATgcAiIAEgYg");
	this.shape_120.setTransform(-17,-54,1.196,1.196);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFD68E").s().p("AhCA8QAZgLAMgTIAGADQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgagUQgNgLgFgOQAfAEAJAAIAEAGQABABAAAAQABAAAAAAQABABAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgNgbQgHgQgBgMQANAGAXATQAVANAUAAQgDAKAFALQAGAKAKAGQgEAWALASIAAAAQguAQgoAAQgYAAgWgGgAAAAfIABACQAcADAOgCQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgogBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAAGgBQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAiAGQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQgKgDgXgCIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_121.setTransform(-28.5,-38.6,1.196,1.196);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#486BF8").s().p("AirEBIAeg4QASggARgUIAGACQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAgBgBQgvgWgeg8QgYgxgHg+QALgDAOgHIABgCQAHAJAJACQAAAAABAAQAAABABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBgBAAQAAAAAAgBQAAAAgBAAQgNgLgEgHQgGgKAAgVIABABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgIgHIgIgHQgIgIABgSQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBABIgLgEQAfhKBKgkQBLgkBMAXQAhAKAhAeQAeAcATAiQASAfADAuQACAWgCA8QgLABgHAHQgIAHADAKQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQADgNAQgEIACgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQAGABADAIQACAIgHAIQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAQABABAAAAQABgBAAAAIABABQAdAAACAbQACAWgOAXQgKAQgVAFQgKACgeAAQhFABg8gvQgDgCgCACQgBACABADQAcAiA7ANQASAEARABQgrAbhCgQQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQBIAVApgbIAiApQATAYAIAVQgNgEgLACQgOACgLAIQgBgLgGgLQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIAEAOIABALQgNALgEASQgIgcgVgUQgXgWgcgCQgkgCgYAYQgWAXgHAkQgHgQgPgJIgBgMQgBgHADgNQABAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQgGAPACAOQgKgEgMgBQgSgBgOANQgOALgFASQgDgGgNgUgAiCDWQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQACAEAGgBQAFAAACgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAQgFAEgFgEIgBAAIgCAAgACEDDQAEABAEgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgGACgEgGIAAAAIAAgCIgCgBQgGADgFgDIgCABIAAACQAGAFAGgDQACAEAEACgAgOA8QgGAHgBAJQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQADgOANgGIABgCIgBgBQgIAAgGAHgAhdBEQAHADAGgDQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgMABgFgHQAGgBAEgGQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgOAHgFAAQgHAAgLgIIgCABIAAACQADAGAJADQAIADAIgBQADAGAHADgAA1APQgDAHAEAEIADABQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCgJIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABgAAzgJQgMADgFAKQgFALAJAIQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgDgIACgFQAEgGAIgCQAHgDADAFIAEALQAAABAAAAQABAAAAAAQABABAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQADgIgGgIQgFgHgIAAIgGABgACnAMQgFADABAFQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAFgCAAgGQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCABg");
	this.shape_122.setTransform(1.4,-24.8,1.196,1.196);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4F3867").s().p("AgdASQAGgRAMgNIAHgHQAHgIANALQAIAGAIAQQggAEgfANIACgFg");
	this.shape_123.setTransform(-7.6,-60.2,1.196,1.196);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4F3867").s().p("AgNgGQACgJAJgEQAEgDANgDQgSAagIAZQgEgSACgOg");
	this.shape_124.setTransform(-23.4,-46.5,1.196,1.196);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#486BF8").s().p("AgsgJQAMggAggCQANgBAMAIQALAHAHANQAHANgCAQIgJAdIgIgDQgEgCgFgHIgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgJAJQgFAFgEACIgIgFIgIgKIgCAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAIgGAIIgFAJQgWgYALgegAgXgBQAAABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAPAEAFgMIAAAAQAHABAEgFQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABQgJAEgHgFQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQADADADABQgIAHgHAAIgBgBQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_125.setTransform(21.7,8.2,1.196,1.196);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4F3867").s().p("AgLASIgHgTQgDgJgBgOQAUAeAZAKIgJAJQgNgCgMgFg");
	this.shape_126.setTransform(-14.8,-9.1,1.196,1.196);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#486BF8").s().p("AgRgeQAPgIARANQALAHASAQQAWAQAXgCIgJAOQgogMgcgVQgHgGgHAAQgEAAgOAEQgoAMgcAfQAWgkAxgcg");
	this.shape_127.setTransform(-24.3,-7,1.196,1.196);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4F3867").s().p("AgDAZQgIgFgBgHQgCgGADgKQACgKAJgWQADAgALAhIAAABIgBAFg");
	this.shape_128.setTransform(-23.9,-25.4,1.196,1.196);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4F3867").s().p("AgEAZQgLgGgBgLQAAgIACgKIAEgUQAHAWAIARIAMAWQgQgDgFgDg");
	this.shape_129.setTransform(-20.5,-17.2,1.196,1.196);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFD68E").s().p("AAUAiQgTADgFAGQgHgagcgHQgbgGgVAQIACgEQAhgnAtgQQAOgFANAGQAIAEAQAMQATAMAZAGIgHAKIgWAlQgOgNgZAEgAAKgdQgQAdAFAcQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABggAKgWQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIAAAAIgCABg");
	this.shape_130.setTransform(-25.6,-2.7,1.196,1.196);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#486BF8").s().p("AAaApQgDgDgEgHIgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEACgHAHIgHAFIgJgHIgGgKQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAABgBAAQAAgBAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAQgDACgEAFIgGAIQgSgYAMgdQANgdAegCQAKgBAOAHIAAAAIABABQAMAIAGAMQAIAOgEARQgCAIgKAXgAgPgWQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQADAGAHAAQADAGAHAAQAHAAAFgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgGAEgIgEIADgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgIACgGgEIgBAAIgBAAg");
	this.shape_131.setTransform(-11,10.5,1.196,1.196);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFD68E").s().p("AgyA3IgdgYIgCgKQAZhOA4gBQAhAAAWAbQASAWAJAjIAAAAQgJAIgGABQgGACgKgFIgpgYQgDgBgCACQgUAVgOASQgHAKgCABIgCAAQgEAAgGgEg");
	this.shape_132.setTransform(5.1,6.6,1.196,1.196);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F27D7B").s().p("AgKAMQgFgCgDgEQgCgCAAgEQABgDADgCIAHgFQAGgDAIAAIADABQAJAAADAIQABAEgBADQAAAFgHAEQgGACgHAAQgFAAgFgCg");
	this.shape_133.setTransform(7.6,-35,1.397,1.397);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F27D7B").s().p("AgGANIgDAAQgJgDgCgHQgBgDADgEQAAgGAHgCQAGgBAHABQAGABAFADIAHAGQACACgCAEQgBADgDACIgHADQgFACgEAAIgGgBg");
	this.shape_134.setTransform(40.1,-36.9,1.397,1.397);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_135.setTransform(10.1,-43.6,1.397,1.397);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgEAFQgFgFAEgDQAEgFAFADQAHADgFAGQgDADgDAAQgCAAgCgCg");
	this.shape_136.setTransform(34.9,-44.9,1.397,1.397);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#451738").s().p("AAAAfQgIgCgFgJQgCgEgCgNQgBgNACgHQAHgTANAIQAMAIACAPQABAMgDAKQgDAOgLAAIgCAAg");
	this.shape_137.setTransform(34.4,-43.1,1.397,1.397);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#451738").s().p("AAAAfQgIgCgFgJQgDgFgBgLQgBgPACgGQAHgSAMAHQANAIABAPQACALgDALQgDAOgLAAIgCAAg");
	this.shape_138.setTransform(9.7,-42,1.397,1.397);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1E38C9").s().p("AgXgBIAZgOQAJgEADgEIAKAGQgTASgOAXIgOgZg");
	this.shape_139.setTransform(-13.3,-57.2,1.397,1.397);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1E38C9").s().p("AgWgTQAIgCAGgEQANALASALQgNAcgHABQgKgagPgTg");
	this.shape_140.setTransform(43.8,-58.1,1.397,1.397);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1E38C9").s().p("AgXgNQACgCAFgLIACgDQAPAWAVAUIACARQgRgOgegdg");
	this.shape_141.setTransform(46.9,-10.4,1.397,1.397);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1E38C9").s().p("AgjgGIgEgFQACgWgCgSIARAeQAZAsAlAZIgEAEQgqgcgdgeg");
	this.shape_142.setTransform(-20.8,-12.6,1.397,1.397);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1E38C9").s().p("AAKA3QgGgBgGgDIgNgFIgLgfQgLggABglQAPAEAIARQADAHAEANIAGAUQAKAaAcANQgBABAAAAQgBABAAAAQAAABAAAAQAAAAABABIgBACQAAADgMAAIgOAAg");
	this.shape_143.setTransform(28.9,16.8,1.397,1.397);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1E38C9").s().p("AAPBFQgmhAgLgxIgHgdQgCgSADgNIACgDQADAoAXAmQAUAhAjAcIgBACQgJAkAHAmg");
	this.shape_144.setTransform(-39.2,19.2,1.397,1.397);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1E38C9").s().p("AAvBDIgQgFIgfgJQgmgMgcgeQA9gYAKg1QALAFAGAJQANASgBAbIgDAXQAAAOAGAIQAEAFAOAIIAMAGIgEABIAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQADAGgHAAIgGAAg");
	this.shape_145.setTransform(29.8,51.2,1.397,1.397);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#1E38C9").s().p("ABqHpQgKgBgUgEQgbgGgXgKQgZgLgOgWQgNgUgDgcQAQAIANAEQACABABgDQABgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAQhHgngngqQgdgdgEgtQgEgnAOgsQAUhAA1hEQAmgxBAg/IABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgrgxQgWgcgLgcQgWg8AahHQATg2AsgqQArgoA4gTIAIgDQgyAbghAwQghAwgIA4QgEAfAFAiIAAAAQgFgCgGgIQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQACAJANAGQAAAGAEAEQAKAqAWAkQAXAkAhAaQgrAhgpAnIgKAKIgHABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAQgWAaADAWQACAQANATIATAVQgKAAgCgJQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQABAHAFADQAGAEAGgDIAAgBIAwAvIgBACQgDAHgFAEQgMgPgfgDQgfgDgSgZQgMgRgKglQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBABQAAAAgBAAQgBAAAAABQAAAAAAAAQgBABAAABQADAqAbAcQALAMANAEQAKAEAYACQAUADAJANQADAFAEgFQAFgGAEgKIADABIAAABQgIAbADAfQgggNggAFQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAbgBAdALIgHgBQgQgBgNAKQgNALABAPQABAIAGAHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAEAHAGAAIACgBIAaAZQALAMADARQAEASgGAPQgEANgPAYQgMAWAGAPQAIAWAnAHQAVAEAWAAQgDADgFAAQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAEAKgTAAIgHAAgAAhFkQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAABABQAFAJAHACQAIADAEgIQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgGAHgMgOIgBgBIgCABgAgREgQAIABAIgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAABQgMADgJgIIAFgEQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgSAKgKgPQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQACAHAHAEQAGAEAHgBQAFAHAIACg");
	this.shape_146.setTransform(-12.5,-0.7,1.397,1.397);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#451738").s().p("AAUAQQgYgHgRgXQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQAPASAZAKQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIgBAAg");
	this.shape_147.setTransform(46.8,-5.8,1.397,1.397);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#451738").s().p("AAEAaQgNgXACgcQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQADAZAKAZQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAIgCgBg");
	this.shape_148.setTransform(38.7,-1.7,1.397,1.397);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#451738").s().p("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");
	this.shape_149.setTransform(-3.4,-1.5,1.397,1.397);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#451738").s().p("AgsAlIAAgCQAjg0AzgTQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQg3AdgfAnIgBABIgBAAg");
	this.shape_150.setTransform(-46.9,-15.1,1.397,1.397);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#451738").s().p("AgTAnQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQALg1AbgWQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgOAPgJAUQgHANgJAZIgBABIAAAAg");
	this.shape_151.setTransform(-34.5,-7.7,1.397,1.397);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#451738").s().p("AgDABIgBgBIABgBIAHABIABABIgCABg");
	this.shape_152.setTransform(31.3,-63.8,1.397,1.397);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#451738").s().p("AgIgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADACAMABIACACIgBABIgFABQgGAAgGgFg");
	this.shape_153.setTransform(31.3,-62.2,1.397,1.397);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#451738").s().p("AgCATQgPgFgHgLIABgCIACAAIABACQAGgIAMgKQAHgJAFADQAEACADAHIAEAMQAFAMgCAGIABACIgBACQgDABgFAAQgIAAgKgEgAgSAFQAPAOAWgBIgCgOIgHgQQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgHAAgSATg");
	this.shape_154.setTransform(30.6,-63,1.397,1.397);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#451738").s().p("AgEACIABgCIAGgBIACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgHACIAAAAIgBAAg");
	this.shape_155.setTransform(5,-63.1,1.397,1.397);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#451738").s().p("AgJADIgBgBIABgBQAHAAAMgEQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgHAEgJAAIgEgBg");
	this.shape_156.setTransform(5.1,-61.3,1.397,1.397);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#451738").s().p("AgcATQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIADABQgCgMADgNQAEgNAFgCQAFgBAGAEIAJAHQAMAKAGAHQABgBAAAAQAAgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgBARgXAEIgJAAQgOAAgLgGgAgUARQANADAKgCQANgCAGgJIgNgMQgJgIgGgDIgDgBQgJAAgCAig");
	this.shape_157.setTransform(5.1,-62.3,1.397,1.397);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#451738").s().p("AgKAOQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAEgRAQgIQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgNAIgFAPIgCABIgBAAg");
	this.shape_158.setTransform(3.7,-24.2,1.397,1.397);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#451738").s().p("AgBAHIgDgCQgCgHAGgEQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQADAFgEAGQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBgBg");
	this.shape_159.setTransform(37,-30,1.397,1.397);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#451738").s().p("AAAAIQAAgBgEgKQgBgDAEgBQACgBACADQADAIgCAEQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAg");
	this.shape_160.setTransform(16.4,-28.5,1.397,1.397);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#451738").s().p("AguABIgBgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAsAMAugRQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAACQgaAKgaAAQgUAAgVgGg");
	this.shape_161.setTransform(16.6,38.6,1.397,1.397);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#451738").s().p("Ag1gEIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAzAPA3gKQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgWAGgWAAQgeAAghgLg");
	this.shape_162.setTransform(14.5,24.6,1.397,1.397);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#451738").s().p("AgcAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAYADAggEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgNAEgQAAQgNAAgPgEg");
	this.shape_163.setTransform(13,14.2,1.397,1.397);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#451738").s().p("AAJAQQgGgBgDgFQgEgEABgGIAAgBQgIgDgBgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQACAGAGADQAFADAHgBQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgGACgGgCQAAAKAJADQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgCABIAAAAg");
	this.shape_164.setTransform(4.1,-5.6,1.397,1.397);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#451738").s().p("AADAJQgDgEAAgEQgIgBgEgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQADAEAFAAIAHgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgCADgCAAIAAAAQAAAFAGABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABIgDAAQgDAAgCgCg");
	this.shape_165.setTransform(34.5,44.5,1.397,1.397);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#451738").s().p("AAAAHQgGgCgFgIQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQALANAGgHQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQgDAGgFAAIgEgBg");
	this.shape_166.setTransform(-6.2,50,1.397,1.397);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#451738").s().p("AgLAAQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAFAGAMgIQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgIAGgGAAQgGAAgDgFg");
	this.shape_167.setTransform(-7.5,37.5,1.397,1.397);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#451738").s().p("AAJAMQgJgCgDgHQgHABgGgEQgHgDgCgHQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAJAOASgJQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgGADQAKAIALgDQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgGACgFAAIgFAAg");
	this.shape_168.setTransform(-16.2,37.8,1.397,1.397);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#451738").s().p("AgCAFQgGgDgBgGQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAFAFABQACADAFgBQAAgBABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgFABQgDAAgCgCg");
	this.shape_169.setTransform(-9.4,13.3,1.397,1.397);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#451738").s().p("AAGASQgEgCgCgGQgEgGABgEIgBgBQgIgHACgIIABgBIACABQADAJAEADQADACAHABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQgDACgEgCIABAEIAFAJQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgCAAIgBAAg");
	this.shape_170.setTransform(-9,7.3,1.397,1.397);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#451738").s().p("AADAOQgGgGAAgHQgNgFgCgJQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAGAIAFACQADACAJAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDADgGAAIAEAFQAFAEAFAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDAAQgFAAgGgDg");
	this.shape_171.setTransform(-9.1,-34.1,1.397,1.397);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFDB64").s().p("AgSAEQAYgbAEAKIAGAPIADAOIgDABQgUAAgOgNgAgDABQgBABAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAHAHAJgCIABgCIgBgBQgNgCgCgCIgBAAIAAAAgAAAgGIABABIAHABIACgBIgCgBIgHgBIgBABg");
	this.shape_172.setTransform(30.7,-62.9,1.397,1.397);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFDB64").s().p("AgUARQACgoALAGQAHAEAIAIIAOALQgHAJgMADIgJABQgHAAgHgCgAAJAEQgMAFgHAAIgBABIABABQAMABAIgGQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAIgBgBIAAAAgAgFgEIgBABQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAHgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgCgBg");
	this.shape_173.setTransform(5.2,-62.3,1.397,1.397);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3B52FF").s().p("AgWAFQgEgJAAgKQgBgGACgKQAEgNAIAIIATASQALAKALAFQgTATgNAWQgOgXgEgLg");
	this.shape_174.setTransform(-13.9,-59.3,1.397,1.397);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFDB64").s().p("AgOAEIgFgQQATAIAUAEIgKAHQgGAFgGABIgBAAQgHAAgEgJg");
	this.shape_175.setTransform(16.7,-14.8,1.397,1.397);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFDB64").s().p("AgQACQASgFAPgJQgEANgEAHQgDAFgFAAQgGAAgLgLg");
	this.shape_176.setTransform(41.9,-14.8,1.397,1.397);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3B52FF").s().p("ABpAaQgKgMgSgXIgbgjIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIg7AEQgiACgagCQgogDgWgFQglgJgSgUQAvAUA7ADQA2ADA2gNIAZgEQAMAAAIAMQACADAIASQAOAdAPAXQAaAuAlAYIgEAFQgrgdgdgeg");
	this.shape_177.setTransform(-40.5,-17.1,1.397,1.397);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3B52FF").s().p("AgagFQASgGAcgcQAEgEADAZQAAALgHAPQgOAegGACQgLgagPgTg");
	this.shape_178.setTransform(44.4,-60,1.397,1.397);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D6BED0").s().p("AALBRIAAgBQglgrhSgDIAAAAQADghgRgkQgPgjgbgZQAVAKAvAHQBPAMA4gLQAXArAeAiQAjAnAmASQgPAPgSAYQgpgXhQAIgAA1gEQgcAVgLA2QAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABAAQAIgZAHgOQAKgUAOgOQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCAAIgBAAgAgKg3Qg1ATgiAzIAAACQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAfgoA4gcQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_179.setTransform(-39.5,-12.4,1.397,1.397);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D6BED0").s().p("AgJA2QgLgGgPgCQgXgFgXANQgIgRgSgGQAJgVAOgOQA9gJAggpQAFABADgCIADgCQAoAsAgAUIAQALQg1ABgvAhIgIAGIgBAAQgDAAgFgEgAgUgJQgBAcAOAXQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBgBAAQgLgagCgYQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAgAAXgcQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQARAYAZAGQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQgagJgPgTIgBAAIgBAAg");
	this.shape_180.setTransform(40.5,-4,1.397,1.397);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D6BED0").s().p("AhTCuQARgcAGgeQAGgggGgeQgIghgmgSQgBgdAEgfQAGABAFgBQAEgBgBgEIgBgHQAHAAAFgDQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgIgGgIIgLgOQAHgjAbgUQAdgVAiAIQAjAIAKAnQACAIADARQADAOAGAJIABABIAVA9QAOAiAGAdQAGAYgIAWQgGATgSAUQgZAegzAKQgWAEgaAAQgSAAgUgCgAgfA/IABACQAwAPAtgUIAAgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgvASgrgNIgBAAIgBABgAg2gpIABABQA3AUA0gOQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQg2ALgzgQIgBAAIgBABgAgohuQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAhAHAZgIQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQghAFgXgEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_181.setTransform(14.5,29.6,1.397,1.397);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3B52FF").s().p("AAnArQgMgFgVgOQgNgKgRgPIgcgdQACgCAFgKIABgDQAqA3AuAYQAJAFAAAFQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgIgDg");
	this.shape_182.setTransform(51.1,-8.2,1.397,1.397);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3B52FF").s().p("AAGBVQgGgBgHgDIgNgFIgLgfQgKgfAAggQAAgkALgeQATAKAHAaQAEAPADAfQADALAIAPQAhAegGAEIgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIADAKIgJAFQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBACQAAADgLAAIgOAAg");
	this.shape_183.setTransform(29.5,12.6,1.397,1.397);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#3B52FF").s().p("AApByIgRgFIgegJQgngMgcgeQAkgOATgZQAUgbgCgnQAAgbgOgnQA2AZATAuQASArggA6QgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgDQAIADAIAHQAFAFACADQACAFgJADIgBABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIACAFIAAAEQgBAFgJADIAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABABAAQACAGgHAAIgFAAgAAPgLQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAEAIAJAAQgBAEAEAEQAEAEAEgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgGgBAAgEIAAAAQACgBACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgIABQgFAAgDgEIgBgBIgBAAg");
	this.shape_184.setTransform(30.8,44.6,1.397,1.397);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3B52FF").s().p("AAKBFQgmhBgMgwIgGgeQgDgRADgNQADgLALATQAFAIADAIQAEAJAKAPQAKARAOALIAJAIQAGAFAFACQALAFACAEIABABQgHAUgEARQgKAmAIAlg");
	this.shape_185.setTransform(-38.4,19.2,1.397,1.397);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#1E38C9").s().p("AgCAXQgHgCgFgGQgFgGgBgIQAAgGAEgHQAEgGAHgDQAJgEAHAFQADACADAFQAIAOgJAOQgEAHgGABIgEABIgEgBg");
	this.shape_186.setTransform(37.2,-30,1.397,1.397);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#1E38C9").s().p("AgEAWQgGgCgEgCQgFgEgBgOQgBgPAHgEQADgCADAAQAOgDAKAMQAJAMgGANQgDAHgFACIgHABIgIgBg");
	this.shape_187.setTransform(17,-28.8,1.397,1.397);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#3B52FF").s().p("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IgBAAgAh6BiQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQABAHAGADQAFAEAGgDQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgFABgDgDQgFgCAAgFIgCgBIAAAAgAh7AtQgBAIAHAHIACABQgBAFADAGQADAGAEACQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgFgJIgCgEQAFACADgCIABgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHgBgEgCQgEgDgDgJIgBgBIgCABgAgegtQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAJAIAEIAAABQgBAGAEAEQAEAFAGABQAAABAAAAQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgJgDgBgJQAHABAGgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgHABgGgDQgGgDgCgGIgBgBIgBAAgAgMiwQgRAIgEASQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAFgQAOgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgCgBIgBAAgABDjJQgEABABAEQAEAKABABQABABAAAAQABAAABAAQAAAAAAgBQABAAAAgBQACgDgDgJQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgBAAgADXjTQgFAEACAIIACACQAEADABgEQAEgGgCgGQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBAAIgDABgAiCj6QAAABgBAAQAAAAAAAAQAAABAAAAQgBAAABABQABAJAOAGQgBAHAIAGQAGAEAHgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgGAAgFgEIgEgFQAGAAADgDQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgJAAgFgCQgFgCgGgIIgCgBIgBAAgAgomjQgBABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAPAIAUgDQAXgDAAgSQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgGgIgLgJIgKgHQgHgFgEACQgGABgEAOQgDANACANIgDgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgACTm3IgBACQAHAKAPAGQATAGAIgEIABgCIgBgCQACgGgFgMIgEgMQgDgIgEgCQgFgCgIAIQgMAKgGAKIgBgCIgBAAIgBAAg");
	this.shape_188.setTransform(6.8,-1.4,1.397,1.397);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F2796E").s().p("AgHAHQgLgGAIgFQAHgFAJACQAKACgCAHQgBAGgIABIgEAAQgEAAgEgCg");
	this.shape_189.setTransform(-47.6,-58.3,1.181,1.181);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F2796E").s().p("AgNAQQgLgDgBgJQAAgIAJgGQAOgKARAIQAIADACAHQACAHgIAFQgMAHgLAAIgJgBg");
	this.shape_190.setTransform(-21.3,-56.5,1.181,1.181);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgCgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABADQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBgBQADAEgFABIgBAAQgFAAADgJg");
	this.shape_191.setTransform(-44.6,-63.1,1.181,1.181);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgFADQAAgEAEgEQAAAAABgBQAAAAAAAAQAAgBABAAQABAAAAABQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQABAFgGABIAAAAQgFAAAAgFg");
	this.shape_192.setTransform(-24.8,-64.7,1.181,1.181);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#07003C").s().p("AgVANQgCgWAKgPQAGgNAJADQAFABAHAHQAFAHACAMQADAOgEAMQgFANgMADIgFABQgRAAgCgXg");
	this.shape_193.setTransform(-23.9,-63.2,1.181,1.181);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#07003C").s().p("AgIATQgFgFgBgHQgCgKAFgKQADgGAFgCQAFgDAFAEQAKAHgCAQQgBAPgLAFIgDAAQgEAAgEgEg");
	this.shape_194.setTransform(-43.7,-62.3,1.181,1.181);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFDB64").s().p("ACLBaQgygGgrAXIgQAIQANhvgxg/QgCgDgDADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAqBAgGBrQgIACgOgHQgdgMgXgBQglgBgbASQAehDABhGQAAgEgEAAQgEAAAAAEQgMBQgVBBQgtglgrgEQgFABACAEQgGgEgCgFQgCgEgBgKIgBgNIAGgOIAFgLIAIgJQAGgFAMgHIACABQA2gTAtggQAygjAbguIAFACQA/AcAmAfQAwAmAYA2QACAEAEgCQAEgCgCgDQgEgPgKgQIALAOQALAPANAbIAUAqIANAjQgogfgxgFg");
	this.shape_195.setTransform(31.3,-3.3,1.181,1.181);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#3B3EA1").s().p("AgLAiIgGgCQgEgBAAgDIgDgIQADABABgEQABgVACgJQADgQARgEQATgDADAUQACARgIAOQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAIAAABQgDAEgEACQgDACgEABIgKACIgJgBgAgBgHQgCABgEAKQgEAJACAFQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAEgEABgGQACgNAAgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABg");
	this.shape_196.setTransform(-39.6,-50.2,1.181,1.181);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#3B3EA1").s().p("AgCAeQgEgBgEgDQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgBQgMgIgEgMQgDgHADgIQADgHAHgDQAMgHALAOQAHAIgBARQAAAEAFABQAEABACgDIABgCIgBAGQgBACgHAHQgHAIgGABIgEAAIgDAAgAgLgHQgDADADADIAEAIQACAFADADQACACACAAQADgBABgDQADgMgNgIIgEgBQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_197.setTransform(-62.7,-48.2,1.181,1.181);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#3B3EA1").s().p("AgjAMQBGgVAgg2QgEARgOATIgUAbIgNAJIgaAUQgOALgQAKIgWAMIgEACQANggASgUg");
	this.shape_198.setTransform(-21.5,-16.5,1.181,1.181);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#585ECD").s().p("AhQBUQACgHAKgEQAJgHALgEIAigRQAXgNANgZQAOgbgOgXIgDgEIAFgQIAEgLQADgGAEgCQAIgCAKACQALACAGAGQAJAKAAAIIACATIgDAMQgDAPgKAOIgHAKQgCgCgBgGQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAFIABAEIADAFQgHAKgIAFIgaATQgZATgOAEQgPAFgMABIgOABIgFAAIgIAAg");
	this.shape_199.setTransform(51.2,71.2,1.181,1.181);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#3B3EA1").s().p("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gGQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgGADgFgDQgEgDgBgHQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAgAFfIMQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQABAKAIAFQAIAFAJgDQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQgHABgGgEQgGgEgCgHQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgBAAgAElHzQAJAKANABQAMABAKgKQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIAHgKAAQgKgBgIgHQAEgCAEgFQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgLAHgKAAQgLAAgIgJQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQABABAAAAQAGAJAKADQAJADAJgDgACwFZIgFALIgBABIgDAEQgHAIgLACQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAABAAQAMgCAJgIIABABIAEABIABAAIAEABIAAAAIAJgDQAIgEADgJQABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgGANgQgBQAHgJAAgIQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABgAhjDFQAAAAgBABQAAAAAAABQABAAAAAAQAAABAAAAQAMAHANgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAABQAAAAgBAAQAAAAAAABQgFAKgJAEQgKAEgLgFIgBAAIgBABgAiRCsQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgQAAgOgHQAHgCAGgFQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAABgBAAQghAQgSgaQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQASAMATgCgACzhXQAxAoAYA2QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQABgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBQgDgCgCADIgjAoQgVAWgRAPQgqAkg5AZQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQA3gTAtghQAxgkAbgtQBCAdAnAeg");
	this.shape_200.setTransform(21.1,-1,1.181,1.181);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#3B3EA1").s().p("AAAgCIAFAEIgIABg");
	this.shape_201.setTransform(42.1,41.4,1.181,1.181);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#3B3EA1").s().p("ADLK8QAAgMANgEQAJgHALgEIAigRQAYgNANgZQAOgcgOgXQgRgbgkgLQgfgKgkADIABgLQACglgSgiQgRgigfgVQgDgCgDADQgCADADACQAqAkALA1QAGAXgGAeQgEAWgaALQgIADglAJIgmAHIAGgJIANgZQAHgPAAgMIgEgkQAPAJAPgIQAMAKAOgEQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgPABgKgJQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQgPAFgLgJIgDgKQgEgHgJgIQAMgBAHgEQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgVAEgFgBIgIgHQgUgUgCgdIgCgcIAEAAIACgBQALAJAPgEQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgLACgIgEQgKgFgBgJIACgKQAJgYACgNIAFgQQADgKgBgFQgEgEgRALIgKAFQALgJAQgIQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQhMARgVBWQgWBVA5A1QgWAIgQAQIgZgFIgcgIIABgKQAJgygEg9QgEg5gNg1QgBgEgEABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABIAHBRQAEAuAAAjQgBA7gLAeQgHATgcAGQgSADgggCIAKgcQAEgMAJgRIAPgbQALgWABgoIgBgZQgCgQABgKIAAgEQAKADAIgEQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgJABgJgEIAAgDIABgKIADgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCgaQgBgHgCgKIgFgQQgDgQgCgIIgGgMIgFgLIgJgZIgNghQgIgVgHgMQgFgIgKgcIgShdQgCgSABgPQAAgGgBgPQgCgNACgIIABgQQAHAEAFABQAEALAMAAQAMAAAJgIQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIAFgHABQgKACgEgHQAIgBAHgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgPAIgLgEIgCgCIADgZQAEgdAIgYIASgzIAMgbQADgPADgHIADgFQADgCADgEQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAOglAEgxIABgdQADgTAAgJIgBgNQAFAGAHABIAAABIABAAIAAAAQAFAPATAFQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgLgEgKgNQAJAAAGgHQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAABQgJAFgIgBQgJgBgFgJIAAAAIgBgMIgEgRIgFgRQgHgfgPgfQAGAFAJABQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQALgGAHgSQAGgQAAgOQABgQgUABQgPAAgQAIIABgCQAAgEgEgBQgDAAgBADQgEARADARQgig2gtgZQglgVgbgFQBNgVBHAkQBFAkAfBKQAbBAgKBVQgGAxgYBkQgQBTABA1QACBLAfA5IACAEQACADAEgCQAEgBgBgDQA5gvAvhOIAbgtQARgXAXgKQArgUA8AWQBPAfA6BiQAXAmALAwQAJAnAEA2QgogfgwgGQgygGgsAXIgQAIQAOhtgyhBQgCgCgDACQgBAAAAABQgBAAAAABQAAAAAAABQAAABABAAQArBBgGBqQgIACgPgHQgegMgXAAQglgCgaASQAehDAAhGQAAgEgEAAQgDAAgBAEQgLBRgUBAQguglgqgDQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABABABQAAAAAAAAQABABABAAQA4ANAbAiIABADQAaAgAjAhIACADIAQAaIAHAOQAEAKAEAFIAEACIAXAdIAQANIAWAVIASAPIAQAPQAKAJAHAEIAEADIgFAIQgHAIgLACQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAMgCAJgIIABABQAJADAJgEIAMAJIA/AmIASANIAGAHIAPALIASAOQALAJAFAHQAHALACAMIACAPIABAQIgCAJQgBAEACAHQAAAGgDAJIgGAOQgDAKgJAMIgQAVIgBABIAAgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAFACAEIgIAIQgJAIgQASQgRARgIAEIgXAMQgEACgGABIgKACIgGADIgLAAIgPgBgAFDHzQAJAKANABQAMABAKgKQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgIAHgKAAQgKgBgIgHQAEgCAEgFQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAABQgLAHgKAAQgLAAgIgJQgBgBAAAAQgBAAAAAAQAAgBgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAGAJAKADQAJADAJgDgAhFDFQgBAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQAMAHANgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgFAKgJAEQgKAEgLgFIgBAAIgBABgAhzCsQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgQAAgOgHQAHgCAGgFQAAAAAAgBQAAAAABAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBABQghAQgSgaQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQASAMATgCgADRhXQAxAoAYA2QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBQgDgCgCADIgjAoQgVAWgSAPQgpAkg5AZQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQA3gTAsghQAygkAbgtQBCAdAnAeg");
	this.shape_202.setTransform(17.5,-0.9,1.181,1.181);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#07003C").s().p("AgPgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAFAFAHAAQAHAAAFgFQABAAAAAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgGAHgKAAQgIAAgHgHg");
	this.shape_203.setTransform(-8.8,-34.4,1.181,1.181);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#07003C").s().p("AAUASQgTgEgEgPIAAABIgBgBIAAAAQgLgDgFgKQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAABQAFAIAJABQAHACAJgGQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgGAHgJAAQAKALALAEQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIAAAAg");
	this.shape_204.setTransform(-2.8,-52.4,1.181,1.181);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#07003C").s().p("AAAAFQgJgBgGgGIABgCIABAAQAFAEAIABQAHABAGgEQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgFAFgIAAIgCAAg");
	this.shape_205.setTransform(-21.4,-10.7,1.181,1.181);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#07003C").s().p("AAKAVQgLAAgEgLQgLgCgHgIQgIgIAAgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAQANAFQALAEAOgHQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAgBABQAAAAAAAAQgHAHgHABQADAHAKgCQAHgBAIgFQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgJAIgKAAIgCAAg");
	this.shape_206.setTransform(-12,-12.4,1.181,1.181);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#07003C").s().p("AgTAHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAKAFAJgEQAKgEAEgJQABgBAAAAQAAAAABAAQAAgBAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgEANgMAFQgFACgEAAQgIAAgHgFg");
	this.shape_207.setTransform(11.7,21.8,1.181,1.181);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#07003C").s().p("AAAAHQgLAAgKgFQgKgFgGgKQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQASAaAggQQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAgBABQAAAAAAABQgGAEgHABQAOAHAQAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgEAAQgRAAgPgKg");
	this.shape_208.setTransform(-0.4,17.4,1.181,1.181);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#07003C").s().p("AgaAOQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQALgCAHgIIAFgHIADgIQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAIgHAIQAQABAGgMQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQgDAIgJAEQgIAFgIgEIgBgBQgJAIgMACIgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_209.setTransform(41.6,41.4,1.181,1.181);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#07003C").s().p("AgFAHQgIgGACgIQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAHAEACQAEADAGgDQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgFADgFAAQgDAAgDgDg");
	this.shape_210.setTransform(58.5,72.9,1.181,1.181);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#07003C").s().p("AgEAHQgIgFgBgJQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQACAHAGADQAFAEAHgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgGABQgGAAgEgDg");
	this.shape_211.setTransform(63.9,62.1,1.181,1.181);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#07003C").s().p("AAQAOQgNgBgHgKIAAgBQgJADgKgDQgKgCgGgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABQAAAAAAABQAIAJAMAAQAKAAAJgHQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgFAFgDABQAHAHAKABQAKAAAIgHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQgJAJgLAAIgDAAg");
	this.shape_212.setTransform(56.3,57.7,1.181,1.181);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#07003C").s().p("AAMAOQgKgDAAgKQgIgCgHgIQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAHAIAPACQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgHAAQABAFAGADQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_213.setTransform(18.2,62.7,1.181,1.181);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#07003C").s().p("AAGADQgJAGgLgDQgLgDgHgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQALANATgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAKAIAPgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgIABQgKAAgIgHg");
	this.shape_214.setTransform(29.9,56.5,1.181,1.181);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#07003C").s().p("AgDAKQgQgDgGgOQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAgBABABQAAAAAAAAQAAAAABABQAGAKAOABQAGAAATgDQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgLAFgLAAIgGAAg");
	this.shape_215.setTransform(24.6,51.6,1.181,1.181);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#07003C").s().p("AAHAKIgCABQgNABgMgGQgNgGgBgNQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQACALAKADIAUAEQgEgFAAgKQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAALAKAGQAJAEAMgBQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgJACQgKAAgHgGg");
	this.shape_216.setTransform(20.4,40.8,1.181,1.181);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#07003C").s().p("AgCAHQgKgFgGgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQAIAHAGACQAGADALACQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgFABQgHAAgGgEg");
	this.shape_217.setTransform(-28.1,47.7,1.181,1.181);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#07003C").s().p("AgNAKQgQgFgJgLQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAAAQAKALAOACQAIABANgEQgGgDgDgGQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQALAOAUgDQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgMADgJgFIgBACQgHAGgJAAQgFAAgHgCg");
	this.shape_218.setTransform(-8.1,53.5,1.181,1.181);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#07003C").s().p("AAMARQgKgEgFgKQgJABgJgFQgJgFgDgJQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQAAAAAAAAQAQAXAZgPQADgCACACQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQgGAGgIABQAKAMASgCQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgEACgFAAQgGAAgFgDg");
	this.shape_219.setTransform(-4.3,38.9,1.181,1.181);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#585ECD").s().p("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gIgJQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAGAJAKADQAJADAJgDgAEQHvQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgPABgKgJQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQgUAGgLgOQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAABAAQAAABAAAAQAHAKALADQALADAKgGQAMAKAOgEgAh3HDQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAABABQAJAMAQAFQARAFALgJIABgCQAKAFAMgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQgUADgKgPQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQACAGAGAEQgOAEgHgBQgOgCgLgMIgBgBIgCABgACqGzQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAGAOAQADQAPADAOgHQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgTAEgGgBQgPAAgGgMIgBgBIgBAAgAFVFZIgEAIIgFAIQgHAIgLACQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAMgCAJgIIABABQAJAEAIgFQAJgEADgJQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgGANgQgBQAHgJAAgIQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABgADAFwQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgMACgJgFQgKgFAAgMQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAJAFAGIgVgEQgKgEgCgLQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQABANANAHQAMAGAOgCIACgBQALAJAPgEgAglFjQAKAEAKgEQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgSABgKgLQAIgCAGgHQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQgCgCgDABQgaAQgQgXQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABABAAQADAJAJAGQAJAFAJAAQAGAJAKAFgABBDFQgBAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAMAHANgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBgBAAABQgBAAAAAAQAAAAAAABQgFAKgJAEQgKAEgLgFIgBAAIgBABgAATCsQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgQAAgNgHQAHgCAFgFQAAAAAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAABQAAAAAAAAQghAQgSgaQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQARAMATgCgAFYhXQAxAoAYA2QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgDgCgCADIgjAoQgVAWgSAPQgqAkg5AZQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQA3gTAtghQAygkAbgtQBCAdAnAegAiQh1QgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAABQAAAKAIAJQAHAIALACQAEALAMAAQAMAAAJgIQAAAAAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgIAFgHABQgKACgEgHQAIgBAHgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgPAIgLgEQgNgGgBgQIgBgBIAAAAgAjRhWIAAABQAFAHAKACQAJABAHgGQAAgBAAAAQAAAAAAgBQABAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAQgGAEgIAAQgIgBgFgGIgBAAIgBABgAhnkgQAAABgBAAQAAABAAAAQAAAAAAABQAAAAABABQAHAIAJAAQAKAAAGgJQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgFAFgHAAQgIAAgFgFIgCgBIgCAAgAimlXQAIALACAUQAAADAEAAQADABABgEQADgWgPgQQgQgRgVALQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAABAAQAFgCAFAAQALAAAIAKgAormWQgDACACAEIAEAIQADAGACACQADADADgBQADAAAAgEQADgMgOgJIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABgAlDmxQACARgIAPQgCADADADQACADAEgCQAQgGgBgeQgBgNgHgJQgIgKgMgCQgLgDgNAGQgNAGgFAKQgFAKAAANQABANAEALQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQABgWACgJQADgQASgEIAFgBQAOAAADASgAlempQgCACgEAKQgEAJACAGQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAFgEABgHQACgNAAgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAgQmgQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgLgEgKgNQAJAAAGgHQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAABAAAAQgJAFgIgBQgJgBgFgJQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAFALALACIAAABIABAAIAAAAQAFAPATAFgAhjptQgFAWAGATQAHAXAUADQABAAAAAAQABAAAAAAQABAAABgBQAAAAABgBQALgGAHgSQAGgQAAgOQABgQgUABQgPAAgQAIIABgCQAAgEgEgBIgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAABAAAAg");
	this.shape_220.setTransform(1.6,-1,1.181,1.181);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#07003C").s().p("AABAkQgUgEgHgXQgGgRAFgWQABgEAEABQAEABgBADIAAACQAQgHANgBQAUAAAAAQQAAAOgGAPQgIASgLAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAgAAAgZIgUAEQgCAfAWAQIAHgKQAJgOACgLQAEgQgIgBg");
	this.shape_221.setTransform(-7,-70.7,1.181,1.181);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#07003C").s().p("ACuBRQgYg4gxgmQgngfhBgcQgbAtgyAjQgtAgg3ATQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQA5gZAqgiQASgPAVgXIAjgoQACgCADACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQA/ATAwAlQA2ApATA5QABAEgEACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_222.setTransform(30.3,-9.6,1.181,1.181);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#07003C").s().p("AAVAaQgDAAgBgEQgBgUgJgKQgJgOgTAGQgBAAAAABQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAVgKAPARQAQAPgEAWQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_223.setTransform(-19,-40.6,1.181,1.181);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#07003C").s().p("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");
	this.shape_224.setTransform(1.6,-1.5,1.181,1.181);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#07003C").s().p("AgDAPQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQgCgFADgIQAFgLABgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABACgDANQAAAGgGAEIgBACIgCgBg");
	this.shape_225.setTransform(-39.9,-49.6,1.181,1.181);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#07003C").s().p("AAAALQgBgCgDgGIgEgHQgCgEADgCQADgDADACQANAJgDALQAAAEgDAAIgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_226.setTransform(-63.2,-47.7,1.181,1.181);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#07003C").s().p("AAQAiQgDgDACgDQAJgPgDgQQgCgVgTAEQgSAEgDAQQgCAIgBAWQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgFgLAAgNQAAgMAFgKQAFgKANgGQAMgGAKADQANACAHAKQAHAJABANQABAdgQAGIgCABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape_227.setTransform(-39.2,-51.8,1.181,1.181);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FBB216").s().p("AgohIQAzAXAGAEQAhAVgNAbQgRAkggAiQADhQgfhBg");
	this.shape_228.setTransform(7.8,-61.8,1.181,1.181);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FBB216").s().p("AALAFQgWgYgagPQAegGAKAAQAWABAIASQAFAMAAASIgBAgQgKgSgQgSg");
	this.shape_229.setTransform(-2.7,-77.6,1.181,1.181);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FBB216").s().p("AgbgwQAoAhAPAaIgiAmQgSgxgDgwg");
	this.shape_230.setTransform(4.3,-8.3,1.181,1.181);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FBB216").s().p("AgTAIIACgOQACgLAGgBQAHgBAJAGIAPALIgEACQgUAHgTANg");
	this.shape_231.setTransform(-34,-82.8,1.181,1.181);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FBB216").s().p("AgKgJQAIghACgcIAZAuQAKAZgRAYQgIALgNANIgZAWIAShQg");
	this.shape_232.setTransform(6.3,-42.2,1.181,1.181);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBB216").s().p("AgWADQAEgeAGglQAVAXAIAOQAOAXgIARQgGANgQAPIgZAYQgBgaADgkg");
	this.shape_233.setTransform(3.8,-23,1.181,1.181);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FBB216").s().p("AgYgLQARgRAXgFIAIAiQABALAAAWg");
	this.shape_234.setTransform(20.3,14.3,1.181,1.181);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FBB216").s().p("AgTgUIAUgEIAOgBQAIABgEAQQgDAKgJAPIgGAJQgXgQADgeg");
	this.shape_235.setTransform(-7.1,-70.8,1.181,1.181);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFDB64").s().p("AgBAMIgGgBQgCgBABgFQADgHAGgFIAIgFQgCAHAAAJQAAAFACAEg");
	this.shape_236.setTransform(6.8,66.7,1.181,1.181);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFDB64").s().p("AgDAQQgLAAgCgMIgDgTQARARAWAMIgNABIgIABIgCAAg");
	this.shape_237.setTransform(-32.5,54.6,1.181,1.181);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFDB64").s().p("AgOAGQgEgGgCgIQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAUAJATAEIgSAJQgFACgEAAQgEAAgEgGg");
	this.shape_238.setTransform(-26.6,58.3,1.181,1.181);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFDB64").s().p("AABAGQgFgEgIgKIAVABIABgBQAAAIADAJQgIgBgEgCg");
	this.shape_239.setTransform(-20.7,59.7,1.181,1.181);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#585ECD").s().p("AA5BPQgigEgXgIQgcgJgYgRQgQgMAFgZIAMgkIAQgvQAjBNA/AwIACABIgHAhIgBgBgAgggMQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAGAIAKAEQAKAFAIgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgKgCgGgCQgHgCgIgIIgCAAIgBAAg");
	this.shape_240.setTransform(-26.3,48,1.181,1.181);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FBB216").s().p("AAQAPQgVgQgogjQApABAWAIQANAEAHAXQAEALAEAbg");
	this.shape_241.setTransform(30.3,24.3,1.181,1.181);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FBB216").s().p("AgbgWIABAAQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAYAEQAMADAHAJQAHAHACAVQgUgWgjgXg");
	this.shape_242.setTransform(62.7,46,1.181,1.181);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FBB216").s().p("AgigPIABgDIAAgCIABAAIACgBIAOgBQARgCAJABQAOABAEASIAHAcQgbgRgqgWg");
	this.shape_243.setTransform(55,40.3,1.181,1.181);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFDB64").s().p("AgTAGIgCgXQARAQAbAFIgOAIQgJAEgGACIgCAAQgIAAgDgMg");
	this.shape_244.setTransform(-14.9,65.4,1.181,1.181);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FBB216").s().p("AgxgeIBDAHQAPACAHATIAKAiQgugag1gkg");
	this.shape_245.setTransform(43.7,33.9,1.181,1.181);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFDB64").s().p("AgFAKQgFgCgDgGIgGgKIAAgBIABgBIAMABIAaABIgJANQgEAGgHAAIgFgBg");
	this.shape_246.setTransform(-8.3,67.6,1.181,1.181);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFDB64").s().p("AgHAJIgOgJIAAAAQAZgCASgHQgJALgHAGQgDACgEAAIgGgBg");
	this.shape_247.setTransform(-1.9,66.6,1.181,1.181);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFDB64").s().p("AgwB1QgfhBgIhMQgIhIAQhZQAPgcAVgMQAZgPAbAKQAcAKAOAmQAIAWAGArQADAcgDA/QABA4AYAcIAAABIgbBYQgQA0gJAkQg1gyghhEg");
	this.shape_248.setTransform(-22.8,24.4,1.181,1.181);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgEAEQgCgCABgCIABgCQABgEADAAQAFAAABAEIAAACQABACgCACQgCADgDAAQgCAAgCgDg");
	this.shape_249.setTransform(0.4,-70.5,1.052,1.052);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgiAWQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQANgTARgLQAUgOATADQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQgZAHgKAHQgQAIgPAQIgBABIgBgBg");
	this.shape_250.setTransform(5.8,-76.9,1.052,1.052);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#030100").s().p("AhmFOIABgBQBDgUA+hNQAegmAQgcQAVgnAEgmQAJhKgohLIgmhAQgYgngKgaQgfhKAThLIABAAQgMA2ALAxQAIAkAZAwIAnBBQAWAlAKAeQAbBMgWBHQgQA2hBBIQg1A9g8AQIAAAAIgBgBg");
	this.shape_251.setTransform(48.2,-11,1.052,1.052);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#030100").s().p("AArAIQg1gLgeAEIAEgBIgHABIAAAAIADAAIgDABIgBgBIABgBQAQgIAlABQAbABAHAMIAAACIAAAAIgBAAgAAAAAQAnAGABgCQACgEgTgCQgMgCgKAAQgUgBgRAFQAKgBALAAIAPABg");
	this.shape_252.setTransform(26,23.9,1.052,1.052);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#030100").s().p("Ag9AKQAmgMAXABQAMAAATADIAYAEQgbgLgdgDQgOgCgQAGIgcAMQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAcgMQAQgGAPABQAhADAfAQQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgggGQgSgEgMAAQgOAAgRADIgeAIIgBABIABgCg");
	this.shape_253.setTransform(3.6,18.2,1.052,1.052);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#030100").s().p("AhOANQAjgRAsgGQAUgDAZABQAVAAAMAIIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgQgJgZAAQgPAAgaAEQgdAEgtARQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAg");
	this.shape_254.setTransform(-46.1,22.9,1.052,1.052);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#030100").s().p("AgiBJIAJgwQAGgbAFgMQAMggAjgaQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgWAPgKALQgMAQgGAXQgEAMgFAaQgFAbgEANg");
	this.shape_255.setTransform(0.1,36.2,1.052,1.052);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#030100").s().p("AgRgSQAqgmA0gMQABgBAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgBACQg4AQgnAjQgjAfgaA2QAQgyAtgmg");
	this.shape_256.setTransform(-10.3,34.3,1.052,1.052);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#030100").s().p("AhZAgQAigiAxgRQAugRAxAFIABABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgxgFguARQguAQgkAiIgBAAIAAgBg");
	this.shape_257.setTransform(-15.7,28.9,1.052,1.052);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#030100").s().p("AAfAOQgcgSghABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAagCAWAKIAGADIAFAEQABgBgLgKQgKgIgPgDQgBAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAZADANAWIAAACIgBAAIAAAAg");
	this.shape_258.setTransform(-30.6,19.3,1.052,1.052);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#030100").s().p("AhdAkQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQALAEARgBQAIgBAUgEQAWgFAXgKQAwgSAkgnIABABQgdAlg3AWQgZAKgeAFQgRAEgHAAIgFAAQgLAAgIgEg");
	this.shape_259.setTransform(-6,-35.1,1.052,1.052);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#030100").s().p("AhRAkQgHgBgDgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQADAEAJAAIAPAAQALAAAPgDQAYgEATgIQAXgIATgMQAIgFALgKIAKgIIgbAQQgVAJgWAIQgwAQgrAAQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAAAQA1gFAlgMQAogMArgeIACAAIAAABQgnAog0ASQgXAJgeADIgVAAIgIAAg");
	this.shape_260.setTransform(-5.5,-35.7,1.052,1.052);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#030100").s().p("Ag+BOIABgBQAMASApgfQAUgQAPgZQAOgWAJgdQAGgWAFgiQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgFBLgoAwQgVAagaAOQgLAFgIAAQgJAAgFgHg");
	this.shape_261.setTransform(8,-22.6,1.052,1.052);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#030100").s().p("AhYAPQALgcBCgBQA1gCAvAcIAAAAQgugZgyABQgbAAgXAGQgQAFgGAFQgGAGACADQAAABAPgGQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgUAHg");
	this.shape_262.setTransform(24.5,-38.7,1.052,1.052);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#030100").s().p("AAIgJQgUgJgUgEQgNgDgLAAIgHAAIgGAAQgHAAANAEQAAABABAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgIABgEgHIABgCQBCgGBUA9IAAABQgygegSgIg");
	this.shape_263.setTransform(23.6,-31.7,1.052,1.052);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#030100").s().p("AANgIQgSgTgJgHQgTgMgRACIAAAAQAPgFATAMQAHAEATATQAjAhAGAbIgBAAQgMgfgZgXg");
	this.shape_264.setTransform(20.2,-27,1.052,1.052);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#030100").s().p("AA6gkQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgeAJggAWIg3AqQA3g2A9gUg");
	this.shape_265.setTransform(-48.8,-34,1.052,1.052);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#030100").s().p("AgfAxQAIgbAUgeIAOgXQAKgNALgFQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgVANgQAfIgZA1IgBABIAAgBg");
	this.shape_266.setTransform(-38,-26,1.052,1.052);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#030100").s().p("Ag5A6QAVgkAhgiQATgWAHgGQASgQARgBIAAABQgLABgLAIIgSAPIgZAaQgZAbgYAlIgBAAIAAAAg");
	this.shape_267.setTransform(-44.5,-27.9,1.052,1.052);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#030100").s().p("AgaAzQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAGgBAHgJIAJgNQAGgLAEgJQAOgcgJgcQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAABQALAbgPAeQgGAOgJANQALgLAJgNIAJgOQAEgIgCgJIgHgbQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIABABIAGASQADALgBAHQAAAHgKAPQgNATgRAOIgCADQgFAGgFABIgBgBg");
	this.shape_268.setTransform(3.5,-92.9,1.052,1.052);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#030100").s().p("AgbAbQAAgNAHgPQAOgiAhgSQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgdAQgOAaQgIAPgCAQQgBATAKAMIAAABQgMgIABgTg");
	this.shape_269.setTransform(-10.3,-93.1,1.052,1.052);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#030100").s().p("AAJApQAHgRACgIQAEgOgDgLQgCgPgMgIQgKgIgPACIAAgBIAAgBQAMgCAKAGQALAGAFALQAGAOgEAQQgCAKgJAUIAAAAIAAAAg");
	this.shape_270.setTransform(-35,-82.7,1.052,1.052);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#030100").s().p("AAFAyQARgjgDgXQgCgQgLgLQgKgLgQgCIAAgBQAjACAFAlQAFAhgTAbIgBAAIAAAAg");
	this.shape_271.setTransform(-35.7,-81.7,1.052,1.052);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#030100").s().p("AgKAIQgFgOACgUQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAABQgBAXAEAJQAFASARADQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAIgBAAQgRAAgGgUg");
	this.shape_272.setTransform(-43,-76.4,1.052,1.052);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#030100").s().p("AgIApQACgxAPggQAAAAAAgBQAAAAAAAAQAAABAAAAQAAAAAAAAQgJAdgCAMQgCANgDAbIgBABIAAgBg");
	this.shape_273.setTransform(-30.1,-96.9,1.052,1.052);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#030100").s().p("AAPBmQgFgFgHgNQgOgcgJggQgTg9AGg+IAAgEIAAgFQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBALIAVBjQAHAjAIAWQAMAeATASIAAABIgBABIgCAAQgJAAgIgHgAgXAIQAIAfALAYIAMAaQAEAHAFAFQAEAEAFACQAHABgEgDIgGgHIgIgLQgHgMgEgMQgIgUgIgiIgUhkQgCA1ALAug");
	this.shape_274.setTransform(-43.2,-88.6,1.052,1.052);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#030100").s().p("AAXAOQABgJgGgGQgFgHgJgCQgGgCgVACIAAAAQAQgGAPAGQATAHgDARIAAAAIgBAAg");
	this.shape_275.setTransform(-41.5,-49.7,1.052,1.052);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#030100").s().p("AgiABIAAgBQAmgDAgAEIgBAAQgugBgXABg");
	this.shape_276.setTransform(-26.2,-38.2,1.052,1.052);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#030100").s().p("AhYALQAdgOAygDIAwgDQAdgCAUABIABABIgBABIhZADQg3ABggAPg");
	this.shape_277.setTransform(-26.2,-38.3,1.052,1.052);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#030100").s().p("AgPAdQgEgSAJgQQAIgPAQgHIAAAAIADgCIgCACIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIgBACIgFACIgLAPQgGAMgHAZIgBABIgBgBgAgEgJQgJAKgBAOIABAKIAIgZQAGgMAHgJQgIAFgEAHg");
	this.shape_278.setTransform(-21.9,-53.3,1.052,1.052);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#030100").s().p("AgQAJQgJgEgDgIIABAAQAIAQAVgEQAXgDACgRQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAJgKAGQgJAFgLACIgDAAQgIAAgFgDg");
	this.shape_279.setTransform(-7,-62,1.052,1.052);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#030100").s().p("AgQBtQg1gIgZgqIAAAAQAbAqA2AHQA3AIAggnQAbgigLg/QgJg3gXgiIABgBIABAAQAZAhAJBGQAHA6geAgQgbAcgoAAQgJAAgLgCg");
	this.shape_280.setTransform(5.9,-68.8,1.052,1.052);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#030100").s().p("AgQBrQgwgEgagmQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQAcAmAwADQAwAEAggkQAagdgFg8QgDgugYgtIABAAQAaAvACA0QACA8gdAcQgfAcgnAAIgKgBg");
	this.shape_281.setTransform(5.9,-69.5,1.052,1.052);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#030100").s().p("AASAsQgGgqgCgGQgIgcgUgLIAAAAQAkAOABBJIAAAAIgBAAg");
	this.shape_282.setTransform(11.7,-77,1.052,1.052);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#030100").s().p("AgIAEQgHgNADgQIAAAAQgDAeAcAUIABABIgBAAQgOgGgHgQg");
	this.shape_283.setTransform(-2.2,-64.4,1.052,1.052);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#030100").s().p("AhCAOIAAgBQAugEAXgFQAagEAmgNQAAAAAAABQAAAAABAAQAAAAAAABQgBAAAAAAQhGAZg9AAIgCAAg");
	this.shape_284.setTransform(28.3,-73.1,1.052,1.052);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#030100").s().p("AgbAdQAYgpAfgRIAAABQgQAJgOARIgZAfIAAABIAAgBg");
	this.shape_285.setTransform(13.1,-97.4,1.052,1.052);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#030100").s().p("AgWAdQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAdgpARgQQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgiAkgKAVIgBABIgBgBg");
	this.shape_286.setTransform(13.1,-97.2,1.052,1.052);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#030100").s().p("AgyB8QgLgIAGgSQACgIAGgJIAFgJQAKgTgGABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAdhpBFhHQABAAgBAAQg4A+gaBHIgLAkQgCAFABABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQACAEgEAJIgIALQgIAOgCAIQgDAMAIAJQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgBAAIgBAAg");
	this.shape_287.setTransform(0.3,-103,1.052,1.052);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#030100").s().p("Ag/B3QANhCAhg+QAlhHArgnQABAAAAABQgnAsgHAKQgRAXgRAhQggA8gOBDIAAABIgBgBg");
	this.shape_288.setTransform(-0.5,-103.3,1.052,1.052);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#030100").s().p("AAHA2Qg9gVgugrIAAgCIACAAQAaAUAgAQQALAGAXAJQAIADADgBQADgCAGgHQAigxAtgjQADgCAEADQADADgEADQg0AtgiAzQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_289.setTransform(-13.1,15.5,1.052,1.052);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#030100").s().p("AgJA8Qg/grgQg9QgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIABABQAcBAAyAgQAPgcAZgdIAYgdQAPgRANgIQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQgIAKgOAPIgYAZQgSAVgcArQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_290.setTransform(-17.5,-1,1.052,1.052);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#030100").s().p("AgcAuQgbgsgCgwIABgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAIAvAWAmQAZgtA0goQADgCACADQACAEgDACQgoAfgnA2IgCACIgDgCg");
	this.shape_291.setTransform(-14.4,-19.3,1.052,1.052);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#030100").s().p("AhLAQQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAegaAsgEQAtgEAfAWQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgsgPgcABQgiAAgpAVIgBABIAAgBg");
	this.shape_292.setTransform(-33.6,-19.4,1.052,1.052);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#030100").s().p("AAmAVIgLgQQgIgHgHgFQgTgLgiAJQAAABAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQAVgQAdAKQAfAKAEAaQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBABIgCgBg");
	this.shape_293.setTransform(-46.1,-19.7,1.052,1.052);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#030100").s().p("AAUAlQgJgngjghQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAABQABAAAAAAQATAKANAVQAMAUAEAWQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_294.setTransform(-52.8,-25.8,1.052,1.052);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#030100").s().p("AAsBIQgfgUgYgtQgFgHghhHQgBAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAQARARAbA2QAYAvAbASQAEADgCAEQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_295.setTransform(-27.6,-27.5,1.052,1.052);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#030100").s().p("AAvBFQhLg4gZhRIABgBQAqBPA/AzQADACgDAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgBg");
	this.shape_296.setTransform(-29.3,-24,1.052,1.052);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#030100").s().p("AggBDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgjATgkQAQghAdgaQACgCADADQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQgcAagPAfQgHANgGATIgIAjQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_297.setTransform(-37.9,-23,1.052,1.052);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#030100").s().p("AgSBNQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgLghAOgtQAMgnAWgiQADgDAEACQAEADgDADQgXAmgJAiQgDAOgCAXQgCAagCALQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_298.setTransform(-39.5,-24.1,1.052,1.052);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#030100").s().p("AhAA6QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAQAmhKBYgnQAAAAABAAQAAgBABABQAAAAAAAAQABAAAAABQAAAAABABQAAABAAAAQgBAAAAABQAAAAgBAAQhEAig5BNIgCABIgBgBg");
	this.shape_299.setTransform(-44,-26.3,1.052,1.052);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#030100").s().p("Ag2BIQAAgqAhgrQAegpAogSQADgBACADQABAAAAABQAAAAAAABQgBAAAAABQgBABAAAAQguAegVAeQgLAPgJAWIgQApQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_300.setTransform(-45.2,-27.7,1.052,1.052);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#030100").s().p("Ag7AgIAAgCQAQgQArgVQApgWARgCQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgBADQgKAGgTAIIgeANIgcAQQgSALgLAFIgBAAIgBAAg");
	this.shape_301.setTransform(-49.2,-33,1.052,1.052);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#030100").s().p("Ag4AtQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQASgcAfgYQAegYAggLQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgvAZgKAJQgNAIgPAPIgZAaIgCABIgBgBg");
	this.shape_302.setTransform(-49.5,-34.4,1.052,1.052);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#030100").s().p("Ah4CJQgCgFAFgBQBigVBAhLQBAhJAJhlQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAABnhEBPQhCBPhmATIgBAAQgEAAgBgEg");
	this.shape_303.setTransform(47.7,10,1.052,1.052);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#030100").s().p("AA9DmIgCgCIABgeQAAgTgBgLQgDgigMggQgIgbgRghIgcg4QgjhCgMglQgVg/ALgwQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQACBLAWA2QAKAZARAiIAdA4QAiBCAKAuQAQBCgQAiIAAABIgBAAg");
	this.shape_304.setTransform(53.3,-23.3,1.052,1.052);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#030100").s().p("AgzEDQgCgFAFgCQAggOAXgaQAXgbAIgiQAIgjgHgqQgGgfgPgrQgPgpgFgZQgJgkACghQAEhIAhg1QAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQABAAgBAAQAAAAAAABQgRAwgHAfQgIArADAnQADAeARAxQAUA4AFAVQARBMgcA3QgaAyg2AXIgDAAQgCAAgBgDg");
	this.shape_305.setTransform(43.1,-19.5,1.052,1.052);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#030100").s().p("AgIABQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAIgCAHADQAEACgBADQgCAEgDAAQgHAAgHgFg");
	this.shape_306.setTransform(16.8,25.7,1.052,1.052);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#030100").s().p("AhdARQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAigZA3gGQAugEAwAKQAFABgBAGQgBAEgFgBQgwgJgrAFQgSACgaAHIgsANIgBAAIgBgBg");
	this.shape_307.setTransform(-42.6,18.6,1.052,1.052);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#030100").s().p("AAbAGIgbgEQgJAAgTADIgbACIgCgBIABgBQAWgMAigBQAkAAAUAMQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgKAAgSgDg");
	this.shape_308.setTransform(-46.8,20,1.052,1.052);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#030100").s().p("ABKAIIgZgDQgbgDgWAAIgxACQghACgQAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAigIBBAAIAyAAQAfACASAHQAEABgBADQAAADgEABIgFAAIgTgBg");
	this.shape_309.setTransform(-46.8,24.8,1.052,1.052);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#030100").s().p("AhhAZQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAogaAzgMQAvgLAzAEQAFAAAAAGQAAAGgFgBQhZgHhhAuIgCAAIgCgBg");
	this.shape_310.setTransform(-46.7,22.7,1.052,1.052);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#030100").s().p("AgDB4QgbghgNgoQgPgrAIglQAHgmAcgZQAcgbAlADQAEABAAAEQAAAEgEAAQgnAAgaAcQgYAbgDApQgCAfAPAkQAIARAYAtQACAEgDACIgCABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_311.setTransform(-32.3,5,1.052,1.052);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#030100").s().p("AgGAhQgjgBgZgHQgogNAOgbIABAAIABABQAEArBegIQAbgCAUgMQAWgMAIgYQACgFAFACQAFABgBAFQgKAegfAQQgaANghAAIgCAAg");
	this.shape_312.setTransform(-27.9,24.1,1.052,1.052);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#030100").s().p("AglAfQgIgeAdgUQAdgWAaARIABADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQghgDgQALQgLAHgFALQgEAIgDARIgCABIgBgBg");
	this.shape_313.setTransform(-34,21,1.052,1.052);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#030100").s().p("AgjCAQADhFARhAQAUhYAagmQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAgBABQgFATgQAqQgOAogFAWQgPA8gFBKQAAAFgFAAQgFAAAAgFg");
	this.shape_314.setTransform(-29.7,4.5,1.052,1.052);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#030100").s().p("AA/EYQhAgigkhFQgihBABhNQAAhQAmhWQAehFA5hPQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAgBABQg1BLgbBBQgkBRgEBKQgEBPAhBCQAhBIBCAjQAFACgDAEQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_315.setTransform(-20.3,-4.6,1.052,1.052);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#030100").s().p("AAcDYQgzhigKhyQgKhvAhhsQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQg2DzBfC2QACAEgEACIgDABQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_316.setTransform(-5.8,-12.4,1.052,1.052);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#030100").s().p("AhFAUQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAUgRAtgLQAvgOAYAGQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgMAEgWACQgZADgJACQgNACgVAIIghALIgBABIgBgBg");
	this.shape_317.setTransform(-18.2,30.9,1.052,1.052);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#030100").s().p("AhcAtQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAOgaAfgVQAbgUAfgKQAdgKAXABQAlAAgFAbQAAABgBABQAAAAAAABQgBAAgBAAQAAAAgBAAQgEAAAAgDQgEgYgqAIQgaAFgdAOQgVAKgTAQQgMAJgXAYIgBAAIgBAAg");
	this.shape_318.setTransform(-15.7,28.4,1.052,1.052);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#030100").s().p("AhVBSQgBgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAQgWAZgSQASgMAfgQQAZgMAfgYIAJgIQANgJgIgNQACgOgMgBQgIgCgMADIgUAIIgBAAIAAgBQAggdAXARQANAKgFAQQgEANgNALQgNAMgVAMIglASQg0AfgaAhIgDABIgCAAg");
	this.shape_319.setTransform(-10.3,34.1,1.052,1.052);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#030100").s().p("AhBBOQgEgTAPgeQAKgVASgUQASgXAVgRQAZgTAZgGQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAIgsAbQgWAQgPASQgRATgNAZIgIAXQgFAPgFAHg");
	this.shape_320.setTransform(-12.6,34.4,1.052,1.052);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#030100").s().p("AgiBBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAGglARggQASgmAcgSQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgWAbQgNAQgGAMQgQAbgLApQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_321.setTransform(0.4,38.7,1.052,1.052);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#030100").s().p("AglBUQgNgrANgxQANg0AXgQQAJgIANABQAOABAGALQAHANgIAPQgHAMgNAJQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAJgJAFgGQAIgKgDgGIgcgPQgIAGgGALQgMASgIAZQgMAmAFA6QAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_322.setTransform(0.6,36.7,1.052,1.052);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#030100").s().p("AgOgCIgBgCIACgBIALADIAOABQAEAAAAADQAAAEgEAAQgTgBgHgHg");
	this.shape_323.setTransform(-3.9,33.2,1.052,1.052);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#030100").s().p("AgmARQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAcgFAKgEQANgEAagQIACAAIAAACQgNARgXAJQgPAHgPAAIgNgBg");
	this.shape_324.setTransform(7.1,32.1,1.052,1.052);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#030100").s().p("AA7CfQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAZgsAIgXQAMglgJgkQgXhVgogvQgQgTgPgIQgXgMgRAKQgWAOgQA6QgIAcgEAtQgEA4gDARQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgGgtAHgwQAHgxASgpQAKgWAHgJQAMgQAQgCQAYgCAbAXQAxAnAeBuQALAngMAmQgJAfgcAnIgCACIgBgBg");
	this.shape_325.setTransform(8,11.5,1.052,1.052);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#030100").s().p("Ag1AgQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQANgYAhgSQAggUAcABIABABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgdALQgSAHgKAGQgKAFgPAMIgXAUIgBAAIgBAAg");
	this.shape_326.setTransform(-4.1,21.2,1.052,1.052);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#030100").s().p("AgpBEQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAegbQAPgQAKgPQAJgOAGgWIAKgnIABgBQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAQAHAmgaArQgaAsgkALIgBAAIgBgBg");
	this.shape_327.setTransform(33.4,23.8,1.052,1.052);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#030100").s().p("AgZBEQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAWg1IAMgcIALgYQAGgUgNgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAOgFADANQACALgFAMQgaBDgUAjIgBACIgCgBg");
	this.shape_328.setTransform(26.7,34.9,1.052,1.052);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#030100").s().p("AgUBDQgJgcAKg2QAMg/AfAOQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgSACgIAYQgFALgEAbIgDAgQgCAVgCAKIAAABIgBgBg");
	this.shape_329.setTransform(26.2,34.8,1.052,1.052);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#030100").s().p("AgIADQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAFgBAKgBQAEABAAADQAAAEgEAAQgKAAgFgBg");
	this.shape_330.setTransform(23.9,31.1,1.052,1.052);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#030100").s().p("Ag0AYQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAGgPAcgIIAlgJQAWgFAOgIIAAABQgIAKgNAGQgJAEgRACQgTAEgKADQgHACgIAGIgOAJIgBAAIAAAAg");
	this.shape_331.setTransform(14.6,31.7,1.052,1.052);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#030100").s().p("AgtA5QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgVAbgeIAegbQAUgSADgPQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAABABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAFAOgNANQgHAHgRAMQgNALgPAVIgcAiIgBAAIgBAAg");
	this.shape_332.setTransform(19.4,34.3,1.052,1.052);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#030100").s().p("AgsA+QgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQABgcARghQARggAVgUQAIgGAIgCQAJgCAHAGQAFAFAAAGQgBAGgFAEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgSgQgJAMIgGAHIgLARQgGAJgIAOQgFAJgHATIgMAcIgBABIAAAAg");
	this.shape_333.setTransform(19.5,34,1.052,1.052);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#030100").s().p("Ag2AiQAIgXATgRQASgRAXgIQAZgIALAKQAFAEAAAGQAAAGgEAFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAEgSgTACQgMABgOAGQgNAHgKAIQgRANgSAbIgBABIAAgCg");
	this.shape_334.setTransform(14.7,30.3,1.052,1.052);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#030100").s().p("AAxCXQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAjhMAAhMQgBhvg/gVQgqgPgdAsQgXAigFAvQgDAeAHAtQAJBCAAAKQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBAAQgDAAgBgCQgPgtgDgyQgDg0ALgrQALgoAZgYQAegdAlAKQAkAJATAnQAQAeADAsQAIBfgyBQIgBABIgBAAg");
	this.shape_335.setTransform(28.8,10.7,1.052,1.052);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#030100").s().p("Ag1ARQgDgDADgDQAhglBLAKQAAAAABABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgsAEgLADQgcAHgTASQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_336.setTransform(21.8,25.3,1.052,1.052);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#030100").s().p("ABAAqQglgbhgg0QAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQBCAWBGA1QADADgCAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_337.setTransform(16.3,-5.8,1.052,1.052);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#030100").s().p("AAJAmQgNgbgJgtQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAABQAAAAAAABQASAsADAdQABAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBAAIgCgBg");
	this.shape_338.setTransform(8.7,-10.5,1.052,1.052);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#030100").s().p("AAHBnQgehsAMhiQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQgBBzAWBZQABAEgEABIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape_339.setTransform(5.3,-29.5,1.052,1.052);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#030100").s().p("AgEAwQgQgUAIgeQAHgfATgPIACAAIAAABQgQAZgEASQgCAKACAPIAEAZQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCAAIgBgBg");
	this.shape_340.setTransform(33.5,-31.3,1.052,1.052);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#030100").s().p("AgjAgQgRgcAjgWQAigXAYAQQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgHACgRAAQgPAAgIAFQgXALgCAhIgBACIgCgBg");
	this.shape_341.setTransform(29.3,-23.5,1.052,1.052);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#030100").s().p("AhDAVIAAgCQAXgcAngJQAlgIAiAPQAEACgCAEQgCAEgEgBQhGgZg5AwIgBABIgBgBg");
	this.shape_342.setTransform(18,-20,1.052,1.052);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#030100").s().p("AAzA6IgUggQgMgTgKgKQgUgXgmgXQgEgCACgEQADgEAEACQAjAQAbAfQAeAgAFAjIgBABIgBAAg");
	this.shape_343.setTransform(19.8,-25.8,1.052,1.052);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#030100").s().p("AhBBWQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAbAIAbgaQAQgQAUgiQAZgqAHg6QABgEAEAAQAFgBAAAFQgGBGgpA3QgmA0geAAQgKAAgIgFg");
	this.shape_344.setTransform(8.8,-21.5,1.052,1.052);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#030100").s().p("AAmBEQgOgugRgaQgIgPgPgRIgbgdQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAgATAXApQAXAkAGAoQABAEgEABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_345.setTransform(21.1,-26.8,1.052,1.052);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#030100").s().p("ABPAmQgKgGgbgSQgXgPgPgGQgQgIgZgFIgrgKQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAigDA1AYQA4AXATAbQAAAAAAABQABAAAAABQAAAAgBAAQAAABgBAAIgCABIgBAAg");
	this.shape_346.setTransform(24.7,-30,1.052,1.052);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#030100").s().p("ABOA5IgegmQgSgTgTgNQgRgMgZgKIgvgOQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAQAtgBAxAjQAyAiAPArQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAIgCAAg");
	this.shape_347.setTransform(24.8,-32,1.052,1.052);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#030100").s().p("AAwAHQgcgJgMgCQgXgGgZADQgKABgNAEIgXAHQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAagXA6AHQA/AIAfAYIAAABIgBABQgPgBgagKg");
	this.shape_348.setTransform(25.8,-38,1.052,1.052);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#030100").s().p("ABYAdQhMhBhnATIgCgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAvgRAzANQA0ANAjAjQAAABABABQAAAAAAABQAAAAAAABQgBAAAAABIgDABIgCgBg");
	this.shape_349.setTransform(25.6,-39.2,1.052,1.052);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#030100").s().p("AhLCPQgLgKAFgNQAFgMAMgIIAZgQQAMgJAIgLQANgVAGgfQAGg9AKgfQATg4AtgGQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgrARgOAxQgJAdgJA9QgIAkgSAVQgHAJggASQgaAUAMAQIAAACIgBAAIgBAAg");
	this.shape_350.setTransform(9.9,-27.3,1.052,1.052);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#030100").s().p("AkHBgQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAABAAQAAAAAAgBQABAAABABIApAKIAqAKQAuAHAqgBQBZgBBKgjQBEggAxg2QAYgaASghQAGgKAJgVQAIgVAGgKQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQgBAPgHAUIgQAfQgSAhgaAdQg0A5hGAgQhMAjhaABIgGAAQhmAAhBggg");
	this.shape_351.setTransform(-9.2,-46.2,1.052,1.052);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#030100").s().p("AgNAXQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIADgNIADgPQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABANIgBAHIAIgLQADgEAFgQQABgDAEAAQAEABgBADQgDAXgWATIgCABIgCgBg");
	this.shape_352.setTransform(6,-45.7,1.052,1.052);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#030100").s().p("AgHAbQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgHgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAIAdQAEgIADgHIAHgXQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQACAXgWAaIgDACIgBgBg");
	this.shape_353.setTransform(2,-43.1,1.052,1.052);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#030100").s().p("AABAcIgKgYQgHgOgCgKQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAHAIAHANIAFANIAIgnQABgEAEABQAEABgBAEQgEAcgHAXQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_354.setTransform(-10.1,-40.2,1.052,1.052);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#030100").s().p("AAQAgIgTgVQgMgMgFgKIAAgBIACgBQAJAHAKAMIANAOQgEgUACgcQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAQAEAAAAAEIAAAdIACAdQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABIgBAAIgCgBg");
	this.shape_355.setTransform(-38.4,-34.8,1.052,1.052);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#030100").s().p("AgjATQgJgNAJgLQAHgLAPgCQAPgDAPAHQAQAIAHANIAAACIgBgBQgTgQgPgEQgQgEgNAIQgQAIAIARQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIAAAAIgCgBg");
	this.shape_356.setTransform(-42.8,-49,1.052,1.052);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#030100").s().p("AAmAjQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAIgVgFgPQgFgSgWgEQglgIgZAUQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAKgQAcgCQAZgCASAKQARAKABATQABAIgDALIAAAEIACgIQAFgSgCgKQAAgBAAAAQAAAAAAAAQAAgBABABQAAAAAAAAQAGAZgQAVIgBABIgCgBg");
	this.shape_357.setTransform(-16,-54,1.052,1.052);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#030100").s().p("AgLBqQgzgCgfgfQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABQAGABAiAOQAYAKASABQAvABAZggQAagggHgwQgEgagWg4QgCgEAFgCQAFgCACAEQAXA1AEAmQAGA2gfAhQgcAegwAAIgEAAg");
	this.shape_358.setTransform(4.9,-70.8,1.052,1.052);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#030100").s().p("Ah2BdQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQAAAAAAAAQAPAMAOgJQANgIAGgRQACgGAEgdQADgbAFgPQAOgsAggZQAcgYAmAAQAqgBATAfIAAACIgCABQg3gmgwAaQgXANgRAYQgPAXgHAbQgDAOgCAeQgEAagNANQgKALgOABIgCAAQgMAAgKgJg");
	this.shape_359.setTransform(2.5,-72,1.052,1.052);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#030100").s().p("AgHAEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAGgEIAGgBQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQAAABgFADIgHADIAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_360.setTransform(35.6,-74.2,1.052,1.052);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#030100").s().p("AhIAlQAAgBAAgBQgBAAABgBQAAAAAAgBQABAAAAgBQAOgKAWgLIAlgRIAigSQAUgLAPgDIACABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgMALgWALIgkAQIgiAUQgWALgPAFIgCAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_361.setTransform(28.3,-70.2,1.052,1.052);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#030100").s().p("AhIAGIgCgBIABgCQAUgFAxgCQA5gDASABQAEABAAADQAAABAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgOACgWAAIgjABIgkADIgOAAQgNAAgJgBg");
	this.shape_362.setTransform(28.7,-74.3,1.052,1.052);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#030100").s().p("AAMAwQgEgBACgEQAPgoAIgnIggARQgWANgRAGQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAPgKAXgMIAmgVQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgJAxgPAnQgBADgDAAIgCAAg");
	this.shape_363.setTransform(12.2,-96.1,1.052,1.052);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#030100").s().p("AkxErQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAqgeBAgOQAogKBLgIQCQgPA/gXQBvgoAphfQAUguABgzQAAg0gSgvQgSgwglgoQgcgggxgmQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQAwAXAmAuQAlAtASA0QARAvgBA0QgCAygUAvQgoBchjArQgsASg6ALQgkAGhFAIQhLAHgwALQhBAOg0AbIgCABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_364.setTransform(-10.5,-66.8,1.052,1.052);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#030100").s().p("AAFAlQgEgFgBgKIgDgSIgGgmQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAEAVAEATIAEAQQABAJgCAGIgBACIgCgBg");
	this.shape_365.setTransform(-28.4,-98,1.052,1.052);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#030100").s().p("AgUA3QgEgBABgEQAQhEAcgkIACAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgWA0QgLAcgGAYQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_366.setTransform(-31.4,-96,1.052,1.052);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#030100").s().p("AAGBtQgegxgBhBQAAhLAvgdQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQgoApAAA2QAAAXALAkQAMAsACAPIgBACIgBAAIgCgBg");
	this.shape_367.setTransform(-48.8,-65.2,1.052,1.052);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#030100").s().p("AAeDUQgzh4gLhcQgPh8A5hXQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQgyBVAMB1QAFAvATA+IAjBqQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_368.setTransform(-45.7,-57.3,1.052,1.052);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#030100").s().p("AiVBFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQA7g8BMghQBLgjBVgGQAEgBAAAFQAAAFgEAAQhSAGhLAiQhLAgg8A4IgBAAIgCAAg");
	this.shape_369.setTransform(-22,-94.1,1.052,1.052);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#030100").s().p("AAFB8QgEAAgBgEQAAgDADgCQAogKABgnQAAgfgXgkQgyhNgXgpQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIA5BYIAWAhQAMAUAGAQQAJAdgLAdQgMAfgdAAIgCAAg");
	this.shape_370.setTransform(-42,-89,1.052,1.052);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#030100").s().p("AgTAUQgThpAIgkIABgBIABABQAEATACAnQACAmADATQAGAbAGAaIAKApQALAcAPABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgEACgDAAQgbAAgRhng");
	this.shape_371.setTransform(-44.2,-88.7,1.052,1.052);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#030100").s().p("AhJBvIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAxATAegTQAfgSAMgxQAKgkAEguQACgcACg5QAAAAABgBQAAAAAAAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQgBBAgGA2QgEAdgDAOQgFAYgIARQgSAjgjANQgNAFgMAAQgXAAgTgSg");
	this.shape_372.setTransform(-1.2,-102.9,1.052,1.052);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#030100").s().p("Ag+B7QgVgJAMghQAMghAXgpQAqhJBEg4QAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAQg0AxgkA4QgSAcgPAdQgPAegDAHQgIAZAMAMQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_373.setTransform(-1.6,-103.6,1.052,1.052);

	this.instance_5 = new lib.Group_1_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.3,-35.5,1.052,1.052,0,0,0,54.8,75.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#182B89").s().p("AiaCCQgFgFADgKQADgKAHgDQAUgFAQgSQAOgQAIgWQAGgQAFgZIAIgrQALg1AZgZQAegcBFAUQAoALA0AlQgzgRg2gLQgWgFgOABQgVACgLANQAvAKApAeQAoAeAZAqQghgegpgUQgqgUgrgGQAdATAZAsQALAUAVA2QgehGhCglQgXBqgyAwQgMAMgMADIgIABQgLAAgHgIg");
	this.shape_374.setTransform(18.8,-27.5,1.052,1.052);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#772B11").s().p("AhJgjQAFgaADgJQAGgUAMgKQAVgVAtAEQAfADAfALQAiALAZAQIgUAZQgQAhAPAlQgQgEgSAFQgkAJgGAqQgMgNgegBQg4gChTBAQAvhCAShYg");
	this.shape_375.setTransform(20.8,-28,1.052,1.052);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#D9E38C").s().p("AgMB1Qgqh0AEh5QANASAWAkIAiA1QAWAfAGAUQALAhgRAYQgKANgPAIQgJAFgHAAQgHAAgFgEg");
	this.shape_376.setTransform(-41.8,-89,1.052,1.052);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D9E38C").s().p("Ag1B4QgXgIAEgNQARhCAmg5QAkg6A1gsQAGBPgVBXQgJAkgOAUQgVAdgcABIgFABQgRAAgQgHg");
	this.shape_377.setTransform(-1.4,-103.1,1.052,1.052);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#0C0B00").s().p("AACAPIgPhhIADAHIAJARIAIAaIAGAfIACAeIgGAmIgEAQg");
	this.shape_378.setTransform(6.2,-70.7,1.052,1.052);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#F6C310").s().p("AgRBmQgHgBhBgVQACg5ALghQAQgxAlgZQATgNAWgEQAYgDAVAJQAYA+ACAgQAEA1goAgQgYATgdAAIgRgBg");
	this.shape_379.setTransform(5,-71.3,1.052,1.052);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#0C0B00").s().p("AgdAZQgCgCAFgJIAGgMQAJgRAKgHQAGgFAIABQAJABAFAFQAFAGgBAJQgBAHgFAGQgJALgSADIgOAEIgIABQgEAAgBgCg");
	this.shape_380.setTransform(-16.7,-51.4,1.052,1.052);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#0C0B00").s().p("AAAASQgNgDgHgLQgDgFAAgGQABgHAEgFQAEgDASASQATASABAFIgLABQgGAAgHgCg");
	this.shape_381.setTransform(-43.1,-46.5,1.052,1.052);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#3140A2").s().p("AkyDWQgRg2gHguQgRhyArhVQAthYBqhBQBmg/BkgHQBFgFBDAiQBCAiAnA6QAoA8AFBMQAEBKghBBQgYAugtAjQgqAgg2ARQgtAPg9AIIhqAMQg7AGgtAMQg1APgsAYQgXg9gLgjg");
	this.shape_382.setTransform(-13.7,-67.9,1.052,1.052);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#772B11").s().p("AgWAAQAGgrAOgPQAIgJAJACQAKACAAANQAAAGgFALIgsBjQgBgvADgTg");
	this.shape_383.setTransform(26.7,35.1,1.052,1.052);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#772B11").s().p("AgVgCQAKgaAHgKQAHgKALgGQAOgIAJAEQANAFgFANQgEAJgLAIQgsAjgfAxg");
	this.shape_384.setTransform(19.4,34.1,1.052,1.052);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#772B11").s().p("AgCgVQAQgJARgDQAXgDgDAWQgCAMgRAGIgbAGQggAFgXATQANgiAjgVg");
	this.shape_385.setTransform(14.6,30.3,1.052,1.052);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#772B11").s().p("AgkgCQAEgVAJgTQALgXAPgLQARgLANAOQANANgLASQgDAGgRARQgqArgKA6QgFg3AGgdg");
	this.shape_386.setTransform(0.7,36.5,1.052,1.052);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#772B11").s().p("AgegXQAnguAtgHQAbgFAEATQAEARgUAQQgPANgYANIgqAVQg1AcgUAgQAVhAAiglg");
	this.shape_387.setTransform(-10.4,34.3,1.052,1.052);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#772B11").s().p("AgRgVQAtgXAxAEQAGABAEALQAFALgCAHQgFAKgOAEQgFACgTABQhNADg7AfQAagpAugVg");
	this.shape_388.setTransform(-15.8,28.5,1.052,1.052);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#3140A2").s().p("AhFCpQgQAAgIgFQgOgGACgNQAAgHAJgIQAOgPAcgNQgJg0gDgxQgEhCAPgmQAKgaAUgSQAVgTAYgDQAWgCAVAUQARARALAaQAdBDgYBnQgSBLgqAVQgTAKglABIgVABIgcgBg");
	this.shape_389.setTransform(27,13.2,1.052,1.052);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#3140A2").s().p("AgTC2QgkgBg0gMQgfgIgFgQQgFgPATgYQAignAqgcQgFhLAmhtQALghASgCQAggEAeAhQAYAaASAoQATArAGAYQALAlgGAfQgIAkgUAeQgVAggeAQQghASgtAAIgFAAg");
	this.shape_390.setTransform(3.2,14.5,1.052,1.052);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F6C310").s().p("AgagMQgJgwAKgeQAGgUAOgOQAOgQASgDQgFCaAKCFQgshKgOhSg");
	this.shape_391.setTransform(-47.5,-61.7,1.052,1.052);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgUgRQAFgIAMgGQALgHAIACQgCAiAHAoQgcgWgNghg");
	this.shape_392.setTransform(-38.7,-36,1.052,1.052);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgLgQIAXgIQABAcgYAVg");
	this.shape_393.setTransform(6.2,-46.6,1.052,1.052);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgRgdIAjAAIgJA8QgZgYgBgkg");
	this.shape_394.setTransform(-10.3,-40.9,1.052,1.052);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgQgVQAXgCAKgGQgBAcgVAfg");
	this.shape_395.setTransform(2,-44,1.052,1.052);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#DAD32B").s().p("AkcB+QAnggA3gRQArgOA/gHQBXgKAVgEQA9gKArgWQA1gZArgwQAtgzAOg2QAHA+gYA/QgXA8guAvQgtAsg9AbQg7AahAAGQgWACgWAAQhlAAhrgrg");
	this.shape_396.setTransform(-10.7,-51.1,1.052,1.052);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#D9E38C").s().p("AgZBDQgFgHABgLIAEgTQAMg2AcgzQABANAGAXQAGAYABAMQAHAtgXAXQgJAJgJABIgDABQgKAAgHgJg");
	this.shape_397.setTransform(-30.7,-93.7,1.052,1.052);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#D9E38C").s().p("AgdA6QgOgEgHgMQgHgNAGgNQASgkBYgnIgKA1QgHAfgQARQgKALgNAEQgIADgIAAQgGAAgGgCg");
	this.shape_398.setTransform(10.3,-94.3,1.052,1.052);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#D9E38C").s().p("AhSApQgIgDgCgKQgCgIAEgKIAKgZQAHgNAMgDQBMgPBPAIIhPAmIhNAlQgKAFgGAAIgEgBg");
	this.shape_399.setTransform(26.1,-70.1,1.052,1.052);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#182B89").s().p("AiyEnQg4goglhFQghg+gNhKQgOhOAEhQQAEhbAahFQAxgIAugDQgFB/A0CbQCRAyBVB5QBBgKAlgwQATgXAJgeQAJgegCgeQgCgbgOgoIgXhDQgQg3AHg7QAHg6AcgzQgJAvARA2QAMAlAfA7QApBNAIARQAZA2AEAsQAGA6gYA7QgXA4gtArQgoAmg6AYQgvAThDAMIg1ALQhbgOhAgug");
	this.shape_400.setTransform(25.5,-10,1.052,1.052);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#DAD32B").s().p("AAgE9QhFgHg6gdQg/gfgkg0Qgmg3gGhKQgFhDAWhFQASg7AnhCQAXgoA0hNIA4gKQgaBFgEBbQgEBQAOBPQANBJAhA+QAkBFA4AoQBAAuBbAOQhdAQhDAAQgaAAgWgDg");
	this.shape_401.setTransform(-2.2,-4.7,1.052,1.052);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#182B89").s().p("AB/BrQg8ghgzhgQg2A1gKBPQAFg4AHgbQANgxAXgbQhVAlgxBOQANgvAfgnQAfgnAsgWQgPgLgVAFQgMACgWALQg0AbgqAbQApgxAkgVQA/gmAjAUQAdARAaAxIATAnQALAWAKAPQAfArApAAQAHABAGAJQAFAJgDAGQgGAOgSAAQgMAAgPgJg");
	this.shape_402.setTransform(-36.4,-27.5,1.052,1.052);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#772B11").s().p("AhRA8QgTAAgPAIQAGgpgZgbIgZgSQAngtBCgaQAqgQAaAOQAOAHALASIARAgQApBQA/AzQhhgog3ARQgbAIgIARQgRgnglAAg");
	this.shape_403.setTransform(-38.4,-27.7,1.052,1.052);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#3140A2").s().p("Ag0CwQgRgCgJgFQgPgHgCgOQgBgOAPgRQAOgQARgEQADiTBIiBQArB1AZCDQAHAkgNAcQgQAhgfAKQgKADgWABQghAAgbgEg");
	this.shape_404.setTransform(-27.8,8.1,1.052,1.052);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#182B89").s().p("AgdBXQgZgfgMglQgSg3ATgtQALgYAVgQQAXgQAYAAQAKAAAaAHQAbA4gBBDQgCBAgbA7QgIASgKAEQghgUgZgfg");
	this.shape_405.setTransform(-29.6,7.2,1.052,1.052);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#772B11").s().p("ABAAUQhegehNARQALgDAYgJQAYgKAOgCQApgIAoAEIAgAFQAVAFAFALQAKAQgUAFQgHACgHAAQgIAAgJgDg");
	this.shape_406.setTransform(-41.4,20,1.052,1.052);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#772B11").s().p("AgSgPQASgCAmgBQAmgBATgDQAYgDADAVQACATgYAGQgHABgKAAIgRgCQhdgOheARQApgdA+gJg");
	this.shape_407.setTransform(-43.8,22.7,1.052,1.052);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#1C2C86").s().p("AAKACIgKAAIgSABIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAHgDANAAIAKACIAKADQAAAAAAABQABAAAAAAQAAAAAAAAQgBABAAAAIgBABg");
	this.shape_408.setTransform(13.1,-36.3,1.251,1.251);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#1C2C86").s().p("AgVADIABgBIAKgEIAKgCQAMAAAIAEQABAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgTgBIgJABIgKABIAAABIgCgCg");
	this.shape_409.setTransform(-15.2,-36.6,1.251,1.251);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#1C2C86").s().p("AgDAWQgDgKABgMQACgMAFgIQABAAAAAAQABgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAQgEAHgCALIgCAUIgBABg");
	this.shape_410.setTransform(-19.5,-22,1.251,1.251);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#1C2C86").s().p("AAEAWIgBgBIgDgUQgBgLgEgHQAAgBAAAAQgBgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAABQABAAAAAAQAFAIACAMQABAMgCAKg");
	this.shape_411.setTransform(18,-22,1.251,1.251);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#464DAC").s().p("AgBANQgGgBgDgGQgDgFABgFQABgFAFgDQAEgCAFACQAFABADAGQADAFgBAFQgBAFgEADIgGABIgDgBg");
	this.shape_412.setTransform(-6.4,-25.8,1.251,1.251);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#464DAC").s().p("AgBANQgGgCgDgFQgDgFABgFQABgFAFgDQAEgCAFACQAFABADAGQADAFgBAFQgBAFgFADIgFABIgDgBg");
	this.shape_413.setTransform(-10.9,-20.1,1.251,1.251);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#464DAC").s().p("AgBAOQgGgCgDgFQgEgGABgFQABgGAFgDQAFgCAFACQAFACAEAFQADAGgBAFQgBAGgFADIgGABIgDgBg");
	this.shape_414.setTransform(-12,-27.5,1.251,1.251);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#464DAC").s().p("AgGANQgFgDgBgFQgBgFADgFQADgGAGgBQAEgCAEACQAFADABAFQABAFgDAFQgDAGgFABIgEABIgFgBg");
	this.shape_415.setTransform(4.5,-26.9,1.251,1.251);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#464DAC").s().p("AgGAMQgFgCgBgFQgBgFADgFQADgFAGgCQAEgCAEACQAFADABAFQABAEgDAGQgDAFgFACIgDABQgDAAgDgCg");
	this.shape_416.setTransform(9.1,-21.2,1.251,1.251);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#464DAC").s().p("AgHAOQgFgDgBgGQgBgFAEgGQADgFAGgCQAEgCAFACQAFADABAGQABAFgDAGQgEAFgFACIgEABIgGgBg");
	this.shape_417.setTransform(10.2,-28.7,1.251,1.251);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#DFC598").s().p("AgNAdIgFgCIgDgEQgDgFAAgJIAAgJIABgFIABgCQAFgJAEgNIAGABQAJgBAJAGQAKAFAEAJQgCAJgGAJQgJALgEADQgHAHgHAAIgDgBg");
	this.shape_418.setTransform(-13.7,-1.2,1.251,1.251);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#ECD0A4").s().p("AgVAaQgGgDAAgGIACgGIAJgRIADgKIADgJQAGgCAGAAQAMACAKAKIAEADQgEAMgFAJIgCADQgIAJgJAEQgIADgGAAQgEAAgDgCg");
	this.shape_419.setTransform(-18.9,-3.2,1.251,1.251);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#ECD0A4").s().p("AgOAZQgMgCADgQQABgIACgDIAAgBQAGgJACgJQAUgFAQAQQABABgHALQgEAGgEAEQgFAGgFADQgHAFgFABg");
	this.shape_420.setTransform(-8.9,0.6,1.251,1.251);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#1C2C86").s().p("AgJArQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAMgogCglQAAgGAFgBQAGAAAAAGIAAABQAAAUgGAUQgEATgIAUIgBABIgBgBg");
	this.shape_421.setTransform(-14.2,-10.1,1.251,1.251);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#1C2C86").s().p("AgNAsIALgqIADgVIACgUQgBgGAGgBQAFAAABAGIAAAAQAAAGgDARQgCALgEAKQgGAWgIATQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_422.setTransform(-9,-8,1.251,1.251);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#3136BC").s().p("AA9CsIgngUIgEgDQgKgKgLgBQgHgBgHACQAEgQACgNIAAgDIgCgFQgKgVAIghIACgGQABgEgBgBIgKgBIgUgDQgagEgJgDQgUgGgMgKQgVgRABgcQABgYAPgbQAlhCAdgUQAZgRAXAJQAZAKAAAdQAAAfALAHQAIAFAgAKQAnARAIAdQANAvgHA6QgGAtgTA6IgGASQgQgQgVAEg");
	this.shape_423.setTransform(-18.1,-23.9,1.251,1.251);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#1C2C86").s().p("AAGArQgHgTgEgVQgFgRgBgXQAAgFAGgBQAFAAAAAGIAAAAQAAASACAVQAEAVAGARQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_424.setTransform(12.9,-10,1.251,1.251);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#1C2C86").s().p("AAKAtQgIgTgGgWIgGgVIgDgXQAAgGAGAAQAFAAABAGIAAABQgBAJACALIADAVIALAqQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBABIgCgCg");
	this.shape_425.setTransform(7.6,-8,1.251,1.251);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#DFC598").s().p("AgCAXQgFgDgJgLQgGgJgCgJQAFgJAJgFQAJgGAJABIAGgBQAEANAFAJIABACIABAFIAAAJQAAAKgDAEIgDAEIgEACIgDABQgIAAgGgHg");
	this.shape_426.setTransform(12.3,-1.2,1.251,1.251);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#3136BC").s().p("AhoCmQgTg6gFgtQgHg6ANgvQAIgdAngRQAUgIAUgHQALgHAAgfQAAgdAYgKQAYgJAZARQAdAVAlBBQAPAbABAYQABAcgVARQgMAKgUAGQgKADgZAEIgVADIgJABQgBABABAEIABAGQAJAhgLAVIgBAFIAAADQABANAEAQQgGgCgHABQgLABgKAKIgEADIgnAUQgKgCgKADQgKAEgHAHIgHgSg");
	this.shape_427.setTransform(16.8,-23.9,1.251,1.251);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#1E120D").p("AgSALQAFgJAJgEQAIgGAKABQAFAAABgB");
	this.shape_428.setTransform(11.6,-3.7,1.251,1.251);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#ECD0A4").s().p("AACAZQgKgEgHgJIgDgDQgFgJgEgMIAEgDQAKgKAMgCQAGgBAHADQAAAAACAJIADAKIAJARIACAGQAAAGgFADQgEACgEAAQgGAAgHgDg");
	this.shape_429.setTransform(17.5,-3.2,1.251,1.251);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#ECD0A4").s().p("AANAZQgFgBgIgFQgFgDgEgGIgJgKQgGgLABgBQAHgHAKgDQAJgDAJACQADAJAFAJIABABIACALQACAGgCAFQgCAGgGABg");
	this.shape_430.setTransform(7.6,0.7,1.251,1.251);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_431.setTransform(4.6,-102.5,1.251,1.251);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_432.setTransform(-8,-102.5,1.251,1.251);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#4F4F5E").s().p("AgHAJQgDgDAAgGQAAgEADgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAGgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_433.setTransform(-8,-101.8,1.251,1.251);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#4F4F5E").s().p("AgHAJQgDgEgBgFQABgEADgEQAEgEADAAQAFAAADAEQAEAEAAAEQAAAGgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_434.setTransform(4.6,-101.8,1.251,1.251);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#1C2C86").s().p("AAJAkQgJgEgKgJIgMgKQgWgSgIgaQgBgGACgBQACgCAFADIAOAIQAJAEAaAFQAYAFAKAHQALAIADAKQACAGgDAGQgDAHgIAFIgIAEIgJACQgHAAgIgEg");
	this.shape_435.setTransform(-19.1,-114.3,1.251,1.251);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#1457CB").s().p("AAJA9QgJgGgVgSIgRgRQgfgggJgrQgCgIAEgDQAEgCAHAGIAVAOQAOAIAoALQAkAKAQAOQAOALADAOQADAPgLAOQgMAPgRADIgIAAQgMAAgNgGg");
	this.shape_436.setTransform(-21.3,-116.3,1.251,1.251);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#1C2C86").s().p("AgWAvIgJgDQgNgHgDgNQgBgJALgNQAJgJAWgJQAZgKAHgGIAMgLQAEgDADAAQADACgBAFQgDAbgQAXIgKAMQgNAOgFADQgIAHgKAAIgEAAg");
	this.shape_437.setTransform(15.3,-115.2,1.251,1.251);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#1457CB").s().p("AgbBOQgKAAgFgCQgTgJgFgMIgCgKQgCgSAMgRQANgQAhgRIAZgNQAOgIAKgJIARgSQAGgHAEABQAFACAAAJQgBArgXAmIgNAUQgOAUgLAJQgQAOgRAAIgBAAg");
	this.shape_438.setTransform(17,-117.7,1.251,1.251);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DFC598").s().p("AgbAMIgEgZQAUgLAVgDIAIALQAGAJAIANQgZADgdATg");
	this.shape_439.setTransform(-11.8,-126.2,1.251,1.251);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#B01016").s().p("AgkgHQAegTAZgDQAKATAIATQgOAAgOAFQgOAGgQAJQgJgTgGgRg");
	this.shape_440.setTransform(-10.1,-121.7,1.251,1.251);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#B01016").s().p("AgEgRQAHAAAJALIAJAKQgVADgUAMQgFglAVABg");
	this.shape_441.setTransform(-13.2,-130.2,1.251,1.251);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#DFC598").s().p("AgPATQgHgEgIgPIgCgDQAQgJAPgGQAOgFANAAIAFAPQAGAQgTALQgKAFgIAAQgHAAgIgFg");
	this.shape_442.setTransform(-8.8,-117.6,1.251,1.251);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#DFC598").s().p("AgfAGQAIgOAGgJIAIgKQAVADAUALIgJApQgbgTgbgDg");
	this.shape_443.setTransform(7.5,-126.9,1.251,1.251);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#B01016").s().p("AgIAPQgMgFgPgBQAGgSALgUQAaADAcAUQgEAQgKAUQgUgMgKgDg");
	this.shape_444.setTransform(5.9,-122.4,1.251,1.251);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#B01016").s().p("AgVAEIAKgKQAIgLAIAAQAUgBgEAlQgUgMgWgDg");
	this.shape_445.setTransform(9,-130.9,1.251,1.251);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#DFC598").s().p("AgRATQgTgLAGgQIAFgPQAPABAMAFQALADAUALIgCADQgGAOgJAFQgHAFgJAAQgHAAgKgFg");
	this.shape_446.setTransform(4.5,-118.3,1.251,1.251);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgMAIgIQAHgJAKAAQALAAAHAJQAIAIAAAMQAAANgIAIQgHAJgLAAQgKAAgHgJg");
	this.shape_447.setTransform(-9,-102.5,1.251,1.251);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgMAIgIQAHgJAKAAQALAAAHAJQAIAIAAAMQAAANgIAIQgHAJgLAAQgKAAgHgJg");
	this.shape_448.setTransform(5.8,-102.5,1.251,1.251);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1C2C86").s().p("AgUASQgEgBABgFQADgMAKgIQAKgJANgBIABAAQAJgBABAJQABAEgCADQgDADgEAAIgCAAQgIAAgHADQgJAFgDAIQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgDgBg");
	this.shape_449.setTransform(-10.5,-107.8,1.251,1.251);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#1C2C86").s().p("AAOAQQgDgIgJgFQgHgDgIAAQgEAAgDgBQgDgDAAgEQgBgEADgDQACgDAEAAIADAAQANABAKAJQAKAIADAMQABAFgFACIgBAAQgDAAgCgDg");
	this.shape_450.setTransform(7.5,-107.8,1.251,1.251);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#1C2C86").s().p("AgLAWQgIgFgDgLQgDgLAFgJQAGgLAMAAQAOAAAIANQACADACAGQABAJgDAIQgEAIgKADIgIABQgFAAgGgEg");
	this.shape_451.setTransform(-10.2,-83.1,1.251,1.251);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#1457CB").s().p("AgXAuQgRgLgGgXQgHgXALgUQAMgVAYAAQANgBANAIQANAHAHAMQAGAIACAMQAEASgIAQQgIASgTAFQgHACgIAAQgNAAgMgHg");
	this.shape_452.setTransform(-10.2,-83,1.251,1.251);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#1C2C86").s().p("AgHAZQgKgDgEgIQgDgIACgJQAAgEAEgFQAHgNAPAAQALAAAGALQAFAJgDALQgDALgIAFQgGAEgGAAIgHgBg");
	this.shape_453.setTransform(8.2,-83.1,1.251,1.251);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#1457CB").s().p("AgQAzQgTgFgJgSQgHgQADgSQACgKAGgKQAIgMANgHQAMgIANABQAZAAAMAVQALAUgHAXQgGAXgSALQgLAHgNAAQgHAAgIgCg");
	this.shape_454.setTransform(8.2,-83,1.251,1.251);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#5072BC").s().p("AhFDFQgPgDgMgHQgIgGgHgIQgRgXACgiQACgZAPghQAIgPACgGQADgKgIgLQgVgcgFgfQgGghALgeQAfhZBegCQBfACAfBZQALAegGAhQgFAfgVAcQgGAJgBAGQAAAGAFAJQAMAUAGAXQAJAggEAUQgDAPgJAMQgIAKgIAGQgXAPgfgGQgGgBgPgIQgOgHgJAAQgJABgMAHQgOAJgGABQgIADgJAAIgLgBg");
	this.shape_455.setTransform(-1.5,-94.4,1.251,1.251);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#DFC598").s().p("AAHAkQgKgFgIgiIgGghQAeANAFgBQABAsgGANQgCAEgCAAIgCgBg");
	this.shape_456.setTransform(-10,-68.1,1.251,1.251);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#DFC598").s().p("AgMAhQgGgNABgsIAGgBQALgDASgIIgGAhQgIAigKAFIgCABQgCAAgCgEg");
	this.shape_457.setTransform(7.9,-68.1,1.251,1.251);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#464DAC").s().p("AgJAiQgtgDgggZQgTgOgHgUQAGAIAIAGQAMAHAPADQAPACANgEQAGgBAPgJQAMgHAJgBQAJAAANAHQAQAIAGABQAfAGAXgPQAHgGAJgKQgLAgggARQggASgmAAIgJAAg");
	this.shape_458.setTransform(-1.3,-69.1,1.251,1.251);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#DFC598").s().p("AgUANQgLgPAGgMQAFgKAVgCQAVgCAFALQADAFgDAJQgFAMgIAJQgGAHgGABIgDABQgLAAgIgOg");
	this.shape_459.setTransform(-57.6,-34.3,1.251,1.251);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#DFC598").s().p("AgRATQgPgPAEgMQAEgMAWgHQAVgHAIAKQAEAFgCAKQgCAOgHAMQgFAIgFADQgEACgEAAQgIAAgLgLg");
	this.shape_460.setTransform(-53.6,-22.3,1.251,1.251);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#DFC598").s().p("AgTASQgOgRAFgMQAFgLAWgFQAWgFAHAKQADAFgCALQgCALgJANQgFAIgGADIgHABQgJAAgKgMg");
	this.shape_461.setTransform(-47,-12.6,1.251,1.251);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#2A7FD4").s().p("AijAsIAohnQB7AnB/gfIAlBjQhOAMhNAAQhWAAhWgQg");
	this.shape_462.setTransform(-0.7,-14.9,1.251,1.251);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#2A7FD4").s().p("AirgDQgJgRgIgZQBgAeB6gGQBFgDBbgRQgIAUgIAPQhSAzhdABQhbgBhPgwg");
	this.shape_463.setTransform(-0.8,36.7,1.251,1.251);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#184FC5").s().p("AjBAlQAKgqATg2QCjAfCkgcQAUA1AMAxQhWAOhWAAQhsAAhsgXg");
	this.shape_464.setTransform(-0.6,-1.9,1.251,1.251);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#2A7FD4").s().p("AjPAzQgBgmAGgmQAEgWAFgWQDBApDDggQADAKAEAZQAHAkgBArQhjAQhjAAQhsAAhtgTg");
	this.shape_465.setTransform(-0.7,11.6,1.251,1.251);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#184FC5").s().p("Ai9AnQgRgugBg5QDPAmDQgiQgCA4gRAvQhaARhFAEIgnABQhjAAhRgag");
	this.shape_466.setTransform(-0.8,26,1.251,1.251);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#184FC5").s().p("Ah9AjIAWg9IAJgeQBdAZBegTIAIAYQAJAcAQApQg4AOg3AAQhGAAhGgWg");
	this.shape_467.setTransform(-0.5,-26.9,1.251,1.251);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#2A7FD4").s().p("AgyAhIgBAAQAAgtgCgXIATAEQArAFAsgJQgBAgAAAgQgfAHgeAAQgUAAgVgDg");
	this.shape_468.setTransform(-0.8,-72.8,1.251,1.251);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#184FC5").s().p("AgiAgIgSgDIgCgcIAAgBQAGgPAPgJQAOgJASAAQARAAAOAIQAQAIAHAQIACAHIgBAWQgdAGgbAAQgQAAgQgCg");
	this.shape_469.setTransform(-0.8,-80.9,1.251,1.251);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#2A7FD4").s().p("Ag9AeQAFglACgeQAtAUBAgQIAHBCQgcAFgcAAQgiAAghgIg");
	this.shape_470.setTransform(-0.7,-55.9,1.251,1.251);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#184FC5").s().p("Ag2AdQADgfAAggIABAAQAzAIAzgNIADBIQgdAHgZAAQgeAAgZgLg");
	this.shape_471.setTransform(-0.8,-64.3,1.251,1.251);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#184FC5").s().p("AhKAeQAHgfAGgnQA8APA/gMQAGAmAHAfQgjAJgjAAQgnAAgogLg");
	this.shape_472.setTransform(-0.7,-47,1.251,1.251);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#2A7FD4").s().p("AhdAeQAJgfAKgqQBKAWBKgUQAKArAKAiQgpAIgpAAQg0AAg1gOg");
	this.shape_473.setTransform(-0.7,-37.8,1.251,1.251);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#1C2C86").s().p("AgMBKQgGgBgEgGQgDgGgBgFIABgVQADgVAGgRQANgnAZgfQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQgXAfgKAnQgGASgDASQgCANABAGQACAKAFADQABAAABABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_474.setTransform(30.9,33.1,1.251,1.251);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#464DAC").s().p("AAAALQgDAAgDgDQgDgDABgFQAAgEADgDQADgDADAAQAJABAAAKQgBAEgDADQgDADgDAAIAAAAg");
	this.shape_475.setTransform(57.6,5.3,1.251,1.251);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#464DAC").s().p("AAAALQgEgBgDgDQgDgFAAgDQAAgFADgCQAEgEADACQAFAAADAEQAEAEgBAEQAAAFgDADQgCACgEAAIgCgBg");
	this.shape_476.setTransform(44.5,-1.7,1.251,1.251);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#464DAC").s().p("AgHAKQgDgEAAgGQAAgEADgEQADgFAEAAQAFAAADAFQADAEAAAEQAAAGgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_477.setTransform(52.9,14.4,1.251,1.251);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#464DAC").s().p("AABANQgEgBgEgEQgEgEAAgFQgBgFAEgDQADgDAFABQAEAAAEAEQAEAEAAAFQABAFgEADQgDADgEAAIgBAAg");
	this.shape_478.setTransform(40.6,4.5,1.251,1.251);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#464DAC").s().p("AAAANQgDgBgFgEQgDgEAAgFQgBgFAEgDQAEgDAEABQAFAAADAEQAEAEABAFQAAAFgEADQgDADgEAAIgCAAg");
	this.shape_479.setTransform(44.9,10,1.251,1.251);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#464DAC").s().p("AgHALQgFgEgBgGQgCgFADgEQAEgFAGAAQAEgBAGAEQAFAEACAGQABAFgDAEQgEAFgGAAIgBAAQgEAAgFgDg");
	this.shape_480.setTransform(51.5,-2.9,1.251,1.251);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#464DAC").ss(1.2,1).p("AgEgBQADADAGAAQAGAAADgDQACgEAAgGIAAgFQgCgHgIgDQgGgCgHACQgIADgEAIQgEAIAAAIQAAANALAJQAMAIAMgEQAFgCADgFQAEgEAAgF");
	this.shape_481.setTransform(51.5,4.7,1.251,1.251);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#DFC598").s().p("AgCAhIgXgHIgVgGQgCgYASgQQATgRAZAFQAVAMAIARQAEAIAAAHIABADQgCAEgMAIIgMAGIgLABQgGAAgHgBg");
	this.shape_482.setTransform(61,42,1.251,1.251);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#D0B077").s().p("AALAlQgPgCgMgGQAAgGgEgJQgIgRgVgLIAEABQALgSAVgGQBXAjghAhQgGAHgPAAIgJgBg");
	this.shape_483.setTransform(69,39.8,1.251,1.251);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#5072BC").s().p("AgyDLQgcgDgWgMQgMgHgFgBIgTABQgdACgPgaQgLgVAAgfQADhLAThFQARg/AcggQAPgQATgOQA1gmA0gCQAegBAbALQAcAMASAVQAmAvgMBkQgJBJgaAqQArAKAoAQQgVAGgLASQgNgEgNACQgOADgKAJQgRAQABAZQgUgDgaABIguADIgdACIgXgCg");
	this.shape_484.setTransform(43.3,19.1,1.251,1.251);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#C19C56").s().p("AAjAiIgtgEQgagCgSgJIgCgBQAHgNAKgMQAPgSATgHIAEgBIAKADQAeAMANAVQAFAJgBAIQgBAKgJAEIgEAAIgHAAg");
	this.shape_485.setTransform(70.8,38.3,1.251,1.251);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#464DAC").s().p("AggAFQgPgOgFgRQABADA8gFQAYAAAUAFIgEABQgTAIgPARQgKAMgFAOQgSgJgOgPg");
	this.shape_486.setTransform(63.8,36.9,1.251,1.251);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#1C2C86").s().p("AAJBIQgBgBAAAAQAAgBABgBQAAAAAAAAQABgBABAAQAGgDABgKQABgGgCgNQgEgXgFgNQgKglgXghQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABABQAAAAABAAQAZAfANAnQAGARADAVIABAVQgBAFgDAGQgEAGgGABIgBABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_487.setTransform(-31.7,33.1,1.251,1.251);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#464DAC").s().p("AgGAIQgCgDgBgEQAAgKAJgBQADAAADADQADADAAAEQABAFgDADQgDADgEAAIAAAAQgDAAgDgDg");
	this.shape_488.setTransform(-58.4,5.3,1.251,1.251);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#464DAC").s().p("AgHAKQgEgDABgFQgBgEAEgEQADgEAEAAQAEgCAEAEQAEACgBAFQABAEgEAEQgDADgFABIgBABQgDAAgDgCg");
	this.shape_489.setTransform(-45.4,-1.7,1.251,1.251);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#464DAC").s().p("AgHAKQgDgEAAgGQAAgEADgEQADgFAEAAQAFAAADAFQADAEAAAEQAAAGgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_490.setTransform(-53.7,14.4,1.251,1.251);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#464DAC").s().p("AgIAKQgEgDABgFQAAgFADgEQAEgEAEAAQAFgBAEADQADADAAAFQAAAFgDAEQgEAEgFABIgBAAQgEAAgDgDg");
	this.shape_491.setTransform(-41.4,4.5,1.251,1.251);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#464DAC").s().p("AgIAKQgEgDABgFQAAgFAEgEQAEgEAEAAQAFgBADADQAEADgBAFQAAAFgEAEQgDAEgFABIgBAAQgEAAgDgDg");
	this.shape_492.setTransform(-45.7,10,1.251,1.251);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#464DAC").s().p("AgCAOQgGAAgEgFQgDgEABgFQACgGAFgEQAFgEAFABQAGAAAEAFQADAEgCAFQgBAGgFAEQgFADgEAAIgBAAg");
	this.shape_493.setTransform(-52.3,-2.9,1.251,1.251);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#464DAC").ss(1.2,1).p("AAFgBQgEADgFAAQgGAAgDgDQgCgEAAgGIAAgFQACgHAIgDQAFgCAHACQAIADAFAIQAEAIAAAIQgBANgLAJQgLAIgMgEQgFgCgDgFQgEgEAAgF");
	this.shape_494.setTransform(-52.3,4.7,1.251,1.251);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#DFC598").s().p("AgUAhIgNgGQgLgIgDgEIABgDQAAgHAEgIQAIgRAWgMQAYgFAUARQARARgBAXIgVAGIgYAHQgGABgHAAIgKgBg");
	this.shape_495.setTransform(-61.8,42,1.251,1.251);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#D0B077").s().p("AgoAfQghghBWgjQAVAGAMASIAEgBQgVALgIARQgEAJAAAGQgMAGgPACIgJABQgOAAgHgHg");
	this.shape_496.setTransform(-69.8,39.8,1.251,1.251);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#5072BC").s().p("AgBDLIgugDQgagBgUADQABgYgRgRQgKgJgNgDQgOgCgNAEQgMgSgUgGQAmgPAtgLQgagqgJhJQgMhkAmgvQASgVAcgMQAbgLAdABQA2ACAzAmQAUANAPARQAcAgARA/QATBFADBLQAAAfgLAVQgPAagegCIgSgBQgFABgMAHQgWAMgdADIgXACIgcgCg");
	this.shape_497.setTransform(-44.1,19.1,1.251,1.251);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#C19C56").s().p("AgtAiQgJgDgBgLQgBgIAFgJQANgVAegMIAKgDIAEABQATAHAPASQAKAMAHANIgCABQgSAJgaACIgtAEIgHAAIgEAAg");
	this.shape_498.setTransform(-71.6,38.3,1.251,1.251);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#464DAC").s().p("AgOADQgPgRgTgIIgEgBQAUgFAYAAQA8AFABgDQgKAhgqAWQgFgOgKgMg");
	this.shape_499.setTransform(-64.7,36.9,1.251,1.251);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#3251AC").s().p("AhjFfQg8h7BKihQAYg0A0hSQA7hiAQgeIAXgqQANgZAFgTQAEgUACgcIADgxIABgsQAAgcAGgQQARDOhADGQgQA0goBkQggBbgLBAQgJA6AGA4QAIA8AYAwQhHgugihGg");
	this.shape_500.setTransform(-23.1,-22.4,1.251,1.251);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#3251AC").s().p("AAaFkQAHg3gKg5QgKhBghhbQgnhjgRg0Qg/jFAQjLQAFARACAZIABApIADAyQACAbAEAVQAFASANAZIAXArQAQAeA7BiQA0BRAYA1QBKChg8B6QgiBGhHAsQAYgvAHg8g");
	this.shape_501.setTransform(21.6,-22.2,1.251,1.251);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#5072BC").s().p("AC8DyQgEgBgCgEQhMh9gTiSQgKAggGANQgRAlgNAXIgSAdIgTAcQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgDgCACgDIARgdIAPgdQAMgXAOgmQAKgbAHgjIAEgWIgRAVQgYAcgaAXQgcAZgaASQgWAQgmAVQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAAAAQAigVAXgTQAWgRAcgcQAYgYAVgcIAUgcIgoANQgnALgiAGIgmAGIglAEQgfADgtgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAqgBAggFIAlgFIAlgIQAlgJAhgMIAlgPQiAgihshSQgBgBAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQABgBAAAAQABgBAAAAQABAAABAAQAAABABAAQB8BTCRAYIAAAAIADABIABAAIABAAIAAAAIAAABIABAAIADADIAAABIABAAIABACIAAADIAAABQAABbAZBYQAYBZAuBOQADAEgBAFQgBAEgEACQgDACgDAAIgDAAg");
	this.shape_502.setTransform(-38,-76.1,1.251,1.251);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#1417CA").s().p("ABpCgQgygdgygCQgMgkgwgNIgtgHQACg6gwgpIgwgfQAmgpgFhIIgMg/QB7BXCTAcQABBdAZBaQAZBaAvBQQgwgygqgZg");
	this.shape_503.setTransform(-38.5,-76.6,1.251,1.251);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#5072BC").s().p("AjEDwQgEgCgBgEQgBgFACgEQAvhOAYhZQAZhYgBhbIAAgBIABgBIAAgCIABgCIAAgBIABgBIABgBIABgBIABgBIABAAIABgBIAEAAIAAAAQCSgYB7hTQADgCACADQABACgCADQhrBRiCAjIAmAOQAiANAkAIIAkAIIAlAGQAdAEAuABQABAAAAAAQABAAAAABQABAAAAABQAAABAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgzABgZgCIgmgEIglgGQgpgIgggKIgpgNIAVAdQAWAdAXAXQAYAYAaAVQASAPAnAZQACACgBADQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgigUgagRQgbgTgbgYQgbgZgWgaIgRgWIADAXQAHAfALAfQANAlAMAYIAgA5IABAAQABAEgDABQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgTgbIgSgdQgOgXgQgmQgKgWgHgWQgTCShLB8QgEAGgFAAQgCAAgEgCg");
	this.shape_504.setTransform(35.9,-75.8,1.251,1.251);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#1417CA").s().p("Ah5BBQAYhaAAhdQCUgcB7hXIgMA/QgFBIAmApQgYAKgYAVQgwApACA7QgVgBgYAHQgvAOgNAjQgyACgyAdQgqAZgwAyQAwhQAZhag");
	this.shape_505.setTransform(36.4,-76.3,1.251,1.251);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#DFC598").s().p("AgIAeQgVgKgBgQQgBgMAVgPQAUgQALAIQAGADACAMQADAQgCANQgCALgEAFQgGAGgJAAQgIAAgJgFg");
	this.shape_506.setTransform(-36.7,-4.7,1.251,1.251);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#464DAC").s().p("ACmFcQgXgBgYgGQgmgLgxgaQiehZhmioQhriwAPivQACgUAFgJQAFgHAGgEQAIgEAHABQAKACAHAKQAIALAEAQIAFAeQAPBTA1BIQA1BJBLAmQApATB9AUQBrARAyAtQAtApAKA9QAKBAgkAsQgXAagjANQgdAKgfAAIgLAAg");
	this.shape_507.setTransform(-25,-2.1,1.251,1.251);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#1B267A").s().p("AgTBHQgFgDgBgGIAAgCQAAgRADgTQACgRAFgRQAFgQAIgQQAHgPAMgOQAEgEADAEQAEACgDAEQgJAPgFAOQgFAPgDAQQgCAQAAAPQAAAPACAQQABAGgDAFQgDAFgGABIgDAAQgEAAgEgDg");
	this.shape_508.setTransform(-60.4,-54.4,1.251,1.251);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#344399").s().p("AgRBhIgHgCQgYgLgMgUQgNgXAKgeQAHgYAUgWQATgVAWgPIAWgRQAXgPAKADQAKADgCANIgIATIgHAYQgDAOACAUIAGAhQAHAngSAUQgMAMgSADIgMABQgKAAgMgEg");
	this.shape_509.setTransform(-60.7,-56,1.251,1.251);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#F8B019").s().p("AAjAiQgZgrg+gZQA0gGAqAnIALAFQgBAOgOASg");
	this.shape_510.setTransform(-11.6,-121.9,1.023,1.023);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#1F4166").s().p("AgRAAQAQgEASgEQAAAHgFAFQgGAEgHAAQgKAAgGgIg");
	this.shape_511.setTransform(-39.4,-119.7,1.023,1.023);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#F5AE97").s().p("AgsAHQAlgMA0gIQgTATgNAFQgGADgJAAQgRAAgZgHg");
	this.shape_512.setTransform(-38.2,-119.9,1.023,1.023);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#1F4166").s().p("AgTAQQgSgDgQgGQANgFAZgFQAigJAjgEQgVAYgRAHQgGACgKAAQgIAAgLgBg");
	this.shape_513.setTransform(-38.1,-119.7,1.023,1.023);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#1F4166").s().p("AgeAFQAdgJAggEQgNAMgJAEQgEABgGAAQgLAAgSgEg");
	this.shape_514.setTransform(-58.9,-116.4,1.023,1.023);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIgvAyg");
	this.shape_515.setTransform(-16.4,-135.8,1.023,1.023);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#1F38A8").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQADgOAIgPQAVANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAJgJABgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_516.setTransform(-45.1,-116.5,1.023,1.023);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#424EBD").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQALgwAxgiQBCAIBlgTQBUgQB8gnIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_517.setTransform(-45.1,-116.5,1.023,1.023);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FBC156").s().p("AiEATQgIgKgIgHQAYgDA7gPQA2gNAdgEQBfgMAkA9IjwATIgFABQgVAAgPgRg");
	this.shape_518.setTransform(-45.4,-109,1.023,1.023);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#424EBD").s().p("AEFKpQAuhpASiHQAfjihCjgQhFjuiki3Qh8iLiPhJQE+Gkg2JPQAHiegljQQhImejZj6QA+CJAjC6QAvD3guClQAQiegnjGQgfibg5iUQAYBvgPCDQgOB+gnA+QgagKgTAAQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgCgUgIgfg");
	this.shape_519.setTransform(27.5,-47.5,1.023,1.023);

	this.instance_6 = new lib.Path_1_0_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(27.3,-30,1.023,1.023,0,0,0,36.6,56);
	this.instance_6.alpha = 0.5;

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#1F196E").s().p("ADoJJQg8iehng3QgViAguhCQgxhFhyg2QgQhYhChDQg+g/g+gCQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_520.setTransform(27.5,-47.5,1.023,1.023);

	this.instance_7 = new lib.Path_16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-25.9,-15,1.023,1.023,0,0,0,8.3,33.4);
	this.instance_7.alpha = 0.27;

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#1B57B3").s().p("AAaDeQAfhJgKg3QgsghAYg2QARgiAJgWQARglAFgkQAHhMgUg5QgYhFg6gMQgjgHgkAkQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA5gIBMQgEAkgRAlIgaA4QgYA1AsAiQAKA3ghBOQgoBegEAwIgNADQAFgnAnheg");
	this.shape_521.setTransform(-19.3,-18.3,1.023,1.023);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#424EBD").s().p("AgWDbQgFhHgggqQgshcgMhTQgMhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3ghBOQgpBfgEAvIg3APQAOhXgDg3g");
	this.shape_522.setTransform(-22.2,-17.7,1.023,1.023);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#424EBD").s().p("AAuAhIhpAAIgGgCQgDgOgJgOIADAAICYgjQACAbgKATQgKATgMAAIgCAAg");
	this.shape_523.setTransform(-27.9,21,1.023,1.023);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F8B019").s().p("AgRgEQATgIAkgDQAJAOAEANIgZgGQgigDgqANQASgPAPgFg");
	this.shape_524.setTransform(-39.8,22.9,1.023,1.023);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#2347BA").s().p("AgVACIAqgDIgFABQgEACgGAAg");
	this.shape_525.setTransform(24.6,23.8,1.023,1.023);

	this.instance_8 = new lib.Path_1_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(18,-9.6,1.023,1.023,0,0,0,12.6,32.6);
	this.instance_8.alpha = 0.27;

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#424EBD").s().p("AiwFHQAAgKgCgNQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQALgIgBgOQgBgNgNgGIhNgdQgfgNgTgbQgSgcAAghIADjvQAAg9ArgsQAsgrA+AAQA7AAAsAqQArArABA9IAAAFIgvDiQgBAKAFAHIBjCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_526.setTransform(23.7,-9.5,1.023,1.023);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F8B019").s().p("AAugTIAPgDQAKANACAdIgFAAQgdgMgnACQgiABgmAMQAvguBHAEg");
	this.shape_527.setTransform(0.3,22,1.023,1.023);

	this.instance_9 = new lib.Group_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.7,-63,1.023,1.023,0,0,0,53.3,74.4);
	this.instance_9.alpha = 0.398;

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FBC156").s().p("AAALgQg7AEgsgSQgvgSgshTQgzhhgegaQgQgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAXhKARhuQgBhzAUiqQAajDALhiIAUAAQAABRgPDdQgMC6AFA1QAGA9ClCuQBkBpAUAXQA7BDAMAhQAPAoA2ArQAxAoAiAIQAzALBCABQBeABAvgbQBFgmAhgkQAwg1AJhLQAJhHgtiZQgehngghLQg6hpguhZQhbiugKhKQgLhQAVg+QAKgeAnhFQASggAxgrQhLBMgbBZQgiBwA0BxQAeBBBHB3QBYCTAcAzQCFD4gUCqQgIBEgsBBQguBDhIAuQhxBHiDAAQhCAAhFgSg");
	this.shape_528.setTransform(14.6,-63.8,1.023,1.023);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#1B57B3").s().p("AFFGFQAAiRhGhvQhEhuhngYQgXgFgmgXIhHgtQhjg8hGACIgVADQg8icAMjIIgBgxQgBgfADgUIg2AAIABgUIBGAAQgDATAAAgQACAlgCAMQgKDJA7CbIAVgDQBGgCBjA8IBIAtQAmAXAWAFQBoAYBEBuQBEBvAACRQAACCg4BpIgIACQAxhjAAh2g");
	this.shape_529.setTransform(3.2,-54.3,1.023,1.023);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#424EBD").s().p("AhZAEQAdjZANhuIBEAAQgDATABAgQABAlgBANQgND8BiC2IjNBvQgJiCAVi9g");
	this.shape_530.setTransform(-26.5,-83.2,1.023,1.023);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#424EBD").s().p("AkTMFQAphHBbiLIBSh8QAsALAtgcQA1ggAVhEQA4i2jLlCQiVjqBtjKQAohKBBgzQA7gsArgDQhnA4g8BsQhUCTBGCZQAdBABGB3QBZCTAcA0QCFD4gVCpQgHBFgtBBQgtBChJAuQhwBIiDAAQhBAAhGgSg");
	this.shape_531.setTransform(42.8,-67.6,1.023,1.023);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#424EBD").s().p("AA5GPQgvgSgrhTQgzhigegaQgQgNgTgJIgngRQg5gXgfgSQgwgbglgnQgTgUgGgbQgHgbAJgbQAXhHAPhhIAXirIBJBBQArghA4gCQBGgDBiA8IBJAtQAmAXAWAFQBnAaBEBtQBFBvAACQQAACCg4BpQhgAdguAHQgbAEgZAAQguAAglgOg");
	this.shape_532.setTransform(-1.9,-30.7,1.023,1.023);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#1F4166").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAjgRAnQgJAVgRAiQgYA2AsAhQALA3giBOQgpBfgEAvIg2APQANhYgDg2g");
	this.shape_533.setTransform(-26.5,-17.7,1.023,1.023);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#1F4166").s().p("AhZAMQAVgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgrANQASgQAPgGg");
	this.shape_534.setTransform(-36.7,21.1,1.023,1.023);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#1F4166").s().p("AgzAFIDeg1IAABdIjIAAQgegLgnABQgiACgmAMQAugwBJAEg");
	this.shape_535.setTransform(3.9,19.4,1.023,1.023);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#1F4166").s().p("Ai1FHIC2h3Ii5hJIADk5QAAg9AsgsQAsgrA9AAQA8AAAsArQAsAsgBA9IgwDuIB3C6IiqBRg");
	this.shape_536.setTransform(19.8,-9.5,1.023,1.023);

	this.instance_10 = new lib.Path_13_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.5,-52.6,1.362,1.362,0,0,0,3.8,8.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#EEDCC4").s().p("AAiBSIgIgEIgJgHIgLgJIgFgFIgJgNIgNgVIgIgPIgJgeQgBgHgBgHIAAgMIACgRQADgKAJgFQAJgFAKACQAOAEAEAQIAAAHIAAAEIAHA9IACAOQABAHACAHIADANIAEALIALAYg");
	this.shape_537.setTransform(38,-52.4,1.362,1.362);

	this.instance_11 = new lib.Path_2_5_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(29.2,-50.3,1.362,1.362,0,0,0,2.4,8.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#EEDCC4").s().p("AAXBUIgHgGIgQgTIgNgcIgKgfIgGglIADgZIAEgLQAFgJAJgEQAJgEAKAFQAPAGgBAQIAAAOIgBAEIgCA2IABAqIABAMIABAKIACAIIADAHg");
	this.shape_538.setTransform(28.4,-50.3,1.362,1.362);

	this.instance_12 = new lib.Path_4_0_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(20.9,-49.6,1.362,1.362,0,0,0,3,8.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#EEDCC4").s().p("AgOBUIgFgIIgKgXIgDgPIgDgZIAAgIIABgQIAEgYIAIgVIAIgPIAHgJQAHgIAJAAQALAAAHAHQAMALgFAPIgkBeIgFAYIgCAag");
	this.shape_539.setTransform(20,-49.4,1.362,1.362);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#275399").s().p("AABBBIhSgWQgHgCgBgHQgBgIAHgDQA5gdA9g6IA4A1QggAPgNAOIgiArQgEAEgEAAIgDAAg");
	this.shape_540.setTransform(30.8,-88.5,1.362,1.362);

	this.instance_13 = new lib.Path_7_0_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(29.1,-69.4,1.362,1.362,0,0,0,6.4,10);
	this.instance_13.alpha = 0.559;

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#3765ED").s().p("Ag0AEQABg6gOg1IBIARQAgAiAPAxQAOAsgDAtIh8AaIAHhog");
	this.shape_541.setTransform(28.7,-70.3,1.362,1.362);

	this.instance_14 = new lib.Path_9_0_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(21,-101.1,1.362,1.362,0,0,0,9.5,9.5);
	this.instance_14.alpha = 0.559;

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#3F4EF3").s().p("AhOAGQgVgEgIgTQgEgLADgMQACgMAJgIIAdgZQAQgMASAEQATADALARQAYA1BaBAIhBAzQg+hOg9gLg");
	this.shape_542.setTransform(23.3,-101.1,1.362,1.362);

	this.instance_15 = new lib.Path_12_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(41.9,31.3,1.362,1.362,0,0,0,1.9,6.7);

	this.instance_16 = new lib.Path_1_4_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(34.9,32.5,1.362,1.362,0,0,0,1.2,7);

	this.instance_17 = new lib.Path_2_4_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(27.3,32.5,1.362,1.362,0,0,0,2.8,6.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#EEDCC4").s().p("AAXBAIgGgDIgHgGIgIgHIgJgPIgDgGIgGgLIgFgMIgDgMIgCgGIgBgQIACgRIABgFQADgIAHgDQAHgEAHADQALAEACAMIAAAjIACAgQAAAFACAFIABAKIAHAXIADAFg");
	this.shape_543.setTransform(40.6,31.4,1.362,1.362);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#EEDCC4").s().p("AALBBIgEgFIgGgHIgJgTIgHgRIgCgHIgCgLIgCgNIAAgRIACgKIACgJIADgIQAEgHAIgCQAHgCAGAEQALAFAAANIgCAIIAAACIgGA4IAAAmIACAMg");
	this.shape_544.setTransform(33.5,32.5,1.362,1.362);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#EEDCC4").s().p("AgRBAIgDgHIgDgIIgDgKIgCgLIgBgUIACgSIAFgSIACgGIAFgKIAHgLIAGgGQAFgGAIAAQAIABAFAFQAJAKgFALIgEAHIgdA+IgHAbIgBAMg");
	this.shape_545.setTransform(27,32.5,1.362,1.362);

	this.instance_18 = new lib.Path_11_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(8.7,-36.1,1.362,1.362,0,0,0,9.3,13.6);
	this.instance_18.alpha = 0.559;

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#3783EE").s().p("AgGCPQgqgqgahHQgZhGAHg8QAHg7AigMQAogOAxApQA2AuABBGIABCGQgDA6gVAIQgIADgIAAQgcAAggggg");
	this.shape_546.setTransform(8.8,-41.4,1.362,1.362);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#275399").s().p("AgeBhQgigDgGgTIgRioIBBgDIAaA7QAdA8AHANQAIAMAVAEQALACAIAAIhDAkQgTAHgUAAIgMAAg");
	this.shape_547.setTransform(21.3,-30.2,1.362,1.362);

	this.instance_19 = new lib.Path_3_1_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(34.9,1.4,1.362,1.362,0,0,0,6.7,17.9);
	this.instance_19.alpha = 0.559;

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#3765ED").s().p("AghBZQAPglAAgYQgBgggXhVIgXhNIA2gMIAeBBQAiBKAIAuQAJAqgGAnQgHA1ABAWIh7AQQAJgnAXgzg");
	this.shape_548.setTransform(35,1.5,1.362,1.362);

	this.instance_20 = new lib.Group_0_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-10.1,-32.8,1.362,1.362,0,0,0,9.5,11.7);
	this.instance_20.alpha = 0.82;

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FAE88C").s().p("AAKB9Qg0gwgmg0QgPgVABgZQAAgZARgUQA3hDAIg5QApAxARB4QAUCPAgBFQgmgVgwgtg");
	this.shape_549.setTransform(-10.1,-42.7,1.362,1.362);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#0540E3").s().p("AhlBlQAshWhLhPQCKArB/hSQgZBAgJApQgLA5AKAqQhKADgxAAQgzAAgZgDg");
	this.shape_550.setTransform(-3,-66.4,1.362,1.362);

	this.instance_21 = new lib.Path_1_3_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-4.7,-89,1.362,1.362,0,0,0,14.3,13.5);
	this.instance_21.alpha = 0.82;

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FAE88C").s().p("AhpCCQgjgjgHghQgGgbALgtQARgrALgWQASghAVgTIAKAaQAGARAAAKQAagYA3gQIBYgbQAZAaAJAzQAIArgEA0QgBARgJAXQgFANgMAYQg0Abg7AFQgPACgQAAQgrAAgpgMg");
	this.shape_551.setTransform(-3.8,-90,1.362,1.362);

	this.instance_22 = new lib.Path_10_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(21.8,-105.4,1.362,1.362,0,0,0,3.8,7.6);
	this.instance_22.alpha = 0.559;

	this.instance_23 = new lib.Path_1_2_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(36.7,-105,1.362,1.362,0,0,0,5.5,14.2);
	this.instance_23.alpha = 0.559;

	this.instance_24 = new lib.Path_2_3_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(56.6,-108.5,1.362,1.362,0,0,0,9.7,15.6);
	this.instance_24.alpha = 0.559;

	this.instance_25 = new lib.Path_3_0_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(88.7,-103.2,1.362,1.362,0,0,0,21.1,19.9);
	this.instance_25.alpha = 0.559;

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#747CE8").s().p("AAFApQgRgCgZgfQAVgOATgYQAMgOAXggIAACZQgRgigQgCg");
	this.shape_552.setTransform(21.9,-105.3,1.362,1.362);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#747CE8").s().p("AgyC3QgRikBHjPQAIA0AOBnQANBbAPA8QgbgpghAEQgkAEgHA0QgDAbAEAZg");
	this.shape_553.setTransform(36.8,-111.2,1.362,1.362);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#747CE8").s().p("Ag9DZQgDhdgPiFIgcjjQBHBWA4B+QAkBQA0CYQhChLgvAIQgnAGgJAuQgEAWADAWg");
	this.shape_554.setTransform(55.2,-119.5,1.362,1.362);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#747CE8").s().p("ACKCgQhQg0gxAQQgkANgKAtQgGAXACATIgEgFQgSiWg7iDQg9iIhihpQDPBrCJCMQCgCiA7DGQhAhahQg2g");
	this.shape_555.setTransform(78.9,-117.3,1.362,1.362);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000A73").s().p("AD0CvQhghKg5AVQglANgLAsQgFAXACATQgTgbgagaQg1g0goAGQgnAHgJAtQgEAXADAVQgHgZgOgZQgdgxglAEQgkAEgHA0QgDAbAEAZQgGgZgKgaQgTgzgUgCQgUgCgbgkIgXgjQBwgzAsibQAghxgNhiQAiAjBpA7QB6BGA9AvQDuC2BEFOQg9hyhhhLg");
	this.shape_556.setTransform(67.8,-116.9,1.362,1.362);

	this.instance_26 = new lib.Group_3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(43.5,-43.8,1.362,1.362,0,0,0,35.3,28.5);
	this.instance_26.alpha = 0.82;

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FAE88C").s().p("AixEMQgzgRgzgeQgsgcgXgYQgDgcgCg7IgCg1QAsA+BLA9QBoBUBVAAQBYAAAogTQAogTA3hDQAvg4gSh5QgFgngMgqIgNgpIgPgpQgKgeALgIQALgIAkAEIAwAFQAeAAAcgNQAZgLANgPQgVAig8AKQgRADgugDQghgBgFAHQgEAJAKATIAQAaQAIAPANAdQARAnAEAYQAHAkABAkQABAWgFAfQgGAkgPAhQgXA1glAjQgfAegzAZQgsAWhOABIgEAAQhJAAg3gSg");
	this.shape_557.setTransform(43.6,-43.7,1.362,1.362);

	this.instance_27 = new lib.Group_1_3();
	this.instance_27.parent = this;
	this.instance_27.setTransform(37.3,-44.2,1.362,1.362,0,0,0,39.8,28.2);
	this.instance_27.alpha = 0.559;

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#0540E3").s().p("AgcEaQhBgEg5gTIgTgHIgBAAIAAAAIgCgBIgHgDQgPgGgNgHQgagPgYgSQgogggfgpQgYgggRgjQgLgYgIgYIgGgPQgLgmASgjQASgjAlgMQAmgLAjASQAjASAMAlIACAMIABAAIABALQACANAFAOQAGASAMAXQAOAaAUAUQAMANAMAJIASAMIAAAAIAEACIAJAEQAjASAvAKQAyAJAlgHQAHgBALgEIAEgBIABAAIABgBIAOgGQAXgMAPgNQAlgeAQgtQAQgrgCg2QgCgvgRgxIgLgeIgBgBIAAgBIAAAAIgBgBIAAgCIgBgCIgEgMQgEgSAHgQQAHgQARgHQAOgGAPABIAGABIAPAEQARAFATADQAhAGAagHQARgFASgMIALgIIgKAKQgOAOgTAJQgaAMglAAIgngCIgTgBQgJABgEACQgFAEgBAFQgCAFADAHIABADIABACIABACIAUAhQAcAzAMA2QAQBCgLA8QgGAlgOAeQgPAggXAcQgWAbgeAWIgRANIgOAHQgRAJgTAHQghALglADQgTACgTAAIgcgBg");
	this.shape_558.setTransform(37.4,-44.1,1.362,1.362);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#1D1D1B").ss(0.1).p("ABqgLQgGg4gkgkQgjgkgrAFQgsAFgbArQgbArAHA3QAGA4AjAkQAjAkArgFQAtgFAagrQAcgrgHg3g");
	this.shape_559.setTransform(-2.5,-49,1.362,1.362);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AhABoQgjgkgGg4QgHg3AcgrQAagrAsgFQArgFAjAkQAkAkAGA4QAHA3gbArQgbArgsAFIgLAAQglAAgfgfg");
	this.shape_560.setTransform(-2.5,-49,1.362,1.362);

	this.instance_28 = new lib.Path_8_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-35.5,-52.1,1.362,1.362,0,0,0,1.9,8.9);

	this.instance_29 = new lib.Path_1_1_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-44.7,-53.3,1.362,1.362,0,0,0,3.1,8.8);

	this.instance_30 = new lib.Path_2_2_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-54.3,-56,1.362,1.362,0,0,0,5,8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#EEDCC4").s().p("AAEBVIgFgHIgHgJIgGgMIgJgWIgEgRIgDgXIABgZIAEgVIAHgVIAEgFQAGgJAJgDQALgCAIAHQANAJgCAPIAAABIgDAKIAAADIgMAsIgDANIgCAOIgEAnIABALIACAPg");
	this.shape_561.setTransform(-36.9,-52,1.362,1.362);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#EEDCC4").s().p("AgSBTIgEgIIgEgKIgEgNIgFgfIABggIACgQIAGgWIADgGIADgGIAFgLIAHgIQAIgIAJAAQALAAAHAHQAMAMgFAOIgFAKIgBADIgBADIgCAFIgYA7IgNAwIgBAJIAAAHg");
	this.shape_562.setTransform(-45.2,-53.2,1.362,1.362);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#EEDCC4").s().p("AgxBCIgBgMIAAgVIADgQIAHgXIAGgQIANgVIANgRIAMgMIAKgGQAJgFAKAEQAKADAFAJQAHAOgJANIgxA1IgfAsIgKAYg");
	this.shape_563.setTransform(-54.2,-55.9,1.362,1.362);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#275399").s().p("AgGA2IhCgtQgGgFACgGQACgIAIAAQAdgDAXgLQATgKAVgVIAzA8QgcAGgOAKQgKAHgRAXQgCAEgFABIgBAAQgDAAgDgCg");
	this.shape_564.setTransform(-34.4,-87.7,1.362,1.362);

	this.instance_31 = new lib.Path_7_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-41.4,-74.2,1.362,1.362,0,0,0,7.1,10.1);
	this.instance_31.alpha = 0.559;

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#3765ED").s().p("AhHBYQAZg6AKgdQARgwACg2IBFAkQAmBQgiBXg");
	this.shape_565.setTransform(-41.3,-74.1,1.362,1.362);

	this.instance_32 = new lib.Path_9_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-22.4,-98.6,1.362,1.362,0,0,0,6.4,7.1);
	this.instance_32.alpha = 0.559;

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#3F4EF3").s().p("AgoBOIgRgQQgFgEgBgGQgBgHADgGQAVgeAEgMQAEgOAAgjQAAgQARgJQAQgIAQAIIADACQALAJAWAJQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAFgMASQgJAOgLAkQgDAJgJACIgGABQgGAAgFgEg");
	this.shape_566.setTransform(-22.3,-100.1,1.362,1.362);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#A31523").s().p("AgLAJIAXgTQACAGgDAFQgCAGgGACQgDACgDAAQgEAAgEgCg");
	this.shape_567.setTransform(-14.2,-152.9,1.362,1.362);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FDEBCF").s().p("AAfgXQgIAUgIAJQgIALglAHQAZgYAkgXg");
	this.shape_568.setTransform(-13.2,-153.7,1.362,1.362);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#275399").s().p("AgLAHQAWgSAagRQgIAbgKALQgGAHgUAGQgOAFgPABQAGgHATgPg");
	this.shape_569.setTransform(-13,-153.7,1.362,1.362);

	this.instance_33 = new lib.Path_6_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-15.9,-144.2,1.362,1.362,0,0,0,9.3,7.3);
	this.instance_33.alpha = 0.82;

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FAE88C").s().p("AhJBEQgSgCgCgGQAzgSA1gqIBThIQAAAPgQAdQgVAngEALQgiAWgPAHIgwAVQgHgDgWgBg");
	this.shape_570.setTransform(-15.8,-144.2,1.362,1.362);

	this.instance_34 = new lib.Path_2_1_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-23.3,-145.5,1.362,1.362,0,0,0,13.6,4.9);
	this.instance_34.alpha = 0.559;

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#3F4EF3").s().p("AhdBPQAJgGALgRQgIgCgTABQgQACgKgFQAugSA0gqQAdgYA5gzIAMgDIA5BqIjFBDg");
	this.shape_571.setTransform(-19.7,-150.5,1.362,1.362);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#2C439C").s().p("AhQBGQgUgHgJgLIA1goQA7grAegRQAmgVAngMQg5A0geAYQgzApguASQAKAGAQgCQATgBAIACQgLAQgJAGQgbgGgMgFg");
	this.shape_572.setTransform(-26.8,-150.8,1.362,1.362);

	this.instance_35 = new lib.Path_5_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-7.9,-126.4,1.362,1.362,0,0,0,6.7,25.2);
	this.instance_35.alpha = 0.559;

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#3F4EF3").s().p("AgDEEQgkgEgXgcQgYgcAEgkIACgNIAGgZIAThdIAEgqIgBg+IgGggIgKgeIgWgmQgNgVAGgXQAGgYAVgMQASgLAVADQAUAEANAPIAOAQQAGAGAIAMIAWAiIAWA0IAOAyIAJA+IACAxIgHCLQgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_573.setTransform(-3.6,-127.4,1.362,1.362);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#234491").s().p("AgSBOQgGgFgCgIIAAgEIADgZIAFgYIAJgZQALgeAJgRIALgUQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBAAIgGAWQgFAVgEAbIgCAYIABAfIACAMIAAAAQABAIgFAHQgEAGgHABIgEABQgGAAgFgEg");
	this.shape_574.setTransform(-15,-167.1,1.362,1.362);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#234491").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIAUgQIAUgLIAYgMIAXgJIAmgIIAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgeALIgKAFIgVANIgSANIgPAPIgGAGIgCACIgGAHQgEAFgGABIgCAAQgGAAgEgEg");
	this.shape_575.setTransform(5.7,-158.8,1.362,1.362);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#234491").s().p("AgUBRQgIAAgFgGQgGgGABgIIAAgEIAQgwIAagyIAfgmQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIABADIgLAVQgDAEgCAHIgOAlIgDAMIgGAtIAAAOQgBAIgFAFQgGAFgGAAIgCAAg");
	this.shape_576.setTransform(-7,-168.3,1.362,1.362);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#234491").s().p("AgxBGQgIgDgDgHQgDgHADgIIARgYQARgXAUgTIAWgVIAkgZIAGgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIgBADIAAAAIgSAQIgiAqQgNAVgLAYIgKAXQgDAHgHADIgHABIgHgBg");
	this.shape_577.setTransform(1,-165.9,1.362,1.362);

	this.instance_36 = new lib.Path_4_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-90.1,-94.3,1.362,1.362,0,0,0,20.4,17.7);
	this.instance_36.alpha = 0.559;

	this.instance_37 = new lib.Path_1_0_2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-44.1,-93.7,1.362,1.362,0,0,0,4.9,10.3);
	this.instance_37.alpha = 0.559;

	this.instance_38 = new lib.Path_2_0_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-59,-101,1.362,1.362,0,0,0,8.6,11.1);
	this.instance_38.alpha = 0.559;

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#747CE8").s().p("AgygkQAsgnB+hnQBthYA4g4QiuEMg7D9QgFgngKgaQgQgmgXgBQg1gDhoBhQg/A7g+BLQApi4DBivg");
	this.shape_578.setTransform(-79.1,-114.2,1.362,1.362);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#747CE8").s().p("AAdB0QgHgmgUgKQgXgMgcAqQANgtAhhYQAfhYANgvIAJCsQABBjgSBGQABgegFgZg");
	this.shape_579.setTransform(-44,-102.8,1.362,1.362);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#747CE8").s().p("AgEAAQBYi2AZg+QADBpggCLQgTBQguCgQgChFgcgHQgTgEggAgQgUAVgXAfQAfhfBKiVg");
	this.shape_580.setTransform(-55.9,-119.1,1.362,1.362);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000A73").s().p("AhPhtQBBg2B/hXQBphIAbgdQgiBbAbB+QAeCSBjAxQgMAegRAfQggA+gWAMQgVALgZAnQgMATgIASQACgYgDgaQgFg0gYgLQgYgMgcApQgNAUgJAXQABgWgDgXQgHgtgWgGQgXgGgpAwQgUAZgQAZQgCgfgIgfQgQg+gfgBQg8gEh6B6Qg9A8gxA9QAij9D9jQg");
	this.shape_581.setTransform(-69.2,-116.6,1.362,1.362);

	this.instance_39 = new lib.Path_0_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-15.5,37,1.362,1.362,0,0,0,1.4,7);

	this.instance_40 = new lib.Path_1_6();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-22.6,36,1.362,1.362,0,0,0,2.4,6.9);

	this.instance_41 = new lib.Path_2_6();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-29.8,33.9,1.362,1.362,0,0,0,3.9,6.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#EEDCC4").s().p("AAAA8IgGgHIgFgJIgGgRIgDgNIgDgSIABgTIADgQIAEgNIAFgIQAEgGAHgCQAIgBAHAEQAJAIgBALIgBAGIgBACIgBADIgOBBIgBATIABAPIABAFg");
	this.shape_582.setTransform(-16.6,37,1.362,1.362);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#EEDCC4").s().p("AgNBAIgDgGIgEgIIgFgVIgBgaIACgYIAJgaIAEgIIACgCIAEgEQAFgGAIgBQAIABAFAFQAJAJgEALIgcBIIgGAbIgBAGIAAAFg");
	this.shape_583.setTransform(-22.9,36.1,1.362,1.362);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#EEDCC4").s().p("AglAzIgBgJIAAgQIAFgZIADgFIAFgMIAGgLIADgGIADgEIANgPIAGgEIAFgDQAHgEAHADQAIACAEAHQAGALgIAKIgFAGIgWAYIgEACIgTAaIgLARIgDAHIgEALg");
	this.shape_584.setTransform(-29.8,34,1.362,1.362);

	this.instance_42 = new lib.Path_15();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-23.6,-41.2,1.362,1.362,0,0,0,9.3,17.1);
	this.instance_42.alpha = 0.559;

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#3783EE").s().p("Ag7ClQghgigGg9QgIhDAeg/QAehCAlgcQAigbAgAPQAjAQAHA8QAIBCgqA2QgdAlgkBIQgUAhgUAAQgKAAgJgHg");
	this.shape_585.setTransform(-24,-41.1,1.362,1.362);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#275399").s().p("AANBnQgkgDgagRQgegVACgfIAciGIBtALQgXAhgLAuQgLAqAKASQAMAWApAig");
	this.shape_586.setTransform(-23.3,-28,1.362,1.362);

	this.instance_43 = new lib.Path_3_2();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-19.7,8.6,1.362,1.362,0,0,0,8.1,16.6);
	this.instance_43.alpha = 0.559;

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#3765ED").s().p("AhRCZQATghAhgqQAXgeAFgYQAGgdgEhUIgEhNIA2ABIAQBEQAQBMgCAsQgBAqgOAiQgTAwgFAUg");
	this.shape_587.setTransform(-19.7,8.7,1.362,1.362);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#EEDCC4").s().p("AAXBUIgHgGIgQgTIgNgcIgKgfIgGglIADgZIAEgLQAFgJAJgEQAJgEAKAFQAPAGgBAQIAAAOIgBAEIgBBgIABAMIABAKIACAIIADAHg");
	this.shape_588.setTransform(28.4,-50.3,1.362,1.362);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#EEDCC4").s().p("AAXBAIgGgDIgHgGIgIgHIgJgPIgDgGIgLgXIgDgMIgCgGIgBgQIACgRIABgFQADgIAHgDQAHgEAHADQALAEACAMIACBDQAAAFACAFIABAKIAHAXIADAFg");
	this.shape_589.setTransform(40.6,31.4,1.362,1.362);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#EEDCC4").s().p("AALBBIgEgFIgGgHIgJgTIgHgRIgCgHIgCgLIgCgNIAAgRIACgKIAFgRQAEgHAIgCQAHgCAGAEQALAFAAANIgCAIIAAACIgGA4IAAAmIACAMg");
	this.shape_590.setTransform(33.5,32.5,1.362,1.362);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#EEDCC4").s().p("AgRBAIgDgHIgDgIIgDgKIgCgLIgBgUIACgSIAFgSIACgGIAFgKIAHgLIAGgGQAFgGAIAAQAIABAFAFQAJAKgFALIghBFIgHAbIgBAMg");
	this.shape_591.setTransform(27,32.5,1.362,1.362);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#EEDCC4").s().p("AgSBTIgEgIIgEgKIgEgNIgFgfIABggIACgQIAGgWIADgGIADgGIAFgLIAHgIQAIgIAJAAQALAAAHAHQAMAMgFAOIgFAKIgBADIgBADIgaBAIgNAwIgBAJIAAAHg");
	this.shape_592.setTransform(-45.2,-53.2,1.362,1.362);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#3F4EF3").s().p("AgDEEQgkgEgXgcQgYgcAEgkIAbiDIAEgqIgBg+IgGggIgKgeIgWgmQgNgVAGgXQAGgYAVgMQASgLAVADQAUAEANAPIAOAQQAGAGAIAMIAWAiIAWA0IAOAyIAJA+IACAxIgHCLQgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_593.setTransform(-3.6,-127.4,1.362,1.362);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#234491").s().p("AgSBOQgGgFgCgIIAAgEIADgZIAFgYIAJgZQALgeAJgRIALgUQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBAAIgGAWQgFAVgEAbIgBA3IACAMIAAAAQABAIgFAHQgEAGgHABIgEABQgGAAgFgEg");
	this.shape_594.setTransform(-15,-167.1,1.362,1.362);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#234491").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIAogbIAYgMIAXgJIAmgIIAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgeALIgKAFIgVANIgSANIgPAPIgGAGIgCACIgGAHQgEAFgGABIgCAAQgGAAgEgEg");
	this.shape_595.setTransform(5.7,-158.8,1.362,1.362);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#EEDCC4").s().p("AAAA8IgGgHIgFgJIgGgRIgGgfIABgTIADgQIAEgNIAFgIQAEgGAHgCQAIgBAHAEQAJAIgBALIgBAGIgBACIgPBEIgBATIABAPIABAFg");
	this.shape_596.setTransform(-16.6,37,1.362,1.362);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#EEDCC4").s().p("AglAzIgBgJIAAgQIAFgZIADgFIAFgMIAGgLIADgGIADgEIANgPIALgHQAHgEAHADQAIACAEAHQAGALgIAKIgbAeIgEACIgTAaIgLARIgDAHIgEALg");
	this.shape_597.setTransform(-29.8,34,1.362,1.362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.instance_5},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.instance_9},{t:this.shape_527},{t:this.shape_526},{t:this.instance_8},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.instance_7},{t:this.shape_520},{t:this.instance_6},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_587},{t:this.instance_43},{t:this.shape_586},{t:this.shape_585},{t:this.instance_42},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.instance_35},{t:this.shape_572},{t:this.shape_571},{t:this.instance_34},{t:this.shape_570},{t:this.instance_33},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.instance_32},{t:this.shape_565},{t:this.instance_31},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_27},{t:this.shape_557},{t:this.instance_26},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_551},{t:this.instance_21},{t:this.shape_550},{t:this.shape_549},{t:this.instance_20},{t:this.shape_548},{t:this.instance_19},{t:this.shape_547},{t:this.shape_546},{t:this.instance_18},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_542},{t:this.instance_14},{t:this.shape_541},{t:this.instance_13},{t:this.shape_540},{t:this.shape_539},{t:this.instance_12},{t:this.shape_538},{t:this.instance_11},{t:this.shape_537},{t:this.instance_10}]},1).to({state:[{t:this.shape_587},{t:this.instance_43},{t:this.shape_586},{t:this.shape_585},{t:this.instance_42},{t:this.shape_597},{t:this.shape_583},{t:this.shape_596},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_577},{t:this.shape_576},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.instance_35},{t:this.shape_572},{t:this.shape_571},{t:this.instance_34},{t:this.shape_570},{t:this.instance_33},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.instance_32},{t:this.shape_565},{t:this.instance_31},{t:this.shape_564},{t:this.shape_563},{t:this.shape_592},{t:this.shape_561},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_27},{t:this.shape_557},{t:this.instance_26},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_551},{t:this.instance_21},{t:this.shape_550},{t:this.shape_549},{t:this.instance_20},{t:this.shape_548},{t:this.instance_19},{t:this.shape_547},{t:this.shape_546},{t:this.instance_18},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_542},{t:this.instance_14},{t:this.shape_541},{t:this.instance_13},{t:this.shape_540},{t:this.shape_539},{t:this.instance_12},{t:this.shape_588},{t:this.instance_11},{t:this.shape_537},{t:this.instance_10}]},1).to({state:[{t:this.shape_587},{t:this.instance_43},{t:this.shape_586},{t:this.shape_585},{t:this.instance_42},{t:this.shape_597},{t:this.shape_583},{t:this.shape_596},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_577},{t:this.shape_576},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.instance_35},{t:this.shape_572},{t:this.shape_571},{t:this.instance_34},{t:this.shape_570},{t:this.instance_33},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.instance_32},{t:this.shape_565},{t:this.instance_31},{t:this.shape_564},{t:this.shape_563},{t:this.shape_592},{t:this.shape_561},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_27},{t:this.shape_557},{t:this.instance_26},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_551},{t:this.instance_21},{t:this.shape_550},{t:this.shape_549},{t:this.instance_20},{t:this.shape_548},{t:this.instance_19},{t:this.shape_547},{t:this.shape_546},{t:this.instance_18},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_542},{t:this.instance_14},{t:this.shape_541},{t:this.instance_13},{t:this.shape_540},{t:this.shape_539},{t:this.instance_12},{t:this.shape_588},{t:this.instance_11},{t:this.shape_537},{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:4.5,scaleX:0.2,scaleY:0.2,x:1,y:-0.9},0).wait(3).to({_off:true},1).wait(9));

	// Layer 5
	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AjeC3QhMhNgUhwQgNhKANhcQAHguAJggIAwAeIAkghIG+gIIA0AWIAbgfQAfCGgXCHQgtEMkOAEIgFAAQiCAAhXhYg");
	this.shape_598.setTransform(1.7,30.9);
	this.shape_598._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_598).wait(5).to({_off:false},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-153.5,259.6,203.4);


(lib.חץשלאוצרמילים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,-4.9);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.8,-4.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},27).to({state:[{t:this.instance_2}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:20.8},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},27).to({_off:true,x:0.5},32).wait(1));

	// Layer 1
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-3.5);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.8,-3.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_5}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:16.8},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},27).to({_off:true,x:-5.1},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-65.5,235,123.9);


(lib.QutionPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.sund4 = new lib.להשמיע();
	this.sund4.parent = this;
	this.sund4.setTransform(-317,61,0.466,0.466,0,0,0,-1.5,-1.5);
	this.sund4.visible = false;
	new cjs.ButtonHelper(this.sund4, 0, 1, 2, false, new lib.להשמיע(), 3);

	this.sund2 = new lib.להשמיע();
	this.sund2.parent = this;
	this.sund2.setTransform(19.2,61,0.466,0.466,0,0,0,-1.5,-1.5);
	this.sund2.visible = false;
	new cjs.ButtonHelper(this.sund2, 0, 1, 2, false, new lib.להשמיע(), 3);

	this.sund3 = new lib.להשמיע();
	this.sund3.parent = this;
	this.sund3.setTransform(-316.3,-67.7,0.466,0.466);
	this.sund3.visible = false;
	new cjs.ButtonHelper(this.sund3, 0, 1, 2, false, new lib.להשמיע(), 3);

	this.sund1 = new lib.להשמיע();
	this.sund1.parent = this;
	this.sund1.setTransform(17.3,-67.7,0.466,0.466);
	this.sund1.visible = false;
	new cjs.ButtonHelper(this.sund1, 0, 1, 2, false, new lib.להשמיע(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sund1},{t:this.sund3},{t:this.sund2},{t:this.sund4}]}).wait(1));

	// Layer 2
	this.A4txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A4txt.name = "A4txt";
	this.A4txt.textAlign = "center";
	this.A4txt.lineHeight = 19;
	this.A4txt.lineWidth = 251;
	this.A4txt.parent = this;
	this.A4txt.setTransform(-166.4,28);

	this.A2txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A2txt.name = "A2txt";
	this.A2txt.textAlign = "center";
	this.A2txt.lineHeight = 19;
	this.A2txt.lineWidth = 255;
	this.A2txt.parent = this;
	this.A2txt.setTransform(170.2,28);

	this.A3txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A3txt.name = "A3txt";
	this.A3txt.textAlign = "center";
	this.A3txt.lineHeight = 19;
	this.A3txt.lineWidth = 251;
	this.A3txt.parent = this;
	this.A3txt.setTransform(-166.4,-96.9);

	this.A1txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A1txt.name = "A1txt";
	this.A1txt.textAlign = "center";
	this.A1txt.lineHeight = 19;
	this.A1txt.lineWidth = 255;
	this.A1txt.parent = this;
	this.A1txt.setTransform(170.2,-96.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1txt},{t:this.A3txt},{t:this.A2txt},{t:this.A4txt}]}).wait(1));

	// Layer 3
	this.A4erorr = new lib.טעות();
	this.A4erorr.parent = this;
	this.A4erorr.setTransform(-170.3,60.9,0.996,1,0,0,180,0.4,-0.1);
	this.A4erorr.visible = false;

	this.A3erorr = new lib.טעות();
	this.A3erorr.parent = this;
	this.A3erorr.setTransform(-170.3,-63,0.996,1,0,0,180,0.4,-0.1);
	this.A3erorr.visible = false;

	this.A2erorr = new lib.טעות();
	this.A2erorr.parent = this;
	this.A2erorr.setTransform(180,61,1,1,0,0,0,0.5,0);
	this.A2erorr.visible = false;

	this.A1erorr = new lib.טעות();
	this.A1erorr.parent = this;
	this.A1erorr.setTransform(180,-62.9,1,1,0,0,0,0.5,0);
	this.A1erorr.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1erorr},{t:this.A2erorr},{t:this.A3erorr},{t:this.A4erorr}]}).wait(1));

	// Layer 1
	this.A4 = new lib.בועה1();
	this.A4.parent = this;
	this.A4.setTransform(-165.5,57,0.967,1,0,0,180);
	new cjs.ButtonHelper(this.A4, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A3 = new lib.בועה1();
	this.A3.parent = this;
	this.A3.setTransform(-165.5,-66.2,0.967,1,0,0,180);
	new cjs.ButtonHelper(this.A3, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A2 = new lib.בועה1();
	this.A2.parent = this;
	this.A2.setTransform(171.7,57);
	new cjs.ButtonHelper(this.A2, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A1 = new lib.בועה1();
	this.A1.parent = this;
	this.A1.setTransform(171.7,-66.2);
	new cjs.ButtonHelper(this.A1, 0, 1, 2, false, new lib.בועה1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1},{t:this.A2},{t:this.A3},{t:this.A4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.QutionPage, new cjs.Rectangle(-333.5,-119.2,665.9,236.5), null);


(lib.opening = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כותרותפתיחה();
	this.instance.parent = this;
	this.instance.setTransform(-181,-161.7,0.467,0.467,0,0,0,0.6,0);

	this.instance_1 = new lib.ביצהבפתיחה();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.6,33,1,1,0,0,0,0.5,0);

	this.playBut = new lib.התחלמשחק();
	this.playBut.parent = this;
	this.playBut.setTransform(-180.6,75.2);
	new cjs.ButtonHelper(this.playBut, 0, 1, 2, false, new lib.התחלמשחק(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBut},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.opening, new cjs.Rectangle(-391.9,-250,784,500.1), null);


(lib.selectEgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.madleOfir = new lib.מדליה();
	this.madleOfir.parent = this;
	this.madleOfir.setTransform(32.1,142.1,1,1,0,0,0,3.1,24.1);
	this.madleOfir.visible = false;

	this.madleDor = new lib.מדליה();
	this.madleDor.parent = this;
	this.madleDor.setTransform(-215.9,152.1,1,1,0,0,0,3.1,24.1);
	this.madleDor.visible = false;

	this.madleIdan = new lib.מדליה();
	this.madleIdan.parent = this;
	this.madleIdan.setTransform(312.2,142.1,1,1,0,0,0,3.1,24.1);
	this.madleIdan.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.madleIdan},{t:this.madleDor},{t:this.madleOfir}]}).wait(1));

	// Layer 1
	this.dor = new lib.ביצהדור_1();
	this.dor.parent = this;
	this.dor.setTransform(-259.8,58.2,0.225,0.231);
	new cjs.ButtonHelper(this.dor, 0, 1, 2, false, new lib.ביצהדור_1(), 3);

	this.ofir = new lib.ביצהאופיר();
	this.ofir.parent = this;
	this.ofir.setTransform(-16.2,72.5,0.223,0.228,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.ofir, 0, 1, 2, false, new lib.ביצהאופיר(), 3);

	this.idan = new lib.ביצהעידן();
	this.idan.parent = this;
	this.idan.setTransform(273.4,84.2,0.253,0.253);
	new cjs.ButtonHelper(this.idan, 0, 1, 2, false, new lib.ביצהעידן(), 3);

	this.instance = new lib.תבחראתהביצהשלך();
	this.instance.parent = this;
	this.instance.setTransform(6.6,-126.9,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.idan},{t:this.ofir},{t:this.dor}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.selectEgg, new cjs.Rectangle(-338,-186.4,708.3,426.5), null);


(lib.boom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("sundBoom");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(2.2,4,1,1,0,0,0,528.9,364.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.69,scaleY:0.69},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1).to({scaleX:0.18,scaleY:0.18},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.7,-360.5,1057.7,729);


(lib.petDor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape.setTransform(168,-100.2,0.077,0.077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3B3B").s().p("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");
	this.shape_1.setTransform(160.2,-108,0.077,0.077);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AuROUIAAlKQA0A5AQAPIBRBRQAyAxAeAgQALALAIABQAIAAALgMQAsgwAngiQAOgNAAgKQAAgJgOgOQjbjchvhsQgXgXAAggIABhRIAAhZICaCaIBjBjQA7A7AoAqQAPAPAKAAQAKgBAOgPQAmgsAnghQAPgNgBgKQAAgJgPgOInDnBQgbgbAAgiIABqCQAJgBAGAGIAJALIJrJpQAVAVAAAgIgBIMQgBAWAIAIQAIAIAWgCQA8gDAtAEQAVABAIgJQAGgIAAgVIgBlNIAAgmQAKgBAHAHIALANIEqErQAOAPAJAAQAKAAANgPQAmgrAqglQANgMAAgJQAAgJgOgOIlBk+QAFgJAKAAQAFgBALACQDmgBBzABQAUAAAHgHQAHgGgBgUQgDgvADhBQABgTgHgHQgHgFgTgBIoMABQgTABgOgGQgOgHgOgNQkukwkvktIgdgXQAJgKAKAAIAQABIJngBQAhAAAXAWIHDHHQAPAOAJAAQAKABAMgOQAkgpApglQAQgNAAgKQABgLgQgOIigifIififIgdgXIAFgKQCSAAAqABQAFAAAIAHIAMAMIFJFKQAOAOAJABQAKABANgPQAggmAngiQATgQABgMQABgNgTgTQgsgphBhBIhxhwIFHAAIABcHQAAATgGAGQgGAGgTgBI8HAAg");
	this.shape_2.setTransform(132.6,-81.9,0.14,0.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3B3B").s().p("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");
	this.shape_3.setTransform(118.5,-96,0.14,0.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3838").s().p("AgmAwQgOgKgBgQQAAgPAegdQAdgfAPAAQARAAAKANQAKANgIAPQgTAkgqAaQgGAEgGAAQgHAAgIgGg");
	this.shape_4.setTransform(128.9,-121,0.243,0.243);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424142").s().p("AgmAxQgNgIgCgRQgBgQAegeQAdgfARAAQARABAKAOQAJAPgJAPQgaAmghAUQgHAEgHAAQgHAAgHgFg");
	this.shape_5.setTransform(133.2,-116.7,0.243,0.243);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424142").s().p("AgvAmQgMgUAOgPQASgTAegdQAPgOAUALQARAIgBATQAAAOgeAeQgdAegPABIgCAAQgRAAgIgQg");
	this.shape_6.setTransform(131,-118.8,0.243,0.243);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424142").s().p("AgWA2QgRgBgIgLQgJgLAFgPQARgpAwgZQANgHAOALQAOALgBAPQgBAPgfAdQgdAegOAAIgBAAg");
	this.shape_7.setTransform(136.4,-119.9,0.243,0.243);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424142").s().p("AgxAmQgKgVAOgOQAfggAQgPQAKgJAMABQALABAKAKQAJAKAAALQAAALgJAJIgdAfQgQARgNAGIgCAAQgbAAgHgQg");
	this.shape_8.setTransform(134.3,-122.1,0.243,0.243);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424142").s().p("AgVA1QgTAAgJgQQgJgRAMgPQAXgdAdgWQAPgMARAJQAQAJAAATQAAAQgfAdQgcAdgQAAIAAAAg");
	this.shape_9.setTransform(139.7,-123.2,0.243,0.243);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424142").s().p("AgXA1QgQAAgJgOQgJgOAIgOQAVgkAmgYQANgIAPAJQAPAIABARQABAQgfAeQgdAegRAAIgBAAg");
	this.shape_10.setTransform(137.5,-125.3,0.243,0.243);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3838").s().p("AgvAnQgMgUAOgPQATgUAegdQAQgOASAMQARAKgCASQAAAOgeAcQgcAegOAAIgEAAQgRAAgHgOg");
	this.shape_11.setTransform(132.1,-124.3,0.243,0.243);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3838").s().p("AgwAlQgKgQAMgPQAXgeAggXQANgKAQAJQAPAJABARQAAAPgeAdQgdAfgQAAQgSAAgJgQg");
	this.shape_12.setTransform(135.3,-127.5,0.243,0.243);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3838").s().p("Aj+C9QgzgjgNg+QgMg/AigzQAig1A9gOQA9gNA2AiQAOAJAOABQAMABAPgGQBTgfAyheQAJgQAMgGQAKgGATABIBSABIBYAAQg9CEhBBLQhSBdhzAkQgaAJgPATQgmA1g9ALQgOACgNAAQguAAgogbg");
	this.shape_13.setTransform(97.6,-62.5,0.243,0.243);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3838").s().p("AB7DZQg8gOgjg2QgNgUgagKQhwgnhMhYQhChMgvh8QBAABAlgCQA1gCAsgJQANgCAGAIQAEAFAFALQA3BcBEAkQAOAHAKABQANABAOgIQA5geA7ATQA8ASAeA4QAdA1gQA8QgQA7g1AgQgmAXgpAAQgSAAgSgEg");
	this.shape_14.setTransform(151.7,-62.6,0.243,0.243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A3838").s().p("AB1ErQgHgBgLgKImBmCQgKgKgBgGQgBgHALgJQB4hkCFg/IANgEQAJgBAGAGIAKAKIEZEYQAKAKACAJQACAKgGANQhACChfB1QgJAMgIAAIAAAAg");
	this.shape_15.setTransform(142.1,-129.4,0.243,0.243);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3838").s().p("As1XnQhbgBg3gDQhPgFhCgMQiagehshgQhkhag/iXQgjhRgbh3QgciJgPhEQgfiNgkixQgDgNgFgFQgHgGgMABIgTAAQh3ANgthqIAAjDQAag0AtgVQAogRBAAAUAQkAABAhGAAAQAcAAAIgHQAKgIgBgbQgBpgABq2QABgXgJgIQgHgIgZgDQidgWhfB5QgHAKgUAQQgpAhgPAWQgXAjAIAsQACAPgGAUIgMAgIjRjRQA4gZA0AFQAQACAOgFQAMgFANgMIC4irQAfgeArAAQBRABCjAAQApAAARASQASARAAAqQAAQ6gBE2QAAAaAJAIQAJAIAZgCQAdgBAqABIBHAAQA5ABAlAjQAkAkAAA5QABA3gBA2QAABCgjAkQgkAlhAgBQgcAAgLAKQgLAJgGAaIg+EcQgkCgghB5Qg8DjigCJQimCOjtAQQg2ADg3AAg");
	this.shape_16.setTransform(123.6,-106,0.243,0.243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B393A").s().p("ApZD8IgKgFQhFgdgGgPQgGgRAlg+QDalsG9gTQHOAZDTGOQAJARgDAJQgDAJgRAGQgnAOgiASQgRAKgKgEQgKgEgKgTQiIkBkYg+QjOgui/BdQi/BchcC/QgKAWgKAFQgEACgFAAQgKAAgNgIg");
	this.shape_17.setTransform(129.7,-78,0.224,0.224);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A3839").s().p("AjUDXQhZhZAAh+QAAh9BYhYQBYhYB9AAQB9gBBYBYQBYBYABB9QABB9hYBZQhXBYh9ABIgDAAQh8AAhYhXg");
	this.shape_18.setTransform(115.7,-110.2,0.224,0.224);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3839").s().p("AgEEuQh9gChWhYQhXhaABh9QABh9BZhXQBZhXB9ABQB9ACBYBYQBXBZgBB8QgBB/hZBXQhYBWh8AAIgEAAg");
	this.shape_19.setTransform(143.5,-110.2,0.224,0.224);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B393A").s().p("Ao8csQmJh8lNkvQnxnDhqqzIgEg2QgDghgKgUIAAlIQALgYAEgmQADgrAEgVQB5rcI9nTQHAluIrgxQIBguGqCyQGpCyFKGNQFpGyA2I6QAoGsh9F3Qh9F5kiE9QjoD9keCXQkgCXlRAtQiRATiKAAQkiAAkKhTgAqc45Qk2CCjwDvQjvDviEE2QiJFBgBFfQgBFeCHFBQCCE2DvDwQDvDvE2CFQFBCJFfABQFeACFBiHQE2iCDwjvQDwjvCEk2QCJlBAClfQABleiHlCQiCk3jvjwQjvjwk3iFQlBiIlggBIgDAAQldAAk/CHg");
	this.shape_20.setTransform(129.6,-97.2,0.224,0.224);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A3839").s().p("AgJFGQiPgGhahkQhahkAHiPQAGh/BkhbQBkhaB/AGQCLAGBcBjQBdBjgGCGQgGCGhkBdQhdBXh5AAIgPgBg");
	this.shape_21.setTransform(111.9,-137.5,0.23,0.23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3839").s().p("Ag7eAQgDgJgLgDIgRgGQhxg4gIh4IAAg0IADqLQABl9gBkNQgBhGgLhgIgVimQggkZgpjDIgDgPQgCgJgHgHIiFChQhVBoh0CiQgtA+guAVQgtAVg4gRQg9gTgsg3Qgsg3gEhAQgEhLAsg/QE1m2GimYQAUgUAigOQAUgJApgOQA5gWBOALQAsAGBYARQBmAMB9gFQBTgDCPgPQAMgBAEgHQABgEABgNQALiUgYiMQgDgPgHgGQgGgHgOgBImNg2QgJgCgDgCQgFgDADgJIAEgOQAEgGAKADQAZAJAXgMQALgFAcgYQA+gzBHgFQAmgDAHgdQAHgbAPgQQARgSAegIIkIhMIgUgGQgJgGAFgPQAGgQALADQAGACALAGQDbA9CbAuQAbAIAYgQQA6gnBGAEQA1AEAkAeQAmAeAMA0QBKFCgZECIgQCgQgJBIgtAuQguAvhIAJQj+AiirAHQgVABgFAIQgFAHAFATQA3DqAnELQAiDlAZETQAJBjAmCEIBCDhQBnF9CPHiQAaBWgnBNQgoBQhWAYQhVAZhIgrQhIgsgahaIkFuNQgFgTgLgJIAAAfIgDGxQgCEAACCxQABBngkA+QgpBEhdAdg");
	this.shape_22.setTransform(117.5,-101.9,0.23,0.23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgEABQgBgDACgCQADgDACAEIAEAEIgGAFQgDgCgBgDg");
	this.shape_23.setTransform(146.7,-115.9,0.238,0.238);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3B3C").s().p("Ak+DGQgTgRAVgaIBBhJQBBhGBZhBQAPgMAIgFQANgHAOAHQAOAHAAAPQAAAJgEATIACAOICAhUQBRg1Bog1QAQgIAJgBQANAAAIAOQAIAPgIALQgGAJgQAIQiMBEi+CGQgJAGgRAQQgQAKgQgHQgRgHABgUQACgegBgFQhKA4hOBZIgVAaQgMANgIADQgDACgEAAQgIAAgJgIg");
	this.shape_24.setTransform(104.2,-102.8,0.238,0.238);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3B3C").s().p("AnbHVQgbgBgMgXQgLgXAOgcQAphRA6haQBnifCOiYQAOgPAMgFQAQgHARAHQARAGAIAPQAGAMAAAVIAEBCQDtj5DAiaIBNg8QAXgRATAAQAUABAOASQAcAmgvAjQjmCvkMEaIg/BEQgPARgNAFQgQAHgTgHQgRgHgHgPQgFgMAAgVIgDg0QgJgBgGAGIgJAMQiLCmhdC1QgLAUgJAJQgNAMgSAAIgCAAg");
	this.shape_25.setTransform(104.9,-92,0.238,0.238);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A3839").s().p("AkJEZQh0hugFimQgEiZBvh0QBuh1CcgEQCjgFB0BvQB0BuAFClQAECZhuB1QhuB0iZAEIgNAAQieAAhwhpg");
	this.shape_26.setTransform(118.9,-143.4,0.238,0.238);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3839").s().p("AIRYEQgIgIgPgEIgZgHQhsgtgkh1QhTkRg3k1Qg4k3gYlxQgBgTgbgVQgbgUgRAEQgHABgCAHIgEANQhVD9gpEFQg1FLARFHQAGB9hJBIQhCBBhtAEQh0AEhPhJQhOhJgFh0QgZp2C5pYQAoiBA/inQAFgOAJgGQAIgGAQAAQBWgBBogJQBKgHBzgPQB3gPBDhOQBEhOgMhuQgLhshUhBQhThBhrANQjnAei4gGQgUAAgOgGQgOgIgLgQQgLgQgYgeQgYgfgLgQQgHgKgGgBQgGAAgJAJQg3AygqA1QgOASAEAKQAEAIAVAHQBJAaBeAHQA3AEBzgBQB2gBCqgWQBdgMBIBRQBHBRgcBYQgRA2grAjQgpAgg4AJQjVAjiXAEQjGAGimgpQjRgyhfiXQhqiqBXi4QAphXBKhQQA5g+BehMQB8hlB8g9QCKhECQgXQCWgXB5AyQJ+EEFzIbQAzBKgIBBQgHBChBAwQhHAzhPgKQhPgKgyhEQg+hWgsg2Qg8hLg7g3IgEgFQgDgDgDACQgCACABAEQABAEAEACQA+CvAmCRQAWBVAGB1QAEBEADCHQAaKACtJJQAnCFg1BXQg0BXiIAeIgDAGg");
	this.shape_27.setTransform(134.9,-97.8,0.238,0.238);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3839").s().p("Al0NtQgWgJgfggQiaiekUkQQgSgSgFgQQgFgRAHgZQAHgYAFgqQAGg1ADgOQAhipB9h9IMAsBQAOgOAJAAQAKgBANAPQA6A/A3AyQAQAOgBAKQgBAKgPAOQl0F2i8C5QgQAQgBAKQgBALARAPQAyAsA9BBQAOAPAJAAQAKABAPgQQCuivFfleQAtgtAPAAQAQAAAuAuIBgBiIgaAbQm7G6hvBuQgSASAAALQgBANATAQQAoAlBFBJQANAOAIAAQAJgBANgNIEXkYQCvitBohrQATgTAMAAQANAAARAUQAuA1A6AzQARAPgBAMQgBAKgQAQIq7K5QhFBFgZAWQg3AxgzAcQhoA4iIAMIgRAAQgKABgFACQgVALgUAAQgMAAgMgEg");
	this.shape_28.setTransform(148.4,-112.8,0.193,0.193);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3838").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_29.setTransform(107.4,-71.9,0.193,0.193);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3838").s().p("AVddzQhVgahDhLItgvFQj2kSh4iKQgPgRgLAAQgKgBgPARQgZAbgqAqIhEBEQgMAMgIAAQgIAAgMgMIipiqIpCpCQlVlWjujrQiUiRg8i5Qg4itASjWQAIhqAih3QAahcAwh9ICQAAQAVAZAHAHMAwtAwtQBrBqAWAcQBCBQATBUIAABwQgIAFgDALIgDATQg7C+i5AtQgtAKgrAAQgxAAgsgNg");
	this.shape_30.setTransform(130.7,-93,0.193,0.193);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("ApkMaQhfgng4hVQg5hWAAhsQAEiJBlhlIDxjvIMesgQASgSALAAQAMgBARASQCjClECEBQARAQABAKQACAMgSARQlcFZq2K4QhOBNhkAVQghAGgiAAQhBAAhBgag");
	this.shape_31.setTransform(107.4,-71.9,0.193,0.193);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3A3839").s().p("AgCGdQiqgBh5h6Qh5h5ABipQAAirB6h5QB6h5CrABQCrAAB5B6QB6B6gCCqQgBCsh6B4Qh5B3iqAAIgCAAg");
	this.shape_32.setTransform(122.1,-146.8,0.234,0.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B3939").s().p("AGYG6QgWgYAAgoIAAjYQAAgQgCgEQgEgJgPAAIm9ABIB8DaQARAdgIAeQgIAdgcAPQgaAQgdgIQgcgIgTgeIgUgiIh7jWIh+DxQgdA4g3gLQg0gKgJg3QgCgOAFgQQAEgKAJgRIBrjNQANgZAAgcQgCigAChrQABgfgZgTQg4grg8gyQgcgXgEgeQgFgfAUgZQAUgaAegCQAegDAdAXQBFA0AcAZQAVATAYAJQAWAIAegBQB8gCD3ABQAjAAAgASQCkBgB/BHQAOAIAGAKQAGAJgBARIgBHiQAAAngUAYQgUAYghABIgCAAQghAAgUgYg");
	this.shape_33.setTransform(157.9,-80.3,0.234,0.234);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A3839").s().p("AxoXDQhRgegjhNQgjhOAghUQCMl0BDijQA9iSAHijQADhcAJiBIAPjdQACgcgMgRQhFhnAdiGIB0oWIAEgYQABgOgFgOIhXBMQiUCIidDEQhEBVhigVQhjgWgYhlQgRhIArg1QCtjYCQiKQC4ixDBhuQCkheCtgYQDNgbCgCpQA+BCBSBmICKCtQC8DmELCvQBBAqAWAxQAaA2gYBGQgEAJAEAHIAKAKQBdBbFIFSQEDEMCrCaQAQAPABAKQAAAKgRAMQgLAIgGAJQgNATgNgBQgMAAgRgRQh+hzihinIkUkjIiDiJIiEiJQgMgMgLgCQgLgCgQAHQhOAkhUg5QlOjejSkGQgCgCgBgFIgDgIIgLAHIiCJgIgBAEQgbAtAOAuQAIAaAkA3QBZCHCrETQAcAtAOAxIDJLfQAYBcgoBKQgoBKhWAYQhVAXhGgsQhIgsgZhaIi7qtQgLgqgWgiIjdlbIgJB8QgGBGgBAvQgDCUg8CSQguBzhIC6Ih0EtQgfBRhMAiQgpATgqAAQgjAAgkgNg");
	this.shape_34.setTransform(126.3,-103,0.234,0.234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3B3939").s().p("Ag2EtQhZg1i1hkQgRgKgBgIQgCgIALgQQBEhiBIhtQAxhKAThGQAUhHA1AHQAbADATAXQAUAZgFAeQgJA1ASAnQARAlAsAdQAIAGAIALIANAVQAkA5A+AZQAtASAfAVQAlAZAZAiIAAAwQgpBFhAAUQhCAUhOghQgfgNgVADQgVAEgSAZQgLASgOACIgFAAQgLAAgRgKg");
	this.shape_35.setTransform(171.4,-92.3,0.234,0.234);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B3A3A").s().p("Ai8ELQgvAAgPghQgQgiAegkIEdlJIjCgBQgLAAgRgBIgcgDQgggEgFgfQgEgkAggRQAQgJAiAAIEnAAQAVAAAOADQAvAKALAeQAKAegfAlQgsA0hABIIhtB4Ig9BFQAGAHAKABIARgCIDrABQAdAAAQAPQAQAPgBAYQgCAyg5AAIjCABIjAgBg");
	this.shape_36.setTransform(136.6,-108.8,0.196,0.196);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B3A3A").s().p("AjZFQQgeAAgVgHQgsgQgKglQgLglAegjQAkgqA3g9IBchmICxjIQgKgKgNgBQgOACgHgBIj7gDQgeAAgPgLQgTgNABgfQAAgcARgSQATgTAeAAQDngCDQADQA+ABARAqQALAagIAZQgHAVgUAXIlhGLIFHAAQAkAAATAJQAnASgBArQAAAqgpAQQgTAIggAAInDAAg");
	this.shape_37.setTransform(121.5,-117.5,0.196,0.196);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A3838").s().p("AoHahQkdhijwi1Qjxi3iqj5QiwkBhTkvQhblKAhlUQAglKCQktQCRktDujnQD2juE7iGIAfgNQASgGAPABQAtAEATAkQATAlgUAtQhOCygnCtQhFE4AzE7QAxEyCbEPQCaENDuDGQD1DMEvBjQJEC+JCjbQAngOAKgCQAtgJAdAmQAfAogaA2QhnDWiLCpQmuIJqdCGQidAfjAACQk1gCkihkg");
	this.shape_38.setTransform(117.9,-100,0.196,0.196);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B3A3A").s().p("ADoFOInOgBQgwAAgZgYQgZgYAFgoQACgOAJgOQAFgJANgOIExlWIAzg+IjmAAQg0AAgggEQgvgFgCgqQgDgzAugRQAMgEAgAAIF+AAQAeAAAOADQA5AJAPAnQAPAmgkAsQgqAziVCoIinC8IEFAAIBEgBQA7gDAgAxIAAAoQggAqg6AAIgDAAg");
	this.shape_39.setTransform(151.8,-118.6,0.196,0.196);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3B3939").s().p("AhnBpQgrgrgBg+QABg8ArgrQArgrA8AAQA8AAAsArQAsArAAA8QgBA9grArQgrArg9AAIAAAAQg9AAgqgqg");
	this.shape_40.setTransform(162.1,-106.5,0.193,0.193);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B3939").s().p("AAACTQg9AAgrgrQgrgsABg8QAAg9AsgrQAsgrA8ABQA9AAAqAsQArArgBA9QAAA9grArQgqApg8AAIgCAAg");
	this.shape_41.setTransform(133.1,-106.5,0.193,0.193);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B3939").s().p("AiuEdQgsgCgggfQghgfgCguQgCgvAfggQBahdEFkDQAOgOATgHQAQgIAMABQAuABAcAPQAcAQAPAfQAPAigDAfQgDAhgZAZQivCzizCvQgeAdgpAAIgGAAg");
	this.shape_42.setTransform(160,-113,0.193,0.193);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B3939").s().p("ABeD+Qhehcj9j+QgfggABgvQAChKBBgdQAhgPAiAHQAjAHAcAcIErEqIAqArQAeAjgBAtQgBAtgfAgQggAhguABIgDAAQgtAAgggfg");
	this.shape_43.setTransform(135.2,-113,0.193,0.193);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3939").s().p("Ap2HjQh1AAhUhEQhVhDgYhwQgFgaAAgwQgCiRABi0QABiPBYhYQBZhZCOAAITjAAQCQAABYBYQBZBYABCOQABDbgBBuQgBCOhaBYQhZBZiOAAIpxABIp2gBgAJ+FtQAsAHAigVQAbgSAagoQAlg6gEg2QgDgkADgvQABgQgGgFQgGgGgQABQiAABhwgCQgQAAgFAHQgFAFAAAQIABB0IAAA6IgBA6QgBAUAGAHQAHAIAUgBQAfgDAYAAQAYAAASADgAoUFsQAOABAFgFQAFgFAAgNQgCh8ACh7QAAgOgFgFQgFgFgNABIh8AAIglAAIg4gDQghgCgMALQgOAMACAiIAFA6QgDAzAaAuQAUAjAtAoQAKAKAUAAIBYAAIA+AAgAFVFsQAOABAFgGQAFgFAAgNIgBh4IABh8QAAgOgFgGQgFgGgPABQh6ABh6gBQgNgBgFAFQgFAFAAAOQACB6gCB5QAAAPAEAFQAFAHAQgBIB5AAIB6AAgAlnBNQgFAFABAPQABBRgBCjQAAANAEAFQAFAGAOgBQB6gBB5ABQAPABAGgHQAEgFAAgPIgBh3IABh8QAAgOgFgEQgEgGgOABQh6ABh5gBIgDAAQgNAAgFAFgArJlfQgYAOgbAkQggAqgEBAQgDAkADBKQgBAKAIACIAPABID0AAQAPABAFgFQAGgGAAgPQgCiSAChhQAAgQgHgEQgFgEgPAAIg2ACQggABgWgDIgSgBQgdAAgXAOgAlnlmQgFAGABAOQABCggCBQQAAARAHAFQAGAFAQgBIDtAAQAOABAGgFQAGgGAAgOQgCh6ACh6QAAgNgFgFQgEgGgOAAQh6ACh6gCIgCAAQgNAAgFAGgABOlnQgFAEAAANIABB7IgBB8QAAANAFAGQAGAFANgBID0AAQANABAGgGQAFgFAAgOQgCh5ACh6QAAgOgEgFQgFgGgOAAQh7ACh8gCQgNAAgEAFgAMMhIQANAAAEgFQAFgEAAgNQgCg2ACgcQAEgzgZguQgTglgrgpQgOgNgUAAQhmABgzgBQgNAAgFAFQgFAFAAANIABB8IAAB7QgBAMAEAFQAFAFAMAAIB9AAIB9AAg");
	this.shape_44.setTransform(147.6,-90.6,0.193,0.193);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AtuNwQgHgGAAgUIAB7KQALAYADAoIAHBCQDERcQgGaQDPBQEPAZIALAAQAFABADAHI7MAAQgTAAgFgFg");
	this.shape_45.setTransform(127.6,-83,0.193,0.193);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B3939").s().p("AiVeAQgCgHgGgBIgLAAQkOgZjPhQQwhmajExdIgHhCQgEgogKgYIAAkzQAHgDABgHIAAgMQAaj3BMjYQC+obHGlZQHGlaI8gqQHxgkG+DOQE9CTDzD1QDtDvCNExQCNExAdFPQAeFYhcFTQiZIwnBGBQjZC5kCByQkJB0kcAfIgpACQgZACgPAKgAAA5XQlLAAkuCAQkkB8jgDhQjhDhh7EjQh/EuABFJQABFMCBEuQB8ElDhDgQDiDgEjB7QEtB+FIgCQFNgCEtiAQEjh7DgjgQDfjgB7kjQB+ksAAlLQABlKiAktQh7kkjhjhQjhjhkjh7Qkth/lJAAIgCAAg");
	this.shape_46.setTransform(147.6,-103,0.193,0.193);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#403F3F").s().p("Ai+gIQAlgZA2gRQAfgJA9gPQAcgIAVAHQAVAGAUAYQAUAZAgAhIA4A5IgEAJg");
	this.shape_47.setTransform(102.1,-120.8,0.281,0.281);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#403F3F").s().p("AisA/QgjgTgPgpQgKgbAQgbQARgbAaADQBMAKFDAwIABAIIlCBRQgPAEgOAAQgZAAgXgNg");
	this.shape_48.setTransform(99.6,-117.7,0.281,0.281);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AiahsQCJAZCsA3Ii0CJQhKhxg3hog");
	this.shape_49.setTransform(134,-91,0.281,0.281);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3A3839").s().p("AAAEsQh8gBhXhZQhYhZAAh6QABh8BYhYQBZhXB7ABQB9AABWBYQBYBYgBB8QgBB8hXBYQhYBXh6AAIgCAAg");
	this.shape_50.setTransform(164.8,-142,0.281,0.281);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A3839").s().p("AqvOEQgUAAgJgHQgJgGgGgTQgqiAgtjJIhLlMQgEgQAJgGIASgGQHWixDym6QBdipAsjOQAEgTAIgHQAIgIATgBQHWgZF4gYQAVgBAGAIQAEAFAAAVIAANiIAANhQAAAVgHAHQgHAHgUAAQsHgCsFACg");
	this.shape_51.setTransform(173.4,-84.9,0.281,0.281);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3A3839").s().p("AuzXDQhLgQgxhEQg8hUANhdQANhfBQg5QB3hWDkicQAQgLACgJQACgJgLgRQiXjqi3lvQg1hqAqhmQArhmBrgYQAkgHAwABQAcABA4AEQCIAICMAXIAQADQAJgBADgNQAeh3BPhwQA9hWBshpIBohfQhzADiTAVQiOATiUAmQgOAEgDAFQgEAFADANQASBLhCA/QgyAwhFAgQg6AahPASQlwBUlKhsQhQgag0glQg+gsgihCIAAhLQA5hiBsgzQBJgjCMgaQEog4ErBSQABgNgDgdQgDgaACgPQATiMCFgjQHGh3HQARQCtAGCGATQAcAEAQAGQAYAIAPANQAYAWAjAMQAUAGAvAIQBfARBmAoQBTAgBnA2QB3A+CKAlQgLgygkhLQgrhYgLgiIhYBGQgMAKgHAAQgIgBgKgNQgigthNhgQgJgKAAgGQAAgHALgJQDni1DdiyQAKgIAHACQAFABAIAKQBUBrAhAnQAIAKgCAHQgCAFgJAHIhiBOQArAQAdAnQARAWAcA4QCFEKAOEeQADBOg3A9Qg4A9hIgEQgvgDg/gGIhtgOQh9gQiKhCQgUgKgIADQgKADgIAWQigGhj1FFQh9CnjMBpQgRAJgXATIgmAfIklDhQgPALgBAIQgBAJAJAPQBJB6hQB5QhQB4iFgQQhNgJg7hMQgLgPgKgCQgKgBgQAMIizB9QhxBOhCAwQhGAzhEAAQgTAAgTgEgAkjIcIC2iKQiug3iJgZQA3BoBKBygA3rrNQiIAihNBFQgvArgBAvQAAAvAvAsQApAnBCAcQBfApByATQBdAQBzACQDCgBCOgoQBDgTAsgUQA6gaApglQAbgYALgXQAPgdgFggQgDgPgGgHQgHgIgRgCQhqgIg3hiQgPgbgegIQiqgvisAAQihAAiiAqg");
	this.shape_52.setTransform(141.5,-103.1,0.281,0.281);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3B393A").s().p("Ah1B4QgwgxgBhGQAAhEAxgxQAxgyBEAAQBEgBAyAxQAxAxgBBFQABBGgwAxQgxAwhFAAIgBAAQhFAAgwgvg");
	this.shape_53.setTransform(223,-122,0.277,0.277);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3B393A").s().p("Ah1B4QgwgwgBhGQAAhFAwgxQAxgxBFgBQBDgBAyAxQAxAxABBFQAABFgwAxQgxAxhFAAIgBAAQhFAAgwgvg");
	this.shape_54.setTransform(204.1,-122,0.277,0.277);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3B393A").s().p("AgBCnQhEgBgxgyQgxgyAAhDQABhGAxgwQAxgwBFAAQBGABAwAxQAxAxgBBFQAABEgyAyQgyAxhCAAIgCgBg");
	this.shape_55.setTransform(213.6,-112.6,0.277,0.277);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3B393A").s().p("AAACnQhEABgygyQgxgyABhEQAAhFAxgxQAxgxBFABQBFAAAxAxQAwAxABBEQAABFgyAxQgxAyhEAAIgBgBg");
	this.shape_56.setTransform(213.6,-131.4,0.277,0.277);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3B393A").s().p("AABIUQhhgBhMg+QhNg/gUhgQgDgRgHgIQgIgIgRgEQhngUg/hNQg+hNAAhnQABhkBBhLQBBhLBngSQASgDAGgMIAGgYQAoijCfgtQCfgsB4B/QA0A3AMBHQADATAIAIQAHAJAUADQBiAUA+BPQA+BNgBBkQgBBgg9BLQg8BLheAVQgVAEgJAIQgKAJgEAWQgUBdhOA+QhOA+heAAIgCAAgAjABgQAtACAYAZQAYAaABAsIAAAiIABAiQAEAqAcAaQAbAZAoAAQAqAAAbgaQAcgaACgqIABgiIABgiQADgqAZgYQAZgXArgCIAkABQAVAAAOgCQApgEAagdQAagdgCgoQgCgpgagbQgbgagqgCIg4AAQhogCgChpQABglgCgTQgCgrgbgaQgagZgqgBQgogBgcAZQgcAZgFAqQgCAXABAtQgBAugZAZQgZAagtACQgwgBgYACQgoADgZAdQgZAcABAnQABAlAaAbQAaAaAmADQAMABAYgBIAkABg");
	this.shape_57.setTransform(165.7,-122,0.277,0.277);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3B393A").s().p("A6qS7Qhjg9gziAQg9ibgBjGQgHrfEep9QBZjGCUibQDjjtFfArQBzAOCKAgQBfAWCaArQClAtCqgCQChgDCsguQCVgoBLgSQB9geBmgQQGQg9D+EyQBkB4BNCbQBACCA4CtQCAGKAjGlIAAAMQABAGAHACIAAFYQgLAdgHAzQgIA9gFAVQghB2gsBFQhBBnhoAkQhpAliDghQhngahtg9QhMgrhzhTQiahuhghgQiwixkLg0QmshTluCGQiAAwhlBeQiLCAhuBUQiMBriHBGQg/AhgyASQg+AWg6AGQgaADgYAAQhpAAhRgygAE1GiQCjAgB/A8QCOBDBrBrQBpBqCOBnQBlBIA+AkQBdA1BXAXQBjAaA9ggQA9ggAjhfQAahHAMhUQAJhGABhZQACmjiGniQgsifg2h/Qg/iShUh3QjXk0l2BAQheAQiIAhQiZAnhMARQiZAkiHAFQiVAFiMghIjTg0QiEghhPgRQhjgWhIgFQhdgHhQARQh2AahgBPQhQBDhKBzQhPB5g9CaQgwB8guCqQh2G1ADGWQABBaAIBDQALBUAaBGQAiBYA8AgQA9AfBbgXQBjgaBshCQBig8BnhRQBUhCBnheQBVhOBGgpQEaikGNgHQC/ACCMAcg");
	this.shape_58.setTransform(190.5,-115,0.277,0.277);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F8B019").s().p("AAjAiQgZgrg+gZQA0gGAqAnIALAFQgBAOgOASg");
	this.shape_59.setTransform(-164.1,-130,1.244,1.244,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1F4166").s().p("AgRAAQAQgEASgEQAAAHgFAFQgGAEgHAAQgKAAgGgIg");
	this.shape_60.setTransform(-130.3,-127.4,1.244,1.244,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F5AE97").s().p("AgsAHQAlgMA0gIQgTATgNAFQgGADgJAAQgRAAgZgHg");
	this.shape_61.setTransform(-131.7,-127.7,1.244,1.244,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1F4166").s().p("AgTAQQgSgDgQgGQANgFAZgFQAigJAjgEQgVAYgRAHQgGACgKAAQgIAAgLgBg");
	this.shape_62.setTransform(-131.9,-127.4,1.244,1.244,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1F4166").s().p("AgeAFQAdgJAggEQgNAMgJAEQgEABgGAAQgLAAgSgEg");
	this.shape_63.setTransform(-106.6,-123.4,1.244,1.244,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIgvAyg");
	this.shape_64.setTransform(-158.3,-147,1.244,1.244,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1F38A8").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQADgOAIgPQAVANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAJgJABgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_65.setTransform(-123.4,-123.5,1.244,1.244,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#424EBD").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQALgwAxgiQBCAIBlgTQBUgQB8gnIgLCrQgBAKgHAHQgHAHgKABIgQABIgDAAQgLAAgIgKg");
	this.shape_66.setTransform(-123.4,-123.5,1.244,1.244,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBC156").s().p("AiEATQgIgKgIgHQAYgDA7gPQA2gNAdgEQBfgMAkA9IjwATIgFABQgVAAgPgRg");
	this.shape_67.setTransform(-123,-114.5,1.244,1.244,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#424EBD").s().p("AEFKpQAuhpASiHQAfjihCjgQhFjuiki3Qh8iLiPhJQE+Gkg2JPQAHiegljQQhImejZj6QA+CJAjC6QAvD3guClQAQiegnjGQgfibg5iUQAYBvgPCDQgOB+gnA+QgagKgTAAQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgCgUgIgfg");
	this.shape_68.setTransform(-211.6,-39.7,1.244,1.244,0,0,180);

	this.instance = new lib.Path_1_0_3();
	this.instance.parent = this;
	this.instance.setTransform(-211.4,-18.4,1.244,1.244,0,0,180,36.6,56);
	this.instance.alpha = 0.5;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1F196E").s().p("ADoJJQg8iehng3QgViAguhCQgxhFhyg2QgQhYhChDQg+g/g+gCQA2hRADiyQACi6g7h5QAqgEBYAqQBjAwBjBTQEJDeBeFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_69.setTransform(-211.6,-39.7,1.244,1.244,0,0,180);

	this.instance_1 = new lib.Path_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146.7,-0.2,1.244,1.244,0,0,180,8.3,33.4);
	this.instance_1.alpha = 0.27;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1B57B3").s().p("AAaDeQAfhJgKg3QgsghAYg2QARgiAJgWQARglAFgkQAHhMgUg5QgYhFg6gMQgjgHgkAkQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA5gIBMQgEAkgRAlIgaA4QgYA1AsAiQAKA3ghBOQgoBegEAwIgNADQAFgnAnheg");
	this.shape_70.setTransform(-154.7,-4.2,1.244,1.244,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#424EBD").s().p("AgWDbQgFhHgggqQgshcgMhTQgMhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3ghBOQgpBfgEAvIg3APQAOhXgDg3g");
	this.shape_71.setTransform(-151.3,-3.4,1.244,1.244,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#424EBD").s().p("AAuAhIhpAAIgGgCQgDgOgJgOIADAAICYgjQACAbgKATQgKATgMAAIgCAAg");
	this.shape_72.setTransform(-144.3,43.6,1.244,1.244,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F8B019").s().p("AgRgEQATgIAkgDQAJAOAEANIgZgGQgigDgqANQASgPAPgFg");
	this.shape_73.setTransform(-129.8,46,1.244,1.244,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2347BA").s().p("AgVACIAqgDIgFABQgEACgGAAg");
	this.shape_74.setTransform(-208.1,47.1,1.244,1.244,0,0,180);

	this.instance_2 = new lib.Path_1_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-200.1,6.5,1.244,1.244,0,0,180,12.6,32.6);
	this.instance_2.alpha = 0.27;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#424EBD").s().p("AiwFHQAAgKgCgNQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQALgIgBgOQgBgNgNgGIhNgdQgfgNgTgbQgSgcAAghIADjvQAAg9ArgsQAsgrA+AAQA7AAAsAqQArArABA9IAAAFIgvDiQgBAKAFAHIBjCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_75.setTransform(-207,6.6,1.244,1.244,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8B019").s().p("AAugTIAPgDQAKANACAdIgFAAQgdgMgnACQgiABgmAMQAvguBHAEg");
	this.shape_76.setTransform(-178.6,44.8,1.244,1.244,0,0,180);

	this.instance_3 = new lib.Group_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-193.6,-58.5,1.244,1.244,0,0,180,53.3,74.4);
	this.instance_3.alpha = 0.398;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FBC156").s().p("AAALgQg7AEgsgSQgvgSgshTQgzhhgegaQgQgNgTgKIgngRQg5gXgfgRQgwgbglgnQgTgUgHgcQgGgcAJgaQAXhKARhuQgBhzAUiqQAajDALhiIAUAAQAABRgPDdQgMC6AFA1QAGA9ClCuQBkBpAUAXQA7BDAMAhQAPAoA2ArQAxAoAiAIQAzALBCABQBeABAvgbQBFgmAhgkQAwg1AJhLQAJhHgtiZQgehngghLQg6hpguhZQhbiugKhKQgLhQAVg+QAKgeAnhFQASggAxgrQhLBMgbBZQgiBwA0BxQAeBBBHB3QBYCTAcAzQCFD4gUCqQgIBEgsBBQguBDhIAuQhxBHiDAAQhCAAhFgSg");
	this.shape_77.setTransform(-196,-59.5,1.244,1.244,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1B57B3").s().p("AFFGFQAAiRhGhvQhEhuhngYQgXgFgmgXIhHgtQhjg8hGACIgVADQg8icAMjIIgBgxQgBgfADgUIg2AAIABgUIBGAAQgDATAAAgQACAlgCAMQgKDJA7CbIAVgDQBGgCBjA8IBIAtQAmAXAWAFQBoAYBEBuQBEBvAACRQAACCg4BpIgIACQAxhjAAh2g");
	this.shape_78.setTransform(-182.1,-47.9,1.244,1.244,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#424EBD").s().p("AhZAEQAdjZANhuIBEAAQgDATABAgQABAlgBANQgND8BiC2IjNBvQgJiCAVi9g");
	this.shape_79.setTransform(-146,-83.1,1.244,1.244,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#424EBD").s().p("AkTMFQAphHBbiLIBSh8QAsALAtgcQA1ggAVhEQA4i2jLlCQiVjqBtjKQAohKBBgzQA7gsArgDQhnA4g8BsQhUCTBGCZQAdBABGB3QBZCTAcA0QCFD4gVCpQgHBFgtBBQgtBChJAuQhwBIiDAAQhBAAhGgSg");
	this.shape_80.setTransform(-230.2,-64.1,1.244,1.244,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#424EBD").s().p("AA5GPQgvgSgrhTQgzhigegaQgQgNgTgJIgngRQg5gXgfgSQgwgbglgnQgTgUgGgbQgHgbAJgbQAXhHAPhhIAXirIBJBBQArghA4gCQBGgDBiA8IBJAtQAmAXAWAFQBnAaBEBtQBFBvAACQQAACCg4BpQhgAdguAHQgbAEgZAAQguAAglgOg");
	this.shape_81.setTransform(-175.9,-19.3,1.244,1.244,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1F4166").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAjgRAnQgJAVgRAiQgYA2AsAhQALA3giBOQgpBfgEAvIg2APQANhYgDg2g");
	this.shape_82.setTransform(-146,-3.4,1.244,1.244,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1F4166").s().p("AhZAMQAVgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgrANQASgQAPgGg");
	this.shape_83.setTransform(-133.5,43.8,1.244,1.244,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1F4166").s().p("AgzAFIDeg1IAABdIjIAAQgegLgnABQgiACgmAMQAugwBJAEg");
	this.shape_84.setTransform(-183,41.7,1.244,1.244,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1F4166").s().p("Ai1FHIC2h3Ii5hJIADk5QAAg9AsgsQAsgrA9AAQA8AAAsArQAsAsgBA9IgwDuIB3C6IiqBRg");
	this.shape_85.setTransform(-202.3,6.6,1.244,1.244,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_86.setTransform(231.8,-119.6,0.162,0.162);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3B393A").s().p("AyBd+QjogRimiDQi1iRAAjRQAAjRC1iQQCpiHDvgOQDvgOC8BxIAjAVMAAAghFQAAhDAUgbQAUgcA/gUMAhegKpIAPgDQAJgDADgHIA4AAQAvARAUAlQASAgAAA2IgCTAQAAK5ADIGQACFtlNCKQjKBUi8gUQjCgUisiCQi6iNACjVQABjUC6iRQCpiDDrgOQDqgOC7BvIAQALQAKAGAJAAQAFgHAAgKIgBgRIAByXQAAgZgFgGQgHgIgaAIQtWERwRFKQgaAIgKAMQgKAOAAAcIAAMpQAAH3ADEzQABCbhGBzQhDBviHBNQiiBbjDAAQgfAAgggCgA2PTYQhcBPABBjQABBkBdBOQB9BoC+ACQC/ADB/hlQBqhTgBhrQgBhshrhQQh6hbi7gGQjKAHh6BogAMeIHQh0BTgBBwQAABvByBVQB9BcCzgBQCzAAB8hdQBwhTAAhvQAAhuhwhSQh9hbizgBQiuAAh+BZgAXD5yQquDbxkFlIhDAQQgnAKgPASQgQASADAqQABAYAEAvIAAFyQAIACAJgCIANgEId4pfQAVgHAIgLQAHgKAAgWQgCjYACjYQAAgZgIgFQgDgCgFAAQgJAAgOAEg");
	this.shape_87.setTransform(176.1,-105.3,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_3},{t:this.shape_76},{t:this.shape_75},{t:this.instance_2},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_1},{t:this.shape_69},{t:this.instance},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").p("AIcqsQgwAAgvAIQhDhJhjgqQhmgrh1AAQh4AAhpAuQhmAshDBNQhRgWhZAAQjWAAiWB0QiXBzAACkQAAB3BUBiQBSBfCJAvQAlBeBYBEQgqD8iRDXIhRB5IEOjbQCTh2B8iSQAcADAfAAQB/AABxg0QBvA0CAAAQCZAAB8hHQB6hGAzhyQCZgjBihmQBjhoAAiFQAAihiNhzQiMhyjHAAg");
	this.shape_88.setTransform(138.5,-84);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AsJLAQCQjXArj8QhZhEglheQiIgvhThfQhUhjAAh2QAAikCXhzQCWh0DWAAQBZAABRAWQBDhNBmgsQBqguB3AAQB0AABnArQBjAqBDBIQAvgHAwAAQDHAACMByQCNByAACiQAACEhjBpQhiBmiZAjQgzBxh6BHQh8BHiZAAQiAAAhvg1QhxA1h/AAQgeAAgdgDQh9CSiSB2IkODbg");
	this.shape_89.setTransform(138.5,-85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").p("AIcqsQgwAAgvAIQhDhJhjgqQhmgrh1AAQh3AAhqAuQhmAshDBNQhRgWhZAAQjWAAiWB0QiXBzAACkQAAB3BUBiQBSBfCJAvQAlBeBYBEQgqD8iRDXIhRB5IEOjbQCSh2B9iSQAcADAfAAQB/AABxg0QBvA0CAAAQCZAAB8hHQB6hGAzhyQCZgjBihmQBjhoAAiFQAAihiNhzQiMhyjHAAg");
	this.shape_90.setTransform(130,-75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AsJLAQCQjXArj8QhZhEglheQiIgvhThfQhUhjAAh2QAAikCXh0QCWhzDWAAQBZAABRAWQBDhNBmgtQBqgtB3AAQB0AABnArQBjApBDBKQAugIAxAAQDHAACMByQCNByAACiQAACEhjBpQhiBmiZAjQgzByh6BFQh8BIiZAAQiAAAhvg1QhxA1h/AAQgeAAgdgDQh9CSiSB2IkODbg");
	this.shape_91.setTransform(130,-76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).to({state:[{t:this.shape_91,p:{x:130,y:-76}},{t:this.shape_90,p:{x:130,y:-75}}]},1).to({state:[{t:this.shape_91,p:{x:127.5,y:-75}},{t:this.shape_90,p:{x:127.5,y:-74}}]},1).to({state:[{t:this.shape_91,p:{x:117.3,y:-77.9}},{t:this.shape_90,p:{x:117.3,y:-77}}]},1).to({state:[{t:this.shape_91,p:{x:133.6,y:-82}},{t:this.shape_90,p:{x:133.6,y:-81.1}}]},1).to({state:[{t:this.shape_91,p:{x:127.6,y:-76}},{t:this.shape_90,p:{x:127.6,y:-75}}]},1).to({state:[{t:this.shape_91,p:{x:134.9,y:-92}},{t:this.shape_90,p:{x:134.9,y:-91.1}}]},1).to({state:[{t:this.shape_91,p:{x:127.6,y:-75}},{t:this.shape_90,p:{x:127.6,y:-74}}]},1).to({state:[{t:this.shape_91,p:{x:148.6,y:-77}},{t:this.shape_90,p:{x:148.6,y:-76.1}}]},1).to({state:[{t:this.shape_91,p:{x:153.6,y:-80}},{t:this.shape_90,p:{x:153.6,y:-79.1}}]},1).to({state:[{t:this.shape_91,p:{x:191.5,y:-91}},{t:this.shape_90,p:{x:191.5,y:-90}}]},1).to({state:[{t:this.shape_91,p:{x:205.5,y:-93}},{t:this.shape_90,p:{x:205.5,y:-92}}]},1).to({state:[{t:this.shape_91,p:{x:202.6,y:-84}},{t:this.shape_90,p:{x:202.6,y:-83.1}}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(2,1,1).p("AELi5IiMBQIgoh4AkKBPIBmCTQAAAAB9hQ");
	this.shape_92.setTransform(-12.7,-7.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(2,1,1).p("AEGkxIiMBQIA1CxIjliCAERFaIhph9Qh4BnAAAAAkQgoIBnCSQAAAAB9hQAB6jhIgoh4");
	this.shape_93.setTransform(-12.2,4.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(2,1,1).p("AB6jGIA1CyIjliCIgbjfQgBAAhaAjAEGkWIiMBQIgoh4AkQgNIBnCTQAAgBB9hPIBcEpQAAABB4hnIBpB9");
	this.shape_94.setTransform(-11.9,1.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(2,1,1).p("ADdjXIiMBQIgoh4ACGApIhVgvIiQhSIgcjeQAAgBhaAkABRiHIA1CwADnG0Ihph9Qh3BngBAAIgbhbIgchaAE6DRIi0ioAk5AxIBnCTQgBAAB+hQIAkB1AkTGoID+hlAAxgGIhiDvAh7k2IDUh9");
	this.shape_95.setTransform(0.2,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[]},1).wait(9));

	// Layer 1
	this.instance_4 = new lib.EggOfir1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.2,-1.4,0.23,0.23,0,0,0,1.3,2.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EE4544").s().p("AgCAJIgEgBQgIgCAAgGQABgFAIgCQAFgCAGACIABAAQAGADABAEQACAFgHACIgJACIgCAAg");
	this.shape_96.setTransform(6.3,-16.9,0.789,0.789);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EE4544").s().p("AgCAMIgFgBQgLgDAAgIQABgGAKgDQAIgDAHADIABAAQAIAEACAFQACAHgJADQgHACgFAAIgCAAg");
	this.shape_97.setTransform(-9.8,-16.3,0.789,0.789);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C2D00").s().p("AANAPQgCgCgCgIQgCgGgDgDQgEgDgGAGIgJAKQgDACgCgDQgDgFAKgLQALgKAHADQAHACAGAKQAFAJgCAHQgBABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCABIgDgCg");
	this.shape_98.setTransform(4.5,-19.4,0.789,0.789);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6C2D00").s().p("AgfAWQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgOAIgLQAKgMANgCQANgCAMAKQALAIACANQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgGgBgDgFQgIgOgJgCQgLgDgJAKQgFAFgHAPQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_99.setTransform(-6.2,-19.6,0.789,0.789);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B3B300").s().p("AgWgKQALgfAggCIAGAAQgQADgJAQQgIARAAAeIAAANIgFAJQgXgYAMgfg");
	this.shape_100.setTransform(6.7,6.1,0.789,0.789);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B3B300").s().p("AgggKQANgcAbgBQALgBAOAHIAAAAIACABIAEAEQgYgDgSAOIgBAAIgCAAIAAACIgHAGQgUATACAeQgPgYAOgag");
	this.shape_101.setTransform(-13.9,7.2,0.789,0.789);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B3B300").s().p("AgCgBIACAAIADADQgDgBgCgCg");
	this.shape_102.setTransform(-12.6,-11,0.789,0.789);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B3B300").s().p("Ag7EAIAfg3QASghARgTIAEABQADABACgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBgBAAQgugWgeg8QgYgygIg9QAOgFAMgGIABgBQAGAIAJADQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQgNgKgEgHQgHgLABgUIABAAIACAAIAAgDQgCgDgFgEIgJgGQgHgIABgSIAAgCIgCAAIgLgDQAag/A7gkQA5gkBDADQg6AMgfAhQgaAegJAwQgHAkACA2QABAsAIAXQAFATASAbIADAGQgFACgFAAQgHAAgKgHIgCAAIAAACQADAGAIAEQAIACAIgBQAGALAKAAQAYAhAiAeQgMAmAUAsQgZAXgHAnQgHgRgPgJIgBgLQgBgIADgMQABgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgGAOABAOQgKgEgLAAQgRgBgPAMQgNAMgGASQgFgMgLgPgAgQDWQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQADAFAFgBQAFgBABgFQABAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgCAAQgEAEgGgEIAAAAIgBABg");
	this.shape_103.setTransform(-13.9,-15.6,0.789,0.789);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C2D00").s().p("AAJAUIgJgVQgIgLgDgHIAAgBIACAAQAPAPAGAYQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape_104.setTransform(13.4,-1,0.789,0.789);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6C2D00").s().p("AgGAdQgFgdAQgcIACgBQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQgJAWgBAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_105.setTransform(-22.4,-1.2,0.789,0.789);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6C2D00").s().p("AARAFQgFAAgcgFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAWADALACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBAAg");
	this.shape_106.setTransform(-22.8,-24.7,0.789,0.789);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C2D00").s().p("AgUABIgBgBIABgBIApABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABgBAAIgNAAIgcgBg");
	this.shape_107.setTransform(-23,-22.2,0.789,0.789);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6C2D00").s().p("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");
	this.shape_108.setTransform(-5.6,-1.3,0.789,0.789);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C2D00").s().p("AgJAMQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQABgIAGgGQAFgHAJgBIABABQABABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgOAHgDANQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_109.setTransform(-5.8,-10.5,0.789,0.789);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C2D00").s().p("AgDADQgBgEAEgDIADAAIABACQAAAFgEACIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_110.setTransform(8.2,-14.3,0.789,0.789);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C2D00").s().p("AAAAGQgEgFADgGIABgBIABABIACAIQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgBABIgBgBg");
	this.shape_111.setTransform(-0.7,-14.1,0.789,0.789);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C2D00").s().p("AgPAQQgIgIAFgKQAFgLAMgDQAMgCAFAIQAHAJgEAHQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgDgKQgDgGgHADQgIADgDAFQgCAFACAIQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgBAAIgCgBg");
	this.shape_112.setTransform(-0.8,-15.1,0.789,0.789);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C2D00").s().p("AgGAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAABABQAAAAAAAAQAFADAEgDIACAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAEgGAAIAAABQgEAAgCgEg");
	this.shape_113.setTransform(-14.7,1.4,0.789,0.789);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6C2D00").s().p("AAFAFQgEgCgBgDQgHADgFgFIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQAFADAGgDQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQADAFAHgBQAAgBAAAAQABAAAAABQAAAAAAAAQAAAAABABIgBACIgFABIgDgBg");
	this.shape_114.setTransform(5.1,-0.7,0.789,0.789);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6C2D00").s().p("AgPAJQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAIABAGgGQgBgBgEgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAGAGAKgFQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgFAEgIAAIAAAAQgCAGgFACIgGABIgGAAg");
	this.shape_115.setTransform(7.8,5.5,0.789,0.789);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6C2D00").s().p("AgFABQgGAAgFgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAFAEAJgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDABQAHAEAHgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgFAEgGAAQgHAAgDgGg");
	this.shape_116.setTransform(-13.1,6.3,0.789,0.789);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6C2D00").s().p("AAMAKQgHgCgDgHQgHABgIgCQgJgDgDgGIAAgCIACAAQALAHAIAAQAEAAANgGQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgDAGgHABQAFAHAMgBQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQgDACgDAAQgDAAgEgCg");
	this.shape_117.setTransform(-13.3,-11.1,0.789,0.789);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFD68E").s().p("AhMgSQAUAAASgFIAcgKQAPgHAMACQAPADAaAgQAFAGAOAcQgfgSgcAPQgFADgLgCQgLgBgEABQgNADgJAHQgLgagegfgAgHgPIAAABQADAHAGAKIAKAWQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgHgYgPgPIgBAAIAAAAg");
	this.shape_118.setTransform(13.1,-1.4,0.789,0.789);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFD68E").s().p("AgQASQAFABAFgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgLAAIgDgTQAIgBAGgEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgOAFIgFgQQASgFAUgMQADAHgGAKIgJAOQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIABgBIAOAEIACABIgBACIgKANQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAMAIQgKAIgKAEIgVAEQAAgMgBgMg");
	this.shape_119.setTransform(10.8,-25.5,0.789,0.789);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C3F848").s().p("AAogIQgOgLgXAIIgiAMQgUAGgRACIAAAAIgJgJQAWgCAWgKIAYgNQASgLAbAQQAcAQAOAjQgPgYgXgPg");
	this.shape_120.setTransform(12.3,-3.8,0.789,0.789);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4F3867").s().p("AgeAHQACgNAFgJQAHgQASABQAKABAWAHIgBAAQgnATgbAiIADgYg");
	this.shape_121.setTransform(-17.1,-34.9,0.789,0.789);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFD68E").s().p("AhCA8QAYgLAMgTIAGADQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgagUQgNgLgFgOIAoAEIAEAGQABABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgOgbQgGgPgCgNQAIADALAJIARANQAVANAVAAQgDAJAFAMQAFAKALAGQgEAWALASIAAAAQgkAMgeADIgTABQgYAAgXgGgAAAAfIABACQAcADAOgCQABAAAAAAQAAgBAAAAQAAAAgBgBQAAgBgBAAIgpgBIgBABgAAFgBQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAdAGAFAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQgKgDgXgCIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAg");
	this.shape_122.setTransform(-24.7,-24.8,0.789,0.789);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C3F848").s().p("AirEBIAeg4QASghASgTIAFACQADAAABgDQABgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgwgWgeg8QgYgxgHg+QANgEAMgGIABgCQAHAJAJACQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAAAAAAAQgNgLgFgHQgGgKAAgVIABABIACgBIABgCQgCgDgGgEIgIgHQgIgIABgSIAAgBIgCAAIgLgEQAfhKBLgkQBKgkBMAXQAiAKAhAeQAdAcATAiQASAfADAuQACAWgCA8QgLABgHAHQgIAHADAKQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAgBQACgNAQgEIACgBQAAAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAQAFABADAIQADAIgIAIQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAABABAAQAAAAABAAQABAAAAAAQABAAAAAAIABABQAdAAACAbQACAWgNAXQgKAQgWAFQgKACgeAAQhFABg8gvQgDgCgCACQgBACABADQAcAiA7ANQARAEASABQgrAbhCgQQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQBIAVApgbIAiApQAUAYAIAVQgNgEgMACQgOACgLAIQAAgLgHgLIgCgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIAEAOIABALQgNALgEASQgIgcgVgUQgWgWgdgCQgjgCgYAYQgXAXgHAkQgHgQgPgJIgBgMQgBgIAEgMQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQgGAPACAOQgKgEgMgBQgSgBgOANQgOALgFASQgGgLgKgPgAiBDWQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQADAEAFgBQAFAAACgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAQgFAEgFgEIgBgBIgBABgACEDDQAFABAEgCIAAgCQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgGACgEgGQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgGADgFgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAACQAGAFAHgDQABAEAEACgAgOA8QgGAHgBAJQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQADgOAOgGQAAgBAAAAQAAAAAAAAQABAAAAgBQgBAAAAAAIgBgBQgIAAgGAHgAhdBEQAHADAGgDQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgMABgFgHQAHgBADgGQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgOAHgEAAQgIAAgLgIIgCABIAAACQADAGAJADQAIADAIgBQADAGAHADgAA1APQgDAHAEAEIADABQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgJIgCgBIgBABgAAzgJQgLADgFAKQgGALAJAIQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgDgIADgFQACgGAKgCQAHgDACAFIAEALQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQADgIgGgIQgEgHgJAAIgGABgACnAMQgFADABAFQAAAAABABQAAAAAAABQAAAAABAAQABAAAAAAQAFgCAAgGIgBgCIgCgBIgBABg");
	this.shape_123.setTransform(-5,-15.6,0.789,0.789);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4F3867").s().p("AgdASQAGgQAMgOIAHgHQAHgIANALQAIAGAIAQQggAEgfANg");
	this.shape_124.setTransform(-10.9,-39,0.789,0.789);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4F3867").s().p("AgNgGQABgJAJgEIARgGQgQAZgJAaQgEgVACgLg");
	this.shape_125.setTransform(-21.4,-30,0.789,0.789);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C3F848").s().p("AgsgJQAMggAggCQANgBAMAIQALAHAIANQAHANgDAQIgJAdIgIgDQgEgDgFgGIgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgJAJIgJAHIgHgFQgDgCgGgIQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQgCACgDAGIgGAJQgWgYALgegAgXgBQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAHACAFgCQAGgCACgGIAAAAQAHABAFgFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABQgJAEgHgFQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAEAEACAAQgHAHgIAAIgBgBQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_126.setTransform(8.4,6.1,0.789,0.789);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4F3867").s().p("AgLASIgHgTQgDgJgBgOQAUAeAZAKIgJAJQgNgCgMgFg");
	this.shape_127.setTransform(-15.7,-5.3,0.789,0.789);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C3F848").s().p("AgQgeQAOgIASANQAKAHASAQQAWAQAXgCIgJAOQgogNgcgUQgHgGgHAAQgEAAgOAEQgnAMgdAfQAWgkAygcg");
	this.shape_128.setTransform(-21.9,-3.9,0.789,0.789);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4F3867").s().p("AgCAZQgJgFgCgHQgBgGADgKQADgNAIgTQACAgAMAhIAAABIgCAFg");
	this.shape_129.setTransform(-21.7,-16.1,0.789,0.789);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4F3867").s().p("AgEAZQgLgGAAgLQgBgHADgLIADgUQAIAXAHAQIAMAWQgQgDgFgDg");
	this.shape_130.setTransform(-19.4,-10.7,0.789,0.789);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFD68E").s().p("AApAjQgLgCgKABQgTAEgFAFQgHgagcgHQgbgGgVAQIACgEQAhgnAtgQQAOgFANAGQAIAEAQAMQAUAMAYAGIgHAKIgWAlQgGgGgMgCgAAKgdQgQAdAFAcQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABggAKgWQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIAAAAIgCABg");
	this.shape_131.setTransform(-22.8,-1.1,0.789,0.789);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C3F848").s().p("AAaApQgEgDgCgHIgCAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQgEACgHAHIgHAFIgIgHIgHgKQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAABAAAAQgBgBAAAAQgBAAAAAAQgBgBAAABQAAAAgBAAQgDACgEAFIgGAIQgSgYAMgdQANgdAegCQAKgBAOAHIAAAAIACABQALAHAHANQAIAOgFARQgBAHgLAYgAgPgWQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAABAAQAEAGAHAAQADAGAGAAQAHAAAFgEQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAABgBAAQgGAEgIgEIADgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgIACgGgEIgBAAIgBAAg");
	this.shape_132.setTransform(-13.2,7.6,0.789,0.789);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFD68E").s().p("AgyA3IgegYIgCgKQAZhOA5gBQA8gBAWBVQgJAIgFABQgHACgKgFIgpgYQgCgCgDADQgQARgSAWQgHAKgCABIgCAAQgEAAgGgEg");
	this.shape_133.setTransform(-2.6,5,0.789,0.789);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F27D7B").s().p("AgKAMQgFgCgDgEQgCgCAAgEQABgDADgCIAHgFQAGgDAIAAIADABQAJAAADAIQACAEgCADQAAAFgHAEQgGACgHAAQgEAAgGgCg");
	this.shape_134.setTransform(4.7,-38.5,0.746,0.746);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F27D7B").s().p("AgGANIgDAAQgJgDgCgHQAAgDACgEQAAgGAIgCQAGgBAGABQAGABAFADQADACAEAEQACACgCAEQgBADgDACIgHADQgFACgEAAIgGgBg");
	this.shape_135.setTransform(22,-39.5,0.746,0.746);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_136.setTransform(5.9,-43.1,0.746,0.746);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgEAFQgFgFAEgDQAEgFAEADQAHADgFAGQgCADgDAAQgCAAgCgCg");
	this.shape_137.setTransform(19.2,-43.8,0.746,0.746);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#451738").s().p("AAAAfQgIgCgFgJQgCgFgBgMQgCgMADgIQAGgTANAIQAMAIACAPQABAMgDAKQgDAOgLAAIgCAAg");
	this.shape_138.setTransform(18.9,-42.8,0.746,0.746);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#451738").s().p("AAAAfQgIgCgFgJQgDgHgBgJQgBgOACgHQAHgSANAHQAMAIACAPQABAMgDAKQgDAOgLAAIgCAAg");
	this.shape_139.setTransform(5.8,-42.2,0.746,0.746);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B3B01B").s().p("AgJAYIgOgZIAagOIAMgIIAJAGQgWAVgKAUg");
	this.shape_140.setTransform(-6.5,-50.4,0.746,0.746);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B3B01B").s().p("AgWgTQAIgCAFgEQAOAMASAKQgPAcgFABQgMgcgNgRg");
	this.shape_141.setTransform(24,-50.8,0.746,0.746);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B3B01B").s().p("AgXgNQADgEAFgJIABgDQASAaASAQIABARQgNgLghggg");
	this.shape_142.setTransform(25.6,-25.4,0.746,0.746);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#B3B01B").s().p("AgjgGIgEgFQACgUgCgUIAQAeQAbAtAkAYIgEAEQgrgdgcgdg");
	this.shape_143.setTransform(-10.5,-26.5,0.746,0.746);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B3B01B").s().p("AALA3QgGgBgHgDIgNgFIgLgfQgLggABglQAPAEAIARQADAHAEANIAGAUQAKAaAcANQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBACQAAADgMAAIgNAAg");
	this.shape_144.setTransform(16,-10.9,0.746,0.746);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B3B01B").s().p("AAoBsIgZgnQglhBgMgwIgHgdQgCgSADgNQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQADAoAXAmQAUAhAjAcIgBACQgJAnAHAjg");
	this.shape_145.setTransform(-20.3,-9.6,0.746,0.746);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B3B01B").s().p("AAwBDIgRgFQgPgDgQgGQgngNgbgdQA9gYAKg1QAKAEAHAKQANASgCAbIgCAXQAAAOAGAIQAEAGAOAHIAMAGIgEABIAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQADAGgHAAIgFAAg");
	this.shape_146.setTransform(16.5,7.5,0.746,0.746);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B3B01B").s().p("ABrHpQgLgBgUgEQgbgGgXgKQgZgLgOgWQgNgUgDgcQAQAIANAEQACABABgDQABgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQhIgngngqQgdgegEgsQgEgnAOgsQAVhAA0hEQAngxA/g/IABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgrgxQgWgcgLgcQgWg7AahIQATg2AsgqQArgoA4gTIAIgDQgyAbghAwQghAwgIA4QgEAfAFAiIAAAAQgFgCgGgIQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQADAKANAFQgBAGAEAEQAKAqAWAkQAXAlAiAZQguAjgnAlIgKAKIgGABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIAAAAQgWAaADAWQACAQAOATIASAVQgJAAgDgJQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQABAHAFADQAGAEAGgDIAAgBIAYAYIAYAXIgBACQgDAGgFAFQgLgPgggDQgfgDgSgZQgMgRgKglQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABQADAqAaAcQAKALAOAFQAKAEAYACQAVADAIANQADAFAEgFQAFgGAEgKIADABIAAABQgIAbADAfQgggNggAFQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAagBAfALIgIgBQgQgBgMAKQgOALABAPQABAIAGAHQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAABAAQAAABAAAAQACAHAHAAIACgBIAaAZQALAMADARQAEASgGAPQgEANgPAYQgMAWAGAPQAIAWAnAHQAWAEAVAAQgEADgEAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAEAKgSAAIgHAAgAAhFkQAAAAAAAAQAAAAgBABQAAAAABABQAAAAAAABQAGAJAGACQAIADAEgIQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgHAIgKgPIgCgBIgCABgAgQEgQAIABAIgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAABQgMADgJgIIAFgEQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgSAKgKgPQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQACAHAGAEQAHAEAHgBQAEAHAJACg");
	this.shape_147.setTransform(-6.1,-20.2,0.746,0.746);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#451738").s().p("AAUAQQgYgGgRgXIAAgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAPASAaALQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBAAIgBAAg");
	this.shape_148.setTransform(25.6,-22.9,0.746,0.746);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#451738").s().p("AAFAaQgOgXACgcQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQADAZAKAZQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAIgCgBg");
	this.shape_149.setTransform(21.2,-20.8,0.746,0.746);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#451738").s().p("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");
	this.shape_150.setTransform(-1.3,-20.6,0.746,0.746);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#451738").s().p("AgsAlQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAjg0A0gTQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQg4AegdAmIgCABIgBAAg");
	this.shape_151.setTransform(-24.4,-27.9,0.746,0.746);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#451738").s().p("AgTAnQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAMg2AagVQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgVAYgRAxIgCABIAAAAg");
	this.shape_152.setTransform(-17.9,-23.9,0.746,0.746);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#451738").s().p("AgDABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAABAAIABgBIAGABIABABIgBABg");
	this.shape_153.setTransform(17.3,-53.9,0.746,0.746);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#451738").s().p("AgIgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAEACALABIACACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgEABQgGAAgHgFg");
	this.shape_154.setTransform(17.3,-53.1,0.746,0.746);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#451738").s().p("AgCATQgPgGgHgKIABgCQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAIABACQAIgKAKgJQAHgIAFACQAEACAEAIIAEAMQAEAMgCAFIABACIgBACQgDACgFAAQgIAAgKgEgAgSAFQAPANAXgBIgDgOIgHgPQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgHAAgSAUg");
	this.shape_155.setTransform(16.9,-53.5,0.746,0.746);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#451738").s().p("AgEACQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAGgBIACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgGACIgBAAIgBAAg");
	this.shape_156.setTransform(3.2,-53.5,0.746,0.746);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#451738").s().p("AgJADIgBgBIABgBQAHAAAMgEQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgHAEgJAAIgEgBg");
	this.shape_157.setTransform(3.3,-52.5,0.746,0.746);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#451738").s().p("AgcATQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIADABQgCgOADgLQADgOAGgBQAHgCANAMQAMAJAGAHQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBASgXADIgJABQgOAAgLgGgAgTARQAMADAKgCQANgDAHgJQgSgRgLgGIgEgBQgJAAAAAjg");
	this.shape_158.setTransform(3.3,-53.1,0.746,0.746);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#451738").s().p("AgJAOQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAEgRAQgIQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgMAHgGAQIgCABIAAAAg");
	this.shape_159.setTransform(2.5,-32.7,0.746,0.746);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#451738").s().p("AgBAHIgDgCQgBgHAFgEQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQABAFgDAGQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBgBg");
	this.shape_160.setTransform(20.3,-35.9,0.746,0.746);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#451738").s().p("AABAIQgCgCgDgJQAAgDADgBQACgBACADQADAIgBAEIgDABIgBAAg");
	this.shape_161.setTransform(9.3,-35,0.746,0.746);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#451738").s().p("AgtABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAsAMAvgRQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgaAKgaAAQgUAAgUgGg");
	this.shape_162.setTransform(9.5,0.8,0.746,0.746);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#451738").s().p("Ag1gEIgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAzAPA3gKQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgVAGgWAAQgfAAghgLg");
	this.shape_163.setTransform(8.3,-6.7,0.746,0.746);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#451738").s().p("AgcAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAIABgCQAYADAggEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgNAEgQAAQgNAAgPgEg");
	this.shape_164.setTransform(7.5,-12.2,0.746,0.746);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#451738").s().p("AAIAQQgMgDABgNIAAgBQgIgEgBgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQACAGAGADQAFADAHgBQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgGACgGgCQAAAKAJADQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgCABIgBAAg");
	this.shape_165.setTransform(2.8,-22.8,0.746,0.746);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#451738").s().p("AADAJQgDgDAAgFQgIgBgEgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAEAFAKgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgCADgCAAIAAAAQAAAFAGABQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAQgDAAgCgCg");
	this.shape_166.setTransform(19,3.9,0.746,0.746);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#451738").s().p("AAAAHQgFgCgGgIQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAABAAQAJAOAHgIQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQgDAGgFAAIgEgBg");
	this.shape_167.setTransform(-2.7,6.9,0.746,0.746);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#451738").s().p("AgLAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAEAFANgHQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgHAGgHAAQgHAAgCgFg");
	this.shape_168.setTransform(-3.4,0.2,0.746,0.746);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#451738").s().p("AAJAMQgJgCgDgHQgHABgHgEQgGgDgCgHQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAKAOARgJQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgFADQAJAIAMgDQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgFACgGAAIgFAAg");
	this.shape_169.setTransform(-8,0.4,0.746,0.746);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#451738").s().p("AgCAFQgGgDgBgGQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAFAEABQADADAEgBQABgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgFABQgDAAgCgCg");
	this.shape_170.setTransform(-4.4,-12.7,0.746,0.746);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#451738").s().p("AAFASQgEgDgCgFQgDgHABgDIgBgCQgIgHACgIQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQADAJAFADQACACAIABIABACIgBABQgDACgFgBIACAEIAFAIQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIgCAAg");
	this.shape_171.setTransform(-4.2,-15.9,0.746,0.746);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#451738").s().p("AADAOQgGgGABgHQgNgEgDgKQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAGAIAFACQADACAJAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgDADgGAAIAEAFQAFAEAFAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCAAQgGAAgGgDg");
	this.shape_172.setTransform(-4.3,-38,0.746,0.746);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFDB64").s().p("AgSAEQAYgbAEAKIAGAPIADAOIgDABQgUAAgOgNgAgEABQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAIAHAIgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBgBQgNgCgCgCIgBAAIgBAAgAAAgGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIAHABIABgBIgBgBIgHgBIgBABg");
	this.shape_173.setTransform(17,-53.4,0.746,0.746);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFDB64").s().p("AgVARQAAgpAOAHQALAGARARQgGAJgNADIgIABQgHAAgIgCgAAJAEQgMAFgHAAIgBABIABABQAMABAIgGQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIAAAAgAgGgEQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAHgCQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAgBgBIgBgBg");
	this.shape_174.setTransform(3.4,-53.1,0.746,0.746);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FCFF3B").s().p("AgEAnQgOgXgEgLQgDgIgBgLQgBgGACgKQAEgNAIAIIATASQALAKALAFQgVAWgLATg");
	this.shape_175.setTransform(-6.8,-51.5,0.746,0.746);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFDB64").s().p("AgOAEQgCgEgDgMQATAHAUAFIgKAHQgGAFgGABIgBAAQgHAAgEgJg");
	this.shape_176.setTransform(9.5,-27.7,0.746,0.746);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFDB64").s().p("AgQACQATgFAOgJQgEANgEAHQgDAFgFAAQgGAAgLgLg");
	this.shape_177.setTransform(22.9,-27.7,0.746,0.746);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FCFF3B").s().p("ABpAaQgKgMgSgXIgbgjIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIg7AEQgiACgagCQgogEgWgEQgkgJgTgUQAvAUA7ADQA2ADA2gNIAZgEQAMAAAIAMIALAVQAPAhANATQAcAvAjAXIgEAFQgsgdgcgeg");
	this.shape_178.setTransform(-21,-29,0.746,0.746);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FCFF3B").s().p("AgagFQATgGAbgcQAEgEADAZQAAALgHAPQgNAegHACQgNgdgNgQg");
	this.shape_179.setTransform(24.3,-51.9,0.746,0.746);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D6BED0").s().p("AALBRIAAgBQglgrhSgDIABAAQADghgRgkQgPgjgcgZQAVAKAvAHQBPAMA4gLQAXAsAeAhQAjAnAmASQgTAVgOASQgpgXhQAIgAA1gEQgbAUgMA3QAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQARgyAWgXQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCAAIgBAAgAgJg3Qg1ATgjAzQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAegnA5gdQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgCIAAABg");
	this.shape_180.setTransform(-20.5,-26.5,0.746,0.746);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D6BED0").s().p("AgJA2QgKgFgQgDQgXgFgXANQgJgRgRgGQAJgVAOgOQA9gIAggqQAFABAEgCIADgCQAmAsAhAUIAQALQg0ABgvAhIgJAGIAAAAQgEAAgFgEgAgUgJQgBAcAOAXQAAABABAAQAAAAAAAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQgLgagCgYQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAgAAXgcIAAABQASAZAZAFQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBgBQgbgKgOgSIgBgBIgBABg");
	this.shape_181.setTransform(22.2,-22,0.746,0.746);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D6BED0").s().p("AhTCuIgBAAQARgcAGgeQAHgggHgeQgHgggmgTQgCgdAFgfQAGABAFgBQAEgBgBgEIgBgHQAHAAAFgDQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgIgGgIIgMgOQAHgjAcgUQAcgVAiAIQAjAIAKAnQADAIACARQADAOAHAJIABABQAFASAQArQAPAoAFAXQAFAYgHAWQgHATgRAUQgZAegzAKQgWAEgaAAQgSAAgUgCgAgfA/QAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAwAPAsgUQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQgvASgrgNIgBAAIgBABgAg2gpIABABQA3AUA0gOQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAgBAAQg3ALgzgQIAAAAIgBABgAgohuQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAhAHAZgIQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQghAFgYgEIgBACg");
	this.shape_182.setTransform(8.3,-4,0.746,0.746);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FCFF3B").s().p("AAnArQgNgGgTgNQgOgKgRgPIgcgdQADgDAEgJIABgDQAqA3AuAYQAJAFAAAFQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgIgDg");
	this.shape_183.setTransform(27.8,-24.2,0.746,0.746);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FCFF3B").s().p("AAGBVQgGgBgHgDIgNgFIgLgfQgKgfAAggQAAgkALgeQATAKAHAaQAEAPADAfQACAMAJAOIAQARQAOAPgDACIgBABQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABIAEAKIgJAFQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIgBACQAAADgMAAIgNAAg");
	this.shape_184.setTransform(16.4,-13.1,0.746,0.746);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FCFF3B").s().p("AApByIgQgFQgQgDgPgGQgogNgbgdQAkgOATgZQAUgbgCgnQAAgagOgoQA3AZATAuQASAsghA5QgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIACgDQAHADAJAHQAGAFABADQACAFgIADIgBABIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIABAFQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAQgBAFgKADIAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABABAAQACAGgHAAIgFAAgAAPgLQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAEAIAJAAQgBAFAEADQAEAEAFgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgGgBAAgEIAAAAQACgBACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgLACgEgFIgCgBIgBAAg");
	this.shape_185.setTransform(17,4,0.746,0.746);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FCFF3B").s().p("AAJBFQglhBgMgwIgHgeQgCgRADgNQADgLALATIAIAQIAOAYQAKARANALIAKAIQAGAFAFACQAKAFADAEIABABQgHASgFATQgJAmAHAlg");
	this.shape_186.setTransform(-19.9,-9.6,0.746,0.746);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B3B01B").s().p("AgCAXQgHgCgFgGQgFgGgBgIQAAgGAEgHQAFgGAHgDQAIgEAHAFQADACADAFQAEAGAAAIQgBAIgEAGQgFAHgEABIgFABIgEgBg");
	this.shape_187.setTransform(20.4,-35.8,0.746,0.746);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#B3B01B").s().p("AgEAWIgJgEQgGgEgBgOQgBgPAHgEIAHgCQANgDAKAMQAJAMgGANQgDAHgFACIgHABIgIgBg");
	this.shape_188.setTransform(9.6,-35.2,0.746,0.746);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FCFF3B").s().p("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AAABAAAAQABAHAGADQAFAEAGgDQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQgEABgEgDQgEgCgBgFIgBgBIgBAAgAh6AtQgCAIAIAHIABABQgBAFADAGQADAGAEACQABABAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgFgJIgCgEQAFACADgCIABgCIgBgCQgIgBgDgCQgFgDgDgJIgBgBIgBABgAgegtQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAIAIAFIAAABQAAAOANACQAAABAAAAQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgKgDgBgJQAHABAGgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgHABgGgDQgGgDgCgGIgBgBIgBAAgAgMiwQgRAIgEASQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAGgRANgHQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgCgBIgBAAgABDjJQgDABAAAEQADAJADACQAAABABAAQAAAAABAAQAAAAABgBQAAAAABgBQABgDgDgJQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgBAAgADXjTQgFAEACAIIACACQADACADgDQADgGgCgGQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgBAAIgDABgAiCj6QAAABgBAAQAAAAAAAAQAAABgBAAQAAAAABABQACAKANAFQAAAHAHAGQAHAEAHgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgGAAgFgEIgEgFQAGAAADgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgJAAgFgCQgFgCgGgIIgCgBIgBAAgAgomjQgBABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAOAIAVgDQAWgDABgSQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgGgIgLgJQgPgMgGACQgHABgCAOQgEAMADAOIgEgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAgACTm3IgBACQAHAKAPAGQATAGAIgEIABgCIgBgCQACgFgEgNIgEgMQgEgIgEgCQgFgCgIAIQgKAJgIALIgBgCIgBgBIgBABg");
	this.shape_189.setTransform(4.2,-20.6,0.746,0.746);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F2796E").s().p("AgHAHQgLgGAIgFQAHgFAKACQAJACgCAHQgBAGgIABIgEAAQgEAAgEgCg");
	this.shape_190.setTransform(-24.7,-30.5,0.626,0.626);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F2796E").s().p("AgNAPQgLgDgBgJQAAgIAJgGQAHgEAJAAQAIgBAHADQAIADACAIQACAHgIAEQgLAHgMAAIgJgBg");
	this.shape_191.setTransform(-10.8,-29.5,0.626,0.626);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgCgDQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIABADQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAgBQADAEgFABIgBAAQgFAAADgJg");
	this.shape_192.setTransform(-23.1,-33,0.626,0.626);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgFADQAAgDAEgFQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAABQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQABAFgGABIAAAAQgFAAAAgFg");
	this.shape_193.setTransform(-12.6,-33.8,0.626,0.626);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373C00").s().p("AgVANQgCgVAJgQQAIgNAIADQAGABAFAHQAFAHADAMQADAOgEAMQgFANgNADIgEABQgRAAgCgXg");
	this.shape_194.setTransform(-12.1,-33,0.626,0.626);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373C00").s().p("AgIATQgFgFgBgHQgCgJAFgLQADgFAFgDQAFgDAFAEQAKAHgCAQQgBAPgLAFIgDAAQgEAAgEgEg");
	this.shape_195.setTransform(-22.6,-32.6,0.626,0.626);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFDB64").s().p("ACLBaQgygGgrAXIgQAIQANhvgxg/QgCgDgDADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAXAkAIAuQAHAngDAyQgHACgPgHQgdgMgXgBQglgBgaASQAehGAAhDQAAgEgEAAQgEAAAAAEQgMBQgVBBQgtglgrgEQgEABABAEQgFgDgDgGQgCgEgBgKIgBgNQABgDAFgLQACgGAEgFIADgDIAEgGQAFgEANgIQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQA2gTAtggQAygjAbguIAFACQA/AcAmAfQAwAmAYA2QACAEAEgCQAEgCgCgDQgFgRgIgOIALAOQAKAPANAbIAUAqQAEAHAJAcQgogfgxgFg");
	this.shape_196.setTransform(17.1,-1.3,0.626,0.626);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#B5B343").s().p("AgLAiIgGgCQgEgBAAgDIgDgIQADABABgEIADgeQADgQARgEQATgDADAUQACARgIAOQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAIgHAHQgDACgDABIgLACIgJgBgAgBgHQgCACgEAJQgEAJACAFQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQAEgEABgGQACgNAAgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABg");
	this.shape_197.setTransform(-20.5,-26.2,0.626,0.626);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B5B343").s().p("AgCAeQgEgBgEgDQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQgNgIgEgMQgCgHADgIQADgHAGgDQAMgHAMAOQAHAHgBASQAAAEAEABQAEABADgDIABgCIgBAGIgIAJQgIAIgFABIgEAAIgDAAgAgLgHQgDADACADIAEAIQADAFACADQADACACAAQADgBAAgDQAEgMgNgIIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_198.setTransform(-32.7,-25.1,0.626,0.626);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B5B343").s().p("AgjAMQBHgVAfg2QgFATgNARIgUAbQgGAFgHAEIgaAUQgNAKgQALIgXAMIgEACQANggASgUg");
	this.shape_199.setTransform(-10.8,-8.3,0.626,0.626);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FAFF6D").s().p("AhQBUQACgHAKgEQAIgGAMgFIAigRQAYgNAMgZQAOgbgOgXIgDgEIAFgQIAEgLQAEgGADgCQAIgCAKACQALACAGAGQAJAKAAAIIACAKIAAAJIgDAMQgDAPgKAOIgHAKQgCgCgBgGQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAFIABAEIADAFQgHAKgIAFIgMAIIgOALQgZATgNAEQgPAEgNACIgNABIgGAAIgIAAg");
	this.shape_200.setTransform(27.7,38.2,0.626,0.626);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#B5B343").s().p("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QAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgGADgFgDQgEgDgBgHQgBAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAgAFfIMQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQACAKAIAFQAIAFAJgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgHABgHgEQgGgEgCgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIAAAAgAElHzQAJAKANABQANABAKgKQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgIAHgKAAQgKgBgIgHQAEgCAEgFQAAAAABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAABQgKAHgLAAQgLAAgIgJQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAABAAQAAABAAAAQAGAJAKADQAJADAJgDgACwFZIgFALIgBABIgDAEQgGAIgMACQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAMgCAJgIIABABIAEABIABAAIAEABIAJgDQAIgEADgJQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgHANgPgBQAHgJAAgIQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABgAhjDFQgBAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAMAHAMgEQANgFADgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAABQgBAAAAAAQAAAAAAABQgFAKgJAEQgKAEgLgFIgBAAIgBABgAiRCsQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgPAAgPgHQAIgCAFgFQAAAAAAgBQAAAAAAAAQABgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAABgBAAQghAQgSgaQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGAJAKAGQAKAGALgBQASAMATgCgACzhXQAxAoAYA2QACAEAEgCQAEgBgBgEQgTg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgDgCgCADIgjAoQgVAWgRAPQgqAkg5AZQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQA3gTAtghQAxgkAbgtQBCAdAnAeg");
	this.shape_201.setTransform(11.7,-0.1,0.626,0.626);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#B5B343").s().p("AAAgCIAFAEIgIABg");
	this.shape_202.setTransform(22.9,22.4,0.626,0.626);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#B5B343").s().p("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");
	this.shape_203.setTransform(9.9,0,0.626,0.626);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373C00").s().p("AgPgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAFAFAHAAQAHAAAGgFQAAAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgHAHgKAAQgIAAgHgHg");
	this.shape_204.setTransform(-4.1,-17.8,0.626,0.626);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373C00").s().p("AATASQgSgEgEgPIgBABIAAgBIAAAAQgLgDgFgKQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAABQAAAAABAAQAAAAAAABQAFAIAJABQAIACAHgGQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgIAHgIAAQAJALALAEQABAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAIgBABIgBAAg");
	this.shape_205.setTransform(-0.9,-27.3,0.626,0.626);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373C00").s().p("AAAAFQgJgBgGgGIABgCIABAAQAFAEAIABQAHABAGgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgGAFgIAAIgCAAg");
	this.shape_206.setTransform(-10.8,-5.2,0.626,0.626);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373C00").s().p("AAKAVQgLAAgEgLQgLgCgHgIQgIgIAAgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQACARANAEQAKAEAOgHQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQgHAHgHABQAHAMAVgNQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgJAIgKAAIgCAAg");
	this.shape_207.setTransform(-5.8,-6.1,0.626,0.626);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373C00").s().p("AgTAHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAKAFAJgEQAKgEAEgJQABgBAAAAQAAAAABAAQAAgBAAABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgEANgMAFQgFACgEAAQgHAAgIgFg");
	this.shape_208.setTransform(6.7,12,0.626,0.626);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373C00").s().p("AAAAHQgLAAgKgFQgKgFgGgKQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAAAAAAAAQASAaAggQQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgFAEgIABQAPAHAPAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgEAAQgRAAgPgKg");
	this.shape_209.setTransform(0.3,9.7,0.626,0.626);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373C00").s().p("AgaAOQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBABAAQAMgCAGgIIAFgHIADgIQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAIgHAIQAPABAHgMQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQgDAIgJAEQgIAFgIgEIgBgBQgJAIgMACIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_210.setTransform(22.6,22.4,0.626,0.626);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373C00").s().p("AgFAHQgJgGADgIQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAHAEACQAEADAGgDQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgFADgEAAQgDAAgEgDg");
	this.shape_211.setTransform(31.6,39.1,0.626,0.626);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373C00").s().p("AgEAHQgHgFgCgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQACAHAGADQAFAEAIgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgGABQgFAAgFgDg");
	this.shape_212.setTransform(34.5,33.4,0.626,0.626);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373C00").s().p("AAQAOQgMgBgIgKIAAgBQgJADgKgDQgJgCgGgJQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQAAAAABABQAIAJALAAQAKAAAJgHQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQgFAFgDABQAHAHAKABQAKAAAIgHQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAQgJAJgLAAIgDAAg");
	this.shape_213.setTransform(30.4,31,0.626,0.626);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373C00").s().p("AAMAOQgKgDAAgKQgIgCgHgIQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAABABAAQAGAHAQADQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgIAAQABAFAGADQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAAAg");
	this.shape_214.setTransform(10.2,33.7,0.626,0.626);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373C00").s().p("AAGADQgJAGgLgDQgLgDgHgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAMANASgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAKAIAPgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgIABQgKAAgIgHg");
	this.shape_215.setTransform(16.4,30.4,0.626,0.626);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373C00").s().p("AgDAKQgRgDgGgOQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAgBABABQAAAAAAAAQABAAAAABQAGAKAOABQAGAAATgDQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgLAFgLAAIgGAAg");
	this.shape_216.setTransform(13.6,27.8,0.626,0.626);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373C00").s().p("AAHAKIgCABQgNABgLgGQgOgGgBgNQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQACAKALAEIATAEQgEgGAAgJQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAALAKAGQAJAEAMgBQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgKACQgJAAgHgGg");
	this.shape_217.setTransform(11.3,22.1,0.626,0.626);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373C00").s().p("AgCAHQgKgFgFgHQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAIAIAFABQAGADALACQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgFABQgHAAgGgEg");
	this.shape_218.setTransform(-14.3,25.7,0.626,0.626);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373C00").s().p("AgNAKQgQgFgJgLQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABQAAAAAAAAQALALANACQAIABANgEQgGgDgDgGQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAJAOAVgDQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgLADgKgFIgBACQgHAGgJAAQgFAAgHgCg");
	this.shape_219.setTransform(-3.7,28.8,0.626,0.626);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373C00").s().p("AAMARQgKgEgFgKQgJABgJgFQgJgFgDgJQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQAAAAAAAAQAQAXAZgPQADgCACACQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQgGAGgIABQAKAMASgCQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgEACgFAAQgGAAgFgDg");
	this.shape_220.setTransform(-1.7,21.1,0.626,0.626);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FAFF6D").s().p("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gBABQgKAHgKAAQgLAAgIgJQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAGAJAJADQAKADAJgDgAEPHvQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgOABgLgJQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAABABQgUAGgMgOQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABABAAQAHAKALADQALADAKgGQALAKAOgEgAh3HDQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAJAMAQAFQASAFALgJIABgCQAKAFALgDQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgVADgJgPQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQADAGAGAEQgOAEgIgBQgNgCgLgMIgCgBIgBABgACpGzQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAABABQAGAOAQADQAOADAPgHQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgTAEgGgBQgPAAgGgMIgCgBIgBAAgAFVFZIgEAIIgFAIQgGAIgNACQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAMgCAIgIIABABQAJAEAJgFQAIgEAEgJQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgHANgQgBQAIgJAAgIQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAABgADAFwQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgNACgIgFQgLgFABgMQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgBAIAFAHIgUgEQgLgEgBgLQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAABABQABANANAHQAMAGANgCIACgBQALAJAQgEgAgmFjQALAEAKgEQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgRABgKgLQAHgCAHgHQAAAAAAgBQABAAAAgBQAAgBgBAAQAAgBAAAAQgDgCgCABQgbAQgPgXQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAEAJAJAGQAIAFAKAAQAGAKAJAEgABADFQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAMAHANgEQAMgFAEgOQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBgBABQAAAAAAAAQgBAAAAABQgEAKgKAEQgKAEgKgFIgBAAIgCABgAATCsQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgOAAgOgHQAHgCAEgFQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBAAABQAAAAAAAAQgiAQgRgaQgBgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAABABQAFAJALAGQAKAGALgBQARAMATgCgAFXhXQAyAoAYA2QACAEAEgCQAEgBgCgEQgSg4g2gqQgwgmhAgSQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgDgCgDADIgjAoQgUAWgSAPQgqAkg5AZQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQA2gTAtghQAzgkAagtQBCAdAnAegAiRh1QAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAABQABAKAHAJQAIAIAKACQAEALANAAQALAAAJgIQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgWANgIgMQAIgBAIgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgQAIgKgEQgMgFgCgRIgBgBIgBAAgAjRhWIgBABQAGAHAJACQAKABAHgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgGAEgIAAQgIgBgFgGIAAAAIgBABgAhnkgQgBABAAAAQAAABgBAAQAAAAABABQAAAAAAABQAHAIAKAAQAKAAAGgJQAAAAAAAAQABgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgFAFgIAAQgHAAgFgFIgDgBIgBAAgAimlXQAIALABAUQABADADAAQAEABAAgEQAEgWgPgQQgRgRgUALQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAGgCAFAAQALAAAIAKgAosmWQgDACADAEIAEAIQACAGADACQACADADgBQADAAABgEQADgLgOgKIgDgBQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBABgAlEmxQADARgJAPQgCADADADQADADADgCQAQgGgBgeQAAgNgIgJQgHgKgNgCQgLgDgMAGQgNAGgFAKQgFAJAAAOQAAANAFALQABACADAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIACgfQADgRASgDIAFgBQAPAAACASgAlempQgCACgFAKQgDAJACAGQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAFgEAAgHQADgNgBgDQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAgAgRmgQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgLgEgJgNQAIAAAHgHQAAAAAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBABAAAAQgIAFgIgBQgJgBgFgJQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAGALALACIAAABIAAAAIABAAQAFAPASAFgAhkptQgFAWAGATQAHAXAVADQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAgBQALgGAIgSQAGgQAAgOQAAgQgUABQgOAAgQAIIAAgCQABgEgEgBIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQgBABAAAAg");
	this.shape_221.setTransform(1.4,-0.1,0.626,0.626);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373C00").s().p("AABAkQgUgEgHgXQgGgRAFgWQABgEAEABQAEABgBADIAAACQAQgHANgBQAUAAAAAQQAAAOgGAPQgIASgLAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAgAAAgZIgUAEQgCAfAXAQIAGgKQAJgOACgLQAEgQgHgBg");
	this.shape_222.setTransform(-3.2,-37,0.626,0.626);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373C00").s().p("ACuBRQgYg4gxgmQgngfhBgcQgbAtgyAjQgtAgg3ATQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQA5gZAqgiQASgPAVgXIAjgoQACgCADACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQA/ATAwAlQA2ApATA5QABAEgEACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_223.setTransform(16.6,-4.6,0.626,0.626);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373C00").s().p("AAVAaQgEAAAAgEQgBgUgJgKQgJgOgTAGQgBAAAAABQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAVgKAPARQAQAPgEAWQAAAAgBABQAAABAAAAQgBAAAAABQgBAAgBAAIAAAAg");
	this.shape_224.setTransform(-9.5,-21.1,0.626,0.626);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373C00").s().p("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");
	this.shape_225.setTransform(1.4,-0.3,0.626,0.626);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373C00").s().p("AgDAPQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQgCgFADgIQAFgKABgCQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABACgDANQAAAGgFAEIgCACIgCgBg");
	this.shape_226.setTransform(-20.6,-25.8,0.626,0.626);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373C00").s().p("AAAALQgBgCgDgGIgEgHQgCgEADgCQADgDAEACQANAKgEAKQAAAEgDAAIgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_227.setTransform(-32.9,-24.8,0.626,0.626);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373C00").s().p("AAQAiQgDgDACgDQAIgPgCgQQgDgVgSAEQgSADgDARIgDAeQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCQgEgLAAgNQgBgNAFgJQAFgKANgGQANgGAKADQAMACAIAKQAHAJABANQABAdgQAGIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_228.setTransform(-20.2,-27,0.626,0.626);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FBB216").s().p("AgohIQAzAXAGAEQAhAVgNAbQgRAkggAiQAEhRgghAg");
	this.shape_229.setTransform(4.7,-32.3,0.626,0.626);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FBB216").s().p("AALAFQgVgXgbgQQAegGAKAAQAWABAIASQAFAMAAASIgBAgQgMgUgOgQg");
	this.shape_230.setTransform(-0.9,-40.7,0.626,0.626);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FBB216").s().p("AgbgwQAoAhAPAaIgiAmQgRgvgEgyg");
	this.shape_231.setTransform(2.8,-3.9,0.626,0.626);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FBB216").s().p("AgTAIIACgOQACgLAGgBQAHgBAJAGIAPALIgEACQgTAHgUANg");
	this.shape_232.setTransform(-17.5,-43.5,0.626,0.626);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBB216").s().p("AgKgJQAHggADgdIAZAuQAKAZgRAYQgIALgNANIgYAWg");
	this.shape_233.setTransform(3.9,-21.9,0.626,0.626);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FBB216").s().p("AgWADQADgcAHgnQAUAWAJAPQAOAXgIARQgGANgQAPIgZAYQgBghADgdg");
	this.shape_234.setTransform(2.6,-11.7,0.626,0.626);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FBB216").s().p("AgYgLQARgRAXgFIAIAiQACALgBAWg");
	this.shape_235.setTransform(11.4,8,0.626,0.626);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FBB216").s().p("AgTgUIAUgEIAOgBQAIABgEAQQgDAKgJAPIgGAJQgXgPADgfg");
	this.shape_236.setTransform(-3.2,-37.1,0.626,0.626);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFDB64").s().p("AgBAMIgGgBQgCgBABgFQADgGAGgGIAIgFIgCAQQABAHABACg");
	this.shape_237.setTransform(4.2,35.8,0.626,0.626);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFDB64").s().p("AgDAQQgKAAgDgMIgDgTQARARAWAMIgNABIgIABIgCAAg");
	this.shape_238.setTransform(-16.7,29.4,0.626,0.626);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFDB64").s().p("AgOAGIgGgOQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQATAJAUAEIgSAJQgFACgEAAQgEAAgEgGg");
	this.shape_239.setTransform(-13.5,31.4,0.626,0.626);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFDB64").s().p("AABAGQgFgEgIgKIAVABIABgBQAAAIADAJQgIgBgEgCg");
	this.shape_240.setTransform(-10.4,32.1,0.626,0.626);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FAFF6D").s().p("AA5BPQgigEgXgIQgcgJgYgRQgQgMAFgZIANgkIAPgvQAjBNA/AwIACABIgCALIgEAWgAgggMQAAABAAAAQgBABAAAAQAAABAAAAQAAABABAAQAFAIAKAEQAKAFAIgCQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgKgCgGgCQgGgCgIgIIgCAAIgCAAg");
	this.shape_241.setTransform(-13.4,25.9,0.626,0.626);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FBB216").s().p("AAQAPQgYgSglghQAqABAVAIQANAEAHAXQAEALAEAbg");
	this.shape_242.setTransform(16.7,13.3,0.626,0.626);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FBB216").s().p("AgbgWIABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAYAEQAMADAIAJQAEAFACAIIACAPQgUgWgjgXg");
	this.shape_243.setTransform(33.8,24.9,0.626,0.626);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FBB216").s().p("AgigPQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIABAAIACgBIAOgBQARgCAJABQAOABAEASIAHAcQgbgRgqgWg");
	this.shape_244.setTransform(29.7,21.8,0.626,0.626);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFDB64").s().p("AgTAGIgCgXQASAQAaAFIgOAIQgJAEgGACIgCAAQgIAAgDgMg");
	this.shape_245.setTransform(-7.3,35.1,0.626,0.626);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FBB216").s().p("AgygeQAzAEARADQAPACAHATQAFALAFAXQgugZg2glg");
	this.shape_246.setTransform(23.8,18.4,0.626,0.626);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFDB64").s().p("AgFAKQgFgCgDgGIgGgKIAAgBIABgBIAMABIAaABIgIANQgGAGgGAAIgFgBg");
	this.shape_247.setTransform(-3.8,36.3,0.626,0.626);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFDB64").s().p("AgHAJIgOgJIAAAAQAZgCASgHQgJALgHAGQgDACgEAAIgGgBg");
	this.shape_248.setTransform(-0.5,35.8,0.626,0.626);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFDB64").s().p("AgwB1QgfhCgIhLQgIhGARhbQAOgcAVgMQAZgPAbAKQAdAKANAmQAJAWAFArQAEAcgDA/QABA4AXAcIAAABIgbBYQgQA1gJAjQg1gyghhEg");
	this.shape_249.setTransform(-11.5,13.4,0.626,0.626);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgEAEQgCgCABgCIAAgCQABgEAEAAQAEAAABAEIABACQABACgCACQgCADgDAAQgCAAgCgDg");
	this.shape_250.setTransform(1.3,-55.4,0.791,0.791);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgiAWQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQANgTARgLQAUgOATADQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQgZAHgKAHQgQAJgOAPIgBABIgCgBg");
	this.shape_251.setTransform(5.3,-60.2,0.791,0.791);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#030100").s().p("AhmFOIABgBQBEgUA9hNQAfgmAPgcQAVgnAEgmQAJhKgohLIgmhAQgXgngKgaQgghJAThMIABAAQgMA2ALAxQAIAmAZAuIAnBBQAWAmAKAdQAbBLgVBIQgSA4hABGQg1A9g8AQIAAAAIgBgBg");
	this.shape_252.setTransform(37.2,-10.7,0.791,0.791);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#030100").s().p("AArAIQgcgGgPgCQgVgBgTACIAEgBQASgCASACQAnAGABgCQACgEgTgCQgMgCgJAAQgVgBgRAFIgHABIAAgBQARgIAlABQAaABAHAMQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_253.setTransform(20.5,15.6,0.791,0.791);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#030100").s().p("Ag+ALQAmgNAYABQAMABATACIAXAFQgbgMgcgDQgPgBgQAFIgcAMQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAABAAQAAAAAAgBQAAAAAAAAIAdgMQAQgGAPACQAhADAeAPQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgBAAIAAAAIgfgGQgSgDgMgBQgOAAgRADIgeAJIgBAAIAAgBg");
	this.shape_254.setTransform(3.7,11.3,0.791,0.791);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#030100").s().p("AhOANQAjgRAsgGQAUgDAZABQAWAAALAIIABABQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgQgJgYAAQgQAAgaAEQgeAEgsARQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_255.setTransform(-33.7,14.8,0.791,0.791);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#030100").s().p("AgZAZQAEgZAGgOQAMggAkgaQABAAAAABQAAAAABAAQAAABAAAAQAAAAgBAAQgXARgIAJQgLAPgIAYQgEAMgFAaQgFAbgEANQACgPAHghg");
	this.shape_256.setTransform(1.1,24.9,0.791,0.791);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#030100").s().p("AhOBFQAQgxAtgnQAqglA0gNQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIgBABQg3AQgnAjQgjAegaA3IgBABIAAgBg");
	this.shape_257.setTransform(-6.8,23.4,0.791,0.791);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#030100").s().p("AhZAgQAigiAwgRQAugRAyAFIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgxgFguARQguAQglAiIAAAAIAAgBg");
	this.shape_258.setTransform(-10.9,19.4,0.791,0.791);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#030100").s().p("AAfAOQgcgSghABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAagCAWAKIAGADIAFAEQABgBgLgKQgKgIgPgDQgBAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAYADAOAWIAAACIgBAAIAAAAg");
	this.shape_259.setTransform(-22.1,12.2,0.791,0.791);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#030100").s().p("AhdAkIABgBQALAEARgBQAIgBAUgEQAWgFAXgKQAwgSAkgnIABABQgdAlg3AWQgZAKgeAFQgRAEgHAAIgFAAQgKAAgJgEg");
	this.shape_260.setTransform(-3.6,-28.7,0.791,0.791);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#030100").s().p("AhQAkQgIgBgDgEIAAgBIACAAQADAEAKAAIAOgBQALAAAPgCQAagFARgHQAYgIATgMIATgPIAKgIIgbAPQgUAJgYAIQgwARgrgBIAAgBQA2gEAkgNQAngMAtgdQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgmAng1ATQgXAIgeADIgVABIgHAAg");
	this.shape_261.setTransform(-3.2,-29.2,0.791,0.791);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#030100").s().p("Ag+BOIABgBQANATAnggQAUgQAQgZQAYglALhGQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgFBKgoAxQgWAbgZANQgLAFgIAAQgJAAgFgHg");
	this.shape_262.setTransform(6.9,-19.4,0.791,0.791);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#030100").s().p("AhYAPQAKgcBDgBQA1gCAvAcQAAABAAgBQgugZgzABQgaAAgXAGQgQAFgHAFIgDAEQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABQABABAPgGIABABIgUAHQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_263.setTransform(19.4,-31.4,0.791,0.791);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#030100").s().p("AAHgJQgTgJgUgEQgNgDgKAAIgIAAIgGAAQgHAAANAEQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgHABgFgHIABgCQBCgGBUA9IAAABQgvgdgWgJg");
	this.shape_264.setTransform(18.7,-26.2,0.791,0.791);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#030100").s().p("AAyAuQgNgggXgWQgTgTgKgHQgSgMgRACIAAAAQAPgFASAMQAIAEASATQAkAgAGAcIAAABIgBgBg");
	this.shape_265.setTransform(16.1,-22.7,0.791,0.791);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#030100").s().p("AA6gkQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgeAJggAWIg3AqQA3g3A9gTg");
	this.shape_266.setTransform(-35.8,-27.9,0.791,0.791);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#030100").s().p("AggAxQAIgYAVghIANgXQALgNALgFIABABQgWANgQAfIgZA1IgBABIgBgBg");
	this.shape_267.setTransform(-27.7,-21.9,0.791,0.791);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#030100").s().p("Ag5A6QAUgkAigiQATgWAHgGQASgQARgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgLABgMAIIgSAPIgZAaQgVAXgbApIgBAAIAAAAg");
	this.shape_268.setTransform(-32.5,-23.4,0.791,0.791);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#030100").s().p("AgbAzIABgCIAMgKIAJgNQAHgLAEgJQAOgcgKgcIABgBIABABQALAagPAfQgFAMgLAPQALgLAJgNQAOgRgCgOIgIgbQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIACABIAGASQADALgBAHQgBAJgKANQgNATgQAOIgDADQgEAGgFABIgCgBg");
	this.shape_269.setTransform(3.6,-72.2,0.791,0.791);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#030100").s().p("AgbAbQAAgOAGgOQAPgiAhgSIABABIAAABQgeARgNAZQgJAPgBAQQgCATALAMIgBABQgLgIABgTg");
	this.shape_270.setTransform(-6.8,-72.3,0.791,0.791);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#030100").s().p("AAJApQAOgggEgSQgCgPgLgIQgLgIgOACIgBgBIAAgBQAMgCAKAGQALAGAFALQAGAOgEAQQgCALgJATIAAAAIAAAAg");
	this.shape_271.setTransform(-25.3,-64.5,0.791,0.791);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#030100").s().p("AAEAyQARghgCgZQgCgQgLgLQgKgLgQgCIAAgBQAjACAFAlQAFAhgUAbIAAAAIgBAAg");
	this.shape_272.setTransform(-25.9,-63.8,0.791,0.791);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#030100").s().p("AgKAIQgFgOACgUIACAAQgBAWAEAKQAFASARADIAAABIgBAAQgQAAgHgUg");
	this.shape_273.setTransform(-31.4,-59.8,0.791,0.791);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#030100").s().p("AgIApQACgxAPggQABAAgBAAQgJAagCAPQgDANgCAbIgBAAIAAAAg");
	this.shape_274.setTransform(-21.7,-75.2,0.791,0.791);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#030100").s().p("AAFBXQgPgfgJgdQgTg9AGg9IgDgQQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACAMIABgGIABAAIgBALIAVBjQAIAlAHAUQAMAeATASIAAABIgBABIgCAAQgPAAgNgZgAgVALQAGAbANAcQAEANAIANQAEAIAEAEQAEAEAFACQAHABgEgDIgGgHIgIgLQgEgIgHgQQgJgWgHggQgHghgNhDQgCA4AMArg");
	this.shape_275.setTransform(-31.6,-69.2,0.791,0.791);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#030100").s().p("AAXAOQABgJgGgGQgFgHgJgCQgGgCgVACIAAAAQAQgGAPAGQATAHgDARIAAAAIgBAAg");
	this.shape_276.setTransform(-30.3,-39.7,0.791,0.791);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#030100").s().p("AgiABIAAgBQAmgDAfAEIAAAAQgugBgXABg");
	this.shape_277.setTransform(-18.7,-31.1,0.791,0.791);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#030100").s().p("AhYALQAegOAxgDIAwgDQAdgCAUABIABABIgBABIhYADQg3ABghAPg");
	this.shape_278.setTransform(-18.8,-31.1,0.791,0.791);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#030100").s().p("AgOAdQgFgTAJgPQAIgPAQgIIAAAAIACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBAAIgGADIgKAPQgGALgHAaIAAAAIgBAAgAgEgJQgJAKgBAOIABAKIADgJQACgJAEgHQAEgNAIgJQgIAFgEAIg");
	this.shape_279.setTransform(-15.5,-42.4,0.791,0.791);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#030100").s().p("AgRAJQgIgEgDgIQAAAAAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQAIAQAVgEQAXgDACgRIABAAIABABQABAJgLAGQgIAFgLACIgDAAQgHAAgHgDg");
	this.shape_280.setTransform(-4.3,-49,0.791,0.791);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#030100").s().p("AgQBtQg1gIgZgqIAAAAQAcAqA1AHQA3AIAggnQAbghgLhAQgJg3gWgiIAAgBIABAAQAaAiAIBFQAHA7geAfQgbAcgoAAQgJAAgLgCg");
	this.shape_281.setTransform(5.3,-54.1,0.791,0.791);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#030100").s().p("AgQBrQgwgEgagmQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAQAbAmAxADQAwAEAfgkQAagcgEg9QgEgugXgtIAAAAQAaAtADA2QADA7geAdQgeAcgoAAIgKgBg");
	this.shape_282.setTransform(5.4,-54.6,0.791,0.791);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#030100").s().p("AASAsQgGgqgCgGQgIgcgUgLIABAAQAUAIAJAdQAHAVAAAdIAAAAIgBAAg");
	this.shape_283.setTransform(9.8,-60.3,0.791,0.791);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#030100").s().p("AgIAEQgHgOADgPIABAAQgEAdAdAVQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgNgGgIgQg");
	this.shape_284.setTransform(-0.7,-50.8,0.791,0.791);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#030100").s().p("AhDAOIAAgBQAvgEAWgEQAdgFAjgNQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIgBABQhGAZg9AAIgDAAg");
	this.shape_285.setTransform(22.2,-57.3,0.791,0.791);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#030100").s().p("AgbAdQAZgpAegQQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgQAIgOARIgZAfg");
	this.shape_286.setTransform(10.8,-75.6,0.791,0.791);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#030100").s().p("AgXAcIAWgdQAMgRAMgLIABABQgiAjgLAWIAAABIgCgCg");
	this.shape_287.setTransform(10.8,-75.4,0.791,0.791);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#030100").s().p("AgzB8QgKgIAFgSQACgGAGgLIAGgJQAKgTgGABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAbhoBGhIIABAAQg4A+gaBHIgMAkQgBAFABABIADADQACAEgFAJIgHALQgIAOgCAIQgDAMAHAJQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape_288.setTransform(1.2,-79.8,0.791,0.791);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#030100").s().p("Ag/B3QAOhEAgg8QAlhGArgoQABAAAAABQgnAsgHAKQgSAZgPAfQggA7gPBEIAAABIgBgBg");
	this.shape_289.setTransform(0.5,-80,0.791,0.791);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#030100").s().p("AAHA2Qg+gVgtgrQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACAAQAaATAgARQALAGAXAJQAIADADgBQAEgCAFgHQAigxAtgjQAEgCADADQADADgDADQg1AtgiAzQgBABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIgCAAg");
	this.shape_290.setTransform(-8.9,9.3,0.791,0.791);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#030100").s().p("AgJA8Qg+grgSg9QAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIACABQAbBAAzAgQAPgcAYgdIAZgdQAOgRAOgIQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQgBAAAAABQgHAKgQAPQgRASgGAHQgTAVgbArQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgDgBg");
	this.shape_291.setTransform(-12.2,-3.1,0.791,0.791);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#030100").s().p("AgcAvQgbgtgCgvIABgCIACACQAHAtAWAnQAagtAzgnQADgDACAEQACADgDACQgpAgglA2IgDABIgDgBg");
	this.shape_292.setTransform(-9.9,-16.9,0.791,0.791);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#030100").s().p("AhLAPQAegaAsgEQAtgEAfAWQABABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgsgPgcABQgiAAgpAVIgBABIAAgCg");
	this.shape_293.setTransform(-24.3,-16.9,0.791,0.791);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#030100").s().p("AAmAVIgMgQQgGgHgIgFQgTgLgiAJQAAABAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQAVgQAdAKQAfAKADAaQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBABIgCgBg");
	this.shape_294.setTransform(-33.7,-17.2,0.791,0.791);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#030100").s().p("AAUAlQgJgngjghQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAABQABAAAAAAQATAKANAVQANAUADAWQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_295.setTransform(-38.7,-21.7,0.791,0.791);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#030100").s().p("AArBIQgfgUgYgtIgmhOQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAQARARAcA2QAXAvAcASQAEADgCAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_296.setTransform(-19.8,-23.1,0.791,0.791);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#030100").s().p("AAvBFQhKg4gahRQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQApBOBAA0QADACgDAEQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_297.setTransform(-21.1,-20.4,0.791,0.791);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#030100").s().p("AggBDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgjATgkQAQghAdgaQACgCADADQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQgcAagPAfQgHANgFATIgJAjQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAAAg");
	this.shape_298.setTransform(-27.5,-19.7,0.791,0.791);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#030100").s().p("AgSBNQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgLghAOgtQALgnAXgiQACgDAEACQAFACgDAEQgYAlgIAjQgEAOgBAXIgEAlQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_299.setTransform(-28.7,-20.5,0.791,0.791);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#030100").s().p("AhAA6QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAQAmhKBYgnQAAAAABAAQAAgBABABQAAAAAAAAQABAAAAABQAAAAABABQAAABAAAAQgBAAAAABQAAAAgBAAQhDAig6BNIgCABIgBgBg");
	this.shape_300.setTransform(-32.1,-22.2,0.791,0.791);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#030100").s().p("Ag2BIQAAgqAhgrQAegpAogSQADgBACADQAAAAAAABQABAAgBABQAAAAAAABQgBABAAAAQguAegVAeQgLAPgJAWIgQApQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_301.setTransform(-33,-23.2,0.791,0.791);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#030100").s().p("Ag7AgIAAgCQAPgPAsgWQApgWASgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAIgBADQgLAGgTAIIgeANIgcAQQgSALgLAFIgBAAIgBAAg");
	this.shape_302.setTransform(-36,-27.2,0.791,0.791);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#030100").s().p("Ag4AtQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQASgcAfgYQAegYAggLQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQguAZgLAJQgNAIgOAPIgZAaIgCABIgBgBg");
	this.shape_303.setTransform(-36.3,-28.2,0.791,0.791);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#030100").s().p("Ah4CJQgCgFAFgBQBigVBAhLQBAhJAJhlQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAABnhEBPQhCBPhmATIgBAAQgEAAgBgEg");
	this.shape_304.setTransform(36.8,5.2,0.791,0.791);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#030100").s().p("AA9DmIgCgCIABgeQAAgTgBgLQgCgfgNgjQgIgbgRghIgcg4QgihBgNgmQgVg/ALgwQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABBMAWA1QAKAZARAiIAdA4QAiBCALAuQAPBBgPAjIgBABIgBAAg");
	this.shape_305.setTransform(41,-19.9,0.791,0.791);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#030100").s().p("AgzEDQgCgFAFgCQAhgOAWgaQAXgbAIgiQAIgjgHgqQgGgfgPgrQgPgpgFgZQgIgkABghQAFhJAgg0QAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQABAAgBAAQAAAAAAABQgRAwgHAfQgIArADAnQADAfARAwQAVA5AEAUQARBNgcA2QgaAyg2AXIgCAAQgDAAgBgDg");
	this.shape_306.setTransform(33.3,-17,0.791,0.791);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#030100").s().p("AgIABQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAIgCAHADQAEACgBADQgBAEgEAAQgHAAgHgFg");
	this.shape_307.setTransform(13.6,17,0.791,0.791);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#030100").s().p("AhdARIAAgCQAigZA3gGQAugEAxAKQAFABgCAGQgBAEgFgBQgvgJgsAFQgSACgaAHIgsANIgBAAIgBgBg");
	this.shape_308.setTransform(-31.1,11.6,0.791,0.791);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#030100").s().p("AAbAGIgbgEQgJAAgTADIgcACIgBgBIABgBQAVgMAjgBQAkAAAUAMQAAAAABAAQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgJAAgSgDg");
	this.shape_309.setTransform(-34.2,12.7,0.791,0.791);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#030100").s().p("ABKAIIgZgDQgbgDgWAAIgwACQghACgRAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAigIBBAAIAyAAQAfACASAHQAEABgBADQAAADgEABIgFAAIgTgBg");
	this.shape_310.setTransform(-34.2,16.3,0.791,0.791);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#030100").s().p("AhhAZQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAngaA0gMQAugLA0AEQAFAAAAAGQAAAGgFgBQhZgHhiAuIgBAAIgCgBg");
	this.shape_311.setTransform(-34.1,14.8,0.791,0.791);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#030100").s().p("AgDB4QgbghgNgoQgPgrAIglQAHgmAcgZQAcgbAlADQAEABAAAEQAAAEgEAAQgnAAgZAcQgZAbgDApQgCAfAPAkQAIARAYAtQACAEgDACIgCABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_312.setTransform(-23.4,1.4,0.791,0.791);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#030100").s().p("AgGAhQgjgBgYgHQgpgNAOgbIABAAIABABQACAZAlAIQAYAFAjgDQAbgCAUgMQAWgMAIgYQACgFAFACQAFABgBAFQgKAegfAQQgaANghAAIgCAAg");
	this.shape_313.setTransform(-20,15.8,0.791,0.791);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#030100").s().p("AglAfQgIgeAdgUQAdgWAaARIABADQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQghgDgQALQgLAHgFALQgEAIgDARQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgBg");
	this.shape_314.setTransform(-24.6,13.5,0.791,0.791);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#030100").s().p("AgiCAQAChDARhCQAKgqAHgXQANglAQgYQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABQgFATgQAqQgOAogFAWQgPBAgFBGQAAAFgFAAQgFAAABgFg");
	this.shape_315.setTransform(-21.4,1.1,0.791,0.791);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#030100").s().p("ABAEYQhAgigkhFQgihBAAhNQABhQAlhWQAehFA5hPQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABQAAAAgBABQg1BMgbBAQgkBRgEBKQgDBPAgBCQAiBIBCAjQAEACgDAEQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_316.setTransform(-14.3,-5.8,0.791,0.791);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#030100").s().p("AAcDYQgzhigKhyQgKhvAhhsQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQg2DzBfC2QACAEgEACIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_317.setTransform(-3.4,-11.7,0.791,0.791);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#030100").s().p("AhEAUQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAUgRAtgLQAvgOAYAGQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgMAEgXACQgZADgJACQgMACgVAIQgYAJgJACIgBABIAAgBg");
	this.shape_318.setTransform(-12.8,20.9,0.791,0.791);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#030100").s().p("AhcAtQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAOgaAfgVQAbgUAfgKQAdgKAYABQAkAAgFAbQgBABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgBgDQgEgYgqAIQgaAFgdAOQgUAKgUAQIgjAhIgBAAIgBAAg");
	this.shape_319.setTransform(-10.8,19,0.791,0.791);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#030100").s().p("AhVBSQgBgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAQgWAZgSQASgMAfgQQAbgNAdgXIAJgIQANgJgHgNQACgOgNgBQgIgCgMADIgUAIIgBAAIAAgBQAggdAXARQANAKgFAQQgDANgNALQgNAMgWAMIgkASQg1AegaAiQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_320.setTransform(-6.8,23.3,0.791,0.791);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#030100").s().p("AhBBOQgEgTAPgeQAKgVASgUQASgXAVgRQAZgTAZgGQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgfASgNAJQgWAQgPASQgSAUgLAYIgJAXQgFAPgFAHg");
	this.shape_321.setTransform(-8.5,23.5,0.791,0.791);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#030100").s().p("AgiBBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAFgkASghQASgmAcgSQAAgBABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABgBAAIgVAbQgOAQgFAMQgSAegJAmQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_322.setTransform(1.3,26.8,0.791,0.791);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#030100").s().p("AglBUQgNgsANgwQAMgzAXgRQAKgIANABQANABAHALQAHANgJAPQgGAMgOAJQAAAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAJgJAEgGQAIgKgCgGIgcgPQgIAGgHALQgKAPgJAcQgMAnAFA5IgBABQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_323.setTransform(1.4,25.2,0.791,0.791);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#030100").s().p("AgOgCIgBgCIACgBIALADIAOABQAEAAAAADQAAAEgEAAQgSgBgIgHg");
	this.shape_324.setTransform(-2,22.6,0.791,0.791);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#030100").s().p("AgnARQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAdgFAKgEQALgDAcgRIACAAIAAACQgNARgXAJQgPAHgQAAIgNgBg");
	this.shape_325.setTransform(6.3,21.8,0.791,0.791);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#030100").s().p("AA7CfQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAZgsAIgXQAMglgJgkQgWhTgpgxQgQgSgPgJQgXgMgRAKQgWAOgQA6QgIAcgEAtQgEA5gDAQQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgGgtAHgwQAHgyASgoQAJgVAIgKQAMgQAQgCQAYgCAbAXQAwAnAfBuQALAngMAmQgKAfgbAnIgCACIgBgBg");
	this.shape_326.setTransform(6.9,6.3,0.791,0.791);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#030100").s().p("Ag1AeQANgYAhgSQAhgUAbABIABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgdALQgSAHgJAGQgLAFgOAMIgYAUIgBAAIgBgCg");
	this.shape_327.setTransform(-2.1,13.6,0.791,0.791);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#030100").s().p("AgqBEQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAdgbQAQgQAJgPQAKgOAGgWIAKgnQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACABQAHAmgbArQgZAsglALIAAAAIgCgBg");
	this.shape_328.setTransform(26.1,15.5,0.791,0.791);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#030100").s().p("AgZBEQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAABgBQADgKASgrIANgcIAKgYQAGgUgNgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAOgFADANQACALgEAMQgdBJgSAdIgCACIgBgBg");
	this.shape_329.setTransform(21.1,23.9,0.791,0.791);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#030100").s().p("AgVBDQgIgdAKg1QAMg/AfAOQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgSACgIAYQgEAJgGAdIgDAgQgBAVgCAKIAAABIgCgBg");
	this.shape_330.setTransform(20.6,23.8,0.791,0.791);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#030100").s().p("AgIADQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAFgBAKgBQAEABAAADQAAAEgEAAQgKAAgFgBg");
	this.shape_331.setTransform(18.9,21.1,0.791,0.791);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#030100").s().p("Ag1AWQAGgPAdgIIAkgJQAWgFAOgIIAAABQgIAKgNAGQgJAEgRACQgUAEgJADQgGACgXAPIgCAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_332.setTransform(11.9,21.5,0.791,0.791);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#030100").s().p("AgtA5QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgWAbgdIAfgbQATgSADgPQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAABABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAFAOgNANQgHAHgRAMQgNALgPAVIgcAiIgBAAIgBAAg");
	this.shape_333.setTransform(15.5,23.5,0.791,0.791);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#030100").s().p("AgtA+QAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQABgcARghQARggAVgUQAHgGAIgCQAKgCAHAGQAFAFAAAGQgBAGgFAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgSgQgJAMIgRAYQgHAJgHAOQgGAKgGASIgMAcIgBABIgBAAg");
	this.shape_334.setTransform(15.6,23.2,0.791,0.791);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#030100").s().p("Ag2AiQAIgXATgRQASgRAXgIQAagIAKAKQAFAEAAAGQAAAGgEAFQAAAAAAAAQgBABAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQADgSgTACQgNABgMAGQgNAHgLAIQgRANgSAbIgBABIAAgCg");
	this.shape_335.setTransform(12,20.5,0.791,0.791);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#030100").s().p("AAxCXQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAkhOgBhKQgBhvg/gVQgqgPgdAsQgXAigFAvQgDAeAHAtQAJA/AAANQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgPgtgDgyQgDg0ALgrQALgoAZgYQAfgdAkAKQAkAJAUAnQAPAeADAsQAIBggyBPIgBABIgBAAg");
	this.shape_336.setTransform(22.6,5.7,0.791,0.791);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#030100").s().p("Ag1ARQgEgDADgDQAhglBMAKQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgsAEgLADQgdAHgSASQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_337.setTransform(17.4,16.6,0.791,0.791);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#030100").s().p("ABAAqQglgbhgg0QAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQBCAWBGA1QAEADgDAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_338.setTransform(13.2,-6.7,0.791,0.791);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#030100").s().p("AAJAmQgNgbgJgtQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAABQAAAAAAABQASApADAgQABAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBAAIgCgBg");
	this.shape_339.setTransform(7.5,-10.3,0.791,0.791);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#030100").s().p("AAHBnQgehsAMhiQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQgBBzAWBZQABAEgEABIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape_340.setTransform(4.9,-24.6,0.791,0.791);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#030100").s().p("AgEAwQgQgUAIgeQAHgfATgPIABAAIABABQgRAYgDATQgDAKACAPIAFAZQAAABAAAAQgBAAAAABQAAAAAAAAQAAABgBAAIgBAAIgBgBg");
	this.shape_341.setTransform(26.2,-25.9,0.791,0.791);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#030100").s().p("AgjAgQgRgcAjgWQAhgXAYAQQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgHACgRAAQgPAAgIAFQgXALgDAhIgBACIgBgBg");
	this.shape_342.setTransform(23,-20,0.791,0.791);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#030100").s().p("AhDAVIAAgCQAXgcAngJQAlgIAiAPQAEACgCAEQgBAEgEgBQhHgZg5AwIgBABIgBgBg");
	this.shape_343.setTransform(14.5,-17.4,0.791,0.791);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#030100").s().p("AAyA6IgUggQgLgTgLgKQgTgXgmgXQgEgCACgEQACgEAEACQAjAQAbAfQAfAgAEAjIgBABIgBAAg");
	this.shape_344.setTransform(15.9,-21.8,0.791,0.791);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#030100").s().p("AhCBWQAAAAAAAAQAAgBAAAAQgBAAABgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAsAMAthQQAZgpAIg7QAAgEAFAAQAFgBgBAFQgFBHgpA2QgVAcgQAMQgQAMgPAAQgKAAgJgFg");
	this.shape_345.setTransform(7.5,-18.5,0.791,0.791);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#030100").s().p("AAlBEQgNgugRgaQgIgPgPgRIgbgdQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAhATAXApQAXAkAGAoQABAEgEABIgBAAQgDAAgBgDg");
	this.shape_346.setTransform(16.8,-22.5,0.791,0.791);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#030100").s().p("ABPAmQgLgGgagSQgWgPgQgGQgPgIgagFIgrgKQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAigDA1AYQA4AWATAcQAAAAAAABQABAAgBABQAAAAAAAAQAAABAAAAIgDABIgBAAg");
	this.shape_347.setTransform(19.6,-24.9,0.791,0.791);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#030100").s().p("ABOA5IgfgmQgSgTgSgNQgRgMgagKIgugOQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAQAtgBAxAjQAxAiAPArQABAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIAAAAIgCAAg");
	this.shape_348.setTransform(19.6,-26.5,0.791,0.791);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#030100").s().p("AAwAHQgcgJgMgCQgXgGgZADQgKABgNAEIgWAHQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAagXA6AHQBAAIAeAYQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABQgPgBgagKg");
	this.shape_349.setTransform(20.4,-30.9,0.791,0.791);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#030100").s().p("ABYAdQhMhBhnATIgCgBIABgCQAvgRAzANQA0ANAjAjQAAABABABQAAAAAAABQAAAAAAABQgBAAAAABIgDABIgCgBg");
	this.shape_350.setTransform(20.2,-31.8,0.791,0.791);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#030100").s().p("AhKCPQgMgKAFgNQAFgMAMgIIAZgQQANgJAHgLQANgVAGgfQAGg9AKgfQATg4AtgGQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgrARgOAxQgJAdgJA9QgIAkgSAVQgHAJggASQgZAUAMAQQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIAAAAIgBAAg");
	this.shape_351.setTransform(8.4,-22.9,0.791,0.791);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#030100").s().p("AkIBgQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAgBQAAAAABAAQAAAAAAgBQABAAAAABIAqAKIAqAKQAuAHApgBQBbgBBJgjQBDggAxg2QAZgbASggQAFgJAJgWQAJgVAGgKQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQgBAYgXAqQgUAjgYAbQg1A5hFAgQhMAjhbABIgGAAQhmAAhBggg");
	this.shape_352.setTransform(-5.9,-37.1,0.791,0.791);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#030100").s().p("AgNAXQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIADgNIADgPQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAANIgBAHIAIgLIAJgUQABgDADAAQAEABgBADQgDAXgWATIgCABIgCgBg");
	this.shape_353.setTransform(5.4,-36.7,0.791,0.791);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#030100").s().p("AgGAbQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgHgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAIAdQAEgIADgHQAEgPADgIQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQACAXgWAaIgCACIgBgBg");
	this.shape_354.setTransform(2.4,-34.7,0.791,0.791);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#030100").s().p("AABAcIgKgYQgHgOgCgKIABgCIABABQAHAIAHANIAFANIAIgnQABgEAEABQAEABgBAEQgFAfgFAUQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_355.setTransform(-6.6,-32.6,0.791,0.791);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#030100").s().p("AAQAgIgSgVQgNgMgFgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACgBQAKAHAKAMIAMAOQgEgUACgcQAAgEAEAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABQAAAKACAwQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgCAAIgCgBg");
	this.shape_356.setTransform(-27.9,-28.5,0.791,0.791);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#030100").s().p("AgjATQgJgNAJgLQAIgLAOgCQAPgDAPAHQAQAIAHANIAAACIgBgBQgTgQgPgEQgPgEgOAIQgQAIAIARQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIAAAAIgCgBg");
	this.shape_357.setTransform(-31.2,-39.2,0.791,0.791);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#030100").s().p("AAnAjQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAHgWgEgOQgGgSgWgEQglgIgZAUQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQALgQAcgCQAYgCASAKQARAJABAUQABAGgDANIAAAEIACgIQAFgRgCgLIABgBQAGAZgQAVIgBABIgBgBg");
	this.shape_358.setTransform(-11.1,-43,0.791,0.791);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#030100").s().p("AgMBqQgzgCgegfQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABABQAGABAiAOQAXAKASABQAvABAaggQAZgggHgwQgEgagVg4QgCgEAFgCQAFgCACAEQAXA2AEAlQAFA2geAhQgcAegwAAIgFAAg");
	this.shape_359.setTransform(4.7,-55.6,0.791,0.791);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#030100").s().p("Ah2BdQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQAPAMAPgJQAMgIAGgRQAEgJACgaQACgZAGgRQAOgsAggZQAcgYAmAAQAqgBAUAfIgBACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQg4gmgwAaQgXANgRAYQgPAXgHAbQgDAOgCAeQgEAagMANQgKALgOABIgDAAQgMAAgKgJg");
	this.shape_360.setTransform(2.8,-56.5,0.791,0.791);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#030100").s().p("AgHAEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAHgEIAGgBQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBACgFACIgGADIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_361.setTransform(27.8,-58.2,0.791,0.791);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#030100").s().p("AhIAlQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAOgKAWgLIAlgRIAigSQAUgLAPgDIACABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgMALgVALIglAQIgiAUQgVALgQAFIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_362.setTransform(22.2,-55.1,0.791,0.791);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#030100").s().p("AhJAGIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAUgFAwgCQA5gDATABQAEABAAADQAAACgEABQgPACgVAAIgkABIgkADIgNAAIgXgBg");
	this.shape_363.setTransform(22.5,-58.2,0.791,0.791);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#030100").s().p("AAMAwQgEgBACgEQAPgoAIgnIggARQgXANgQAGQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAPgKAXgMIAmgVQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgIAtgQArQgBADgDAAIgCAAg");
	this.shape_364.setTransform(10.1,-74.6,0.791,0.791);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#030100").s().p("AkxErQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQArgeBAgOQAngKBMgIQCPgPA/gXQBwgpAoheQAUguABgzQAAg0gSgvQgSgwglgoQgcgggxgmQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQAwAXAmAuQAlAtASA0QARAvgBA0QgCAygUAvQgnBchkArQgsASg6ALQgkAGhFAIQhLAHgwALQhBAOg0AbIgCABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_365.setTransform(-7,-52.6,0.791,0.791);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#030100").s().p("AAFAlQgEgFgBgKIgDgSIgGgmQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAIAoIAEAQQABAJgCAGIgBACIAAAAIgCgBg");
	this.shape_366.setTransform(-20.4,-76,0.791,0.791);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#030100").s().p("AgUA3QgEgBABgEQARhEAbgkQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIgWA0QgLAcgGAYQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_367.setTransform(-22.7,-74.5,0.791,0.791);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#030100").s().p("AAHBtQgfgxgBhBQAAhLAvgdQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgoAqAAA1QAAAXALAkQAMAsACAPQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgBAAIgBgBg");
	this.shape_368.setTransform(-35.7,-51.3,0.791,0.791);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#030100").s().p("AAeDUQgzh4gLhcQgPh8A5hXQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQgyBWAMB0QAFAvATA+IAjBqQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_369.setTransform(-33.4,-45.5,0.791,0.791);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#030100").s().p("AiVBFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQA7g8BNghQBKgjBVgGQAEgBAAAFQAAAFgEAAQhRAGhLAiQhMAgg8A4IgBAAIgCAAg");
	this.shape_370.setTransform(-15.6,-73.1,0.791,0.791);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#030100").s().p("AAFB8QgEAAAAgEQgBgDAEgCQAngKABgnQAAgfgXgkQgyhNgXgpQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIA5BYIAWAhQANAUAFAQQAJAdgLAdQgMAfgdAAIgCAAg");
	this.shape_371.setTransform(-30.6,-69.3,0.791,0.791);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#030100").s().p("AgTAUQgThpAIgkIABgBIABABQAEATACAnQADAnADASQAEAYAHAdIAKApQALAcAPABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgEACgDAAQgaAAgShng");
	this.shape_372.setTransform(-32.3,-69,0.791,0.791);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#030100").s().p("AhJBvQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAwATAegTQAggSALgxQAPg5ADhuQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQgBBGgGAwQgEAegCANQgFAYgJARQgRAjgjANQgNAFgMAAQgYAAgTgSg");
	this.shape_373.setTransform(0.1,-79.7,0.791,0.791);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#030100").s().p("Ag9B7QgWgJAMghQAMghAXgpQAqhJBEg4QAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAQgyAvgmA6QgSAcgPAdIgSAlQgIAZAMAMQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_374.setTransform(-0.3,-80.3,0.791,0.791);

	this.instance_5 = new lib.Group_1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.6,-29,0.791,0.791,0,0,0,54.6,75.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FAF32C").s().p("AiaCCQgFgFADgKQADgLAHgCQAUgFAQgSQAOgQAIgWQAGgRAFgYIAIgrQALg1AZgZQAegcBFAUQAoALA0AlQgxgRg4gLQgWgFgOABQgVACgLANQAvAKApAeQAoAeAZAqQghgegpgUQgqgUgrgGQAdATAZAsQAPAaASAzQgdhIhEgmQgWBpgyAxQgNAMgMADIgJABQgKAAgHgIg");
	this.shape_375.setTransform(15.1,-23,0.791,0.791);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#772B11").s().p("AhJgjQAGgcADgHQAFgUAMgKQAWgVAsAEQAgADAfALQAhALAZAQIgUAZQgQAhAPAlQgRgEgRAFQgkAJgGAqQgMgNgdgBQg5gChTBAQAvhCAShYg");
	this.shape_376.setTransform(16.6,-23.4,0.791,0.791);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D9E38C").s().p("AgMB1QgphyADh7QANATAWAjIAhA1QAXAgAGATQALAhgRAYQgKANgPAIQgJAFgHAAQgHAAgFgEg");
	this.shape_377.setTransform(-30.5,-69.3,0.791,0.791);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#D9E38C").s().p("Ag1B4QgXgIAEgNQARhCAmg5QAkg6A1gsQAHBSgWBUQgJAlgOATQgVAdgcABIgFABQgRAAgQgHg");
	this.shape_378.setTransform(-0.1,-79.9,0.791,0.791);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#0C0B00").s().p("AADAeIgQhwIAQAkIAEAOIAGAfIABAeIgCAcIgHAag");
	this.shape_379.setTransform(5.6,-55.5,0.791,0.791);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#F6C310").s().p("AgRBmQgHgBhAgVQABg3ALgjQARgyAkgYQATgNAXgEQAYgDAUAJQAYA+ACAgQAEA1goAgQgYATgeAAIgQgBg");
	this.shape_380.setTransform(4.7,-56,0.791,0.791);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#0C0B00").s().p("AgeAZQgBgCAFgJIAGgMQAIgRALgHQAGgFAIABQAIABAFAFQAFAGAAAJQgBAHgFAGQgJALgSADIgOAEIgIABQgEAAgCgCg");
	this.shape_381.setTransform(-11.6,-41,0.791,0.791);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#0C0B00").s().p("AAAASQgNgDgHgLQgDgEAAgHQABgHAEgFQAEgDASASQATASABAFIgKABQgHAAgHgCg");
	this.shape_382.setTransform(-31.5,-37.3,0.791,0.791);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#F0DF49").s().p("AkyDWQgRg3gHgtQgRhyArhVQAuhYBphBQBmg/BkgHQBFgFBDAiQBDAiAmA6QApA8AEBMQAEBKghBBQgYAugtAjQgqAgg2ARQgsAPg9AIIhrAMQh6ANhPAsQgYhBgKgfg");
	this.shape_383.setTransform(-9.4,-53.4,0.791,0.791);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#772B11").s().p("AgWAAQAGgrAPgPQAHgJAJACQALACgBANQAAAGgFALIgsBjQgBgvADgTg");
	this.shape_384.setTransform(21,24,0.791,0.791);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#772B11").s().p("AgVgCQAJgZAIgLQAGgKAMgGQAOgIAJAEQANAFgGANQgEAJgKAIQgsAigfAyg");
	this.shape_385.setTransform(15.6,23.3,0.791,0.791);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#772B11").s().p("AgCgVQAQgJARgDQAXgDgDAWQgCANgRAFQgEACgXAEQggAFgXATQANgiAjgVg");
	this.shape_386.setTransform(11.9,20.5,0.791,0.791);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#772B11").s().p("AgkgCQAEgVAJgTQALgXAPgLQARgLANAOQANANgLASQgDAGgRARQgpAqgLA7QgEg6AFgag");
	this.shape_387.setTransform(1.5,25.1,0.791,0.791);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#772B11").s().p("AgegXQAnguAtgHQAbgFAEATQAEARgTAQQgQANgYANIgqAVQg1AbgUAhQAVg/Aigmg");
	this.shape_388.setTransform(-6.9,23.4,0.791,0.791);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#772B11").s().p("AgRgVQAugXAwAEQAGABAEALQAFALgCAHQgEAKgOAEQgGACgTABQhNADg7AfQAagpAugVg");
	this.shape_389.setTransform(-10.9,19.1,0.791,0.791);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#F0DF49").s().p("AhFCpQgQAAgIgFQgOgGACgNQABgHAIgIQAOgPAcgNQgJg0gDgxQgEhCAPgmQALgaATgSQAWgTAYgDQAVgCAVAUQARARALAaQAdBCgYBoQgSBLgpAVQgUAKglABIgVABIgcgBg");
	this.shape_390.setTransform(21.3,7.5,0.791,0.791);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F0DF49").s().p("AgTC2QgjgBg0gMQgggIgFgQQgFgQATgXQAgglAsgeQgEhKAlhuQAMgiARgBQAggEAfAhQAXAZASApQATAsAHAXQAKAlgGAfQgIAlgTAdQgVAggfAQQghASgtAAIgFAAg");
	this.shape_391.setTransform(3.4,8.5,0.791,0.791);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#F6C310").s().p("AgbgMQgIgvAJgfQAHgUAOgOQAOgQASgDQgGCXAKCIQgqhHgQhVg");
	this.shape_392.setTransform(-34.8,-48.8,0.791,0.791);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgUgRQAFgIAMgGQALgHAIACQgDAjAIAnQgdgWgMghg");
	this.shape_393.setTransform(-28.2,-29.4,0.791,0.791);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgLgQIAXgIQACAcgZAVg");
	this.shape_394.setTransform(5.6,-37.4,0.791,0.791);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgRgdIAjAAIgJA8QgZgZgBgjg");
	this.shape_395.setTransform(-6.8,-33.1,0.791,0.791);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgQgVQAXgCAKgGQgBAdgVAeg");
	this.shape_396.setTransform(2.5,-35.4,0.791,0.791);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#DAD32B").s().p("AkcB+QAnggA4gRQArgOA/gHQBXgKAUgEQA+gKAqgWQA2gZAqgwQAtgzAOg2QAHA/gYA+QgXA9guAuQgtAsg9AbQg6AahBAGQgWACgWAAQhlAAhrgrg");
	this.shape_397.setTransform(-7.1,-40.8,0.791,0.791);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#D9E38C").s().p("AgZBDQgGgHABgLIAEgTQAOg5AbgwQABAOAGAWIAHAkQAHAsgXAYQgJAJgJABIgDABQgKAAgHgJg");
	this.shape_398.setTransform(-22.1,-72.8,0.791,0.791);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#D9E38C").s().p("AgdA6QgOgEgHgMQgHgNAGgNQATglBXgmQgEARgGAkQgHAfgQARQgKALgNAEQgIADgIAAQgGAAgGgCg");
	this.shape_399.setTransform(8.7,-73.2,0.791,0.791);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#D9E38C").s().p("AhTApQgHgDgCgKQgCgIADgKIAKgZQAIgNALgDQBNgPBPAIQhpAxg0AaQgKAFgGAAIgEgBg");
	this.shape_400.setTransform(20.6,-55.1,0.791,0.791);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FAF32C").s().p("AiyEnQg4goglhFQghg+gNhKQgOhOAEhQQAEhbAahFQAygIAtgDQgFCAA0CaQCQAyBWB5QBBgKAlgwQATgXAJgeQAJgegCgeQgCgbgOgoIgXhDQgQg3AHg7QAHg6AcgzQgJAvARA2QAMAmAfA6QApBNAIARQAZA2AEAsQAGA7gYA6QgXA4gtArQgoAmg6AYQguAThDAMIg2ALQhagOhBgug");
	this.shape_401.setTransform(20.1,-9.9,0.791,0.791);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#DAD32B").s().p("AAgE9QhFgHg6gdQg/gfgkg0Qgmg3gFhKQgGhDAWhFQASg7AnhCQAYgqA0hLIA3gKQgaBFgEBbQgEBQAOBPQANBJAhA+QAkBFA4AoQBBAuBaAOQhcAQhEAAQgaAAgWgDg");
	this.shape_402.setTransform(-0.7,-5.9,0.791,0.791);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FAF32C").s().p("AB/BrQg8ghgzhgQgZAZgRAjQgRAigFAmQAEg1AIgeQANgxAXgbQgpASgjAeQgjAdgXAmQANgvAfgnQAfgnAsgWQgPgLgVAFQgMACgWALQgzAagrAcQApgxAkgVQA/gmAjAUQAfASAYAwIATAnQALAWAKAPQAfArApAAQAHABAGAJQAFAJgDAGQgGAOgSAAQgMAAgPgJg");
	this.shape_403.setTransform(-26.4,-23.1,0.791,0.791);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#772B11").s().p("AhRA8QgTAAgPAIQAGgpgZgbIgZgSQAoguBBgZQArgQAZAOQAOAHALASIASAgQAoBQA/AzQhhgog3ARQgbAIgIARQgRgnglAAg");
	this.shape_404.setTransform(-28,-23.2,0.791,0.791);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#F0DF49").s().p("Ag0CwQgRgCgJgFQgPgIgBgNQgDgNAQgSQAPgRAQgDQADiSBIiCQAsB4AZCAQAGAjgNAdQgPAhggAKQgKADgWABQghAAgbgEg");
	this.shape_405.setTransform(-19.9,3.8,0.791,0.791);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FAF32C").s().p("AgcBXQgZgfgMglQgTg3ATgtQALgZAWgPQAWgQAYAAQALAAAZAHQAbA4gBBDQgBBAgcA7QgJASgJAEQgggUgZgfg");
	this.shape_406.setTransform(-21.3,3,0.791,0.791);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#772B11").s().p("ABAAUQhegehOARQAMgDAYgJQAYgKAOgCQApgIAoAEIAgAFQAVAFAGALQAJAQgTAFQgHACgHAAQgJAAgJgDg");
	this.shape_407.setTransform(-30.2,12.7,0.791,0.791);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#772B11").s().p("AgSgPQASgCAmgBQAmgBATgDQAZgDACAVQADATgZAGQgHABgKAAIgRgCQhdgOheARQApgdA+gJg");
	this.shape_408.setTransform(-31.9,14.7,0.791,0.791);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#76861C").s().p("AATAFIgJgDIgKAAIgSABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIABgBQAIgDAMAAIALACQAFABAEACQABAAAAABQAAAAABAAQAAAAgBAAQAAABAAAAIgBABg");
	this.shape_409.setTransform(12.9,-24.8,1.136,1.136);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#76861C").s().p("AgUADQAAAAgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAGgDAEgBIAKgCQANAAAHAEQABAAAAAAQAAAAABAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAAAIgTgBIgTACIgBABIAAgCg");
	this.shape_410.setTransform(-12.8,-25.1,1.136,1.136);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#76861C").s().p("AgDAWQgDgLABgLQACgNAGgHQAAAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgEAHgCALIgCAUIgBABg");
	this.shape_411.setTransform(-16.7,-11.8,1.136,1.136);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#76861C").s().p("AAEAWIAAgBIgDgUQgCgLgEgHQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAABQAAAAABAAQAFAIACAMQABANgCAJg");
	this.shape_412.setTransform(17.4,-11.8,1.136,1.136);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#AAAC46").s().p("AgBANQgGgBgDgGQgDgFABgFQABgFAEgDQAFgCAEACQAFABAEAGQADAFgBAFQgBAFgFADIgFABIgDgBg");
	this.shape_413.setTransform(-4.7,-15.2,1.136,1.136);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#AAAC46").s().p("AgBANQgGgCgDgFQgDgFABgFQABgFAFgDQAEgCAFACQAFABADAGQADAFgBAFQgBAFgFADIgFABIgDgBg");
	this.shape_414.setTransform(-8.9,-10.1,1.136,1.136);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#AAAC46").s().p("AgBAOQgGgCgDgFQgEgGABgFQABgGAFgDQAFgCAFACQAFACAEAFQADAGgBAFQgBAGgFADIgGABIgDgBg");
	this.shape_415.setTransform(-9.9,-16.8,1.136,1.136);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#AAAC46").s().p("AgGANQgFgDgBgFQgBgFADgFQADgFAGgCQAEgCAEACQAFADABAFQABAFgDAFQgDAGgFABIgEABIgFgBg");
	this.shape_416.setTransform(5.1,-16.2,1.136,1.136);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#AAAC46").s().p("AgHAMQgEgCgBgFQgBgFADgFQADgGAGgBQAEgCAEACQAFADABAFQABAEgDAGQgEAFgFACIgDABQgDAAgDgCg");
	this.shape_417.setTransform(9.3,-11.1,1.136,1.136);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#AAAC46").s().p("AgHAOQgFgDgBgGQgBgFAEgGQADgFAGgCQAEgCAFACQAFADABAGQABAFgDAGQgEAFgFACIgEABIgGgBg");
	this.shape_418.setTransform(10.3,-17.8,1.136,1.136);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#DFC598").s().p("AgOAdIgEgCIgEgEQgCgFAAgJIABgOIABgCQAFgJAEgNIAGABQAJgBAJAGQAJAFAGAJQgDAJgGAJQgKALgEADQgGAHgIAAIgDgBg");
	this.shape_419.setTransform(-11.4,7.1,1.136,1.136);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#ECD0A4").s().p("AgVAaQgGgDAAgGIACgGIAJgRIADgKIADgJQAGgDAGABQANACAKAKQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQgEAMgFAJIgCADQgJAJgIAEQgIADgGAAQgEAAgDgCg");
	this.shape_420.setTransform(-16.2,5.3,1.136,1.136);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#ECD0A4").s().p("AgOAZQgGgBgCgGQgCgFABgGIADgLIAAgBQAGgJADgJQATgFAQAQQABABgHALIgIAKQgEAGgGADQgIAFgEABg");
	this.shape_421.setTransform(-7.1,8.8,1.136,1.136);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#76861C").s().p("AgJArQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQALgogBglQAAgGAFgBQAFAAABAGIAAABQgBAUgFAUQgFAXgHAQIgBAAIgBABIAAgBg");
	this.shape_422.setTransform(-11.9,-1,1.136,1.136);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#76861C").s().p("AgNAsIALgqIADgVQACgOAAgGQgBgGAGgBQAGAAAAAGIAAAAQAAAKgDANQgCALgEAKQgGAWgIATQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_423.setTransform(-7.2,1,1.136,1.136);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#B5BC31").s().p("AA9CsIgngUQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgKgKgLgBQgHgBgGACIAFgdIAAgDIgCgFQgKgVAIghQADgKgBgBIgKgBIgUgDQgagEgJgDQgUgGgMgKQgVgRABgcQABgYAPgbQAlhCAdgUQAZgRAXAJQAZAKAAAdQAAAfALAHQAIAFAgAKQAnARAIAdQANAvgHA6QgGAtgTA6IgGASQgQgQgVAEg");
	this.shape_424.setTransform(-15.5,-13.5,1.136,1.136);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#76861C").s().p("AAGArQgHgTgEgVQgFgUgBgUQAAgFAGgBQAFAAAAAGIAAAAQAAASACAVQAEAVAGARQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_425.setTransform(12.7,-0.9,1.136,1.136);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#76861C").s().p("AALAtQgIgTgGgWQgEgKgCgLQgEgNAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAGAAAAAGIAAABQgBAJACALIAOA/QAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBABIgBgCg");
	this.shape_426.setTransform(7.9,0.9,1.136,1.136);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#DFC598").s().p("AgCAXQgEgDgKgLQgGgJgDgJQAFgJAJgFQAKgGAJABIAGgBQAEANAFAJIABACIABAOQgBALgBADIgEAEIgEACIgDABQgIAAgGgHg");
	this.shape_427.setTransform(12.2,7.1,1.136,1.136);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#B5BC31").s().p("AhnCmQgTg7gGgsQgHg7ANguQAJgdAmgRQAUgIAUgHQALgHAAgfQAAgdAYgKQAYgJAZARQAdAVAlBBQAPAbABAYQABAcgVARQgMAKgUAGQgJADgaAEIgUADIgKABQgBABADAKQAIAhgKAVIgCAFIAAADIAFAdQgGgCgHABQgLABgKAKQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgnAUQgVgEgQAQIgGgSg");
	this.shape_428.setTransform(16.2,-13.5,1.136,1.136);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#1E120D").p("AgTALQAFgJAJgEQAJgGAKABQAFAAABgB");
	this.shape_429.setTransform(11.5,4.8,1.136,1.136);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#ECD0A4").s().p("AABAZQgIgEgJgJIgCgDQgFgJgEgMQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQAKgKAMgCQAGgBAGADIACAEIABAFIADAKIAJARIACAGQAAAFgFAEQgEACgEAAQgGAAgIgDg");
	this.shape_430.setTransform(16.9,5.3,1.136,1.136);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#ECD0A4").s().p("AANAZQgEgBgJgFQgFgDgEgGIgIgKQgHgLABgBQAQgQATAFQADAJAGAJIAAABIADALQABAGgCAFQgCAGgGABg");
	this.shape_431.setTransform(7.9,8.8,1.136,1.136);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_432.setTransform(5.2,-84.8,1.136,1.136);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#F6F6F7").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_433.setTransform(-6.3,-84.8,1.136,1.136);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#4F4F5E").s().p("AgHAJQgDgDAAgGQAAgEADgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAGgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_434.setTransform(-6.3,-84.2,1.136,1.136);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#4F4F5E").s().p("AgHAJQgDgDAAgGQAAgEADgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAGgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_435.setTransform(5.2,-84.2,1.136,1.136);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#76861C").s().p("AAJAkQgIgDgMgKIgMgKQgVgRgIgbQgCgFADgCQACgCAFADIAOAIQAJAEAZAFQAZAFAKAHQAKAIAEAKQACAGgEAGQgDAGgHAGQgEADgFABIgIACQgHAAgIgEg");
	this.shape_436.setTransform(-16.3,-95.5,1.136,1.136);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#A2CB00").s().p("AAJA9QgJgGgVgSIgRgRQgegggKgrQgCgIAEgDQAEgCAIAGIAUAOQAOAIAoALQAkAKAQAOQAOALADAOQADAPgLAOQgLAPgRADIgJAAQgMAAgNgGg");
	this.shape_437.setTransform(-18.4,-97.3,1.136,1.136);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#76861C").s().p("AgVAvIgKgDQgNgHgDgNQgBgJALgNQAKgKAVgIQAYgKAIgGIAMgLQAFgDACAAQADACgBAFQgDAcgQAWIgKAMQgLAMgHAFQgIAHgKAAIgDAAg");
	this.shape_438.setTransform(14.9,-96.4,1.136,1.136);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#A2CB00").s().p("AgbBOQgKAAgFgCQgTgJgFgMIgCgKQgCgSAMgRQANgRAhgQIAZgNQAOgIAKgJQAGgFALgNQAGgHAEABQAFABAAAKQgBArgXAmIgNAUQgPAVgKAIQgQAOgRAAIgBAAg");
	this.shape_439.setTransform(16.4,-98.6,1.136,1.136);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DFC598").s().p("AgbAMIgEgZQAUgLAVgDIAIALIAOAWQgaADgcATQgDgIgCgIg");
	this.shape_440.setTransform(-9.7,-106.4,1.136,1.136);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#B01016").s().p("AgkgHQAegTAZgDQALAVAGARQgNAAgPAFQgPAHgOAIQgKgUgFgQg");
	this.shape_441.setTransform(-8.2,-102.3,1.136,1.136);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B01016").s().p("AgEgRQAHAAAJALIAJAKQgVADgUAMQgFglAVABg");
	this.shape_442.setTransform(-11,-110,1.136,1.136);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#DFC598").s().p("AgOATQgIgEgIgPIgCgDQAPgIAQgHQAOgFANAAIAGAPQAFAQgTALQgJAFgJAAQgHAAgHgFg");
	this.shape_443.setTransform(-7,-98.5,1.136,1.136);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#DFC598").s().p("AgfAGIAOgXIAIgKQAVADAUALIgEAYQgCAKgDAHQgagTgcgDg");
	this.shape_444.setTransform(7.8,-107,1.136,1.136);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#B01016").s().p("AgIAPQgNgFgOgBQAHgRAKgVQAbAEAbATQgEAQgKAUQgRgLgNgEg");
	this.shape_445.setTransform(6.3,-102.9,1.136,1.136);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#B01016").s().p("AgUAEIAJgKQAJgLAHAAQAVgBgFAlQgUgMgVgDg");
	this.shape_446.setTransform(9.2,-110.7,1.136,1.136);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#DFC598").s().p("AgQATQgTgLAFgQIAFgPQAPABAMAFQANAEASAKIgBADQgIAOgIAFQgIAFgIAAQgHAAgJgFg");
	this.shape_447.setTransform(5.1,-99.2,1.136,1.136);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgRAVQgIgJAAgMQAAgMAIgIQAHgJAKAAQALAAAHAJQAIAIAAAMQAAANgIAIQgHAJgLAAQgKAAgHgJg");
	this.shape_448.setTransform(-7.1,-84.8,1.136,1.136);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgRAVQgIgIAAgNQAAgMAIgIQAHgJAKAAQALAAAHAJQAIAIAAAMQAAAMgIAJQgHAJgLAAQgKAAgHgJg");
	this.shape_449.setTransform(6.2,-84.8,1.136,1.136);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#76861C").s().p("AgUASQgEgBABgFQADgMAKgIQAKgJANgBIAAAAQAKgBABAJQABAJgJABIgDAAQgHAAgHADQgJAFgEAIQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_450.setTransform(-8.5,-89.6,1.136,1.136);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#76861C").s().p("AAPAQQgEgIgJgFQgHgDgHAAQgKABgBgJQgBgEADgDQACgDAEAAIADAAQANABAKAJQAKAIADAMQABAFgFACIAAAAQgDAAgCgDg");
	this.shape_451.setTransform(7.8,-89.6,1.136,1.136);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#76861C").s().p("AgLAWQgIgFgDgLQgDgLAFgJQAGgLAMAAQAOAAAIANQACADACAGQACAJgEAIQgEAIgKADIgIABQgFAAgGgEg");
	this.shape_452.setTransform(-8.3,-67.2,1.136,1.136);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#A2CB00").s().p("AgXAuQgRgLgGgXQgHgXALgUQAMgVAYAAQANgBANAIQANAHAHAMQAGAIACAMQAEASgHAQQgJASgTAFQgHACgIAAQgNAAgMgHg");
	this.shape_453.setTransform(-8.3,-67.2,1.136,1.136);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#76861C").s().p("AgHAZQgKgDgEgIQgEgIACgJQABgEADgFQAIgNAOAAQAMAAAGALQAFAJgDALQgDALgIAFQgGAEgGAAIgHgBg");
	this.shape_454.setTransform(8.4,-67.2,1.136,1.136);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#A2CB00").s().p("AgQAzQgTgFgJgSQgHgQAEgSQACgMAGgIQAHgMANgHQANgIANABQAYAAAMAVQALAUgHAXQgGAXgRALQgMAHgNAAQgIAAgHgCg");
	this.shape_455.setTransform(8.4,-67.2,1.136,1.136);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#F8FF36").s().p("AhFDFQgPgDgMgHQgHgFgIgJQgSgXADgiQACgZAPghQAIgPACgGQADgKgIgLQgUgbgGggQgGghALgeQAfhZBegCQBfACAfBZQAKAegFAhQgGAfgUAcQgGAJgBAGQAAAFAFAKQALATAHAYQAJAggEAUQgCAOgKANQgHAKgJAGQgXAPgegGQgHgBgQgIQgNgHgJAAQgJABgMAHQgPAJgFABQgIADgJAAIgLgBg");
	this.shape_456.setTransform(-0.4,-77.5,1.136,1.136);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#DFC598").s().p("AAHAkQgKgFgIgiIgGghQAeANAFgBQABAsgGANQgCAEgCAAIgCgBg");
	this.shape_457.setTransform(-8.1,-53.6,1.136,1.136);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#DFC598").s().p("AgMAhQgGgNABgsIAGgBQALgDASgIIgGAhQgIAigKAFIgCABQgCAAgCgEg");
	this.shape_458.setTransform(8.2,-53.6,1.136,1.136);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#AAAC46").s().p("AgJAiQgtgDgggZQgTgOgHgUQAIAJAHAFQAMAHAOADQAPACANgEQAGgBAPgJQAMgHAJgBQAJAAANAHQAQAIAHABQAeAGAXgPQAJgGAHgKQgJAggiARQgfASgnAAIgJAAg");
	this.shape_459.setTransform(-0.2,-54.6,1.136,1.136);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#DFC598").s().p("AgUANQgLgPAGgMQAGgKAUgCQAVgCAFALQADAEgDAKQgFAMgIAJQgGAHgFABIgEABQgKAAgJgOg");
	this.shape_460.setTransform(-51.3,-22.9,1.136,1.136);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#DFC598").s().p("AgRATQgPgPAEgMQAEgMAWgHQAVgHAIAKQAEAGgCAJQgBANgHANQgFAIgGADQgEACgEAAQgIAAgLgLg");
	this.shape_461.setTransform(-47.7,-12.1,1.136,1.136);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#DFC598").s().p("AgTASQgOgRAFgMQAFgLAWgFQAWgFAHAKQAEAGgDAKQgDAMgHAMQgHAJgEACIgHABQgKAAgKgMg");
	this.shape_462.setTransform(-41.7,-3.2,1.136,1.136);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#D1D42A").s().p("AijAsIAnhnQB8AnB/gfIAlBjQhOAMhNAAQhWAAhWgQg");
	this.shape_463.setTransform(0.4,-5.4,1.136,1.136);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#D1D42A").s().p("AiqgDQgLgUgHgWQBhAeB5gGQBFgDBbgRQgIAUgIAPQhSAzhdABQhcgBhNgwg");
	this.shape_464.setTransform(0.2,41.5,1.136,1.136);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#C5C200").s().p("AjCAlQALgqATg2QCjAfClgcQAVA6AKAsQhWAOhWAAQhsAAhtgXg");
	this.shape_465.setTransform(0.4,6.5,1.136,1.136);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#D1D42A").s().p("AjPAzQgBglAGgnQAEgWAFgWQDBApDEggQAFAWABANQAHAogBAnQhkAQhjAAQhsAAhsgTg");
	this.shape_466.setTransform(0.3,18.7,1.136,1.136);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#C5C200").s().p("Ai9AnQgRgvgBg4QDOAmDRgiQgDA4gQAvQhaARhFAEIgnABQhjAAhRgag");
	this.shape_467.setTransform(0.3,31.8,1.136,1.136);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#C5C200").s().p("Ah9AjIAWg9IAJgeQBdAZBegTIAIAYQAJAcAQApQg4AOg3AAQhGAAhGgWg");
	this.shape_468.setTransform(0.5,-16.2,1.136,1.136);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#D1D42A").s().p("AgyAhIgBAAQABghgDgjIATAEQArAFAsgJQgBAgAAAgQgfAHgeAAQgUAAgVgDg");
	this.shape_469.setTransform(0.3,-57.9,1.136,1.136);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#C5C200").s().p("AgiAgIgTgDIgBgdQAGgPAPgJQAOgJASAAQAQAAAPAIQAPAIAIAQIACAHIgCAWQgcAGgcAAQgPAAgQgCg");
	this.shape_470.setTransform(0.3,-65.3,1.136,1.136);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#D1D42A").s().p("Ag9AeQAFglACgeQAuAUA/gQQACAdAFAlQgcAFgcAAQgiAAghgIg");
	this.shape_471.setTransform(0.3,-42.5,1.136,1.136);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#C5C200").s().p("Ag2AdQADgfAAggIABAAQAzAIAzgNQABAoACAgQgcAHgZAAQgfAAgZgLg");
	this.shape_472.setTransform(0.3,-50.1,1.136,1.136);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#C5C200").s().p("AhKAeQAHgfAGgnQA7APBAgMQAEAfAJAmQgjAJgkAAQgmAAgogLg");
	this.shape_473.setTransform(0.4,-34.5,1.136,1.136);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#D1D42A").s().p("AhdAeQAJghAKgoQBKAWBLgUQAIAoALAlQgpAIgpAAQg0AAg1gOg");
	this.shape_474.setTransform(0.4,-26.1,1.136,1.136);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#76861C").s().p("AgMBKQgGgBgEgGIgEgLQgBgHACgOQACgQAHgWQANgnAZgfQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQgXAhgKAlQgFANgEAXQgCANABAGQABAKAGADQABAAABABQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCgBg");
	this.shape_475.setTransform(29,38.2,1.136,1.136);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#AAAC46").s().p("AAAALQgDAAgDgDQgDgDABgFQAAgEACgDQADgDAEAAQADAAADAEQADADgBAEQAAAEgCADQgDADgEAAIAAAAg");
	this.shape_476.setTransform(53.2,13,1.136,1.136);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#AAAC46").s().p("AAAALQgEgBgDgDQgDgEgBgEQABgFADgCQAEgEADACQAFAAADAEQAEAEAAAEQAAAFgEADQgDACgDAAIgCgBg");
	this.shape_477.setTransform(41.4,6.7,1.136,1.136);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#AAAC46").s().p("AgHAKQgDgEAAgGQAAgEADgEQADgFAEAAQAFAAADAFQADAEAAAEQAAAGgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_478.setTransform(49,21.3,1.136,1.136);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#AAAC46").s().p("AAAANQgDgBgFgEQgEgEAAgFQABgFADgDQADgDAFABQAFAAADAEQAEAEABAFQgBAFgDADQgDADgEAAIgCAAg");
	this.shape_479.setTransform(37.8,12.3,1.136,1.136);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#AAAC46").s().p("AABANQgEgBgEgEQgEgEAAgFQgBgFAEgDQADgDAFABQAEAAAEAEQAEAEAAAFQABAFgEADQgDADgEAAIgBAAg");
	this.shape_480.setTransform(41.7,17.3,1.136,1.136);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#AAAC46").s().p("AgHALQgFgEgCgGQgBgFAEgEQACgFAHAAQAEgBAGAEQAGAEABAGQABAFgEAEQgDAFgGAAIgBAAQgEAAgFgDg");
	this.shape_481.setTransform(47.7,5.6,1.136,1.136);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#AAAC46").ss(1.2,1).p("AgEgBQAEADAFAAQAGAAADgDQACgEAAgGIAAgFQgCgHgHgDQgHgCgGACQgIADgFAIQgEAIAAAIQABANALAJQALAIAMgEQAFgCADgFQAEgEAAgF");
	this.shape_482.setTransform(47.7,12.4,1.136,1.136);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#DFC598").s().p("AgZAaQgKgEgMgCQgBgXARgRQAUgRAYAFQAWAMAIARQAEAIAAAHIABADQgCAEgMAIIgMAGIgJABQgOAAgYgIg");
	this.shape_483.setTransform(56.4,46.3,1.136,1.136);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#D0B077").s().p("AALAlQgOgCgNgGQABgGgFgJQgIgRgVgLIAEABQAMgSAVgGQAkAPAQAQQATASgSATQgGAHgOAAIgKgBg");
	this.shape_484.setTransform(63.6,44.3,1.136,1.136);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#F8FF36").s().p("AgyDLQgcgDgWgMQgNgHgEgBIgTABQgeACgOgaQgMgVABgfQAChKAThGQASg/AcggQAPgRATgNQA0gmA1gCQAegBAaALQAcAMASAVQAoAwgNBjQgJBJgaAqQAsALAnAPQgVAGgMASQgNgEgNACQgOADgJAJQgSARACAYQgUgDgaABIgvADIgcACIgXgCg");
	this.shape_485.setTransform(40.3,25.5,1.136,1.136);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#C19C56").s().p("AAjAiIgtgEQgagCgSgJIgCgBQAHgNAKgMQAPgSATgHIAEgBIAKADQAeAMANAVQAFAJgBAIQgBALgJADIgEAAIgHAAg");
	this.shape_486.setTransform(65.2,42.9,1.136,1.136);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#AAAC46").s().p("Ag0gaQABADA8gFQAYAAAUAFIgEABQgTAIgPARQgKAMgFAOQgqgWgKghg");
	this.shape_487.setTransform(58.9,41.7,1.136,1.136);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#76861C").s().p("AAIBIQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAGgDACgKIgBgTQgDgSgGgSQgLgngXgfQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAABABAAQAAAAAAAAQAZAfANAnQAHARADAVQACAMgCAJQgBAGgDAFQgDAGgGABIgCABQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_488.setTransform(-27.8,38.2,1.136,1.136);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#AAAC46").s().p("AgFAIQgDgDgBgEQAAgKAJgBQAEAAACADQADADAAAEQABAFgDADQgDADgEAAIAAAAQgCAAgDgDg");
	this.shape_489.setTransform(-52,13,1.136,1.136);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#AAAC46").s().p("AgHAKQgDgDAAgFQgBgEAEgEQADgEAEAAQAEgCAEAEQADACAAAFQAAADgDAFQgDADgFABIgBABQgDAAgDgCg");
	this.shape_490.setTransform(-40.2,6.7,1.136,1.136);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#AAAC46").s().p("AgHAKQgDgEAAgGQAAgEADgEQADgFAEAAQAEAAAEAFQADAEAAAEQAAAGgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_491.setTransform(-47.7,21.3,1.136,1.136);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#AAAC46").s().p("AgIAKQgEgDABgFQAAgFAEgEQAEgEAEAAQAFgBADADQAEADgBAFQAAAFgEAEQgEAEgEABIgBAAQgEAAgDgDg");
	this.shape_492.setTransform(-36.6,12.3,1.136,1.136);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#AAAC46").s().p("AgIAKQgDgDAAgFQAAgFADgEQAFgEADAAQAGgBADADQAEADAAAFQgBAFgEAEQgDAEgFABIgBAAQgEAAgDgDg");
	this.shape_493.setTransform(-40.5,17.3,1.136,1.136);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#AAAC46").s().p("AgCAOQgGAAgEgFQgDgEABgFQACgGAFgEQAGgEAEABQAGAAAEAFQADAEgBAFQgCAGgFAEQgFADgEAAIgBAAg");
	this.shape_494.setTransform(-46.5,5.6,1.136,1.136);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#AAAC46").ss(1.2,1).p("AAFgBQgDADgFAAQgHAAgDgDQgCgFAAgFIAAgFQACgHAIgDQAFgCAIACQAIADAEAIQAEAIAAAIQAAANgLAJQgLAIgNgEQgEgCgEgFQgDgEgBgF");
	this.shape_495.setTransform(-46.5,12.4,1.136,1.136);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#DFC598").s().p("AgVAhIgMgGQgLgIgDgEIABgDQAAgHAEgIQAIgSAWgLQALgCAMADQAMADAIAHQATARgDAYIgVAFIgXAHQgHACgGAAIgLgBg");
	this.shape_496.setTransform(-55.1,46.3,1.136,1.136);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#D0B077").s().p("AgpAfQggghBWgjQAVAGALASIAFgBQgVALgIARQgEAJAAAGQgNAGgOACIgKABQgOAAgHgHg");
	this.shape_497.setTransform(-62.3,44.3,1.136,1.136);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#F8FF36").s().p("AgBDLIgugDQgagBgUADQACgYgSgRQgKgJgNgDQgOgCgNAEQgLgSgVgGQAogQArgKQgZgpgKhKQgNhkAogvQARgVAcgMQAbgLAeABQA1ACA0AmQASAMAQASQAcAgARA/QATBFADBLQAAAfgLAVQgPAagdgCIgTgBQgFABgMAHQgWAMgcADIgXACIgdgCg");
	this.shape_498.setTransform(-39,25.5,1.136,1.136);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#C19C56").s().p("AgtAiQgJgEgBgKQgBgIAFgJQANgVAegMIAKgDIAEABQATAHAPASQAKAMAHANIgCABQgSAJgaACIgtAEIgHAAIgEAAg");
	this.shape_499.setTransform(-64,42.9,1.136,1.136);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#AAAC46").s().p("AgPADQgOgRgUgIIgEgBQAUgFAZAAQA8AFACgDQgMAhgpAWQgGgOgKgMg");
	this.shape_500.setTransform(-57.7,41.7,1.136,1.136);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#DAF200").s().p("AhjFfQg8h7BKihQAYg0A0hSQA7hiAQgeIAXgqQANgZAFgTQAEgUACgcIADgxIABgsQABgcAGgQQARDPhBDFIg4CYQggBbgLBAQgJA6AHA4QAHA9AZAvQhIgugihGg");
	this.shape_501.setTransform(-20,-12.1,1.136,1.136);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#DAF200").s().p("AAaFkQAHg3gKg5QgKhBghhbQgnhjgRg0Qg+jDAPjNQAFAQACAaIABApQAEBGAGAcQAEASANAZIAXArQAQAeA7BiQA0BRAYA1QBLChg8B6QgjBGhHAsQAYgvAHg8g");
	this.shape_502.setTransform(20.7,-12,1.136,1.136);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#F8FF36").s().p("AC9DyQgFgBgCgEQhMh/gTiQQgHAYgJAVQgOAggQAcIgSAdIgTAcQgCACgCgBQgDgCACgDIARgdIAPgdQAOgbAMgiQAMgiAFgcIAEgWIgRAVQgaAfgYAUQgcAZgaASQgYARgjAUQgEABgBgCQgBgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAigVAXgTQASgOAggfQAXgXAWgdIAUgcIgoANQglALgkAGIglAGIgmAEQgeADgugBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQApgBAigFIAkgFIAlgIQAjgJAjgMIAlgPQiAgihshSQgBgBAAAAQAAgBgBAAQAAgBABgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAQAAABABAAQB8BTCRAYIAAAAIADABIABAAIABAAIAAABIABAAIADADIAAABIABAAIABACIAAADIAAABQAABbAZBYQAYBZAvBOQACAEgBAFQgBAEgEACQgDACgDAAIgCAAg");
	this.shape_503.setTransform(-33.5,-60.9,1.136,1.136);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#C7CA14").s().p("ABpCgQgygdgygCQgNgkgvgNIgtgHQACg6gwgpIgwgfQAmgpgFhIIgMg/QB8BYCSAbQAABdAaBaQAZBaAvBQQgwgygqgZg");
	this.shape_504.setTransform(-33.9,-61.3,1.136,1.136);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#F8FF36").s().p("AjEDwQgEgCgBgEQgBgFACgEQAvhOAYhZQAZhYAAhbIAAgCIAAgCIABgCIABgBIAAAAIADgEIABAAIABgBIABAAIADAAIAAAAQCSgYB7hTQABgBAAAAQABAAABAAQAAAAABABQAAAAABABQACACgDADQhsBRiAAjIAlAOQAjANAjAIIBJAOQAeAEAtABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgzABgZgCIgmgEIglgGQgqgIgfgKQgagHgOgGQAHAMANARQAWAdAXAXQAbAbAXASQAUAQAlAYQADABgCAEQgBABAAAAQAAAAgBABQgBAAAAAAQgBgBgBAAQgjgUgYgRQgZgRgdgaQgYgVgageIgRgWIAEAXQAFAeAMAgQAMAiAOAbIAPAdIARAcQABAEgCABQgCACgCgDIgTgbIgSgdQgQgcgOghQgKgWgGgWQgTCRhMB9QgCAEgEABIgEABQgCAAgDgCg");
	this.shape_505.setTransform(33.6,-60.6,1.136,1.136);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#C7CA14").s().p("Ah5BBQAYhaABhdQCSgcB9hXIgNA/QgFBIAmApQgYAKgYAVQgwApACA7QgUgBgZAHQgvAOgNAjQgyACgyAdQgpAZgxAyQAwhQAZhag");
	this.shape_506.setTransform(34,-61,1.136,1.136);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#DFC598").s().p("AgIAeQgVgKgBgQQgBgMAUgPQAUgQAMAIQAFADADAMQADAOgCAPQgCALgFAFQgFAGgJAAQgIAAgJgFg");
	this.shape_507.setTransform(-32.2,3.9,1.136,1.136);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#AAAC46").s().p("ACmFcQgYgBgXgGQgogLgvgaQiehZhmioQhsiwAQivQABgTAGgKQAEgHAHgEQAHgEAHABQALACAHAKQAIALAEAQIAFAeQAPBTA0BIQA1BJBLAmQApATB+AUQBrARAyAtQAtAoAKA+QAKBAglAsQgWAagkANQgcAKgfAAIgLAAg");
	this.shape_508.setTransform(-21.7,6.2,1.136,1.136);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#7A771B").s().p("AgTBHQgFgDgBgGIAAgCQAAgMADgYQACgRAFgRQAEgMAJgUQAHgPAMgOQAEgEADAEQAEACgDAEQgJAPgFAOQgGATgCAMQgCANAAASQAAASACANQABAGgDAFQgDAFgGABIgDAAQgEAAgEgDg");
	this.shape_509.setTransform(-53.9,-41.2,1.136,1.136);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#999734").s().p("AgRBhIgHgCQgYgLgMgUQgMgXAJgeQAIgYATgWQATgVAWgPIAWgRQAXgPAKADQALADgDANQgCAHgGAMIgHAYQgDAOACAUIAGAhQAIAngTAUQgMAMgSADIgMABQgKAAgMgEg");
	this.shape_510.setTransform(-54.1,-42.6,1.136,1.136);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#F8B019").s().p("AAkAiQgZgrg/gZQA1gGApAnIALAFQAAANgPATg");
	this.shape_511.setTransform(-9.4,-130.6,1.224,1.224);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#B8AF38").s().p("AgRAAQARgEASgEQgCAHgFAFQgGAEgGAAQgJAAgHgIg");
	this.shape_512.setTransform(-42.5,-128,1.224,1.224);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F5AE97").s().p("AgsAHQAkgMA1gIQgSASgNAGQgHADgKAAQgQAAgZgHg");
	this.shape_513.setTransform(-41.2,-128.2,1.224,1.224);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#B8AF38").s().p("AgTAQQgTgDgPgGQANgFAYgFQAjgJAjgEQgWAYgQAHQgHACgJAAQgIAAgLgBg");
	this.shape_514.setTransform(-40.9,-127.9,1.224,1.224);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#B8AF38").s().p("AgeAFQAdgJAggEQgMALgKAFQgEABgGAAQgLAAgSgEg");
	this.shape_515.setTransform(-65.9,-124.1,1.224,1.224);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#F8B019").s().p("AiNBvIBPhQIBegYIBuh2IhRCOIhaAeIguAyg");
	this.shape_516.setTransform(-15.1,-147.2,1.224,1.224);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#E7FF2F").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQAEgQAHgNQAVANARAOQA1gIBzgaQBhgOApAwQAMAOASgBIAEAAQANgBAJgKQAKgJAAgNIAIh8IAGgCIgLCrQgBAKgHAHQgHAHgKABIgPABIgDAAQgMAAgIgKg");
	this.shape_517.setTransform(-49.4,-124.2,1.224,1.224);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#F1FF59").s().p("ACQBZQgpgzhiANQh1Abg1AHQgWgSgegRQALgwAygiQBBAIBlgTQBUgRB8gmIgLCrQgBAKgHAHQgHAHgKABIgPABIgDAAQgMAAgIgKg");
	this.shape_518.setTransform(-49.4,-124.2,1.224,1.224);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FBC156").s().p("AiDATQgHgIgKgJQAYgDA7gPQA3gNAcgEQBfgMAkA9IjvATIgGABQgVAAgOgRg");
	this.shape_519.setTransform(-49.8,-115.2,1.224,1.224);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#F1FF59").s().p("AEFKpQAuhpASiHQAejhhBjhQhFjuili3Qh8iLiPhJQE/Glg2JOQAGiegkjQQhJmejZj6QA+CIAkC7QAvD3guClQAQiegnjGQgfiag5iVQAXBvgOCDQgPB+gnA+QgYgKgUAAQA2hRACiyQADi6g7h5QAqgEBYAqQBjAwBjBTQEIDeBfFIQBREWg5EFQgcCDgtBKQgDgUgHgfg");
	this.shape_520.setTransform(37.5,-41.7,1.224,1.224);

	this.instance_6 = new lib.Path_1_0_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(37.5,-20.6,1.224,1.224,0,0,0,36.8,56.1);
	this.instance_6.alpha = 0.5;

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#E7ED36").s().p("ADoJJQg8iehng3QgViBguhBQgxhGhyg1QgQhYhChDQg+g/g+gCQA2hRACiyQADi6g7h5QAqgEBYAqQBjAwBjBTQEIDeBfFIQBREWg5EFQgcCDgtBKQgJhEgehPg");
	this.shape_521.setTransform(37.5,-41.7,1.224,1.224);

	this.instance_7 = new lib.Path_14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-26.4,-2.8,1.224,1.224,0,0,0,8.3,33.4);
	this.instance_7.alpha = 0.27;

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#999317").s().p("AAaDeQAghJgLg3QgsghAYg2IAbg4QAQglAFgkQAHhMgTg5QgYhFg6gMQgkgHgkAkQAUgaAXgMQAWgMAVAEQA6AMAYBFQAUA4gHBNQgFAkgRAlQgJAWgRAiQgYA1AsAiQAKA3ghBOQgoBegEAwIgNADQAFgnAnheg");
	this.shape_522.setTransform(-18.6,-6.7,1.224,1.224);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#F1FF59").s().p("AgWDbQgFhHgggqQgshcgLhTQgNhdAchNQATg9AkghQAiggAgAGQA7AMAYBFQAUA5gHBMQgFAkgRAmQgJAVgRAiQgYA2AsAhQAKA3ghBOQgpBfgEAvIg3APQAOhXgDg3g");
	this.shape_523.setTransform(-22,-6,1.224,1.224);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F1FF59").s().p("AAvAhIhpAAIgHgCQgDgOgJgOIADAAICYgjQACAbgKATQgJATgNAAIgBAAg");
	this.shape_524.setTransform(-28.8,40.3,1.224,1.224);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#F8B019").s().p("AgRgEQATgIAkgDQAJAOAEANIgZgGQgggDgsANQASgPAPgFg");
	this.shape_525.setTransform(-43.1,42.6,1.224,1.224);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFF530").s().p("AgUACIApgDIgFABQgEACgGAAg");
	this.shape_526.setTransform(34,43.7,1.224,1.224);

	this.instance_8 = new lib.Path_1_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(26.2,3.7,1.224,1.224,0,0,0,12.6,32.6);
	this.instance_8.alpha = 0.27;

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#F1FF59").s().p("AivFHQgBgLgCgMQgCgJAFgIQAFgHAJgDIBegWIAHgDIAegUQAMgIgCgOQgBgNgNgGIhNgdQgfgNgSgbQgTgcAAghIADjvQAAg9AsgsQArgrA+AAQA7AAAsAqQArArABA9IAAAFIguDiQgDAJAGAIIBjCcQAGAJgDAKQgDAKgJAEIiOBEQgEACgGAAg");
	this.shape_527.setTransform(32.9,3.9,1.224,1.224);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#F8B019").s().p("AAugTIAPgDQALAOABAcIgEAAQgegMgnACQgiABgmAMQAwguBGAEg");
	this.shape_528.setTransform(5,41.5,1.224,1.224);

	this.instance_9 = new lib.Group_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19.7,-60.2,1.224,1.224,0,0,0,53.2,74.4);
	this.instance_9.alpha = 0.398;

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FBC156").s().p("AAALgQg7AEgtgSQgugSgshTQgzhhgfgaQgPgNgUgKIgmgRQg5gXgfgRQgwgbglgnQgUgVgGgbQgGgcAJgaQAYhMAQhsQgCh0AVipQAajDALhiIAUAAQgBBQgODeQgMC6AFA1QAGA9ClCuQBjBpAVAXQA6BDANAhQAOAoA3ArQAxAoAiAIQAzALBCABQBdABAwgbQBEgmAigkQAwg1AJhLQAJhHgtiZQgfhngghLQg5hpgvhZQhaiugKhKQgLhQAUg+QAKgeAohFQARggAygrQhLBMgbBZQgiBwA0BxQAeBBBHB3QBYCUAcAyQCFD4gUCqQgIBEgtBBQgtBDhIAuQhxBHiDAAQhBAAhGgSg");
	this.shape_529.setTransform(22,-61.2,1.224,1.224);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#999317").s().p("AFFGFQAAiRhGhvQhDhuhogYQgWgFgmgXIhIgtQhjg8hGACIgVADQg7ibALjJIAAgxQgBgfACgUIg2AAIACgUIBFAAQgDAUAAAfIABAxQgLDIA8CcIAUgDQBGgCBjA8IBIAtQAmAXAWAFQBoAYBEBuQBEBvAACRQAACCg4BpIgIACQAxhiAAh3g");
	this.shape_530.setTransform(8.4,-49.8,1.224,1.224);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#F1FF59").s().p("AhZAEQAejZAMhuIBEAAQgDAUABAfIAAAyQgND8BiC2IjNBvQgJiBAVi+g");
	this.shape_531.setTransform(-27.2,-84.3,1.224,1.224);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#F1FF59").s().p("AkTMFQAphHBaiLIBTh8QAsALAtgcQA1ggAVhEQA4i2jMlCQiUjqBtjKQAohKBBgzQA7gsArgDQhnA4g9BsQhTCTBGCZQAdBBBGB2QBZCTAbA0QCFD4gUCpQgHBFgtBBQguBChIAuQhwBIiDAAQhBAAhGgSg");
	this.shape_532.setTransform(55.8,-65.7,1.224,1.224);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#F1FF59").s().p("AA4GPQgugSgrhTQgzhigfgaQgPgNgUgJIgmgRQg5gXgfgSQgwgbglgnQgUgUgGgbQgGgbAJgbQAWhHAPhhIAXirIBJBBQAsghA4gCQBFgDBjA8IBIAtQAmAXAWAFQBoAaBEBtQBFBvAACQQAACCg5BpQhfAdguAHQgbAEgZAAQguAAgmgOg");
	this.shape_533.setTransform(2.3,-21.6,1.224,1.224);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#B8AF38").s().p("AgWDbQgFhHghgqQgrhcgMhTQgMhdAchNQATg9AjghQAiggAhAGQA7AMAYBFQAUA5gIBMQgEAkgRAmIgaA3QgYA2AsAhQAKA3giBOQgoBfgEAvIg3APQAOhYgDg2g");
	this.shape_534.setTransform(-27.1,-6,1.224,1.224);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#B8AF38").s().p("AhYAMQAUgIAmgDICYgiQACAbgKATQgKAUgNgBIhpAAIgggIQghgDgqANQASgQAPgGg");
	this.shape_535.setTransform(-39.4,40.5,1.224,1.224);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#B8AF38").s().p("AgzAFIDeg1IAABdIjIAAQgegLgnABQgiACgmAMQAvgwBIAEg");
	this.shape_536.setTransform(9.2,38.4,1.224,1.224);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#B8AF38").s().p("Ai1FHIC2h3Ii6hJIAEk5QAAg9ArgsQAsgrA+AAQA8AAAsArQArAsAAA9IgxDuIB3C6IiqBRg");
	this.shape_537.setTransform(28.3,3.9,1.224,1.224);

	this.instance_10 = new lib.Path_13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(29.9,-44.4,1.31,1.31,0,0,0,3.8,8.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#EEDCC4").s().p("AAiBSIgIgEIgKgHIgPgOIgOgTIgIgPIgIgPIgJgeIgCgaIACgRQACgKAKgFQAJgFAKACQAOAEADAQIABAHIAAAEIAGA9IANA0IALAYg");
	this.shape_538.setTransform(29.4,-44.4,1.31,1.31);

	this.instance_11 = new lib.Path_2_5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(21,-42.4,1.31,1.31,0,0,0,2.4,8.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#EEDCC4").s().p("AAXBUIgHgGQgEgDgEgFIgIgLIgQgjIgLgnIgBgdIADgSIABgEIACgHQAEgJAKgEQAJgEAKAFQAOAGAAAQIAAAHIAAAEIAAAHIgDA2IAAAPIACAnIABAKIACAIIACAHg");
	this.shape_539.setTransform(20.2,-42.4,1.31,1.31);

	this.instance_12 = new lib.Path_4_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.9,-41.6,1.31,1.31,0,0,0,2.9,8.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#EEDCC4").s().p("AgOBUIgKgSIgEgNIgEgPIgBgIIgCgZIABgQIADgRIABgHIAIgVIAFgLIAKgNQAHgIAJAAQALAAAIAHQALALgFAPIgEAKIgBADIgfBRQgCAHgBAGIgCALIgCATIABAHg");
	this.shape_540.setTransform(12.1,-41.6,1.31,1.31);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#849927").s().p("AAABBIhSgWQgHgCAAgHQgBgIAGgDQA6gdA9g6IA3A1QggAPgNAOIghArQgDAEgFAAIgEAAg");
	this.shape_541.setTransform(22.5,-79.2,1.31,1.31);

	this.instance_13 = new lib.Path_7_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(20.8,-60.8,1.31,1.31,0,0,0,6.4,10);
	this.instance_13.alpha = 0.559;

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#E4ED37").s().p("Ag0AEQABg6gOg1IBIARQAgAiAPAxQAOAsgCAtIh9AaIAHhog");
	this.shape_542.setTransform(20.5,-61.6,1.31,1.31);

	this.instance_14 = new lib.Path_9_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(13,-91.3,1.31,1.31,0,0,0,9.4,9.5);
	this.instance_14.alpha = 0.559;

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#F3E13F").s().p("AhOAGQgVgEgIgTQgEgLADgMQADgMAJgIIAcgZQAQgMASAEQATADALARQAYA1BaBAIhBAzQg9hOg+gLg");
	this.shape_543.setTransform(15.2,-91.3,1.31,1.31);

	this.instance_15 = new lib.Path_12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(33.1,36.3,1.31,1.31,0,0,0,1.9,6.7);

	this.instance_16 = new lib.Path_1_4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(26.4,37.3,1.31,1.31,0,0,0,1.2,6.9);

	this.instance_17 = new lib.Path_2_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(19.1,37.3,1.31,1.31,0,0,0,2.8,6.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#EEDCC4").s().p("AAQA9IgHgGIgKgMIgDgFIgNgWIgEgMIgGgYIAAgKIABgRIACgFQADgIAHgDQAHgEAHADQAMAEABAMIACBDIAGAdIAEAOIADAFg");
	this.shape_544.setTransform(31.9,36.2,1.31,1.31);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#EEDCC4").s().p("AALBBIgEgFIgGgHIgJgTIgHgRIgEgSQgBgGAAgHIgBgLIABgLIAEgRIACgFQAFgHAHgCQAHgCAHAEQAKAFAAANIgBAFIAAADIgBAFIAAAEIgHA7IACAiIABAGg");
	this.shape_545.setTransform(25.1,37.3,1.31,1.31);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#EEDCC4").s().p("AgRBAIgDgHIgGgSIgCgLIgBgUIACgSIADgNIAJgVIAHgLIAGgGQAFgGAIAAQAIABAFAFQAJAJgFAMIgEAHIgBADIgcA7IgHAbIgBAHIAAAFg");
	this.shape_546.setTransform(18.9,37.3,1.31,1.31);

	this.instance_18 = new lib.Path_11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1.2,-28.7,1.31,1.31,0,0,0,9.3,13.6);
	this.instance_18.alpha = 0.559;

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#EEE237").s().p("AgGCPQgqgqgZhHQgZhHAGg7QAHg7AjgMQAngOAxApQA3AuAABGIABCGQgCA6gWAIQgIADgIAAQgcAAggggg");
	this.shape_547.setTransform(1.4,-33.8,1.31,1.31);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#849927").s().p("AgeBhQgigDgHgTIgQioIBBgDIAaA7QAcA8AIANQAJAMAUAEQALACAIAAIhDAkQgSAHgVAAIgMAAg");
	this.shape_548.setTransform(13.4,-23.1,1.31,1.31);

	this.instance_19 = new lib.Path_3_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(26.4,7.4,1.31,1.31,0,0,0,6.7,17.8);
	this.instance_19.alpha = 0.559;

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#E4ED37").s().p("AghBZQAQglgBgYQAAgggYhVIgXhNIA2gMIAeBBQAiBKAJAuQAIAqgGAnQgHA0ABAXIh7AQQAKgmAWg0g");
	this.shape_549.setTransform(26.5,7.4,1.31,1.31);

	this.instance_20 = new lib.Group_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-16.9,-25.5,1.31,1.31,0,0,0,9.5,11.7);
	this.instance_20.alpha = 0.82;

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FAE88C").s().p("AAKB9Qgzgwgng0QgPgVABgZQAAgZARgUQA2hBAKg7QAoAxARB4QAUCOAgBGQgmgVgwgtg");
	this.shape_550.setTransform(-16.9,-35.1,1.31,1.31);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E39905").s().p("AhlBlQAshWhLhPQCLAsB+hTQgZBAgJApQgLA5AKAqQhKADgxAAQgyAAgagDg");
	this.shape_551.setTransform(-10,-57.9,1.31,1.31);

	this.instance_21 = new lib.Path_1_3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-11.7,-79.6,1.31,1.31,0,0,0,14.3,13.5);
	this.instance_21.alpha = 0.82;

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FAE88C").s().p("AhpCCQgjgjgHghQgFgbALgtQAPgqANgXQARghAVgTIALAaQAFARAAAKQAagYA3gQIBYgbQAZAaAJAzQAIArgEA0QgBASgJAWIgQAlQg1Abg7AFQgPACgQAAQgrAAgpgMg");
	this.shape_552.setTransform(-10.8,-80.5,1.31,1.31);

	this.instance_22 = new lib.Path_10();
	this.instance_22.parent = this;
	this.instance_22.setTransform(13.8,-95.3,1.31,1.31,0,0,0,3.8,7.7);
	this.instance_22.alpha = 0.559;

	this.instance_23 = new lib.Path_1_2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(28.1,-94.9,1.31,1.31,0,0,0,5.4,14.3);
	this.instance_23.alpha = 0.559;

	this.instance_24 = new lib.Path_2_3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(47.3,-98.3,1.31,1.31,0,0,0,9.7,15.6);
	this.instance_24.alpha = 0.559;

	this.instance_25 = new lib.Path_3_0();
	this.instance_25.parent = this;
	this.instance_25.setTransform(78.1,-93.3,1.31,1.31,0,0,0,21.1,19.9);
	this.instance_25.alpha = 0.559;

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#CDE874").s().p("AAGApQgSgCgZgfQAVgOATgYQAMgOAXggIAACZQgQgigQgCg");
	this.shape_553.setTransform(13.9,-95.3,1.31,1.31);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#CDE874").s().p("AgxC3QgSikBHjPQAIA0AOBnQANBaAPA9QgbgpggAEQglAEgHA0QgDAbAEAZg");
	this.shape_554.setTransform(28.3,-101,1.31,1.31);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#CDE874").s().p("Ag9DZQgDhegPiEIgcjjQBHBWA4B+QAkBQA0CYQgagegagRQgigYgbAEQgnAGgJAuQgEAWADAWg");
	this.shape_555.setTransform(45.9,-109,1.31,1.31);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#CDE874").s().p("ACLCgQhRg0gwAQQgkANgLAtQgGAXACATIgEgFQgSiWg7iDQg8iIhjhpQDPBrCJCMQCgCiA7DGQhAhahPg2g");
	this.shape_556.setTransform(68.8,-106.9,1.31,1.31);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#736000").s().p("AD0CvQhghKg5AVQglANgLAsQgGAXADATQgTgbgagaQg2g0gnAGQgoAHgIAtQgFAXAEAVQgHgZgOgZQgdgxgkAEQglAEgHA0QgDAbAEAZQgFgZgLgaQgTgzgUgCQgUgCgbgkIgXgjQBwgzAsibQAghxgNhiQAiAjBpA7QB6BGA8AvQDvC2BEFOQg+hyhghLg");
	this.shape_557.setTransform(58.1,-106.5,1.31,1.31);

	this.instance_26 = new lib.Group();
	this.instance_26.parent = this;
	this.instance_26.setTransform(34.7,-36.2,1.31,1.31,0,0,0,35.3,28.4);
	this.instance_26.alpha = 0.82;

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FAE88C").s().p("AixEMQgzgRgygeQgtgcgWgYQgDgcgDg7IgCg1QAtA/BKA8QBoBUBVAAQBYAAAogTQAogTA4hDQAug4gRh5QgIgzgXhHIgPgpQgKgeALgIQALgIAkAEIAwAFQAeAAAcgNQAZgLANgPQgVAig8AKQgRADgugDQghgBgEAHQgEAJAJATIAQAaQAIAOANAeQARAnAEAYQAFAeADAqQACAWgGAfQgGAkgPAhQgXA1glAjQgfAegzAZQgsAWhOABIgEAAQhJAAg3gSg");
	this.shape_558.setTransform(34.8,-36.1,1.31,1.31);

	this.instance_27 = new lib.Group_1_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(28.8,-36.3,1.31,1.31,0,0,0,39.8,28.3);
	this.instance_27.alpha = 0.559;

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#E39905").s().p("AgcEaQhBgEg5gTIgTgHIgBAAIAAAAIgCgBIgHgDIgcgNQgcgQgVgRQgpgggfgpQgZgigQghQgLgYgIgYIgFgPQgMgmASgjQASgjAlgMQAmgLAjASQAjASAMAlIADAMIAAAAIABALIAHAbQAIAXAKASQANAZAVAVQANAOALAIIASAMIAAAAIACABIALAFQAjASAvAKQAyAJAlgHIASgFIAEgBIABAAIABgBIAOgGQAWgLARgOQAkgdAQguQAQgrgCg2QgCgvgRgxIgLgeIAAgBIgBgBIAAAAIgBgBIAAgCIgBgCIgEgMQgEgSAHgQQAIgRAQgGQAOgGAPABIAGABIAPAEIAlAIQAgAGAagHQASgFARgMIAIgGIADgCIgJAKQgQAPgSAIQgZAMgmAAIgngCIgTgBQgJABgEACQgFAEgBAFQgBAGACAGIABADIABACIABACIAHAKQAHALAGAMQAcAzANA2QAOBDgKA7QgGAlgOAeQgOAggYAcQgYAcgcAVIgRANIgOAHQgPAIgVAIQgiALgkADQgSACgUAAIgcgBg");
	this.shape_559.setTransform(28.8,-36.4,1.31,1.31);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#1D1D1B").ss(0.1).p("ABqgLQgGg4gjgkQgkgkgrAFQgsAFgbArQgbArAHA3QAGA4AjAkQAkAkArgFQAsgFAagrQAbgrgGg3g");
	this.shape_560.setTransform(-9.6,-41.1,1.31,1.31);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AhABoQgjgkgGg4QgHg3AbgrQAbgrAsgFQArgFAkAkQAjAkAGA4QAGA3gbArQgaArgsAFIgLAAQgkAAgggfg");
	this.shape_561.setTransform(-9.6,-41.1,1.31,1.31);

	this.instance_28 = new lib.Path_8();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-41.2,-43.9,1.31,1.31,0,0,0,2,9);

	this.instance_29 = new lib.Path_1_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-50.1,-45.2,1.31,1.31,0,0,0,3.1,8.8);

	this.instance_30 = new lib.Path_2_2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-59.4,-47.7,1.31,1.31,0,0,0,5,8.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#EEDCC4").s().p("AAEBVIgFgHIgHgJQgEgGgDgGIgKgeIgCgJIgBgHIgCgQIAAgZIAEgVIAGgRIAGgJQAFgJAKgDQAKgCAJAHQANAIgCAQIAAABIgXBiIgBAkIADAPg");
	this.shape_562.setTransform(-42.7,-44,1.31,1.31);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#EEDCC4").s().p("AgWBLIgEgKIgHgcIgBgQIgBgIIABgYIADgQIADgPIAIgTIAIgOIAEgFQAIgIAJAAQALAAAHAHQAMAMgFAOIgEAKIgCADIgbBDIgMAwIgCAQg");
	this.shape_563.setTransform(-50.6,-45.2,1.31,1.31);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#EEDCC4").s().p("AguBKIgCgIQgCgFAAgHIAAgNIAFggIAFgPIAHgQIAHgOIAFgHIANgRIANgMIAJgGQAJgFAKAEQAKADAFAJQAHAOgJANIgxA1IgfAsIgHARIgCAHIgDgHg");
	this.shape_564.setTransform(-59.3,-47.8,1.31,1.31);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#849927").s().p("AgGA2IhCgtQgGgFACgGQACgIAIAAQAdgDAXgLQAUgKAUgVIAzA8QgcAGgOAKQgKAHgRAXQgCAEgFABIgBAAQgDAAgDgCg");
	this.shape_565.setTransform(-40.3,-78.4,1.31,1.31);

	this.instance_31 = new lib.Path_7();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-47.1,-65.3,1.31,1.31,0,0,0,7,10.2);
	this.instance_31.alpha = 0.559;

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#E4ED37").s().p("AhHBYIAjhXQARgwACg2IBFAkQAmBQgiBXg");
	this.shape_566.setTransform(-46.9,-65.3,1.31,1.31);

	this.instance_32 = new lib.Path_9();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-28.7,-88.9,1.31,1.31,0,0,0,6.4,7);
	this.instance_32.alpha = 0.559;

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#F3E13F").s().p("AgoBOIgRgQQgFgEgBgGQgBgHAEgGQAUgfAEgLQAEgOAAgjQABgQAQgJQAQgIAQAIIADACQAMAKAVAIQAIAEACAIQADAIgFAHIgNAUQgDAGgGABQgSAFgMASQgJAOgLAkQgDAJgJACIgFABQgGAAgGgEg");
	this.shape_567.setTransform(-28.7,-90.3,1.31,1.31);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#A31523").s().p("AgLAJIAXgTQACAGgDAFQgCAGgGACQgDACgDAAQgEAAgEgCg");
	this.shape_568.setTransform(-20.8,-141.1,1.31,1.31);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FDEBCF").s().p("AAfgXQgJAWgHAHQgJALgkAHQAagYAjgXg");
	this.shape_569.setTransform(-19.8,-141.8,1.31,1.31);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#849927").s().p("AgLAHQAWgSAagRQgIAbgKALQgHAHgTAGQgPAFgOABQAGgHATgPg");
	this.shape_570.setTransform(-19.6,-141.9,1.31,1.31);

	this.instance_33 = new lib.Path_6();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-22.4,-132.7,1.31,1.31,0,0,0,9.3,7.3);
	this.instance_33.alpha = 0.82;

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FAE88C").s().p("AhJBEQgSgCgCgGQAygSA2gqIBThIQAAAPgQAdIgaAyQgiAXgNAGQgLAGgnAPQgGgDgWgBg");
	this.shape_571.setTransform(-22.3,-132.7,1.31,1.31);

	this.instance_34 = new lib.Path_2_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-29.6,-134,1.31,1.31,0,0,0,13.6,4.9);
	this.instance_34.alpha = 0.559;

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#F3E13F").s().p("AhcBPQAHgGAMgRQgIgCgTABQgRACgJgFQAugSA0gqQAdgYA5gzIAMgDIA5BqIjFBDg");
	this.shape_572.setTransform(-26.1,-138.8,1.31,1.31);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#919C2C").s().p("AhQBGQgUgHgJgLIA2goQA6grAegRQAmgVAngMQg5A0geAYQgzApguASQAKAGAQgCQATgBAIACQgLARgIAFIgogLg");
	this.shape_573.setTransform(-33,-139.1,1.31,1.31);

	this.instance_35 = new lib.Path_5();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-14.8,-115.5,1.31,1.31,0,0,0,6.7,25.2);
	this.instance_35.alpha = 0.559;

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#F3E13F").s().p("AgDEEQgkgEgXgcQgYgcAEgkIAbiDIAEgqIgBg+IgDgUIgIgcIgJgWQgEgJgDgDIgLgSQgNgVAGgXQAGgYAVgMQASgLAVADQAVAEAMAPIAOAQIAPASIAVAiIAWA0IAOAyIAJA+IACAxIgHCLQgEAlgcAXQgYAUgfAAIgIAAg");
	this.shape_574.setTransform(-10.6,-116.5,1.31,1.31);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#919123").s().p("AgSBOQgGgFgBgIIgBgEIADgZIAGgYIAIgZQAJgcALgTIALgUQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBAAIgBAGIgFAQQgGAWgDAaIgCAYIAAAWIABAJIACAMIAAAAQABAIgFAHQgEAGgHABIgEABQgGAAgFgEg");
	this.shape_575.setTransform(-21.6,-154.8,1.31,1.31);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#919123").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIACgCIASgOIATgLIAYgMIAYgJIAlgIIAGgBQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgdALIgKAFIgVANIgTANIgcAeQgEAFgHABIgBAAQgGAAgEgEg");
	this.shape_576.setTransform(-1.6,-146.7,1.31,1.31);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#919123").s().p("AgUBRQgIAAgFgGQgFgGAAgIIAQg0IAGgMIAHgNIAHgNIAHgMIAHgLIAXgbQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAGIgIAPIgTAwIgDAMIgGAtIAAAOQgBAIgFAFQgFAFgHAAIgCAAg");
	this.shape_577.setTransform(-13.9,-155.9,1.31,1.31);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#919123").s().p("AgxBGQgHgDgDgHQgDgHADgIIABgDIAPgVQAQgVAVgVIAWgVIAkgZIAGgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgFAEIgNAMIgiAqQgNAVgLAYIgKAXQgDAHgHADIgHABIgHgBg");
	this.shape_578.setTransform(-6.1,-153.6,1.31,1.31);

	this.instance_36 = new lib.Path_4();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-93.8,-84.8,1.31,1.31,0,0,0,20.4,17.7);
	this.instance_36.alpha = 0.559;

	this.instance_37 = new lib.Path_1_0();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-49.6,-84,1.31,1.31,0,0,0,4.9,10.4);
	this.instance_37.alpha = 0.559;

	this.instance_38 = new lib.Path_2_0();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-64,-91.2,1.31,1.31,0,0,0,8.5,11.1);
	this.instance_38.alpha = 0.559;

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#CDE874").s().p("AgygkQAsgnB+hnQBthYA4g4QiuEMg7D9QgOhmgogCQg1gDhoBhQg/A7g+BLQApi4DBivg");
	this.shape_579.setTransform(-83.3,-103.9,1.31,1.31);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#CDE874").s().p("AAdB0QgHgmgUgKQgXgMgcAqQANgtAhhYQAfhZANguQACA6AHByQABBjgSBGQABgegFgZg");
	this.shape_580.setTransform(-49.5,-92.9,1.31,1.31);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#CDE874").s().p("AgEAAQBZi4AYg8QADBpggCLQgTBQguCgQgChFgcgHQgSgEggAgQgVAVgWAfQAehfBKiVg");
	this.shape_581.setTransform(-60.9,-108.6,1.31,1.31);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#736000").s().p("AhOhtQBAg2B/hXQBphIAbgdQgiBbAbB+QAeCSBjAxQgMAegRAfQggA+gWAMQgVALgZAnQgMATgIASQACgYgDgaQgFg0gYgLQgYgMgcApQgNAUgJAXQABgWgDgXQgHgtgWgGQgXgGgpAwQgUAZgQAZQgCgfgIgfQgQg+gfgBQg8gEh6B6Qg9A8gxA9QAij9D+jQg");
	this.shape_582.setTransform(-73.8,-106.2,1.31,1.31);

	this.instance_39 = new lib.Path_0();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-22,41.7,1.31,1.31,0,0,0,1.5,7);

	this.instance_40 = new lib.Path_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-28.9,40.8,1.31,1.31,0,0,0,2.3,6.9);

	this.instance_41 = new lib.Path_2();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-35.7,38.7,1.31,1.31,0,0,0,4,6.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#EEDCC4").s().p("AADBBIgEgFIgFgHIgHgOIgGgSIgDgNIgBgMIABgZIADgKIAFgQIADgFQAFgGAHgCQAIgBAGAEQAKAHgBAMIgDALIgCAGIgNA7IgBATIABAPIACAFg");
	this.shape_583.setTransform(-23.1,41.6,1.31,1.31);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#EEDCC4").s().p("AgNBAIgDgGIgDgIIgGgVIgBgaIACgYIADgLIAIgTIAIgKQAFgGAIgBQAIABAFAFQAJAJgEALIgbBIIgDAKIgEARIgBALg");
	this.shape_584.setTransform(-29.2,40.7,1.31,1.31);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#EEDCC4").s().p("AgjA6IgDgQIAAgQIACgMIAGgSIAFgMIANgVIAHgIIAGgHIADgDIAHgEQAHgEAIADQAHACAEAHQAGALgIAKIgFAGIgtA0IgOAYIgEALg");
	this.shape_585.setTransform(-35.8,38.7,1.31,1.31);

	this.instance_42 = new lib.Path();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-29.6,-33.5,1.31,1.31,0,0,0,9.4,17.2);
	this.instance_42.alpha = 0.559;

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#EEE237").s().p("Ag7ClQghgigGg9QgIhDAeg/QAehCAlgcQAigbAgAPQAjAQAIA8QAHBCgqA2QgcAlglBIQgUAhgUAAQgKAAgJgHg");
	this.shape_586.setTransform(-30.3,-33.5,1.31,1.31);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#849927").s().p("AANBnQglgDgZgRQgfgVADgfIAciGIBtALQgYAhgLAuQgKAqAKASQAMAWApAig");
	this.shape_587.setTransform(-29.5,-20.9,1.31,1.31);

	this.instance_43 = new lib.Path_3();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-26.2,14.4,1.31,1.31,0,0,0,8.1,16.6);
	this.instance_43.alpha = 0.559;

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#E4ED37").s().p("AhRCZQATghAhgqQAXgeAFgYQAGgdgDhUIgEhNIA1ABIAQBEQAQBMgCAsQgBAqgOAiQgTAvgEAVg");
	this.shape_588.setTransform(-26.1,14.4,1.31,1.31);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#EEDCC4").s().p("AAXBUIgHgGQgEgDgEgFIgIgLIgQgjIgLgnIgBgdIADgSIABgEIACgHQAEgJAKgEQAJgEAKAFQAOAGAAAQIAAAHIAAAEIgDA9IAAAPIACAnIABAKIACAIIACAHg");
	this.shape_589.setTransform(20.2,-42.4,1.31,1.31);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#919123").s().p("Ag+AmQgFgEgBgHQAAgGAEgFIACgCIAlgZIAYgMIAYgJIAlgIIAGgBQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgdALIgKAFIgVANIgTANIgcAeQgEAFgHABIgBAAQgGAAgEgEg");
	this.shape_590.setTransform(-1.6,-146.7,1.31,1.31);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#EEDCC4").s().p("AgjA6IgDgQIAAgQIACgMIAGgSIAFgMIANgVIAHgIIAGgHIADgDIAHgEQAHgEAIADQAHACAEAHQAGALgIAKIgyA6IgOAYIgEALg");
	this.shape_591.setTransform(-35.8,38.7,1.31,1.31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.instance_5},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.instance_9},{t:this.shape_528},{t:this.shape_527},{t:this.instance_8},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.instance_7},{t:this.shape_521},{t:this.instance_6},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511}]},1).to({state:[{t:this.shape_588},{t:this.instance_43},{t:this.shape_587},{t:this.shape_586},{t:this.instance_42},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.instance_35},{t:this.shape_573},{t:this.shape_572},{t:this.instance_34},{t:this.shape_571},{t:this.instance_33},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.instance_32},{t:this.shape_566},{t:this.instance_31},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_27},{t:this.shape_558},{t:this.instance_26},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_552},{t:this.instance_21},{t:this.shape_551},{t:this.shape_550},{t:this.instance_20},{t:this.shape_549},{t:this.instance_19},{t:this.shape_548},{t:this.shape_547},{t:this.instance_18},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_543},{t:this.instance_14},{t:this.shape_542},{t:this.instance_13},{t:this.shape_541},{t:this.shape_540},{t:this.instance_12},{t:this.shape_539},{t:this.instance_11},{t:this.shape_538},{t:this.instance_10}]},1).to({state:[{t:this.shape_588},{t:this.instance_43},{t:this.shape_587},{t:this.shape_586},{t:this.instance_42},{t:this.shape_591},{t:this.shape_584},{t:this.shape_583},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_578},{t:this.shape_577},{t:this.shape_590},{t:this.shape_575},{t:this.shape_574},{t:this.instance_35},{t:this.shape_573},{t:this.shape_572},{t:this.instance_34},{t:this.shape_571},{t:this.instance_33},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.instance_32},{t:this.shape_566},{t:this.instance_31},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_27},{t:this.shape_558},{t:this.instance_26},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_552},{t:this.instance_21},{t:this.shape_551},{t:this.shape_550},{t:this.instance_20},{t:this.shape_549},{t:this.instance_19},{t:this.shape_548},{t:this.shape_547},{t:this.instance_18},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_543},{t:this.instance_14},{t:this.shape_542},{t:this.instance_13},{t:this.shape_541},{t:this.shape_540},{t:this.instance_12},{t:this.shape_589},{t:this.instance_11},{t:this.shape_538},{t:this.instance_10}]},1).to({state:[{t:this.shape_588},{t:this.instance_43},{t:this.shape_587},{t:this.shape_586},{t:this.instance_42},{t:this.shape_591},{t:this.shape_584},{t:this.shape_583},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_578},{t:this.shape_577},{t:this.shape_590},{t:this.shape_575},{t:this.shape_574},{t:this.instance_35},{t:this.shape_573},{t:this.shape_572},{t:this.instance_34},{t:this.shape_571},{t:this.instance_33},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.instance_32},{t:this.shape_566},{t:this.instance_31},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.instance_27},{t:this.shape_558},{t:this.instance_26},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_552},{t:this.instance_21},{t:this.shape_551},{t:this.shape_550},{t:this.instance_20},{t:this.shape_549},{t:this.instance_19},{t:this.shape_548},{t:this.shape_547},{t:this.instance_18},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_543},{t:this.instance_14},{t:this.shape_542},{t:this.instance_13},{t:this.shape_541},{t:this.shape_540},{t:this.instance_12},{t:this.shape_589},{t:this.instance_11},{t:this.shape_538},{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({x:-1.6,y:-0.6},0).to({_off:true},1).wait(9));

	// Layer 6
	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AiTB7QgxgxgOhMQgIgzAKg9QAFgeAHgUIAgATIAXgVIErAAIAeAKIAPgXQAUBZgOBaQgeCyixABIgCABQhaAAg5g5g");
	this.shape_592.setTransform(-5,21);
	this.shape_592._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_592).wait(5).to({_off:false},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-168.5,287.1,222.5);


(lib.מדהתקדמותשלם = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.MyEgg = new lib.ביצהבפתיחה();
	this.MyEgg.parent = this;
	this.MyEgg.setTransform(28.4,387.5,0.198,0.198,0,0,0,0.8,0);

	this.instance = new lib.מדהתקדמות();
	this.instance.parent = this;
	this.instance.setTransform(26.4,257.5,1,1,0,0,0,-4,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.MyEgg}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מדהתקדמותשלם, new cjs.Rectangle(0,-1,56.8,431.4), null);


(lib.congluison = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.NextBut = new lib.butNext();
	this.NextBut.parent = this;
	this.NextBut.setTransform(393.8,57,0.58,0.58);
	new cjs.ButtonHelper(this.NextBut, 0, 1, 2, false, new lib.butNext(), 3);

	this.txt = new cjs.Text("", "bold 27px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 32;
	this.txt.lineWidth = 588;
	this.txt.parent = this;
	this.txt.setTransform(4,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.NextBut}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("EAsAAGuMhglAAAQjQAAAAiHIAAsNQAAiIDQAAMBjTAAAQDQAAAACIIAAKeIF4G3g");
	this.shape.setTransform(22.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.congluison, new cjs.Rectangle(-334.8,-62.2,798.8,148.3), null);


(lib.טקסטבסוף = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.playAgian5 = new lib.playagin();
	this.playAgian5.parent = this;
	this.playAgian5.setTransform(451.2,-50);
	new cjs.ButtonHelper(this.playAgian5, 0, 1, 2, false, new lib.playagin(), 3);

	this.code = new cjs.Text("my code", "38px 'Forte'", "#FFFFFF");
	this.code.name = "code";
	this.code.textAlign = "center";
	this.code.lineHeight = 44;
	this.code.lineWidth = 140;
	this.code.parent = this;
	this.code.setTransform(71.8,206.7);

	this.point = new cjs.Text("point", "65px 'Forte'", "#FFFFFF");
	this.point.name = "point";
	this.point.textAlign = "center";
	this.point.lineHeight = 73;
	this.point.lineWidth = 160;
	this.point.parent = this;
	this.point.setTransform(91.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.code},{t:this.playAgian5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.טקסטבסוף, new cjs.Rectangle(0,-100,572.2,351.6), null);


(lib.erorrMyName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.3,-4.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,-4.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.3,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},27).to({state:[{t:this.instance_2}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:43.3},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},27).to({_off:true,x:21.3},32).wait(1));

	// Layer 1
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-3.5);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.8,-3.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_5}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:16.8},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},27).to({_off:true,x:-5.1},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-65.5,179.9,123.9);


(lib.vocabulary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חץשלאוצרמילים();
	this.instance.parent = this;
	this.instance.setTransform(1.1,-1,1,1,37.5,0,0,0.5,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vocabulary, new cjs.Rectangle(-112.4,-108.3,219.4,207.8), null);


(lib.מסךסיום = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.myCode = new cjs.Text("", "38px 'Forte'", "#FFFFFF");
	this.myCode.name = "myCode";
	this.myCode.lineHeight = 44;
	this.myCode.lineWidth = 362;
	this.myCode.parent = this;
	this.myCode.setTransform(-22,288.3);

	this.MyPoint = new cjs.Text("", "65px 'Forte'", "#FFFFFF");
	this.MyPoint.name = "MyPoint";
	this.MyPoint.textAlign = "center";
	this.MyPoint.lineHeight = 73;
	this.MyPoint.lineWidth = 120;
	this.MyPoint.parent = this;
	this.MyPoint.setTransform(62.1,82.3);

	this.textResalt = new lib.טקסטבסוף();
	this.textResalt.parent = this;
	this.textResalt.setTransform(59.2,205.4,1,1,0,0,0,228.8,125.1);
	this.textResalt.visible = false;

	this.no = new lib.לא();
	this.no.parent = this;
	this.no.setTransform(387.5,50.3,0.6,0.6);
	new cjs.ButtonHelper(this.no, 0, 1, 2, false, new lib.לא(), 3);

	this.yes = new lib.כן();
	this.yes.parent = this;
	this.yes.setTransform(186.8,50.3,0.6,0.6);
	new cjs.ButtonHelper(this.yes, 0, 1, 2, false, new lib.כן(), 3);

	this.playagin = new cjs.Text("Do you want to play bonus game?", "65px 'Arial'", "#FFFFFF");
	this.playagin.name = "playagin";
	this.playagin.textAlign = "center";
	this.playagin.lineHeight = 75;
	this.playagin.lineWidth = 1084;
	this.playagin.parent = this;
	this.playagin.setTransform(291.1,-41.9,0.826,0.826);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjSG2QgRgQAAgYQAAgqAuhGQAJgNAHgIQAVgVAggNQAggNAdAAQAbAAARAMQAPAMAAATQAAAXgMAkQgMAjgRAcQgKAQgXAPQg4AmgtAAQgbAAgQgOgAilCWQAAgMAIgiQA4j0BBixQAPgsAVgXQAZgcA1gTQA1gUAyAAQAvAAAAAgQAAAmhdDpQhhDsgPAWQgNAUgaAUQgcATgdAOQgbANgSAAQguAAgBgug");
	this.shape.setTransform(612.6,-111.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkEIgQgygMgdgUQgegVAAgXQAAgVANgTQALgSAhgcIgDgDQgTAHgSAAQglAAgYgWQgXgWAAgmQAAgVAThOQAThOAahTIBRj3QAXhCAhg/QgDAAgNAHQgvATgUAAQgcAAAAgVQAAgXAWgqQAWgrAWgVQAyguBngbQBngbB+AAQBNAAA+ANQA+ANAsAaQAsAaAXAkQAXAlAAAsQAAA/gaAxQgaAxg4AqQg/Avg4APQgGACgPACIAAAEQDxAfAACnQAAAigLAkQgLAkgWAkQgWAjgeAcQhBBAhaA3QhaA3hZAiQhbAihBAAQg2AAgygNgAhNgZIgGAUQggBtgcBEQgaBEgfAvQgRAdggAgQBTAaAjAHQAkAIAjAAQAoAAAegMQAggMAbgbQApgoAZg3QAag3AAgzQAAg5gngnQgUgTgXgKQgYgLgqgGQglgHgQgHQgPgHgRgTIgFAUgAAemOIhXEtQAIABAJAAQAkAAAvgiQA8gqAigvQAhgwAAguQAAhehjAAQgcAAgNAJg");
	this.shape_1.setTransform(540.3,-106.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcHAQhLgcgwgvQhPhPAAiAQAAhKAehUQAdhSAyhOQAyhPBDhBQBChCBGgmQA/giBKgVQBJgUA4AAQBOAAABAYQAAAJgRAUQgfAdgWALQgWAMgzAOQg3ARgZAOQgYANgmAiQgwAvgUAfQgXAfgZA5QgSApgIAuQgLAoAABAQABBaAQA8QASA8AiAfQAhAeAwAAQAlAAApgcQAngcAiguQAgguAUg4QATg4ABg1QAAhdhBhmQgYgqAAgPQAAgcAfgcQAjgiAtgaQAugaAaAAQAPAAARAIQAQAGAKALQAVAXAPA9QAOA9AABEQABChhCCKQhDCIhxBRQhzBPiEAAQhMAAhKgcg");
	this.shape_2.setTransform(449.8,-113.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkgIHQg1hRAAhYQAAhBAXg8QAVg+AngoQAWgVAZgPQAYgPANAAQALAAAGAMQAHANgBAXQABALgGAcQgYCDAABdQAAAzALAmQAZgqAPgsQAnh9AahqQAoitAUhxQAShyATivIgZAHIgRAFIghAJQh3AjgmAAQglAAgXgNQgXgPAAgYQAAgpAigyQAhgyAlgPQAkgOAygGQAygHBOAAQCeAABJASQBLASAAAmQAAAdgaByQgYBygaBZQhoFwiGDzQgcA2giAmQgiAmgjATQgkATgoAAQg3AAg2hRg");
	this.shape_3.setTransform(367.9,-102.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlUHQQhNgPgZgWQgQgMAAgYQAAgHADgNICkonQARhAATgaQAMgPATgLIAAgDIgKAAQgUAAg/AYQhFAXgaAAQgOAAgFgEQgGgGAAgLQAAgcAQggQAPghAZgaQAZgaAagLQA8gYBmgMQBngNB3gBQCBAABbApQBbAoAvBQQAvBQAABxQAABxgtBzQgtByhKBOQiuC4kiABQheAAhNgQgAiBDRIgFAZQgMA3gQAeQgLAWgYAeIAsABQA8AAAogHQAogJAhgTQAjgTAegfQA5g6AfhNQAehNAAhZQAAhTgZhDQgYhDgsgnQgsgng5gDg");
	this.shape_4.setTransform(245.3,-115.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjcHAQhMgcgvgvQhPhPABiAQAAhKAdhUQAdhSAzhOQAxhPBDhBQBChCBGgmQA/giBJgVQBKgUA4AAQBPAAgBAYQAAAJgQAUQgeAdgXALQgWAMgzAOQg3ARgZAOQgYANgmAiQgwAvgUAfQgXAfgYA5QgTApgIAuQgLAoAABAQAABaARA8QASA8AhAfQAiAeAvAAQAmAAApgcQAngcAiguQAgguAUg4QAUg4AAg1QAAhdhBhmQgYgqAAgPQAAgcAfgcQAjgiAtgaQAugaAaAAQAPAAARAIQARAGAJALQAVAXAPA9QAOA9AABEQAAChhCCKQhCCIhyBRQhxBPiEAAQhNAAhKgcg");
	this.shape_5.setTransform(152.6,-113.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjdHAQhKgcgvgvQhPhPAAiAQAAhKAdhUQAchSA0hOQAyhPBChBQBChCBGgmQA/giBJgVQBLgUA3AAQBOAAAAAYQAAAJgQAUQgfAdgVALQgXAMgzAOQg3ARgYAOQgZANgmAiQgvAvgWAfQgWAfgYA5QgTApgIAuQgKAoAABAQgBBaASA8QARA8AhAfQAiAeAvAAQAmAAApgcQAogcAgguQAhguAUg4QAUg4gBg1QAAhdhAhmQgYgqAAgPQAAgcAfgcQAjgiAugaQAtgaAaAAQAPAAARAIQAQAGAJALQAWAXAPA9QAPA9AABEQAAChhDCKQhCCIhyBRQhxBPiEAAQhMAAhMgcg");
	this.shape_6.setTransform(63.2,-113.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AifJIQg1gRgigbQghgbAAgaQAAgRATgWQATgWAhgWQA0gjASAAQARAAAhAnQAnAtAsAeQAXg4AXhSQAWhSAEgtQhDBCg7AeQg8Adg9AAQhIAAgzgiQg0gigbhBQgbhBAAhYQAAhsA5h0QA5h1BhhjQBhhjBxg7QBzg7BrAAQCuAAAACYQAAA7ggA4QggA3g1AiQg1Aig7AAQgYAAAAgSQAAgEAIgTQATgkAJgrQALg8AAghQAAg5gOAAQggAAg6AuQg6AuglA2QghAvgcBCQgdBBgQBDQgQBCAAA3QAAA1AWAiQAXAiAlAAQA9AABOieQAZgsAIgLQAJgNAQgJQArgbBAgVQBCgVAjAAQAqAAAAAqIgEAeQgxDIhFCnQhFCnhCBHQgeAhg7AVQg7AVg9AAQgzAAg0gRg");
	this.shape_7.setTransform(-25.2,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.playagin},{t:this.yes},{t:this.no},{t:this.textResalt},{t:this.MyPoint},{t:this.myCode}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מסךסיום, new cjs.Rectangle(-308.4,-193.7,1183.7,525.6), null);


// stage content:
(lib.dinonite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		-הקלטות(שבת)
		-אצר מילים(שבת)
		*/
		init();
		function init() {
			/*
			createjs.Sound.registerSound({
				id: "1",
				src: "sounds/_1_1.mp3"
			});
		
			createjs.Sound.registerSound({
				id: "bacrund_sund",
				src: "sounds/bacrund_sund.mp3"
			});*/
		
			var myMusic = new lib.music();
			stage.addChild(myMusic);
			var musicGo = setInterval(function () {
				var myMusic2=new lib.music();
				stage.addChild(myMusic2);
			}, 85000);
		
		}
		var qution = [];
		var anser = [];
		var sundChildend = [];
		//השאלות
		qution[0] = "My pet feels cold. What can I do?";
		qution[1] = "My pet is dirty. What does it need?";
		qution[2] = "My pet is lonely. What do I do?";
		qution[3] = "My pet is thirsty! What can I do?";
		qution[4] = "My pet is sick. Quickly, do something!";
		qution[5] = "My pet feels hungry. What do I do?";
		qution[6] = "My pet is bored being home all day. What can I do?";
		qution[7] = "My pet is tired. What to do?";
		qution[8] = "My pet is misbehaving. What to do?";
		qution[9] = "My pet is getting fat. What can I do?";
		qution[10] = "My pet met a friend, but they have nothing to do. How can I help?";
		qution[11] = "My pet is upset. What do I do to cheer it up?";
		//תשובות
		anser[0] = ["I warm it with a blanket.", "I give it ice cream.", "I scream at it.", "I give it a ball to play with.", 1];
		anser[1] = ["Lots of love.", "A shower.", "Taking care.", "A ball.", 2];
		anser[2] = ["I play on the computer by myself.", "I give it food.", "I hug it.", "I turn on the TV.", 3];
		anser[3] = ["", "", "", "", 3];
		anser[4] = ["I give it hot soup.", "I take it for a walk.", "I turn on the radio.", "I throw a ball at it.", 1];
		anser[5] = ["", "", "", "", 1];
		anser[6] = ["I take it for a bath.", "I let it play on the computer.", "I turn on the TV so it can watch.", "I take it out for a walk.", 4];
		anser[7] = ["I give it a ball to play with.", "I Play on my guitar.", "I Turn on the radio.", "I give it a pillow to sleep on.", 4];
		anser[8] = ["I train it to behave better.", "I give it a treat.", "I punish it!", "I don’t do anything.", 1];
		anser[9] = ["I stop feeding it.", "I shout at it.", "I take it to workout with me!", "I turn on the lights.", 3];
		anser[10] = ["", "", "", "", 2];
		anser[11] = ["I shout at it.", "I feed it", "I call 101 for an ambulance.", "I play it a happy song.", 4];
		
		//סאונד
		sundChildend[0] = ["soup", "walk", "turn", "throw","music"];
		
		function qution2() {
			qution[0] = "My pet feels cold. I warm it with ______.";
			qution[1] = "My pet is ______. Pet shower?";
			qution[2] = "My pet is lonely. I ______ it.";
			qution[3] = "My pet is _____! I give it water to drink.";
			qution[4] = "My pet is sick. I give it hot ______.";
			qution[5] = "My pet feels _____. I Feed it.";
			qution[6] = "My pet is bored being home all day. I take it out for a _____.";
			qution[7] = "My pet is tired. I give it a pillow to ______.";
			qution[8] = "My pet is misbehaving. I train it to _______  better.";
			qution[9] = "My pet is getting fat/lazy. I take it to ______ with me!";
			qution[10] = "My pet met a friend, but they have nothing to do. Give them a ball to _____ with";
			qution[11] = "My pet is upset. I play it a _____ song.";
			//-----------------
			anser[0] = ["a blanket", "ice cream", "scream at it", "a ball to play with", 1];
			anser[1] = ["hungry", "dirty", "taking care", "tired", 2];
			anser[2] = ["play", "turn", "give", "hug ", 4];
			anser[3] = ["hungry", "tired", "thirsty", "play", 3];
			anser[4] = ["", "", "", "", 1];
			anser[5] = ["hungry", "lonely", "flowers", "tired", 1];
			anser[6] = ["take", "play", "watch", "walk", 4];
			anser[7] = ["", "", "", "", 4];
			anser[8] = ["behave", "punish", "anything", "give", 1];
			anser[9] = ["feeding", "shout", "workout", "lights", 3];
			anser[10] = ["anything", "play", "my pet back", "king’s feast", 2];
			anser[11] = ["", "", "", "", 4];
		}
		//-------------הקוד בסוף המשחק-----------------
		function codeResolt(time1,nikud1,time2,nikud2){
			var code=time1+"-"+nikud1+"-"+time2+"-"+nikud2;
			return code;
		}
		function pointResolt(nikud1,time1,nikud2,time2){
			var poimt=520-(nikud1*20+nikud2*10);
			if(time1<180){
				poimt+=50;
			}
			if(time2<180){
				poimt+=50;
			}
			return poimt;
		}
		var home = this;
		var myEgg;
		var myNamePet;
		var ErorrName = false;
		var myQution = 0;
		var psilot = 0;
		var psilotLast = 0;
		var time = 0;
		var timeLast = 0;
		var playAgin = false;
		var myPetV;
		var myTimerStop = false;
		var mySundChildQ = 0;
		var vocaTRUE = true;
		//-----------------------דף פתיחה------------
		myinit();
		function myinit() {
			var opening = new lib.opening();
			opening.x = 500;
			opening.y = 250;
			opening.name = "op";
			stage.addChild(opening);
			opening.playBut.addEventListener("click", myPlay);
		}
		//-------------------מסך הבחירה--------
		function myPlay() {
			//מחיקת מסך הפתיחה
			if (playAgin == false) {
				var opening = stage.getChildByName("op");
				opening.playBut.removeEventListener("click", myPlay);
				stage.removeChild(opening);
			}
			//הספת הביצים
			var selectEgg = new lib.selectEgg();
			selectEgg.x = 500;
			selectEgg.y = 250;
			selectEgg.name = "selectEgg";
			stage.addChild(selectEgg);
			selectEgg.ofir.addEventListener("click", eggOfir);
			selectEgg.idan.addEventListener("click", eggIdan);
			selectEgg.dor.addEventListener("click", eggDor);
			if (playAgin == true) {
				if (myPetV == "ofir") {
					selectEgg.madleOfir.visible = true;
					selectEgg.ofir.removeEventListener("click", eggOfir);
		
				} else if (myPetV == "dor") {
					selectEgg.madleDor.visible = true;
					selectEgg.dor.removeEventListener("click", eggDor);
		
				} else if (myPetV == "idan") {
					selectEgg.madleIdan.visible = true;
					selectEgg.idan.removeEventListener("click", eggIdan);
				}
				myTimerStop = false;
			}
			var Go = setInterval(function () {
		
				if (myTimerStop == true) {
					clearInterval(Go);
				} else {
					time++;
				}
		
			}, 1000);
		
		
		}
		//-----------------בחירת הביצה-------------
		function eggIdan() {
			myEgg = 0;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggIdan1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		function eggOfir() {
			myEgg = 1;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggOfir1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		function eggDor() {
			myEgg = 2;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggDor1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		//------------------בחירת שם לביצה----------------
		function MyName() {
			var myName = new lib.myName();
			myName.x = 600;
			myName.y = 100;
			myName.name = "myName";
			stage.addChild(myName);
			//כפתור התחל משחק
			home.butStart.visible = true;
			home.butStart.addEventListener("click", ErorrName1);
		
			//אינפוט טקסט
			var txt = document.createElement("INPUT");
			txt.setAttribute("type", "text");
			txt.setAttribute("id", "code");
			txt.setAttribute("size", "5");
			txt.style.left = "50%";
			txt.style.top = "50%";
			txt.style.textAlign = "center";
			txt.style.position = "absolute";
			txt.style.height = "80px";
			txt.style.weight = "60px";
			txt.style.fontSize = "40pt";
			document.getElementById("animation_container").appendChild(txt);
		
		}
		//-----------------------אם לא הוקלד שם לדמות
		function ErorrName1() {
			myNamePet = document.getElementById('code').value;
			//alert(myNamePet);
			if (myNamePet == "" || myNamePet == " ") {
				if (ErorrName == false) {
					var myNameErorr = new lib.erorrMyName();
					myNameErorr.x = 830;
					myNameErorr.y = 330;
					myNameErorr.name = "myNameErorr";
					stage.addChild(myNameErorr);
					ErorrName = true;
				}
			} else {
				MyStartGame();
			}
		}
		//----------------------התחלת המשחק------------
		function MyStartGame() {
			if (ErorrName == true) {
				var myNameErorr = stage.getChildByName("myNameErorr");
				stage.removeChild(myNameErorr);
			}
			var myNameIn = document.getElementById('code');
			document.getElementById("animation_container").removeChild(myNameIn);
			var myName = stage.getChildByName("myName");
			stage.removeChild(myName);
			var egg = stage.getChildByName("egg");
			stage.removeChild(egg);
			home.butStart.visible = false;
			gotoThePlay();
		
		}
		function gotoThePlay() {
			home.bacrund.gotoAndPlay(1);
			var Go = setInterval(function () {
				quitsionGo();
				clearInterval(Go);
				home.mad.visible = true;
			}, 1600);
		
		}
		//---------------------פתיחת השאלה בהתחלה-------------
		function quitsionGo() {
			var MyQ = new lib.MyQ();
			MyQ.x = 480;
			MyQ.y = 290;
			MyQ.name = "MyQ";
			stage.addChild(MyQ);
			var qp = new lib.QutionPage();
			qp.x = 480;
			qp.y = 450;
			qp.name = "QutionPage";
			stage.addChild(qp);
			qp.A1.addEventListener("click", A1click);
			qp.A2.addEventListener("click", A2click);
			qp.A3.addEventListener("click", A3click);
			qp.A4.addEventListener("click", A4click);
			/*
			qp.sund1.addEventListener("click", mysundQ1);
			qp.sund2.addEventListener("click", mysundQ2);
			qp.sund3.addEventListener("click", mysundQ3);
			qp.sund4.addEventListener("click", mysundQ4);*/
		
			tohen();
			if (myQution == 0) {
				if (myEgg == 0) {
					var pet = new lib.PetIdan();
					pet.x = 480;
					pet.y = 180;
					pet.name = "pet";
					stage.addChild(pet);
				} else if (myEgg == 2) {
					var pet = new lib.PetOfir();
					pet.x = 480;
					pet.y = 180;
					pet.name = "pet";
					stage.addChild(pet);
				} else if (myEgg == 1) {
					var pet = new lib.petDor();
					pet.x = 480;
					pet.y = 180;
					pet.name = "pet";
					stage.addChild(pet);
				}
			}
			var pet = stage.getChildByName("pet");
			pet.gotoAndPlay(myQution);
		
		
			var boom = new lib.boom();
			boom.x = 470;
			boom.y = 200;
			stage.addChild(boom);
		
			var boomGo = setInterval(function () {
				stage.removeChild(boom);
				clearInterval(boomGo);
				if (vocaTRUE == true) {
					vocaTRUE = false;
					myVoca();
				}
			}, 800);
		
		}
		//------------------החדרת התוכן--------------------
		function tohen() {
			var MyQ = stage.getChildByName("MyQ");
			MyQ.txtQ.text = qution[myQution].toString();
			var qp = stage.getChildByName("QutionPage");
			qp.A1txt.text = anser[myQution][0].toString();
			qp.A2txt.text = anser[myQution][1].toString();
			qp.A3txt.text = anser[myQution][2].toString();
			qp.A4txt.text = anser[myQution][3].toString();
			//סאונד חדש
			if ((anser[myQution][0].toString()) == "") {
				sundChild();
			}
		
		
			//var mysund = createjs.Sound.play(sundChildend[myQution][0]);
			//var pet=stage.getChildByName("pet");
			//pet.gotoAndPlay(1);
		}
		//----------------בדיקת התשובה--------------------
		function A1click() {
			if (anser[myQution][4] == 1) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A1erorr.visible = true;
				psilot++;
			}
		}
		function A2click() {
			if (anser[myQution][4] == 2) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A2erorr.visible = true;
				psilot++;
			}
		}
		function A3click() {
			if (anser[myQution][4] == 3) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A3erorr.visible = true;
				psilot++;
			}
		}
		function A4click() {
			if (anser[myQution][4] == 4) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A4erorr.visible = true;
				psilot++;
			}
		
		}
		//-------------------משוב חיובי--------------------
		function level() {
			var qp = stage.getChildByName("QutionPage");
			stage.removeChild(qp);
			var congluison = new lib.congluison();
			congluison.x = 480;
			congluison.y = 450;
			congluison.name = "congluison";
			stage.addChild(congluison);
			if (anser[myQution][(anser[myQution][4]) - 1] == "") {
				if (anser[myQution][4] == 1) {
					mysundQ1();
				} else if (anser[myQution][4] == 2) {
					mysundQ2();
				} else if (anser[myQution][4] == 3) {
					mysundQ3();
				} else {
					mysundQ4();
				}
				mySundChildQ++;
		
			} else {
				congluison.txt.text = anser[myQution][(anser[myQution][4]) - 1];
		
			}
			congluison.NextBut.addEventListener("click", Next);
			myMad();
			//var mysund1 = createjs.Sound.play((sundChildend[myQution][anser[myQution][4]]).toString());
		
		
		
		}
		function Next() {
			var congluison = stage.getChildByName("congluison");
			stage.removeChild(congluison);
			var MyQ = stage.getChildByName("MyQ");
			stage.removeChild(MyQ);
			myQution++;
			if (myQution < qution.length) {
				quitsionGo();
			} else {
				myRusalt();
			}
		}
		//-------------------סוף המשחק-------------------
		function myRusalt() {
			myTimerStop = true;
			//alert(psilot);
			home.mad.MyEgg.y = 387;
			home.mad.visible = false;
			var pet = stage.getChildByName("pet");
			pet.visible = false;
			home.bacrund.gotoAndPlay(40);
		
		
		
			var Go = setInterval(function () {
				pet.visible = true;
				pet.gotoAndPlay(13);
				pet.y = 450;
				home.vectory.visible = true;
				home.vectory.no.addEventListener("click", noFunc);
				home.vectory.yes.addEventListener("click", yesFunc);
				home.vectory.textResalt.playAgian5.addEventListener("click", playA);
		
				if (playAgin == true) {
					home.vectory.yes.visible = false;
					home.vectory.no.visible = false;
					home.vectory.playagin.visible = false;
					pet.x -= 50;
					var secendPet;
					if (myPetV == "ofir") {
		
						secendPet = new lib.petDor();
					}
					if (myPetV == "dor") {
						secendPet = new lib.PetOfir();
		
		
					}
					if (myPetV == "idan") {
						secendPet = new lib.PetIdan();
					}
					secendPet.gotoAndPlay(13);
					secendPet.y = 450;
					secendPet.x = 750;
					secendPet.name = "secendPet";
					stage.addChild(secendPet);
		
					home.vectory.textResalt.visible = true;
					home.vectory.playagin.visible = false;
					rusoltCodeAndPoint();
				}
				clearInterval(Go);
			}, 1600);
		}
		//-----------------שמע במשחק--------
		function mysundQ1() {
			if (mySundChildQ == 0) {
				var mySund = new lib.D31();
				stage.addChild(mySund);
			} else if (mySundChildQ == 1) {
				var mySund = new lib.D51();
				stage.addChild(mySund);
			} else if (mySundChildQ == 2) {
				var mySund = new lib.D101();
				stage.addChild(mySund);
			} else if (mySundChildQ == 3) {
				var mySund = new lib.D441();
				stage.addChild(mySund);
			} else if (mySundChildQ == 4) {
				var mySund = new lib.D771();
				stage.addChild(mySund);
			} else if (mySundChildQ == 5) {
				var mySund = new lib.D1111();
				stage.addChild(mySund);
			}
		}
		function mysundQ2() {
			if (mySundChildQ == 0) {
				var mySund = new lib.D32();
				stage.addChild(mySund);
			} else if (mySundChildQ == 1) {
				var mySund = new lib.D52();
				stage.addChild(mySund);
			} else if (mySundChildQ == 2) {
				var mySund = new lib.D102();
				stage.addChild(mySund);
			} else if (mySundChildQ == 3) {
				var mySund = new lib.D442();
				stage.addChild(mySund);
			} else if (mySundChildQ == 4) {
				var mySund = new lib.D772();
				stage.addChild(mySund);
			} else if (mySundChildQ == 5) {
				var mySund = new lib.D1112();
				stage.addChild(mySund);
			}
		}
		function mysundQ3() {
			if (mySundChildQ == 0) {
				var mySund = new lib.D33();
				stage.addChild(mySund);
			} else if (mySundChildQ == 1) {
				var mySund = new lib.D53();
				stage.addChild(mySund);
			} else if (mySundChildQ == 2) {
				var mySund = new lib.D103();
				stage.addChild(mySund);
			} else if (mySundChildQ == 3) {
				var mySund = new lib.D443();
				stage.addChild(mySund);
			} else if (mySundChildQ == 4) {
				var mySund = new lib.D773();
				stage.addChild(mySund);
			} else if (mySundChildQ == 5) {
				var mySund = new lib.D1113();
				stage.addChild(mySund);
			}
		}
		function mysundQ4() {
			if (mySundChildQ == 0) {
				var mySund = new lib.D34();
				stage.addChild(mySund);
			} else if (mySundChildQ == 1) {
				var mySund = new lib.D54();
				stage.addChild(mySund);
			} else if (mySundChildQ == 2) {
				var mySund = new lib.D104();
				stage.addChild(mySund);
			} else if (mySundChildQ == 3) {
				var mySund = new lib.D444();
				stage.addChild(mySund);
			} else if (mySundChildQ == 4) {
				var mySund = new lib.D774();
				stage.addChild(mySund);
			} else if (mySundChildQ == 5) {
				var mySund = new lib.D1114();
				stage.addChild(mySund);
			}
		}
		//-----------------------------התקדמות במד התקדמות
		function myMad() {
			var makom = (home.mad.MyEgg.y) - (387 - 29) / qution.length;
			//home.mad.MyEgg.y-=(387-29)/qution.length;
			var Go = setInterval(function () {
				if (home.mad.MyEgg.y > makom) {
					home.mad.MyEgg.y -= 2;
				} else {
					clearInterval(Go);
				}
			}, 10);
		
		}
		//--------------------לחיצה על כפתור הלא
		function noFunc() {
			home.vectory.yes.visible = false;
			home.vectory.no.visible = false;
			home.vectory.playagin.visible = false;
			home.vectory.textResalt.visible = true;
			rusoltCodeAndPoint();
		
		}
		//----------------לחיצה על כפתור הכן
		function yesFunc() {
			home.vectory.visible = false;
			var pet = stage.getChildByName("pet");
			stage.removeChild(pet);
			//מדידת הניקוד
			myQution = 0;
			psilotLast = psilot;
			psilot = 0;
			timeLast = time;
			time = 0;
		
			playAgin = true;
			if (myEgg == 0) {
				myPetV = "idan";
		
			} else if (myEgg == 1) {
				myPetV = "ofir";
		
			} else {
				myPetV = "dor";
		
			}
			qution2();
			myPlay();
		}
		function rusoltCodeAndPoint() {
		
			home.vectory.myCode.text = codeResolt(psilot, time, psilotLast, timeLast);
			home.vectory.MyPoint.text = pointResolt(psilot, time, psilotLast, timeLast);
		}
		function sundChild() {
			var qp = stage.getChildByName("QutionPage");
			qp.sund1.visible = true;
			qp.sund2.visible = true;
			qp.sund3.visible = true;
			qp.sund4.visible = true;
		
			qp.sund1.addEventListener("click", mysundQ1);
			qp.sund2.addEventListener("click", mysundQ2);
			qp.sund3.addEventListener("click", mysundQ3);
			qp.sund4.addEventListener("click", mysundQ4);
		}
		function myVoca() {
			var voca = new lib.vocabulary();
			voca.x = 100;
			voca.y = 100;
			stage.addChild(voca);
			var vocaGo = setInterval(function () {
				stage.removeChild(voca);
				clearInterval(vocaGo);
			}, 10000);
		}
		function playA() {
			location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.vectory = new lib.מסךסיום();
	this.vectory.parent = this;
	this.vectory.setTransform(186.3,173.9);
	this.vectory.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.vectory).wait(1));

	// מד התקדמות
	this.mad = new lib.מדהתקדמותשלם();
	this.mad.parent = this;
	this.mad.setTransform(89.1,272.4,1,1,0,0,0,28.4,213.5);
	this.mad.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mad).wait(1));

	// המסך
	this.butStart = new lib.myStart();
	this.butStart.parent = this;
	this.butStart.setTransform(610.4,423.7);
	this.butStart.visible = false;
	new cjs.ButtonHelper(this.butStart, 0, 1, 2, false, new lib.myStart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.butStart).wait(1));

	// רקע
	this.bacrund = new lib.רקע();
	this.bacrund.parent = this;
	this.bacrund.setTransform(494.3,525.6,1,1,0,0,0,542.3,573.6);

	this.timeline.addTween(cjs.Tween.get(this.bacrund).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357.9,227,1183.7,1147.2);
// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dinonite_atlas_.png?1548527280421", id:"dinonite_atlas_"},
		{src:"sounds/mySundEnd.mp3?1548527284058", id:"mySundEnd"},
		{src:"sounds/sundBoom.mp3?1548527284058", id:"sundBoom"},
		{src:"sounds/MD101.mp3?1548527284058", id:"MD101"},
		{src:"sounds/MD102.mp3?1548527284058", id:"MD102"},
		{src:"sounds/MD103.mp3?1548527284058", id:"MD103"},
		{src:"sounds/MD104.mp3?1548527284058", id:"MD104"},
		{src:"sounds/MD1111.mp3?1548527284058", id:"MD1111"},
		{src:"sounds/MD1112.mp3?1548527284058", id:"MD1112"},
		{src:"sounds/MD1113.mp3?1548527284058", id:"MD1113"},
		{src:"sounds/MD1114.mp3?1548527284058", id:"MD1114"},
		{src:"sounds/MD31.mp3?1548527284058", id:"MD31"},
		{src:"sounds/MD32.mp3?1548527284058", id:"MD32"},
		{src:"sounds/MD33.mp3?1548527284058", id:"MD33"},
		{src:"sounds/MD34.mp3?1548527284058", id:"MD34"},
		{src:"sounds/MD441.mp3?1548527284058", id:"MD441"},
		{src:"sounds/MD442.mp3?1548527284058", id:"MD442"},
		{src:"sounds/MD443.mp3?1548527284058", id:"MD443"},
		{src:"sounds/MD444.mp3?1548527284058", id:"MD444"},
		{src:"sounds/MD51.mp3?1548527284058", id:"MD51"},
		{src:"sounds/MD52.mp3?1548527284058", id:"MD52"},
		{src:"sounds/MD53.mp3?1548527284058", id:"MD53"},
		{src:"sounds/MD54.mp3?1548527284058", id:"MD54"},
		{src:"sounds/MD771.mp3?1548527284058", id:"MD771"},
		{src:"sounds/MD772.mp3?1548527284058", id:"MD772"},
		{src:"sounds/MD773.mp3?1548527284058", id:"MD773"},
		{src:"sounds/MD774.mp3?1548527284058", id:"MD774"},
		{src:"sounds/soup_s.mp3?1548527284058", id:"soup_s"},
		{src:"sounds/bacrund_sund.mp3?1548527284058", id:"bacrund_sund"},
		{src:"sounds/turn_s.mp3?1548527284058", id:"turn_s"},
		{src:"sounds/walk_s.mp3?1548527284058", id:"walk_s"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
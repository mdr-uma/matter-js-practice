const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter 

// An engine is a controller that manages updating the simulation of the world
const engine = Engine.create()

// world is an object that comes with engine
const { world } = engine

// The Matter.Render module is a simple canvas based renderer for visualising instances of Matter.Engine
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600
    }
})
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter 

const width = 800
const height = 600

// An engine is a controller that manages updating the simulation of the world
const engine = Engine.create()

// world is an object that comes with engine
const { world } = engine

// The Matter.Render module is a simple canvas based renderer for visualising instances of Matter.Engine
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width,
        height
    }
})
Render.run(render)

// The Matter.Runner module is an optional utility which provides a game loop, that handles continuously updating a Matter.Engine for you within a browser
Runner.run(Runner.create(), engine)

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))

// Walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 300,40, 600, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
]

World.add(world, walls)

// random shapes
for (let i = 0; i < 50; i++){
    if (Math.random() > 0.5) {
        World.add(
            world, 
            Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
           )
    } else {
        World.add(
            world,
            Bodies.circle(Math.random() * width, Math.random() * height, 35, {
                render: {
                    fillStyle: 'green'
                }
            })
        )
    }
} 
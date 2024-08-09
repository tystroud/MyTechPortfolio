const svg = document.querySelector("svg.trail")
const path = svg.querySelector("path")

let points = []
let segments = 50
let mouse = {
    x: 0,
    y: 0
}

const move = (event) => {
    const x = event.clientX
    const y = event.clientY

    mouse.x = x
    mouse.y = y

    if (points.length === 0) {
        for (let i = 0; i< segments; i++){
            points.push({
                x: x,
                y: y,
            })
        }
    }
}

const anim = () => {
    //my starting point
    let px = mouse.x
    let py = mouse.y

    points.forEach((p, index) => {
        p.x = px
        p.y = py

        let n = points[index + 1]

        if(n){
            px = px -(p.x - n.x) * 0.5
            py = py -(p.y - n.y) * 0.5
        }
    }) 



    path.setAttribute("d", `M ${points.map(p => `${p.x} ${p.y}`).join(` L `)}`)

    requestAnimationFrame(anim)
}

const resize = () => {
    const ww = window.innerWidth
    const wh = window.innerHeight

    svg.style.width = ww + "px"
    svg.style.height = wh + "px"
    svg.setAttribute("viewBow", `0 0 ${ww} ${wh}`)
}

document.addEventListener('mousemove', move)
window.addEventListener("resize", resize)

anim()
resize()

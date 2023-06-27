window.onload = function () {
    const muyu = document.getElementById('muyu')
    const gun = document.getElementById('gun')
    const totalBox = document.getElementById('totalBox')
// 

let reWidth 

let reHeight

let reTransform


class Result {
    arr = []
    container = container
    push() {
        const result = document.createElement('div')
        result.innerHTML = '功德+1'
        result.className = 'result'
        result.style.opacity = 1
        this.container.appendChild(result)
        this.arr.push(result)
    }
    update() {
        for (let i of this.arr) {
            i.style.top = i.offsetTop - 1 + 'px'
            i.style.opacity = i.style.opacity - 0.01
            
        }
        this.arr = this.arr.filter(item => 
            {
                if (item.style.opacity <= 0) {
                    this.container.removeChild(item)
                    return false
                }else {
                    return true
                }
            }
            ) 
        
    }
}

const res = new Result()

let _value = 0

Object.defineProperty(totalBox, 'gongde', {
    get() {
        return _value
    },
    set(val) {
        _value = val
        const gongde = document.getElementById('gongde')
        // console.log(gongde);
        gongde.innerHTML = `功德：${val}`
    }
})

totalBox.addEventListener('click', function () {
    const audio = document.createElement('audio')
    audio.src =  '../assets/mp3/muyuyin.mp3'
    audio.play()
    totalBox.gongde++
    // reWidth = muyu.style.width 
    // reHeight = muyu.style.height
    // reTransform = gun.style.transform
    // gun.style.transform = gun.style.transform + 'rotateZ(40deg)'
    
    // muyu.style.width = muyu.offsetWidth * 0.9 + 'px'
    // muyu.style.height = muyu.offsetHeight * 0.9 + 'px'

    res.push()

})


// totalBox.addEventListener('mouseup', function () {
//     gun.style.transform =  reTransform
//     muyu.style.width = reWidth 
//     muyu.style.height = reHeight

// })

function animate() {
  
    res.update()
    requestAnimationFrame(animate)
}

animate()

}
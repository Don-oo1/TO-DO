//take refrance of all element 
//thumsup button is diable when there is not text in input bar
//when user enter some text in input task thumbsup buttn apear
//when user click on thumsup task append in todo div with task card 
//task card have 3 buttin 
//in to dive, right arrow button is avaiable other are diapper 
//when user click on this right button task card trasfer in dooing section 
//in doing section there are two button left and right, left gouse to tod dive and rigth goes to done div
//in done dive there are two buttons left and remove
//left goes to doing div and remove will remove task from application 

//so here we need to create 3 array for todo, doing, done 
//when we add task task will add on respective array 
// we will rander all modified array when chages happed 

/**
 * funtion for rander all data
 * todoList[]
 * doingList[]
 * doneList[]
 * 
 * 
 */

//get all refrances

const inputBar = document.querySelector("#input-bar")
const inputEle = document.querySelector("#input-ele")
const inputButton = document.querySelector("#input-button")

const todoBord = document.querySelector("#todo-bord")
const doingBord = document.querySelector("#doing-bord")
const doneBord = document.querySelector("#done-bord")

const todoStand = document.querySelector("#todo-stand")
const doingStand = document.querySelector("#doing-stand")
const doneStand = document.querySelector("#done-stand")

const stand = document.querySelectorAll(".stand")
const bord = document.querySelectorAll(".bord")
                                                  

// let todoRightArrow = document.querySelectorAll("#todo-stand .task-card .right-arrow")

const todoList = []
const doingList = []
const doneList = []

function rander(){

    inputEle.value = ""
    inputButton.hidden = true
    stand.forEach( (value) => {value.innerHTML=""} )
    
    randerList(todoList,todoStand)
    const todoRightArrow = document.querySelectorAll("#todo-stand .task-card .right-arrow")
    todoRightArrow.forEach(todoRightF)

    randerList(doingList,doingStand)
    const doingLeftArrow = document.querySelectorAll("#doing-stand .task-card .left-arrow")
    doingLeftArrow.forEach(doingLeftF)

    const doingRightArrow = document.querySelectorAll("#doing-stand .task-card .right-arrow")
    doingRightArrow.forEach(doingRightF)


    randerList(doneList,doneStand)


    const doneLeftArrow = document.querySelectorAll("#done-stand .task-card .left-arrow")
    doneLeftArrow.forEach(doneLeftF)

    const doneRightArrow = document.querySelectorAll("#done-stand .task-card .remove-arrow")
    doneRightArrow.forEach(doneRemoveF)

    
}


function randerList(list, stand){
    let innerHtml = ""
    let index = 0
    for(item of list){




        const taskCard = 
                `<div class="task-card">
                    <button class="left-arrow" class="arrow-button"value="${index}" >⬅️</button>
                    <div class="task">${item}</div>
                    <button class="right-arrow" class="arrow-button"value="${index}">➡️</button>
                    <button class="remove-arrow" class="arrow-button"value="${index}">❎</button>
                </div>`
    
        index++
        innerHtml += taskCard
    }

    stand.innerHTML = innerHtml


}

inputEle.addEventListener("keyup",(event)=>{
    if(inputEle.value.trim() != ""){
        inputButton.hidden = false
    }else{
        inputButton.hidden = true
    }
})

inputButton.addEventListener("click",(event)=>{
   
    todoList.push(inputEle.value)
    rander()
})



rander()
let todoRightArrow 

function todoRightF(value){

    value.addEventListener("click",(event)=>{
        console.log(event.target.value)
        const index = event.target.value
        const valu = todoList.splice(index, 1)
        // console.log(valu)
        doingList.push(valu[0])
        rander()
    })

}
function doingRightF(value){
    value.addEventListener("click",(event)=>{
        const index = event.target.value
        const value = doingList.splice(index, 1)
        doneList.push(value[0])
        rander()
    })

}
function doingLeftF(value){
    value.addEventListener("click",(event)=>{
        const index = event.target.value
        const value = doingList.splice(index, 1)
        todoList.push(value[0])
        rander()
    })

}
function doneLeftF(value){
    value.addEventListener("click",(event)=>{
        const index = event.target.value
        const value = doneList.splice(index, 1)
        doingList.push(value[0])
        rander()
    })

}
function doneRemoveF(value){
    value.addEventListener("click",(event)=>{
        const index = event.target.value
        const value = doneList.splice(index, 1)
        rander()
    })

}

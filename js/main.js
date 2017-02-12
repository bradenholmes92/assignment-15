// GO!
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
// TASK 1 -- Show/Hide Nav
document.querySelector("#hide-nav button").addEventListener('click', function(){
  var showHide = document.querySelector('.nav-menu')
  //console.log(showHide)
  if (showHide.style.display === 'none') {
    showHide.style.display = 'block';
  }else {
    showHide.style.display = 'none';
  }
})
// TASK 2 -- Select an Icon
var divContainerEls = document.querySelectorAll(".option")
//console.log(divContainerEls)
forEach(divContainerEls, function(contElement, index, array){

  contElement.addEventListener('click', function(evt){
    var targetingElement = event.currentTarget
    if (targetingElement.className === 'option' ) {
      targetingElement.className = 'selected'
    }else {
      targetingElement.className = 'option'
    }
  })

})
// TASK 3 -- Move Item From List to List
var buttonAdderElement = document.querySelectorAll('#add-vals .point')
var allThePoints = document.querySelector('.total-points')
//console.log(allThePoints)
var justThePointsNum = parseInt(allThePoints.textContent)
//console.log(justThePointsNum)

forEach(buttonAdderElement, function(button, index, array){

  button.addEventListener('click', function(){
    var specificPoints = button.textContent
    justThePointsNum = justThePointsNum + parseInt(specificPoints)
    allThePoints.innerHTML = justThePointsNum
  })

})


// TASK 4 -- Add Guest to List

var wholeList = document.querySelectorAll('#list-2-list li')
//console.log(wholeList)
var goodStanding = document.querySelector('.good-standing-list')
//console.log(goodStanding)
var probationList = document.querySelector('.probation-list')
//console.log(probationList)
forEach(wholeList, function(liElement, index, array){
  liElement.addEventListener('click', function(){
      if (liElement.parentNode.className === goodStanding) {
        goodStanding.removeChild(liElement)
        probationList.appendChild(liElement)
      }else {
        probationList.removeChild(liElement)
        goodStanding.appendChild(liElement)
      }
  })
})



// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

let tripArr = [];
function addTrip() {
    let temp = document.getElementById('addItem');
    temp.style.visibility = "visible"
    document.getElementById('blur').style.filter = "blur(6px)"
}
function addItem() {
    if (document.getElementById('tripText').value == "") {
        alert('Trip Name Cant Be Empty')
    }
    else if (tripArr.includes(document.getElementById('tripText').value)) {
        alert('Same Name Card Exist')
    }
    else {
        let tempValue = document.getElementById('tripText').value;
        let newSection = document.createElement('section')
        newSection.classList.add('flex-item')
        newSection.setAttribute('id', tempValue)
        let newHeadline = document.createElement('h2')
        newHeadline.setAttribute('class', 'headline')
        newHeadline.setAttribute('data-html', tempValue)
        newHeadline.setAttribute('onClick', 'newHtml(this)')
        newHeadline.setAttribute('id', tempValue + 'headingOfCard')
        newHeadline.style.cursor = 'pointer'
        newHeadline.innerText = tempValue;
        newSection.appendChild(newHeadline)
        let newHr = document.createElement('hr')
        newHr.setAttribute('class', 'hr1')
        newSection.appendChild(newHr)
        document.getElementById('flex-container').append(newSection)
        tripArr.push(tempValue)



        // add button
        let addIcon = document.createElement('div')
        addIcon.classList.add('material-icons', 'containerAdd-icon')
        addIcon.innerText = 'add_circle'
        addIcon.setAttribute('value', "")
        addIcon.value = tempValue
        addIcon.setAttribute('onClick', 'addTheItem(this.value)')
        document.getElementById(tempValue).append(addIcon)



        // delete icon
        let deleteIcon = document.createElement('div')
        deleteIcon.setAttribute('value', "")
        deleteIcon.classList.add('material-icons', 'delete-icon')
        deleteIcon.innerText = 'delete'
        deleteIcon.value = tempValue;
        deleteIcon.setAttribute('onClick', 'deleteThis(this.value)')
        document.getElementById(tempValue).append(deleteIcon)

    }
    document.getElementById('tripText').value = ""
    document.getElementById('addItem').style.visibility = 'hidden'
    document.getElementById('blur').style.filter = "blur(0)"
}
function deleteThis(val) {
    document.getElementById(val).remove()
    tripArr.splice(tripArr.indexOf(val), 1)
}
function addTheItem(val) {
    document.getElementById('addList').style.visibility = 'visible'
    document.getElementById('blur').style.filter = "blur(6px)"
    document.getElementById('addListBtn').value = val;
}
function addList(val) {
    let temp = document.getElementById('listText').value
    let tempList = document.createElement('span')
    tempList.innerText = document.getElementById('listText').value
    tempList.setAttribute('id', val + document.getElementById('listText').value)
    tempList.style.fontSize = '23px'
    document.getElementById(val).lastElementChild.previousElementSibling.before(tempList)
    document.getElementById(val + 'headingOfCard').setAttribute('data-list', temp)



    let tempListBtn = document.createElement('button')
    tempListBtn.innerText = "Mark done"
    tempListBtn.style.fontSize = '12px'
    tempListBtn.style.color = 'white'
    tempListBtn.style.borderRadius = '10px'
    tempListBtn.style.backgroundColor = 'rgb(74,138,238)'
    tempListBtn.setAttribute('data-class', document.getElementById('listText').value)
    tempListBtn.setAttribute('value', '')
    tempListBtn.value = val
    tempListBtn.setAttribute('id', val + document.getElementById('listText').value + 'btn')
    tempListBtn.addEventListener('click', function () {
        tempListBtn.parentElement.style.textDecoration = 'line-through'
        tempListBtn.parentElement.style.color = 'red'
        tempListBtn.remove()
    })
    tempList.appendChild(tempListBtn)



    let tempBreak = document.createElement('br')
    document.getElementById(val).lastElementChild.previousElementSibling.before(tempBreak)



    document.getElementById('addList').style.visibility = 'hidden'
    document.getElementById('blur').style.filter = "blur(0)"
    document.getElementById('listText').value = ""
}
function closeThis() {
    document.getElementById('addItem').style.visibility = 'hidden'
    document.getElementById('addList').style.visibility = 'hidden'
    document.getElementById('blur').style.filter = "blur(0)"
}
function newHtml(obj) {
    document.getElementById('firstHtml').style.visibility = 'hidden'
    document.getElementById('tripContainer').style.visibility = 'visible'
    document.getElementById('headingNewHtml').innerText = obj.getAttribute('data-html')
    // document.getElementById('backHtml').value = obj.getAttribute('data-html')
    let backbtn = document.createElement('span')
    backbtn.classList.add('material-icons', 'back-icon')
    backbtn.setAttribute('value', '')
    backbtn.value = obj.getAttribute('data-html')
    backbtn.innerText = 'arrow_circle_left'
    backbtn.addEventListener('click', function () {
        temp.classList.remove('newHtml')
        temp.firstElementChild.nextElementSibling.classList.remove('innerHrHtml')
        document.getElementById('tripContainer').style.visibility = 'hidden'
        document.getElementById('firstHtml').style.visibility = 'visible'
        backbtn.remove()
    })
    document.getElementById('backBtn').appendChild(backbtn)
    let temp = document.getElementById(obj.getAttribute('data-html'))
    temp.classList.add('newHtml')
    temp.firstElementChild.nextElementSibling.classList.add('innerHrHtml')

}
// function firstHtml(){
//     temp = document.getElementById(val)
//     temp.classList.remove('newHtml')
//     temp.firstElementChild.nextElementSibling.classList.remove('innerHrHtml')
//     document.getElementById('tripContainer').style.visibility = 'hidden'
//     document.getElementById('firstHtml').style.visibility = 'visible'

// }
document.getElementById('tripContainer').style.visibility = 'hidden'
document.getElementById('tripContainer').style.position = 'absolute'
// find each color button on page
const blueBtn = document.querySelector('#blueBtn')
const orangeBtn = document.querySelector('#orangeBtn')
const greenBtn = document.querySelector('#greenBtn')

const setTheme = (color) => {
    // find the jumbotron element
    let jumbotron = document.querySelector('.jumbotron')
    // find the donate element
    let donateBtn = document.querySelector('.jumbotron .btn-primary')
    // find the volunteer element
    let volunteerBtn = document.querySelector('.jumbotron .btn-secondary')
    if (color == 'blue') {
      jumbotron.style.backgroundColor = '#588fbd'
      donateBtn.style.backgroundColor = '#ffa500'
      volunteerBtn.style.backgroundColor = 'black'
      volunteerBtn.style.color = 'white'
    } else if (color == 'orange') {
      jumbotron.style.backgroundColor = '#f0ad4e'
      donateBtn.style.backgroundColor = '#5751fd'
      volunteerBtn.style.backgroundColor = '31b0d5'
      volunteerBtn.style.color = 'white'
    } else if (color == 'green') {
      jumbotron.style.backgroundColor = '#87ca8a'
      donateBtn.style.backgroundColor = '#black'
      volunteerBtn.style.backgroundColor = '8c9c08'  
    }
  }
 // attach event listener to each button & on click change the color of the elements
 blueBtn.addEventListener('click', () => setTheme('blue'))
 orangeBtn.addEventListener('click', () => setTheme('orange'))
 greenBtn.addEventListener('click', () => setTheme('green'))


//  Form Validation and Submit


const submitFunction = () => {
    
    const email = document.querySelector('#exampleInputEmail1');
    const name = document.querySelector('#example-text-input');
    const description = document.querySelector('#exampleTextarea');
    err = 0;
    
    email.value.length > 0 && email.value.includes('@') ? email.style.borderColor = 'green' : (email.style.borderColor = 'red', err = 1);
    
    name.value.length > 0 ? name.style.borderColor = 'green' : (name.style.borderColor = 'red', err = 1);
    
    description.value.length > 0 ? description.style.borderColor = 'green' : (description.style.borderColor = 'red', err = 1);
    
    if (err === 0) {
        alert('Thank you for filling out the form');
        email.value = '';
        name.value = '';
        description.value = '';
        event.preventDefault();
    }
}
document.querySelector('form .btn').addEventListener('click', submitFunction);
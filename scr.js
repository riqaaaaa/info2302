function show1(){
    document.getElementById('div1').style.display ='none';
}

function show2(){
    document.getElementById('div1').style.display = 'block';
}

document.getElementById('submitButton').addEventListener('click', function() {
    alert('Form submitted successfully!');
});


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var form2 = document.getElementById('ratingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        submit();
        document.getElementById('box').value = '';
        document.getElementById('box1').value = '';
        document.getElementById('box2').value = '';
        document.getElementById('box3').value = '';
    });

    form2.addEventListener('submit', function (event) {
        event.preventDefault(); 
        submit();
        document.getElementById('box4').value = '';
        document.getElementById('box5').value = '';
    });
    
});

function submit() {
    alert("Submitted Successfully");
    
}


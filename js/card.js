// btn Follow
let btnFollow = document.querySelector('.buttons .ghost');
btnFollow.innerHTML = 'Follow';

// btn Message
let btnMessage = document.createElement('button');
let label = document.createTextNode = 'Messange';
btnMessage.append(label);
btnMessage.setAttribute('class', 'message');

// class buttons
const buttons = document.querySelector('.buttons');

btnFollow.addEventListener('click', function () {
    if (btnFollow.classList.contains('ghost') == true) {
        btnFollow.style.backgroundColor = 'transparent';
        btnFollow.style.width = '100px';
        btnFollow.style.color = '#d35400';
        btnFollow.innerHTML = 'Following';
        btnFollow.classList.toggle('ghost');
        buttons.append(btnMessage);
    } else {
        btnFollow.style.backgroundColor = '#d35400';
        btnFollow.style.color = '#ffffff';
        btnFollow.style.width = '200px';
        btnFollow.innerHTML = 'Follow';
        btnFollow.classList.toggle('ghost');
        buttons.removeChild(btnMessage);
    }
});
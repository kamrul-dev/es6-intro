// style border
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid red'
});

// add background color
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }
}

// add friend
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend - 3</h3>
        <p>Dolore, maxime.</p>
    `
    container.appendChild(friendDiv);
});
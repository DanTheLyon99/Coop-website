$(document).ready( () => {
    const rightSide = document.getElementById('sideBackground');
    const leftSide = document.getElementById('leftSide');
    const profilePic = document.getElementById('profilePic');
    const oracle = document.getElementById('oracle')
    const curam = document.getElementById('curam');
    //when page loads, slide from down to up
    $(leftSide).fadeIn();
    //when clicked away
    rightSide.addEventListener('click',(ev) => {
            $(leftSide).slideToggle('slow');
            $(profilePic).slideToggle();
            $(oracle).animate({width:'toggle'},350);
            $(curam).animate({width:'toggle'},350);

            
            
        })
    })


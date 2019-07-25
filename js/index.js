$(document).ready( () => {
    const rightSide = document.getElementById('sideBackground');
    const leftSide = document.getElementById('leftSide');
    const profilePic = document.getElementById('profilePic');
    const oracle = document.getElementById('oracle')
    const curam = document.getElementById('curam');
    const encrypt = document.getElementById('encrypt');
    const tester = document.getElementById('tester');

    //when page loads, slide from down to up
    $(leftSide).fadeIn();
    //when clicked away
    rightSide.addEventListener('click',(ev) => {
            $(leftSide).slideToggle('slow');
            $(profilePic).slideToggle();
            $(oracle).animate({width:'toggle'},350);
            $(curam).animate({width:'toggle'},350);
            $(encrypt).animate({width:'toggle'},350);
            $(tester).animate({width:'toggle'},350);


            
            
        })
    })


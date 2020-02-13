let player;
document.onreadystatechange = function() {
    if (document.readyState === 'interactive') {
        player = document.querySelector('#wtwf .audioelement');
    }
};
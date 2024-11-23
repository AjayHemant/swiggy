document.addEventListener('DOMContentLoaded', () => {
    const food1 = document.getElementById('food1');
    const food2 = document.getElementById('food2');
    const food4 = document.getElementById('food4');
    const getAppButton = document.getElementById('getapp');
    const dineout = document.getElementById('food3');

    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');
    const a4 = document.getElementById('a4');
    const a5 = document.getElementById('a5');
    const a6 = document.getElementById('a6');
    const a7 = document.getElementById('a7');
    const a8 = document.getElementById('a8');
    const a9 = document.getElementById('a9');
    const a10 = document.getElementById('a10');
    const a11 = document.getElementById('a11');
    const a12 = document.getElementById('a12');

    food1.addEventListener('click', () => {
        window.location.href = 'restaurant/restaurant.html';
    });

    dineout.addEventListener('click', () => {
        window.location.href = 'dineout/dineout.html';
    });

    food2.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1';
    });

    a1.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2';
    });

    a2.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2';
    });

    a3.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2';
    });

    a4.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2';
    });

    a5.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2';
    });

    a6.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80355?collection_id=80355&type=rcv2';
    });

    a7.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2';
    });

    a8.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2';
    });

    a9.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2';
    });

    a10.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80451?collection_id=80451&type=rcv2';
    });

    a11.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2';
    });

    a12.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2';
    });



    food4.addEventListener('click', () => {
        window.location.href = 'https://www.swiggy.com/genie';
    });

    getAppButton.addEventListener('click', () => {
        window.location.href = 'getapp/getapp.html';
    });
});

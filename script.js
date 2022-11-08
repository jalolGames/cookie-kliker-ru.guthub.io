var promos = document.getElementById('promo');

if (!localStorage.clicks) localStorage.clicks = 0
clicksCount.innerText = localStorage.clicks

onclick = () => {
    clicksCount.innerText++
    localStorage.clicks++
}

function promoActiv() {
    //alert(promos)

    if (promos.value  == 'GJITKYFEQ') 
    {
        alert('промокод успешно активирован!  перезайдите!');
        
        for(i=0; i<100; i++)
        {
            localStorage.clicks ++;
        }
    }
    else if (promos.value  == 'LFKJKNJG') 
    {
        alert('промокод успешно активирован! перезайдите!');
        for(i=0; i<500; i++)
        {
            localStorage.clicks ++;
        }
    }
    else if (promos.value  == 'EWHGCBBVJAFK') 
    {
        alert('промокод успешно активирован! перезайдите!');
        for(i=0; i<1000; i++)
        {
            localStorage.clicks ++;
        }
    }
    else if (promos.value  == 'RKFCCYFQAJY') 
    {
        alert('промокод успешно активирован! после перезахода фон исчезает!');
        document.body.classList.add('topfon')
    }
}

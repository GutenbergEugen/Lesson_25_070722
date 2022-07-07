const root_elem = document.querySelector('#root');


{
    const data = [
        {
            id: 1,
            title: '1О Компании',
            text: `1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque iure voluptatum magni cupiditate, non laudantium accusantium 
            ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? 
            Et odit numquam dolorem ipsam a!`
        },
        {
            id: 2,
            title: '2О Компании',
            text: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure voluptatum magni cupiditate, non laudantium accusantium ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? Et odit numquam dolorem ipsam a!'
        },
        {
            id: 3,
            title: '3О Компании',
            text: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure voluptatum magni cupiditate, non laudantium accusantium ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? Et odit numquam dolorem ipsam a!'
        },
        {
            id: 4,
            title: '4О Компании',
            text: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure voluptatum magni cupiditate, non laudantium accusantium ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? Et odit numquam dolorem ipsam a!'
        },
        {
            id: 5,
            title: '5О Компании',
            text: '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure voluptatum magni cupiditate, non laudantium accusantium ullam sunt ipsa! Doloremque iusto consectetur quod cupiditate? Et odit numquam dolorem ipsam a!'
        } 
    ]
    
    const root_elem = document.querySelector('#root');
    const posts_container = document.createElement('div'); //объединяем все переключатели в один блок и изолируем от других блоков
    posts_container.classList.add('posts_container');
    
    const trigger_container = document.createElement('div');
    trigger_container.classList.add('trigger_container');
    
    const trigger_array = data.map(({title, id, text})=>{ //создаем массив из кнопок с загаловками
        const button_elem = document.createElement('button'); //создаем кнопку с загаловком
        button_elem.addEventListener('click', event =>{ //вешаем событие на кнопку
            [...event.target.parentNode.children].forEach(btn => btn.classList.remove('active')); //(у коллекции children нет метода forEach) поэтому преобразуем родительский элемент (parentNode trigger_container) в массив дочерних элементов (children) для того чтобы отработал forEach и потом черз forEach убираем класс 'active'
    
            event.target.classList.add('active'); //только для активной кнопки добавляем класс 'active'
            content_elem.innerText = text; 
        })
        button_elem.innerText = title;
        return button_elem
    })
    
    trigger_container.append(...trigger_array); //добавляем массив с кнопками по элементно через спред-оператор (...) (просто добавить массивом нельзя)
    
    const content_elem = document.createElement('div'); //создаем блок для текста
    content_elem.classList.add('content');
    
    posts_container.append(trigger_container, content_elem);
    root_elem.append(posts_container);
    
    trigger_array[0].click(); //метод click() имитирует нажатие на кнопку с индексом 0
}


// {
    const data = [
        'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg',
        'https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg',
        'https://oir.mobi/uploads/posts/2021-05/1622284149_33-oir_mobi-p-prostoi-peizazh-priroda-krasivo-foto-38.jpg',
        'https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg',
        'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg'
    ]

    const gallary_container = document.createElement('div');
    gallary_container.classList.add('gallary_container');

    const content_elem = document.createElement('img');
    content_elem.classList.add('content')

    const trigger_container = document.createElement('div');
    trigger_container.classList.add('trigger_container');

    const trigger_array = data.map(()=> {
        const img_elem = document.createElement('div');
        img_elem.innerText = 'title'; //заменить на ссылку картинки добавить свойства картинки
        return img_elem
    })

    trigger_container.append(...trigger_array);
    

    gallary_container.append(content_elem, trigger_container);

    root_elem.append(gallary_container);

// }


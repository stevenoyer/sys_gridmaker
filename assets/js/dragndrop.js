const form = new SysForm()
const items = document.querySelectorAll('.item')
let box = document.querySelectorAll('.case')
let dragItem = null
let isNewItem = false

items.forEach((item) => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.addEventListener('dragstart', (e) => {
    box = document.querySelectorAll('.case')

    for (const empty of box)
    {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
    }
})

function dragStart()
{
    this.className += ' drag'
    setTimeout(() => (this.className = 'invisible'), 0)
    dragItem = this
}

function dragEnd()
{
    this.className = 'item'
    dragItem = null
}

function dragOver(e)
{
    e.preventDefault()
}

function dragEnter(e)
{
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave()
{
    this.className = 'case'
}

function dragDrop()
{
    this.className = 'case'
    this.className += ' dropped'

    if (!dragItem) return false

    let el = null

    let copy = dragItem.cloneNode(true)
    copy.classList.remove('invisible')

    let attr = dragItem.getAttribute('field')

    if (attr == 'input')
    {
        let input = form.input('text', '', 'Hello world', false, 'form-control')
        el = input
    }

    if (attr == 'textarea')
    {
        let textarea = form.textarea('textarea', 'Hello world', false, 'form-control')
        el = textarea
    }

    if (attr == 'select')
    {
        let array = [
            {
                value: '1',
                text: 'One'
            },
            {
                value: '2',
                text: 'Two'
            },
            {
                value: '3',
                text: 'Three'
            }
        ]
        let select = form.select('text', array, false, 'form-control')
        el = select
    }

    if (attr == 'button')
    {
        let button = form.button('button', 'submit', 'Envoyer', 'btn btn-primary', 'btn-submit')
        el = button
    }

    if (attr == 'image')
    {
        let image = form.image('https://source.unsplash.com/100x100', 'Generate image', 'image')
        el = image
    }

    if (attr == 'modal')
    {
        let modal = form.modal('modal', 'Hello world', 'Body modal', 'Footer modal', 'modal-lg')
        el = modal
    }

    if (el)
    {
        this.append(el)
    }

}
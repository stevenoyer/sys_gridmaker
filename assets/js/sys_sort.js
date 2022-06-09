window.addEventListener('drag', (e) => {
    if (e.target.classList.contains('case-inner'))
    {
        sortElInCase()
        sortList()
    }
})

function sortList()
{
    let containers = document.querySelectorAll('.case')
    let draggables = document.querySelectorAll('.case-inner')

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('drag')
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('drag')
        })
    })

    containers.forEach((container) => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.drag')
            if (afterElement == null)
            {
                container.appendChild(draggable)
            }
            else
            {
                container.insertBefore(draggable, afterElement)
            }
        })
    })

}

function getDragAfterElement(container, y)
{
    const draggableElements = [...container.querySelectorAll('.case-inner:not(.drag)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset)
        {
            return { offset: offset, element: child }
        }
        else
        {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

function sortElInCase()
{
    let items = document.querySelectorAll('.case-inner')
    let dragItem = null

    items.forEach((item) => {
        item.addEventListener('dragstart', (e) => {
            dragItem = e.target
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('text/html', null)
        })

        item.addEventListener('dragend', () => {
            dragItem = null
        })

        item.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        item.addEventListener('drop', (e) => {
            e.preventDefault()
            if (!e.target.parentNode) return false
            if (!dragItem) return false

            if (isBefore(dragItem, e.target))
            {
                e.target.parentNode.insertBefore(dragItem, e.target)
            }
            else
            {
                e.target.parentNode.insertBefore(dragItem, e.target.nextSibling)
            }
        })
    })
}

function isBefore(el1, el2)
{
    if (el2.parentNode === el1.parentNode)
    {
        for (let cur = el1.previousSibling; cur; cur = cur.previousSibling)
        {
            if (cur === el2)
            {
                return true
            }
        }
    }
    return false
}

function sortCase()
{

}
class SysForm
{

    input(type, name, placeholder, required, className)
    {
        let div = this.parentDiv()
        let input = document.createElement('input')
        input.type = type
        input.name = name
        input.placeholder = placeholder
        input.required = required
        input.className = className
        div.appendChild(input)
        this.setDataId(input)
        return div
    }

    textarea(name, placeholder, required, className)
    {
        let div = this.parentDiv()
        let textarea = document.createElement('textarea')
        textarea.name = name
        textarea.placeholder = placeholder
        textarea.required = required
        textarea.rows = 10
        textarea.className = className
        div.appendChild(textarea)
        this.setDataId(textarea)
        return div
    }

    select(name, options, required, className)
    {
        let div = this.parentDiv()
        let select = document.createElement('select')
        select.name = name
        select.required = required
        select.className = className
        for (let option of options)
        {
            let opt = document.createElement('option')
            opt.value = option.value
            opt.innerHTML = option.text
            select.appendChild(opt)
        }
        div.appendChild(select)
        this.setDataId(select)
        return div
    }

    button(type, name, value, className, id)
    {
        let div = this.parentDiv()
        let button = document.createElement('button')
        button.type = type
        button.name = name
        button.id = id
        button.className = className
        button.innerHTML = value
        div.appendChild(button)
        this.setDataId(button)
        return div
    }

    modal(id, title, body, footer, className)
    {
        let div = this.parentDiv()
        let modal = document.createElement('div')
        modal.id = id
        modal.className = className
        modal.innerHTML = `<div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">${title}</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        ${body}
                                    </div>
                                    <div class="modal-footer">
                                        ${footer}
                                    </div>
                                </div>
                            </div>`
        div.appendChild(modal)
        return div
    }

    image(src, alt, className)
    {
        let div = this.parentDiv()
        let image = document.createElement('img')
        image.src = src
        image.alt = alt
        image.className = className
        div.appendChild(image)
        this.setDataId(image)
        return div
    }

    parentDiv()
    {
        // Create element
        let div = document.createElement('div')
        let div_icon = document.createElement('div')
        let div_icon_close = document.createElement('div')
        let div_icon_edit = document.createElement('div')
        let span_close = document.createElement('span')
        let span_edit = document.createElement('span')

        // Append className
        div_icon_close.className = 'sys-icon-item close-element'
        div_icon_edit.className = 'sys-icon-item edit-element'

        div_icon.className = 'sys-icon-block'

        span_close.className = 'sys-icon sys-icon-close'
        span_edit.className = 'sys-icon sys-icon-edit'

        // Append element to div
        div_icon_close.appendChild(span_close)
        div_icon_edit.appendChild(span_edit)

        div_icon.appendChild(div_icon_edit)
        div_icon.appendChild(div_icon_close)

        div.appendChild(div_icon)

        div.className = 'mb-3 position-relative case-inner'
        div.draggable = true

        return div
    }

    formEdit(id, url, data, method, callback)
    {
        let form = document.createElement('form')
        form.id = id
        form.action = url
        form.method = method
        form.className = 'form-horizontal'
        form.innerHTML = data
        form.onsubmit = function ()
        {
            callback(this)
        }

        this.setDataId(form)
        return form
    }

    setDataId(el)
    {
        el.setAttribute('data-id', Date.now() + Math.floor(Math.random() * 1000))
    }

}
class SysPanel
{
    addRow(target)
    {
        let attr = target.getAttribute('columns')
        let tmpl = document.querySelector('#tmpl-sys-case-panel-col-12')
        
        if (attr == 2)
        {
            tmpl = document.querySelector('#tmpl-sys-case-panel-col-6')
        }

        if (attr == 3)
        {
            tmpl = document.querySelector('#tmpl-sys-case-panel-col-4')
        }

        if (attr == 4)
        {
            tmpl = document.querySelector('#tmpl-sys-case-panel-col-3')
        }

        let copyNode = tmpl.content.cloneNode(true)
        let destination = document.querySelector('.sys-row')
        destination.appendChild(copyNode)
    }

    deleteRow(target)
    {
        target.parentElement.parentElement.parentElement.remove()
    }

    editElement(el, opt)
    {
        console.log(el, opt)
        this.createModalAndShow('Edition de formulaire', 'Bonjour !', 'Pied de page !')
    }

    createModalAndShow(title, body, footer)
    {
        let modal = document.createElement('div')
        modal.className = 'modal fade'
        modal.id = 'sys-modal'
        modal.setAttribute('tabindex', '-1')
        modal.setAttribute('role', 'dialog')
        modal.setAttribute('aria-labelledby', 'sys-modal-title')
        modal.setAttribute('aria-hidden', 'true')
        modal.innerHTML = `<div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="sys-modal-title">${title}</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ${body}
                                    </div>
                                    <div class="modal-footer">
                                        ${footer}
                                    </div>
                                </div>
                            </div>`
        document.body.appendChild(modal)
        let showModal = new bootstrap.Modal(document.getElementById('sys-modal'))
        showModal.show()
    }
}
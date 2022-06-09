const panel = new SysPanel()

const btn_add_row = document.querySelectorAll('.btn-add-row')
const btn_delete_row = document.querySelectorAll('.btn-delete-row')
const sys_case_panel = document.querySelectorAll('.sys-case-panel')

let sys_case_panel_count = sys_case_panel.length

document.addEventListener('click', (e) => {
    // Add element
    if (e.target.classList.contains('btn-add-row'))
    {
        panel.addRow(e.target)
    }
    
    if (e.target.classList.contains('btn-delete-row'))
    {
        panel.deleteRow(e.target)
    }

    // Remove element
    if (e.target.classList.contains('close-element'))
    {
        e.target.parentElement.parentElement.remove()
    }

    if (e.target.classList.contains('sys-icon-close'))
    {
        e.target.parentElement.parentElement.parentElement.remove()
    }

    // Edit element
    if (e.target.classList.contains('sys-icon-edit'))
    {
        panel.editElement(e.target.parentElement.parentElement.parentElement, 'edit')
    }

    if (e.target.classList.contains('edit-element'))
    {
        panel.editElement(e.target.parentElement.parentElement, 'edit')
    }
})
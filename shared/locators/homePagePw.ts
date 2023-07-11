export enum homePagePwIds {
    filePickerNodeName = "//span[@data-cy='file-picker-node-name']",
    filePickerOpenButton = "button[data-cy='file-picker']",
    createNewTemplateDashboard = "div[data-cy='create-new-template-dashboard']",
    saveTemplateButton = "button[data-cy='save-this-template']",
    confirmButton = "button[data-cy='confirm-ok']",
    closeFilePicker = "button[data-cy='close-file-picker-dialog']",
    appEditor = "div[data-cy='app-editor']",
    fileNameInput = "input[data-cy='file-picker-file-input']",
    openFileIcon = "button[data-cy='open-file-filepicker']",

    // Pallete
    paletteBtnImage = "div[data-cy='palette-btn-image']",
    paletteBtnBlock = "div[data-cy='palette-btn-block']",
    paletteBtnText = "div[data-cy='palette-btn-text']",
    paletteBtnTable = "div[data-cy='palette-btn-table']",
    paletteBtnComment = "div[data-cy='palette-btn-comment']",
    palleteListIcon = "(//div[@data-cy='palette-btn-list']//div)[1]",

    // Table
    createButton = "button[data-cy='create-btn']",
    moreOptionsButton = "div[data-cy='more-options']",
    rowsNr = "input[data-cy='rows-nr']",
    colsNr = "input[data-cy='cols-nr']",
    addRowControlButton = "add-row-control-button",
    addColumnControlButton = "add-column-control-button",

    // Left panel
    outlineNodeList = "div[data-cy='outline-node-list']",
    outlineNodeBlock = "div[data-cy='outline-node-block']",
    outlineNodeTable = "div[data-cy='outline-node-table']",
    outlineNodeTableBody = "div[data-cy='outline-node-table-body']",
    outlineNodeTableRow = "div[data-cy='outline-node-table-row']",
    outlineNodeTableCell = "div[data-cy='outline-node-table-cell']",

    textInList = "//div[@class='tree-node node-list']//*[@data-cy='outline-node-text']",
    imageInList = "//div[@class='tree-node node-list']//*[@data-cy='outline-node-external-graphic']",

    iconPencil = "svg[data-cy='icon-pencil']",
    textAreaEdit = "textarea[data-cy='xpath-input']",
    textAreaDone = "button[data-cy='xpath-editor-done']",

    tableCellBlock = "//div[@data-cy='outline-node-table-cell']/../following-sibling::*//div[@data-cy='outline-node-block']",
    tableCellBlockChat = "//div[@data-cy='outline-node-table-cell']/../following-sibling::*//div[@data-cy='outline-node-block']",
    iconChatMessage = "div[data-cy='outline-node-comment']",

    // Editor
    editorMainWindow = ".itx-editor",
    emptyBlock = ".fo-block-empty",
    emptyText = "span.fo-contents.empty",
    editorImageIconPicture = "//div[@data-cy='app-editor']//*[@data-cy='icon-picture']",
    editorEmptyList = "//div[@data-cy='app-editor']//*[@class='fo-list-empty']",
    editorFilledList = "//div[contains(@class,'fo-list o-neutral')]",
    editorFilledListImage = "//div[contains(@class,'fo-list o-neutral')]//*[@data-cy='icon-picture']",

    // File picker
    testTemplate = "(//span[@data-cy='file-picker-node-name'][text()='TestTemplate.itx'])",
    contextItemDelete = "button[data-cy='context-item-DELETE']"
}
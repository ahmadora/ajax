<!-- Edit Modal HTML -->
<div id="editTaskModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="frmEditTask">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Task</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div id="edit-error-bag" class="alert alert-danger">
                        <ul id="edit-task-errors">
                        </ul>
                    </div>
                    <div class="form-group">
                        <label>name</label>
                        <input id="name" name="name" type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>price</label>
                        <input id="price" name="price" type="text" class="form-control" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" id="task_id" name="task_id" value="0">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <button type="button" class="btn btn-info" id="btn-edit" value="add">Update Task</button>
                </div>
            </form>
        </div>
    </div>
</div>

$(document).ready(function () {
    $("#btn-add").click(function () {
        $.ajaxSetup({
            headers:{
                'X-CSRF_TOkEN': $('meta[name = "csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url:'/products',
            data:{
                name: $('#frmAddTask input[name=name]').val(),
                price: $('#frmAddTask input[name=price]').val(),

            },
            dataType : 'json',
            success: function (data) {
                $('#frmAddTask').trigger("reset");
                $('#frmAddTask .close').click();
                window.location.reload();
            },
            error: function (data) {
                var errors = $.parseJSON(data.responseText);
                $('#add-task-errors').html('');
                $.each(errors.messages , function (key , value) {
                    $('#add-task-errors').append('<li>'+ value + '</li>')
                });
                $("#add-error-bag").show();
            }
        });
    });
    $("#btn-edit").click(function () {
        $.ajaxSetup({
            headers:{
                'X_CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'PUT',
            url: '/products/'+ $("#frmEditTask input[name=task_id]").val(),
            data:{
                name: $("#frmEditTask input[name=name]").val(),
                price: $("#frmEditTask input[name=price]").val(),
            },
            dataType:'json',
            success: function (data) {
                $('#frmEditTask').trigger("reset");
                $("#frmEditTask .close").click();
                window.location.reload();
            },
            error:function (data) {
                var errors = $.parseJSON(data.responseText);
                $('#edit-task-errors').html('');
                $.each(errors.messages, function (key , value) {
                    $("#edit-task-errors").append('<li>' + value + "</li>");
                });
                $("#edit-error-bag").show();
            }
        });
    });
    $("#btn-delete").click(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'DELETE',
            url: '/products/' + $("#frmDeleteTask input[name=task_id]").val(),
            dataType: 'json',
            success: function(data) {
                $("#frmDeleteTask .close").click();
                window.location.reload();
            },
            error: function(data) {
                console.log(data);
            }
        });
    });


});
function addTaskForm() {
    $(document).ready(function() {
        $("#add-error-bag").hide();
        $('#addTaskModal').modal('show');
    });
}
function editTaskForm(task_id) {
    $.ajax({
        type: 'GET',
        url: '/products/' + task_id,
        success: function(data) {
            $("#edit-error-bag").hide();
            $("#frmEditTask input[name=name]").val(data.product.name);
            $("#frmEditTask input[name=price]").val(data.product.price);
            $("#frmEditTask input[name=task_id]").val(data.product.id);
            $('#editTaskModal').modal('show');
        },
        error: function(data) {
            console.log(data);
        }
    });
}
function deleteTaskForm(task_id) {
    $.ajax({
        type: 'GET',
        url: '/products/' + task_id,
        success: function(data) {
            $("#frmDeleteTask #delete-title").html("Delete Task (" + data.product.name + ")?");
            $("#frmDeleteTask input[name=task_id]").val(data.product.id);
            $('#deleteTaskModal').modal('show');
        },
        error: function(data) {
            console.log(data);
        }
    });
}

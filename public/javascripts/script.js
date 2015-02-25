$(document).ready(function() {
    $("#loadDataBtn").on('click', function(e) {
        $.ajax({
            type: "get",
            url: "/api/get-data",
            data: {
                from: $("#from").val(),
                to: $("#to").val()
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(textStatus+"\n"+errorThrown);
            },
            success: function(data, textStatus, jqXHR) {
                chart.dataProvider = JSON.parse(data);
                chart.validateData();
            },
            complete: function(jqXHR, textStatus) {
                //
            }
        });
    });
});